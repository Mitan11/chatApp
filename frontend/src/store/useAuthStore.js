import { create } from 'zustand'
import { axiosObject } from '../lib/axios';
import toast from 'react-hot-toast';
import { useChatStore } from './useChatStore';
import { io } from 'socket.io-client'

const BASE_URL = import.meta.env.VITE_PUBLIC_SOCKET_URL;

export const useAuthStore = create((set, get) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    onlineUsers: [],
    isCheckingAuth: true,
    socket: null,

    checkAuth: async () => {
        try {
            const res = await axiosObject.get("/auth/check");

            set({ authUser: res.data });
            get().connectSocket();

        } catch (error) {
            console.log("Error in checkAuth:", error);
            set({ authUser: null });
        } finally {
            set({ isCheckingAuth: false });
        }
    },
    signup: async (formData) => {
        set({ isSigningUp: true });
        try {
            const res = await axiosObject.post("/auth/signup", formData);
            console.log(res)
            set({ authUser: res.data });
            toast.success("Account created successfully");
            get.connectSocket();
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            set({ isSigningUp: false });
        }
    },
    logout: async () => {
        try {
            await axiosObject.post("/auth/logout");
            set({ authUser: null });
            useChatStore.getState().setSelectedUser(null);
            toast.success("Logged out successfully");
            get().disconnectSocket()
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },
    login: async (formData) => {
        set({ isLoggingIn: true });
        try {
            const res = await axiosObject.post("/auth/login", formData);
            set({ authUser: res.data });
            toast.success("Logged in successfully");
            get().connectSocket();
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isLoggingIn: false });
        }
    },
    updateProfile: async (data) => {
        set({ isUpdatingProfile: true })
        try {
            const res = await axiosObject.put("/auth/update-profile", data);
            set({ authUser: res.data.updatedUser });
            console.log(res.data.updatedUser)
            toast.success("Profile updated successfully");
        } catch (error) {
            console.log("Error in updateProfile:", error);
            toast.error(error.response.data.message);
        } finally {
            set({ isUpdatingProfile: false })
        }
    },

    connectSocket: () => {
        const { authUser } = get();
        if (!authUser || get().socket?.connected) return;

        const socket = io(BASE_URL, {
            query: {
                userId: authUser._id,
            },
        });

        socket.connect();

        set({ socket: socket });

        socket.on("getOnlineUsers", (userIds) => {
            set({ onlineUsers: userIds });
        });
    },

    disconnectSocket: () => {
        if (get().socket?.connected) get().socket.disconnect();
    },

}));
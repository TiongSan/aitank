

import { LobbyRoomInfo, Region } from '../types';

// Hardcoded URL as requested
let SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwFB2G87_i4g8Kk_3wU4BlWLjYqdaZaNvWLeiZk9Nee0nw9rWL5MOk1-1BNhbU0WvZH1w/exec'; 

export const setScriptUrl = (url: string) => {
    SCRIPT_URL = url;
    try {
        localStorage.setItem('rtw_script_url', url);
    } catch(e) {}
};

export const getSavedScriptUrl = () => {
    try {
        return localStorage.getItem('rtw_script_url') || SCRIPT_URL;
    } catch(e) {
        return SCRIPT_URL;
    }
};

export const fetchLobbyRooms = async (): Promise<LobbyRoomInfo[]> => {
    if (!SCRIPT_URL) return [];
    try {
        // Mode 2: ?cmd=list
        const response = await fetch(`${SCRIPT_URL}?cmd=list`);
        if (!response.ok) throw new Error('Network err');
        const data = await response.json();
        
        // Sanitize data: Ensure roomId is a string to prevent "roomId.trim is not a function" errors
        return (data as any[]).map((r: any) => ({
            ...r,
            roomId: String(r.roomId)
        })) as LobbyRoomInfo[];
    } catch (e) {
        console.error("Failed to fetch lobby:", e);
        return [];
    }
};

export const heartbeatRoom = async (
    roomId: string, 
    hostName: string, 
    roomName: string,
    region: Region, 
    playerCount: number, 
    botCount: number
) => {
    if (!SCRIPT_URL) return;
    try {
        // Format the name to include room name if provided: "My Room (@Host)"
        const displayName = roomName && roomName.trim() !== "" 
            ? `${roomName} (@${hostName})` 
            : hostName;

        // Mode 1: ?cmd=update...
        const params = new URLSearchParams({
            cmd: 'update',
            id: roomId,
            name: displayName,
            region: region,
            count: playerCount.toString(),
            bots: botCount.toString()
        });
        
        // fire and forget, don't await strictly
        fetch(`${SCRIPT_URL}?${params.toString()}`, { mode: 'no-cors' });
    } catch (e) {
        console.error("Heartbeat failed:", e);
    }
};

import axios from "axios";

const API_BASE_URL = "http://localhost:3000"; 

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createPartner = (partnerData) => api.post("/partners", partnerData);
export const getAllPartners = (search, sort) =>
  api.get("/partners", { params: { search, sort } });
export const getPartnerById = (id) => api.get(`/partners/${id}`);
export const updatePartner = (id, data) => api.put(`/partners/${id}`, data);
export const deletePartner = (id) => api.delete(`/partners/${id}`);

export const sendPartnerRequest = (id, userEmail) =>
  api.post(`/partners/${id}/request`, { userEmail });
export const getMyPartners = (email) => api.get(`/my-connections/${email}`);
export const getMyConnections = (email) => api.get(`/my-connections/${email}`);
export const deleteConnection = (requestId) => api.delete(`/my-connections/${requestId}`);
export const updateConnection = (requestId, data) => api.put(`/my-connections/${requestId}`, data);

export default api;

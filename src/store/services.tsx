import create from 'zustand';
import axios from 'axios';
import { Service } from '../models/service';

interface State {
  servicios: Service[];
  setServicios: (servicios: Service[]) => void;
  fetchServicios: () => Promise<void>;
  createServicio: (servicio: Service) => Promise<void>;
  updateServicio: (id: string, servicio: Service) => Promise<void>;
  deleteServicio: (id: string) => Promise<void>;
}

export const useStore = create<State>((set, get) => ({
  servicios: [],
  setServicios: (servicios) => set({ servicios }),
  fetchServicios: async () => {
    try {
      const response = await axios.get('http://localhost:3001/services');
      console.log(response.data)
      get().setServicios(response.data);
    } catch (error) {
      console.error('Error al obtener los servicios:', error);
    }
  },
  createServicio: async (servicio) => {
    try {
      const response = await axios.post('/api/servicios', servicio);
      get().setServicios([...get().servicios, response.data]);
    } catch (error) {
      console.error('Error al crear el servicio:', error);
    }
  },
  updateServicio: async (id, servicio) => {
    try {
      await axios.put(`/api/servicios/${id}`, servicio);
      const updatedServicios = get().servicios.map((s) =>
        s._id === id ? { ...s, ...servicio } : s
      );
      get().setServicios(updatedServicios);
    } catch (error) {
      console.error('Error al actualizar el servicio:', error);
    }
  },
  deleteServicio: async (id) => {
    try {
      await axios.delete(`/api/servicios/${id}`);
      const updatedServicios = get().servicios.filter((s) => s._id !== id);
      get().setServicios(updatedServicios);
    } catch (error) {
      console.error('Error al eliminar el servicio:', error);
    }
  },
}));

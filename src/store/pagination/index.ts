import { create } from "zustand";

type PaginationStore = {
  currentPage: number;
  itemsPerPage: number;
  total: number;
  setTotal: (total: number) => void;
  setCurrentPage: (pageNumber: number) => void;
  setItemsPerPage: (itemsPerPage: number) => void;
  updatePagePosition: (pagePositionDelta: number) => void;
};

const usePaginationStore = create<PaginationStore>((set) => ({
  currentPage: 0,
  itemsPerPage: 12,
  total: 0,
  setCurrentPage: (pageNumber: number) =>
    set((state) => ({
      ...state,
      currentPage: pageNumber < 0 ? 0 : pageNumber,
    })),
  setItemsPerPage: (itemsPerPage: number) =>
    set((state) => ({ ...state, itemsPerPage: itemsPerPage })),
  updatePagePosition: (pagePositionDelta: number) =>
    set((state) => ({
      ...state,
      currentPage:
        state.currentPage + pagePositionDelta < 0
          ? 0
          : state.currentPage + pagePositionDelta,
    })),
  setTotal: (total: number) => set((state) => ({ ...state, total })),
}));

const usePaginationMyPokemonStore = create<PaginationStore>((set) => ({
  currentPage: 0,
  itemsPerPage: 12,
  total: 0,
  setCurrentPage: (pageNumber: number) =>
    set((state) => ({
      ...state,
      currentPage: pageNumber < 0 ? 0 : pageNumber,
    })),
  setItemsPerPage: (itemsPerPage: number) =>
    set((state) => ({ ...state, itemsPerPage: itemsPerPage })),
  updatePagePosition: (pagePositionDelta: number) =>
    set((state) => ({
      ...state,
      currentPage:
        state.currentPage + pagePositionDelta < 0
          ? 0
          : state.currentPage + pagePositionDelta,
    })),
  setTotal: (total: number) => set((state) => ({ ...state, total })),
}));

export { usePaginationMyPokemonStore, usePaginationStore };


import { createAppSlice } from "@/lib/createAppSlice";

export type TFilter = {
  search: string;
  status: string;
  priorities: string[];
};

export interface IFilterState {
  filters: TFilter;
}

const initialState: IFilterState = {
  filters: {
    search: "",
    status: "All",
    priorities: [],
  },
};

export const filtersSlice = createAppSlice({
  name: "filters",
  initialState,
  reducers: (create) => ({
    searchFilterChange: (state, action) => {
      // mutation || IMMER
      state.filters.search = action.payload;
    },
    statusFilterChange: (state, action) => {
      state.filters.status = action.payload;
    },
    prioritiesFilterChange: (state, action) => {
      state.filters.priorities = action.payload;
    },
  }),

  // selectors: {
  //   searchFilter: (filters) => filters.search
  // }
});

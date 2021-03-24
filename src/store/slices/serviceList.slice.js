import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchServiceCat = createAsyncThunk(
  "serviceCategory/fetch",
  async () => {
    return new Promise((resolver) =>
      setTimeout(
        resolver([
          {
            name: "Laundry",
            icon: "fa-tshirt",
            subCategory: [
              {
                name: "Cloth Washing",
                icon: "fa-tshirt",
                serviceItems: [
                  {
                    id: 1,
                    name: "Wash Undies",
                    icon: "fa-tshirt",
                    cost: 100,
                  },

                  {
                    id: 2,
                    name: "Wash Baby Wear",
                    icon: "fa-utensils",
                    cost: 100,
                  },

                  {
                    id: 3,
                    name: "Wash Bed Sheets",
                    icon: "fa-broom",
                    cost: 100,
                  },
                ],
              },

              {
                name: "House Clean",
                icon: "fa-utensils",
                serviceItems: [
                  {
                    id: 1,
                    name: "Clean Electronics",
                    icon: "fa-tshirt",
                    cost: 100,
                  },

                  {
                    id: 2,
                    name: "Mop the floor",
                    icon: "fa-utensils",
                    cost: 100,
                  },

                  {
                    id: 3,
                    name: "Clean Garage",
                    icon: "fa-broom",
                    cost: 100,
                  },
                ],
              },

              {
                name: "Environment Cleaning",
                icon: "fa-broom",
                serviceItems: [
                  {
                    id: 1,
                    name: "Dispose Refuse",
                    icon: "fa-tshirt",
                    cost: 100,
                  },

                  {
                    id: 2,
                    name: "Clean Kitchen",
                    icon: "fa-utensils",
                    cost: 100,
                  },

                  {
                    id: 3,
                    name: "Mow the Lawn",
                    icon: "fa-broom",
                    cost: 100,
                  },
                ],
              },
            ],
          },

          {
            name: "Cooking",
            icon: "fa-utensils",
            subCategory: [
              {
                name: "Laundry",
                icon: "fa-tshirt",
                serviceItems: [
                  {
                    id: 1,
                    name: "Laundry",
                    icon: "fa-tshirt",
                    cost: 100,
                  },

                  {
                    id: 2,
                    name: "Cooking",
                    icon: "fa-utensils",
                    cost: 100,
                  },

                  {
                    id: 3,
                    name: "Home Cleaning",
                    icon: "fa-broom",
                    cost: 100,
                  },
                ],
              },

              {
                name: "Cooking",
                icon: "fa-utensils",
                serviceItems: [
                  {
                    id: 1,
                    name: "Laundry",
                    icon: "fa-tshirt",
                    cost: 100,
                  },

                  {
                    id: 2,
                    name: "Cooking",
                    icon: "fa-utensils",
                    cost: 100,
                  },

                  {
                    id: 3,
                    name: "Home Cleaning",
                    icon: "fa-broom",
                    cost: 100,
                  },
                ],
              },

              {
                name: "Home Cleaning",
                icon: "fa-broom",
                serviceItems: [
                  {
                    id: 1,
                    name: "Laundry",
                    icon: "fa-tshirt",
                    cost: 100,
                  },

                  {
                    id: 2,
                    name: "Cooking",
                    icon: "fa-utensils",
                    cost: 100,
                  },

                  {
                    id: 3,
                    name: "Home Cleaning",
                    icon: "fa-broom",
                    cost: 100,
                  },
                ],
              },
            ],
          },

          {
            name: "Home Cleaning",
            icon: "fa-broom",
            subCategory: [
              {
                name: "Laundry",
                icon: "fa-tshirt",
                serviceItems: [
                  {
                    id: 1,
                    name: "Laundry",
                    icon: "fa-tshirt",
                    cost: 100,
                  },

                  {
                    id: 2,
                    name: "Cooking",
                    icon: "fa-utensils",
                    cost: 100,
                  },

                  {
                    id: 3,
                    name: "Home Cleaning",
                    icon: "fa-broom",
                    cost: 100,
                  },
                ],
              },

              {
                name: "Cooking",
                icon: "fa-utensils",
                serviceItems: [
                  {
                    id: 1,
                    name: "Laundry",
                    icon: "fa-tshirt",
                    cost: 100,
                  },

                  {
                    id: 2,
                    name: "Cooking",
                    icon: "fa-utensils",
                    cost: 100,
                  },

                  {
                    id: 3,
                    name: "Home Cleaning",
                    icon: "fa-broom",
                    cost: 100,
                  },
                ],
              },

              {
                name: "Home Cleaning",
                icon: "fa-broom",
                serviceItems: [
                  {
                    id: 1,
                    name: "Laundry",
                    icon: "fa-tshirt",
                    cost: 100,
                  },

                  {
                    id: 2,
                    name: "Cooking",
                    icon: "fa-utensils",
                    cost: 100,
                  },

                  {
                    id: 3,
                    name: "Home Cleaning",
                    icon: "fa-broom",
                    cost: 100,
                  },
                ],
              },
            ],
          },
        ]),
        20000
      )
    );
  }
);
const serviceCatSlice = createSlice({
  name: "serviceCategory",
  initialState: {
    value: [],
    error: null,
    status: "idle" | "loading" | "succeeded",
  },
  reducers: {
    addServiceCategories(state, action) {
      state.value.push(...action.payload);
    },
  },

  extraReducers: {
    [fetchServiceCat.fulfilled]: (state, action) => {
      state.error = null;
      state.status = "succeeded";
      state.value = action.payload;
    },

    [fetchServiceCat.rejected]: (state, action) => {
      state.error = action.payload.message;
    },

    [fetchServiceCat.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
  },
});

export default serviceCatSlice.reducer;
export const { addServiceCategories } = serviceCatSlice.actions;

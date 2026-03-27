import {
  DataProvider,
  GetListParams,
  GetListResponse,
  BaseRecord,
} from "@refinedev/core";
import { universityCourses } from "@/constants/mock-subject-data";

export const dataProvider: DataProvider = {
  getList: async <Tdata extends BaseRecord = BaseRecord>({
    resource,
  }: GetListParams): Promise<GetListResponse<Tdata>> => {
    if (resource != "subjects") {
      return { data: [] as Tdata[], total: 0 };
    }
    return {
      data: universityCourses as unknown as Tdata[],
      total: universityCourses.length,
    };
  },
  getOne: async () => {
    throw new Error("This function is not present in mock");
  },
  create: async () => {
    throw new Error("This function is not present in mock");
  },
  update: async () => {
    throw new Error("This function is not present in mock");
  },
  deleteOne: async () => {
    throw new Error("This function is not present in mock");
  },

  getApiUrl: () => "",
};

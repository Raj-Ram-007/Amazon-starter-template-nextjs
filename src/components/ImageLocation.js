import axios from "axios";
import { useQuery } from "react-query";

export default function Cache() {
  return useQuery(
    "image_loc",
    async () => {
      const { data } = await axios.get(
        // "http://127.0.0.1:3000/api/backendv1/getproduct"
        "http://localhost:3000/api/backendv1/getstatus"
      );

      console.log("data >", data);

      return data;
    },
    { staleTime: 1000 * 60 * 60, refetchOnWindowFocus: false }
  );
}

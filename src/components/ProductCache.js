import axios from "axios";
import { useQuery } from "react-query";

export default function Cache() {
  return useQuery("products", async () => {
    const { data } = await axios.get(
      "http://localhost:3000/api/backendv1/getproduct"
    );
    return data;
  });
}

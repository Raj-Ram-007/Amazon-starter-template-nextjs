import axios from "axios";
import { useQuery } from "react-query";

// export default function ProductCache() {
//   console.log("In ProductCache");

//   return useQuery(
//     "products",
//     async () => {
//       const { data } = await axios.get(
//         "http://localhost:3000/api/backendv1/getproduct"
//       );

//       return data;
//     },
//     { staleTime: 1000 * 60 * 60, refetchOnWindowFocus: false }
//   );
// }

export default function ProductCache(callingproc) {
  console.log("ProductCache called by : ", callingproc);
  // works:
  // return useQuery(
  //   "products",
  //   () => axios.get("http://localhost:3000/api/backendv1/getproduct"),
  //   { staleTime: 1000 * 60 * 60, refetchOnWindowFocus: false }
  // );

  return useQuery(
    "products",
    () =>
      axios
        .get("http://localhost:3000/api/backendv1/getproduct")
        .then((res) => res.data),
    { staleTime: 1000 * 60 * 60, refetchOnWindowFocus: false }
  );
}

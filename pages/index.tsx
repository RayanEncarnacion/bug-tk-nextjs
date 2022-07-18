import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    if (query.hasOwnProperty("toast")) {
      toast("Ha sido autenticado exitosamente!", { type: "success" });
    }
  }, [query]);

  return <div className="w-full h-screen"></div>;
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   return {
//     props: { text: "This is the home page!" },
//   };
// };

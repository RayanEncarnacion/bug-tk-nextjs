import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import sessionAdapter from "adapters/sessionAdapter";

export default function Settings() {
  return <div>Esta logeado!</div>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const adaptedSession = sessionAdapter(session);

  return {
    props: { session: adaptedSession },
  };
};

import { Session } from "next-auth";
import { AdaptedSession } from "../additional";

const sessionAdapter = (session: Session): AdaptedSession => ({
    expires: session.expires || "",
    name: session.user?.name || "",
    email: session.user?.email || "",
    image: session.user?.image || "",
  });

export default sessionAdapter;
import { useSession } from "next-auth/client";

function ShowUser() {
  const [session] = useSession();

  var a;

  if (session) {
    if (session.user.name !== undefined) {
      a = session.user.name;
    } else {
      a = session.user.email;
    }
  } else {
    a = "Sign In";
  }

  return <div>{a}</div>;
  // return <div>a</div>;
}

export default ShowUser;

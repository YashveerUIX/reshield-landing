import { signIn, signOut, useSession } from "next-auth/react";

import { useMixPanel } from "hooks/useMixpanel";

export default function Home() {
  const { data: session, ...args } = useSession();
  const { actions } = useMixPanel();

  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
      <button
        onClick={() => {
          actions.track("Signed Up", {
            "Signup Type": "Referral",
          });
        }}
      >
        Mix
      </button>
    </>
  );
}

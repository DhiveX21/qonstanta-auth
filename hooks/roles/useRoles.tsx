import { IRoles } from "@/_types/users.type";
import React from "react";
import { useSession } from "next-auth/react";

const useRoles = () => {
  const session: any = useSession();

  const IsTryoutStudent = (children: any) => {
    const isHaveRoles = session?.data?.credentials?.studentData?.roles.some(
      (item: IRoles) => item.short_name === "tryout"
    );

    return isHaveRoles ? children : null;
  };

  return IsTryoutStudent;
};

export default useRoles;

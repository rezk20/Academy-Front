"use client";

import React, { FC, useState } from "react";
import Heading from "./utils/Heading";

interface Props {}

const Page: FC<Props> = (props) => {
  return (
    <div>
      <Heading
        title="Academy"
        description="Learning Mangemnt system"
        keywords="lms, learning, management, system"
        iconHref="favicon.ico"
      />
    </div>
  );
};

export default Page;

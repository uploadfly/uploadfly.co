import { useMDXComponent } from "next-contentlayer/hooks";

const MDX = ({ code }: { code: string }) => {
  const MDXContent = useMDXComponent(code);

  return <MDXContent />;
};

export default MDX;

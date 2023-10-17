import Footer from "@/components/Footer";

export const metadata = {
  title: "Changelog  • UploadFly",
};

const ChangelogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default ChangelogLayout;

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-6 px-10">
      <a href="">
        <img src="/logo.svg" alt="Logo" className="w-14" />
      </a>
      <div className=""></div>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/uploadfly"
          target="_blank"
          className="font-semibold"
        >
          Login
        </a>
        <a
          href="https://app.uploadfly.cloud/request"
          target="_blank"
          className="px-5 py-2 font-semibold border-2 rounded-full"
        >
          Get started
        </a>
      </div>
    </div>
  );
};

export default Navbar;

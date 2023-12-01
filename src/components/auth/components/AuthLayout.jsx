export const AuthLayout = ({ children }) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <section className="w-[320px]">{children}</section>
    </div>
  );
};

const Container = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="max-w-screen-md mx-auto mt-24 px-4">
      <div className="flex flex-col md:flex-row gap-6 border border-white ">
        {children}
      </div>
    </div>
  );
};

export default Container;

const Container = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="max-w-screen-md mx-auto mt-15 px-4  p-1">
        {children}
      </div>
    
  );
};

export default Container;

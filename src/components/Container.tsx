const Container = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="max-w-screen-md mx-auto mt-24 px-4 border border-amber-50">
        {children}
      </div>
    
  );
};

export default Container;

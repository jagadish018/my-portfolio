const Container = (parameters: { children?: React.ReactNode }) => {
  return (
    <div className=" max-w-screen-xl mt-24 mx-96 border border-white ">
      {parameters.children}
    </div>
  );
};

export default Container;

const Container = (parameters: { children?: React.ReactNode }) => {
  return (
    <div className=" max-w-[786px]  m-auto  mt-24  border border-white ">
      {parameters.children}
    </div>
  );
};

export default Container;

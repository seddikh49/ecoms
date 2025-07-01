const Container = ({ children }) => {
  return (
    <div className="max-w-screen-xl text-gray-600 mx-auto px-4 flex justify-between gap-7 w-full ">
      {children}
    </div>
  );
};

export default Container;
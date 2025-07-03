const Container = ({ children, className }) => {
  return (
    <div className={`max-w-screen-xl text-gray-600 mx-auto px-4  ${className}  `}>
      {children}
    </div>
  );
};

export default Container;
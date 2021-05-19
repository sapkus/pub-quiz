const CardLight = (props) => {
  
  return (
    <div className="bg-light  w-50 me-md-3 text-center overflow-hidden">
      {props.children}
    </div>
  );
};

export default CardLight;




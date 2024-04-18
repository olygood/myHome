import "../../app/globals.css";


type TuilesGamesProps = {
  name: string;
  img: string;
};

const Tuiles_games = ({name,img}:TuilesGamesProps) => {
  return (
    <div className="tuile relative border-2 border-blue-600 text-white h-full">
      <h2 className="text-anton absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-color-yellow text-center z-10">{name}</h2>
      <div className="absolute inset-0">
    <img src={img} alt="tuile" className="border-2 h-full w-full object-cover opacity-85" style={{filter:"brightness(70%)"}}
     onMouseOver={(e) => e.currentTarget.style.filter = ""} 
     onMouseOut={(e) => e.currentTarget.style.filter = "brightness(70%)"} 
    />
  </div>
    </div>
  );
}

export default Tuiles_games;
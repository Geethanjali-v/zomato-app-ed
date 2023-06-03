import {Link} from "react-router-dom";
const QuickDisplay = (props) => {
    const listMeal = ({ mealData }) => {
      if (mealData) {
        return mealData.map((item) => {
          return (
            // <Link key={item._id} to={`/listing/${item.mealtype_id}`}>
            <Link key={item._id} to={`/listing/${item.mealtype_id}`}>
              <div className="tileContainer">
                <div className="tileItem1">
                  <img src={item.meal_image} alt={item.mealtype} />
                </div>
                <div className="tileItem2">
                  <div className="tileheading">{item.mealtype}</div>
                  <div className="tilesubHeading">{item.content}</div>
                </div>
              </div>
              </Link>
          );
        });
      }
    };
  
    return (
      <>
        <div className="mainTileContainer">{listMeal(props)}</div>
      </>
    );
  };
  
  export default QuickDisplay;
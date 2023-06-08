import "./App.css";

const Box = ({ items }: { items: Array<number> }) => {
  /*
        [
           persons[[1,2,3],[2,4,4],[2,1],[10],[12]]
        ]
    */

  return (
    <div className="box">
      {items.map((item, index) => {
        return (
          <div className="boxItem" key={index}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Box;

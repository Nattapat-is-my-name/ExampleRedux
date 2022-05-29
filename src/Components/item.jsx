import "../Main.css";
import { connect } from "react-redux";
import { Card, CardBody } from "reactstrap";
import { Button } from "bootstrap";
function Item(props) {
  console.log(props);
  return (
    <div className=" d-flex justify-content-center" style={{ padding: 50 }}>
      <div className=" post-container col-md-4 mb-3">
        <h1 className="post_heading">List Post</h1>
        <div>
          {props.todos.todos.map((item) => (
            <>
              <h1>{item.id}</h1>
              <h1>{item.title}</h1>
              <h1>{item.message}</h1>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
export default connect((state) => ({ ...state }))(Item);

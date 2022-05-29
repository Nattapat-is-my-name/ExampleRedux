import { Component, React } from "react";
import Button from "react-bootstrap/Button";
import { addtodos } from "../Reducers/defaultStore";
import { connect } from "react-redux";
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      message: "",
    };
  }
  addtodos = () => {
    this.props.addtodos({
      title: this.state.title,
      message: this.state.message,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.state.title;
    const message = this.state.message;
    const data = {
      title,
      message,
    };
   this.addtodos()
  };
  render() {
    console.log(this.props);
    return (
      <div className=" d-flex justify-content-center" style={{ padding: 50 }}>
        <div className=" post-container col-md-4 mb-3">
          <h1 className="post_heading">Create Post</h1>

          <form className="form" onSubmit={this.handleSubmit}>
            <input
              class="form-control"
              type="text"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
              placeholder="Enter post title"
              required
            />
            <br />
            <br />
            <textarea
              class="form-control"
              cols="30"
              value={this.state.message}
              onChange={(e) => this.setState({ message: e.target.value })}
              rows="5"
              placeholder="Enter post"
              required
            />
            <br />
            <br />
            <Button type="submit" variant="primary">
              Primary
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
export default connect((state) => ({ ...state }), { addtodos })(Post);

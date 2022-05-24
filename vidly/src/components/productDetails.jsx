import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

// Class değil de fonksiyon olarak tanımlı olsaydı aşağıdaki yöntemle
// id alınabilirdi.
// const ProductDetails = () => {
//   // const params = useParams();
//   // console.log(params);
//   const { id } = useParams();

//   return (
//     <div>
//       <h1>Product Details - {id} </h1>
//       {/* <button onClick={this.handleSave}>Save</button> */}
//     </div>
//   );
// };

function withParams(Component) {
  return props => (
    <Component
      {...props}
      params={useParams()}
    />
  );
}

class ProductDetails extends Component {
  state = { id: 0 };

  componentDidMount() {
    const { id } = this.props.params;
    this.fetchData(id);
  }

  fetchData = id => {
    this.setState({ id });
  };

  handleSave = () => {
    // Navigate to /products
  };

  render() {
    const { id } = this.state;

    return (
      <div>
        <h1>Product Details - {id} </h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default withParams(ProductDetails);

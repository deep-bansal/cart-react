import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    }

    this.db = firebase.firestore();
  }

 

  componentDidMount() {

    //here refreshing doesn't takes place therefor we goona apply another method of onsnapshot
    // firebase
    // .firestore()
    // .collection('products')
    // .get()
    // .then((snapshot) => {
    //   console.log('hii');
    //   console.log(snapshot);

    //   snapshot.docs.map((doc) => {
    //     console.log(doc.data());
    //   });

    //   const products = snapshot.docs.map((doc) => {
    //     const data = doc.data();
    //     data['id'] = doc.id;
    //     return data;
    //   })

    //   this.setState({
    //     products,
    //     loading : false
    //   })
    // })

      this.db
    .collection('products')
    .onSnapshot((snapshot) => {
      console.log('hii');
      console.log(snapshot);

      snapshot.docs.map((doc) => {
        console.log(doc.data());
      });

      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      })

      this.setState({
        products,
        loading : false
      })
    })
  }

  handleIncreaseQuantity = (product) => {
    // console.log('product',product);
    const { products } = this.state;
    const index = products.indexOf(product);

    // products[index].qty += 1;

    // this.setState({
    //   products
    // })

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
    .update({
      qty: products[index].qty +1
    })
    .then(() =>{
      console.log("Updated Successfully");      
    }) 
    .catch((error)=>{
      console.log("Error in updating",error);
    })
  }

  handleDecreaseQuantity = (product) => {
    // console.log('product',product);

    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    // products[index].qty -= 1;

    // this.setState({
    //   products,
      
    // })

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
    .update({
      qty: products[index].qty - 1
    })
    .then(() =>{
      console.log("Updated Successfully");      
    }) 
    .catch((error)=>{
      console.log("Error in updating",error);
    })
  }

  handleDeleteQuantity = (id) => {
    // const { products } = this.state;

    // const items = products.filter((item) => item.id !== id); // it will return me products in form of array whose id != given id

    // this.setState({
    //   products: items
    // })

    const docRef = this.db.collection('products').doc(id);

    docRef
    .delete()
    .then(() =>{
      console.log("Deleted Successfully");      
    }) 
    .catch((error)=>{
      console.log("Error in updating",error);
    })
    
  }

  getCartCount = () =>{
    const {products} = this.state;

    let count =0;
    
    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;

    let cartTotal = 0;

    products.forEach((product) => {
      cartTotal += product.qty * product.price;
    })

    return cartTotal;

  }

  addProduct = () => {
    this.db
    .collection('products')
    .add({
      image: '',
      price: 900,
      qty: 2,
      title:'Laptop'
    })
    .then((docRef) =>{
      console.log('Product has been added',docRef);
    })
    .catch((error) =>{
      console.log('Error:',error);
    })

  }

  render() {

    const {products, loading} = this.state;
    return (

      <div className="App">
        <Navbar count = {this.getCartCount()} />
        {/* <button onClick = {this.addProduct} style = {{padding:20, fontSize:20}}>Add a Product</button> */}
        <Cart 
         products = {products}
         onIncreaseQuantity = {this.handleIncreaseQuantity}
         onDecreaseQuantity = {this.handleDecreaseQuantity}
         onDeleteQuantity = {this.handleDeleteQuantity} />
         {loading && <h1>Loading Products ...</h1>}
         <div style = {{fontSize: 20, padding: 10}}>
           TOTAL: {this.getCartTotal()}
         </div>
      </div>
      
    );
  }

}



export default App;

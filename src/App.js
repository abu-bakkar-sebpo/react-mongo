
import { useRef } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  const dateRef = useRef('');
  const photoUrlRef = useRef('');
  const supplierRef = useRef('');
  const productCategoryRef = useRef('');
  const productNameRef = useRef('');
  const productQuantityRef = useRef('');
  const productUnitPriceRef = useRef('');
  const productTotalPriceRef = useRef('');
  const productSupplierList =['square','acme','incepta','beximco','aci'];
  const productCategoryList =['injection','tablet','inheler','cirap'];
  const productNameList = ['Abacavir','Acetazolamide','Aciclovir','Ampicillin'];

  const handleSubmit = e =>{
    e.preventDefault();
    const date = dateRef.current.value;
    const photoUrl = photoUrlRef.current.value;
    const supplier = supplierRef.current.value;
    const productName = productNameRef.current.value;
    const productCategory = productCategoryRef.current.value;
    const productQuantity = productQuantityRef.current.value;
    const productUnitPrice = productUnitPriceRef.current.value;
    const productTotalPrice = productTotalPriceRef.current.value;
    const user = {date,photoUrl,supplier,productName,productCategory,productQuantity,productUnitPrice,productTotalPrice}

    fetch('http://localhost:5000/user',{
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
    .then(res=>res.json())
    .then(response=>{console.log(response)})
  }
  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Date</Form.Label>
            <Form.Control ref={dateRef} type="date" placeholder="Enter Name" />
          </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Photo Url</Form.Label>
            <Form.Control ref={photoUrlRef} type="text" placeholder="Photo Url" />
          </Form.Group>
          </Col>
          
      
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Choose Supplier</Form.Label>
            <Form.Select ref={supplierRef} defaultValue="Choose...">
              <option>Choose Supplier</option>
              {productSupplierList.map(sup=><option>{sup}</option>)}
            </Form.Select>
         </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>productCategoryRef</Form.Label>
            <Form.Select ref={productCategoryRef} defaultValue="Choose...">
              <option>Choose Product Category</option>
              {productCategoryList.map(category=><option>{category}</option>)}
            </Form.Select>
         </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Product Name</Form.Label>
            <Form.Select ref={productNameRef} defaultValue="Choose...">
              <option>Choose product</option>
              {productNameList.map(name=><option>{name}</option>)}
            </Form.Select>
         </Form.Group>
        </Row>
        <Row>
        <Col>
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Product Quantity</Form.Label>
            <Form.Control  ref={productQuantityRef} type="text" placeholder="Product Quantity" />
          </Form.Group>
          </Col>
        <Col>
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Product Unit Price</Form.Label>
            <Form.Control ref={productUnitPriceRef} type="text" placeholder="Product Unit Price" />
          </Form.Group>
          </Col>
        <Col>
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Product Total Price</Form.Label>
            <Form.Control ref={productTotalPriceRef} type="text" placeholder="Product Total Price" />
          </Form.Group>
          </Col>
        </Row>
        

        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;

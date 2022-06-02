import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components/Message"
import CheckoutSteps from "../components/CheckoutSteps"
import { createOrder } from "../actions/orderActions"

const PlaceOrderScreen = ({history}) => {

    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
    
    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)

    cart.shippingPrice = cart.itemsPrice > 300 ? 0 : 20

    cart.taxPrice = Number((0.04 * cart.itemsPrice).toFixed(2))

    cart.totalPrice = Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)

    const orderCreate = useSelector((state) => state.orderCreate)
    const { order, success, error } = orderCreate

    useEffect(() => {
        if(success) {
            history.push(`/order/${order._id}`)
        }
    }, [history, success])

    const placeOrderHandler = () => {
        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            taxPrice: cart.taxPrice,
            totalPrice:  cart.totalPrice
        }))
    }
    
    return (
        <>
          <CheckoutSteps step1 step2 step3 step4 />
            <Row>
                <Col md={8}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p>
                             <strong>Address: </strong>
                             {cart.shippingAddress.address},{" "}
                             {cart.shippingAddress.city},{" "}
                             {cart.shippingAddress.postalCode},{" "}
                             {cart.shippingAddress.country} 
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <strong>Method: </strong>
                            {console.log(cart.paymentMethod)}
                            {cart.paymentMethod}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>Your Orders: </h2>
                          {cart.cartItems.length === 0 ? <Message>
                              Your Cart Is Empty
                          </Message> : (
                              <ListGroup variant="flush">
                                  {cart.cartItems.map((item, index) => (
                                      <ListGroup.Item key={index}>
                                          <Row>
                                              <Col md={1}>
                                                 <Image src={item.image} alt={item.name} fluid
                                                  rounded />
                                              </Col>
                                              <Col>
                                                <Link to={`/product/${item.product}`}>
                                                    {item.name}
                                                </Link>
                                              </Col>
                                              <Col md={4}>
                                                {item.qty} x {"  "} <i className="fas fa-rupee-sign"></i>{item.price} = 
                                                 {" "}<i className="fas fa-rupee-sign"></i> {item.qty * item.price}
                                              </Col>

                                            
                                          </Row>
                                      </ListGroup.Item>
                                  ))}
                              </ListGroup>
                          )}  
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4}>
                 <Card>
                     <ListGroup variant="flush">
                        <ListGroup.Item>
                        <h2>Order Summary</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                             <Col>Items</Col>
                            <Col><i className="fas fa-rupee-sign"></i>{cart.itemsPrice}</Col>
                             </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                             <Col>Shipping</Col>
                            <Col><i className="fas fa-rupee-sign"></i>{cart.shippingPrice}</Col>
                             </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                             <Col>Tax</Col>
                            <Col><i className="fas fa-rupee-sign"></i>{cart.taxPrice}</Col>
                             </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                             <Col>Total</Col>
                            <Col><i className="fas fa-rupee-sign"></i>{cart.totalPrice}</Col>
                             </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <ListGroup.Item>
                                {error && <Message variant="danger">{error}</Message>}
                            </ListGroup.Item>
                            <Button type="button" className="btn-block" 
                            disabled={cart.cartItems === 0} onClick={placeOrderHandler} >
                                Place Order
                                </Button> 
                        </ListGroup.Item>
                    </ListGroup>
                    </Card>
                     </Col>
            </Row>
        </>
    )
}

export default PlaceOrderScreen

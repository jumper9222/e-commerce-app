import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteItem, addAmount, minusAmount, changeAmount } from "../feature/cart/cartSlice"

export default function CartItem({ item }) {
    const dispatch = useDispatch();

    function handleDeleteItem() {
        return dispatch(deleteItem(item))
    }
    function handleMinusAmount() {
        return dispatch(minusAmount(item))
    }
    function handleAddAmount() {
        return dispatch(addAmount(item))
    }
    function handleOnChange(e) {
        e.preventDefault()
        const amount = e.target.value
        return dispatch(changeAmount(item, amount))
    }

    return (
        <Card className="mb-2">
            <Card.Body>
                <Row>
                    <Col xs={4} md={2}>
                        <Card.Img
                            variant="top"
                            src={`https://picsum.photos/id/${item.id}/200`}
                            alt={item.name}
                        />
                    </Col>
                    <Col xs={4} md={2}>
                        <Card.Title>{item.amount} x {item.name}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                    </Col>
                    <Col xs={3}>
                        <InputGroup size='sm'>
                            <Button onClick={handleMinusAmount}><i className="bi bi-dash"></i></Button>
                            <Form.Control
                                type="text"
                                style={{ width: '10px' }}
                                value={item.amount}
                                onChange={handleOnChange}
                            />
                            <Button onClick={handleAddAmount}><i className="bi bi-plus"></i></Button>
                        </InputGroup>
                    </Col>
                    <Col xs={1}>
                        <Button
                            variant="outline-danger"
                            className="border-0"
                            size="sm"
                            onClick={handleDeleteItem}>Delete</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

import { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
function User(props) {

    const [count, setCount] = useState(100)

    useEffect(() => {
        console.log('State count thay đổi')
        return () => {
            console.log('destroy component')
        }
    }, [count])

    return (
        <div>
            <Row className="mx-0">
              <Button as={Col} variant="primary">Button #1</Button>
              <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
              <Button as={Col} variant="success">Button #3</Button>
            </Row>
            <button type="button" onClick={() => setCount(count + 1)}>Click me</button>
            <button type="button" onClick={() => props.update(props.age + 1)}>Click me to change parent state</button>
            <span>{props.name}</span>
            <span>123456</span>
            <span>{count}</span>
        </div>
    )
}

export default User;
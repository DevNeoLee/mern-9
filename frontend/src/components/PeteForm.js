import { Link } from "react-router-dom"

import Radio from "./Radio"

import { Button, Form } from "react-bootstrap";

import { useTransition, useSpring, animated } from "react-spring";


export default function PeteForm({ handleSubmitPete, setPopForm, handleChangePetePower}) {
    const transition = useTransition(true, {
        from: { x: 500, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
    });

    const transition2 = useTransition(true, {
        from: { x: 600, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        config: {
            duration: 500 // duration for the whole animation form start to end
        }
    });

    return (
        <div className="">
            {transition2((style, item) =>
                <animated.div style={style} className="roleframe">
                    <p>
                        Now time to decide, You check flood risk information.
                        What is your decision? </p>
                    <Form onSubmit={handleSubmitPete} onChange={handleChangePetePower}>
                        <Form.Group  >
                            <div className="gameQuestion">
                                <Form.Label htmlFor={`radio`}>You check flood risk indivation. What is your decision?</Form.Label>
                                <Radio label='Shut down' name="questionPete2" value={false} />
                                <Radio label='Keep providing electricity service' name="questionPete2" value={true}/>
                                <div className="buttons" style={{ margin: "15px 80px" }}><Button type="submit" size="lg">Submit</Button></div>
                            </div>
                        </Form.Group>
                    </Form>
                </animated.div>
            )}
        </div>
    )
}


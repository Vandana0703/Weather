import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';

function _FeedbackPage(props) {
    const { feedbackData } = props;

    const [feedbackList, setFeedbackList] = useState([]);

    useEffect(() => {
        setFeedbackList(feedbackData);
    }, [feedbackData])

    return (
        <div>
            <h1 >Weather Stories from Users</h1>
            <Row lg={3} >
                {feedbackList &&
                    feedbackList.map((feedback) => {
                        const { id, description } =
                            feedback;
                        return (
                            <Col className="d-flex">
                                <Card className="flex-fill" key={id}>
                                    <Card.Body>
                                        <Card.Text>{description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
            </Row>
        </div>
    )
}

function mapStateToProps(storeState) {
    return {
        feedbackData: storeState.weather.feedbackData
    }
}
const FeedbackPage = connect(mapStateToProps)(_FeedbackPage);
export { FeedbackPage };
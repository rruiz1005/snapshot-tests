import React from "react"
import Card from "react-bootstrap/Card"
import GingerBread from './GingerBread.png'

function GitHubCard() {
    return (
        <div className="card">
            <Card style={{ width: "18rem"}}>
            <Card.Img variant="top" src="https://github.com/rruiz1005" />
            <Card.Body>
                <Card.Title>Ginger Bread</Card.Title>
                <Card.Text>
                They call me Gingy and I'm sooooo coooool.
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    );
}

export default GitHubCard
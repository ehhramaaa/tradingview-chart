/* eslint-disable react-hooks/rules-of-hooks */

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, Row, Col } from 'react-bootstrap';
import moment from 'moment-timezone';


const news = () => {
    // const CORS_PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
    const API_URL = "https://cryptopanic.com/api/v1/posts/?auth_token=b2836a03c4d77383217ca76b56f2202ae131b424&public=true&panic_score=true";

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // const response = await axios.get(CORS_PROXY_URL + API_URL);
                const response = await axios.get(API_URL);
                setPosts(response.data.results);
            } catch (error) {
                console.error(error);
            }

        };

        const fetchDataWithDelay = async () => {
            await fetchPosts();
            await new Promise(resolve => setTimeout(resolve, 300000));
        };

        fetchDataWithDelay();
    }, [])


    return (
        <>
            <Container fluid>
                <Row>
                    {posts.map(post => (
                        <Col sm={6} key={post.id} className='mt-3'>
                            <Card style={{ width: '100%', height: '100%' }}>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0 d-flex flex-column justify-content-between w-100 h-100">
                                        <p>
                                            {' '}
                                            {post.title}.{' '}
                                        </p>
                                        <p className='mb-4'>
                                            {Array.isArray(post.currencies) && post.currencies.map(currency => (
                                                <span key={currency.code}>
                                                    {currency.code} - {currency.title}
                                                    <br />
                                                </span>
                                            ))}
                                        </p>
                                        <footer className="blockquote-footer">
                                            {/* Publish Time */}
                                            {(() => {
                                                const currentTime = moment().tz('Asia/Jakarta');
                                                const publishedTime = moment(post.published_at).tz('Asia/Jakarta');
                                                const timeDifference = Math.floor((currentTime - publishedTime) / 1000);

                                                let formattedTime = '';
                                                if (timeDifference >= 3600) { // Lebih dari satu jam
                                                    const hours = Math.floor(timeDifference / 3600);
                                                    formattedTime = `${hours} hours ago`;
                                                } else if (timeDifference >= 60) { // Lebih dari satu menit
                                                    const minutes = Math.floor(timeDifference / 60);
                                                    formattedTime = `${minutes} minutes ago`;
                                                } else { // Kurang dari satu menit
                                                    formattedTime = `${timeDifference} seconds ago`;
                                                }

                                                return formattedTime
                                            })()} <cite title="Source"><a href={`https://${post.domain}/${post.slug}`} target='_blank'>Source</a></cite>
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                {/* <ul>
                    {posts.map(post => (
                        <li key={post.id}>{post.title}

                            
                        </li>
                    ))}
                </ul> */}
                {/* <Row>
                    <Col>1 of 1</Col>
                </Row> */}
            </Container>
        </>
    )
}

export default news
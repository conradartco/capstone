
const Review = (props) => {

    return (
        <div>
            {props.reviewContent.map((review, index) => {
                if(review) {
                    return (
                        <div key={index}>
                            <div>
                                <p>{review.text}</p>
                            </div>
                            <div>
                                <p>{review.likes}</p>
                                <button>Like</button>
                            </div>
                        </div>
                    )
                }
                else {
                    return (
                        <div>
                            <p>No reviews yet!</p>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Review;
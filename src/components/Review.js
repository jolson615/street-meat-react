import React, { Component } from 'react';
import './css/Review.css';

const Review = (props)=>{
	console.log(props)
	return(
		<div className="col-4 Review">
			<div className="card text-center mb-3r">
			  <div className="card-header">
				{ props.review.name }
			  </div>
			  <div className="card-body">
				<h5 className="card-title">{ props.review.headline }</h5>
				<p className="card-text">{ props.review.summary }</p>
				<p className="card-text">{ props.review.stars }</p>
				<a href="#" className="btn btn-warning">Full Review</a>
			  </div>
			  <div className="card-footer text-muted">
				{ props.review.posted }
			  </div>
			</div>
		</div>
	);
};

export default Review;
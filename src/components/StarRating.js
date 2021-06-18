// import StarRatings from "react-star-ratings";
// import React, { Component } from "react";
import { Rating } from "@material-ui/lab";

function StarRating({ newRating }) {
  console.log("newRating :" + newRating);

  return (
    <div>
      {/* <StarRatings rating={newRating} /> */}

      <Rating
        name="half-rating-read"
        defaultValue={newRating}
        precision={0.25}
        size="small"
        readOnly
      />

      {/* <div>({newRating})</div> */}
    </div>
  );
}

// class StarRating extends Component {
//   changeRating(newRating) {
//     this.setState({
//       rating: newRating,
//       console.log("Rating: "  , rating)
//     });
//   }

//   render() {
//     // rating = 2;
//     return (
//       <StarRatings
//         rating={this.state.rating}
//         starRatedColor="orange"
//         changeRating={this.changeRating}
//         numberOfStars={5}
//         name="rating"
//       />
//     );
//   }
// }

export default StarRating;

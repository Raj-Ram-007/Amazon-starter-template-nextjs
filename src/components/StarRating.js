import { Rating } from "@material-ui/lab";

function StarRating({ newRating }) {
  // console.log("newRating :" + newRating);

  return (
    <Rating
      name="half-rating-read"
      defaultValue={newRating}
      precision={0.25}
      size="small"
      readOnly
    />
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

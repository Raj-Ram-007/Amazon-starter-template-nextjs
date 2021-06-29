import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
  Placeholder,
} from "cloudinary-react";

function ImageSingle() {
  // console.log("Image Single");
  return (
    <div>
      <div className="grid gap-4 grid-cols-1 ">
        <div className=" flex items-center ">
          <Image cloudName="homeeffect" publicId="TT1-1" loading="lazy">
            {/* <Placeholder type="Original" /> */}
            {/* <Placeholder type="Blur" /> */}
            {/* <Placeholder type="Pixelate" /> */}
            {/* <Placeholder type="Vectorize" /> */}
            <Placeholder type="Predominate color" />
          </Image>
        </div>
      </div>
    </div>
  );
}

export default ImageSingle;

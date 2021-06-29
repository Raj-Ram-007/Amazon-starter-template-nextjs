import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
  Placeholder,
} from "cloudinary-react";

function ImageMultiple() {
  // console.log("Image Mutiple");

  return (
    <div>
      <div className="grid gap-2 grid-cols-2 grid-rows-3">
        {/* Image section */}

        <div className=" flex items-center rounded-xl">
          <Image cloudName="homeeffect" publicId="TT1-1" loading="lazy">
            <Placeholder type="Predominate color" />
          </Image>
        </div>
        <div className=" flex items-center rounded-full ">
          <Image cloudName="homeeffect" publicId="TT1-2" loading="lazy">
            <Placeholder type="Predominate color" />
          </Image>
        </div>
        <div className=" flex items-center ">
          <Image cloudName="homeeffect" publicId="TT1-3" loading="lazy">
            <Placeholder type="Predominate color" />
          </Image>
        </div>
        <div className=" flex items-center ">
          <Image cloudName="homeeffect" publicId="TT1-4" loading="lazy">
            <Placeholder type="Predominate color" />
          </Image>
        </div>
        <div className=" flex items-center ">
          <Image cloudName="homeeffect" publicId="TT1-5" loading="lazy">
            <Placeholder type="Predominate color" />
          </Image>
        </div>
        <div className=" flex items-center ">
          <Image cloudName="homeeffect" publicId="TT1-6" loading="lazy">
            <Placeholder type="Predominate color" />
          </Image>
        </div>
      </div>
    </div>
  );
}

export default ImageMultiple;

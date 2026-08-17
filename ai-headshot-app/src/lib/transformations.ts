import type { CloudinaryImage } from "@cloudinary/url-gen/index";
import { cld } from "../cloudinary/config";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { auto as autoQuality } from "@cloudinary/url-gen/qualifiers/quality";
import { auto } from "@cloudinary/url-gen/qualifiers/format";
const WIDTH = 600;
const HEIGHT = 750;

export function buildOriginalPreview(publicId: string): CloudinaryImage {
  return cld
    .image(publicId)
    .resize(
      fill()
        .width(WIDTH)
        .height(HEIGHT)
        .gravity(autoGravity()))
        .delivery(format(auto()))
        .delivery(quality(autoQuality()));
}

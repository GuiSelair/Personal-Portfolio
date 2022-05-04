const TECHOLOGIES_IMAGES_NAME = {
  reactjs: "reactjs.png",
  typescript: "typescript.png",
  javascript: "javascript.png",
  nextjs: "nextjs.png",
	graphcms: "graphcms.png",
	graphql: "graphql.png"
};

type IGetThumbnailFilename = (thumbnailName: string) => string;

export const getThumbnailFilename: IGetThumbnailFilename = (thumbnailName) => TECHOLOGIES_IMAGES_NAME[thumbnailName || "react"];

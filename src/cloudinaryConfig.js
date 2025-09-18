const cloudName = process.env.REACT_APP_CLOUD_NAME;
const folder = process.env.REACT_APP_CLOUD_FOLDER;

const transformations = {
  full: "f_auto",
  thumbnail: "w_auto,h_220,c_fit,f_auto,q_auto",
  popup: "w_450,h_300,c_limit,f_auto,q_auto",
};

export const getCloudinaryUrl = (id, variant = "full", format = "png") => {
  const transformation = transformations[variant] || transformations.full;
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformation}/${folder}/${id}.${format}`;
};

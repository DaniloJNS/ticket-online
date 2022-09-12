import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const Event = ({ name, description, image }) => {
  return (
    <Card className="m-2">
      <CardHeader color="blue" className="mt-2 h-56">
        <img
          src={image}
          alt="img-blur-shadow"
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" className="mb-2">
          {name}
        </Typography>
        <Typography className="truncate">{description}</Typography>
      </CardBody>
      <CardFooter
        divider
        className="h-min flex items-center justify-between py-3"
      >
        <Typography variant="small">$899/night</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          Barcelona, Spain
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default Event
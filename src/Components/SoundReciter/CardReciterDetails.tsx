import { Card, CardBody } from "@nextui-org/react";

function CardReciterDetails({
  Reciter,
}: {
  Reciter: { image: string; name: string; rewaya: string };
}) {
  return (
    <Card className="container">
      <CardBody>
        <div className="d-flex justify-between flex-wrap align-items-center">
          <img
            src={"/" + Reciter.image}
            className=" col-md-3 col-12 border border-3 rounded"
            alt=""
          />
          <div className=" px-4 text-end col-md-8  col-12">
            <h2>: اسم القارئ</h2>
            <h2 className="mb-4 fs-1">{Reciter.name} </h2>
            <h2 className="">: قراءة </h2>
            <h3>{Reciter.rewaya}</h3>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default CardReciterDetails;

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { CardQW } from "../../Types/app";
import  Questions  from "../../Json/QuestionsJSON.json";
export default function CardQ({
  filter,
  searchText,
}: {
  filter: string;
  searchText: string;
}) {
  const [allData, ] = useState<CardQW[]>(Questions);
  const [data, setData] = useState<CardQW[]>(Questions);
  useEffect(() => {
    if (searchText != "") {
      setData(
        allData.filter(
          (el) => el.Name.includes(searchText) && el.category == filter
        )
      );
    } else {
      if (filter === "") return setData(allData);
      setData(allData.filter((el) => el.category == filter));
    }
  }, [filter, searchText]);

  return (
    <>
      {data.length == 0  ? <h1 className="text-center fs-1 col-12 "> لا يوجد اختبارات حالا</h1> : data.map((QU) => (
        <Card className="col-12 col-sm-5 lg:w-3/5 text-end " key={QU.Link}>
          <CardHeader className="justify-end">
            <div className="">
              <p className="fs-1 text-md">{QU.Name}</p>
              <p className="fs-4 text-default-500">{QU.category} </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-end fs-4">{QU.disc}</p>
          </CardBody>
          <Divider />
          <CardFooter className="justify-between">
            <p>{QU.countMSQ} : عدد الاسالة </p>
            <Link isExternal showAnchorIcon href={QU.Link} target="_self">
              لينك الاختبار
            </Link>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}

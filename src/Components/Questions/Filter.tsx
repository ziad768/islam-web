import { Input, Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "./ListboxWrapper";
import { SearchIcon } from "./SearchIcon";
import { SetStateAction, useEffect, useMemo, useState } from "react";

export default function filter({ selected ,searchText, setSearchText}: { selected: SetStateAction, searchText :string, setSearchText:SetStateAction}) {
  const [selectedKeys, setSelectedKeys] = useState(new Set([""]));
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys]
  );
  useEffect(() => {
    selected(selectedValue);
  }, [selectedValue]);
  return (
    <div className="flex flex-col text-end gap-2 h-full">
      <ListboxWrapper>
        <h1 className="fs-1 p-2 ">تصنيف الاخبارات </h1>
        <Listbox
          className="p-3"
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          <ListboxItem key="" className="flex-row-reverse">
            الكل
          </ListboxItem>
          <ListboxItem key="قران" className="flex-row-reverse">
            قران
          </ListboxItem>
          <ListboxItem key="سيرة نبوية" className="flex-row-reverse">
            سيرة نبوية
          </ListboxItem>
          <ListboxItem key="فقه" className="flex-row-reverse">
          فقه
          </ListboxItem>
          <ListboxItem key="الصحابة" className="flex-row-reverse">
            الصحابة
          </ListboxItem>
          <ListboxItem key="قصص الانبياء" className="flex-row-reverse">
            قصص الانبياء
          </ListboxItem>
          <ListboxItem key="متنوع" className="flex-row-reverse ">
            متنوع
          </ListboxItem>
        </Listbox>
        <Input
          label="بحث"
          isClearable
          radius="lg"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          classNames={{
            label: "text-black/50 dark:text-white/90 ",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent ",
            inputWrapper: [
              "shadow-xl",
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focused=true]:bg-default-200/50",
              "dark:group-data-[focused=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          placeholder="بحث باسم الاختبار"
          endContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        />
      </ListboxWrapper>
    </div>
  );
}

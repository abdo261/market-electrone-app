import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { IoMdMore, IoIosEye } from "react-icons/io";
import { FaPencil, FaTrashCan } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
export default function ActionCategoryDropDown({
  id = 1,
  onOpenEdite,
  onOpenDelete,
}) {
  const navigate = useNavigate();
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly={true} size="sm" variant="light" radius="full">
          <IoMdMore size={18} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          onClick={() => navigate(`/categorys/show/${id}`)}
          className="text-primary"
          color="primary"
          startContent={<IoIosEye />}
        >
          Show
        </DropdownItem>
        <DropdownItem
          onClick={() => onOpenEdite(id)}
          className="text-warning"
          color="warning"
          startContent={<FaPencil />}
        >
          Edite
        </DropdownItem>
        <DropdownItem
          onClick={() => onOpenDelete(id)}
          className="text-danger"
          color="danger"
          startContent={<FaTrashCan />}
        >
          Delete
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

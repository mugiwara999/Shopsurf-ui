export function SideComp({ img, name }) {

  return (
    <div className="flex gap-3 items-center hover:bg-[#2C3953] p-2 rounded-s cursor-pointer" >
      {img}
      {name}

    </div>
  )
}

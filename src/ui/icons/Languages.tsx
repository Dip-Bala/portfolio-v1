import StackIcon from "tech-stack-icons";

export default function Languages() {
  return (
    <div className="flex gap-4">
      <StackIcon variant="dark" name="js" className="w-20 h-20 " />
      <StackIcon variant="dark" name="typescript" className="w-20 h-20 " />
      <StackIcon variant="dark" name="java" className="w-20 h-20 " />
      
      {/* <StackIcon variant="dark" name="postman" className="w-20 h-20 " /> */}

    </div>
  );
}
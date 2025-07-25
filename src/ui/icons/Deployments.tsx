import StackIcon from "tech-stack-icons";

export default function Deployments() {
  return (
    <div className="flex gap-4">
      <StackIcon variant="dark" name="vercel" className="w-20 h-20 " />
      <StackIcon variant="dark" name="render" className="w-20 h-20 " />
      <StackIcon variant="dark" name="ec2" className="w-20 h-20 " />
      {/* <StackIcon variant="dark" name="git" className="w-20 h-20 " /> */}
      {/* <StackIcon variant="dark" name="postman" className="w-20 h-20 " />
      <StackIcon variant="dark" name="postman" className="w-20 h-20 " /> */}

    </div>
  );
}
import { GoBell } from "react-icons/go";
import { Button } from "../components/Button";

export const ButtonPage = () => {
  return (
    <div>
      <div>
        <Button success rounded outline className="mb-5">
          <GoBell className="mr-1" />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>See Deal!</Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
};

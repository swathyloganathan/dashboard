import { ThreeDots } from "react-loader-spinner";
export default function Loading(){
    return <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#a0a0a0"
                ariaLabel="three-dots-loading"
                wrapperStyle={{ margin: "20px" }}
                wrapperClass="custom-loader"
                visible={true}
              />
}
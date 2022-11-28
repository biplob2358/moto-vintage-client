import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title}-Moto Vintage`;
    }, [title]);
};

export default useTitle;
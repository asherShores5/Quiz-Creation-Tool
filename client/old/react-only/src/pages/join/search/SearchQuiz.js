import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SearchQuiz() {
    const navigate = useNavigate();

    useEffect(() => {
      // navigate to the login page after 2 seconds
      const timeoutId = setTimeout(() => {
        navigate('/join/login');
      }, 2000);
  
      // clean up the timer when the component unmounts
      return () => clearTimeout(timeoutId);
    }, [navigate]);
    
    return (
        <div className="HomePage">
            <h1>Waiting to join quiz...</h1>
        </div>
    );
}

export default SearchQuiz;
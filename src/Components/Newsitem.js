import React from "react";

const Newsitem=(props)=>{
    let {title,description,imageurl,newsurl,author,date}=props;
    return (
      <div>
        <div className="card" style={{boxShadow:"1px 1px 5px rgba(0, 0, 0, 0.4) "}} >
          <img src={imageurl?imageurl:"https://images.hindustantimes.com/tech/img/2022/12/17/1600x900/firmbee-com-eMemmpUojlw-unsplash_1648476869035_1671275624857_1671275624857.jpg"} className="card-img-top" alt="..."  />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <p className="card-text"><small className="text-muted">By {!author?"unknown":author} Last updated {new Date(date).toGMTString()}</small></p> 
            <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default Newsitem;

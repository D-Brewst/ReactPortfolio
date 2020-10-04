import React from 'react';
import { MDBCard, MDBCardTitle, MDBBtn, MDBIcon } from 'mdbreact';
import "./project.css";

const ProjectCards = (props) => {
  return (
        <MDBCard
          className='card-image h-100'
          style={{
            background:
              `url(${props.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
          }}
        >
          <div className='text-white h-100 text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
            <div>
              <h5 className='pink-text'>
                <MDBIcon icon='desktop' /> {props.type}
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>{props.title}</strong>
              </MDBCardTitle>
              <p>
                {props.text}
              </p>
              <MDBBtn id="linkbtn" href={props.link}>
                <MDBIcon icon='clone left' /> View project
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
  )
}

export default ProjectCards;

// import React from 'react';
// import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

// const ProjectCards = (props) => {
//   return (
//     <MDBCol>
//       <MDBCard style={{ width: "22rem" }}>
//         <MDBCardImage className="img-fluid" src={props.image} waves />
//         <MDBCardBody>
//           <MDBCardTitle>{props.title}</MDBCardTitle>
//           <MDBCardText>
//             Some quick example text to build on the card title and make
//             up the bulk of the card&apos;s content.
//           </MDBCardText>
//           <MDBBtn id="linkbtn" href={props.link}>
//             MDBBtn
//           </MDBBtn>
//         </MDBCardBody>
//       </MDBCard>
//     </MDBCol>
//   )
// }

// export default ProjectCards;

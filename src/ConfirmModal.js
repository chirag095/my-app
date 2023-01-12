// import { FC, Fragment, useState } from "react";
// import ReactModal from "react-modal";
// import styles from "../../../styles/customeModal.module.scss"
// // import { ButtonComponent } from "../../SubComponents/Button";
// const ConfirmModal = () => {
//     const [isOpen, setOpen] = useState(false);
//     const openModal = () => {
//         setOpen(true);
//     }
//     const closeModal = () => {
//         setOpen(false);
//     }
//     return (
//         <Fragment>
//             <button onClick={openModal}>
//                 More fiters
//             </button>
//             <ReactModal
//                 className={`${styles.CustomeModal}`}
//                 isOpen={setOpen}
//                 onAfterOpen={() => document.body.style.overflow = 'hidden'}
//                 onAfterClose={() => document.body.style.overflow = 'unset'}
//                 style={{ overflowY: "scroll" }}
//             >
//                 <div className={styles.dialogBox}>
//                     <div className={styles.contentSec}>
//                         <div className="row">
//                             <h4 className="col-12">Confirmation</h4>
//                             <p className="col-12">
//                                 Are you sure to change and save your settings
//                             </p>
//                             <div className="col-12 text-center">
//                                 <button  className={`${styles.sendBtn1} mr-1`}>No</button>
//                                 <button  className={`${styles.sendBtn} ml-1`}>Yes</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </ReactModal>
//         </Fragment>
//     );
// };
// export default ConfirmModal;



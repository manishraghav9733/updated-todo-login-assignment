import React,{useState } from 'react'
import {Modal} from 'antd';



const DetailsModal = props => {

    return(
        <div>
            <Modal
              visible={props.visible}
              closable={true}
              destroyOnClose={true}
              footer={false}
              onCancel={props.onCancel}
              
            >
              <div style={{padding:"30px"}}>
                <div 
                  style={{
                        textAlign:"center",
                        fontSize:"25px",
                        fontWeight:"bold"
                        }}
                >
                          {props.title}
                 </div>
                <div 
                   style={{
                        textAlign:"center",
                        fontSize:"20px",
                        fontWeight:"bold",
                        marginTop:"10px"
                        }}
                 >
                            Status : <span style={{color:props.status === false ? "red" : "green" }}> {props.status === false ? "UnComplete" : "completed"}</span>
                </div>
              </div>
            </Modal>
        </div>
    );
};

export default DetailsModal;
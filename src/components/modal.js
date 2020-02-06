import React from "react";
import {createPortal} from "react-dom";
import styled from "styled-components"

const ModalMask = styled.div`
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalWrapper = styled.div`
    width: 80%;
    height: 80%;
    
    background: #A86242;

    border-top: 1px solid #FFFFCC;
    border-right: 1px solid #FFFF99;
    border-bottom: 1px solid #FFFF99;
    border-left: 1px solid #FFFFCC;

    display: flex;
    flex-direction: column;
`;

const ModalHeader = styled.div`
    position: relative;
    /* height: 20px; */
    padding: 10px;
`;

const ModalContent = styled.div`
    flex: 1;
    padding: 10px;
    max-height: calc(100% - 60px);
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
`;

const ModalTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
`;


export class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.element = document.createElement('div');
    }
    componentDidMount() {
        const modalRoot = document.getElementById('modal-root');
        modalRoot.appendChild(this.element);
    }
    componentWillUnmount() {
        const modalRoot = document.getElementById('modal-root');
        modalRoot.removeChild(this.element);
    }
    render() {
        return createPortal(
            <ModalMask onClick={this.props.onClose}>
                <ModalWrapper onClick={e => e.stopPropagation()}>
                    <ModalHeader>
                        <ModalTitle>{this.props.title || 'Info'}</ModalTitle>
                        <CloseButton onClick={this.props.onClose}>x</CloseButton>
                    </ModalHeader>
                    <ModalContent>
                        {this.props.children}
                    </ModalContent>
                </ModalWrapper>
            </ModalMask>, 
            this.element)
    }
}
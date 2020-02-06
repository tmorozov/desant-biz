import React, {useState} from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Modal} from "../components/modal";
import { HtmlContentWrapper } from "../components/html-content-wrapper"

const ImageFit = styled.img`
  width: 100%; /* or any custom size */
  height: 100%; 
  object-fit: contain;
`;

const BasicTemplate = props => {
  const { pageContext, location } = props
  const { fulltext, introtext, title, author, created } = pageContext
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const onClick = (e) => {
    if (e.target instanceof HTMLImageElement) {
      setShowModal(true);
      setModalContent(<ImageFit src={e.target.src} alt={e.target.alt}/>);
      // window.open(e.target.src, 'blank');
    }
  }
  
  const onClose = () => {
    setShowModal(false);
    setModalContent('');
  }

  return (
  <Layout location={location}>
    <SEO title={title} />
    <h1>{title}</h1>
    <HtmlContentWrapper onClick={onClick} dangerouslySetInnerHTML={{__html: fulltext || introtext }} />
    <div>Автор: {author}</div>
    <div>Дата: {created}</div>
    
    {
      showModal ? 
      <Modal title="Просмотр" onClose={onClose}>
        {modalContent}
      </Modal> : null
    }

  </Layout>
  )
}
export default BasicTemplate
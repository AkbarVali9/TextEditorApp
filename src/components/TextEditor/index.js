import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  Heading,
  Button,
  Image,
  ImageElement,
  EditorContainer,
  HrElement,
  ButtonContainer,
  TextAreaElement,
  UnderlineButton,
  ItalicButton,
} from './styledComponents'

import './index.css'

class TextEditor extends Component {
  state = {
    textToBold: false,
    textToItalic: false,
    textToUnderLine: false,
  }

  bold = () => {
    this.setState(prevState => ({textToBold: !prevState.textToBold}))
  }

  italic = () => {
    this.setState(prevState => ({textToItalic: !prevState.textToItalic}))
  }

  underlie = () => {
    this.setState(prevState => ({textToUnderLine: !prevState.textToUnderLine}))
  }

  render() {
    const {textToBold, textToItalic, textToUnderLine} = this.state

    const boldBtnColor = textToBold === false ? '#f1f5f9' : '#faff00'
    const italicBtnColor = textToItalic === false ? '#f1f5f9' : '#faff00'
    const underlineBtnColor = textToUnderLine === false ? '#f1f5f9' : '#faff00'

    const fontWeight = textToBold === false ? 'normal' : 'bold'
    const fontStyle = textToItalic === false ? 'normal' : 'italic'
    const textDecoration = textToUnderLine === false ? 'normal' : 'underline'

    return (
      <div className="bg-container">
        <div className="central-container">
          <div className="image-container">
            <div>
              <Heading>Text Editor</Heading>
              <ImageElement>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
                  className="image"
                  alt="text editor"
                />
              </ImageElement>
            </div>
            <EditorContainer>
              <ButtonContainer>
                <li>
                  <Button
                    type="button"
                    className="button"
                    color={boldBtnColor}
                    data-testid="bold"
                    onClick={this.bold}
                  >
                    <VscBold size={25} />
                  </Button>
                </li>

                <li>
                  <ItalicButton
                    type="button"
                    className="button"
                    color={italicBtnColor}
                    data-testid="italic"
                    onClick={this.italic}
                  >
                    <GoItalic size={25} />
                  </ItalicButton>
                </li>

                <li>
                  <UnderlineButton
                    type="button"
                    className="button"
                    color={underlineBtnColor}
                    data-testid="underline"
                    onClick={this.underlie}
                  >
                    <AiOutlineUnderline size={25} />
                  </UnderlineButton>
                </li>
              </ButtonContainer>
              <HrElement />
              <TextAreaElement
                fontWeight={fontWeight}
                fontStyle={fontStyle}
                textDecoration={textDecoration}
              />
            </EditorContainer>
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor

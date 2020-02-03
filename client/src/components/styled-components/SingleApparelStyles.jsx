import styled from 'styled-components'

export const SingleApparelContainer=styled.div ` 
    font-family: 'Be Vietnam', sans-serif;
}

.single-apparel-container {
    margin-top: 10px;
    margin-bottom: 40px;
}

.single-apparel-container img {
    width: 31rem;
    margin-bottom: 40px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}


.product-title {
    font-size: 18px;
}


.edit-apparel-button {
    background-color: white;
    color: black;
    border: 1px solid black;
    margin-right: 10px;
    margin-top: 13px;
    margin-bottom: 13px;
}

.edit-apparel-button:hover {
    box-shadow: 1px 3px 12px 0px #b3b3b3;
    color: white;
    background: black;
}

.delete-apparel-button {
    background-color: white;
    color: black;
    border: 1px solid black;
    margin-top: 13px;
    margin-bottom: 13px;
}

.delete-apparel-button:hover {
    box-shadow: 1px 3px 12px 0px #b3b3b3;
    color: white;
    background: black;
}

.submit-button {
    background-color: white;
    color: black;
    border: 1px solid black;
    justify-content: center;
    padding-left: 60px;
    padding-right: 60px;
    margin-top: 1px;
    margin-bottom: 20px;
}

.submit-button:hover {
    box-shadow: 1px 3px 12px 0px #b3b3b3;
    color: white;
    background: black;
}

.form-label {
    text-align: left;
    font-size: 15px;
}

.add-form {
    background-color: white;
    border: 1px solid black;
}

@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    .single-apparel-container img {
      width: 22rem;
      margin-bottom: 40px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      }
    }


`;
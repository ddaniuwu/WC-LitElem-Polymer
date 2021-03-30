import {LitElement , html , css} from 'lit-element';

function MyParagraph(){
       return html`<p class="parrafo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
       incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
         eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.</p>`;
    } 


function MyImage(){
    return html`<img class="image" src="https://cdn.pixabay.com/photo/2013/07/13/12/46/iphone-160307_960_720.png" >`
}

function MyMenu(){
    return html`<ul class="navigation">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">Contact</a></li>
  </ul>`
}

function MyFooter(Footer){
    return html`<footer> ${Footer}</footer>`
}

function MyTitle(Title){
    return html`<h1 class="title"> ${Title} </h2>`;
}

function button(ButtonContent){
    return html`<button>${ButtonContent} </button>`;
}


class MyComponent extends LitElement {

constructor(){
    super();
    this.article = {
        Title :'New Telephone',
        Footer: 'This is an example of footer, Now I am trying to know you about my product ',
        ButtonContent: 'Buy Me!'
    }
}

    static get properties() {
        return {
            article: {
                attribute : false
            }
        };
    }

    static get styles() {
        return css`
        

        .container{
            display:flex;
            flex-flow: row wrap;
            flex-direction:row;
            padding: 0;
            margin-left:20px;
        }

        .container-card{
            background-color:black;
            border-radius:10px;
            margin-left:10%;
            margin-right:20%;
        }

        .text{
            justify-content:flex-start;
            font-size:1.5em;
            margin:10%;
            color:white;
        }
        .image{
            max-width:75%;
            min-width:10%;
            height:250px;
            
        }
        .title{
            font-size:1.8em;
            font-family: Vegur, 'PT Sans', Verdana, sans-serif;
            font-weight: bold;
            overflow: auto;
        
        }

        .title::first-letter{
            font-size: 200%;
            color: #2B0462
        }



        .navigation{
            display:flex;
            flex-flow:row wrap;
            justify-content: flex-end;
            list-style:none;
            margin:0;
            background:  #2B0462;
            font-family: Vegur, 'PT Sans', Verdana, sans-serif;
        }
        .navigation a {
            text-decoration: none;
            display: block;
            padding: 1em;
            color: white;
          }
          
          .navigation a:hover {
            background:  white;
            color: #2B0462;
          }
  
          footer{
            font-family: Vegur, 'PT Sans', Verdana, sans-serif;
            padding: 1em;
            color: white;
            text-align:center;
            background-color:black

          }
          footer::first-letter{
            font-size: 200%;
            color: white;
          }
          slot{
            font-family: Vegur, 'PT Sans', Verdana, sans-serif;
            color: white;
            overflow:auto;
            font-size:1em;
            text-align:center;
          }

        button{
            width:150px;
            height:70px;
            margin:5%;
            font-family:Vegun, 'PT Sans' , Verdana , sans-serif;
            padding:1em;
            background-color:white;
            border-radius:5px;
            color:#2B0462;
            display:block;
            margin-left: auto;
            margin-right: auto;
        }
        button:hover{
            background-color:#2B0462;
            cursor:pointer;
            color:white;
        }

        button::first-letter{
            font-size: 200%;
            color: Black;
        }
        `

    }

    connectedCallback() {
        super.connectedCallback();
        console.log("Componente creado")
       this.render()
    
    }

    render() {
        return html`
        ${MyMenu()}
        <div class="flex-container">
            <div class="container-card"> 
                <div class="text">   
             ${MyTitle(this.article.Title)}   
             ${MyImage()}
             ${MyParagraph()}
             <slot></slot>
            ${button(this.article.ButtonContent)}
             </div>
            </div>
        </div>
        ${MyFooter(this.article.Footer)}
           `;
    }
}
customElements.define('my-element' , MyComponent)

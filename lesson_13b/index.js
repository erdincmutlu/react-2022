/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page
 */

function Page() {
  return (
    <ol>
      <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
      <li>I'm more likely to get a job as a developer if I know React</li>
    </ol>
  )
}

ReactDOM.render(<Page />, document.getElementById("root"));
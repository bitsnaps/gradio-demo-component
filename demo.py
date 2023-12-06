import gradio as gr


def greet(name):
    return "Hello " + name + "!"


# The CSS styles will hide the flag button and the footer.
demo = gr.Interface(
    fn=greet,
    inputs=gr.Textbox(lines=2, placeholder="Name"),
    outputs="text",
    css="#component-11,footer{display:none !important}"
)

if __name__ == "__main__":
    demo.launch(show_api=False, share=False)

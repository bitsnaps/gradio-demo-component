
import gradio as gr
from gradio_hellogradiocomponent import helloGradioComponent


with gr.Blocks() as demo:
    gr.Markdown(
        "# Change the value (keep it JSON) and the front-end will update automatically.")
    helloGradioComponent(
        value={"message": "Hello from Gradio Custom Component!"}, label="Static")


demo.launch()

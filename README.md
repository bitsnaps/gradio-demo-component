# Gradio Demo to build a Custom Component

The following instructions are made to build/install a gradio custom component on [Codesandbox](https://codesandbox.io/).

## Install dependencies
Make sure to have the following depdencies:
- Python 3 & pip
- Node v16.14+ & npm v9+ 
If you're using a ubuntu you can install node and npm using:
```
apt install node npm
```
To install `gradio` just run:
```
pip install gradio
```

## Create a component
The name should be in  contains "-" characters:
```
gradio cc create helloGradioComponent
```
You'll be prompted to answer some questions.

## Test your component:
This will allow you to test your component before publishing it.
```
gradio cc dev
```

## Build the component:
```
gradio cc build
```

## Publish your component:
This will allow you to publish your component on [pypi.org](https://pypi.org/).
```
gradio cc publish
```
You'll be prompt to enter your `pypi` credentials.

## Before you publish:
Don't forget to update your `pyproject.toml` and `package.json` file (update the `author`, `email`, `license`...).


## Quick reference:
There is the list of commands supported by `gradio` cli:
```
build:  Build the component for distribution. Must be called from the component directory.                                          

create: Create a new component.                                                        

dev: Launch the custom component demo in development mode.                                                             

install: Install the custom component in the current environment                                                      

publish: Publish a component to PyPI and HuggingFace Hub

show: Show the list of available templates
```
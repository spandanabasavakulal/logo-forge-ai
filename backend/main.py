from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():

    return {
        "message":"Running"
    }


@app.get("/generate")
def generate(
    name:str,
    style:str="Modern"
):

    logos=[]

    for i in range(6):

        logos.append(
            f"{style} Logo {i+1}"
        )

    return {
        "logos":logos
    }
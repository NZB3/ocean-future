from pydantic import BaseModel, Field

from settings import params


class CustumorBase(BaseModel):
    name: str
    mail: str


class CustomerCreate(CustumorBase):
    id: int
    type: str
    count: int
    price: float
    way_get: str
    date: str

    class Config:
        orm_mode = True


class AnimalsBase(BaseModel):
    name: str
    description: str


class AnimalsCreate(AnimalsBase):
    ...

    class Config:
        orm_mode = True


class TicketsBase(BaseModel):
    name: str


class TicketsCreate(TicketsBase):
    type: str
    price: float

    class Config:
        orm_mode = True


class MailCreate(BaseModel):
    me: str = params["mail"]
    text: str = Field(default=None, title="Какой-то текст...")
    subject: str = params["subject"]

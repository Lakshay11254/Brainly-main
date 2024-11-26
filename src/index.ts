import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { ContentModel, LinkModel, UserModel } from "./db";
import { userMiddleware } from "./middleware";
import ts from "typescript";
import { random } from "./utils";

export const JWT_PASSWORD = "123123";

const app = express();
app.use(express.json());

app.post("/api/v1/signup", async (req, res) => {
  //zod validation
  const username = req.body.username;
  const password = req.body.password;
  try {
    await UserModel.create({
      username: username,
      password: password,
    });

    res.json({
      message: "Sign Up Successful",
    });
  } catch (error) {
    res.status(411).json({
      message: "Sign Up Failed",
    });
  }
});

app.post("/api/v1/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const existingUser = await UserModel.findOne({
    username,
    password,
  });
  if (existingUser) {
    const token = jwt.sign(
      {
        id: existingUser._id,
      },
      JWT_PASSWORD
    );

    res.json({
      message: "Sign In Successful",
      token: token,
    });
  } else {
    res.status(401).json({
      message: "Sign In Failed",
    });
  }
});

app.post("/api/v1/content", userMiddleware, async (req, res) => {
    const link = req.body.link;
    const type = req.body.type;

   await ContentModel.create({
        link,
        type,
        //@ts-ignore
        userId: req.userId,
        tags: [],
    })

res.json({
    message: "Content Added Successfully",
});
})

app.get("/api/v1/content", async (req, res) => {
     // @ts-ignore
     const userId = req.userId;
     const content = await ContentModel.find({
         userId: userId
     }).populate("userId", "username")
     res.json({
         content
     })
});

app.delete("/api/v1/content", userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;

    await ContentModel.deleteMany({
        contentId,
        // @ts-ignore
        userId: req.userId
    })

    res.json({
        message: "Deleted"
    })
}
);

app.post("/api/v1/brain/share", userMiddleware, async(req, res) => {
  const share = req.body.share;
  if(share)
  {
   await LinkModel.create({
       // @ts-ignore
      userId: req.userId,
      hash: random(10),

    })
   
  }
  else {
  await LinkModel.deleteOne({
       // @ts-ignore
      userId: req.userId,
    })
  }
  res.json({
    message: "Updated Sharable Link",
  });
});

app.get("/api/v1/brain/:shareLink", (req, res) => {});

app.listen(3000);

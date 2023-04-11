## Installation

`codemod` requires [Node.js](https://nodejs.org/) v14+ to run.

To install globally:

```sh
npm i -g codemod
```

## Usage

`Prerequisite`: Before running the codemod please make sure your git is in a clean slate and there are no local changes

Just run the below command to get started.

```sh
codemod
```

#### Step 1:

<img width="1189" alt="image" src="https://user-images.githubusercontent.com/56330681/154031606-9bc09e20-1ffc-4397-abdf-89c854db818b.png">

Once you run the command, it will ask you for the source file/files path where you want to run codmod. It can be an absolute path or relative path.

Path examples:

-   To select single file: ./packages/p2p/src/components/user/user-avatar/user-avatar.jsx
-   To select multiple files: ./packages/p2p/\*_/_.jsx

`codemod` uses [fast-glob](https://github.com/mrmlnc/fast-glob) internally to match file/files. You can check out [fast-glob](https://github.com/mrmlnc/fast-glob) documentation for more match syntax.

### Step 2:

<img width="1174" alt="image" src="https://user-images.githubusercontent.com/56330681/154031755-0e6f5ae3-685c-4293-a088-9ec1adb9350f.png">

Choose the codemod that you want to run. You can simply navigate with your arrow keys and press `Enter` to select.

![image](https://user-images.githubusercontent.com/56330681/154035216-e8eacdba-2363-4a2c-b1b8-d071af7dfb0d.png)

Here, we selected `Change extension` codemod and keyed in `tsx` as new extension.

Once the codemod ran successfully, make sure to commit the changes to get better git diff.

### Step 3:

<img width="1165" alt="image" src="https://user-images.githubusercontent.com/56330681/154033150-0539db54-3026-4012-9869-8f6433be7ed0.png">

Rerun `codemod` and pass the path where you want to run the `Convert proptypes to TS` codemod.

Note: Please make sure to pass in the new path after you changed the extension. Since we changed the extension to `tsx`, we are passing the path with `.tsx` extension.
Path examples:

-   To select single file: ./packages/p2p/src/components/user/user-avatar/user-avatar.tsx
-   To select multiple files: ./packages/p2p/\*_/_.tsx

After that, select `Convert proptypes to TS` codemod.

const { StatusCodes } = require("http-status-codes");
const { getDocs, collection, setDoc, doc } = require("firebase/firestore");

const { db } = require("./firebase");

exports.getCollections = async (req, res) => {
  const data = [];

  const querySnapshot = await getDocs(collection(db, req.query.name));

  querySnapshot.forEach(doc => {
    data.push({ id: doc.id, ...doc.data() });
  });

  res.status(StatusCodes.OK).json({ data });
};

exports.newDocument = async (req, res) => {
  const newCollectionRef = doc(collection(db, req.body.collectionName));
  await setDoc(newCollectionRef, req.body.payload);
  res.status(StatusCodes.CREATED).json({ data: { message: "document created" } });
};

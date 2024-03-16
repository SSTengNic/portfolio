// const titanicObject = { writeup: ``,
// kaggleLink: ``,
// notebookLink: ``,
// PrecisionScore: [{}]}

const titanicObject = {
    writeup: `
The challenge of this competition is to build a predictive model
that answers the question: 'What sorts of people were more likely
to survive?' using the passenger data provided (e.g., name, age,
gender, socio-economic class, etc).
`,
    kaggleLink: `https://www.kaggle.com/competitions/titanic`,
    notebookLink: `https://github.com/SSTengNic/MachineLearningProjects/blob/main/Titantic_survivor_project/jupyer%20test.ipynb`,
    precisionScore: [
        {
            text: "Logistic Regresion",
            value: "0.81",
        },
        {
            text: "Random Forest",
            value: "0.75",
        },
        {
            text: "  K-Neighbours Classifiers",
            value: "0.75",
        },
    ],
};

const breastCancerObject = {
    writeup: `
I came across an interesting
dataset on Kaggle that featured
real-valued attributes like cell
nuclei measurements (radius,
texture, perimeter) in breast
cancer images, paired with
patient diagnoses. Intrigued by
the data's potential, I employed
logistic regression and machine
learning to predict breast
cancer probability.
`,
    kaggleLink: `https://www.kaggle.com/datasets/uciml/breast-cancer-wisconsin-data`,
    notebookLink: `https://github.com/SSTengNic/MachineLearningProjects/blob/main/breast%20cancer%20project/breast%20cancer.ipynb`,

    precisionScore: [
        {
            text: "Logistic Regresion",
            value: "0.96",
        },
    ],
};

const AmesHousingObject = {
    writeup: `Ames Housing Writeup, insert here.`,
    kaggleLink: `https://www.kaggle.com/datasets/prevek18/ames-housing-dataset`,
    notebookLink: `https://github.com/SSTengNic/MachineLearningProjects/tree/main/Ames%20Housing%20Dataset%20Competition`,
    precisionScore: [{ text: "CatBoost Regressor", value: "0.9894" }],
};

const IrisSpeciesObject = {
    writeup: `Iries Species Writeup, insert here. ** Note to explain the accuracy when using all the feautres and then separaiting the petal and sepal features.`,
    kaggleLink: `https://www.kaggle.com/datasets/uciml/iris`,
    notebookLink: `https://github.com/SSTengNic/MachineLearningProjects/blob/main/Iris%20Species%20project/iri_notebook.ipynb`,
    precisionScore: [
        { text: "Logistic Regression", value: "1.00" },
        { text: "K-Nearest Neighbours", value: "0.981" },
    ],
};

// const __Writeup
// const __KaggleLink
// const NotebookLink
// const PrecisionScore

export default {
    titanicObject,
    breastCancerObject,
    AmesHousingObject,
    IrisSpeciesObject,
};

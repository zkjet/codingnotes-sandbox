# https://www.freecodecamp.org/news/python-automation-scripts/
# Python Proofreading
# pip install lmproof
import lmproof


def proofread(text):
    proofread = lmproof.load("en")
    correction = proofread.proofread(text)
    print("Original: {}".format(text))
    print("Correction: {}".format(correction))


proofread("Your Text")

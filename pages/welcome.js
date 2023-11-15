import { Inter } from "next/font/google";
import styles from "@/styles/Welcome.module.css";
import React, { useState } from "react";
import ProgressBar from "@/components/Progess";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";
import RegisterForm from "@/components/RegisterForm";

const QuestionPage = ({
  options,
  selectedOption,
  onOptionClick,
  onNextClick,
  question,
}) => {
  return (
    <div>
      <div className={styles.question}>
        <h2>{question}</h2>
      </div>
      <div>
        <div className={styles.options}>
          {options.map((option) => (
            <div
              key={option}
              onClick={() => onOptionClick(option)}
              style={{
                cursor: "pointer",
                padding: "100px 40px",
                margin: "1px",
                backgroundColor:
                  selectedOption === option ? "#4D5D71" : "#132A46",
                color: "white",
                fontSize: "20px",

                width: "100%",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {option}
            </div>
          ))}
        </div>
        <div className={styles.btnwrapper}>
          <button className={styles.nextbutton} onClick={onNextClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const ThankyouPage = () => {
  return (
    <div>
      <h1>Thank you!</h1>
      <h3>Are you interested in staying up to date with our latest news?</h3>

      <div>
        <RegisterForm />
      </div>

    </div>
  );
};

export default function Welcome() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [progress, setProgress] = useState(25);
  const [visitorType, setVisitorType] = useState();

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    if (option === "Seller") {
      setVisitorType("Seller");
    } else if (option === "Buyer") {
      setVisitorType("Buyer");
    }
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
    setProgress((currentPage / 4) * 100 + 25);
  };

  return (
    <div>
      <div className={styles.menucontainer}>
        <div className={styles.menurow}>
          <div className={styles.menucol}>
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  height={70}
                  width={70}
                  className={styles.logoimg}
                  alt="logo"
                />
              </Link>
            </div>
          </div>
          <div className={styles.menucol}>
            <div className={styles.linkbar}>
              <Link href="/posts/about">About</Link>
              <Link href="/posts/selling">Selling</Link>
              <Link href="/posts/buying">Buying</Link>
              <Link href="/">Advisors</Link>
              <Link href="/posts/contact">Contact</Link>
            </div>
            <div className={styles.mobilebutton}>
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        {currentPage < 5 && (
          <div>
            <h1>Welcome to Silver Era Transition</h1>
            <h3>
              Please answer a few questions to receive a personalized experience
            </h3>
            <ProgressBar completed={progress} />
          </div>
        )}

        {currentPage === 1 && (
          <QuestionPage
            question={"What best describes you?"}
            options={["Seller", "Buyer"]}
            selectedOption={selectedOption}
            onOptionClick={handleOptionClick}
            onNextClick={handleNextClick}
          />
        )}
        {currentPage === 2 && visitorType === "Seller" && (
          <QuestionPage
            question={"What problem can we help you solve?"}
            options={[
              "Find successor",
              "Want to sell",
              "Advisory",
              "Timeframe",
              "Others",
            ]}
            selectedOption={selectedOption}
            onOptionClick={handleOptionClick}
            onNextClick={handleNextClick}
          />
        )}
        {currentPage === 2 && visitorType === "Buyer" && (
          <QuestionPage
            question={"What problem can we help you solve?"}
            options={[
              "Find a business",
              "Match a business",
              "Advisory",
              "Timeframe",
              "Others",
            ]}
            selectedOption={selectedOption}
            onOptionClick={handleOptionClick}
            onNextClick={handleNextClick}
          />
        )}
        {currentPage === 3 && visitorType === "Seller" && (
          <QuestionPage
            question={"What is your biggest motivation to sell?"}
            options={[
              "Retirement",
              "Burnout",
              "Change",
              "Dispute",
              "Unprofitable",
              "Others",
            ]}
            selectedOption={selectedOption}
            onOptionClick={handleOptionClick}
            onNextClick={handleNextClick}
          />
        )}
        {currentPage === 3 && visitorType === "Buyer" && (
          <QuestionPage
            question={"Q3 Buyer"}
            options={[
              "Opportunity",
              "Assets",
              "Tech",
              "Industry",
              "Profit",
              "Others",
            ]}
            selectedOption={selectedOption}
            onOptionClick={handleOptionClick}
            onNextClick={handleNextClick}
          />
        )}
        {currentPage === 4 && (
          <QuestionPage
            question={"What market sector are you in?"}
            options={[
              "Healthcare",
              "Financial",
              "Tech",
              "Manufacturing",
              "Real estate",
              "Others",
            ]}
            selectedOption={selectedOption}
            onOptionClick={handleOptionClick}
            onNextClick={handleNextClick}
          />
        )}
      </div>
      <div className={styles.container}>
        {currentPage === 5 && <ThankyouPage />}
      </div>
    </div>
  );
}

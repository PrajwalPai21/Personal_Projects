/********************************************************************************
** Form generated from reading UI file 'mainwindow.ui'
**
** Created by: Qt User Interface Compiler version 5.15.13
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_MAINWINDOW_H
#define UI_MAINWINDOW_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QLabel>
#include <QtWidgets/QLineEdit>
#include <QtWidgets/QMainWindow>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_MainWindow
{
public:
    QWidget *centralwidget;
    QLabel *label;
    QLabel *label_2;
    QLineEdit *firstNum;
    QLineEdit *secondNum;
    QPushButton *btnAdd;
    QPushButton *btnSub;
    QPushButton *btnMul;
    QPushButton *btnDiv;
    QPushButton *btnMod;
    QLabel *label_3;
    QLineEdit *txt_Result;

    void setupUi(QMainWindow *MainWindow)
    {
        if (MainWindow->objectName().isEmpty())
            MainWindow->setObjectName(QString::fromUtf8("MainWindow"));
        MainWindow->resize(372, 625);
        centralwidget = new QWidget(MainWindow);
        centralwidget->setObjectName(QString::fromUtf8("centralwidget"));
        label = new QLabel(centralwidget);
        label->setObjectName(QString::fromUtf8("label"));
        label->setGeometry(QRect(10, 110, 101, 20));
        label_2 = new QLabel(centralwidget);
        label_2->setObjectName(QString::fromUtf8("label_2"));
        label_2->setGeometry(QRect(10, 140, 101, 20));
        firstNum = new QLineEdit(centralwidget);
        firstNum->setObjectName(QString::fromUtf8("firstNum"));
        firstNum->setGeometry(QRect(120, 110, 113, 22));
        secondNum = new QLineEdit(centralwidget);
        secondNum->setObjectName(QString::fromUtf8("secondNum"));
        secondNum->setGeometry(QRect(120, 140, 113, 22));
        btnAdd = new QPushButton(centralwidget);
        btnAdd->setObjectName(QString::fromUtf8("btnAdd"));
        btnAdd->setGeometry(QRect(20, 200, 80, 23));
        btnSub = new QPushButton(centralwidget);
        btnSub->setObjectName(QString::fromUtf8("btnSub"));
        btnSub->setGeometry(QRect(120, 200, 80, 23));
        btnMul = new QPushButton(centralwidget);
        btnMul->setObjectName(QString::fromUtf8("btnMul"));
        btnMul->setGeometry(QRect(230, 200, 80, 23));
        btnDiv = new QPushButton(centralwidget);
        btnDiv->setObjectName(QString::fromUtf8("btnDiv"));
        btnDiv->setGeometry(QRect(20, 250, 80, 23));
        btnMod = new QPushButton(centralwidget);
        btnMod->setObjectName(QString::fromUtf8("btnMod"));
        btnMod->setGeometry(QRect(120, 250, 80, 23));
        label_3 = new QLabel(centralwidget);
        label_3->setObjectName(QString::fromUtf8("label_3"));
        label_3->setGeometry(QRect(20, 290, 71, 20));
        txt_Result = new QLineEdit(centralwidget);
        txt_Result->setObjectName(QString::fromUtf8("txt_Result"));
        txt_Result->setGeometry(QRect(80, 290, 113, 22));
        txt_Result->setReadOnly(true);
        MainWindow->setCentralWidget(centralwidget);

        retranslateUi(MainWindow);

        QMetaObject::connectSlotsByName(MainWindow);
    } // setupUi

    void retranslateUi(QMainWindow *MainWindow)
    {
        MainWindow->setWindowTitle(QCoreApplication::translate("MainWindow", "MainWindow", nullptr));
        label->setText(QCoreApplication::translate("MainWindow", "First Number", nullptr));
        label_2->setText(QCoreApplication::translate("MainWindow", "Second Number", nullptr));
        btnAdd->setText(QCoreApplication::translate("MainWindow", "+", nullptr));
        btnSub->setText(QCoreApplication::translate("MainWindow", "-", nullptr));
        btnMul->setText(QCoreApplication::translate("MainWindow", "*", nullptr));
        btnDiv->setText(QCoreApplication::translate("MainWindow", "/", nullptr));
        btnMod->setText(QCoreApplication::translate("MainWindow", "%", nullptr));
        label_3->setText(QCoreApplication::translate("MainWindow", "Result Is", nullptr));
    } // retranslateUi

};

namespace Ui {
    class MainWindow: public Ui_MainWindow {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_MAINWINDOW_H

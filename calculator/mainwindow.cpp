#include "mainwindow.h"
#include "ui_mainwindow.h"

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);
}

MainWindow::~MainWindow()
{
    delete ui;
}
float firstNum, secondNum,result;

void MainWindow::on_btnAdd_clicked()
{
    firstNum = ui->firstNum->text().toFloat();
    secondNum= ui->secondNum->text().toFloat();
    result = firstNum+secondNum;

    ui->txt_Result->setText(QString::number(result));
}


void MainWindow::on_btnSub_clicked()
{
    firstNum = ui->firstNum->text().toFloat();
    secondNum = ui->secondNum->text().toFloat();
    result = firstNum - secondNum;

    ui->txt_Result->setText(QString::number(result));
}


void MainWindow::on_btnMul_clicked()
{
    firstNum = ui->firstNum->text().toFloat();
    secondNum = ui->secondNum->text().toFloat();
    result = firstNum * secondNum;

    ui->txt_Result->setText(QString::number(result));
}


void MainWindow::on_btnDiv_clicked()
{
    firstNum = ui->firstNum->text().toFloat();
    secondNum = ui->secondNum->text().toFloat();
    if(secondNum==0)
    {
        ui->txt_Result->setText("Invalid Input");
        return;
    }
    else
    {
        result = firstNum / secondNum;
        ui->txt_Result->setText(QString::number(result));

    }
    }


void MainWindow::on_btnMod_clicked()
{
    int num1,num2,res;

    num1 = ui->firstNum->text().toInt();
    num2 = ui->secondNum->text().toInt();
    if(num2==0)
    {
        ui->txt_Result->setText("Invalid Input");
        return;
    }
    else
        res = num1 % num2;

    ui->txt_Result->setText(QString::number(res));
}


#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QFile>
#include <QStandardPaths>
#include<QMessageBox>
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

void MainWindow::on_btnAdd_clicked()
{
    QListWidgetItem* item = new QListWidgetItem(ui->txtTask->text(), ui->listWidget);
    ui->listWidget->addItem(item);
    //double click the text to edit it
    item->setFlags(item->flags()| Qt::ItemIsEditable);
    ui->txtTask->clear();
    // dont need to click on the textbox
    ui->txtTask->setFocus();
}


void MainWindow::on_btnRemoveAll_clicked()
{
    ui->listWidget->clear();
}


void MainWindow::on_btnRemove_clicked()
{
    //this is now a memory address
    QListWidgetItem * item = ui->listWidget->takeItem(ui->listWidget->currentRow());
    delete item;
}


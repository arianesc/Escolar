# Makefile para um projeto Django

# Variáveis
BACK_DIR = escolar
FRONT_DIR = frontend
PYTHON = python3.7
PIP = pip3

setup.back:
	$(PYTHON) -m venv env && \
$(PIP) install -r requirements.txt

setup.front:
	cd $(FRONT_DIR) &&\
npm install

setup: setup.back setup.front

up.back:
	. env/bin/activate && \
	$(PYTHON) $(BACK_DIR)/manage.py runserver

up.front:
	cd $(FRONT_DIR) &&\
npm start

migrate:
	$(PYTHON) $(BACK_DIR)/manage.py migrate

makemigrations:
	$(PYTHON) $(BACK_DIR)/manage.py makemigrations

createsuperuser:
	$(PYTHON) $(BACK_DIR)/manage.py createsuperuser

.PHONY: runserver migrate makemigrations createsuperuser test install

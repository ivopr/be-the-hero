import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'
import logo from '../../assets/logo.svg'
import api from '../../services/api'

export default function NewIncident() {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [value, setValue] = useState('')
	const ongId = localStorage.getItem('ongId')
	const history = useHistory()

	async function handleNewIncident(e) {
		e.preventDefault()
		const data = {
			title, description, value
		}
		try {
			await api.post('incidents', data, {
				headers: {
					Authorization: ongId,
				}
			})
			history.push('/profile')
		} catch (err) {
			alert('Erro ao caastrar caso. Tente novamente')
		}
	}

	return (
		<div className="new-incident">
			<div className="content">
				<section>
					<img src={logo} alt="Be The Hero" />
					<h1>Cadastro</h1>
					<p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os cados da sua ONG.</p>

					<Link className="back-link" to="/profile">
						<FiArrowLeft size={16} color="#E02041"/> 
						Voltar para home
					</Link>
				</section>
				<form onSubmit={handleNewIncident}>
					<input 
						placeholder="Titulo do Caso"
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
					<textarea 
						placeholder="Descrição"
						value={description}
						onChange={e => setDescription(e.target.value)}
					/>
					<input 
						placeholder="Valor em Reais"
						value={value}
						onChange={e => setValue(e.target.value)}
					/>

					<button className="button" type="submit">Cadastrar</button>
				</form>
			</div>
		</div>
	)
}
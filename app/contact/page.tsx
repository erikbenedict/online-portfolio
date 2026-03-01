'use client'

import { useState } from 'react'
import { Send, Mail, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react'
import { Badge } from '@/components/ui'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<typeof formData>>({})

  const validate = () => {
    const newErrors: Partial<typeof formData> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    else if (formData.message.trim().length < 10)
      newErrors.message = 'Message must be at least 10 characters'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setFormState('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Something went wrong')
      }

      setFormState('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      setFormState('error')
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Failed to send. Please try emailing me directly.'
      )
    }
  }

  return (
    <div className="section min-h-screen">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Get In Touch
            </Badge>
            <h1 className="mb-4 text-balance">
              Let's{' '}
              <span className="gradient-text">Work Together</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm currently open to full-stack engineering opportunities. Whether
              you have a role in mind or just want to connect, I'd love to hear
              from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  What to expect
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  I typically respond within 24 hours. If you're reaching out
                  about a role or project, feel free to include a brief overview
                  of what you're working on — it helps me give you a more
                  thoughtful response.
                </p>
              </div>

              {/* Links */}
              <div className="space-y-4">
                <a
                  href="mailto:erik.r.benedict@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-xl border bg-white hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-100 text-accent-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">
                      Email
                    </div>
                    <div className="text-sm font-semibold text-foreground group-hover:text-accent-600 transition-colors">
                      erik.r.benedict@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/erikbenedict"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border bg-white hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">
                      GitHub
                    </div>
                    <div className="text-sm font-semibold text-foreground group-hover:text-accent-600 transition-colors">
                      github.com/erikbenedict
                    </div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/erikbenedict"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border bg-white hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">
                      LinkedIn
                    </div>
                    <div className="text-sm font-semibold text-foreground group-hover:text-accent-600 transition-colors">
                      linkedin.com/in/erikbenedict
                    </div>
                  </div>
                </a>
              </div>

              {/* Resume download */}
              <div className="rounded-xl bg-gradient-to-br from-primary-700 to-accent-600 p-px">
                <div className="rounded-xl bg-white p-5">
                  <h3 className="font-semibold text-foreground mb-1">
                    Looking for my resume?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Download a PDF copy optimized for ATS systems.
                  </p>
                  <a
                    href="/Erik-Benedict-Resume.pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-4 py-2 text-sm font-medium text-white hover:bg-accent-700 transition-colors"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="rounded-xl border bg-white p-8 shadow-sm">
                {formState === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thanks for reaching out. I'll get back to you within 24
                      hours.
                    </p>
                    <button
                      onClick={() => setFormState('idle')}
                      className="text-sm text-accent-600 hover:text-accent-700 font-medium"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-1.5"
                        >
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className={`w-full rounded-lg border px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors ${
                            errors.name
                              ? 'border-red-400 bg-red-50'
                              : 'border-border bg-white'
                          }`}
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs text-red-600">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-1.5"
                        >
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jane@company.com"
                          className={`w-full rounded-lg border px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors ${
                            errors.email
                              ? 'border-red-400 bg-red-50'
                              : 'border-border bg-white'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-600">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Tell me about the role or project you have in mind..."
                        className={`w-full rounded-lg border px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors resize-none ${
                          errors.message
                            ? 'border-red-400 bg-red-50'
                            : 'border-border bg-white'
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Error banner */}
                    {formState === 'error' && (
                      <div className="flex items-start gap-3 rounded-lg bg-red-50 border border-red-200 p-4">
                        <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-red-800">
                            Couldn't send message
                          </p>
                          <p className="text-sm text-red-700 mt-0.5">
                            {errorMessage} You can also email me directly at{' '}
                            <a
                              href="mailto:erik.r.benedict@gmail.com"
                              className="underline font-medium"
                            >
                              erik.r.benedict@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={formState === 'loading'}
                      className="w-full flex items-center justify-center gap-2 rounded-lg bg-accent-600 px-6 py-3 text-base font-semibold text-white hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                    >
                      {formState === 'loading' ? (
                        <>
                          <svg
                            className="animate-spin w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8H4z"
                            />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-center text-muted-foreground">
                      I'll respond within 24 hours. Your info is never shared.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
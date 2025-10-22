
"use client";

import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Palette, X, Clock } from 'lucide-react';

// --- Note Type Definition ---
interface Note {
  id: string;
  title: string;
  content: string;
  color: string;
  timestamp: Date;
}

// --- Color Palette ---
const colorOptions = [
  { id: 'default', bg: 'bg-white', border: 'border-gray-300' },
  { id: 'red', bg: 'bg-red-100', border: 'border-red-200' },
  { id: 'green', bg: 'bg-green-100', border: 'border-green-200' },
  { id: 'blue', bg: 'bg-blue-100', border: 'border-blue-200' },
  { id: 'purple', bg: 'bg-purple-100', border: 'border-purple-200' },
  { id: 'yellow', bg: 'bg-yellow-100', border: 'border-yellow-200' },
];

// Helper to find color classes by ID
const getColorClasses = (colorId: string) => {
  return colorOptions.find(c => c.id === colorId) || colorOptions[0];
};

// --- Mock Data ---
const initialNotes: Note[] = [
  {
    id: '1',
    title: 'Project Ideas',
    content: '1. Scanner PDF maker\n2. Metaverse-2D video conference\n3. Online CV maker\n4. Real-Time Collaborative Whiteboard',
    color: 'green',
    timestamp: new Date('2025-10-21T10:00:00Z'),
  },
  {
    id: '2',
    title: 'SQL Root Pass',
    content: 'pass - 123456',
    color: 'default',
    timestamp: new Date('2025-10-20T09:30:00Z'),
  },
  {
    id: '3',
    title: 'To The CMS',
    content: 'SUB- Prayer for facilities in medical pass as cancer patient. Respected sir, mam I beg to state that...',
    color: 'default',
    timestamp: new Date('2025-10-18T14:00:00Z'),
  },
  // ...other notes
];

// --- Main Notes Page Component ---
export default function NotesPg() {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [isFormExpanded, setIsFormExpanded] = useState(false);

  // State for the new note form
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteColor, setNewNoteColor] = useState('default');

  // --- NEW: State for editing ---
  // This will hold the note object that the user wants to edit
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  /**
   * CREATE Note
   */
  const handleAddNote = () => {
    if (newNoteContent.trim() === '' && newNoteTitle.trim() === '') {
      setIsFormExpanded(false);
      return;
    }
    const newNote: Note = {
      id: crypto.randomUUID(),
      title: newNoteTitle.trim(),
      content: newNoteContent.trim(),
      color: newNoteColor,
      timestamp: new Date(),
    };
    setNotes([newNote, ...notes]);
    setNewNoteTitle('');
    setNewNoteContent('');
    setNewNoteColor('default');
    setIsFormExpanded(false);
  };

  /**
   * --- NEW: UPDATE Note ---
   * This function is passed to the modal.
   * It receives the updated note data and saves it.
   */
  const handleUpdateNote = (updatedNote: Note) => {
    setNotes(notes.map(note =>
      note.id === updatedNote.id
        ? { ...updatedNote, timestamp: new Date() } // Update note and timestamp
        : note
    ));
    setEditingNote(null); // Close the modal
  };

  /**
   * DELETE Note
   */
  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
    // If the note being edited is deleted, close the modal
    if (editingNote && editingNote.id === id) {
      setEditingNote(null);
    }
  };

  /**
   * --- NEW: Open Edit Modal ---
   * Sets the `editingNote` state to the note that was clicked.
   */
  const handleOpenEditModal = (note: Note) => {
    setEditingNote(note);
  };

  /**
   * --- NEW: Close Edit Modal ---
   * Resets the `editingNote` state to null.
   */
  const handleCloseEditModal = () => {
    setEditingNote(null);
  };

  /**
   * Formats the timestamp for display.
   */
  const formatTimestamp = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).format(date);
  };

  // --- JSX Rendering ---
  return (
    <div className="container mx-auto max-w-7xl p-4 md:p-8">

      {/* --- ADD NOTE FORM --- */}
      <div className="flex justify-center mb-8">
        <div
          className={`w-full max-w-xl bg-white rounded-lg shadow-lg border ${getColorClasses(newNoteColor).border} transition-all duration-300 overflow-hidden`}
        >
          {isFormExpanded && (
            <input
              type="text"
              placeholder="Title"
              value={newNoteTitle}
              onChange={(e) => setNewNoteTitle(e.target.value)}
              className={`w-full p-3 font-semibold text-gray-800 focus:outline-none ${getColorClasses(newNoteColor).bg}`}
            />
          )}
          <textarea
            placeholder="Take a note..."
            rows={isFormExpanded ? 3 : 1}
            value={newNoteContent}
            onChange={(e) => setNewNoteContent(e.target.value)}
            onFocus={() => setIsFormExpanded(true)}
            className={`w-full p-3 text-gray-700 focus:outline-none resize-none ${getColorClasses(newNoteColor).bg}`}
          />
          {isFormExpanded && (
            <div className={`flex justify-between items-center p-2 ${getColorClasses(newNoteColor).bg}`}>
              {/* Color Palette Selector */}
              <div className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-gray-600 ml-1" />
                {colorOptions.map(color => (
                  <button
                    key={color.id}
                    type="button"
                    onClick={() => setNewNoteColor(color.id)}
                    className={`h-6 w-6 rounded-full border ${color.border} ${color.bg} ${newNoteColor === color.id ? 'ring-2 ring-indigo-500 ring-offset-1' : ''}`}
                    aria-label={`Set color to ${color.id}`}
                  />
                ))}
              </div>
              {/* Form Actions */}
              <button
                onClick={handleAddNote}
                className="text-indigo-600 font-semibold hover:bg-indigo-50 px-3 py-1 rounded"
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>

      {/* --- NOTES MASONRY GRID --- */}
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4">
        {notes.map(note => (
          <NoteCard
            key={note.id}
            note={note}
            onDelete={handleDeleteNote}
            onOpenEdit={handleOpenEditModal} // Pass the function
            formatTimestamp={formatTimestamp}
          />
        ))}
      </div>

      {/* --- NEW: EDIT NOTE MODAL --- */}
      {/* This modal will only be rendered if `editingNote` is not null */}
      {editingNote && (
        <EditNoteModal
          note={editingNote}
          onSave={handleUpdateNote}
          onClose={handleCloseEditModal}
          onDelete={handleDeleteNote}
          formatTimestamp={formatTimestamp}
        />
      )}
    </div>
  );
}

// --- Note Card Component ---
interface NoteCardProps {
  note: Note;
  onDelete: (id: string) => void;
  onOpenEdit: (note: Note) => void; // Function to open the modal
  formatTimestamp: (date: Date) => string;
}

function NoteCard({ note, onDelete, onOpenEdit, formatTimestamp }: NoteCardProps) {
  const color = getColorClasses(note.color);

  /**
   * --- NEW: Handle Delete Click ---
   * We must stop propagation to prevent the card's
   * onClick (which opens the modal) from firing.
   */
  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Stop click from bubbling up to the card
    onDelete(note.id);
  };

  return (
    <div
      onClick={() => onOpenEdit(note)} // --- NEW: Click to open modal
      className={`mb-4 p-4 rounded-lg border ${color.border} ${color.bg} shadow-sm break-inside-avoid-column group hover:shadow-md transition-shadow duration-200 cursor-pointer`}
    >
      {note.title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{note.title}</h3>
      )}
      <p className="text-gray-800 whitespace-pre-wrap">{note.content}</p>

      <div className="flex justify-between items-center mt-4 pt-2 border-t border-black border-opacity-5">
        <div className="flex items-center gap-1.5">
          <Clock className="h-3 w-3 text-gray-500" />
          <span className="text-xs text-gray-500">
            {formatTimestamp(note.timestamp)}
          </span>
        </div>

        <button
          onClick={handleDeleteClick} // --- UPDATED: Use new handler
          className="p-1 rounded-full text-gray-500 hover:text-red-500 hover:bg-red-100 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Delete note"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}


// --- NEW: Edit Note Modal Component ---
// This component handles the editing popup
interface EditNoteModalProps {
  note: Note;
  onSave: (updatedNote: Note) => void;
  onClose: () => void;
  onDelete: (id: string) => void;
  formatTimestamp: (date: Date) => string;
}

function EditNoteModal({ note, onSave, onClose, onDelete, formatTimestamp }: EditNoteModalProps) {
  // --- NEW: Local state for editing ---
  // We initialize the form with the note's current data
  const [editTitle, setEditTitle] = useState(note.title);
  const [editContent, setEditContent] = useState(note.content);
  const [editColor, setEditColor] = useState(note.color);

  /**
   * --- NEW: Handle Save Click ---
   * Creates the updated note object and passes it
   * to the `onSave` function from the parent.
   */
  const handleSave = () => {
    if (editContent.trim() === '' && editTitle.trim() === '') {
      // If user clears the note, delete it instead
      onDelete(note.id);
      return;
    }
    onSave({
      ...note,
      title: editTitle.trim(),
      content: editContent.trim(),
      color: editColor,
    });
  };

  /**
   * --- NEW: Handle Delete Click ---
   * Calls the parent's delete function and closes the modal.
   */
  const handleDelete = () => {
    // We add a confirmation here because deleting from the modal is permanent
    if (window.confirm("Are you sure you want to delete this note?")) {
      onDelete(note.id);
      onClose();
    }
  };

  const color = getColorClasses(editColor);

  return (
    // Modal Backdrop: Covers the screen
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4"
      onClick={onClose} // Click outside to close
    >
      {/* Modal Content: The actual form */}
      <div
        className={`w-full max-w-xl rounded-lg shadow-2xl border ${color.border} ${color.bg} transition-all duration-300 overflow-hidden`}
        onClick={e => e.stopPropagation()} // Stop clicks inside the modal from closing it
      >
        <input
          type="text"
          placeholder="Title"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          className={`w-full p-3 font-semibold text-gray-800 focus:outline-none ${color.bg}`}
        />
        <textarea
          placeholder="Take a note..."
          rows={10} // Make the text area larger for editing
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
          className={`w-full p-3 text-gray-700 focus:outline-none resize-none ${color.bg}`}
          autoFocus // Automatically focus the content when modal opens
        />
        <div className={`flex justify-between items-center p-2 ${color.bg}`}>
          {/* Color Palette & Delete Button */}
          <div className="flex items-center gap-2">
            <Palette className="h-5 w-5 text-gray-600 ml-1" />
            {colorOptions.map(opt => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setEditColor(opt.id)}
                className={`h-6 w-6 rounded-full border ${opt.border} ${opt.bg} ${editColor === opt.id ? 'ring-2 ring-indigo-500 ring-offset-1' : ''}`}
                aria-label={`Set color to ${opt.id}`}
              />
            ))}
            <button
              onClick={handleDelete}
              className="p-1.5 rounded-full text-gray-500 hover:text-red-500 hover:bg-red-100 ml-2"
              aria-label="Delete note"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>

          {/* Timestamp and Save Button */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-500">
              Edited {formatTimestamp(note.timestamp)}
            </span>
            <button
              onClick={handleSave}
              className="text-indigo-600 font-semibold hover:bg-indigo-50 px-4 py-1.5 rounded"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


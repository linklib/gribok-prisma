//import React, { useCallback, useContext, useEffect, useMemo } from 'react'
import React, { useCallback, useEffect, useMemo } from 'react'

import { Controller, ControllerProps, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { SchemaOf } from 'yup'
import {
  PostCreateInput,
  useCreatePostMutation,
} from 'src/modules/gql/generated'
import TextField from 'src/components/ui/form/TextField'
import Button from 'src/components/ui/Button'

import { CreatePostFormStyled } from './styles'
//import { Context } from 'src/pages/_App/Context'
//import FormControl from '@prisma-cms/ui/dist/form/FormControl'

/**
 * Форма добавления поста
 */
const CreatePostForm: React.FC = () => {
  //const context = useContext(Context)

  /**
   * Описываем структуру формы в соответствии с типизацией
   */
  const schema = useMemo(() => {
    const schema: SchemaOf<PostCreateInput> = yup
      .object({
        title: yup.string().required(),
        text: yup.string(),
      })
      .defined()

    return schema
  }, [])

  const { handleSubmit, control, formState, trigger } =
    useForm<PostCreateInput>({
      resolver: yupResolver(schema),
      shouldFocusError: true,
      /**
       * Устанавливаем режим ревалидации формы при изменении данных.
       * https://github.com/react-hook-form/react-hook-form/issues/2755#issuecomment-683268595
       */
      mode: 'onChange',
      /*defaultValues: {
        showEmail: false,
        showFullname: true,
      },*/
    })

  /**
   * При загрузке формы сразу вызываем валидацию формы,
   * чтобы показать обязательные поля
   */
  useEffect(() => {
    trigger()
  }, [trigger])

  /**
   * Хук регистрации
   */

  const [creatpostMutation, { loading: createpostLoading }] =
    useCreatePostMutation()

  /**
   * Отправка формы
   */
  const onSubmit = handleSubmit((data) => {
    if (createpostLoading) {
      return
    }

    /**
     * Выполняем запрос на сервер
     */
    creatpostMutation({
      variables: {
        data,
      },
    }) /*
      .then((r) => {
        if (r.data?.createPost) {
          context?.onAuthSuccess(r.data.createPost)
        }
      })
      .catch((error) => {
        alert(error.message)
      })*/
  })

  /**
   * Рендерер поля
   */
  const titleFieldRender: ControllerProps<PostCreateInput, 'title'>['render'] =
    useCallback(({ field, formState }) => {
      return (
        <TextField
          type="text"
          title="Наименование"
          {...field}
          value={field.value || ''}
          error={formState.errors[field.name]}
        />
      )
    }, [])

  const textFieldRender: ControllerProps<PostCreateInput, 'text'>['render'] =
    useCallback(({ field, formState }) => {
      return (
        <TextField
          type="text"
          title="Текст"
          {...field}
          value={field.value || ''}
          error={formState.errors[field.name]}
        />
      )
    }, [])

  return useMemo(() => {
    return (
      <>
        <CreatePostFormStyled onSubmit={onSubmit}>
          <h2>Добавить пост</h2>

          <Controller
            name="title"
            control={control}
            render={titleFieldRender}
          />

          <Controller name="text" control={control} render={textFieldRender} />

          <Button
            type="submit"
            disabled={createpostLoading || !formState.isValid}
            variant={formState.isValid ? 'success' : 'default'}
          >
            Добавить
          </Button>
        </CreatePostFormStyled>
      </>
    )
  }, [
    control,
    titleFieldRender,
    formState.isValid,
    textFieldRender,
    onSubmit,
    createpostLoading,
  ])
}

export default CreatePostForm

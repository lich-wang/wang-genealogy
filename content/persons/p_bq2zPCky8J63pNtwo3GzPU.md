---
schema: wang-person/v1
id: p_bq2zPCky8J63pNtwo3GzPU
status: active
merged_into: null
display_name: 王汝舟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_quQ6sxUWCtDy87SZP6YHxA
        subject_person_id: p_bq2zPCky8J63pNtwo3GzPU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝舟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EoGR9ei8ssx5XR88mPh1wS
          claim_id: c_quQ6sxUWCtDy87SZP6YHxA
          source_id: s_biPQzhm4P7iCmoX1SDkfCM
          stance: supports
          locator: CBDB:282877
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282877）
          source: &a1
            id: s_biPQzhm4P7iCmoX1SDkfCM
            source_type: api_record
            title: 中国历代人物传记资料库：王汝舟（CBDB 282877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282877&o=json
            external_identifier: CBDB:282877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.114Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GQirPsw8NMYwETXWRxMwKK
        subject_person_id: p_bq2zPCky8J63pNtwo3GzPU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝舟，明人物。正德十二年進士，籍贯華陽，曾任監察御史。（中国历代人物传记资料库 CBDB 282877）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_44Y-dq0SLIgA0Zt34d5c3C
          claim_id: c_GQirPsw8NMYwETXWRxMwKK
          source_id: s_biPQzhm4P7iCmoX1SDkfCM
          stance: supports
          locator: CBDB:282877
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fY9no7WYA_yjq55CFC7KUk
        subject_person_id: p_M8mLU7jMxuqHMpgBkkJ8hB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bq2zPCky8J63pNtwo3GzPU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m5q7Tok6oq6CnffUrB5E89
          claim_id: c_fY9no7WYA_yjq55CFC7KUk
          source_id: s_IF94Z7yqjFha9DfrNpn2aR
          stance: supports
          locator: CBDB：兄弟 王汝梅（68445）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝舟 与 王汝梅 为同胞（CBDB 记「弟」），王汝梅 之父／母即 王汝舟 之父／母。
          source:
            id: s_IF94Z7yqjFha9DfrNpn2aR
            source_type: api_record
            title: 中国历代人物传记资料库：王汝舟（CBDB 282877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282877&o=json
            external_identifier: CBDB:282877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_M8mLU7jMxuqHMpgBkkJ8hB
        status: active
        display_name: 王弼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_kCWmZBAsKAHFOXsB0-7Xfj
        subject_person_id: p_bq2zPCky8J63pNtwo3GzPU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_x6tYqQFJHDF8Lt8wgXM9MU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hu27f5di9sFp4Hoxx_ykEQ
          claim_id: c_kCWmZBAsKAHFOXsB0-7Xfj
          source_id: s_IF94Z7yqjFha9DfrNpn2aR
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68445 王汝梅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IF94Z7yqjFha9DfrNpn2aR
            source_type: api_record
            title: 中国历代人物传记资料库：王汝舟（CBDB 282877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282877&o=json
            external_identifier: CBDB:282877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_x6tYqQFJHDF8Lt8wgXM9MU
        status: active
        display_name: 王汝梅
        merged_into_person_id: null
---

# 王汝舟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝舟 | accepted |
| bio.summary | 王汝舟，明人物。正德十二年進士，籍贯華陽，曾任監察御史。（中国历代人物传记资料库 CBDB 282877） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_M8mLU7jMxuqHMpgBkkJ8hB | 王弼 | accepted |
| other | p_x6tYqQFJHDF8Lt8wgXM9MU | 王汝梅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝舟（CBDB 282877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282877&o=json)

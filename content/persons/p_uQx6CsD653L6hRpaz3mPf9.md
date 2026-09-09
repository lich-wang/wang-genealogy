---
schema: wang-person/v1
id: p_uQx6CsD653L6hRpaz3mPf9
status: active
merged_into: null
display_name: 王同祖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WkGMJAaLwkUfkHJZhZA4mp
        subject_person_id: p_uQx6CsD653L6hRpaz3mPf9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J7wkTsPCUixmJL49b3FkC7
          claim_id: c_WkGMJAaLwkUfkHJZhZA4mp
          source_id: s_1syMbZKNxAvCUu4pgsdbjQ
          stance: supports
          locator: CBDB:126516
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126516）
          source: &a1
            id: s_1syMbZKNxAvCUu4pgsdbjQ
            source_type: api_record
            title: 中国历代人物传记资料库：王同祖（CBDB 126516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126516&o=json
            external_identifier: CBDB:126516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.995Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9SQsrJBzAQQrSJ2gRnnHeu
        subject_person_id: p_uQx6CsD653L6hRpaz3mPf9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1497年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CD4TrCwCPU7u5fDczUBfMr
          claim_id: c_9SQsrJBzAQQrSJ2gRnnHeu
          source_id: s_1syMbZKNxAvCUu4pgsdbjQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_YHjPKBM7DxgfPz8pG2nL3N
        subject_person_id: p_uQx6CsD653L6hRpaz3mPf9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1551年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QNPDF73GwPwdRuzz7RNiMg
          claim_id: c_YHjPKBM7DxgfPz8pG2nL3N
          source_id: s_1syMbZKNxAvCUu4pgsdbjQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1yQYQVppPXyU3xD3W989jE
        subject_person_id: p_uQx6CsD653L6hRpaz3mPf9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j6xh37CjHEXGDuh376Hn7k
          claim_id: c_1yQYQVppPXyU3xD3W989jE
          source_id: s_1syMbZKNxAvCUu4pgsdbjQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王同祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同祖 | accepted |
| birth.date | 1497年 | accepted |
| death.date | 1551年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王同祖（CBDB 126516）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126516&o=json)

---
schema: wang-person/v1
id: p_vwdwPi6rUyzNFb5YrEKMzr
status: active
merged_into: null
display_name: 王棟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o1xra6MkGLnE4DHnD7xtHV
        subject_person_id: p_vwdwPi6rUyzNFb5YrEKMzr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VMTxrk7EjYKGbxHHZYRXQr
          claim_id: c_o1xra6MkGLnE4DHnD7xtHV
          source_id: s_RZdaCW5VPULD5bE4yVKrDz
          stance: supports
          locator: CBDB:126714
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126714）
          source: &a1
            id: s_RZdaCW5VPULD5bE4yVKrDz
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 126714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126714&o=json
            external_identifier: CBDB:126714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.148Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_13bvDGX849EkPiqu6MtMyM
        subject_person_id: p_vwdwPi6rUyzNFb5YrEKMzr
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1503年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pcDjMG2ZdE3VNENzW7gVt1
          claim_id: c_13bvDGX849EkPiqu6MtMyM
          source_id: s_RZdaCW5VPULD5bE4yVKrDz
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
        id: c_1NVohhza6fBqNC4VtQEQDf
        subject_person_id: p_vwdwPi6rUyzNFb5YrEKMzr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1576年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rvQBPKbNJ225GPoPtSAqbd
          claim_id: c_1NVohhza6fBqNC4VtQEQDf
          source_id: s_RZdaCW5VPULD5bE4yVKrDz
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
        id: c_aFL5rCjd5jXyySSagvEesV
        subject_person_id: p_vwdwPi6rUyzNFb5YrEKMzr
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
        - id: cs_NFKLzLpa5DEgKcQj8XwYMM
          claim_id: c_aFL5rCjd5jXyySSagvEesV
          source_id: s_RZdaCW5VPULD5bE4yVKrDz
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

# 王棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棟 | accepted |
| birth.date | 1503年 | accepted |
| death.date | 1576年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王棟（CBDB 126714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126714&o=json)

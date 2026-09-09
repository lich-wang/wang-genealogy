---
schema: wang-person/v1
id: p_yPDG6qr1bXraqFkBrL15Y6
status: active
merged_into: null
display_name: 王光宇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_64edeag7T2NdU1rZw7sqyM
        subject_person_id: p_yPDG6qr1bXraqFkBrL15Y6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光宇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VVaoEYiWZvANPAX61tufpV
          claim_id: c_64edeag7T2NdU1rZw7sqyM
          source_id: s_hGG9frsW4BTFPj6nEKs31P
          stance: supports
          locator: CBDB:202958
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202958）
          source: &a1
            id: s_hGG9frsW4BTFPj6nEKs31P
            source_type: api_record
            title: 中国历代人物传记资料库：王光宇（CBDB 202958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202958&o=json
            external_identifier: CBDB:202958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.766Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5J6kKvXV2QStUfY2WV6QHo
        subject_person_id: p_yPDG6qr1bXraqFkBrL15Y6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1510年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7s29LwGR71X6JkpoLXFo4b
          claim_id: c_5J6kKvXV2QStUfY2WV6QHo
          source_id: s_hGG9frsW4BTFPj6nEKs31P
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KNXUNfCUg1ZSi5KTYLUk5e
        subject_person_id: p_yPDG6qr1bXraqFkBrL15Y6
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
        - id: cs_3G4BGCZtxD8rWEALKrCqf4
          claim_id: c_KNXUNfCUg1ZSi5KTYLUk5e
          source_id: s_hGG9frsW4BTFPj6nEKs31P
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

# 王光宇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光宇 | accepted |
| birth.date | 1510年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光宇（CBDB 202958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202958&o=json)

---
schema: wang-person/v1
id: p_BYDSNUPk7U99Wpw23cKFea
status: active
merged_into: null
display_name: 王政
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F7Rth51RamiDdBKcaeHKhr
        subject_person_id: p_BYDSNUPk7U99Wpw23cKFea
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F3FK36ei9XNXwWH7mtZ7Ad
          claim_id: c_F7Rth51RamiDdBKcaeHKhr
          source_id: s_VSKoMaqBCZeyNXdnxdNLy3
          stance: supports
          locator: CBDB:252674
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（252674）
          source: &a1
            id: s_VSKoMaqBCZeyNXdnxdNLy3
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 252674）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252674&o=json
            external_identifier: CBDB:252674
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.273Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9n72VoTP6j7339oFABjdiX
        subject_person_id: p_BYDSNUPk7U99Wpw23cKFea
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
        - id: cs_KtPLmsWLzSRX5uKLfdpFLc
          claim_id: c_9n72VoTP6j7339oFABjdiX
          source_id: s_VSKoMaqBCZeyNXdnxdNLy3
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

# 王政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王政（CBDB 252674）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252674&o=json)

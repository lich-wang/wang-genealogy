---
schema: wang-person/v1
id: p_eab83fhKiYdmkqRbFKa9Kk
status: active
merged_into: null
display_name: 王應科
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_66JrZrTMvEbkqSEHFL4o8q
        subject_person_id: p_eab83fhKiYdmkqRbFKa9Kk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應科
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TGqux4Rj7n2pgpBCbJnSgh
          claim_id: c_66JrZrTMvEbkqSEHFL4o8q
          source_id: s_VQuitjz7w9KkjRgmPHWUPa
          stance: supports
          locator: CBDB:551388
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551388）
          source: &a1
            id: s_VQuitjz7w9KkjRgmPHWUPa
            source_type: api_record
            title: 中国历代人物传记资料库：王應科（CBDB 551388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551388&o=json
            external_identifier: CBDB:551388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.591Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WbLFtN3ZdddDNziCeJtK3t
        subject_person_id: p_eab83fhKiYdmkqRbFKa9Kk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uz99bFa44Ld5Vz3BNd51TY
          claim_id: c_WbLFtN3ZdddDNziCeJtK3t
          source_id: s_VQuitjz7w9KkjRgmPHWUPa
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

# 王應科

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應科 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應科（CBDB 551388）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551388&o=json)

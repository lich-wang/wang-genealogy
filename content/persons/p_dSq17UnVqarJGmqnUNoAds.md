---
schema: wang-person/v1
id: p_dSq17UnVqarJGmqnUNoAds
status: active
merged_into: null
display_name: 王春煦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jGBCR94qR35xGxo4esE7eg
        subject_person_id: p_dSq17UnVqarJGmqnUNoAds
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春煦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ubhu9sm5poEWSXkJKZqp82
          claim_id: c_jGBCR94qR35xGxo4esE7eg
          source_id: s_huuE8AGf2q7Ap7AGTKP8Y8
          stance: supports
          locator: CBDB:71842
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71842）
          source: &a1
            id: s_huuE8AGf2q7Ap7AGTKP8Y8
            source_type: api_record
            title: 中国历代人物传记资料库：王春煦（CBDB 71842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71842&o=json
            external_identifier: CBDB:71842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.895Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PeyN5n1bVJq4HMuEF4kMaK
        subject_person_id: p_dSq17UnVqarJGmqnUNoAds
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1744年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4icrQNJz1apSwPBXNHe7ER
          claim_id: c_PeyN5n1bVJq4HMuEF4kMaK
          source_id: s_huuE8AGf2q7Ap7AGTKP8Y8
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
        id: c_1b7koPieQJeUa53bZLGUkh
        subject_person_id: p_dSq17UnVqarJGmqnUNoAds
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1800年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8zJ81CKXfJL8BGih64p8Jw
          claim_id: c_1b7koPieQJeUa53bZLGUkh
          source_id: s_huuE8AGf2q7Ap7AGTKP8Y8
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
        id: c_1QuSVivmQzQGW5LF2AWN7w
        subject_person_id: p_dSq17UnVqarJGmqnUNoAds
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
        - id: cs_nLrAPCFF4S4K373RBgXBAp
          claim_id: c_1QuSVivmQzQGW5LF2AWN7w
          source_id: s_huuE8AGf2q7Ap7AGTKP8Y8
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

# 王春煦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王春煦 | accepted |
| birth.date | 1744年 | accepted |
| death.date | 1800年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王春煦（CBDB 71842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71842&o=json)

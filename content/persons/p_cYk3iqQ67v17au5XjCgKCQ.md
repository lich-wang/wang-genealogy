---
schema: wang-person/v1
id: p_cYk3iqQ67v17au5XjCgKCQ
status: active
merged_into: null
display_name: 王夢熊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DkcJopE2D83pJywRDvFZHN
        subject_person_id: p_cYk3iqQ67v17au5XjCgKCQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢熊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_go4Z3oHYKGXfhuWqtKBFBj
          claim_id: c_DkcJopE2D83pJywRDvFZHN
          source_id: s_ak4YR9Md2grMtmjHSMq523
          stance: supports
          locator: CBDB:69392
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69392）
          source: &a1
            id: s_ak4YR9Md2grMtmjHSMq523
            source_type: api_record
            title: 中国历代人物传记资料库：王夢熊（CBDB 69392）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69392&o=json
            external_identifier: CBDB:69392
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.247Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_87JTiatHwVxwGdJP12daZT
        subject_person_id: p_cYk3iqQ67v17au5XjCgKCQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1860年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ebLWuVrZgMGYFbuQV9H4H6
          claim_id: c_87JTiatHwVxwGdJP12daZT
          source_id: s_ak4YR9Md2grMtmjHSMq523
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
        id: c_z3wMMmQZdEYBExsx8KRcFr
        subject_person_id: p_cYk3iqQ67v17au5XjCgKCQ
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
        - id: cs_K91dCk7K85NbRTdtxwVDTG
          claim_id: c_z3wMMmQZdEYBExsx8KRcFr
          source_id: s_ak4YR9Md2grMtmjHSMq523
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

# 王夢熊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢熊 | accepted |
| death.date | 1860年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢熊（CBDB 69392）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69392&o=json)

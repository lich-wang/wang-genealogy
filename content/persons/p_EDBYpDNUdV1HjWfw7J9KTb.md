---
schema: wang-person/v1
id: p_EDBYpDNUdV1HjWfw7J9KTb
status: active
merged_into: null
display_name: 王希元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AvTsMi3pn5j7wqVtJGBrtN
        subject_person_id: p_EDBYpDNUdV1HjWfw7J9KTb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5fAV9i4HZp5Vg9s3RFx8FJ
          claim_id: c_AvTsMi3pn5j7wqVtJGBrtN
          source_id: s_JjixoFugZfqfs9SQ42nMPk
          stance: supports
          locator: CBDB:459422
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（459422）
          source: &a1
            id: s_JjixoFugZfqfs9SQ42nMPk
            source_type: api_record
            title: 中国历代人物传记资料库：王希元（CBDB 459422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459422&o=json
            external_identifier: CBDB:459422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.693Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GDt3KAs265vWf4fvKk3Bn8
        subject_person_id: p_EDBYpDNUdV1HjWfw7J9KTb
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
        - id: cs_sB2K7VdRRdx2hg2JjMkACU
          claim_id: c_GDt3KAs265vWf4fvKk3Bn8
          source_id: s_JjixoFugZfqfs9SQ42nMPk
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

# 王希元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希元 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希元（CBDB 459422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459422&o=json)

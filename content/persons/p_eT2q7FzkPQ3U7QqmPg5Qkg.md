---
schema: wang-person/v1
id: p_eT2q7FzkPQ3U7QqmPg5Qkg
status: active
merged_into: null
display_name: 王敘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M8gGE7vdfKsGf5j3ktpqc4
        subject_person_id: p_eT2q7FzkPQ3U7QqmPg5Qkg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dK8twE9gnBWkBEWT4sx4TN
          claim_id: c_M8gGE7vdfKsGf5j3ktpqc4
          source_id: s_HwM1uuNbU1XRDYfergAfD6
          stance: supports
          locator: CBDB:191075
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191075）
          source: &a1
            id: s_HwM1uuNbU1XRDYfergAfD6
            source_type: api_record
            title: 中国历代人物传记资料库：王敘（CBDB 191075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191075&o=json
            external_identifier: CBDB:191075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.346Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_7YcUqJnXSVwMeGB1vM6xBX
        subject_person_id: p_eT2q7FzkPQ3U7QqmPg5Qkg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 818年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7C6w6UooabrKPXgqUmm9uJ
          claim_id: c_7YcUqJnXSVwMeGB1vM6xBX
          source_id: s_HwM1uuNbU1XRDYfergAfD6
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
        id: c_2KpCF9RCdN3JJdeyx6yubJ
        subject_person_id: p_eT2q7FzkPQ3U7QqmPg5Qkg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ax7KMiJy5rmJmj68ysZ4nJ
          claim_id: c_2KpCF9RCdN3JJdeyx6yubJ
          source_id: s_HwM1uuNbU1XRDYfergAfD6
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

# 王敘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敘 | accepted |
| death.date | 818年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敘（CBDB 191075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191075&o=json)

---
schema: wang-person/v1
id: p_QJyGeJYeYVZd8WUAKnrsuB
status: active
merged_into: null
display_name: 王謐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2jH1mDL2cv1JED4QQJCM1m
        subject_person_id: p_QJyGeJYeYVZd8WUAKnrsuB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J8ZSi6AN18KcWu3M8uKcTn
          claim_id: c_2jH1mDL2cv1JED4QQJCM1m
          source_id: s_Rv87eJtVNojXPBpMkxhgjT
          stance: supports
          locator: CBDB:309957
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309957）
          source: &a1
            id: s_Rv87eJtVNojXPBpMkxhgjT
            source_type: api_record
            title: 中国历代人物传记资料库：王謐（CBDB 309957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309957&o=json
            external_identifier: CBDB:309957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.832Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vG2CuZFyy678HznDF9Rred
        subject_person_id: p_QJyGeJYeYVZd8WUAKnrsuB
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
        - id: cs_sTsqxHz5N51QHSdUx8eH4q
          claim_id: c_vG2CuZFyy678HznDF9Rred
          source_id: s_Rv87eJtVNojXPBpMkxhgjT
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

# 王謐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謐 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王謐（CBDB 309957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309957&o=json)

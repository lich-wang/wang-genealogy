---
schema: wang-person/v1
id: p_FAZ6o2kej8gegK9CExMqrS
status: active
merged_into: null
display_name: 王叔仲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3skRKhKc1AyjEoo7Ph2Jvz
        subject_person_id: p_FAZ6o2kej8gegK9CExMqrS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔仲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_APZx8oj6t2Pah32WawcFfy
          claim_id: c_3skRKhKc1AyjEoo7Ph2Jvz
          source_id: s_7RubacgFMkLn9jMr6zdPxA
          stance: supports
          locator: CBDB:175716
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175716）
          source: &a1
            id: s_7RubacgFMkLn9jMr6zdPxA
            source_type: api_record
            title: 中国历代人物传记资料库：王叔仲（CBDB 175716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175716&o=json
            external_identifier: CBDB:175716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.078Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_p79oLprCRLRuENPLqafUM1
        subject_person_id: p_FAZ6o2kej8gegK9CExMqrS
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 841年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K8QuHTWpkcQeH1E1z7UjtQ
          claim_id: c_p79oLprCRLRuENPLqafUM1
          source_id: s_7RubacgFMkLn9jMr6zdPxA
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
        id: c_48aK3J164zir4vsgJZ97a2
        subject_person_id: p_FAZ6o2kej8gegK9CExMqrS
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
        - id: cs_2ErEztkz4G6Bzw9zB6GB3a
          claim_id: c_48aK3J164zir4vsgJZ97a2
          source_id: s_7RubacgFMkLn9jMr6zdPxA
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

# 王叔仲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王叔仲 | accepted |
| death.date | 841年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王叔仲（CBDB 175716）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175716&o=json)

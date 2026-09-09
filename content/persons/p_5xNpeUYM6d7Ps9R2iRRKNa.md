---
schema: wang-person/v1
id: p_5xNpeUYM6d7Ps9R2iRRKNa
status: active
merged_into: null
display_name: 王崇貞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gCUQAcUaCGVEHZ9bAmGXYu
        subject_person_id: p_5xNpeUYM6d7Ps9R2iRRKNa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_19Vo82e3kHuNKQ6zRnqxsr
          claim_id: c_gCUQAcUaCGVEHZ9bAmGXYu
          source_id: s_7BcX7x3Wyegke7XJnjqoBK
          stance: supports
          locator: CBDB:192642
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192642）
          source: &a1
            id: s_7BcX7x3Wyegke7XJnjqoBK
            source_type: api_record
            title: 中国历代人物传记资料库：王崇貞（CBDB 192642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192642&o=json
            external_identifier: CBDB:192642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.409Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_pFLAy6jHG8qMpc252M8DLb
        subject_person_id: p_5xNpeUYM6d7Ps9R2iRRKNa
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 720年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zNEzKqp2ppNFtcgyKcM8Tr
          claim_id: c_pFLAy6jHG8qMpc252M8DLb
          source_id: s_7BcX7x3Wyegke7XJnjqoBK
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
        id: c_U1876EBPCTLHdxWMiu1bsh
        subject_person_id: p_5xNpeUYM6d7Ps9R2iRRKNa
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
        - id: cs_KxxLKJaXYfoi7A4RyjMNMe
          claim_id: c_U1876EBPCTLHdxWMiu1bsh
          source_id: s_7BcX7x3Wyegke7XJnjqoBK
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

# 王崇貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇貞 | accepted |
| death.date | 720年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崇貞（CBDB 192642）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192642&o=json)

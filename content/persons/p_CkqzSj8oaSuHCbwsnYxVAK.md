---
schema: wang-person/v1
id: p_CkqzSj8oaSuHCbwsnYxVAK
status: active
merged_into: null
display_name: 王謨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PTwBEXpCM1oaCyk26bX5os
        subject_person_id: p_CkqzSj8oaSuHCbwsnYxVAK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rx15ueWcWJ9tQDwxUKmmQk
          claim_id: c_PTwBEXpCM1oaCyk26bX5os
          source_id: s_yUr8BYwEsvdMwCUCQaAfSf
          stance: supports
          locator: CBDB:71231
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71231）
          source: &a1
            id: s_yUr8BYwEsvdMwCUCQaAfSf
            source_type: api_record
            title: 中国历代人物传记资料库：王謨（CBDB 71231）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71231&o=json
            external_identifier: CBDB:71231
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.510Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_L88dQXULypiSU52wA5NozV
        subject_person_id: p_CkqzSj8oaSuHCbwsnYxVAK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1732年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HkEfgWbe64v7hJjQTGpGvX
          claim_id: c_L88dQXULypiSU52wA5NozV
          source_id: s_yUr8BYwEsvdMwCUCQaAfSf
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
        id: c_wXEH6dg35Qw12j1HrpEboX
        subject_person_id: p_CkqzSj8oaSuHCbwsnYxVAK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1817年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wuKENkRNXMJWtafyQkzS3e
          claim_id: c_wXEH6dg35Qw12j1HrpEboX
          source_id: s_yUr8BYwEsvdMwCUCQaAfSf
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
        id: c_KZnFo2JMU8WeucVJ5PnhDL
        subject_person_id: p_CkqzSj8oaSuHCbwsnYxVAK
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
        - id: cs_7hXvmex3ghpv9NP6oNk6Hp
          claim_id: c_KZnFo2JMU8WeucVJ5PnhDL
          source_id: s_yUr8BYwEsvdMwCUCQaAfSf
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

# 王謨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謨 | accepted |
| birth.date | 1732年 | accepted |
| death.date | 1817年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王謨（CBDB 71231）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71231&o=json)

---
schema: wang-person/v1
id: p_A2FMZcBwz2Z4nhrvf4rDa7
status: active
merged_into: null
display_name: 王俊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j7zCupGYNNrirDskigpL83
        subject_person_id: p_A2FMZcBwz2Z4nhrvf4rDa7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sxgmbjLT1Frv5Axq4RtzAw
          claim_id: c_j7zCupGYNNrirDskigpL83
          source_id: s_t8NDeBEBYGnRdNeGJkgtcX
          stance: supports
          locator: CBDB:267105
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（267105）
          source: &a1
            id: s_t8NDeBEBYGnRdNeGJkgtcX
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 267105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267105&o=json
            external_identifier: CBDB:267105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.770Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xRHh5QcmL6Da4g26SiS6jr
        subject_person_id: p_A2FMZcBwz2Z4nhrvf4rDa7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊，明人物。景泰五年進士，籍贯溧水。（中国历代人物传记资料库 CBDB 267105）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FMLLL2_MSAHcyFdKwo6TGn
          claim_id: c_xRHh5QcmL6Da4g26SiS6jr
          source_id: s_t8NDeBEBYGnRdNeGJkgtcX
          stance: supports
          locator: CBDB:267105
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊 | accepted |
| bio.summary | 王俊，明人物。景泰五年進士，籍贯溧水。（中国历代人物传记资料库 CBDB 267105） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 267105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267105&o=json)

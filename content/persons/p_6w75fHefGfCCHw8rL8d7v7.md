---
schema: wang-person/v1
id: p_6w75fHefGfCCHw8rL8d7v7
status: active
merged_into: null
display_name: 王演
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p8SZ8Q5nGz6471CfDq26ow
        subject_person_id: p_6w75fHefGfCCHw8rL8d7v7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王演
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JGvCTtHX4dbGjNaGtrfB25
          claim_id: c_p8SZ8Q5nGz6471CfDq26ow
          source_id: s_61UYBLUDk9y3gmkeRptPGt
          stance: supports
          locator: CBDB:221611
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221611）
          source: &a1
            id: s_61UYBLUDk9y3gmkeRptPGt
            source_type: api_record
            title: 中国历代人物传记资料库：王演（CBDB 221611）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221611&o=json
            external_identifier: CBDB:221611
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.318Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zJ9KYxrxwEL8UkqKF16u5p
        subject_person_id: p_6w75fHefGfCCHw8rL8d7v7
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
        - id: cs_NxqDFEcuZAB4AyVsGNNaDC
          claim_id: c_zJ9KYxrxwEL8UkqKF16u5p
          source_id: s_61UYBLUDk9y3gmkeRptPGt
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

# 王演

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王演 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王演（CBDB 221611）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221611&o=json)

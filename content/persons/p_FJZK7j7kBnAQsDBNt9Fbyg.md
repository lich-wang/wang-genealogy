---
schema: wang-person/v1
id: p_FJZK7j7kBnAQsDBNt9Fbyg
status: active
merged_into: null
display_name: 王希程
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GqR1PEnx2Kr4YDbzkHBUUE
        subject_person_id: p_FJZK7j7kBnAQsDBNt9Fbyg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希程
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5beHydi2R2Ub87yxsX4L9X
          claim_id: c_GqR1PEnx2Kr4YDbzkHBUUE
          source_id: s_NpVqBDGLQa8E1ThWwu1TP8
          stance: supports
          locator: CBDB:315374
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（315374）
          source: &a1
            id: s_NpVqBDGLQa8E1ThWwu1TP8
            source_type: api_record
            title: 中国历代人物传记资料库：王希程（CBDB 315374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315374&o=json
            external_identifier: CBDB:315374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.943Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i9DhusQ9Un4NpoexJ3zzQK
        subject_person_id: p_FJZK7j7kBnAQsDBNt9Fbyg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希程，明人物。嘉靖三十二年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 315374）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D2r6eDx_bV_DvXKRLzEO5_
          claim_id: c_i9DhusQ9Un4NpoexJ3zzQK
          source_id: s_NpVqBDGLQa8E1ThWwu1TP8
          stance: supports
          locator: CBDB:315374
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

# 王希程

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希程 | accepted |
| bio.summary | 王希程，明人物。嘉靖三十二年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 315374） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希程（CBDB 315374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315374&o=json)

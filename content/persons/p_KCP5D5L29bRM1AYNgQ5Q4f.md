---
schema: wang-person/v1
id: p_KCP5D5L29bRM1AYNgQ5Q4f
status: active
merged_into: null
display_name: 王庭章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DeMuXgs9m9RY2LyiL8WjaY
        subject_person_id: p_KCP5D5L29bRM1AYNgQ5Q4f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h9c7QN7pZje9yfQpYBiL2T
          claim_id: c_DeMuXgs9m9RY2LyiL8WjaY
          source_id: s_5RH97KG5mHQcMm69DU58HM
          stance: supports
          locator: CBDB:691157
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（691157）
          source: &a1
            id: s_5RH97KG5mHQcMm69DU58HM
            source_type: api_record
            title: 中国历代人物传记资料库：王庭章（CBDB 691157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691157&o=json
            external_identifier: CBDB:691157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.489Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jZMRHAGuo1JdRRMRXy9TPM
        subject_person_id: p_KCP5D5L29bRM1AYNgQ5Q4f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭章，清人物。籍贯常熟，身份为戲曲作家。（中国历代人物传记资料库 CBDB 691157）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zMdaASzNcCGQB7zA1bK7dx
          claim_id: c_jZMRHAGuo1JdRRMRXy9TPM
          source_id: s_5RH97KG5mHQcMm69DU58HM
          stance: supports
          locator: CBDB:691157
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

# 王庭章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭章 | accepted |
| bio.summary | 王庭章，清人物。籍贯常熟，身份为戲曲作家。（中国历代人物传记资料库 CBDB 691157） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王庭章（CBDB 691157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691157&o=json)

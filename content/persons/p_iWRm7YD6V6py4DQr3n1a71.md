---
schema: wang-person/v1
id: p_iWRm7YD6V6py4DQr3n1a71
status: active
merged_into: null
display_name: 王光裕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7E8Lm8mazAvoDDRw7WfqkY
        subject_person_id: p_iWRm7YD6V6py4DQr3n1a71
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光裕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_96G1Yw7mte7yFvUXVBwFaq
          claim_id: c_7E8Lm8mazAvoDDRw7WfqkY
          source_id: s_QDHN9GcoJSobQGn49zXnSb
          stance: supports
          locator: CBDB:438795
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（438795）
          source: &a1
            id: s_QDHN9GcoJSobQGn49zXnSb
            source_type: api_record
            title: 中国历代人物传记资料库：王光裕（CBDB 438795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=438795&o=json
            external_identifier: CBDB:438795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.078Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k95rbRtftr5yPc5n88HabK
        subject_person_id: p_iWRm7YD6V6py4DQr3n1a71
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
        - id: cs_YSAEiMRPEJzpJu7p3dARQT
          claim_id: c_k95rbRtftr5yPc5n88HabK
          source_id: s_QDHN9GcoJSobQGn49zXnSb
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

# 王光裕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光裕 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光裕（CBDB 438795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=438795&o=json)

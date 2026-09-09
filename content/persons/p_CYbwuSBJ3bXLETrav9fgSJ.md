---
schema: wang-person/v1
id: p_CYbwuSBJ3bXLETrav9fgSJ
status: active
merged_into: null
display_name: 王文夑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PGxgxnzvibyX94GYA3rRhk
        subject_person_id: p_CYbwuSBJ3bXLETrav9fgSJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文夑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_X2E8Pz4CzbjFiDqQPyYVcE
          claim_id: c_PGxgxnzvibyX94GYA3rRhk
          source_id: s_R1Gxo1WL7j5LAaYMVTcc5R
          stance: supports
          locator: CBDB:638219
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638219）
          source: &a1
            id: s_R1Gxo1WL7j5LAaYMVTcc5R
            source_type: api_record
            title: 中国历代人物传记资料库：王文夑（CBDB 638219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638219&o=json
            external_identifier: CBDB:638219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.565Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ePEtih5Cw2grB86n3x8BFr
        subject_person_id: p_CYbwuSBJ3bXLETrav9fgSJ
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
        - id: cs_41KTBExhyqMpXs5cjk3qGv
          claim_id: c_ePEtih5Cw2grB86n3x8BFr
          source_id: s_R1Gxo1WL7j5LAaYMVTcc5R
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

# 王文夑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文夑 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文夑（CBDB 638219）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638219&o=json)

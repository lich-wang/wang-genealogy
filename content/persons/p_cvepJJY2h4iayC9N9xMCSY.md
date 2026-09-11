---
schema: wang-person/v1
id: p_cvepJJY2h4iayC9N9xMCSY
status: active
merged_into: null
display_name: 王佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1Wz7m27NzCCRe8pGbbf1yC
        subject_person_id: p_cvepJJY2h4iayC9N9xMCSY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JAFCkp2KG5gZUtNybp8dTz
          claim_id: c_1Wz7m27NzCCRe8pGbbf1yC
          source_id: s_mPXB66R8rSwyjtCXL8zQ2r
          stance: supports
          locator: CBDB:509880
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（509880）
          source: &a1
            id: s_mPXB66R8rSwyjtCXL8zQ2r
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 509880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509880&o=json
            external_identifier: CBDB:509880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.182Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_76fQMmU4zz6dc9Lb2LFdpP
        subject_person_id: p_cvepJJY2h4iayC9N9xMCSY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 509880）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5_7GGccKgBziR_vn-hoqQS
          claim_id: c_76fQMmU4zz6dc9Lb2LFdpP
          source_id: s_mPXB66R8rSwyjtCXL8zQ2r
          stance: supports
          locator: CBDB:509880
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

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| bio.summary | 王佐，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 509880） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佐（CBDB 509880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509880&o=json)

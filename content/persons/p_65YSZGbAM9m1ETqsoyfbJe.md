---
schema: wang-person/v1
id: p_65YSZGbAM9m1ETqsoyfbJe
status: active
merged_into: null
display_name: 王可大
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FCiSwors1NLkqEnrudhtPq
        subject_person_id: p_65YSZGbAM9m1ETqsoyfbJe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可大
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2ny5b1w3syXpWipLxp8rcL
          claim_id: c_FCiSwors1NLkqEnrudhtPq
          source_id: s_SkG7uaXZgLaHP5rd6e4FoE
          stance: supports
          locator: CBDB:341837
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341837）
          source: &a1
            id: s_SkG7uaXZgLaHP5rd6e4FoE
            source_type: api_record
            title: 中国历代人物传记资料库：王可大（CBDB 341837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341837&o=json
            external_identifier: CBDB:341837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.723Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LN7S2XpFu8Kh5sx9eKTmax
        subject_person_id: p_65YSZGbAM9m1ETqsoyfbJe
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
        - id: cs_eLXhm9zahg49mcm4FJKFKm
          claim_id: c_LN7S2XpFu8Kh5sx9eKTmax
          source_id: s_SkG7uaXZgLaHP5rd6e4FoE
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

# 王可大

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王可大 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王可大（CBDB 341837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341837&o=json)

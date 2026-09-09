---
schema: wang-person/v1
id: p_KGPVfEk4PZJsDf28sHFzED
status: active
merged_into: null
display_name: 王人作
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8B7GGnmQfKhymNwHaBm6wo
        subject_person_id: p_KGPVfEk4PZJsDf28sHFzED
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王人作
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xRJWctD3bdKdmt2M618yiw
          claim_id: c_8B7GGnmQfKhymNwHaBm6wo
          source_id: s_FCLJGrjkJXCgY3T5D3TbBy
          stance: supports
          locator: CBDB:635869
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635869）
          source: &a1
            id: s_FCLJGrjkJXCgY3T5D3TbBy
            source_type: api_record
            title: 中国历代人物传记资料库：王人作（CBDB 635869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635869&o=json
            external_identifier: CBDB:635869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.815Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZWPJtx4iGxC138taVB4Zkg
        subject_person_id: p_KGPVfEk4PZJsDf28sHFzED
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
        - id: cs_ACv11yC7qxA3tgotgCr56L
          claim_id: c_ZWPJtx4iGxC138taVB4Zkg
          source_id: s_FCLJGrjkJXCgY3T5D3TbBy
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

# 王人作

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王人作 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王人作（CBDB 635869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635869&o=json)

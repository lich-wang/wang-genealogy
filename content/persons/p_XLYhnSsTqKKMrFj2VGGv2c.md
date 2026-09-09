---
schema: wang-person/v1
id: p_XLYhnSsTqKKMrFj2VGGv2c
status: active
merged_into: null
display_name: 王顯齢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EoaHj2P99xdkSgXmUSL7N2
        subject_person_id: p_XLYhnSsTqKKMrFj2VGGv2c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯齢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Uf65G4KFzQpoEL67GgC8ze
          claim_id: c_EoaHj2P99xdkSgXmUSL7N2
          source_id: s_HvhMewBfMdGf5n6hsbvtWV
          stance: supports
          locator: CBDB:640875
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640875）
          source: &a1
            id: s_HvhMewBfMdGf5n6hsbvtWV
            source_type: api_record
            title: 中国历代人物传记资料库：王顯齢（CBDB 640875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640875&o=json
            external_identifier: CBDB:640875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.398Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_14aMENJJLYvbY5YVHAe3Za
        subject_person_id: p_XLYhnSsTqKKMrFj2VGGv2c
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
        - id: cs_gjpnqbK4Dp3RtFH6r5m4Ro
          claim_id: c_14aMENJJLYvbY5YVHAe3Za
          source_id: s_HvhMewBfMdGf5n6hsbvtWV
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

# 王顯齢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顯齢 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王顯齢（CBDB 640875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640875&o=json)

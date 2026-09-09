---
schema: wang-person/v1
id: p_SaFy448ZFRM3myf8Fswdxh
status: active
merged_into: null
display_name: 王銳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yzYyDxSavdP8dESnB9pBJh
        subject_person_id: p_SaFy448ZFRM3myf8Fswdxh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GHBL98QwF3F54QF96rKmdA
          claim_id: c_yzYyDxSavdP8dESnB9pBJh
          source_id: s_UxQuw4UbrTL7M8Q3BdDGhd
          stance: supports
          locator: CBDB:100952
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100952）
          source: &a1
            id: s_UxQuw4UbrTL7M8Q3BdDGhd
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 100952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100952&o=json
            external_identifier: CBDB:100952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.596Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3qP7z8PAEdrSRF1LNZvidT
        subject_person_id: p_SaFy448ZFRM3myf8Fswdxh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7hEMubGz4FJ2Kxu4r39TEJ
          claim_id: c_3qP7z8PAEdrSRF1LNZvidT
          source_id: s_UxQuw4UbrTL7M8Q3BdDGhd
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

# 王銳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銳 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王銳（CBDB 100952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100952&o=json)

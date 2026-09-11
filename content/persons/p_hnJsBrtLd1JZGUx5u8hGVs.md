---
schema: wang-person/v1
id: p_hnJsBrtLd1JZGUx5u8hGVs
status: active
merged_into: null
display_name: 王觀
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9k92yERjgEA2YTL1nPjWvx
        subject_person_id: p_hnJsBrtLd1JZGUx5u8hGVs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fMXjcMYxCkGEe3Q9cbV4Ra
          claim_id: c_9k92yERjgEA2YTL1nPjWvx
          source_id: s_DyobPWShM5Z4DDtDfanG4o
          stance: supports
          locator: CBDB:202360
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202360）
          source: &a1
            id: s_DyobPWShM5Z4DDtDfanG4o
            source_type: api_record
            title: 中国历代人物传记资料库：王觀（CBDB 202360）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202360&o=json
            external_identifier: CBDB:202360
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.738Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hp8X2j8x9JK2VJsMcBMZRU
        subject_person_id: p_hnJsBrtLd1JZGUx5u8hGVs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1384年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MRyYZVkgjvHqEuMY8PxTn6
          claim_id: c_hp8X2j8x9JK2VJsMcBMZRU
          source_id: s_DyobPWShM5Z4DDtDfanG4o
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ksBemLyVN4PKtBUE43XwZ8
        subject_person_id: p_hnJsBrtLd1JZGUx5u8hGVs
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
        - id: cs_tzrc3WGsp7g3zAx9zsbG7y
          claim_id: c_ksBemLyVN4PKtBUE43XwZ8
          source_id: s_DyobPWShM5Z4DDtDfanG4o
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
  ancestors:
    - claim:
        id: c_mZvlvzBSd4rojuQ94Y2IPO
        subject_person_id: p_eGGnfg1ytnKUPpRW58feMs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hnJsBrtLd1JZGUx5u8hGVs
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cy080p7YypE8abpOztxDqX
          claim_id: c_mZvlvzBSd4rojuQ94Y2IPO
          source_id: s_7Jb3UAhaq4AmBbRPxtsXx8
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第二十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7Jb3UAhaq4AmBbRPxtsXx8
            source_type: api_record
            title: 中国历代人物传记资料库：王順（CBDB 286975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286975&o=json
            external_identifier: CBDB:286975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.244Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eGGnfg1ytnKUPpRW58feMs
        status: active
        display_name: 王順
        merged_into_person_id: null
    - claim:
        id: c_CjT-QQVvVUhCtDRHDW-hXX
        subject_person_id: p_hugF54dY3ZL4EvueXh2puD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hnJsBrtLd1JZGUx5u8hGVs
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wAe9raLaZds4oGgDZyI_V5
          claim_id: c_CjT-QQVvVUhCtDRHDW-hXX
          source_id: s_83Hs2b3y8487KQJBwQxr77
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第二十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_83Hs2b3y8487KQJBwQxr77
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 286976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286976&o=json
            external_identifier: CBDB:286976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.244Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hugF54dY3ZL4EvueXh2puD
        status: active
        display_name: 王敬
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王觀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王觀 | accepted |
| birth.date | 1384年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_eGGnfg1ytnKUPpRW58feMs | 王順 | accepted |
| ancestors | p_hugF54dY3ZL4EvueXh2puD | 王敬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王觀（CBDB 202360）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202360&o=json)
- [中国历代人物传记资料库：王敬（CBDB 286976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286976&o=json)
- [中国历代人物传记资料库：王順（CBDB 286975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286975&o=json)

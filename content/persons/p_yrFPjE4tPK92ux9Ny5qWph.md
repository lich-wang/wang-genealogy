---
schema: wang-person/v1
id: p_yrFPjE4tPK92ux9Ny5qWph
status: active
merged_into: null
display_name: 王謹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rxyKBCBW6mrTPg2cG56q1U
        subject_person_id: p_yrFPjE4tPK92ux9Ny5qWph
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gnsi7yFdjCMTgqyMRj2PBH
          claim_id: c_rxyKBCBW6mrTPg2cG56q1U
          source_id: s_5qGHo6BLKLyKRQZVZyjcgv
          stance: supports
          locator: CBDB:321149
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（321149）
          source: &a1
            id: s_5qGHo6BLKLyKRQZVZyjcgv
            source_type: api_record
            title: 中国历代人物传记资料库：王謹（CBDB 321149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321149&o=json
            external_identifier: CBDB:321149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.080Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kdaVCh26rZ3h31Nv3TCuFk
        subject_person_id: p_yrFPjE4tPK92ux9Ny5qWph
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
        - id: cs_pFKrwXfP6Jqf2akGVc5aiC
          claim_id: c_kdaVCh26rZ3h31Nv3TCuFk
          source_id: s_5qGHo6BLKLyKRQZVZyjcgv
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
  descendants:
    - claim:
        id: c_iKE3JPfxTN5GdYG5Kx3r5t
        subject_person_id: p_yrFPjE4tPK92ux9Ny5qWph
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_T3W95sW7SgUDh6EEZUezDy
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_68soi4AJtqZpdDGbbMQdv0
          claim_id: c_iKE3JPfxTN5GdYG5Kx3r5t
          source_id: s_5qGHo6BLKLyKRQZVZyjcgv
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第一百一十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_T3W95sW7SgUDh6EEZUezDy
        status: active
        display_name: 王道充
        merged_into_person_id: null
  other: []
---

# 王謹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謹 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_T3W95sW7SgUDh6EEZUezDy | 王道充 | accepted |

## 外部来源

- [中国历代人物传记资料库：王謹（CBDB 321149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321149&o=json)

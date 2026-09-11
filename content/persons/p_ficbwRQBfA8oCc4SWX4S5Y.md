---
schema: wang-person/v1
id: p_ficbwRQBfA8oCc4SWX4S5Y
status: active
merged_into: null
display_name: 王祜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RW2PRWKK8M11nQXZB6wUzr
        subject_person_id: p_ficbwRQBfA8oCc4SWX4S5Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1xZuQzKHZh3RMiByPYqNZo
          claim_id: c_RW2PRWKK8M11nQXZB6wUzr
          source_id: s_8L6C1u8aVxS2jLQhjB3Pj8
          stance: supports
          locator: CBDB:302521
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（302521）
          source: &a1
            id: s_8L6C1u8aVxS2jLQhjB3Pj8
            source_type: api_record
            title: 中国历代人物传记资料库：王祜（CBDB 302521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302521&o=json
            external_identifier: CBDB:302521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.648Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eEh1yeuUjeCywZTEJUkXCf
        subject_person_id: p_ficbwRQBfA8oCc4SWX4S5Y
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
        - id: cs_9ACfXXaY6p4FbrzHFrkoPR
          claim_id: c_eEh1yeuUjeCywZTEJUkXCf
          source_id: s_8L6C1u8aVxS2jLQhjB3Pj8
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
        id: c_uw_GrkAdg764NaNosSl6Sk
        subject_person_id: p_ficbwRQBfA8oCc4SWX4S5Y
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UcjkWZqqBQxTHAd68nDNjt
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ca6zT6ChVyypZMUXEglqCe
          claim_id: c_uw_GrkAdg764NaNosSl6Sk
          source_id: s_8L6C1u8aVxS2jLQhjB3Pj8
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第四十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UcjkWZqqBQxTHAd68nDNjt
        status: active
        display_name: 王景象
        merged_into_person_id: null
  other: []
---

# 王祜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祜 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_UcjkWZqqBQxTHAd68nDNjt | 王景象 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祜（CBDB 302521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302521&o=json)

---
schema: wang-person/v1
id: p_YD1K1ag2u994XzD6XR1i9Q
status: active
merged_into: null
display_name: 王清
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A8rKG8X9ZGssRzRYK6QvyD
        subject_person_id: p_YD1K1ag2u994XzD6XR1i9Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BvpGG34ARMynQ888NnxYMG
          claim_id: c_A8rKG8X9ZGssRzRYK6QvyD
          source_id: s_VaKw2o3hH78D3Jc9RY4pXQ
          stance: supports
          locator: CBDB:264587
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264587）
          source: &a1
            id: s_VaKw2o3hH78D3Jc9RY4pXQ
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 264587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264587&o=json
            external_identifier: CBDB:264587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.646Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ksq29tSABWKgH6A4KiUdPX
        subject_person_id: p_YD1K1ag2u994XzD6XR1i9Q
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
        - id: cs_FqgYTNusjL8rH23X57Mbrd
          claim_id: c_ksq29tSABWKgH6A4KiUdPX
          source_id: s_VaKw2o3hH78D3Jc9RY4pXQ
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
        id: c_FsLOwf8n26HdNAw9lrdBX6
        subject_person_id: p_YD1K1ag2u994XzD6XR1i9Q
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_655CGkFBuWbBdZzbbcQcR6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cb6plCvMzZ7iTHGw5T4qLh
          claim_id: c_FsLOwf8n26HdNAw9lrdBX6
          source_id: s_VaKw2o3hH78D3Jc9RY4pXQ
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第二甲第七十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_655CGkFBuWbBdZzbbcQcR6
        status: active
        display_name: 王舜夫
        merged_into_person_id: null
  other: []
---

# 王清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王清 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_655CGkFBuWbBdZzbbcQcR6 | 王舜夫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王清（CBDB 264587）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264587&o=json)

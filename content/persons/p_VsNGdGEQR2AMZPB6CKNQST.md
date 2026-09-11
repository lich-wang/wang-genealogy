---
schema: wang-person/v1
id: p_VsNGdGEQR2AMZPB6CKNQST
status: active
merged_into: null
display_name: 王昌裔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5qApn19PrBNBm1Gs6rYsXo
        subject_person_id: p_VsNGdGEQR2AMZPB6CKNQST
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌裔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Wqe5xwiUb9kUj8Y4L2MogE
          claim_id: c_5qApn19PrBNBm1Gs6rYsXo
          source_id: s_UfE1xxAAYuaqmH5aqrkyk8
          stance: supports
          locator: CBDB:279338
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279338）
          source: &a1
            id: s_UfE1xxAAYuaqmH5aqrkyk8
            source_type: api_record
            title: 中国历代人物传记资料库：王昌裔（CBDB 279338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279338&o=json
            external_identifier: CBDB:279338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.977Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2bRD4A3f1X4nQBJmYreJ4z
        subject_person_id: p_VsNGdGEQR2AMZPB6CKNQST
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
        - id: cs_oQUwH22oP9PYLwfBVDH6A6
          claim_id: c_2bRD4A3f1X4nQBJmYreJ4z
          source_id: s_UfE1xxAAYuaqmH5aqrkyk8
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
        id: c_eZqWbuH3MXm4GetHL-kr-A
        subject_person_id: p_VsNGdGEQR2AMZPB6CKNQST
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OhHnudKHLjpOQ9F1jwSQ6F
          claim_id: c_eZqWbuH3MXm4GetHL-kr-A
          source_id: s_LyDXjGHrEMFf51wBwew7nv
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第二百三十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LyDXjGHrEMFf51wBwew7nv
            source_type: api_record
            title: 中国历代人物传记资料库：王遵（CBDB 201860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201860&o=json
            external_identifier: CBDB:201860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.697Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kS75cqd3Wh2NjJNrFJL2j4
        status: active
        display_name: 王遵
        merged_into_person_id: null
  other: []
---

# 王昌裔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昌裔 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_kS75cqd3Wh2NjJNrFJL2j4 | 王遵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昌裔（CBDB 279338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279338&o=json)
- [中国历代人物传记资料库：王遵（CBDB 201860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201860&o=json)

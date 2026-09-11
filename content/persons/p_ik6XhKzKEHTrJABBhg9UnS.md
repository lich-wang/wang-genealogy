---
schema: wang-person/v1
id: p_ik6XhKzKEHTrJABBhg9UnS
status: active
merged_into: null
display_name: 王憲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iuUCFwdEK3hmQmx7fkUk1m
        subject_person_id: p_ik6XhKzKEHTrJABBhg9UnS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VKmooDXzr7DhP5oLD2A6Zv
          claim_id: c_iuUCFwdEK3hmQmx7fkUk1m
          source_id: s_EKYXJTNDt7coAE3zHh7A91
          stance: supports
          locator: CBDB:280634
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280634）
          source: &a1
            id: s_EKYXJTNDt7coAE3zHh7A91
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 280634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280634&o=json
            external_identifier: CBDB:280634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.017Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WvhLpmtUmYyQqtfuUa2Nxq
        subject_person_id: p_ik6XhKzKEHTrJABBhg9UnS
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
        - id: cs_tHGdKMCFgSi7WUz7WaFx9G
          claim_id: c_WvhLpmtUmYyQqtfuUa2Nxq
          source_id: s_EKYXJTNDt7coAE3zHh7A91
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
        id: c_gCuD7RHlOuQsscuFJevBI2
        subject_person_id: p_ik6XhKzKEHTrJABBhg9UnS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_pUwZmXJA98H12Cyv9Q6e5y
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tUHwvvWfvVt4u2UbRy62Dl
          claim_id: c_gCuD7RHlOuQsscuFJevBI2
          source_id: s_EKYXJTNDt7coAE3zHh7A91
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pUwZmXJA98H12Cyv9Q6e5y
        status: active
        display_name: 王時柯
        merged_into_person_id: null
  other: []
---

# 王憲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王憲 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_pUwZmXJA98H12Cyv9Q6e5y | 王時柯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王憲（CBDB 280634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280634&o=json)

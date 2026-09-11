---
schema: wang-person/v1
id: p_6QN1keXeNduXQgHMTM4mbf
status: active
merged_into: null
display_name: 王朝幹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NLdLpSnA2p8GztzT4LyV6i
        subject_person_id: p_6QN1keXeNduXQgHMTM4mbf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝幹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mngGdoE7w58CWY7rNZy1Ew
          claim_id: c_NLdLpSnA2p8GztzT4LyV6i
          source_id: s_6GfCoFYtBTzsUgV9JMJZEn
          stance: supports
          locator: CBDB:550843
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（550843）
          source: &a1
            id: s_6GfCoFYtBTzsUgV9JMJZEn
            source_type: api_record
            title: 中国历代人物传记资料库：王朝幹（CBDB 550843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550843&o=json
            external_identifier: CBDB:550843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.502Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cY9MBj6jNPBb6mAYLdRh4Z
        subject_person_id: p_6QN1keXeNduXQgHMTM4mbf
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
        - id: cs_Y8WxVTh6XhCnNAfDh7kaut
          claim_id: c_cY9MBj6jNPBb6mAYLdRh4Z
          source_id: s_6GfCoFYtBTzsUgV9JMJZEn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_6XoKfJ8PhJBSkhDdjTT0T2
        subject_person_id: p_6QN1keXeNduXQgHMTM4mbf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bZKd1CKrcP1yMeU33Bezfa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9nXogf_tTzQj0udxNufeEz
          claim_id: c_6XoKfJ8PhJBSkhDdjTT0T2
          source_id: s_WdNNKZLzDdBDAxK9ug8Rvr
          stance: supports
          locator: 滸墅關志，Igid=176461：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WdNNKZLzDdBDAxK9ug8Rvr
            source_type: api_record
            title: 中国历代人物传记资料库：王景旦（CBDB 550844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550844&o=json
            external_identifier: CBDB:550844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.502Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bZKd1CKrcP1yMeU33Bezfa
        status: active
        display_name: 王景旦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王朝幹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝幹 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_bZKd1CKrcP1yMeU33Bezfa | 王景旦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝幹（CBDB 550843）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550843&o=json)
- [中国历代人物传记资料库：王景旦（CBDB 550844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550844&o=json)

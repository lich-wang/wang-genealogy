---
schema: wang-person/v1
id: p_XqWNJLmbKSSL4nVqCGV54n
status: active
merged_into: null
display_name: 王格
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z1QMSQDSAaJG2UgkYf2Q9Y
        subject_person_id: p_XqWNJLmbKSSL4nVqCGV54n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王格
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ULk8PM3HpdYe6BijG5hwLy
          claim_id: c_Z1QMSQDSAaJG2UgkYf2Q9Y
          source_id: s_wTSzvTqeVoJK48n8B9s9K7
          stance: supports
          locator: CBDB:282018
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282018）
          source: &a1
            id: s_wTSzvTqeVoJK48n8B9s9K7
            source_type: api_record
            title: 中国历代人物传记资料库：王格（CBDB 282018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282018&o=json
            external_identifier: CBDB:282018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.071Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E12kCwFCtMajFDpzouE7Y6
        subject_person_id: p_XqWNJLmbKSSL4nVqCGV54n
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
        - id: cs_jeFM1UFXCpyMipE19VdTBj
          claim_id: c_E12kCwFCtMajFDpzouE7Y6
          source_id: s_wTSzvTqeVoJK48n8B9s9K7
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
        id: c_IYwTxjsCK0L0HPr8hFUn0z
        subject_person_id: p_XqWNJLmbKSSL4nVqCGV54n
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fsfzbsXi2CKQ2Y6QzQVevK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bX0aAxXvjwy0-iZTCw_5_1
          claim_id: c_IYwTxjsCK0L0HPr8hFUn0z
          source_id: s_e4gn9sbVUfNayyCtQbAqLZ
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百三十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_e4gn9sbVUfNayyCtQbAqLZ
            source_type: api_record
            title: 中国历代人物传记资料库：王莘（CBDB 126692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126692&o=json
            external_identifier: CBDB:126692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.128Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fsfzbsXi2CKQ2Y6QzQVevK
        status: active
        display_name: 王莘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王格

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王格 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fsfzbsXi2CKQ2Y6QzQVevK | 王莘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王格（CBDB 282018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282018&o=json)
- [中国历代人物传记资料库：王莘（CBDB 126692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126692&o=json)

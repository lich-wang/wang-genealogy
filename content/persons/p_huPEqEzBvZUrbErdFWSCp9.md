---
schema: wang-person/v1
id: p_huPEqEzBvZUrbErdFWSCp9
status: active
merged_into: null
display_name: 王舉臣
cbdb_id: 306740
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7YSvTJFqHgft7WwoDjy3nF
        subject_person_id: p_huPEqEzBvZUrbErdFWSCp9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舉臣，明人物。嘉靖二十三年進士，籍贯泰和。（中国历代人物传记资料库 CBDB 306740）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_M9Izsh3VEUSNio5FlEKmoK
          claim_id: c_7YSvTJFqHgft7WwoDjy3nF
          source_id: s_JfZw5Vn7SEKbPSVmsVLTMo
          stance: supports
          locator: CBDB:306740
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JfZw5Vn7SEKbPSVmsVLTMo
            source_type: api_record
            title: 中国历代人物传记资料库：王舉臣（CBDB 306740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306740&o=json
            external_identifier: CBDB:306740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_owLhJck9245eeuSe1EUBfb
        subject_person_id: p_huPEqEzBvZUrbErdFWSCp9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舉臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_J5Rsetn7P8WSn86jMRU8JA
          claim_id: c_owLhJck9245eeuSe1EUBfb
          source_id: s_JfZw5Vn7SEKbPSVmsVLTMo
          stance: supports
          locator: CBDB:306740
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_omcXTuPCRVS2LkyjRdUCjV
        subject_person_id: p_Y4FNMr5v5UBkNhYB7rhbfs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_huPEqEzBvZUrbErdFWSCp9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_raNAfuD0ZBIPmVodsUv7eS
          claim_id: c_omcXTuPCRVS2LkyjRdUCjV
          source_id: s_bHx2xoriMhmAQly_R66udn
          stance: supports
          locator: CBDB：兄弟 王鳴臣（126785）之父／母 王國賜
          quotation: null
          interpretation_note: 由兄弟关系推断：王舉臣 与 王鳴臣 为同胞（CBDB 记「弟」），王鳴臣 之父／母即 王舉臣 之父／母。
          source:
            id: s_bHx2xoriMhmAQly_R66udn
            source_type: api_record
            title: 中国历代人物传记资料库：王舉臣（CBDB 306740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306740&o=json
            external_identifier: CBDB:306740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y4FNMr5v5UBkNhYB7rhbfs
        status: active
        display_name: 王國賜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_zfnul-Z-s0B1oWKHeTDcDb
        subject_person_id: p_gYn21nxF9d7iJNFwbu2Rnf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_huPEqEzBvZUrbErdFWSCp9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hBFqbAygjGwIt6Eu8-mYz2
          claim_id: c_zfnul-Z-s0B1oWKHeTDcDb
          source_id: s_bHx2xoriMhmAQly_R66udn
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126785 王鳴臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bHx2xoriMhmAQly_R66udn
            source_type: api_record
            title: 中国历代人物传记资料库：王舉臣（CBDB 306740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306740&o=json
            external_identifier: CBDB:306740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gYn21nxF9d7iJNFwbu2Rnf
        status: active
        display_name: 王鳴臣
        merged_into_person_id: null
---

# 王舉臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王舉臣，明人物。嘉靖二十三年進士，籍贯泰和。（中国历代人物传记资料库 CBDB 306740） | accepted |
| name.primary | 王舉臣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Y4FNMr5v5UBkNhYB7rhbfs | 王國賜 | accepted |
| other | p_gYn21nxF9d7iJNFwbu2Rnf | 王鳴臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王舉臣（CBDB 306740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306740&o=json)

---
schema: wang-person/v1
id: p_3Cem8yLntCzkfRU6YYou77
status: active
merged_into: null
display_name: 王君揚
cbdb_id: 325025
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UJ9K4J1yKn5VY51GVioQeD
        subject_person_id: p_3Cem8yLntCzkfRU6YYou77
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君揚，明人物。嘉靖三十八年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 325025）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_0XvwJijzHdX071Mikc15RV
          claim_id: c_UJ9K4J1yKn5VY51GVioQeD
          source_id: s_NucSXreg6HQECk9g9vbLs6
          stance: supports
          locator: CBDB:325025
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_NucSXreg6HQECk9g9vbLs6
            source_type: api_record
            title: 中国历代人物传记资料库：王君揚（CBDB 325025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325025&o=json
            external_identifier: CBDB:325025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_esdAKp828G8xzF8dyAeAsM
        subject_person_id: p_3Cem8yLntCzkfRU6YYou77
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君揚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_iLGDrvB4vg4Wg8QJ7SBEYZ
          claim_id: c_esdAKp828G8xzF8dyAeAsM
          source_id: s_NucSXreg6HQECk9g9vbLs6
          stance: supports
          locator: CBDB:325025
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4YoGVliadoZm-x5xCZL5B5
        subject_person_id: p_3UKbRHPbQbqFq84iP2CGsh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3Cem8yLntCzkfRU6YYou77
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KP5Af2g3rSN-yNjxx6a1-F
          claim_id: c_4YoGVliadoZm-x5xCZL5B5
          source_id: s_A7zUnXs2kV_I9WRNHsDHtm
          stance: supports
          locator: CBDB：兄弟 王君賞（204856）之父／母 王惠
          quotation: null
          interpretation_note: 由兄弟关系推断：王君揚 与 王君賞 为同胞（CBDB 记「弟」），王君賞 之父／母即 王君揚 之父／母。
          source:
            id: s_A7zUnXs2kV_I9WRNHsDHtm
            source_type: api_record
            title: 中国历代人物传记资料库：王君揚（CBDB 325025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325025&o=json
            external_identifier: CBDB:325025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3UKbRHPbQbqFq84iP2CGsh
        status: active
        display_name: 王惠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_e-NkJUxVZ6Ooj5sHPlUJN9
        subject_person_id: p_3Cem8yLntCzkfRU6YYou77
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_AsKndUgLV5THcrwWuRrJU9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bdmyCkv5GkUkitSbPvfiSF
          claim_id: c_e-NkJUxVZ6Ooj5sHPlUJN9
          source_id: s_A7zUnXs2kV_I9WRNHsDHtm
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204856 王君賞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_A7zUnXs2kV_I9WRNHsDHtm
            source_type: api_record
            title: 中国历代人物传记资料库：王君揚（CBDB 325025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325025&o=json
            external_identifier: CBDB:325025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AsKndUgLV5THcrwWuRrJU9
        status: active
        display_name: 王君賞
        merged_into_person_id: null
---

# 王君揚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王君揚，明人物。嘉靖三十八年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 325025） | accepted |
| name.primary | 王君揚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3UKbRHPbQbqFq84iP2CGsh | 王惠 | accepted |
| other | p_AsKndUgLV5THcrwWuRrJU9 | 王君賞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王君揚（CBDB 325025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325025&o=json)

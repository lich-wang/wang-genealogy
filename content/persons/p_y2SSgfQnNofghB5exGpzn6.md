---
schema: wang-person/v1
id: p_y2SSgfQnNofghB5exGpzn6
status: active
merged_into: null
display_name: 王龍應
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M1rbqvfGyD5NZGgcoRHcFu
        subject_person_id: p_y2SSgfQnNofghB5exGpzn6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龍應
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4ZvWg6HavGCpCz3RVrEK1d
          claim_id: c_M1rbqvfGyD5NZGgcoRHcFu
          source_id: s_jGey9UzDBV7wmcGxHi6pg7
          stance: supports
          locator: CBDB:20095
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（20095）
          source: &a1
            id: s_jGey9UzDBV7wmcGxHi6pg7
            source_type: api_record
            title: 中国历代人物传记资料库：王龍應（CBDB 20095）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20095&o=json
            external_identifier: CBDB:20095
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.755Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6MHbg4dvJK5vzAojCME1jv
        subject_person_id: p_y2SSgfQnNofghB5exGpzn6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FZ9Zw7E2FpcNHhL5tgjUob
          claim_id: c_6MHbg4dvJK5vzAojCME1jv
          source_id: s_jGey9UzDBV7wmcGxHi6pg7
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
        id: c_TQHG2ye5GtlwLWjunv9SQI
        subject_person_id: p_fjtx6PajidBF5DeEX7ULow
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_y2SSgfQnNofghB5exGpzn6
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XyQcmJ_ny0ZZ1IyqXO5ief
          claim_id: c_TQHG2ye5GtlwLWjunv9SQI
          source_id: s_DKwEihoKaeDdokgXg515QL
          stance: supports
          locator: CBDB 双向互证（玄孫;四世孫 王龍應 ⇄ 高祖;四世祖 王祖道）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_DKwEihoKaeDdokgXg515QL
            source_type: api_record
            title: 中国历代人物传记资料库：王祖道（CBDB 1902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1902&o=json
            external_identifier: CBDB:1902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.384Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fjtx6PajidBF5DeEX7ULow
        status: active
        display_name: 王祖道
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王龍應

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王龍應 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_fjtx6PajidBF5DeEX7ULow | 王祖道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王龍應（CBDB 20095）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20095&o=json)
- [中国历代人物传记资料库：王祖道（CBDB 1902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1902&o=json)

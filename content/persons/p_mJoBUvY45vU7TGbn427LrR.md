---
schema: wang-person/v1
id: p_mJoBUvY45vU7TGbn427LrR
status: active
merged_into: null
display_name: 王道榮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uWChVLB6AxEnuh4FXHzH53
        subject_person_id: p_mJoBUvY45vU7TGbn427LrR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w5T1eTkX5xV6tyZiLEUBvR
          claim_id: c_uWChVLB6AxEnuh4FXHzH53
          source_id: s_Y1Q5Mq5icp5oK5HF71zjmX
          stance: supports
          locator: CBDB:210024
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210024）
          source: &a1
            id: s_Y1Q5Mq5icp5oK5HF71zjmX
            source_type: api_record
            title: 中国历代人物传记资料库：王道榮（CBDB 210024）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210024&o=json
            external_identifier: CBDB:210024
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.995Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Mmcs5X8GNg6KEBqBMEE1w2
        subject_person_id: p_mJoBUvY45vU7TGbn427LrR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道榮，明人物。隆慶五年進士，籍贯巴縣。（中国历代人物传记资料库 CBDB 210024）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zUngF2OnnGLDdmZjJeuKhO
          claim_id: c_Mmcs5X8GNg6KEBqBMEE1w2
          source_id: s_Y1Q5Mq5icp5oK5HF71zjmX
          stance: supports
          locator: CBDB:210024
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3os9licFDfHKP6hwzquJIh
        subject_person_id: p_4CkBCwtn2nCSmzMrTCZ7Ut
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mJoBUvY45vU7TGbn427LrR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9wzUY5IMeBtotUBOaeMdic
          claim_id: c_3os9licFDfHKP6hwzquJIh
          source_id: s_niM7WhxsaOBtZP4uQcYqm4
          stance: supports
          locator: CBDB：兄弟 王道成（126745）之父／母 王廷宣
          quotation: null
          interpretation_note: 由兄弟关系推断：王道榮 与 王道成 为同胞（CBDB 记「兄」），王道成 之父／母即 王道榮 之父／母。
          source:
            id: s_niM7WhxsaOBtZP4uQcYqm4
            source_type: api_record
            title: 中国历代人物传记资料库：王道榮（CBDB 210024）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210024&o=json
            external_identifier: CBDB:210024
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4CkBCwtn2nCSmzMrTCZ7Ut
        status: active
        display_name: 王廷宣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_5T8tD7yYr6rGz_bVNKUxTn
        subject_person_id: p_EaFxi6NHrChzwLEA1T89LT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mJoBUvY45vU7TGbn427LrR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6bWjSMRRb_ncn24nEnDslN
          claim_id: c_5T8tD7yYr6rGz_bVNKUxTn
          source_id: s_niM7WhxsaOBtZP4uQcYqm4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126745 王道成）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_niM7WhxsaOBtZP4uQcYqm4
            source_type: api_record
            title: 中国历代人物传记资料库：王道榮（CBDB 210024）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210024&o=json
            external_identifier: CBDB:210024
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EaFxi6NHrChzwLEA1T89LT
        status: active
        display_name: 王道成
        merged_into_person_id: null
---

# 王道榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道榮 | accepted |
| bio.summary | 王道榮，明人物。隆慶五年進士，籍贯巴縣。（中国历代人物传记资料库 CBDB 210024） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4CkBCwtn2nCSmzMrTCZ7Ut | 王廷宣 | accepted |
| other | p_EaFxi6NHrChzwLEA1T89LT | 王道成 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道榮（CBDB 210024）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210024&o=json)

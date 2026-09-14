---
schema: wang-person/v1
id: p_G6aLsWXSmZW6hMNSaoQ5VW
status: active
merged_into: null
display_name: 王希佐
cbdb_id: 315376
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mPJWDLQnBR14GA638d2BMn
        subject_person_id: p_G6aLsWXSmZW6hMNSaoQ5VW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希佐，明人物。嘉靖三十二年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 315376）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_uudDzn6GGzsIVrkIHPnTu0
          claim_id: c_mPJWDLQnBR14GA638d2BMn
          source_id: s_CgFadFWoyAn695QTphXpL2
          stance: supports
          locator: CBDB:315376
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_CgFadFWoyAn695QTphXpL2
            source_type: api_record
            title: 中国历代人物传记资料库：王希佐（CBDB 315376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315376&o=json
            external_identifier: CBDB:315376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bXFKWXWX52LYTXQQMBBi5t
        subject_person_id: p_G6aLsWXSmZW6hMNSaoQ5VW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wZEQkc1GXNYpk5TnEEGv8b
          claim_id: c_bXFKWXWX52LYTXQQMBBi5t
          source_id: s_CgFadFWoyAn695QTphXpL2
          stance: supports
          locator: CBDB:315376
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_A-uGoU0PYiJCLVVFsWY1IP
        subject_person_id: p_uAujjG392SPymDDHoGZN88
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G6aLsWXSmZW6hMNSaoQ5VW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qfs5f4o1GNiHRkIPl5gliS
          claim_id: c_A-uGoU0PYiJCLVVFsWY1IP
          source_id: s_6VZGLwhQb0lleD7UU6YDd7
          stance: supports
          locator: CBDB：兄弟 王希烈（126546）之父／母 王廷望
          quotation: null
          interpretation_note: 由兄弟关系推断：王希佐 与 王希烈 为同胞（CBDB 记「兄」），王希烈 之父／母即 王希佐 之父／母。
          source:
            id: s_6VZGLwhQb0lleD7UU6YDd7
            source_type: api_record
            title: 中国历代人物传记资料库：王希佐（CBDB 315376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315376&o=json
            external_identifier: CBDB:315376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uAujjG392SPymDDHoGZN88
        status: active
        display_name: 王廷望
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_90TWBJ5zVaZ59U75-tAVQI
        subject_person_id: p_G6aLsWXSmZW6hMNSaoQ5VW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nqXSbp6gt3VE2aHb7rdeET
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nRZIt30e_ID-Dmr4xXy_Ao
          claim_id: c_90TWBJ5zVaZ59U75-tAVQI
          source_id: s_6VZGLwhQb0lleD7UU6YDd7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126546 王希烈）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6VZGLwhQb0lleD7UU6YDd7
            source_type: api_record
            title: 中国历代人物传记资料库：王希佐（CBDB 315376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315376&o=json
            external_identifier: CBDB:315376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nqXSbp6gt3VE2aHb7rdeET
        status: active
        display_name: 王希烈
        merged_into_person_id: null
---

# 王希佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王希佐，明人物。嘉靖三十二年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 315376） | accepted |
| name.primary | 王希佐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uAujjG392SPymDDHoGZN88 | 王廷望 | accepted |
| other | p_nqXSbp6gt3VE2aHb7rdeET | 王希烈 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希佐（CBDB 315376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315376&o=json)

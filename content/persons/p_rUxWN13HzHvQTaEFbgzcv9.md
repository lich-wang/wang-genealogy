---
schema: wang-person/v1
id: p_rUxWN13HzHvQTaEFbgzcv9
status: active
merged_into: null
display_name: 王清
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9p73dS13CdJBbkdDVUd2CR
        subject_person_id: p_rUxWN13HzHvQTaEFbgzcv9
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
        - id: cs_id2vE3wPc4ALez39Azw92A
          claim_id: c_9p73dS13CdJBbkdDVUd2CR
          source_id: s_eGtVxF8DMH8qAeokc8QMs5
          stance: supports
          locator: CBDB:267021
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（267021）
          source: &a1
            id: s_eGtVxF8DMH8qAeokc8QMs5
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 267021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267021&o=json
            external_identifier: CBDB:267021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.759Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JMXcnWPjWtinisvNYTk9Km
        subject_person_id: p_rUxWN13HzHvQTaEFbgzcv9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清，明人物。弘治九年進士，籍贯定州。（中国历代人物传记资料库 CBDB 267021）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KNXMN02YYKH47YWRVEl4_r
          claim_id: c_JMXcnWPjWtinisvNYTk9Km
          source_id: s_eGtVxF8DMH8qAeokc8QMs5
          stance: supports
          locator: CBDB:267021
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_y88OBxMTELWCx3VchAGWJa
        subject_person_id: p_7zDtBoXJhHQDuC7LGFFtF6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rUxWN13HzHvQTaEFbgzcv9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HnfaWPLRDBMzpw_uVLU4RK
          claim_id: c_y88OBxMTELWCx3VchAGWJa
          source_id: s_OSaNxovwl29jUQKpySniBJ
          stance: supports
          locator: CBDB：兄弟 王宣（201094）之父／母 王朝輔
          quotation: null
          interpretation_note: 由兄弟关系推断：王清 与 王宣 为同胞（CBDB 记「弟」），王宣 之父／母即 王清 之父／母。
          source:
            id: s_OSaNxovwl29jUQKpySniBJ
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 267021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267021&o=json
            external_identifier: CBDB:267021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7zDtBoXJhHQDuC7LGFFtF6
        status: active
        display_name: 王朝輔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_M702ligJBfGhgi03D5rfPK
        subject_person_id: p_Hzz13QG3KkgrJrrmRHzuBL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rUxWN13HzHvQTaEFbgzcv9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pqGf_V9Y9xcy-od4cZZ8ah
          claim_id: c_M702ligJBfGhgi03D5rfPK
          source_id: s_OSaNxovwl29jUQKpySniBJ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201094 王宣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OSaNxovwl29jUQKpySniBJ
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 267021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267021&o=json
            external_identifier: CBDB:267021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Hzz13QG3KkgrJrrmRHzuBL
        status: active
        display_name: 王宣
        merged_into_person_id: null
---

# 王清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王清 | accepted |
| bio.summary | 王清，明人物。弘治九年進士，籍贯定州。（中国历代人物传记资料库 CBDB 267021） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7zDtBoXJhHQDuC7LGFFtF6 | 王朝輔 | accepted |
| other | p_Hzz13QG3KkgrJrrmRHzuBL | 王宣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王清（CBDB 267021）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267021&o=json)

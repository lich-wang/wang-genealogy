---
schema: wang-person/v1
id: p_wu6s3A9WJ69UBGd66ce1zF
status: active
merged_into: null
display_name: 王春洛
cbdb_id: 308961
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5aXkL4y5tH6BHahYnESbZ5
        subject_person_id: p_wu6s3A9WJ69UBGd66ce1zF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春洛，明人物。嘉靖二十六年進士，籍贯漳浦。（中国历代人物传记资料库 CBDB 308961）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_0RkLxD-tCmbyFiXHAeEiqI
          claim_id: c_5aXkL4y5tH6BHahYnESbZ5
          source_id: s_Ybc5wy8g47VoSXjAeLpsPT
          stance: supports
          locator: CBDB:308961
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Ybc5wy8g47VoSXjAeLpsPT
            source_type: api_record
            title: 中国历代人物传记资料库：王春洛（CBDB 308961）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308961&o=json
            external_identifier: CBDB:308961
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ixTpo8BpNsAj5532bFJ6RM
        subject_person_id: p_wu6s3A9WJ69UBGd66ce1zF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春洛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7qXqTbSCE3vefq6V4oSAiT
          claim_id: c_ixTpo8BpNsAj5532bFJ6RM
          source_id: s_Ybc5wy8g47VoSXjAeLpsPT
          stance: supports
          locator: CBDB:308961
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_iOpKhLK797_ht6gd8WfSPE
        subject_person_id: p_EfJdyGwVk7PiJrwsDYXbLo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wu6s3A9WJ69UBGd66ce1zF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_68_P8XhpbIBwNg4Ift7UCH
          claim_id: c_iOpKhLK797_ht6gd8WfSPE
          source_id: s_jQ_wrz1QbTRgDVHMrn4MFv
          stance: supports
          locator: CBDB：兄弟 王春澤（126604）之父／母 王豸
          quotation: null
          interpretation_note: 由兄弟关系推断：王春洛 与 王春澤 为同胞（CBDB 记「兄」），王春澤 之父／母即 王春洛 之父／母。
          source:
            id: s_jQ_wrz1QbTRgDVHMrn4MFv
            source_type: api_record
            title: 中国历代人物传记资料库：王春洛（CBDB 308961）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308961&o=json
            external_identifier: CBDB:308961
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EfJdyGwVk7PiJrwsDYXbLo
        status: active
        display_name: 王豸
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_WzrcCI8-aKfnH5fbZPDh5K
        subject_person_id: p_DA2QvREynL5ZUoyG8V9cNp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wu6s3A9WJ69UBGd66ce1zF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XUFRB6aLx26t0Z5hia0vcB
          claim_id: c_WzrcCI8-aKfnH5fbZPDh5K
          source_id: s_jQ_wrz1QbTRgDVHMrn4MFv
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126604 王春澤）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jQ_wrz1QbTRgDVHMrn4MFv
            source_type: api_record
            title: 中国历代人物传记资料库：王春洛（CBDB 308961）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308961&o=json
            external_identifier: CBDB:308961
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DA2QvREynL5ZUoyG8V9cNp
        status: active
        display_name: 王春澤
        merged_into_person_id: null
---

# 王春洛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王春洛，明人物。嘉靖二十六年進士，籍贯漳浦。（中国历代人物传记资料库 CBDB 308961） | accepted |
| name.primary | 王春洛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EfJdyGwVk7PiJrwsDYXbLo | 王豸 | accepted |
| other | p_DA2QvREynL5ZUoyG8V9cNp | 王春澤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王春洛（CBDB 308961）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308961&o=json)

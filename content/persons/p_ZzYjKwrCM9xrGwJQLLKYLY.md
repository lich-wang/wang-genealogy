---
schema: wang-person/v1
id: p_ZzYjKwrCM9xrGwJQLLKYLY
status: active
merged_into: null
display_name: 王順道
cbdb_id: 295417
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EFuiSVMt9QDKjKiPWzomm4
        subject_person_id: p_ZzYjKwrCM9xrGwJQLLKYLY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王順道，明人物。嘉靖十四年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 295417）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_5bT3nzqsb0CZ3mIWROUqiZ
          claim_id: c_EFuiSVMt9QDKjKiPWzomm4
          source_id: s_r7LpL4AAuCYJsGumWJT8hg
          stance: supports
          locator: CBDB:295417
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_r7LpL4AAuCYJsGumWJT8hg
            source_type: api_record
            title: 中国历代人物传记资料库：王順道（CBDB 295417）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295417&o=json
            external_identifier: CBDB:295417
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hNyL5p2pEoBjeNBEbKa481
        subject_person_id: p_ZzYjKwrCM9xrGwJQLLKYLY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王順道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_RdYUXL3PCZzmAm6USC641j
          claim_id: c_hNyL5p2pEoBjeNBEbKa481
          source_id: s_r7LpL4AAuCYJsGumWJT8hg
          stance: supports
          locator: CBDB:295417
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_e94SCtw-2sUZHsViOimr7e
        subject_person_id: p_GSjakwc9qcDmQzVRm7NrP8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZzYjKwrCM9xrGwJQLLKYLY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PRenV-KZMpAdlzbznOcWdk
          claim_id: c_e94SCtw-2sUZHsViOimr7e
          source_id: s_3eltEX29bU_qa0CbWwr1fd
          stance: supports
          locator: CBDB：兄弟 王立道（34712）之父／母 王表
          quotation: null
          interpretation_note: 由兄弟关系推断：王順道 与 王立道 为同胞（CBDB 记「兄」），王立道 之父／母即 王順道 之父／母。
          source:
            id: s_3eltEX29bU_qa0CbWwr1fd
            source_type: api_record
            title: 中国历代人物传记资料库：王順道（CBDB 295417）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295417&o=json
            external_identifier: CBDB:295417
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GSjakwc9qcDmQzVRm7NrP8
        status: active
        display_name: 王表
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_gEuvm8L7im2pnXcBOinGLy
        subject_person_id: p_ZzYjKwrCM9xrGwJQLLKYLY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ghgtseEJkUC2ybxjB2cf7v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TfrFZRix2hnPW46JTNQS2N
          claim_id: c_gEuvm8L7im2pnXcBOinGLy
          source_id: s_3eltEX29bU_qa0CbWwr1fd
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 34712 王立道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3eltEX29bU_qa0CbWwr1fd
            source_type: api_record
            title: 中国历代人物传记资料库：王順道（CBDB 295417）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295417&o=json
            external_identifier: CBDB:295417
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ghgtseEJkUC2ybxjB2cf7v
        status: active
        display_name: 王立道
        merged_into_person_id: null
---

# 王順道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王順道，明人物。嘉靖十四年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 295417） | accepted |
| name.primary | 王順道 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GSjakwc9qcDmQzVRm7NrP8 | 王表 | accepted |
| other | p_ghgtseEJkUC2ybxjB2cf7v | 王立道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王順道（CBDB 295417）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295417&o=json)

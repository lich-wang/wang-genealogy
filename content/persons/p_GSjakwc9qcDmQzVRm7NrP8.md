---
schema: wang-person/v1
id: p_GSjakwc9qcDmQzVRm7NrP8
status: active
merged_into: null
display_name: 王表
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zkwFRcZYQNjw4Bku44uy13
        subject_person_id: p_GSjakwc9qcDmQzVRm7NrP8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王表
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Yuxpu2ZvgcXLKFjA7f8PXP
          claim_id: c_zkwFRcZYQNjw4Bku44uy13
          source_id: s_p3nGCqtTSnSLjG3n8CLpAJ
          stance: supports
          locator: CBDB:295410
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295410）
          source: &a1
            id: s_p3nGCqtTSnSLjG3n8CLpAJ
            source_type: api_record
            title: 中国历代人物传记资料库：王表（CBDB 295410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295410&o=json
            external_identifier: CBDB:295410
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.500Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Yuis2ZHT6VMUEdgoJ9v6S2
        subject_person_id: p_GSjakwc9qcDmQzVRm7NrP8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王表，明人物。嘉靖十四年進士，籍贯無錫，曾任禮部主事。（中国历代人物传记资料库 CBDB 295410）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WN8EN3rtqpU8TlxOs-5HXR
          claim_id: c_Yuis2ZHT6VMUEdgoJ9v6S2
          source_id: s_p3nGCqtTSnSLjG3n8CLpAJ
          stance: supports
          locator: CBDB:295410
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Y2LIJVoIYDhzWigCe6glkm
        subject_person_id: p_GSjakwc9qcDmQzVRm7NrP8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ghgtseEJkUC2ybxjB2cf7v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wr-GBSjN0M62i9bMKrm6Fx
          claim_id: c_Y2LIJVoIYDhzWigCe6glkm
          source_id: s_MUbNoy15BYcB1rfWzY7dYg
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MUbNoy15BYcB1rfWzY7dYg
            source_type: api_record
            title: 中国历代人物传记资料库：王立道（CBDB 34712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34712&o=json
            external_identifier: CBDB:34712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.094Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ghgtseEJkUC2ybxjB2cf7v
        status: active
        display_name: 王立道
        merged_into_person_id: null
    - claim:
        id: c_a1TvREf9RMjCDAJrdww8si
        subject_person_id: p_GSjakwc9qcDmQzVRm7NrP8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5p53EfmQ44vsjoPLQMGmHx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bj4BpSJ8K7t486mJobNCOu
          claim_id: c_a1TvREf9RMjCDAJrdww8si
          source_id: s_QJEC6uc2vI21KdiJ6Qd3MH
          stance: supports
          locator: CBDB：兄弟 王立道（34712）之父／母 王表
          quotation: null
          interpretation_note: 由兄弟关系推断：王體道 与 王立道 为同胞（CBDB 记「兄」），王立道 之父／母即 王體道 之父／母。
          source:
            id: s_QJEC6uc2vI21KdiJ6Qd3MH
            source_type: api_record
            title: 中国历代人物传记资料库：王體道（CBDB 295415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295415&o=json
            external_identifier: CBDB:295415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5p53EfmQ44vsjoPLQMGmHx
        status: active
        display_name: 王體道
        merged_into_person_id: null
    - claim:
        id: c_byLH95pAraOufC78ZhcnzD
        subject_person_id: p_GSjakwc9qcDmQzVRm7NrP8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ca934HV8fa4ZEtNrvtPHC7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vPMnQnW8JeQsns14FwUALy
          claim_id: c_byLH95pAraOufC78ZhcnzD
          source_id: s_vqUTc4-c8PgVEFD9EatSqC
          stance: supports
          locator: CBDB：兄弟 王立道（34712）之父／母 王表
          quotation: null
          interpretation_note: 由兄弟关系推断：王重道 与 王立道 为同胞（CBDB 记「兄」），王立道 之父／母即 王重道 之父／母。
          source:
            id: s_vqUTc4-c8PgVEFD9EatSqC
            source_type: api_record
            title: 中国历代人物传记资料库：王重道（CBDB 295413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295413&o=json
            external_identifier: CBDB:295413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ca934HV8fa4ZEtNrvtPHC7
        status: active
        display_name: 王重道
        merged_into_person_id: null
    - claim:
        id: c_P-x1TOPSU5fnUy3Rp2m3jt
        subject_person_id: p_GSjakwc9qcDmQzVRm7NrP8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Vc6KENKcAbqKze1KoJMXro
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TZDBkeOcj_lS8tdAiGUmKt
          claim_id: c_P-x1TOPSU5fnUy3Rp2m3jt
          source_id: s_0NwLTR5cEZmh0Tc0tDLsHH
          stance: supports
          locator: CBDB：兄弟 王立道（34712）之父／母 王表
          quotation: null
          interpretation_note: 由兄弟关系推断：王望道 与 王立道 为同胞（CBDB 记「兄」），王立道 之父／母即 王望道 之父／母。
          source:
            id: s_0NwLTR5cEZmh0Tc0tDLsHH
            source_type: api_record
            title: 中国历代人物传记资料库：王望道（CBDB 295414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295414&o=json
            external_identifier: CBDB:295414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Vc6KENKcAbqKze1KoJMXro
        status: active
        display_name: 王望道
        merged_into_person_id: null
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
        id: p_ZzYjKwrCM9xrGwJQLLKYLY
        status: active
        display_name: 王順道
        merged_into_person_id: null
    - claim:
        id: c_6Y-GFNr2Ziq2ZF_V9Dbw8W
        subject_person_id: p_GSjakwc9qcDmQzVRm7NrP8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xsZjWJG7Ngxguy33zQw34i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ifTWRotuGV87htgIZ90LaY
          claim_id: c_6Y-GFNr2Ziq2ZF_V9Dbw8W
          source_id: s_Yg4ZW-w_qY3uHv8rqr_GgX
          stance: supports
          locator: CBDB：兄弟 王立道（34712）之父／母 王表
          quotation: null
          interpretation_note: 由兄弟关系推断：王有道 与 王立道 为同胞（CBDB 记「兄」），王立道 之父／母即 王有道 之父／母。
          source:
            id: s_Yg4ZW-w_qY3uHv8rqr_GgX
            source_type: api_record
            title: 中国历代人物传记资料库：王有道（CBDB 295416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295416&o=json
            external_identifier: CBDB:295416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xsZjWJG7Ngxguy33zQw34i
        status: active
        display_name: 王有道
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王表

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王表 | accepted |
| bio.summary | 王表，明人物。嘉靖十四年進士，籍贯無錫，曾任禮部主事。（中国历代人物传记资料库 CBDB 295410） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ghgtseEJkUC2ybxjB2cf7v | 王立道 | accepted |
| children | p_5p53EfmQ44vsjoPLQMGmHx | 王體道 | accepted |
| children | p_Ca934HV8fa4ZEtNrvtPHC7 | 王重道 | accepted |
| children | p_Vc6KENKcAbqKze1KoJMXro | 王望道 | accepted |
| children | p_ZzYjKwrCM9xrGwJQLLKYLY | 王順道 | accepted |
| children | p_xsZjWJG7Ngxguy33zQw34i | 王有道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王表（CBDB 295410）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295410&o=json)
- [中国历代人物传记资料库：王立道（CBDB 34712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34712&o=json)
- [中国历代人物传记资料库：王順道（CBDB 295417）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295417&o=json)
- [中国历代人物传记资料库：王體道（CBDB 295415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295415&o=json)
- [中国历代人物传记资料库：王望道（CBDB 295414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295414&o=json)
- [中国历代人物传记资料库：王有道（CBDB 295416）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295416&o=json)
- [中国历代人物传记资料库：王重道（CBDB 295413）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295413&o=json)

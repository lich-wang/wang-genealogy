---
schema: wang-person/v1
id: p_3ezSSXeEgkYBWDcz5Z6Cuy
status: active
merged_into: null
display_name: 王敏
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VXhxpeCA8dURSbxopEKf1w
        subject_person_id: p_3ezSSXeEgkYBWDcz5Z6Cuy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tBSXwBUiqKMnSXwmCTauW4
          claim_id: c_VXhxpeCA8dURSbxopEKf1w
          source_id: s_ATzBMPMKGgk1BtxC6cD9UL
          stance: supports
          locator: CBDB:299914
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（299914）
          source: &a1
            id: s_ATzBMPMKGgk1BtxC6cD9UL
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 299914）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299914&o=json
            external_identifier: CBDB:299914
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.610Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2RCnidUAGBL1KWnC7UtY65
        subject_person_id: p_3ezSSXeEgkYBWDcz5Z6Cuy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王敏，明人物。嘉靖十七年進士，籍贯安福，入仕監生: 蔭監(含明代官生、恩生，或清代恩廕生、難廕生)，曾任官生。（中国历代人物传记资料库 CBDB 299914）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6WRpHY9vfar7mKy38ST5Sq
          claim_id: c_2RCnidUAGBL1KWnC7UtY65
          source_id: s_ATzBMPMKGgk1BtxC6cD9UL
          stance: supports
          locator: CBDB:299914
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0DHkpBe4kWxAnWblI-7pCw
        subject_person_id: p_EBfbydRv4JZEiVZULEada1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3ezSSXeEgkYBWDcz5Z6Cuy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Zt1qDMqFVuNRDGzD7lkQX
          claim_id: c_0DHkpBe4kWxAnWblI-7pCw
          source_id: s_NpoVNV19keFINmnSv8OHGX
          stance: supports
          locator: CBDB：兄弟 王士翹（203106）之父／母 王寬
          quotation: null
          interpretation_note: 由兄弟关系推断：王敏 与 王士翹 为同胞（CBDB 记「弟」），王士翹 之父／母即 王敏 之父／母。
          source:
            id: s_NpoVNV19keFINmnSv8OHGX
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 299914）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299914&o=json
            external_identifier: CBDB:299914
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EBfbydRv4JZEiVZULEada1
        status: active
        display_name: 王寬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c__d1klrdmKtpcEcSMot4_qj
        subject_person_id: p_3ezSSXeEgkYBWDcz5Z6Cuy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_acwBn4E2ueYuXmC3T9fy34
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xASmt1X1reKbPGiQ2-PhqN
          claim_id: c__d1klrdmKtpcEcSMot4_qj
          source_id: s_NpoVNV19keFINmnSv8OHGX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203106 王士翹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NpoVNV19keFINmnSv8OHGX
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 299914）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299914&o=json
            external_identifier: CBDB:299914
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_acwBn4E2ueYuXmC3T9fy34
        status: active
        display_name: 王士翹
        merged_into_person_id: null
---

# 王敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敏 | accepted |
| bio.summary | 王敏，明人物。嘉靖十七年進士，籍贯安福，入仕監生: 蔭監(含明代官生、恩生，或清代恩廕生、難廕生)，曾任官生。（中国历代人物传记资料库 CBDB 299914） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EBfbydRv4JZEiVZULEada1 | 王寬 | accepted |
| other | p_acwBn4E2ueYuXmC3T9fy34 | 王士翹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敏（CBDB 299914）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299914&o=json)

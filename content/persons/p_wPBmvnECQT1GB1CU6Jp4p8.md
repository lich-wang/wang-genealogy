---
schema: wang-person/v1
id: p_wPBmvnECQT1GB1CU6Jp4p8
status: active
merged_into: null
display_name: 王獻文
cbdb_id: 312069
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QFKB2TwBGxix1omJGLHCYu
        subject_person_id: p_wPBmvnECQT1GB1CU6Jp4p8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻文，明人物。嘉靖二十九年進士，籍贯寧陵。（中国历代人物传记资料库 CBDB 312069）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_gVHihHSyGSfQX86Kn_jbNh
          claim_id: c_QFKB2TwBGxix1omJGLHCYu
          source_id: s_RMqAps4zitLgmRHxxgoodG
          stance: supports
          locator: CBDB:312069
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_RMqAps4zitLgmRHxxgoodG
            source_type: api_record
            title: 中国历代人物传记资料库：王獻文（CBDB 312069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312069&o=json
            external_identifier: CBDB:312069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KeMsams4ypdGhBA2t6r8zZ
        subject_person_id: p_wPBmvnECQT1GB1CU6Jp4p8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ERCz6a9u9nH3j6VPuEYLAJ
          claim_id: c_KeMsams4ypdGhBA2t6r8zZ
          source_id: s_RMqAps4zitLgmRHxxgoodG
          stance: supports
          locator: CBDB:312069
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3Ha4CxSb0GqtNwBaW7DH3v
        subject_person_id: p_gGjZBHoDDbj9pFHekYZYqw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wPBmvnECQT1GB1CU6Jp4p8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KzqXBtXNBCum6cuhx131si
          claim_id: c_3Ha4CxSb0GqtNwBaW7DH3v
          source_id: s_6kfWSfb0K9ev4HjigBXIZ6
          stance: supports
          locator: CBDB：兄弟 王獻圖（203927）之父／母 王灌
          quotation: null
          interpretation_note: 由兄弟关系推断：王獻文 与 王獻圖 为同胞（CBDB 记「兄」），王獻圖 之父／母即 王獻文 之父／母。
          source:
            id: s_6kfWSfb0K9ev4HjigBXIZ6
            source_type: api_record
            title: 中国历代人物传记资料库：王獻文（CBDB 312069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312069&o=json
            external_identifier: CBDB:312069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gGjZBHoDDbj9pFHekYZYqw
        status: active
        display_name: 王灌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ykLygnR-qtZE6C10DLCdCI
        subject_person_id: p_qCF2nAdW3AwQM2sNjTW55F
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wPBmvnECQT1GB1CU6Jp4p8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EtAPBK2pbp7FiafvavmPia
          claim_id: c_ykLygnR-qtZE6C10DLCdCI
          source_id: s_6kfWSfb0K9ev4HjigBXIZ6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203927 王獻圖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6kfWSfb0K9ev4HjigBXIZ6
            source_type: api_record
            title: 中国历代人物传记资料库：王獻文（CBDB 312069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312069&o=json
            external_identifier: CBDB:312069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qCF2nAdW3AwQM2sNjTW55F
        status: active
        display_name: 王獻圖
        merged_into_person_id: null
---

# 王獻文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王獻文，明人物。嘉靖二十九年進士，籍贯寧陵。（中国历代人物传记资料库 CBDB 312069） | accepted |
| name.primary | 王獻文 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gGjZBHoDDbj9pFHekYZYqw | 王灌 | accepted |
| other | p_qCF2nAdW3AwQM2sNjTW55F | 王獻圖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王獻文（CBDB 312069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312069&o=json)

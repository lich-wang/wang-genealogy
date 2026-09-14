---
schema: wang-person/v1
id: p_DTH2rCsEKqTDBH8mjeGqkt
status: active
merged_into: null
display_name: 王獻書
cbdb_id: 312065
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nfZs3xKsFcBf2C9NKrNJPf
        subject_person_id: p_DTH2rCsEKqTDBH8mjeGqkt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻書，明人物。嘉靖二十九年進士，籍贯寧陵。（中国历代人物传记资料库 CBDB 312065）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_GmPytCcp9VPJw6jWO9V9SK
          claim_id: c_nfZs3xKsFcBf2C9NKrNJPf
          source_id: s_zz5ap3bT7PugRhzuEU19A7
          stance: supports
          locator: CBDB:312065
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_zz5ap3bT7PugRhzuEU19A7
            source_type: api_record
            title: 中国历代人物传记资料库：王獻書（CBDB 312065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312065&o=json
            external_identifier: CBDB:312065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_D77NZrShRaU4bA9AB9hXfH
        subject_person_id: p_DTH2rCsEKqTDBH8mjeGqkt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻書
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_mz6KcJEjbi3dbjDr7ANDFw
          claim_id: c_D77NZrShRaU4bA9AB9hXfH
          source_id: s_zz5ap3bT7PugRhzuEU19A7
          stance: supports
          locator: CBDB:312065
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tW0S3MC3w95CztnL7zFKXL
        subject_person_id: p_gGjZBHoDDbj9pFHekYZYqw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DTH2rCsEKqTDBH8mjeGqkt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hGKzElYQEttUTuB-fSOR7s
          claim_id: c_tW0S3MC3w95CztnL7zFKXL
          source_id: s_XYSdrtUWPcwlMbC2DnZhFR
          stance: supports
          locator: CBDB：兄弟 王獻圖（203927）之父／母 王灌
          quotation: null
          interpretation_note: 由兄弟关系推断：王獻書 与 王獻圖 为同胞（CBDB 记「兄」），王獻圖 之父／母即 王獻書 之父／母。
          source:
            id: s_XYSdrtUWPcwlMbC2DnZhFR
            source_type: api_record
            title: 中国历代人物传记资料库：王獻書（CBDB 312065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312065&o=json
            external_identifier: CBDB:312065
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
        id: c_UCVzTAov5cK2tZClpmDe98
        subject_person_id: p_DTH2rCsEKqTDBH8mjeGqkt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qCF2nAdW3AwQM2sNjTW55F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3nSzgAU3OWm-lYhEdfl3e7
          claim_id: c_UCVzTAov5cK2tZClpmDe98
          source_id: s_XYSdrtUWPcwlMbC2DnZhFR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203927 王獻圖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XYSdrtUWPcwlMbC2DnZhFR
            source_type: api_record
            title: 中国历代人物传记资料库：王獻書（CBDB 312065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312065&o=json
            external_identifier: CBDB:312065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qCF2nAdW3AwQM2sNjTW55F
        status: active
        display_name: 王獻圖
        merged_into_person_id: null
---

# 王獻書

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王獻書，明人物。嘉靖二十九年進士，籍贯寧陵。（中国历代人物传记资料库 CBDB 312065） | accepted |
| name.primary | 王獻書 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gGjZBHoDDbj9pFHekYZYqw | 王灌 | accepted |
| other | p_qCF2nAdW3AwQM2sNjTW55F | 王獻圖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王獻書（CBDB 312065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312065&o=json)

---
schema: wang-person/v1
id: p_tsRpEduyyq7s3cJb7Ld6TB
status: active
merged_into: null
display_name: 王尚志
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XxurwMYxoGqqHcSCJnhgN9
        subject_person_id: p_tsRpEduyyq7s3cJb7Ld6TB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8WEePxrode9CvmaCMZWd9Q
          claim_id: c_XxurwMYxoGqqHcSCJnhgN9
          source_id: s_bfgmZ52uA4UpSvaNFGAtPb
          stance: supports
          locator: CBDB:320456
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（320456）
          source: &a1
            id: s_bfgmZ52uA4UpSvaNFGAtPb
            source_type: api_record
            title: 中国历代人物传记资料库：王尚志（CBDB 320456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320456&o=json
            external_identifier: CBDB:320456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.063Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V3XQH8emP1vtMD8eNUEgNq
        subject_person_id: p_tsRpEduyyq7s3cJb7Ld6TB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚志，明人物。嘉靖三十五年進士，籍贯昌黎。（中国历代人物传记资料库 CBDB 320456）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9QE6prsKkfmn3ZMdDRt9HK
          claim_id: c_V3XQH8emP1vtMD8eNUEgNq
          source_id: s_bfgmZ52uA4UpSvaNFGAtPb
          stance: supports
          locator: CBDB:320456
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__T3SnFtxMKoP8XKtVtC0cj
        subject_person_id: p_7aQd3dRKU9LMFn7fHANAg2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tsRpEduyyq7s3cJb7Ld6TB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_reqJNw5ZR73OyuxeyG7fFX
          claim_id: c__T3SnFtxMKoP8XKtVtC0cj
          source_id: s_mUN2AT7ec7FhajPF1Jp1Ut
          stance: supports
          locator: CBDB：兄弟 王尚直（204534）之父／母 王乾
          quotation: null
          interpretation_note: 由兄弟关系推断：王尚志 与 王尚直 为同胞（CBDB 记「弟」），王尚直 之父／母即 王尚志 之父／母。
          source:
            id: s_mUN2AT7ec7FhajPF1Jp1Ut
            source_type: api_record
            title: 中国历代人物传记资料库：王尚志（CBDB 320456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320456&o=json
            external_identifier: CBDB:320456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7aQd3dRKU9LMFn7fHANAg2
        status: active
        display_name: 王乾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_YyimDnI7RmEQZJPdln3-Aq
        subject_person_id: p_VZLf26Mozo1ZFBb1o11yr1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tsRpEduyyq7s3cJb7Ld6TB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VMbNGEB4RNgKp8DO7yqxHh
          claim_id: c_YyimDnI7RmEQZJPdln3-Aq
          source_id: s_mUN2AT7ec7FhajPF1Jp1Ut
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204534 王尚直）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mUN2AT7ec7FhajPF1Jp1Ut
            source_type: api_record
            title: 中国历代人物传记资料库：王尚志（CBDB 320456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320456&o=json
            external_identifier: CBDB:320456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VZLf26Mozo1ZFBb1o11yr1
        status: active
        display_name: 王尚直
        merged_into_person_id: null
---

# 王尚志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚志 | accepted |
| bio.summary | 王尚志，明人物。嘉靖三十五年進士，籍贯昌黎。（中国历代人物传记资料库 CBDB 320456） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7aQd3dRKU9LMFn7fHANAg2 | 王乾 | accepted |
| other | p_VZLf26Mozo1ZFBb1o11yr1 | 王尚直 | accepted |

## 外部来源

- [中国历代人物传记资料库：王尚志（CBDB 320456）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320456&o=json)

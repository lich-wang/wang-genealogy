---
schema: wang-person/v1
id: p_ZzRV191MavKcr9ERBN1hYs
status: active
merged_into: null
display_name: 王應釣
cbdb_id: 304274
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ltm5TKH3YhY6C762LQyMsp
        subject_person_id: p_ZzRV191MavKcr9ERBN1hYs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應釣，明人物。嘉靖二十年進士，籍贯侯官。（中国历代人物传记资料库 CBDB 304274）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_iQTkJSfy0FODPXH8WVT6_N
          claim_id: c_Ltm5TKH3YhY6C762LQyMsp
          source_id: s_XBTgazbfYrJLasyYEf3N7P
          stance: supports
          locator: CBDB:304274
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_XBTgazbfYrJLasyYEf3N7P
            source_type: api_record
            title: 中国历代人物传记资料库：王應釣（CBDB 304274）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304274&o=json
            external_identifier: CBDB:304274
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nUX9qhCvYLdr79tS8igBXb
        subject_person_id: p_ZzRV191MavKcr9ERBN1hYs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應釣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6BkPMjKKtzNj7uar4ceAni
          claim_id: c_nUX9qhCvYLdr79tS8igBXb
          source_id: s_XBTgazbfYrJLasyYEf3N7P
          stance: supports
          locator: CBDB:304274
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PcflyQ5PbgFmwoUOZR2Zla
        subject_person_id: p_VLXHmJpMp4wz4g5naM2r4z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZzRV191MavKcr9ERBN1hYs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pekyaD7ZE2hzcxa4McAe0Y
          claim_id: c_PcflyQ5PbgFmwoUOZR2Zla
          source_id: s_bomwxoqidKSyhsy0k_77tO
          stance: supports
          locator: CBDB：兄弟 王應鍾（126850）之父／母 王密
          quotation: null
          interpretation_note: 由兄弟关系推断：王應釣 与 王應鍾 为同胞（CBDB 记「弟」），王應鍾 之父／母即 王應釣 之父／母。
          source:
            id: s_bomwxoqidKSyhsy0k_77tO
            source_type: api_record
            title: 中国历代人物传记资料库：王應釣（CBDB 304274）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304274&o=json
            external_identifier: CBDB:304274
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VLXHmJpMp4wz4g5naM2r4z
        status: active
        display_name: 王密
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_7zDlNKPsih5BsV36gSiDvS
        subject_person_id: p_ZzRV191MavKcr9ERBN1hYs
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zj3UcaT47HKJJeLDFk6H7j
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ccjmB2jv0wbfaGz70BpCF_
          claim_id: c_7zDlNKPsih5BsV36gSiDvS
          source_id: s_bomwxoqidKSyhsy0k_77tO
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126850 王應鍾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bomwxoqidKSyhsy0k_77tO
            source_type: api_record
            title: 中国历代人物传记资料库：王應釣（CBDB 304274）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304274&o=json
            external_identifier: CBDB:304274
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zj3UcaT47HKJJeLDFk6H7j
        status: active
        display_name: 王應鍾
        merged_into_person_id: null
---

# 王應釣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王應釣，明人物。嘉靖二十年進士，籍贯侯官。（中国历代人物传记资料库 CBDB 304274） | accepted |
| name.primary | 王應釣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VLXHmJpMp4wz4g5naM2r4z | 王密 | accepted |
| other | p_zj3UcaT47HKJJeLDFk6H7j | 王應鍾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應釣（CBDB 304274）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304274&o=json)

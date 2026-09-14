---
schema: wang-person/v1
id: p_PQMsJ56mH4qKk3i6CbMEg8
status: active
merged_into: null
display_name: 王瑄
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_THVADHFT2gDWYaYns91PG1
        subject_person_id: p_PQMsJ56mH4qKk3i6CbMEg8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CQDCrJTyHEZkqgjW6hPyMj
          claim_id: c_THVADHFT2gDWYaYns91PG1
          source_id: s_kPp2Z5qJ1HUqy4KxDDYxMV
          stance: supports
          locator: CBDB:231539
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231539）
          source: &a1
            id: s_kPp2Z5qJ1HUqy4KxDDYxMV
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 231539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231539&o=json
            external_identifier: CBDB:231539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.646Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MQbvEcKmDGkAJucbPWN7CB
        subject_person_id: p_PQMsJ56mH4qKk3i6CbMEg8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄，明人物。宣德八年進士，籍贯信陽。（中国历代人物传记资料库 CBDB 231539）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CTcKSo0bd5q0B6uVzgm6gY
          claim_id: c_MQbvEcKmDGkAJucbPWN7CB
          source_id: s_kPp2Z5qJ1HUqy4KxDDYxMV
          stance: supports
          locator: CBDB:231539
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FGHJjn_LH_4Ti_qVeIz-ZH
        subject_person_id: p_5LwB9XKRJm64ZCjFd863w9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PQMsJ56mH4qKk3i6CbMEg8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zv98phSD1zY4_mq1m9KEbt
          claim_id: c_FGHJjn_LH_4Ti_qVeIz-ZH
          source_id: s_3xNrkk9n7vVS4nxltXmUtA
          stance: supports
          locator: CBDB：兄弟 王瑨（207341）之父／母 王斌
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑄 与 王瑨 为同胞（CBDB 记「弟」），王瑨 之父／母即 王瑄 之父／母。
          source:
            id: s_3xNrkk9n7vVS4nxltXmUtA
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 231539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231539&o=json
            external_identifier: CBDB:231539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5LwB9XKRJm64ZCjFd863w9
        status: active
        display_name: 王斌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Uu1OSP3S2Ev6t8naTLT6hg
        subject_person_id: p_Np4Z8JvLtkdK8vcDcqWsz6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PQMsJ56mH4qKk3i6CbMEg8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rme2xnGKo6pQvKJoa6bAwo
          claim_id: c_Uu1OSP3S2Ev6t8naTLT6hg
          source_id: s_3xNrkk9n7vVS4nxltXmUtA
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207341 王瑨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3xNrkk9n7vVS4nxltXmUtA
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 231539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231539&o=json
            external_identifier: CBDB:231539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Np4Z8JvLtkdK8vcDcqWsz6
        status: active
        display_name: 王瑨
        merged_into_person_id: null
---

# 王瑄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑄 | accepted |
| bio.summary | 王瑄，明人物。宣德八年進士，籍贯信陽。（中国历代人物传记资料库 CBDB 231539） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5LwB9XKRJm64ZCjFd863w9 | 王斌 | accepted |
| other | p_Np4Z8JvLtkdK8vcDcqWsz6 | 王瑨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑄（CBDB 231539）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231539&o=json)

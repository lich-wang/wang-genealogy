---
schema: wang-person/v1
id: p_81DMjM3QJQoHiop1CxEps7
status: active
merged_into: null
display_name: 王道文
cbdb_id: 321158
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ce2K7uPCAAQRPxwWkSizuL
        subject_person_id: p_81DMjM3QJQoHiop1CxEps7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道文，明人物。嘉靖三十五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 321158）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_eODy20H2hE2qqwBV37rD4i
          claim_id: c_ce2K7uPCAAQRPxwWkSizuL
          source_id: s_jXTyk5u63NZdztkcqP4V5n
          stance: supports
          locator: CBDB:321158
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_jXTyk5u63NZdztkcqP4V5n
            source_type: api_record
            title: 中国历代人物传记资料库：王道文（CBDB 321158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321158&o=json
            external_identifier: CBDB:321158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z3qR1FVM1phpPrLZR3yYen
        subject_person_id: p_81DMjM3QJQoHiop1CxEps7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5JY7EekBonNzMRFLUX8rjH
          claim_id: c_Z3qR1FVM1phpPrLZR3yYen
          source_id: s_jXTyk5u63NZdztkcqP4V5n
          stance: supports
          locator: CBDB:321158
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_U8ias67iLgHTHdn8l0oQ4i
        subject_person_id: p_VLfme2j6JVKmdY6bLRnUg5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_81DMjM3QJQoHiop1CxEps7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FWrt8sOoRge_cVorAXhQmC
          claim_id: c_U8ias67iLgHTHdn8l0oQ4i
          source_id: s_gBTM2z-YIQmpxaJQrpy7U2
          stance: supports
          locator: CBDB：兄弟 王道充（204586）之父／母 王法
          quotation: null
          interpretation_note: 由兄弟关系推断：王道文 与 王道充 为同胞（CBDB 记「弟」），王道充 之父／母即 王道文 之父／母。
          source:
            id: s_gBTM2z-YIQmpxaJQrpy7U2
            source_type: api_record
            title: 中国历代人物传记资料库：王道文（CBDB 321158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321158&o=json
            external_identifier: CBDB:321158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VLfme2j6JVKmdY6bLRnUg5
        status: active
        display_name: 王法
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_B4QkuGbwN-fd_T24xt3hnT
        subject_person_id: p_81DMjM3QJQoHiop1CxEps7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_T3W95sW7SgUDh6EEZUezDy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VJ6EobKYeYr0t5mkUBS-1u
          claim_id: c_B4QkuGbwN-fd_T24xt3hnT
          source_id: s_gBTM2z-YIQmpxaJQrpy7U2
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204586 王道充）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gBTM2z-YIQmpxaJQrpy7U2
            source_type: api_record
            title: 中国历代人物传记资料库：王道文（CBDB 321158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321158&o=json
            external_identifier: CBDB:321158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_T3W95sW7SgUDh6EEZUezDy
        status: active
        display_name: 王道充
        merged_into_person_id: null
---

# 王道文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王道文，明人物。嘉靖三十五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 321158） | accepted |
| name.primary | 王道文 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VLfme2j6JVKmdY6bLRnUg5 | 王法 | accepted |
| other | p_T3W95sW7SgUDh6EEZUezDy | 王道充 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道文（CBDB 321158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321158&o=json)

---
schema: wang-person/v1
id: p_RRio7dJ4QAndzT95pkasoj
status: active
merged_into: null
display_name: 王選
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MXYYJuQei52rW92Szhwd8t
        subject_person_id: p_RRio7dJ4QAndzT95pkasoj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王選
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NzVaWUbmvUAfrcsbtYJY6u
          claim_id: c_MXYYJuQei52rW92Szhwd8t
          source_id: s_eyE13w4ftK7T5NcAKCvtNv
          stance: supports
          locator: CBDB:283889
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283889）
          source: &a1
            id: s_eyE13w4ftK7T5NcAKCvtNv
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 283889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283889&o=json
            external_identifier: CBDB:283889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.157Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vUWCyuEWjFuY34k8HAkffd
        subject_person_id: p_RRio7dJ4QAndzT95pkasoj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王選，明人物。正德十六年進士，籍贯鄱陽。（中国历代人物传记资料库 CBDB 283889）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TIZIjdYQtScT0Z1SxmIQ2w
          claim_id: c_vUWCyuEWjFuY34k8HAkffd
          source_id: s_eyE13w4ftK7T5NcAKCvtNv
          stance: supports
          locator: CBDB:283889
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sbyM64tnbrtyoL4aScpdeV
        subject_person_id: p_oKkzy3873cWFyj79szDYmN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RRio7dJ4QAndzT95pkasoj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vaqxKjJXM18800OqNITMBz
          claim_id: c_sbyM64tnbrtyoL4aScpdeV
          source_id: s_BEjXoZfMqcTO7zCBVR9_pP
          stance: supports
          locator: CBDB：兄弟 王道（202119）之父／母 王廉
          quotation: null
          interpretation_note: 由兄弟关系推断：王選 与 王道 为同胞（CBDB 记「兄」），王道 之父／母即 王選 之父／母。
          source:
            id: s_BEjXoZfMqcTO7zCBVR9_pP
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 283889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283889&o=json
            external_identifier: CBDB:283889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oKkzy3873cWFyj79szDYmN
        status: active
        display_name: 王廉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_8qD3VgfKTddL32jZYKFloY
        subject_person_id: p_AfLhoGsLbskzeER6Tw4Mw8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RRio7dJ4QAndzT95pkasoj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O_5GO8ImUpASjUHtXmlY3u
          claim_id: c_8qD3VgfKTddL32jZYKFloY
          source_id: s_BEjXoZfMqcTO7zCBVR9_pP
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202119 王道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BEjXoZfMqcTO7zCBVR9_pP
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 283889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283889&o=json
            external_identifier: CBDB:283889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AfLhoGsLbskzeER6Tw4Mw8
        status: active
        display_name: 王道
        merged_into_person_id: null
---

# 王選

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王選 | accepted |
| bio.summary | 王選，明人物。正德十六年進士，籍贯鄱陽。（中国历代人物传记资料库 CBDB 283889） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oKkzy3873cWFyj79szDYmN | 王廉 | accepted |
| other | p_AfLhoGsLbskzeER6Tw4Mw8 | 王道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王選（CBDB 283889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283889&o=json)

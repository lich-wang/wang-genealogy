---
schema: wang-person/v1
id: p_Af4LSfN48z84SXXU6eroG5
status: active
merged_into: null
display_name: 王迎
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KQyfpLeqsAtQkHCDpmQkSt
        subject_person_id: p_Af4LSfN48z84SXXU6eroG5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JyvL85rkK3M5vyMEe8vZHE
          claim_id: c_KQyfpLeqsAtQkHCDpmQkSt
          source_id: s_EKASgv3wn6X7t8jLrZpan3
          stance: supports
          locator: CBDB:283890
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283890）
          source: &a1
            id: s_EKASgv3wn6X7t8jLrZpan3
            source_type: api_record
            title: 中国历代人物传记资料库：王迎（CBDB 283890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283890&o=json
            external_identifier: CBDB:283890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.157Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A7TSLVNLcRijRyzuD9bX1F
        subject_person_id: p_Af4LSfN48z84SXXU6eroG5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迎，明人物。正德十六年進士，籍贯鄱陽。（中国历代人物传记资料库 CBDB 283890）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GeSLVos_KZZqv4lZpZbl7e
          claim_id: c_A7TSLVNLcRijRyzuD9bX1F
          source_id: s_EKASgv3wn6X7t8jLrZpan3
          stance: supports
          locator: CBDB:283890
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0G1eCtQQGMxCg3dP80FSOJ
        subject_person_id: p_oKkzy3873cWFyj79szDYmN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Af4LSfN48z84SXXU6eroG5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7EKvL7M51CJ5iVwNht92fm
          claim_id: c_0G1eCtQQGMxCg3dP80FSOJ
          source_id: s_ItiJGIYDQB4nA1MRDYwdrf
          stance: supports
          locator: CBDB：兄弟 王道（202119）之父／母 王廉
          quotation: null
          interpretation_note: 由兄弟关系推断：王迎 与 王道 为同胞（CBDB 记「兄」），王道 之父／母即 王迎 之父／母。
          source:
            id: s_ItiJGIYDQB4nA1MRDYwdrf
            source_type: api_record
            title: 中国历代人物传记资料库：王迎（CBDB 283890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283890&o=json
            external_identifier: CBDB:283890
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
        id: c_8zt6r9T0lGuvTa_WYTyxRo
        subject_person_id: p_Af4LSfN48z84SXXU6eroG5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_AfLhoGsLbskzeER6Tw4Mw8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m_6rc5rd3Qwym4bNtGQzsZ
          claim_id: c_8zt6r9T0lGuvTa_WYTyxRo
          source_id: s_ItiJGIYDQB4nA1MRDYwdrf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202119 王道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ItiJGIYDQB4nA1MRDYwdrf
            source_type: api_record
            title: 中国历代人物传记资料库：王迎（CBDB 283890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283890&o=json
            external_identifier: CBDB:283890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AfLhoGsLbskzeER6Tw4Mw8
        status: active
        display_name: 王道
        merged_into_person_id: null
---

# 王迎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王迎 | accepted |
| bio.summary | 王迎，明人物。正德十六年進士，籍贯鄱陽。（中国历代人物传记资料库 CBDB 283890） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oKkzy3873cWFyj79szDYmN | 王廉 | accepted |
| other | p_AfLhoGsLbskzeER6Tw4Mw8 | 王道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王迎（CBDB 283890）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283890&o=json)

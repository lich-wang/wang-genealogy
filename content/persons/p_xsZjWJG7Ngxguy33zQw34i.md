---
schema: wang-person/v1
id: p_xsZjWJG7Ngxguy33zQw34i
status: active
merged_into: null
display_name: 王有道
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TXmejs39SAAEQpxq88Qck3
        subject_person_id: p_xsZjWJG7Ngxguy33zQw34i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ALVDXwX8syk6j6N3wtUroC
          claim_id: c_TXmejs39SAAEQpxq88Qck3
          source_id: s_5YLB3EMBZqv4et9CRHdyVX
          stance: supports
          locator: CBDB:295416
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295416）
          source: &a1
            id: s_5YLB3EMBZqv4et9CRHdyVX
            source_type: api_record
            title: 中国历代人物传记资料库：王有道（CBDB 295416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295416&o=json
            external_identifier: CBDB:295416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.501Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4n8FvfyYG6SPPQcNq5445u
        subject_person_id: p_xsZjWJG7Ngxguy33zQw34i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有道，明人物。嘉靖十四年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 295416）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8k807szRYjkDIwwsPzUkRt
          claim_id: c_4n8FvfyYG6SPPQcNq5445u
          source_id: s_5YLB3EMBZqv4et9CRHdyVX
          stance: supports
          locator: CBDB:295416
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_GSjakwc9qcDmQzVRm7NrP8
        status: active
        display_name: 王表
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_y2zwmYSpBcYIebpwRaqExS
        subject_person_id: p_ghgtseEJkUC2ybxjB2cf7v
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xsZjWJG7Ngxguy33zQw34i
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G8enc2lRjQmjT6v7nRxbTW
          claim_id: c_y2zwmYSpBcYIebpwRaqExS
          source_id: s_Yg4ZW-w_qY3uHv8rqr_GgX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 34712 王立道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: p_ghgtseEJkUC2ybxjB2cf7v
        status: active
        display_name: 王立道
        merged_into_person_id: null
---

# 王有道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有道 | accepted |
| bio.summary | 王有道，明人物。嘉靖十四年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 295416） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GSjakwc9qcDmQzVRm7NrP8 | 王表 | accepted |
| other | p_ghgtseEJkUC2ybxjB2cf7v | 王立道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王有道（CBDB 295416）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295416&o=json)

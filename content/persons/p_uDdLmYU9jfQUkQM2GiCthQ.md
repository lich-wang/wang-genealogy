---
schema: wang-person/v1
id: p_uDdLmYU9jfQUkQM2GiCthQ
status: active
merged_into: null
display_name: 王文章
cbdb_id: 69031
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9zNPdsbvpCtKX89ud26C7R
        subject_person_id: p_uDdLmYU9jfQUkQM2GiCthQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文章（卒于1799年），史料所见人物。本项目依据《中国历代人物传记资料库：王文章（CBDB 69031）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_11Ch8QAKKh_tcFfe1p1jVa
          claim_id: c_9zNPdsbvpCtKX89ud26C7R
          source_id: s_3BscJ8Ee9szkKzoNeu1PhH
          stance: supports
          locator: CBDB:69031
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_3BscJ8Ee9szkKzoNeu1PhH
            source_type: api_record
            title: 中国历代人物传记资料库：王文章（CBDB 69031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69031&o=json
            external_identifier: CBDB:69031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_RpPBuN9jnSSrKHU3H7r9pm
        subject_person_id: p_uDdLmYU9jfQUkQM2GiCthQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1799年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1799-01-01
            latest: 1799-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oaz8oAWzTDRUJEjwinTbCp
          claim_id: c_RpPBuN9jnSSrKHU3H7r9pm
          source_id: s_3BscJ8Ee9szkKzoNeu1PhH
          stance: supports
          locator: CBDB:69031
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1799
          source:
            id: s_3BscJ8Ee9szkKzoNeu1PhH
            source_type: api_record
            title: 中国历代人物传记资料库：王文章（CBDB 69031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69031&o=json
            external_identifier: CBDB:69031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NW8V2e2hPKMCyayxFURiMg
        subject_person_id: p_uDdLmYU9jfQUkQM2GiCthQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dKJHmrRZi98FSXmxn5W6V2
          claim_id: c_NW8V2e2hPKMCyayxFURiMg
          source_id: s_3BscJ8Ee9szkKzoNeu1PhH
          stance: supports
          locator: CBDB:69031
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1799
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_XllbdK_rjUJjzhz8Q2ThT7
        subject_person_id: p_uDdLmYU9jfQUkQM2GiCthQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ZYkE6Mjma6A8NhfXNfuvW3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UNCwhK_cZxf0wwgg1m0FXw
          claim_id: c_XllbdK_rjUJjzhz8Q2ThT7
          source_id: s_3BscJ8Ee9szkKzoNeu1PhH
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12726：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3BscJ8Ee9szkKzoNeu1PhH
            source_type: api_record
            title: 中国历代人物传记资料库：王文章（CBDB 69031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69031&o=json
            external_identifier: CBDB:69031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_ZYkE6Mjma6A8NhfXNfuvW3
        status: active
        display_name: 王應召
        merged_into_person_id: null
  other: []
---

# 王文章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文章（卒于1799年），史料所见人物。本项目依据《中国历代人物传记资料库：王文章（CBDB 69031）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1799年 | accepted |
| name.primary | 王文章 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ZYkE6Mjma6A8NhfXNfuvW3 | 王應召 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文章（CBDB 69031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69031&o=json)

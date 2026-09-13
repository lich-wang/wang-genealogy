---
schema: wang-person/v1
id: p_R9Fp842NrLyBtZxFpCjEo4
status: active
merged_into: null
display_name: 王濬
cbdb_id: 175390
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xjpUtFy16iAzaGprDFt2cq
        subject_person_id: p_R9Fp842NrLyBtZxFpCjEo4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濬（卒于733年），唐人物。籍贯臨沂，曾任丞。（中国历代人物传记资料库 CBDB 175390）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_6jQs9BANGoqDN4XBLpfHnC
          claim_id: c_xjpUtFy16iAzaGprDFt2cq
          source_id: s_ZvPRBZZT2WQFVnk3TfTvWu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ZvPRBZZT2WQFVnk3TfTvWu
            source_type: api_record
            title: 维基数据：王濬（Q45656792）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656792
            external_identifier: Q45656792
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:41.403Z
            metadata_json: null
        - id: cs_PSrMKq6wKb1-ovHPA9b1kr
          claim_id: c_xjpUtFy16iAzaGprDFt2cq
          source_id: s_15T6MBJss241B3kEEx9b1C
          stance: supports
          locator: CBDB:175390
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_15T6MBJss241B3kEEx9b1C
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王濬（175390）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175390&o=json
            external_identifier: CBDB:175390
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:41.560Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_qfY6JszYw3SnkPsmQY1RQF
        subject_person_id: p_R9Fp842NrLyBtZxFpCjEo4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 733年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0733-01-01
            latest: 0733-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JuNAWCw2UniJaj4fCVePN9
          claim_id: c_qfY6JszYw3SnkPsmQY1RQF
          source_id: s_ZvPRBZZT2WQFVnk3TfTvWu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ZvPRBZZT2WQFVnk3TfTvWu
            source_type: api_record
            title: 维基数据：王濬（Q45656792）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656792
            external_identifier: Q45656792
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:41.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9iXNXjd1QhsGBR9MvLi6J8
        subject_person_id: p_R9Fp842NrLyBtZxFpCjEo4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PKFWwwvy296sFQyNu4XCK8
          claim_id: c_9iXNXjd1QhsGBR9MvLi6J8
          source_id: s_ZvPRBZZT2WQFVnk3TfTvWu
          stance: supports
          locator: Q45656792
          quotation: null
          interpretation_note: null
          source:
            id: s_ZvPRBZZT2WQFVnk3TfTvWu
            source_type: api_record
            title: 维基数据：王濬（Q45656792）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656792
            external_identifier: Q45656792
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:41.403Z
            metadata_json: null
        - id: cs_dKQ7iwPQwrHk9fP3v23iJF
          claim_id: c_9iXNXjd1QhsGBR9MvLi6J8
          source_id: s_15T6MBJss241B3kEEx9b1C
          stance: supports
          locator: Q45656792
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_U3cVoMZFhakhwDQtiDX9kG
        subject_person_id: p_RQFRb7ZkfNHmmspp2wmJ84
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_R9Fp842NrLyBtZxFpCjEo4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Wjj2aUCfh9vPwLnUDzQhur
          claim_id: c_U3cVoMZFhakhwDQtiDX9kG
          source_id: s_s8KCNkkhKGQb5U2DcGajwh
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_s8KCNkkhKGQb5U2DcGajwh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王方泰（154137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154137&o=json
            external_identifier: CBDB:154137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:21.769Z
            metadata_json: null
      object_person:
        id: p_RQFRb7ZkfNHmmspp2wmJ84
        status: active
        display_name: 王方泰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王濬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王濬（卒于733年），唐人物。籍贯臨沂，曾任丞。（中国历代人物传记资料库 CBDB 175390） | accepted |
| death.date | 733年 | accepted |
| name.primary | 王濬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RQFRb7ZkfNHmmspp2wmJ84 | 王方泰 | accepted |

## 外部来源

- [维基数据：王濬（Q45656792）](https://www.wikidata.org/wiki/Q45656792)
- [CBDB 中国历代人物传记资料库：王方泰（154137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154137&o=json)
- [CBDB 中国历代人物传记资料库：王濬（175390）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175390&o=json)

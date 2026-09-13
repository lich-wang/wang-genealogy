---
schema: wang-person/v1
id: p_qYEDpcsXxzMJqk1kXWCy16
status: active
merged_into: null
display_name: 王唐氏
cbdb_id: 555401
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8mqqBkSQvA124QzYK32Gf7
        subject_person_id: p_qYEDpcsXxzMJqk1kXWCy16
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王唐氏（卒于1773年），清人物。籍贯南召，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 555401）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_mAyv4YBEMXxWLbaxLdOxGV
          claim_id: c_8mqqBkSQvA124QzYK32Gf7
          source_id: s_C2fSsV1MKc29b3Y2jpq1Ao
          stance: supports
          locator: CBDB:555401
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_C2fSsV1MKc29b3Y2jpq1Ao
            source_type: api_record
            title: 中国历代人物传记资料库：王唐氏（CBDB 555401）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555401&o=json
            external_identifier: CBDB:555401
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_C2ZKVAMac2pvjUG8foDGiS
        subject_person_id: p_qYEDpcsXxzMJqk1kXWCy16
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1773年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1773-01-01
            latest: 1773-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_h3ZJutq3JP8AKiatDCP8HC
          claim_id: c_C2ZKVAMac2pvjUG8foDGiS
          source_id: s_C2fSsV1MKc29b3Y2jpq1Ao
          stance: supports
          locator: CBDB:555401
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 1773
          source:
            id: s_C2fSsV1MKc29b3Y2jpq1Ao
            source_type: api_record
            title: 中国历代人物传记资料库：王唐氏（CBDB 555401）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555401&o=json
            external_identifier: CBDB:555401
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5T4Fe8DtMmFf7KDpaP6UEu
        subject_person_id: p_qYEDpcsXxzMJqk1kXWCy16
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王唐氏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_39epjBHMQaXrfZB561Ke63
          claim_id: c_5T4Fe8DtMmFf7KDpaP6UEu
          source_id: s_C2fSsV1MKc29b3Y2jpq1Ao
          stance: supports
          locator: CBDB:555401
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 1773
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
  descendants: []
  other: []
---

# 王唐氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王唐氏（卒于1773年），清人物。籍贯南召，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 555401） | accepted |
| death.date | 1773年 | accepted |
| name.primary | 王唐氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王唐氏（CBDB 555401）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555401&o=json)

---
schema: wang-person/v1
id: p_5K3qLc2n7h3FeSM5KCNhXu
status: active
merged_into: null
display_name: 王新銘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EMEmkQXtPUKaK4JdzqSJ4j
        subject_person_id: p_5K3qLc2n7h3FeSM5KCNhXu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王新銘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GiFh2SE7tRv6SXKPcDxsvj
          claim_id: c_EMEmkQXtPUKaK4JdzqSJ4j
          source_id: s_hLgDoHJJvea6pJDB4M525m
          stance: supports
          locator: CBDB:638312
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638312）
          source: &a1
            id: s_hLgDoHJJvea6pJDB4M525m
            source_type: api_record
            title: 中国历代人物传记资料库：王新銘（CBDB 638312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638312&o=json
            external_identifier: CBDB:638312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.664Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_epygkEyX8gbyymR1PoPvZD
        subject_person_id: p_5K3qLc2n7h3FeSM5KCNhXu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王新銘，清人物。籍贯天津，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 638312）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5ZR4fdbL9C0f6bI7uuRpbA
          claim_id: c_epygkEyX8gbyymR1PoPvZD
          source_id: s_hLgDoHJJvea6pJDB4M525m
          stance: supports
          locator: CBDB:638312
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王新銘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王新銘 | accepted |
| bio.summary | 王新銘，清人物。籍贯天津，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 638312） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王新銘（CBDB 638312）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638312&o=json)

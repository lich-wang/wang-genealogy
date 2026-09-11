---
schema: wang-person/v1
id: p_kmE9J83jzov1mpEfsyEKff
status: active
merged_into: null
display_name: 王信
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V8A1LGtL9YQNKDY1frYY9t
        subject_person_id: p_kmE9J83jzov1mpEfsyEKff
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VTMPWP7K5DCw9rLVZiDJB8
          claim_id: c_V8A1LGtL9YQNKDY1frYY9t
          source_id: s_GSko5k6t5wqerMFG38TuUg
          stance: supports
          locator: CBDB:97798
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97798）
          source: &a1
            id: s_GSko5k6t5wqerMFG38TuUg
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 97798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97798&o=json
            external_identifier: CBDB:97798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.168Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EtqTcDxx7rw77ZWsDW2Kvz
        subject_person_id: p_kmE9J83jzov1mpEfsyEKff
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信，宋人物。曾任煥章閣待制。（中国历代人物传记资料库 CBDB 97798）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DsDxdxDtD-l4DNId6HSFjg
          claim_id: c_EtqTcDxx7rw77ZWsDW2Kvz
          source_id: s_GSko5k6t5wqerMFG38TuUg
          stance: supports
          locator: CBDB:97798
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

# 王信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信 | accepted |
| bio.summary | 王信，宋人物。曾任煥章閣待制。（中国历代人物传记资料库 CBDB 97798） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王信（CBDB 97798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97798&o=json)

---
schema: wang-person/v1
id: p_jDjquTevsdxX3DbzMqZzmN
status: active
merged_into: null
display_name: 王鈞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yptsXqJtDVzg3h67Ek384b
        subject_person_id: p_jDjquTevsdxX3DbzMqZzmN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3nRvRz57NYtDfH9n2Amevy
          claim_id: c_yptsXqJtDVzg3h67Ek384b
          source_id: s_YvwMNb8kUhyXH9oyx8JiVC
          stance: supports
          locator: CBDB:100846
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100846）
          source: &a1
            id: s_YvwMNb8kUhyXH9oyx8JiVC
            source_type: api_record
            title: 中国历代人物传记资料库：王鈞（CBDB 100846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100846&o=json
            external_identifier: CBDB:100846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.503Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q7rB4mQhQ6aKo882qau95i
        subject_person_id: p_jDjquTevsdxX3DbzMqZzmN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈞，元人物。曾任知州。（中国历代人物传记资料库 CBDB 100846）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MmwANAE7ZE_h_vAc7HJF3M
          claim_id: c_q7rB4mQhQ6aKo882qau95i
          source_id: s_YvwMNb8kUhyXH9oyx8JiVC
          stance: supports
          locator: CBDB:100846
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

# 王鈞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鈞 | accepted |
| bio.summary | 王鈞，元人物。曾任知州。（中国历代人物传记资料库 CBDB 100846） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鈞（CBDB 100846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100846&o=json)

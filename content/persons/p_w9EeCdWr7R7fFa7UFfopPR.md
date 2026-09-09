---
schema: wang-person/v1
id: p_w9EeCdWr7R7fFa7UFfopPR
status: active
merged_into: null
display_name: 王克銘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_afQRPeW1W2Uc4EKZ6cDYfs
        subject_person_id: p_w9EeCdWr7R7fFa7UFfopPR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克銘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_asU9tgdepsrUfaF9D9ZgJf
          claim_id: c_afQRPeW1W2Uc4EKZ6cDYfs
          source_id: s_oN37BR8QBFCJN7c7Q7XXAM
          stance: supports
          locator: CBDB:237763
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237763）
          source: &a1
            id: s_oN37BR8QBFCJN7c7Q7XXAM
            source_type: api_record
            title: 中国历代人物传记资料库：王克銘（CBDB 237763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237763&o=json
            external_identifier: CBDB:237763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KEAhQREF9RKjD2WkJD8ubn
        subject_person_id: p_w9EeCdWr7R7fFa7UFfopPR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wzoNTz74Y6GNA3bJXXLCp7
          claim_id: c_KEAhQREF9RKjD2WkJD8ubn
          source_id: s_oN37BR8QBFCJN7c7Q7XXAM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王克銘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克銘 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克銘（CBDB 237763）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237763&o=json)

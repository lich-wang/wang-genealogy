---
schema: wang-person/v1
id: p_xNKKVa5ZGjsP1jQr5xS4xC
status: active
merged_into: null
display_name: 王炳章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gLD995MLAP1ovgmDxtgBv9
        subject_person_id: p_xNKKVa5ZGjsP1jQr5xS4xC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CcDJGVJ2D7q8nQAXPcNGzE
          claim_id: c_gLD995MLAP1ovgmDxtgBv9
          source_id: s_Qpco31XEF4EGbpnxzQNASJ
          stance: supports
          locator: CBDB:71911
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71911）
          source: &a1
            id: s_Qpco31XEF4EGbpnxzQNASJ
            source_type: api_record
            title: 中国历代人物传记资料库：王炳章（CBDB 71911）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71911&o=json
            external_identifier: CBDB:71911
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.923Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8tUwmSQ1dmTEuQn8vUoZMv
        subject_person_id: p_xNKKVa5ZGjsP1jQr5xS4xC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1843年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JL6ueuk56q45vDi36YhC97
          claim_id: c_8tUwmSQ1dmTEuQn8vUoZMv
          source_id: s_Qpco31XEF4EGbpnxzQNASJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gJGbQYLzKJ8F8KGvYnfBXY
        subject_person_id: p_xNKKVa5ZGjsP1jQr5xS4xC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳章（生于1843年），清人物。籍贯義州。（中国历代人物传记资料库 CBDB 71911）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__KUzRddg7GxrVSIxigHhhU
          claim_id: c_gJGbQYLzKJ8F8KGvYnfBXY
          source_id: s_Qpco31XEF4EGbpnxzQNASJ
          stance: supports
          locator: CBDB:71911
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

# 王炳章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炳章 | accepted |
| birth.date | 1843年 | accepted |
| bio.summary | 王炳章（生于1843年），清人物。籍贯義州。（中国历代人物传记资料库 CBDB 71911） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炳章（CBDB 71911）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71911&o=json)

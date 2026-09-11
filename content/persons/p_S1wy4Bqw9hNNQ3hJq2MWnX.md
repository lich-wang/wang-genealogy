---
schema: wang-person/v1
id: p_S1wy4Bqw9hNNQ3hJq2MWnX
status: active
merged_into: null
display_name: 王才卿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GJDCFyybKeXKz3z9fovjVP
        subject_person_id: p_S1wy4Bqw9hNNQ3hJq2MWnX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王才卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yC3Eqqfni4gmuD66qdFKv5
          claim_id: c_GJDCFyybKeXKz3z9fovjVP
          source_id: s_kNxjUvrSSUyBdanxTht8j1
          stance: supports
          locator: CBDB:101050
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101050）
          source: &a1
            id: s_kNxjUvrSSUyBdanxTht8j1
            source_type: api_record
            title: 中国历代人物传记资料库：王才卿（CBDB 101050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101050&o=json
            external_identifier: CBDB:101050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.664Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5QiAX2qpJXQnyYaQkXJHwx
        subject_person_id: p_S1wy4Bqw9hNNQ3hJq2MWnX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王才卿，元人物。曾任縣尹。（中国历代人物传记资料库 CBDB 101050）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n39KwHhg34dJZFpsXoUIUH
          claim_id: c_5QiAX2qpJXQnyYaQkXJHwx
          source_id: s_kNxjUvrSSUyBdanxTht8j1
          stance: supports
          locator: CBDB:101050
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

# 王才卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王才卿 | accepted |
| bio.summary | 王才卿，元人物。曾任縣尹。（中国历代人物传记资料库 CBDB 101050） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王才卿（CBDB 101050）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101050&o=json)

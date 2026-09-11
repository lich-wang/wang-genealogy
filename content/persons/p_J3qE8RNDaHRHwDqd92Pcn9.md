---
schema: wang-person/v1
id: p_J3qE8RNDaHRHwDqd92Pcn9
status: active
merged_into: null
display_name: 王夷直
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cvqmNNF45bqtF7gqe3CZ3E
        subject_person_id: p_J3qE8RNDaHRHwDqd92Pcn9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夷直
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J1eaeBSWDQx1JiZPC3F6w9
          claim_id: c_cvqmNNF45bqtF7gqe3CZ3E
          source_id: s_ZTGy2yNzHdjEZ6Q8BYn7xK
          stance: supports
          locator: CBDB:545128
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（545128）
          source: &a1
            id: s_ZTGy2yNzHdjEZ6Q8BYn7xK
            source_type: api_record
            title: 中国历代人物传记资料库：王夷直（CBDB 545128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545128&o=json
            external_identifier: CBDB:545128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.466Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2BPrmQk88Q8xYGmzFEiWL7
        subject_person_id: p_J3qE8RNDaHRHwDqd92Pcn9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夷直，宋人物。籍贯武進，入仕進士。（中国历代人物传记资料库 CBDB 545128）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sgjhvPCy2HVaoNhtHKqxkt
          claim_id: c_2BPrmQk88Q8xYGmzFEiWL7
          source_id: s_ZTGy2yNzHdjEZ6Q8BYn7xK
          stance: supports
          locator: CBDB:545128
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

# 王夷直

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夷直 | accepted |
| bio.summary | 王夷直，宋人物。籍贯武進，入仕進士。（中国历代人物传记资料库 CBDB 545128） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夷直（CBDB 545128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545128&o=json)

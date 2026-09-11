---
schema: wang-person/v1
id: p_nskvfm7zFBuMq8C1Ch226e
status: active
merged_into: null
display_name: 王禮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oTDYvdWsECicHUrH99mLz9
        subject_person_id: p_nskvfm7zFBuMq8C1Ch226e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YT5h1PFSc9hW482mRfUaJ1
          claim_id: c_oTDYvdWsECicHUrH99mLz9
          source_id: s_NJzgcein8XiJvtKdbnvp8T
          stance: supports
          locator: CBDB:473302
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（473302）
          source: &a1
            id: s_NJzgcein8XiJvtKdbnvp8T
            source_type: api_record
            title: 中国历代人物传记资料库：王禮（CBDB 473302）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473302&o=json
            external_identifier: CBDB:473302
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.299Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8Rm8wz4td256898gyYEk6z
        subject_person_id: p_nskvfm7zFBuMq8C1Ch226e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禮，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 473302）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BkTzv1YbYn8bRBG8-Rf6Nr
          claim_id: c_8Rm8wz4td256898gyYEk6z
          source_id: s_NJzgcein8XiJvtKdbnvp8T
          stance: supports
          locator: CBDB:473302
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

# 王禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禮 | accepted |
| bio.summary | 王禮，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 473302） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禮（CBDB 473302）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473302&o=json)

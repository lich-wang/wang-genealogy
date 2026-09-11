---
schema: wang-person/v1
id: p_GafDkV4G72VA3QKVdunEF5
status: active
merged_into: null
display_name: 王儒卿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X3v9Xdh5HXNPbQfxZJe9PZ
        subject_person_id: p_GafDkV4G72VA3QKVdunEF5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zBQ4BYnjkwTQmWWFHRTCcH
          claim_id: c_X3v9Xdh5HXNPbQfxZJe9PZ
          source_id: s_DiNkRjPwmD24AAHTcd2gi5
          stance: supports
          locator: CBDB:37332
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37332）
          source: &a1
            id: s_DiNkRjPwmD24AAHTcd2gi5
            source_type: api_record
            title: 中国历代人物传记资料库：王儒卿（CBDB 37332）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37332&o=json
            external_identifier: CBDB:37332
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.199Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3KWwaK5EJ7ewGHEeo8kT2g
        subject_person_id: p_GafDkV4G72VA3QKVdunEF5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒卿，宋人物。身份为地方士人/鄉紳。（中国历代人物传记资料库 CBDB 37332）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FtsZukxRW2LnU9kg1WO6vS
          claim_id: c_3KWwaK5EJ7ewGHEeo8kT2g
          source_id: s_DiNkRjPwmD24AAHTcd2gi5
          stance: supports
          locator: CBDB:37332
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

# 王儒卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儒卿 | accepted |
| bio.summary | 王儒卿，宋人物。身份为地方士人/鄉紳。（中国历代人物传记资料库 CBDB 37332） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王儒卿（CBDB 37332）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37332&o=json)

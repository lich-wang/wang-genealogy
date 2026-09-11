---
schema: wang-person/v1
id: p_27HH6BVdLb1Lc8oVEK3bnH
status: active
merged_into: null
display_name: 王修身
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P3yLGC1gzNDRKgdnmXkPEV
        subject_person_id: p_27HH6BVdLb1Lc8oVEK3bnH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修身
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MqJbiAXUzRZrmbX3LGhLm7
          claim_id: c_P3yLGC1gzNDRKgdnmXkPEV
          source_id: s_CVz8SNs6CDTEL91KiFoLQq
          stance: supports
          locator: CBDB:636076
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636076）
          source: &a1
            id: s_CVz8SNs6CDTEL91KiFoLQq
            source_type: api_record
            title: 中国历代人物传记资料库：王修身（CBDB 636076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636076&o=json
            external_identifier: CBDB:636076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TN3N6nJR2d4FFtRuwC4qBH
        subject_person_id: p_27HH6BVdLb1Lc8oVEK3bnH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修身，清人物。籍贯濟南府，入仕附貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 636076）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9N4w76lhkRTLEoLuEOYsCC
          claim_id: c_TN3N6nJR2d4FFtRuwC4qBH
          source_id: s_CVz8SNs6CDTEL91KiFoLQq
          stance: supports
          locator: CBDB:636076
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

# 王修身

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王修身 | accepted |
| bio.summary | 王修身，清人物。籍贯濟南府，入仕附貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 636076） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王修身（CBDB 636076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636076&o=json)

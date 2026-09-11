---
schema: wang-person/v1
id: p_GQMaotu4z9j72R3VKRQqXC
status: active
merged_into: null
display_name: 王浦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_enKT2AQDs5T8p9fbKdgvM6
        subject_person_id: p_GQMaotu4z9j72R3VKRQqXC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bLHFmqQ1zyjAS6RZ2obmgR
          claim_id: c_enKT2AQDs5T8p9fbKdgvM6
          source_id: s_uny6yTdk6wJQ32i2EPn4xd
          stance: supports
          locator: CBDB:381677
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（381677）
          source: &a1
            id: s_uny6yTdk6wJQ32i2EPn4xd
            source_type: api_record
            title: 中国历代人物传记资料库：王浦（CBDB 381677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=381677&o=json
            external_identifier: CBDB:381677
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.782Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9LkZ9wJZ9bXV56eYpcFgka
        subject_person_id: p_GQMaotu4z9j72R3VKRQqXC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浦，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 381677）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-NCJdCyEnmWccencoo0DA7
          claim_id: c_9LkZ9wJZ9bXV56eYpcFgka
          source_id: s_uny6yTdk6wJQ32i2EPn4xd
          stance: supports
          locator: CBDB:381677
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

# 王浦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浦 | accepted |
| bio.summary | 王浦，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 381677） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王浦（CBDB 381677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=381677&o=json)

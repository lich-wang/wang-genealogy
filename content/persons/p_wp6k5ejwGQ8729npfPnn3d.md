---
schema: wang-person/v1
id: p_wp6k5ejwGQ8729npfPnn3d
status: active
merged_into: null
display_name: 王桂林
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wGNZFRECZehnLoRx28eTMv
        subject_person_id: p_wp6k5ejwGQ8729npfPnn3d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9MYhqhG38q8UqUNG5D2WkG
          claim_id: c_wGNZFRECZehnLoRx28eTMv
          source_id: s_FgKfRujuj3uYGsbE7AKeHy
          stance: supports
          locator: CBDB:638708
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638708）
          source: &a1
            id: s_FgKfRujuj3uYGsbE7AKeHy
            source_type: api_record
            title: 中国历代人物传记资料库：王桂林（CBDB 638708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638708&o=json
            external_identifier: CBDB:638708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.740Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xo9oK5sXW9VjwHfYguWk6W
        subject_person_id: p_wp6k5ejwGQ8729npfPnn3d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂林，清人物。籍贯安慶府，入仕鄉貢舉人，曾任教授、學正。（中国历代人物传记资料库 CBDB 638708）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GwBBhyc69RWLepxiRRg222
          claim_id: c_xo9oK5sXW9VjwHfYguWk6W
          source_id: s_FgKfRujuj3uYGsbE7AKeHy
          stance: supports
          locator: CBDB:638708
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

# 王桂林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桂林 | accepted |
| bio.summary | 王桂林，清人物。籍贯安慶府，入仕鄉貢舉人，曾任教授、學正。（中国历代人物传记资料库 CBDB 638708） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王桂林（CBDB 638708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638708&o=json)

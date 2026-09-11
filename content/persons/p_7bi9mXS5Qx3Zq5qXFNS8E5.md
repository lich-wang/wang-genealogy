---
schema: wang-person/v1
id: p_7bi9mXS5Qx3Zq5qXFNS8E5
status: active
merged_into: null
display_name: 王所擢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gBPpR7fdKnJu9HuN95CQgz
        subject_person_id: p_7bi9mXS5Qx3Zq5qXFNS8E5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王所擢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nX4QPjefPmjemNu8AH6fvG
          claim_id: c_gBPpR7fdKnJu9HuN95CQgz
          source_id: s_453fjQCZefXv6kiKsTUpAv
          stance: supports
          locator: CBDB:638055
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638055）
          source: &a1
            id: s_453fjQCZefXv6kiKsTUpAv
            source_type: api_record
            title: 中国历代人物传记资料库：王所擢（CBDB 638055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638055&o=json
            external_identifier: CBDB:638055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.597Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j4pYZnB3HJLNNnPbwxzkvz
        subject_person_id: p_7bi9mXS5Qx3Zq5qXFNS8E5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王所擢，清人物。籍贯樂陵，入仕貢生: 拔貢，曾任知縣、復設教諭。（中国历代人物传记资料库 CBDB 638055）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2gHEaj5ivaN9caFS27db7l
          claim_id: c_j4pYZnB3HJLNNnPbwxzkvz
          source_id: s_453fjQCZefXv6kiKsTUpAv
          stance: supports
          locator: CBDB:638055
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

# 王所擢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王所擢 | accepted |
| bio.summary | 王所擢，清人物。籍贯樂陵，入仕貢生: 拔貢，曾任知縣、復設教諭。（中国历代人物传记资料库 CBDB 638055） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王所擢（CBDB 638055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638055&o=json)

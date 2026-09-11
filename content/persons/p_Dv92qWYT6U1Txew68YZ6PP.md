---
schema: wang-person/v1
id: p_Dv92qWYT6U1Txew68YZ6PP
status: active
merged_into: null
display_name: 王所擢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NNNHDjziHkWmytuL256UnL
        subject_person_id: p_Dv92qWYT6U1Txew68YZ6PP
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
        - id: cs_5RPX3iPYJ7ibpa9W1XgZGd
          claim_id: c_NNNHDjziHkWmytuL256UnL
          source_id: s_6w2jum7ciyfcsCGRn4mo4E
          stance: supports
          locator: CBDB:638056
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638056）
          source: &a1
            id: s_6w2jum7ciyfcsCGRn4mo4E
            source_type: api_record
            title: 中国历代人物传记资料库：王所擢（CBDB 638056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638056&o=json
            external_identifier: CBDB:638056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.598Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N5VJdMXNJreMKhDroFMwxq
        subject_person_id: p_Dv92qWYT6U1Txew68YZ6PP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王所擢，清人物。籍贯樂陵，入仕貢生: 拔貢，曾任知縣。（中国历代人物传记资料库 CBDB 638056）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7OWlF3deSZHP9isUyUFA_m
          claim_id: c_N5VJdMXNJreMKhDroFMwxq
          source_id: s_6w2jum7ciyfcsCGRn4mo4E
          stance: supports
          locator: CBDB:638056
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
| bio.summary | 王所擢，清人物。籍贯樂陵，入仕貢生: 拔貢，曾任知縣。（中国历代人物传记资料库 CBDB 638056） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王所擢（CBDB 638056）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638056&o=json)

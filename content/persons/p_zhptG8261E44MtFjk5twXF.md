---
schema: wang-person/v1
id: p_zhptG8261E44MtFjk5twXF
status: active
merged_into: null
display_name: 王筮泰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CjtQn3sCsgdMDLtUiUyTAx
        subject_person_id: p_zhptG8261E44MtFjk5twXF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王筮泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5vvKL9cKcEfdSirjYh4EQD
          claim_id: c_CjtQn3sCsgdMDLtUiUyTAx
          source_id: s_g5M6fgdjyZ4NmxHvsyr2Rs
          stance: supports
          locator: CBDB:639719
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639719）
          source: &a1
            id: s_g5M6fgdjyZ4NmxHvsyr2Rs
            source_type: api_record
            title: 中国历代人物传记资料库：王筮泰（CBDB 639719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639719&o=json
            external_identifier: CBDB:639719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.023Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M9FdN8tXz4XQ2X1928JFh3
        subject_person_id: p_zhptG8261E44MtFjk5twXF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王筮泰，清人物。籍贯大名，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 639719）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UCJ34VaKRr5JiQqGmuk8Fn
          claim_id: c_M9FdN8tXz4XQ2X1928JFh3
          source_id: s_g5M6fgdjyZ4NmxHvsyr2Rs
          stance: supports
          locator: CBDB:639719
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

# 王筮泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王筮泰 | accepted |
| bio.summary | 王筮泰，清人物。籍贯大名，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 639719） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王筮泰（CBDB 639719）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639719&o=json)

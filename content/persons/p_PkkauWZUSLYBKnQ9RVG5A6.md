---
schema: wang-person/v1
id: p_PkkauWZUSLYBKnQ9RVG5A6
status: active
merged_into: null
display_name: 王樹珊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cy72pg4hYGKCH4wEfK3aVE
        subject_person_id: p_PkkauWZUSLYBKnQ9RVG5A6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹珊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JU7c1q13rvrKFF7aABsgar
          claim_id: c_cy72pg4hYGKCH4wEfK3aVE
          source_id: s_DWxfV8BaQVE4LiNy3kDhFd
          stance: supports
          locator: CBDB:638864
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638864）
          source: &a1
            id: s_DWxfV8BaQVE4LiNy3kDhFd
            source_type: api_record
            title: 中国历代人物传记资料库：王樹珊（CBDB 638864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638864&o=json
            external_identifier: CBDB:638864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.770Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nxoLdwJjFkyL6TBTUEVDLV
        subject_person_id: p_PkkauWZUSLYBKnQ9RVG5A6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹珊，清人物。籍贯禹州，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 638864）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hAzhtaGrEMcm_axWctOu8G
          claim_id: c_nxoLdwJjFkyL6TBTUEVDLV
          source_id: s_DWxfV8BaQVE4LiNy3kDhFd
          stance: supports
          locator: CBDB:638864
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

# 王樹珊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樹珊 | accepted |
| bio.summary | 王樹珊，清人物。籍贯禹州，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 638864） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樹珊（CBDB 638864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638864&o=json)

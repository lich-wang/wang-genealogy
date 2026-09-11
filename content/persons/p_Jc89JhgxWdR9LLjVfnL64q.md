---
schema: wang-person/v1
id: p_Jc89JhgxWdR9LLjVfnL64q
status: active
merged_into: null
display_name: 王文明
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1SAJwR5bcC21dbTNJL4E7o
        subject_person_id: p_Jc89JhgxWdR9LLjVfnL64q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RHxiREoUt12aBWt2B5te7j
          claim_id: c_1SAJwR5bcC21dbTNJL4E7o
          source_id: s_yw3RCzLpRCQMZwY2kyTF16
          stance: supports
          locator: CBDB:638228
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638228）
          source: &a1
            id: s_yw3RCzLpRCQMZwY2kyTF16
            source_type: api_record
            title: 中国历代人物传记资料库：王文明（CBDB 638228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638228&o=json
            external_identifier: CBDB:638228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.632Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ghJ4NGndVJYwzM2YADDmt8
        subject_person_id: p_Jc89JhgxWdR9LLjVfnL64q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文明，清人物。籍贯衡陽，入仕軍功補授(軍功)，曾任都司、守備。（中国历代人物传记资料库 CBDB 638228）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_55_iufr4Tjvex5fPainJVD
          claim_id: c_ghJ4NGndVJYwzM2YADDmt8
          source_id: s_yw3RCzLpRCQMZwY2kyTF16
          stance: supports
          locator: CBDB:638228
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

# 王文明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文明 | accepted |
| bio.summary | 王文明，清人物。籍贯衡陽，入仕軍功補授(軍功)，曾任都司、守備。（中国历代人物传记资料库 CBDB 638228） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文明（CBDB 638228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638228&o=json)

---
schema: wang-person/v1
id: p_hxAkNXLYL3BWUfWFHfbthv
status: active
merged_into: null
display_name: 王德徽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_u9X8RmE7Ch31GLGGnXvy8H
        subject_person_id: p_hxAkNXLYL3BWUfWFHfbthv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德徽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oG4QU756bi32bWJy1d6CnD
          claim_id: c_u9X8RmE7Ch31GLGGnXvy8H
          source_id: s_su8bxgLxtjG93KECEQ7xbr
          stance: supports
          locator: CBDB:568814
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568814）
          source: &a1
            id: s_su8bxgLxtjG93KECEQ7xbr
            source_type: api_record
            title: 中国历代人物传记资料库：王德徽（CBDB 568814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568814&o=json
            external_identifier: CBDB:568814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.638Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w9n623HEhZQVBnzqLibVbt
        subject_person_id: p_hxAkNXLYL3BWUfWFHfbthv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W3KJYSz4p894tAHFuZQ22W
          claim_id: c_w9n623HEhZQVBnzqLibVbt
          source_id: s_su8bxgLxtjG93KECEQ7xbr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王德徽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德徽 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德徽（CBDB 568814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568814&o=json)

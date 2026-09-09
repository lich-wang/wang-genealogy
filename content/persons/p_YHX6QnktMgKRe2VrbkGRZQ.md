---
schema: wang-person/v1
id: p_YHX6QnktMgKRe2VrbkGRZQ
status: active
merged_into: null
display_name: 王希武
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6PtLRzEEgJhcmbHhaTGd4w
        subject_person_id: p_YHX6QnktMgKRe2VrbkGRZQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希武
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qaYiw969USSFotpmK8Zffu
          claim_id: c_6PtLRzEEgJhcmbHhaTGd4w
          source_id: s_4gcZbuLmhYEBqQiCNKc2mK
          stance: supports
          locator: CBDB:490707
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（490707）
          source: &a1
            id: s_4gcZbuLmhYEBqQiCNKc2mK
            source_type: api_record
            title: 中国历代人物传记资料库：王希武（CBDB 490707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490707&o=json
            external_identifier: CBDB:490707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.139Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vJw6igKmreM7R4C4G6ZWtf
        subject_person_id: p_YHX6QnktMgKRe2VrbkGRZQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kHWi79Vnrx7iqrHdDA1hX3
          claim_id: c_vJw6igKmreM7R4C4G6ZWtf
          source_id: s_4gcZbuLmhYEBqQiCNKc2mK
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

# 王希武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希武 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希武（CBDB 490707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490707&o=json)

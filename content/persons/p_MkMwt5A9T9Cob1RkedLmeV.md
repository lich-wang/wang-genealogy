---
schema: wang-person/v1
id: p_MkMwt5A9T9Cob1RkedLmeV
status: active
merged_into: null
display_name: 王文震
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hUvgwUmvwK86GkS5kNatnC
        subject_person_id: p_MkMwt5A9T9Cob1RkedLmeV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文震
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_We5JY53TAUATKPepKHiLuB
          claim_id: c_hUvgwUmvwK86GkS5kNatnC
          source_id: s_iinRES4rfngFZYJHEza6or
          stance: supports
          locator: CBDB:688619
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688619）
          source: &a1
            id: s_iinRES4rfngFZYJHEza6or
            source_type: api_record
            title: 中国历代人物传记资料库：王文震（CBDB 688619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688619&o=json
            external_identifier: CBDB:688619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.528Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HMPEgJiXDMdJag4bN25VHM
        subject_person_id: p_MkMwt5A9T9Cob1RkedLmeV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rmxF41nsQ1qzdLe781692f
          claim_id: c_HMPEgJiXDMdJag4bN25VHM
          source_id: s_iinRES4rfngFZYJHEza6or
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

# 王文震

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文震 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文震（CBDB 688619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688619&o=json)

---
schema: wang-person/v1
id: p_eykM7hnUgZ7LVCzxt1bNPa
status: active
merged_into: null
display_name: 王利亨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A241h8pV69VX1512JUNNKB
        subject_person_id: p_eykM7hnUgZ7LVCzxt1bNPa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王利亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CLwknqm37soq1eHvAavGTk
          claim_id: c_A241h8pV69VX1512JUNNKB
          source_id: s_8eU3svE5vTGrAef78XGjqE
          stance: supports
          locator: CBDB:342220
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342220）
          source: &a1
            id: s_8eU3svE5vTGrAef78XGjqE
            source_type: api_record
            title: 中国历代人物传记资料库：王利亨（CBDB 342220）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342220&o=json
            external_identifier: CBDB:342220
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.871Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qkMELW7cuDphJzbKhSuzja
        subject_person_id: p_eykM7hnUgZ7LVCzxt1bNPa
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
        - id: cs_bASpmVJ4aMsYNdXc7X5VAf
          claim_id: c_qkMELW7cuDphJzbKhSuzja
          source_id: s_8eU3svE5vTGrAef78XGjqE
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

# 王利亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王利亨 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王利亨（CBDB 342220）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342220&o=json)

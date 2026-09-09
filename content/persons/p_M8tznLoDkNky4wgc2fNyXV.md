---
schema: wang-person/v1
id: p_M8tznLoDkNky4wgc2fNyXV
status: active
merged_into: null
display_name: 王文驤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZvVP3Ch4ZQEpTWv79ECRB7
        subject_person_id: p_M8tznLoDkNky4wgc2fNyXV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文驤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zYmASyBMHAswpD8SNYWxYv
          claim_id: c_ZvVP3Ch4ZQEpTWv79ECRB7
          source_id: s_8xxmdDpregts8ZtLiv7yMc
          stance: supports
          locator: CBDB:341625
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341625）
          source: &a1
            id: s_8xxmdDpregts8ZtLiv7yMc
            source_type: api_record
            title: 中国历代人物传记资料库：王文驤（CBDB 341625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341625&o=json
            external_identifier: CBDB:341625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.616Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NGzxCg571XEK6xHLBL8D5D
        subject_person_id: p_M8tznLoDkNky4wgc2fNyXV
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
        - id: cs_S2wHTNGM9P4k97J136Pu8s
          claim_id: c_NGzxCg571XEK6xHLBL8D5D
          source_id: s_8xxmdDpregts8ZtLiv7yMc
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

# 王文驤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文驤 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文驤（CBDB 341625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341625&o=json)

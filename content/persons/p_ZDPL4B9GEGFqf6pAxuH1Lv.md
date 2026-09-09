---
schema: wang-person/v1
id: p_ZDPL4B9GEGFqf6pAxuH1Lv
status: active
merged_into: null
display_name: 王瑜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rvmEH2z7oD4BFKzieT4oQ5
        subject_person_id: p_ZDPL4B9GEGFqf6pAxuH1Lv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gN5z73Y8aM9dq1zuuP8pcF
          claim_id: c_rvmEH2z7oD4BFKzieT4oQ5
          source_id: s_F69XmkR8pucLbLgky5EhVm
          stance: supports
          locator: CBDB:639427
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639427）
          source: &a1
            id: s_F69XmkR8pucLbLgky5EhVm
            source_type: api_record
            title: 中国历代人物传记资料库：王瑜（CBDB 639427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639427&o=json
            external_identifier: CBDB:639427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.921Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s1wHEpeweyP25mv2D8GkeA
        subject_person_id: p_ZDPL4B9GEGFqf6pAxuH1Lv
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
        - id: cs_F5n6bQ1PHCwnri6LgyUZG1
          claim_id: c_s1wHEpeweyP25mv2D8GkeA
          source_id: s_F69XmkR8pucLbLgky5EhVm
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

# 王瑜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑜 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑜（CBDB 639427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639427&o=json)

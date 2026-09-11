---
schema: wang-person/v1
id: p_SpSLrczrNW3M2XFgwPhAVt
status: active
merged_into: null
display_name: 王國用
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7JzNH1t7HG2YkSts6o5fki
        subject_person_id: p_SpSLrczrNW3M2XFgwPhAVt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_15DuhGkifrPnD3ZXQHxcM8
          claim_id: c_7JzNH1t7HG2YkSts6o5fki
          source_id: s_Bbi7yGpGXiLD6KED4m9Gx1
          stance: supports
          locator: CBDB:166391
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（166391）
          source: &a1
            id: s_Bbi7yGpGXiLD6KED4m9Gx1
            source_type: api_record
            title: 中国历代人物传记资料库：王國用（CBDB 166391）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166391&o=json
            external_identifier: CBDB:166391
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.987Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3xJXiEurHiuGb8pZm26A8U
        subject_person_id: p_SpSLrczrNW3M2XFgwPhAVt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g66aEkL2s3QoejJxSi2tTL
          claim_id: c_3xJXiEurHiuGb8pZm26A8U
          source_id: s_Bbi7yGpGXiLD6KED4m9Gx1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_iogjsBC5octUvkXL6HZg77
        subject_person_id: p_xnFCV6EtnypuEAvQtMf7G3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SpSLrczrNW3M2XFgwPhAVt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sQQ00d-zqQEXNBocPFOwfI
          claim_id: c_iogjsBC5octUvkXL6HZg77
          source_id: s_Bbi7yGpGXiLD6KED4m9Gx1
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Baoli2：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xnFCV6EtnypuEAvQtMf7G3
        status: active
        display_name: 王友玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王國用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國用 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xnFCV6EtnypuEAvQtMf7G3 | 王友玉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國用（CBDB 166391）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166391&o=json)

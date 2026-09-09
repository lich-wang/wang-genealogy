---
schema: wang-person/v1
id: p_xD2UGXBYGMspPLNa3BxAbe
status: active
merged_into: null
display_name: 王齊丘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JFG7fpXKGc8BPdiYd4ax87
        subject_person_id: p_xD2UGXBYGMspPLNa3BxAbe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王齊丘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i3uHE2SAafkcZBvrr7qWPc
          claim_id: c_JFG7fpXKGc8BPdiYd4ax87
          source_id: s_48WBpyvYfpWTXsNqbB66pn
          stance: supports
          locator: CBDB:140256
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140256）
          source: &a1
            id: s_48WBpyvYfpWTXsNqbB66pn
            source_type: api_record
            title: 中国历代人物传记资料库：王齊丘（CBDB 140256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140256&o=json
            external_identifier: CBDB:140256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.203Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PcmFoXbb5KAGE3hYALWfnU
        subject_person_id: p_xD2UGXBYGMspPLNa3BxAbe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 651年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uvv8KMveBwbk91tdTr66sW
          claim_id: c_PcmFoXbb5KAGE3hYALWfnU
          source_id: s_48WBpyvYfpWTXsNqbB66pn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_vs67D7p8uz8BWxDW9c2fo8
        subject_person_id: p_xD2UGXBYGMspPLNa3BxAbe
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 709年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DUPU7Ny9RpJzQTth6se627
          claim_id: c_vs67D7p8uz8BWxDW9c2fo8
          source_id: s_48WBpyvYfpWTXsNqbB66pn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cpomEw2isKYdffW8NXke26
        subject_person_id: p_xD2UGXBYGMspPLNa3BxAbe
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
        - id: cs_JX3wDziM21LZJC5c8t2Gcu
          claim_id: c_cpomEw2isKYdffW8NXke26
          source_id: s_48WBpyvYfpWTXsNqbB66pn
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

# 王齊丘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王齊丘 | accepted |
| birth.date | 651年 | accepted |
| death.date | 709年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王齊丘（CBDB 140256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140256&o=json)

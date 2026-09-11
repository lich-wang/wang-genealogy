---
schema: wang-person/v1
id: p_HEUcerQJFyi9et4579m3gv
status: active
merged_into: null
display_name: 王遵訓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FD9UQEr3wJ7mvPRuN4jL8S
        subject_person_id: p_HEUcerQJFyi9et4579m3gv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w6kyJETXcDevyM8G3pysXY
          claim_id: c_FD9UQEr3wJ7mvPRuN4jL8S
          source_id: s_wRUdnTyP5CUA1SubSNpUQe
          stance: supports
          locator: CBDB:69461
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69461）
          source: &a1
            id: s_wRUdnTyP5CUA1SubSNpUQe
            source_type: api_record
            title: 中国历代人物传记资料库：王遵訓（CBDB 69461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69461&o=json
            external_identifier: CBDB:69461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.280Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_iaMKUPh1RwKgdxkCVzbfjv
        subject_person_id: p_HEUcerQJFyi9et4579m3gv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1629年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AUAtVGhurKsQ3hp11NYpzX
          claim_id: c_iaMKUPh1RwKgdxkCVzbfjv
          source_id: s_wRUdnTyP5CUA1SubSNpUQe
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
        id: c_8DDi2APeTUcD98NYaoBAkN
        subject_person_id: p_HEUcerQJFyi9et4579m3gv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1688年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LfiwErfRxyvXmjduQyEu3g
          claim_id: c_8DDi2APeTUcD98NYaoBAkN
          source_id: s_wRUdnTyP5CUA1SubSNpUQe
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
        id: c_MpiGMUgxXPtGK71VJz9YoT
        subject_person_id: p_HEUcerQJFyi9et4579m3gv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵訓（1629年—1688年），清人物。籍贯西華，入仕進士，曾任通政、通政司右通政。（中国历代人物传记资料库 CBDB 69461）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QGIgWzCY3rhQMmfbvMTIdY
          claim_id: c_MpiGMUgxXPtGK71VJz9YoT
          source_id: s_wRUdnTyP5CUA1SubSNpUQe
          stance: supports
          locator: CBDB:69461
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
  ancestors:
    - claim:
        id: c_INA5ybAhKZOGJOY6LH_isd
        subject_person_id: p_KTynjRn7fpCYtyL7AxGceQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HEUcerQJFyi9et4579m3gv
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3OxpsVtMqEc-M6GlBilI52
          claim_id: c_INA5ybAhKZOGJOY6LH_isd
          source_id: s_wRUdnTyP5CUA1SubSNpUQe
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13172：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KTynjRn7fpCYtyL7AxGceQ
        status: active
        display_name: 王鳴世
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王遵訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遵訓 | accepted |
| birth.date | 1629年 | accepted |
| death.date | 1688年 | accepted |
| bio.summary | 王遵訓（1629年—1688年），清人物。籍贯西華，入仕進士，曾任通政、通政司右通政。（中国历代人物传记资料库 CBDB 69461） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_KTynjRn7fpCYtyL7AxGceQ | 王鳴世 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遵訓（CBDB 69461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69461&o=json)

---
schema: wang-person/v1
id: p_VVpoZXbt4MJ9UCeKhzaMbB
status: active
merged_into: null
display_name: 王彬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qMZMuZUvJLCiwwv1SxP3Ds
        subject_person_id: p_VVpoZXbt4MJ9UCeKhzaMbB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sg3kbyiukkzF2fF7pVH4wC
          claim_id: c_qMZMuZUvJLCiwwv1SxP3Ds
          source_id: s_Y146rcrNELdTu6DH1xieTY
          stance: supports
          locator: CBDB:3969
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3969）
          source: &a1
            id: s_Y146rcrNELdTu6DH1xieTY
            source_type: api_record
            title: 中国历代人物传记资料库：王彬（CBDB 3969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3969&o=json
            external_identifier: CBDB:3969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.437Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FbchCELYCbTACgzjeNLGSd
        subject_person_id: p_VVpoZXbt4MJ9UCeKhzaMbB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彬，五代人物。籍贯真定。（中国历代人物传记资料库 CBDB 3969）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CSuazU4XGHnhmI9j4uJULX
          claim_id: c_FbchCELYCbTACgzjeNLGSd
          source_id: s_Y146rcrNELdTu6DH1xieTY
          stance: supports
          locator: CBDB:3969
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_NYznspjRO8-EpjPCNetWDG
        subject_person_id: p_VVpoZXbt4MJ9UCeKhzaMbB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WJHP8YxtLrW6oyDrhKZ1wB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bBYxsE5mYHe9svzvLASA5L
          claim_id: c_NYznspjRO8-EpjPCNetWDG
          source_id: s_Y146rcrNELdTu6DH1xieTY
          stance: supports
          locator: CBDB 双向互证（子 王化基 ⇄ 父 王彬）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_WJHP8YxtLrW6oyDrhKZ1wB
        status: active
        display_name: 王化基
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王彬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彬 | accepted |
| bio.summary | 王彬，五代人物。籍贯真定。（中国历代人物传记资料库 CBDB 3969） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_WJHP8YxtLrW6oyDrhKZ1wB | 王化基 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彬（CBDB 3969）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3969&o=json)

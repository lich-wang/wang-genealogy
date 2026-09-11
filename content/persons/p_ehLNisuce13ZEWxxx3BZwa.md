---
schema: wang-person/v1
id: p_ehLNisuce13ZEWxxx3BZwa
status: active
merged_into: null
display_name: 王祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mh6856FEFfEdrCm6mzCQG9
        subject_person_id: p_ehLNisuce13ZEWxxx3BZwa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xkULJuLVLU9M94QHrdGgNp
          claim_id: c_mh6856FEFfEdrCm6mzCQG9
          source_id: s_2NvQhSvQbpEVGawGonTYKi
          stance: supports
          locator: CBDB:35520
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35520）
          source: &a1
            id: s_2NvQhSvQbpEVGawGonTYKi
            source_type: api_record
            title: 中国历代人物传记资料库：王祥（CBDB 35520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35520&o=json
            external_identifier: CBDB:35520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.138Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qyGWjzWFgHf8ogNNW3VXz5
        subject_person_id: p_ehLNisuce13ZEWxxx3BZwa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祥，明人物。籍贯廬陵。（中国历代人物传记资料库 CBDB 35520）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wezSYQyz96d8xfmuSktPOr
          claim_id: c_qyGWjzWFgHf8ogNNW3VXz5
          source_id: s_2NvQhSvQbpEVGawGonTYKi
          stance: supports
          locator: CBDB:35520
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
  ancestors: []
  descendants: []
  other: []
---

# 王祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祥 | accepted |
| bio.summary | 王祥，明人物。籍贯廬陵。（中国历代人物传记资料库 CBDB 35520） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祥（CBDB 35520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35520&o=json)

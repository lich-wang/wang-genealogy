---
schema: wang-person/v1
id: p_UVez4FnLWyc74fhAocnKqR
status: active
merged_into: null
display_name: 陳氏
revision: 1
cbdb_id: 386577
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8u3IOei4wI8x9ezFVdDgXz
        subject_person_id: p_UVez4FnLWyc74fhAocnKqR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏，宋人物。籍贯義烏。（中国历代人物传记资料库 CBDB 386577）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5XOcVuSdZMHpsBjELimEKT
          claim_id: c_8u3IOei4wI8x9ezFVdDgXz
          source_id: s_FGsawhBemoAIZxXVyOLhlK
          stance: supports
          locator: CBDB:386577
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_FGsawhBemoAIZxXVyOLhlK
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(陳正彚女)（CBDB 386577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386577&o=json
            external_identifier: CBDB:386577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ozs_YYyRGOC1yc4nzq_irV
        subject_person_id: p_UVez4FnLWyc74fhAocnKqR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AkGCtF67PYsVdMzlOqGP0a
          claim_id: c_Ozs_YYyRGOC1yc4nzq_irV
          source_id: s_FGsawhBemoAIZxXVyOLhlK
          stance: supports
          locator: CBDB:386577
          quotation: null
          interpretation_note: CBDB 明确记录的王儔配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_LYXehTOd0s6MGkzjaVbCu7
        subject_person_id: p_xD51Nz4rSAkq5zdMahqJPm
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_UVez4FnLWyc74fhAocnKqR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MFqZPHHmyplb69HNGe5GYZ
          claim_id: c_LYXehTOd0s6MGkzjaVbCu7
          source_id: s_FGsawhBemoAIZxXVyOLhlK
          stance: supports
          locator: CBDB 双向互证（妻子 陳氏(陳正彚女)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xD51Nz4rSAkq5zdMahqJPm
        status: active
        display_name: 王儔
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陳氏，宋人物。籍贯義烏。（中国历代人物传记资料库 CBDB 386577） | accepted |
| name.primary | 陳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_xD51Nz4rSAkq5zdMahqJPm | 王儔 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(陳正彚女)（CBDB 386577）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386577&o=json)

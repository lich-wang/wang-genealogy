---
schema: wang-person/v1
id: p_gJgtq3bsK82t2MMv89Y249
status: active
merged_into: null
display_name: 王懿恭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vQBw5sivUPz4CRyo3nn6XY
        subject_person_id: p_gJgtq3bsK82t2MMv89Y249
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懿恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Apq6pbj8iCGjtNHf118PXh
          claim_id: c_vQBw5sivUPz4CRyo3nn6XY
          source_id: s_7cXzqbAbfdpm31us9M9KME
          stance: supports
          locator: CBDB:638035
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638035）
          source: &a1
            id: s_7cXzqbAbfdpm31us9M9KME
            source_type: api_record
            title: 中国历代人物传记资料库：王懿恭（CBDB 638035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638035&o=json
            external_identifier: CBDB:638035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.493Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AeHS5g6Qdy9x6QrHfpLB9E
        subject_person_id: p_gJgtq3bsK82t2MMv89Y249
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懿恭，清人物。籍贯祥符，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638035）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rL0zWYP15HVqM3sthZkVIY
          claim_id: c_AeHS5g6Qdy9x6QrHfpLB9E
          source_id: s_7cXzqbAbfdpm31us9M9KME
          stance: supports
          locator: CBDB:638035
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

# 王懿恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懿恭 | accepted |
| bio.summary | 王懿恭，清人物。籍贯祥符，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638035） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懿恭（CBDB 638035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638035&o=json)

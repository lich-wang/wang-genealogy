---
schema: wang-person/v1
id: p_2d6pPSbEPHv3pkL4APT3M3
status: active
merged_into: null
display_name: 王桂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p9N1gzvF9YR4vFffrLqrFN
        subject_person_id: p_2d6pPSbEPHv3pkL4APT3M3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PP6jReA1Edaj9T6ENqNBWg
          claim_id: c_p9N1gzvF9YR4vFffrLqrFN
          source_id: s_8mJ8MvjQQQQ43aMkN3i8Ey
          stance: supports
          locator: CBDB:100761
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100761）
          source: &a1
            id: s_8mJ8MvjQQQQ43aMkN3i8Ey
            source_type: api_record
            title: 中国历代人物传记资料库：王桂（CBDB 100761）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100761&o=json
            external_identifier: CBDB:100761
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.423Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eRv8pDpA9SH1TFcuVnQM4U
        subject_person_id: p_2d6pPSbEPHv3pkL4APT3M3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂，元人物。籍贯章丘，曾任副留守、監察御史、吏部員外郎。（中国历代人物传记资料库 CBDB 100761）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6Bo3KkLqFEcLe7F1drX7th
          claim_id: c_eRv8pDpA9SH1TFcuVnQM4U
          source_id: s_8mJ8MvjQQQQ43aMkN3i8Ey
          stance: supports
          locator: CBDB:100761
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

# 王桂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桂 | accepted |
| bio.summary | 王桂，元人物。籍贯章丘，曾任副留守、監察御史、吏部員外郎。（中国历代人物传记资料库 CBDB 100761） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王桂（CBDB 100761）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100761&o=json)

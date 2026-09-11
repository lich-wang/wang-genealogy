---
schema: wang-person/v1
id: p_TSm61qCgZbMWwKV39vYRNP
status: active
merged_into: null
display_name: 王翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ed3bGVpygwwzdDs5nAu9Lf
        subject_person_id: p_TSm61qCgZbMWwKV39vYRNP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vvgc11qH2GaVyrW2qjhTty
          claim_id: c_ed3bGVpygwwzdDs5nAu9Lf
          source_id: s_C3UJM2RoKAL4Tdx2o79LZb
          stance: supports
          locator: CBDB:465356
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（465356）
          source: &a1
            id: s_C3UJM2RoKAL4Tdx2o79LZb
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 465356）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465356&o=json
            external_identifier: CBDB:465356
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sm5FGk9pQqErYHsjNneiGF
        subject_person_id: p_TSm61qCgZbMWwKV39vYRNP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翰，宋人物。曾任通判。（中国历代人物传记资料库 CBDB 465356）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Tdq6ker-xqEDivwRLXDKsW
          claim_id: c_sm5FGk9pQqErYHsjNneiGF
          source_id: s_C3UJM2RoKAL4Tdx2o79LZb
          stance: supports
          locator: CBDB:465356
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

# 王翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翰 | accepted |
| bio.summary | 王翰，宋人物。曾任通判。（中国历代人物传记资料库 CBDB 465356） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翰（CBDB 465356）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465356&o=json)

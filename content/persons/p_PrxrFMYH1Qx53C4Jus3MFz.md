---
schema: wang-person/v1
id: p_PrxrFMYH1Qx53C4Jus3MFz
status: active
merged_into: null
display_name: 王笴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ixXXPGpp9AQEm7Y8m2K9mH
        subject_person_id: p_PrxrFMYH1Qx53C4Jus3MFz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王笴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J4mNWkH4etw8RgyeAx7cR1
          claim_id: c_ixXXPGpp9AQEm7Y8m2K9mH
          source_id: s_ifrb6EoTKwy1wkHUrkLE97
          stance: supports
          locator: CBDB:479606
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（479606）
          source: &a1
            id: s_ifrb6EoTKwy1wkHUrkLE97
            source_type: api_record
            title: 中国历代人物传记资料库：王笴（CBDB 479606）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=479606&o=json
            external_identifier: CBDB:479606
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.617Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SD8s1KNMJKVzPbUnBy6eRL
        subject_person_id: p_PrxrFMYH1Qx53C4Jus3MFz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王笴，元人物。曾任僉事。（中国历代人物传记资料库 CBDB 479606）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_K8esA8LU03jpNrDViVTVD3
          claim_id: c_SD8s1KNMJKVzPbUnBy6eRL
          source_id: s_ifrb6EoTKwy1wkHUrkLE97
          stance: supports
          locator: CBDB:479606
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

# 王笴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王笴 | accepted |
| bio.summary | 王笴，元人物。曾任僉事。（中国历代人物传记资料库 CBDB 479606） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王笴（CBDB 479606）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=479606&o=json)

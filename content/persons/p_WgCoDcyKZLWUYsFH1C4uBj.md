---
schema: wang-person/v1
id: p_WgCoDcyKZLWUYsFH1C4uBj
status: active
merged_into: null
display_name: 王臬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QGraju5Geuap4XK1VZBk6B
        subject_person_id: p_WgCoDcyKZLWUYsFH1C4uBj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bFSFYTPUoGqHDVkGX1PFzz
          claim_id: c_QGraju5Geuap4XK1VZBk6B
          source_id: s_8dTYC7BypFnW7HzHF4EThi
          stance: supports
          locator: CBDB:467706
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（467706）
          source: &a1
            id: s_8dTYC7BypFnW7HzHF4EThi
            source_type: api_record
            title: 中国历代人物传记资料库：王臬（CBDB 467706）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467706&o=json
            external_identifier: CBDB:467706
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.049Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_89y4dDhS8ghQZbKofyhHLu
        subject_person_id: p_WgCoDcyKZLWUYsFH1C4uBj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臬，明人物。曾任巡按御史。（中国历代人物传记资料库 CBDB 467706）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RkqYRQt4j14fbWrRx8bzin
          claim_id: c_89y4dDhS8ghQZbKofyhHLu
          source_id: s_8dTYC7BypFnW7HzHF4EThi
          stance: supports
          locator: CBDB:467706
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

# 王臬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臬 | accepted |
| bio.summary | 王臬，明人物。曾任巡按御史。（中国历代人物传记资料库 CBDB 467706） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王臬（CBDB 467706）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467706&o=json)

---
schema: wang-person/v1
id: p_WFnKJp59uPneKERGCp4rfC
status: active
merged_into: null
display_name: 王鵬連
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oP1iUCK2Mum41669d8aw9f
        subject_person_id: p_WFnKJp59uPneKERGCp4rfC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鵬連
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nvLgL1o6aDJ7gXrrtxkvE3
          claim_id: c_oP1iUCK2Mum41669d8aw9f
          source_id: s_ivFUV92RwVWR46FSL5qgf4
          stance: supports
          locator: CBDB:641012
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（641012）
          source: &a1
            id: s_ivFUV92RwVWR46FSL5qgf4
            source_type: api_record
            title: 中国历代人物传记资料库：王鵬連（CBDB 641012）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641012&o=json
            external_identifier: CBDB:641012
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.441Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bz3DsKFprMDLcz2N4beQF8
        subject_person_id: p_WFnKJp59uPneKERGCp4rfC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鵬連，清人物。籍贯大興，入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 641012）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UKN1sql3yB8jHneGNMZJiD
          claim_id: c_bz3DsKFprMDLcz2N4beQF8
          source_id: s_ivFUV92RwVWR46FSL5qgf4
          stance: supports
          locator: CBDB:641012
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

# 王鵬連

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鵬連 | accepted |
| bio.summary | 王鵬連，清人物。籍贯大興，入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 641012） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鵬連（CBDB 641012）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641012&o=json)

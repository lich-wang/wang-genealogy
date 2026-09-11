---
schema: wang-person/v1
id: p_MBMe6Nvn9kCGH1aDJZxSFX
status: active
merged_into: null
display_name: 王思沂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BmCcReX7SyduW7v3TzLHxx
        subject_person_id: p_MBMe6Nvn9kCGH1aDJZxSFX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思沂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2wRndp3Gts9jHaDFFeLB3R
          claim_id: c_BmCcReX7SyduW7v3TzLHxx
          source_id: s_sBMY9p6BQ415HYbKygvLGz
          stance: supports
          locator: CBDB:343459
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343459）
          source: &a1
            id: s_sBMY9p6BQ415HYbKygvLGz
            source_type: api_record
            title: 中国历代人物传记资料库：王思沂（CBDB 343459）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343459&o=json
            external_identifier: CBDB:343459
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.359Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q3FVFej1TSfPqvmvHNbhTw
        subject_person_id: p_MBMe6Nvn9kCGH1aDJZxSFX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思沂，清人物。明清進士進士，籍贯歸安，入仕進士，曾任按察使銜、布政使銜、工部屯田司主事。（中国历代人物传记资料库 CBDB 343459）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Npa0X_d6sv2DKMsR9NkbHq
          claim_id: c_Q3FVFej1TSfPqvmvHNbhTw
          source_id: s_sBMY9p6BQ415HYbKygvLGz
          stance: supports
          locator: CBDB:343459
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

# 王思沂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思沂 | accepted |
| bio.summary | 王思沂，清人物。明清進士進士，籍贯歸安，入仕進士，曾任按察使銜、布政使銜、工部屯田司主事。（中国历代人物传记资料库 CBDB 343459） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思沂（CBDB 343459）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343459&o=json)

---
schema: wang-person/v1
id: p_vcs5hjPz51eMP4swwFTft7
status: active
merged_into: null
display_name: 王體蒙
cbdb_id: 495817
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vFiWY2mLM4eVL2fvFJRavD
        subject_person_id: p_vcs5hjPz51eMP4swwFTft7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王體蒙，明人物。入仕鄉貢舉人，曾任知州。（中国历代人物传记资料库 CBDB 495817）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_PJBElG-K2DOk3vCO_QcF1a
          claim_id: c_vFiWY2mLM4eVL2fvFJRavD
          source_id: s_JEA4PHZJb59KLAuptPMLrN
          stance: supports
          locator: CBDB:495817
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JEA4PHZJb59KLAuptPMLrN
            source_type: api_record
            title: 中国历代人物传记资料库：王體蒙（CBDB 495817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495817&o=json
            external_identifier: CBDB:495817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:14.754Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7GLq76fsKgudfJBy8xmqWh
        subject_person_id: p_vcs5hjPz51eMP4swwFTft7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王體蒙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_tdBeTc6QM9tam397RMyk3V
          claim_id: c_7GLq76fsKgudfJBy8xmqWh
          source_id: s_JEA4PHZJb59KLAuptPMLrN
          stance: supports
          locator: CBDB:495817
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6701-6800）｜历史性依据：CBDB 朝代 = 明
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

# 王體蒙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王體蒙，明人物。入仕鄉貢舉人，曾任知州。（中国历代人物传记资料库 CBDB 495817） | accepted |
| name.primary | 王體蒙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王體蒙（CBDB 495817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495817&o=json)

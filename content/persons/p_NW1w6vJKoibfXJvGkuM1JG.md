---
schema: wang-person/v1
id: p_NW1w6vJKoibfXJvGkuM1JG
status: active
merged_into: null
display_name: 王文美
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5YMKWtmhL5p8bCMTJTbczY
        subject_person_id: p_NW1w6vJKoibfXJvGkuM1JG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文美
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dfqtHMkrsyJM822bhwwnWW
          claim_id: c_5YMKWtmhL5p8bCMTJTbczY
          source_id: s_kQnAFasSQ9pPy7CXdEnMBY
          stance: supports
          locator: CBDB:328244
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328244）
          source: &a1
            id: s_kQnAFasSQ9pPy7CXdEnMBY
            source_type: api_record
            title: 中国历代人物传记资料库：王文美（CBDB 328244）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328244&o=json
            external_identifier: CBDB:328244
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.294Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3wFk4VGe5YmAT4fgMg4wbo
        subject_person_id: p_NW1w6vJKoibfXJvGkuM1JG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文美，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 328244）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HBTz5I_lRoQTFEvX1sDF_h
          claim_id: c_3wFk4VGe5YmAT4fgMg4wbo
          source_id: s_kQnAFasSQ9pPy7CXdEnMBY
          stance: supports
          locator: CBDB:328244
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
  descendants:
    - claim:
        id: c_3mjTmYRtZN_DRjM2TQRq96
        subject_person_id: p_NW1w6vJKoibfXJvGkuM1JG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EubdaeFSWc8pKsGxhe2PFM
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eVKa0CWw2ibeEmHGwgWPyJ
          claim_id: c_3mjTmYRtZN_DRjM2TQRq96
          source_id: s_kQnAFasSQ9pPy7CXdEnMBY
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EubdaeFSWc8pKsGxhe2PFM
        status: active
        display_name: 王學古
        merged_into_person_id: null
  other: []
---

# 王文美

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文美 | accepted |
| bio.summary | 王文美，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 328244） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_EubdaeFSWc8pKsGxhe2PFM | 王學古 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文美（CBDB 328244）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328244&o=json)

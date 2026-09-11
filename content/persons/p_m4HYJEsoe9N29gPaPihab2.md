---
schema: wang-person/v1
id: p_m4HYJEsoe9N29gPaPihab2
status: active
merged_into: null
display_name: 王鼎新
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LUGXSGarLLZRF41EeS2gnR
        subject_person_id: p_m4HYJEsoe9N29gPaPihab2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oPR8qmfHDpdReSBmX8tyBg
          claim_id: c_LUGXSGarLLZRF41EeS2gnR
          source_id: s_FCRnjE2idGXpBVoETrVYRE
          stance: supports
          locator: CBDB:273572
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（273572）
          source: &a1
            id: s_FCRnjE2idGXpBVoETrVYRE
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎新（CBDB 273572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273572&o=json
            external_identifier: CBDB:273572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.902Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X28RqK2JwvN8ijGB8x77s9
        subject_person_id: p_m4HYJEsoe9N29gPaPihab2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎新，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 273572）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EPFazNZIpzvbkqVHFTMeVq
          claim_id: c_X28RqK2JwvN8ijGB8x77s9
          source_id: s_FCRnjE2idGXpBVoETrVYRE
          stance: supports
          locator: CBDB:273572
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
        id: c_I3TdSueLAlkPDjYE8jxWM8
        subject_person_id: p_m4HYJEsoe9N29gPaPihab2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YZgMMK2h5d44s5CGoUpM7o
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l69qunP_M-zXcg1L0_r2Ax
          claim_id: c_I3TdSueLAlkPDjYE8jxWM8
          source_id: s_FCRnjE2idGXpBVoETrVYRE
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百三十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YZgMMK2h5d44s5CGoUpM7o
        status: active
        display_name: 王盧
        merged_into_person_id: null
  other: []
---

# 王鼎新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎新 | accepted |
| bio.summary | 王鼎新，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 273572） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_YZgMMK2h5d44s5CGoUpM7o | 王盧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎新（CBDB 273572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273572&o=json)

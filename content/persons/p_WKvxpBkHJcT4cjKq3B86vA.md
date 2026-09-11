---
schema: wang-person/v1
id: p_WKvxpBkHJcT4cjKq3B86vA
status: active
merged_into: null
display_name: 王崑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZkKGe9C7WhbjG6rZFv73ud
        subject_person_id: p_WKvxpBkHJcT4cjKq3B86vA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_m7ofaeUCgAQMAtThtDKR4D
          claim_id: c_ZkKGe9C7WhbjG6rZFv73ud
          source_id: s_QFp1j1fMQmGfxMBJ1TF6Ap
          stance: supports
          locator: CBDB:316255
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（316255）
          source: &a1
            id: s_QFp1j1fMQmGfxMBJ1TF6Ap
            source_type: api_record
            title: 中国历代人物传记资料库：王崑（CBDB 316255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316255&o=json
            external_identifier: CBDB:316255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.960Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S8TpbLPcLt6cVm2WLmZD8w
        subject_person_id: p_WKvxpBkHJcT4cjKq3B86vA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崑，明人物。嘉靖三十二年進士。（中国历代人物传记资料库 CBDB 316255）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TWGD0PRD931B22Ijw3Gpub
          claim_id: c_S8TpbLPcLt6cVm2WLmZD8w
          source_id: s_QFp1j1fMQmGfxMBJ1TF6Ap
          stance: supports
          locator: CBDB:316255
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
        id: c_Mm_oF1a-fbLAjDHUlVmcFz
        subject_person_id: p_WKvxpBkHJcT4cjKq3B86vA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nxMTBwovWR92XT8tAZTvLW
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UTOoMP4WqiEQLjI2qbH88M
          claim_id: c_Mm_oF1a-fbLAjDHUlVmcFz
          source_id: s_QFp1j1fMQmGfxMBJ1TF6Ap
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nxMTBwovWR92XT8tAZTvLW
        status: active
        display_name: 王學謨
        merged_into_person_id: null
  other: []
---

# 王崑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崑 | accepted |
| bio.summary | 王崑，明人物。嘉靖三十二年進士。（中国历代人物传记资料库 CBDB 316255） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_nxMTBwovWR92XT8tAZTvLW | 王學謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崑（CBDB 316255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316255&o=json)

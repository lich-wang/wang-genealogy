---
schema: wang-person/v1
id: p_Ydcqf5X9KbXRth1573f71k
status: active
merged_into: null
display_name: 夏氏
revision: 1
cbdb_id: 282021
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NSCKV61lsjZXEGu3euJ2eE
        subject_person_id: p_Ydcqf5X9KbXRth1573f71k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 夏氏，明人物。正德十二年進士。（中国历代人物传记资料库 CBDB 282021）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_coMjJ9_uvbqNMZPC7dTtTc
          claim_id: c_NSCKV61lsjZXEGu3euJ2eE
          source_id: s_oRxlRSRGa-Mxk9y3g1l56C
          stance: supports
          locator: CBDB:282021
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_oRxlRSRGa-Mxk9y3g1l56C
            source_type: api_record
            title: 中国历代人物传记资料库：夏氏(王莘妻)（CBDB 282021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282021&o=json
            external_identifier: CBDB:282021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_k-JUoEy34PHfV2Oat5g34j
        subject_person_id: p_Ydcqf5X9KbXRth1573f71k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 夏氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TD8r3d3LON5edK1Yli1XFe
          claim_id: c_k-JUoEy34PHfV2Oat5g34j
          source_id: s_oRxlRSRGa-Mxk9y3g1l56C
          stance: supports
          locator: CBDB:282021
          quotation: null
          interpretation_note: CBDB 明确记录的王莘配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_eu5sokc61sle40SX3UOjUM
        subject_person_id: p_fsfzbsXi2CKQ2Y6QzQVevK
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Ydcqf5X9KbXRth1573f71k
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IW4J5xTLqk85X7wBVmLITB
          claim_id: c_eu5sokc61sle40SX3UOjUM
          source_id: s_oRxlRSRGa-Mxk9y3g1l56C
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百三十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fsfzbsXi2CKQ2Y6QzQVevK
        status: active
        display_name: 王莘
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 夏氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 夏氏，明人物。正德十二年進士。（中国历代人物传记资料库 CBDB 282021） | accepted |
| name.primary | 夏氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_fsfzbsXi2CKQ2Y6QzQVevK | 王莘 | accepted |

## 外部来源

- [中国历代人物传记资料库：夏氏(王莘妻)（CBDB 282021）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282021&o=json)

---
schema: wang-person/v1
id: p_EceEHftq1dAuWXPD2WaHe8
status: active
merged_into: null
display_name: 王訓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R9DS2DvGGc5NWW6ffZVUUa
        subject_person_id: p_EceEHftq1dAuWXPD2WaHe8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gYEEvKLCCn7W6HGAYdJvBL
          claim_id: c_R9DS2DvGGc5NWW6ffZVUUa
          source_id: s_U9Q7JHAntALJujZ1eiyVy8
          stance: supports
          locator: CBDB:287522
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287522）
          source: &a1
            id: s_U9Q7JHAntALJujZ1eiyVy8
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 287522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287522&o=json
            external_identifier: CBDB:287522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.263Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LZG7u2z46AQzUtFZJQYAqr
        subject_person_id: p_EceEHftq1dAuWXPD2WaHe8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訓，明人物。嘉靖八年進士，曾任壽官。（中国历代人物传记资料库 CBDB 287522）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nJ6gIE_LD8Q8bbW5UHpk3b
          claim_id: c_LZG7u2z46AQzUtFZJQYAqr
          source_id: s_U9Q7JHAntALJujZ1eiyVy8
          stance: supports
          locator: CBDB:287522
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
        id: c_F2X-3xLCDFdRpMMSti7YET
        subject_person_id: p_EceEHftq1dAuWXPD2WaHe8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GQ5Yfy9Q67yZ3hJuaQcGg3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tujwpC4HGe9BqE1_wuxuLg
          claim_id: c_F2X-3xLCDFdRpMMSti7YET
          source_id: s_U9Q7JHAntALJujZ1eiyVy8
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百二十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GQ5Yfy9Q67yZ3hJuaQcGg3
        status: active
        display_name: 王三接
        merged_into_person_id: null
    - claim:
        id: c_EGwAUn2nG5Gr_pS0gN7b6A
        subject_person_id: p_EceEHftq1dAuWXPD2WaHe8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Tx5e1nr85Ax8xBvbkFoMbF
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dwonzHSUQvK7273-WgF-IR
          claim_id: c_EGwAUn2nG5Gr_pS0gN7b6A
          source_id: s_U9Q7JHAntALJujZ1eiyVy8
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Tx5e1nr85Ax8xBvbkFoMbF
        status: active
        display_name: 王三錫
        merged_into_person_id: null
  other: []
---

# 王訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王訓 | accepted |
| bio.summary | 王訓，明人物。嘉靖八年進士，曾任壽官。（中国历代人物传记资料库 CBDB 287522） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_GQ5Yfy9Q67yZ3hJuaQcGg3 | 王三接 | accepted |
| descendants | p_Tx5e1nr85Ax8xBvbkFoMbF | 王三錫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王訓（CBDB 287522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287522&o=json)

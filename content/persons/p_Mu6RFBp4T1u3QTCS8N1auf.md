---
schema: wang-person/v1
id: p_Mu6RFBp4T1u3QTCS8N1auf
status: active
merged_into: null
display_name: 王鎮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rQyLciX7zSf27qVR42CA8A
        subject_person_id: p_Mu6RFBp4T1u3QTCS8N1auf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_S1m9thvTtuYSzFjEaR4BJx
          claim_id: c_rQyLciX7zSf27qVR42CA8A
          source_id: s_qK1aPpaNE25WGMEArMaSTK
          stance: supports
          locator: CBDB:279547
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279547）
          source: &a1
            id: s_qK1aPpaNE25WGMEArMaSTK
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 279547）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279547&o=json
            external_identifier: CBDB:279547
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.988Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nDeWvibrviFZNo2EBEjds8
        subject_person_id: p_Mu6RFBp4T1u3QTCS8N1auf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RrbAu2fdR1z5fEAsGK1pyn
          claim_id: c_nDeWvibrviFZNo2EBEjds8
          source_id: s_qK1aPpaNE25WGMEArMaSTK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_CuWDoXc19ZvudGlQztTCE6
        subject_person_id: p_Mu6RFBp4T1u3QTCS8N1auf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zqEhNw_8Qk6VFbMtyLIWe_
          claim_id: c_CuWDoXc19ZvudGlQztTCE6
          source_id: s_qK1aPpaNE25WGMEArMaSTK
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vpzDXBrQjqPJnEN64LCsPF
        status: active
        display_name: 王臬
        merged_into_person_id: null
  other: []
---

# 王鎮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎮 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_vpzDXBrQjqPJnEN64LCsPF | 王臬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎮（CBDB 279547）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279547&o=json)

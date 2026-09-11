---
schema: wang-person/v1
id: p_QLYY3wK54kAaQowKFrboE5
status: active
merged_into: null
display_name: 王清
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hDYFp6iR47oEeAoCYE15Xp
        subject_person_id: p_QLYY3wK54kAaQowKFrboE5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wDMW8n8RiCG7Bgs95rbxFs
          claim_id: c_hDYFp6iR47oEeAoCYE15Xp
          source_id: s_n972c1PRTFU2TJXgZJg3Rh
          stance: supports
          locator: CBDB:280987
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280987）
          source: &a1
            id: s_n972c1PRTFU2TJXgZJg3Rh
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 280987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280987&o=json
            external_identifier: CBDB:280987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.035Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QR1NQwFYQoVJBpaTLcG55u
        subject_person_id: p_QLYY3wK54kAaQowKFrboE5
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
        - id: cs_e3LE8UyueTM4y1MEf8aNPo
          claim_id: c_QR1NQwFYQoVJBpaTLcG55u
          source_id: s_n972c1PRTFU2TJXgZJg3Rh
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
        id: c_jLG_Br7Uba_ZmT_uemgoqY
        subject_person_id: p_QLYY3wK54kAaQowKFrboE5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XJXudkaLuCHVbmiCeKBv45
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YPS00Qc_reTtmV_uWdvvBj
          claim_id: c_jLG_Br7Uba_ZmT_uemgoqY
          source_id: s_n972c1PRTFU2TJXgZJg3Rh
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第三十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XJXudkaLuCHVbmiCeKBv45
        status: active
        display_name: 王官
        merged_into_person_id: null
  other: []
---

# 王清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王清 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_XJXudkaLuCHVbmiCeKBv45 | 王官 | accepted |

## 外部来源

- [中国历代人物传记资料库：王清（CBDB 280987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280987&o=json)

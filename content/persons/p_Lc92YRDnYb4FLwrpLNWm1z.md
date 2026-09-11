---
schema: wang-person/v1
id: p_Lc92YRDnYb4FLwrpLNWm1z
status: active
merged_into: null
display_name: 王寬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Mp2sJrgxfP6jEmMjgDXhaf
        subject_person_id: p_Lc92YRDnYb4FLwrpLNWm1z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fTfdNBeLNEk1idCR51qc9q
          claim_id: c_Mp2sJrgxfP6jEmMjgDXhaf
          source_id: s_aKhSo3i3SywSMobEuVL5MZ
          stance: supports
          locator: CBDB:194935
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（194935）
          source: &a1
            id: s_aKhSo3i3SywSMobEuVL5MZ
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 194935）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194935&o=json
            external_identifier: CBDB:194935
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.460Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_hU5fny5nxBdXFRpp7XB26P
        subject_person_id: p_Lc92YRDnYb4FLwrpLNWm1z
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 617年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gURBN7mGehk1EAVtJ7RHoQ
          claim_id: c_hU5fny5nxBdXFRpp7XB26P
          source_id: s_aKhSo3i3SywSMobEuVL5MZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_urUqzmKGHcoVZCKxJjfLqt
        subject_person_id: p_Lc92YRDnYb4FLwrpLNWm1z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为南北朝人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JzGcM5NjT6WfiD2UQkazNo
          claim_id: c_urUqzmKGHcoVZCKxJjfLqt
          source_id: s_aKhSo3i3SywSMobEuVL5MZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_jmajrvkpcYchos6oQ-Mw1a
        subject_person_id: p_Lc92YRDnYb4FLwrpLNWm1z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HgS7cZb3A16c7c921dAmTd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TiFyV7e5jJ1fz1gvrO6tPG
          claim_id: c_jmajrvkpcYchos6oQ-Mw1a
          source_id: s_TJSRoTaioLJTJEQ8ongMW7
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TJSRoTaioLJTJEQ8ongMW7
            source_type: api_record
            title: 中国历代人物传记资料库：王誨之（CBDB 194934）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194934&o=json
            external_identifier: CBDB:194934
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.459Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HgS7cZb3A16c7c921dAmTd
        status: active
        display_name: 王誨之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寬 | accepted |
| death.date | 617年 | accepted |
| bio.summary | CBDB 记载为南北朝人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_HgS7cZb3A16c7c921dAmTd | 王誨之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誨之（CBDB 194934）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194934&o=json)
- [中国历代人物传记资料库：王寬（CBDB 194935）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194935&o=json)

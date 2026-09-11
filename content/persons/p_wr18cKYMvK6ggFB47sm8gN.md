---
schema: wang-person/v1
id: p_wr18cKYMvK6ggFB47sm8gN
status: active
merged_into: null
display_name: 王祁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KCDHHauDBwGoQC6C5CL8vB
        subject_person_id: p_wr18cKYMvK6ggFB47sm8gN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qJX3TGNMrJHTQVdUMLMqRB
          claim_id: c_KCDHHauDBwGoQC6C5CL8vB
          source_id: s_dLBftMAAVNB8zoFyuoPdc4
          stance: supports
          locator: CBDB:145507
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145507）
          source: &a1
            id: s_dLBftMAAVNB8zoFyuoPdc4
            source_type: api_record
            title: 中国历代人物传记资料库：王祁（CBDB 145507）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145507&o=json
            external_identifier: CBDB:145507
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.680Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sxyRfpjoboZKAAf2jiX2p6
        subject_person_id: p_wr18cKYMvK6ggFB47sm8gN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 768年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9rWdM9nfW3zRNzWdvTu6zr
          claim_id: c_sxyRfpjoboZKAAf2jiX2p6
          source_id: s_dLBftMAAVNB8zoFyuoPdc4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Ge1WurG5u7m1Gxq63r7wLf
        subject_person_id: p_wr18cKYMvK6ggFB47sm8gN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 841年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kTMf3YK8NyZwcEBFtNVxXm
          claim_id: c_Ge1WurG5u7m1Gxq63r7wLf
          source_id: s_dLBftMAAVNB8zoFyuoPdc4
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
        id: c_2avp9hwKAPJc9D7AwQSAQk
        subject_person_id: p_wr18cKYMvK6ggFB47sm8gN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VRyGKvS5RvMZrVwuJHsX2W
          claim_id: c_2avp9hwKAPJc9D7AwQSAQk
          source_id: s_dLBftMAAVNB8zoFyuoPdc4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xtj2iW1Z__-EdyJgdZpZlu
        subject_person_id: p_ToRPMW5xd78NkoNR13oVWL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wr18cKYMvK6ggFB47sm8gN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cGtycCB0ZYQBJ3qXOH8j5W
          claim_id: c_xtj2iW1Z__-EdyJgdZpZlu
          source_id: s_dLBftMAAVNB8zoFyuoPdc4
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ToRPMW5xd78NkoNR13oVWL
        status: active
        display_name: 王廪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王祁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祁 | accepted |
| birth.date | 768年 | accepted |
| death.date | 841年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ToRPMW5xd78NkoNR13oVWL | 王廪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祁（CBDB 145507）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145507&o=json)

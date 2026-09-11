---
schema: wang-person/v1
id: p_gmQ5Y3wP2Q1jF9NzB2srAX
status: active
merged_into: null
display_name: 王景
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8cHBBKFXXCQ3UmwoSBPhi5
        subject_person_id: p_gmQ5Y3wP2Q1jF9NzB2srAX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AYG8jW6pqpWJPVGrEMLGop
          claim_id: c_8cHBBKFXXCQ3UmwoSBPhi5
          source_id: s_zEA9Mo8sGBK7nZMVPJeamz
          stance: supports
          locator: CBDB:191193
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191193）
          source: &a1
            id: s_zEA9Mo8sGBK7nZMVPJeamz
            source_type: api_record
            title: 中国历代人物传记资料库：王景（CBDB 191193）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191193&o=json
            external_identifier: CBDB:191193
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.353Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Ls9TAfHp88qXaAMLSNBp1U
        subject_person_id: p_gmQ5Y3wP2Q1jF9NzB2srAX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 848年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ghPaZ8JTkzbuD879VEe68w
          claim_id: c_Ls9TAfHp88qXaAMLSNBp1U
          source_id: s_zEA9Mo8sGBK7nZMVPJeamz
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
        id: c_U8XEVEDPeUks873Lt6Vgik
        subject_person_id: p_gmQ5Y3wP2Q1jF9NzB2srAX
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
        - id: cs_8nHXEGP9zsdZdxtX28SAh7
          claim_id: c_U8XEVEDPeUks873Lt6Vgik
          source_id: s_zEA9Mo8sGBK7nZMVPJeamz
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
        id: c_yiDoHmRxyt0ls61EdDZfWw
        subject_person_id: p_eJBnye85tBdoiRcsLUrLW1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gmQ5Y3wP2Q1jF9NzB2srAX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S9hciUDtZT7pmz15MSSHHc
          claim_id: c_yiDoHmRxyt0ls61EdDZfWw
          source_id: s_zEA9Mo8sGBK7nZMVPJeamz
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eJBnye85tBdoiRcsLUrLW1
        status: active
        display_name: 王絳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景 | accepted |
| death.date | 848年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_eJBnye85tBdoiRcsLUrLW1 | 王絳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景（CBDB 191193）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191193&o=json)

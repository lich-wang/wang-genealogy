---
schema: wang-person/v1
id: p_77xZoKtiK3NRKg79yXDSya
status: active
merged_into: null
display_name: 王璟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_memceaSU7E5AvVb1LWu3En
        subject_person_id: p_77xZoKtiK3NRKg79yXDSya
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oJUBeV63R1GuHYjmeQ4cy3
          claim_id: c_memceaSU7E5AvVb1LWu3En
          source_id: s_RVFBxD1wdCHL5QQhGSeNeN
          stance: supports
          locator: CBDB:207889
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207889）
          source: &a1
            id: s_RVFBxD1wdCHL5QQhGSeNeN
            source_type: api_record
            title: 中国历代人物传记资料库：王璟（CBDB 207889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207889&o=json
            external_identifier: CBDB:207889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.936Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Riar9hwo8JXKLdWs6yFqXW
        subject_person_id: p_77xZoKtiK3NRKg79yXDSya
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1408年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N4mBX1rhS6PSPCX2fp84dG
          claim_id: c_Riar9hwo8JXKLdWs6yFqXW
          source_id: s_RVFBxD1wdCHL5QQhGSeNeN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uV6vqr8qFkNVkL9vfowAMR
        subject_person_id: p_77xZoKtiK3NRKg79yXDSya
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
        - id: cs_fMV8Kd34z7ws7ty48XAUQM
          claim_id: c_uV6vqr8qFkNVkL9vfowAMR
          source_id: s_RVFBxD1wdCHL5QQhGSeNeN
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
        id: c_wBKFHZj6dbtOvXT1mg8RbU
        subject_person_id: p_xPMcLgCawstxHLrk7HL4Nq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_77xZoKtiK3NRKg79yXDSya
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uBZGGBLF5ILGVdVAE_mb4_
          claim_id: c_wBKFHZj6dbtOvXT1mg8RbU
          source_id: s_RVFBxD1wdCHL5QQhGSeNeN
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第六十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xPMcLgCawstxHLrk7HL4Nq
        status: active
        display_name: 王本立
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_wpu5fgTcLRkDw40hcrHLVx
        subject_person_id: p_77xZoKtiK3NRKg79yXDSya
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_iK1Jor2tKSMCw5YwfE1b41
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kdtzFqAVqibSVXQMvyk-8M
          claim_id: c_wpu5fgTcLRkDw40hcrHLVx
          source_id: s_4WFbBs4anY5vNvAP_sqKjc
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第六十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4WFbBs4anY5vNvAP_sqKjc
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王璟妻)（CBDB 237460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237460&o=json
            external_identifier: CBDB:237460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iK1Jor2tKSMCw5YwfE1b41
        status: active
        display_name: 劉氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_40jwIpLAYSkwZaPyWLMOi0
        subject_person_id: p_eHcMXDF8n8NPXXvbJdueDD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_77xZoKtiK3NRKg79yXDSya
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-vXlmAivEGPlq-BA21XsK4
          claim_id: c_40jwIpLAYSkwZaPyWLMOi0
          source_id: s_RVFBxD1wdCHL5QQhGSeNeN
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第六十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eHcMXDF8n8NPXXvbJdueDD
        status: active
        display_name: 王文
        merged_into_person_id: null
    - claim:
        id: c_wFqklOD0EhTgeXDkDBFiBE
        subject_person_id: p_oWKPrdFpk8uWf8iXGuzqMB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_77xZoKtiK3NRKg79yXDSya
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0FPAzByuxdSZyQmIClax_h
          claim_id: c_wFqklOD0EhTgeXDkDBFiBE
          source_id: s_RVFBxD1wdCHL5QQhGSeNeN
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第六十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oWKPrdFpk8uWf8iXGuzqMB
        status: active
        display_name: 王原清
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王璟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璟 | accepted |
| birth.date | 1408年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xPMcLgCawstxHLrk7HL4Nq | 王本立 | accepted |
| spouses | p_iK1Jor2tKSMCw5YwfE1b41 | 劉氏 | accepted |
| ancestors | p_eHcMXDF8n8NPXXvbJdueDD | 王文 | accepted |
| ancestors | p_oWKPrdFpk8uWf8iXGuzqMB | 王原清 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王璟妻)（CBDB 237460）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237460&o=json)
- [中国历代人物传记资料库：王璟（CBDB 207889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207889&o=json)

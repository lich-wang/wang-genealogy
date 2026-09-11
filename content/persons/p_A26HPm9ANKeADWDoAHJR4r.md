---
schema: wang-person/v1
id: p_A26HPm9ANKeADWDoAHJR4r
status: active
merged_into: null
display_name: 王孝瑜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vYSCUaak44i1jo7XoPhhA6
        subject_person_id: p_A26HPm9ANKeADWDoAHJR4r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝瑜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oYqTMixRtqjr4EmeGW9LYT
          claim_id: c_vYSCUaak44i1jo7XoPhhA6
          source_id: s_4V8aXpGeJ7MKPqr1cqdPqn
          stance: supports
          locator: CBDB:139046
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139046）
          source: &a1
            id: s_4V8aXpGeJ7MKPqr1cqdPqn
            source_type: api_record
            title: 中国历代人物传记资料库：王孝瑜（CBDB 139046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139046&o=json
            external_identifier: CBDB:139046
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.189Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vRDnMtafa937M1L136gsLM
        subject_person_id: p_A26HPm9ANKeADWDoAHJR4r
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 582年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XvJTn3gR3P6EE9skp8MRyN
          claim_id: c_vRDnMtafa937M1L136gsLM
          source_id: s_4V8aXpGeJ7MKPqr1cqdPqn
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
        id: c_pwtvNY9sCKomPs7hHrM8QR
        subject_person_id: p_A26HPm9ANKeADWDoAHJR4r
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 655年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vAqxAsMJZ6Qc1eZ99H13de
          claim_id: c_pwtvNY9sCKomPs7hHrM8QR
          source_id: s_4V8aXpGeJ7MKPqr1cqdPqn
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
        id: c_hC8zF1cChsVZG7GEoKAsCx
        subject_person_id: p_A26HPm9ANKeADWDoAHJR4r
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
        - id: cs_UufJAY13NGNhrR3RSSKKW7
          claim_id: c_hC8zF1cChsVZG7GEoKAsCx
          source_id: s_4V8aXpGeJ7MKPqr1cqdPqn
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
        id: c_PTBaImQiFSMG3G1RRdU2mE
        subject_person_id: p_VpNFNPVux4KnRvRhNX7xmB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A26HPm9ANKeADWDoAHJR4r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QhfT55Pn6tFTbV5ROgovIk
          claim_id: c_PTBaImQiFSMG3G1RRdU2mE
          source_id: s_4V8aXpGeJ7MKPqr1cqdPqn
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yonghui 128：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VpNFNPVux4KnRvRhNX7xmB
        status: active
        display_name: 王義
        merged_into_person_id: null
  children:
    - claim:
        id: c_6bV39lZHwyXmFzVeBjvj7f
        subject_person_id: p_A26HPm9ANKeADWDoAHJR4r
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QVjFE2QiM6nYiNQ7St51r1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iHfahB4s7uEz63EF0vlxjt
          claim_id: c_6bV39lZHwyXmFzVeBjvj7f
          source_id: s_4V8aXpGeJ7MKPqr1cqdPqn
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yonghui 128：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QVjFE2QiM6nYiNQ7St51r1
        status: active
        display_name: 王仁恪
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王孝瑜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孝瑜 | accepted |
| birth.date | 582年 | accepted |
| death.date | 655年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VpNFNPVux4KnRvRhNX7xmB | 王義 | accepted |
| children | p_QVjFE2QiM6nYiNQ7St51r1 | 王仁恪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孝瑜（CBDB 139046）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139046&o=json)

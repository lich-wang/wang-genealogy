---
schema: wang-person/v1
id: p_eeu4o2AAQpm1S6oq2yX2j3
status: active
merged_into: null
display_name: 王溥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f988BdcT1Fh2213ySEdr3o
        subject_person_id: p_eeu4o2AAQpm1S6oq2yX2j3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oeMFXTfxnExGyvLbViXgiw
          claim_id: c_f988BdcT1Fh2213ySEdr3o
          source_id: s_Rb7hC9X73xFWfm4qAVFCW4
          stance: supports
          locator: CBDB:175724
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175724）
          source: &a1
            id: s_Rb7hC9X73xFWfm4qAVFCW4
            source_type: api_record
            title: 中国历代人物传记资料库：王溥（CBDB 175724）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175724&o=json
            external_identifier: CBDB:175724
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.085Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GyDPvHAZz8xDLW5LYYZy5f
        subject_person_id: p_eeu4o2AAQpm1S6oq2yX2j3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 905年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jG4MQn111sozAYr8tGZtDH
          claim_id: c_GyDPvHAZz8xDLW5LYYZy5f
          source_id: s_Rb7hC9X73xFWfm4qAVFCW4
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
        id: c_V6rLKE75xrVsz3xkserSV6
        subject_person_id: p_eeu4o2AAQpm1S6oq2yX2j3
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
        - id: cs_aEBYQLieRs2myiW9Xxi9V8
          claim_id: c_V6rLKE75xrVsz3xkserSV6
          source_id: s_Rb7hC9X73xFWfm4qAVFCW4
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
        id: c_HMsvEhAZHiQSHGciMdGZ-e
        subject_person_id: p_MLGWmvuU28EKdGzb33SnqJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eeu4o2AAQpm1S6oq2yX2j3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lFd-p8VfpgfCKtXa54mec8
          claim_id: c_HMsvEhAZHiQSHGciMdGZ-e
          source_id: s_Rb7hC9X73xFWfm4qAVFCW4
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MLGWmvuU28EKdGzb33SnqJ
        status: active
        display_name: 王聰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溥 | accepted |
| death.date | 905年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MLGWmvuU28EKdGzb33SnqJ | 王聰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王溥（CBDB 175724）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175724&o=json)

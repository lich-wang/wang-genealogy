---
schema: wang-person/v1
id: p_i6LB7dmUuVLem1AdJiTz1J
status: active
merged_into: null
display_name: 王適
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_goAaEfELHxGHFxgCpw9QSZ
        subject_person_id: p_i6LB7dmUuVLem1AdJiTz1J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王適
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1m4mLPsqPCp6b54Ppon5Q6
          claim_id: c_goAaEfELHxGHFxgCpw9QSZ
          source_id: s_E5diWQB2WY19tCbQAVC8zx
          stance: supports
          locator: CBDB:145738
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145738）
          source: &a1
            id: s_E5diWQB2WY19tCbQAVC8zx
            source_type: api_record
            title: 中国历代人物传记资料库：王適（CBDB 145738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145738&o=json
            external_identifier: CBDB:145738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.692Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nPWTDG1kzqTTSA82AFZDnR
        subject_person_id: p_i6LB7dmUuVLem1AdJiTz1J
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 771年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CnfRtZrM2hvLntv4Xo8F9L
          claim_id: c_nPWTDG1kzqTTSA82AFZDnR
          source_id: s_E5diWQB2WY19tCbQAVC8zx
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
        id: c_Qp7U2vHyqDXPFqqWE6MjKS
        subject_person_id: p_i6LB7dmUuVLem1AdJiTz1J
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 814年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o2Eb8gdv2jrcGhYDMQrL79
          claim_id: c_Qp7U2vHyqDXPFqqWE6MjKS
          source_id: s_E5diWQB2WY19tCbQAVC8zx
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
        id: c_G1JJWfi4p9PKm6XtsrzE3u
        subject_person_id: p_i6LB7dmUuVLem1AdJiTz1J
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
        - id: cs_y7ReDTrgDCH9HKhMuxBBPZ
          claim_id: c_G1JJWfi4p9PKm6XtsrzE3u
          source_id: s_E5diWQB2WY19tCbQAVC8zx
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
  descendants: []
  other: []
---

# 王適

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王適 | accepted |
| birth.date | 771年 | accepted |
| death.date | 814年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王適（CBDB 145738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145738&o=json)

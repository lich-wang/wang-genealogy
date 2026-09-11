---
schema: wang-person/v1
id: p_Q8F1bACUG5zjQFJrLyFbx6
status: active
merged_into: null
display_name: 王傑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h28mHwuRdCMa9XcpFp263i
        subject_person_id: p_Q8F1bACUG5zjQFJrLyFbx6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ohE9HFhpkQkPYCvK39QQS5
          claim_id: c_h28mHwuRdCMa9XcpFp263i
          source_id: s_cdfksD3yCjTL9mQdv2rZ7K
          stance: supports
          locator: CBDB:139946
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139946）
          source: &a1
            id: s_cdfksD3yCjTL9mQdv2rZ7K
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 139946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139946&o=json
            external_identifier: CBDB:139946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.459Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_313U7B5wvQtD3dt9cNatcn
        subject_person_id: p_Q8F1bACUG5zjQFJrLyFbx6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 696年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3mPZ9HjGFDVr5EZrt7tE9X
          claim_id: c_313U7B5wvQtD3dt9cNatcn
          source_id: s_cdfksD3yCjTL9mQdv2rZ7K
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
        id: c_u9PyQLuctiMrpcB7qDcbAM
        subject_person_id: p_Q8F1bACUG5zjQFJrLyFbx6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 712年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yE73E67G6J4SKVWwJGwiDH
          claim_id: c_u9PyQLuctiMrpcB7qDcbAM
          source_id: s_cdfksD3yCjTL9mQdv2rZ7K
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
        id: c_otfmxHMWTHW8AQ8LhvFcvx
        subject_person_id: p_Q8F1bACUG5zjQFJrLyFbx6
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
        - id: cs_ZmfYqqNoA4QuAa7M6vx9RF
          claim_id: c_otfmxHMWTHW8AQ8LhvFcvx
          source_id: s_cdfksD3yCjTL9mQdv2rZ7K
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
        id: c_MYg1MLtlVmnQmXn4NED-S1
        subject_person_id: p_NSq22v18MetWG3Z7WXW4xn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q8F1bACUG5zjQFJrLyFbx6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cdPqNNlsMr3lGxG7tNGfqf
          claim_id: c_MYg1MLtlVmnQmXn4NED-S1
          source_id: s_cdfksD3yCjTL9mQdv2rZ7K
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantian 2：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NSq22v18MetWG3Z7WXW4xn
        status: active
        display_name: 王山輝
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傑 | accepted |
| birth.date | 696年 | accepted |
| death.date | 712年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NSq22v18MetWG3Z7WXW4xn | 王山輝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 139946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139946&o=json)

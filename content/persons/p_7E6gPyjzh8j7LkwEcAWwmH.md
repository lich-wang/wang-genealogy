---
schema: wang-person/v1
id: p_7E6gPyjzh8j7LkwEcAWwmH
status: active
merged_into: null
display_name: 王清
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BbNRkrhangFu4zHnQKHks9
        subject_person_id: p_7E6gPyjzh8j7LkwEcAWwmH
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
        - id: cs_oUZW4sGjQkomGo1bCC8cui
          claim_id: c_BbNRkrhangFu4zHnQKHks9
          source_id: s_nVLEsovCk3fqXGYbyog1XR
          stance: supports
          locator: CBDB:169430
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169430）
          source: &a1
            id: s_nVLEsovCk3fqXGYbyog1XR
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 169430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169430&o=json
            external_identifier: CBDB:169430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_tbVNPrNikqH9CHaUh93sGT
        subject_person_id: p_7E6gPyjzh8j7LkwEcAWwmH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 791年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jfKemKbXXzv6fvXQDbWR73
          claim_id: c_tbVNPrNikqH9CHaUh93sGT
          source_id: s_nVLEsovCk3fqXGYbyog1XR
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
        id: c_GvorD4oUK5jgv7C1fJVaHJ
        subject_person_id: p_7E6gPyjzh8j7LkwEcAWwmH
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
        - id: cs_AQ1LMz5Yvv5hDTK5GxfDvv
          claim_id: c_GvorD4oUK5jgv7C1fJVaHJ
          source_id: s_nVLEsovCk3fqXGYbyog1XR
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
        id: c_3IAk_d_ZLZ_E5PwcNadXoe
        subject_person_id: p_fPJxFS18uHAM4wH2bHoPQT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7E6gPyjzh8j7LkwEcAWwmH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-rW4ZvSJ3HidS3Q0yZru1t
          claim_id: c_3IAk_d_ZLZ_E5PwcNadXoe
          source_id: s_nVLEsovCk3fqXGYbyog1XR
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fPJxFS18uHAM4wH2bHoPQT
        status: active
        display_name: 王毅
        merged_into_person_id: null
  children:
    - claim:
        id: c_WrsAbDOYO4gsW1chPXU_fC
        subject_person_id: p_7E6gPyjzh8j7LkwEcAWwmH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yw8Ldi3TsRvFBDPd73FPjN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PWElb7QMXOsnhQrsnQmFPo
          claim_id: c_WrsAbDOYO4gsW1chPXU_fC
          source_id: s_nVLEsovCk3fqXGYbyog1XR
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yw8Ldi3TsRvFBDPd73FPjN
        status: active
        display_name: 王玉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王清 | accepted |
| death.date | 791年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fPJxFS18uHAM4wH2bHoPQT | 王毅 | accepted |
| children | p_yw8Ldi3TsRvFBDPd73FPjN | 王玉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王清（CBDB 169430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169430&o=json)

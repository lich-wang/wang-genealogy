---
schema: wang-person/v1
id: p_uqx89h8aE16F23TeWrVKqk
status: active
merged_into: null
display_name: 王德
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ixsJjzgDQQiz1UbGkAhfft
        subject_person_id: p_uqx89h8aE16F23TeWrVKqk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f5KAFjbcCAyES6H3phU6XS
          claim_id: c_ixsJjzgDQQiz1UbGkAhfft
          source_id: s_9WURxCEnYvk4Q2J8co9RE9
          stance: supports
          locator: CBDB:143571
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（143571）
          source: &a1
            id: s_9WURxCEnYvk4Q2J8co9RE9
            source_type: api_record
            title: 中国历代人物传记资料库：王德（CBDB 143571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143571&o=json
            external_identifier: CBDB:143571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.625Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7bjD35sHNhN7RR54AGdjp5
        subject_person_id: p_uqx89h8aE16F23TeWrVKqk
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 779年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_27EtBH7RRU8YLdWMMu6RD5
          claim_id: c_7bjD35sHNhN7RR54AGdjp5
          source_id: s_9WURxCEnYvk4Q2J8co9RE9
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
        id: c_5jxvS7rzqNmiduNVhPy1i4
        subject_person_id: p_uqx89h8aE16F23TeWrVKqk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 856年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FEvvnMtb21pM5mCdtqYWFe
          claim_id: c_5jxvS7rzqNmiduNVhPy1i4
          source_id: s_9WURxCEnYvk4Q2J8co9RE9
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
        id: c_wqLrtEirD5PWr3pqmCpxiG
        subject_person_id: p_uqx89h8aE16F23TeWrVKqk
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
        - id: cs_nvK7VsDN7YAGCPovpYfQGx
          claim_id: c_wqLrtEirD5PWr3pqmCpxiG
          source_id: s_9WURxCEnYvk4Q2J8co9RE9
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
        id: c_JGIzkaRA4JKDErmBimfcjU
        subject_person_id: p_uqx89h8aE16F23TeWrVKqk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oRKgefvoTNF7k3jARap4t6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GIICC0K6SoIMB_VzBeCUG3
          claim_id: c_JGIzkaRA4JKDErmBimfcjU
          source_id: s_9WURxCEnYvk4Q2J8co9RE9
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Xiantong54：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oRKgefvoTNF7k3jARap4t6
        status: active
        display_name: 王君遂
        merged_into_person_id: null
    - claim:
        id: c_W-RTLpOV5N-XNIpWlTVGAB
        subject_person_id: p_uqx89h8aE16F23TeWrVKqk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ada1sjGMt787T793a6Ee7H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5M2XVrOeS1SpGe-3HEOPwU
          claim_id: c_W-RTLpOV5N-XNIpWlTVGAB
          source_id: s_9WURxCEnYvk4Q2J8co9RE9
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Xiantong54：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ada1sjGMt787T793a6Ee7H
        status: active
        display_name: 王君慶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德 | accepted |
| birth.date | 779年 | accepted |
| death.date | 856年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_oRKgefvoTNF7k3jARap4t6 | 王君遂 | accepted |
| children | p_Ada1sjGMt787T793a6Ee7H | 王君慶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德（CBDB 143571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143571&o=json)

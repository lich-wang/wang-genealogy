---
schema: wang-person/v1
id: p_v4yCpoZxQ1qj5eKS6Wqq7H
status: active
merged_into: null
display_name: 王桂
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qo6nexBcK75krBTCHUDdpb
        subject_person_id: p_v4yCpoZxQ1qj5eKS6Wqq7H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BNdUBeYaBjeAd1bKvuzUhP
          claim_id: c_qo6nexBcK75krBTCHUDdpb
          source_id: s_hJ9GvtXmTwv9x8kXRjm5yR
          stance: supports
          locator: CBDB:555716
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555716）
          source: &a1
            id: s_hJ9GvtXmTwv9x8kXRjm5yR
            source_type: api_record
            title: 中国历代人物传记资料库：王桂（CBDB 555716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555716&o=json
            external_identifier: CBDB:555716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.646Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1EACYPZC1qo1erpdrFQfRV
        subject_person_id: p_v4yCpoZxQ1qj5eKS6Wqq7H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GMhE7DFVwuGmU8vpNwMdFN
          claim_id: c_1EACYPZC1qo1erpdrFQfRV
          source_id: s_hJ9GvtXmTwv9x8kXRjm5yR
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
  spouses:
    - claim:
        id: c_tfvsTdozKELbGyUoX3GqBQ
        subject_person_id: p_v4yCpoZxQ1qj5eKS6Wqq7H
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_z3vrX2sBVKGjcFvfZS4PET
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SiwOUUL7tmmOWKPFhk0lxV
          claim_id: c_tfvsTdozKELbGyUoX3GqBQ
          source_id: s_YoAXgPOEEL2nso9gAZC-70
          stance: supports
          locator: 麗水宋元墓誌集録，80：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YoAXgPOEEL2nso9gAZC-70
            source_type: api_record
            title: 中国历代人物传记资料库：高氏(高懌次女)（CBDB 556128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556128&o=json
            external_identifier: CBDB:556128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_z3vrX2sBVKGjcFvfZS4PET
        status: active
        display_name: 高氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王桂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桂 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_z3vrX2sBVKGjcFvfZS4PET | 高氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：高氏(高懌次女)（CBDB 556128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556128&o=json)
- [中国历代人物传记资料库：王桂（CBDB 555716）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555716&o=json)

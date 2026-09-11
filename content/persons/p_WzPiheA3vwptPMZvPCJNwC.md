---
schema: wang-person/v1
id: p_WzPiheA3vwptPMZvPCJNwC
status: active
merged_into: null
display_name: 王嗣奭
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t9Mf6akK6porkvtUFucHh2
        subject_person_id: p_WzPiheA3vwptPMZvPCJNwC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣奭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AUgJC8g2qPzKjwC3HLdehb
          claim_id: c_t9Mf6akK6porkvtUFucHh2
          source_id: s_yNksc6gNfXJ3EEms6TSYn4
          stance: supports
          locator: CBDB:703565
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703565）
          source: &a1
            id: s_yNksc6gNfXJ3EEms6TSYn4
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣奭（CBDB 703565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703565&o=json
            external_identifier: CBDB:703565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.827Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i87atx2ebLJMZ71VMRs5s3
        subject_person_id: p_WzPiheA3vwptPMZvPCJNwC
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
        - id: cs_AbisGnRGqkNdaKx3vCwrA9
          claim_id: c_i87atx2ebLJMZ71VMRs5s3
          source_id: s_yNksc6gNfXJ3EEms6TSYn4
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
        id: c_pjVql0Xg04gzmIkxx1iKTO
        subject_person_id: p_WzPiheA3vwptPMZvPCJNwC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7mAdyZoLjJrMuCGsEgsQCS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lTUZJMipmuJ3cvNcZw0_Zb
          claim_id: c_pjVql0Xg04gzmIkxx1iKTO
          source_id: s_r2Cao2ocyYR6TuXjLgMfGY
          stance: supports
          locator: 鄞縣志，lgid=243323：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_r2Cao2ocyYR6TuXjLgMfGY
            source_type: api_record
            title: 中国历代人物传记资料库：王道泰（CBDB 703572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703572&o=json
            external_identifier: CBDB:703572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.625Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7mAdyZoLjJrMuCGsEgsQCS
        status: active
        display_name: 王道泰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王嗣奭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嗣奭 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7mAdyZoLjJrMuCGsEgsQCS | 王道泰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道泰（CBDB 703572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703572&o=json)
- [中国历代人物传记资料库：王嗣奭（CBDB 703565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703565&o=json)

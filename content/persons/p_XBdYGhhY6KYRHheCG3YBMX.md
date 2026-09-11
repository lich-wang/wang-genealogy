---
schema: wang-person/v1
id: p_XBdYGhhY6KYRHheCG3YBMX
status: active
merged_into: null
display_name: 王平
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pCg3vmaN4eTSe5mQjyfxXr
        subject_person_id: p_XBdYGhhY6KYRHheCG3YBMX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王平
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3chXWjzaHDYR75ewAPM9cu
          claim_id: c_pCg3vmaN4eTSe5mQjyfxXr
          source_id: s_HMnFVhA1C6c4ZEW5uWq3At
          stance: supports
          locator: CBDB:578608
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（578608）
          source: &a1
            id: s_HMnFVhA1C6c4ZEW5uWq3At
            source_type: api_record
            title: 中国历代人物传记资料库：王平（CBDB 578608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578608&o=json
            external_identifier: CBDB:578608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.978Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_XyQfgUckhh3JwN7SpSkJq5
        subject_person_id: p_XBdYGhhY6KYRHheCG3YBMX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1670年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PZd3KP8gT2hGGUKDLEYQNS
          claim_id: c_XyQfgUckhh3JwN7SpSkJq5
          source_id: s_HMnFVhA1C6c4ZEW5uWq3At
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
        id: c_8fHPb3AQiU6ZPeZWaKiL21
        subject_person_id: p_XBdYGhhY6KYRHheCG3YBMX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FeZ7SCvDx7KusThhFoJQuj
          claim_id: c_8fHPb3AQiU6ZPeZWaKiL21
          source_id: s_HMnFVhA1C6c4ZEW5uWq3At
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
        id: c_ErCqlgZaSbX5LUbZA5dff7
        subject_person_id: p_XBdYGhhY6KYRHheCG3YBMX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fB4krwdYrXiiabiLDNJxxM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_09h6Cp0YdngJtl5cCNr0MK
          claim_id: c_ErCqlgZaSbX5LUbZA5dff7
          source_id: s_3LkMQ4qhakMeB5gY5ACdJi
          stance: supports
          locator: 陝西通志，lgid=1018935-1018936：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3LkMQ4qhakMeB5gY5ACdJi
            source_type: api_record
            title: 中国历代人物传记资料库：王文秀（CBDB 578609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578609&o=json
            external_identifier: CBDB:578609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.979Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fB4krwdYrXiiabiLDNJxxM
        status: active
        display_name: 王文秀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_QehhlnSnx8MJa72VCr9weJ
        subject_person_id: p_XBdYGhhY6KYRHheCG3YBMX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_f4cg3hpvnGXJ6e7M3o4JU8
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GrMjcj0MYTLRfvX8-ULqWE
          claim_id: c_QehhlnSnx8MJa72VCr9weJ
          source_id: s_bi28NPpqXtAUs3XnhPYcMw
          stance: supports
          locator: 長安縣志，488：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bi28NPpqXtAUs3XnhPYcMw
            source_type: api_record
            title: 中国历代人物传记资料库：王𠠹（CBDB 578613）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578613&o=json
            external_identifier: CBDB:578613
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.732Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_f4cg3hpvnGXJ6e7M3o4JU8
        status: active
        display_name: 王𠠹
        merged_into_person_id: null
  other: []
---

# 王平

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王平 | accepted |
| death.date | 1670年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fB4krwdYrXiiabiLDNJxxM | 王文秀 | accepted |
| descendants | p_f4cg3hpvnGXJ6e7M3o4JU8 | 王𠠹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王平（CBDB 578608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578608&o=json)
- [中国历代人物传记资料库：王文秀（CBDB 578609）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578609&o=json)
- [中国历代人物传记资料库：王𠠹（CBDB 578613）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578613&o=json)

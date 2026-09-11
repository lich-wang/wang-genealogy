---
schema: wang-person/v1
id: p_2KR5LQkPas1zC6A4F8pmtu
status: active
merged_into: null
display_name: 王興
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2JnT6LqLSkJG6h4KNbJdYg
        subject_person_id: p_2KR5LQkPas1zC6A4F8pmtu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sEJKFoAdumFDXNBueR8WM9
          claim_id: c_2JnT6LqLSkJG6h4KNbJdYg
          source_id: s_A1GRPfNYytp7SYBHBSTMfT
          stance: supports
          locator: CBDB:277371
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（277371）
          source: &a1
            id: s_A1GRPfNYytp7SYBHBSTMfT
            source_type: api_record
            title: 中国历代人物传记资料库：王興（CBDB 277371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277371&o=json
            external_identifier: CBDB:277371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P4up9FCUCPj3Qf7KRvRoAc
        subject_person_id: p_2KR5LQkPas1zC6A4F8pmtu
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
        - id: cs_Bip1Gtz6bVMzQmHRgCjTaQ
          claim_id: c_P4up9FCUCPj3Qf7KRvRoAc
          source_id: s_A1GRPfNYytp7SYBHBSTMfT
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
  descendants:
    - claim:
        id: c_yOnhs0xm4MjV2xtZ81BoW5
        subject_person_id: p_2KR5LQkPas1zC6A4F8pmtu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dDsTSNKuQNDdLuyN146sBf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kI8RK2hrr8fDh5Cj41B2s4
          claim_id: c_yOnhs0xm4MjV2xtZ81BoW5
          source_id: s_A1GRPfNYytp7SYBHBSTMfT
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第四十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dDsTSNKuQNDdLuyN146sBf
        status: active
        display_name: 王雄
        merged_into_person_id: null
  other: []
---

# 王興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王興 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_dDsTSNKuQNDdLuyN146sBf | 王雄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王興（CBDB 277371）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277371&o=json)

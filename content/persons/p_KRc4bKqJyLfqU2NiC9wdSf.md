---
schema: wang-person/v1
id: p_KRc4bKqJyLfqU2NiC9wdSf
status: active
merged_into: null
display_name: 王思齊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_22QFvBNyuhYPF4Q2YZ8Rwd
        subject_person_id: p_KRc4bKqJyLfqU2NiC9wdSf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思齊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Sv2u517auGD8yh48iEDTdH
          claim_id: c_22QFvBNyuhYPF4Q2YZ8Rwd
          source_id: s_rCRtN8YsBiq8fLNngcAJFG
          stance: supports
          locator: CBDB:254106
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（254106）
          source: &a1
            id: s_rCRtN8YsBiq8fLNngcAJFG
            source_type: api_record
            title: 中国历代人物传记资料库：王思齊（CBDB 254106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254106&o=json
            external_identifier: CBDB:254106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.315Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k2e66nzJg3BHawNXtNLmdR
        subject_person_id: p_KRc4bKqJyLfqU2NiC9wdSf
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
        - id: cs_DCWkHZaVBDYM37PQHDyjxb
          claim_id: c_k2e66nzJg3BHawNXtNLmdR
          source_id: s_rCRtN8YsBiq8fLNngcAJFG
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
        id: c_pABmZ6Wni0Tq1sGf6iaFqj
        subject_person_id: p_KRc4bKqJyLfqU2NiC9wdSf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AUQVWk8JE4APmBfj8pSMKj
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AyePMGu11glYzRr1WiGP4l
          claim_id: c_pABmZ6Wni0Tq1sGf6iaFqj
          source_id: s_QPr5EUKVLbTNH9qryNyKZR
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第二甲第二十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QPr5EUKVLbTNH9qryNyKZR
            source_type: api_record
            title: 中国历代人物传记资料库：王高（CBDB 126625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126625&o=json
            external_identifier: CBDB:126625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.072Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AUQVWk8JE4APmBfj8pSMKj
        status: active
        display_name: 王高
        merged_into_person_id: null
  other: []
---

# 王思齊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思齊 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_AUQVWk8JE4APmBfj8pSMKj | 王高 | accepted |

## 外部来源

- [中国历代人物传记资料库：王高（CBDB 126625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126625&o=json)
- [中国历代人物传记资料库：王思齊（CBDB 254106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254106&o=json)

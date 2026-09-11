---
schema: wang-person/v1
id: p_5H9kac1NHpV2vu5J2pvsAi
status: active
merged_into: null
display_name: 王德用
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X4bdtzTSJ7smZu5yG248vn
        subject_person_id: p_5H9kac1NHpV2vu5J2pvsAi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M9CuFtq3Fcz58byrwN8MxA
          claim_id: c_X4bdtzTSJ7smZu5yG248vn
          source_id: s_6kKWeQ8Q7nVKaSJjMMMoGq
          stance: supports
          locator: CBDB:1893
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1893）
          source: &a1
            id: s_6kKWeQ8Q7nVKaSJjMMMoGq
            source_type: api_record
            title: 中国历代人物传记资料库：王德用（CBDB 1893）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1893&o=json
            external_identifier: CBDB:1893
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.377Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Nugp3FMj3v58BFhYYR2Cw4
        subject_person_id: p_5H9kac1NHpV2vu5J2pvsAi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 987年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K1MGcGGyjd4L4M5y2DaxLA
          claim_id: c_Nugp3FMj3v58BFhYYR2Cw4
          source_id: s_6kKWeQ8Q7nVKaSJjMMMoGq
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
        id: c_pXJQ9wpThhW3WMRV5TEhuH
        subject_person_id: p_5H9kac1NHpV2vu5J2pvsAi
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1065年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K8Ht844AXe4v1s9a68C7E8
          claim_id: c_pXJQ9wpThhW3WMRV5TEhuH
          source_id: s_6kKWeQ8Q7nVKaSJjMMMoGq
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
        id: c_Nt2KKgXKFbQDnDVFtY1i57
        subject_person_id: p_5H9kac1NHpV2vu5J2pvsAi
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
        - id: cs_fzFWyqP4pAG28k3WrH5cAF
          claim_id: c_Nt2KKgXKFbQDnDVFtY1i57
          source_id: s_6kKWeQ8Q7nVKaSJjMMMoGq
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
        id: c_rqxr0j_C40M9cFNlZsnZfz
        subject_person_id: p_5H9kac1NHpV2vu5J2pvsAi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_628btDKdbR4ERpBGANNokB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B4i8Hxi8nnoAEJBr3b617n
          claim_id: c_rqxr0j_C40M9cFNlZsnZfz
          source_id: s_RY2uDCo42d26UVABT5UsPF
          stance: supports
          locator: 宋人傳記資料索引(電子版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RY2uDCo42d26UVABT5UsPF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王咸熙（21947）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21947&o=json
            external_identifier: CBDB:21947
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:58:59.378Z
            metadata_json: null
      object_person:
        id: p_628btDKdbR4ERpBGANNokB
        status: active
        display_name: 王咸熙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王德用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德用 | accepted |
| birth.date | 987年 | accepted |
| death.date | 1065年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_628btDKdbR4ERpBGANNokB | 王咸熙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德用（CBDB 1893）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1893&o=json)
- [CBDB 中国历代人物传记资料库：王咸熙（21947）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21947&o=json)

---
schema: wang-person/v1
id: p_q4aMAtNbQ3K9f3a8iJE1JN
status: active
merged_into: null
display_name: 王恆滔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_48w4eX7iF2dDnEKaKQ6G7Y
        subject_person_id: p_q4aMAtNbQ3K9f3a8iJE1JN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恆滔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GNEihDYWNFxpHEH6ZjFW8R
          claim_id: c_48w4eX7iF2dDnEKaKQ6G7Y
          source_id: s_nW5YGs2mxTWa29CtrZej1e
          stance: supports
          locator: CBDB:191585
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191585）
          source: &a1
            id: s_nW5YGs2mxTWa29CtrZej1e
            source_type: api_record
            title: 中国历代人物传记资料库：王恆滔（CBDB 191585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191585&o=json
            external_identifier: CBDB:191585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.368Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_qpeaS3JyLenCF3ucvyd3sT
        subject_person_id: p_q4aMAtNbQ3K9f3a8iJE1JN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 829年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wfzYeA5fAKLbxy47ZBMwHk
          claim_id: c_qpeaS3JyLenCF3ucvyd3sT
          source_id: s_nW5YGs2mxTWa29CtrZej1e
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
        id: c_8RZjMRXVH4RmZw5gVNBWBQ
        subject_person_id: p_q4aMAtNbQ3K9f3a8iJE1JN
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
        - id: cs_TQLgJiuPcahqbdd6UJJBQH
          claim_id: c_8RZjMRXVH4RmZw5gVNBWBQ
          source_id: s_nW5YGs2mxTWa29CtrZej1e
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
        id: c_Qe7DIL6Agky1MxKE72J5QS
        subject_person_id: p_yzbyLWEwa8DKLF9NjjcA7m
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_q4aMAtNbQ3K9f3a8iJE1JN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Sw87fucqa7WmPHUN_dVgSY
          claim_id: c_Qe7DIL6Agky1MxKE72J5QS
          source_id: s_nW5YGs2mxTWa29CtrZej1e
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yzbyLWEwa8DKLF9NjjcA7m
        status: active
        display_name: 王庭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恆滔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恆滔 | accepted |
| death.date | 829年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yzbyLWEwa8DKLF9NjjcA7m | 王庭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恆滔（CBDB 191585）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191585&o=json)

---
schema: wang-person/v1
id: p_jHexXHyM2F6emmgNY7URa4
status: active
merged_into: null
display_name: 王弘道
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UuYxRPMf6P4HeZ4T9Y24nx
        subject_person_id: p_jHexXHyM2F6emmgNY7URa4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mqBs2WMBLBeN6WBJYCeXLR
          claim_id: c_UuYxRPMf6P4HeZ4T9Y24nx
          source_id: s_ShZandA4dwLnpJSyqkbLRx
          stance: supports
          locator: CBDB:185064
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（185064）
          source: &a1
            id: s_ShZandA4dwLnpJSyqkbLRx
            source_type: api_record
            title: 中国历代人物传记资料库：王弘道（CBDB 185064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185064&o=json
            external_identifier: CBDB:185064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.237Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_RZPh9L8SmYcwTdazsDVdjq
        subject_person_id: p_jHexXHyM2F6emmgNY7URa4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 876年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5XRJaDkmszdnuYJhNw3VAq
          claim_id: c_RZPh9L8SmYcwTdazsDVdjq
          source_id: s_ShZandA4dwLnpJSyqkbLRx
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
        id: c_nRGt22WEEBCctJ73Vi5L9y
        subject_person_id: p_jHexXHyM2F6emmgNY7URa4
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
        - id: cs_RFhyFyr7DerUuf9F66zTwK
          claim_id: c_nRGt22WEEBCctJ73Vi5L9y
          source_id: s_ShZandA4dwLnpJSyqkbLRx
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
        id: c_G6ZqU1r92MlN3iRrtLyQoF
        subject_person_id: p_65g8o6f3iNCjHS9Q5ojrP4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jHexXHyM2F6emmgNY7URa4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MvWGlf2JiXJlJ4oaIulGKf
          claim_id: c_G6ZqU1r92MlN3iRrtLyQoF
          source_id: s_CH5cyGnFWoErX6LHxt9G4U
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CH5cyGnFWoErX6LHxt9G4U
            source_type: api_record
            title: 中国历代人物传记资料库：王公淑（CBDB 144996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144996&o=json
            external_identifier: CBDB:144996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.221Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_65g8o6f3iNCjHS9Q5ojrP4
        status: active
        display_name: 王公淑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王弘道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弘道 | accepted |
| death.date | 876年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_65g8o6f3iNCjHS9Q5ojrP4 | 王公淑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公淑（CBDB 144996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144996&o=json)
- [中国历代人物传记资料库：王弘道（CBDB 185064）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185064&o=json)

---
schema: wang-person/v1
id: p_hnGaouPfqefCGE1Y4ioHiB
status: active
merged_into: null
display_name: 王承法
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WPF1idqS6NoJN4bSCCu8EA
        subject_person_id: p_hnGaouPfqefCGE1Y4ioHiB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承法
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yLd1o31eBESRSqsXBSCf9a
          claim_id: c_WPF1idqS6NoJN4bSCCu8EA
          source_id: s_Ld6eAaNDM2h9orwWezqoBe
          stance: supports
          locator: CBDB:140768
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140768）
          source: &a1
            id: s_Ld6eAaNDM2h9orwWezqoBe
            source_type: api_record
            title: 中国历代人物传记资料库：王承法（CBDB 140768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140768&o=json
            external_identifier: CBDB:140768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.526Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4zPH9xwL4MbrxFWmK21dBW
        subject_person_id: p_hnGaouPfqefCGE1Y4ioHiB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 657年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kyxWNPBfMzrBviBHsqDdZJ
          claim_id: c_4zPH9xwL4MbrxFWmK21dBW
          source_id: s_Ld6eAaNDM2h9orwWezqoBe
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
        id: c_ew8RXqgNo55B6BUPDR4eoL
        subject_person_id: p_hnGaouPfqefCGE1Y4ioHiB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 720年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4qpmn5BkD2NQ9zPFAP5eQ7
          claim_id: c_ew8RXqgNo55B6BUPDR4eoL
          source_id: s_Ld6eAaNDM2h9orwWezqoBe
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
        id: c_UkN46BQo3YbWVGNUnHkPnk
        subject_person_id: p_hnGaouPfqefCGE1Y4ioHiB
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
        - id: cs_J5PQGd14JCPnK4GUyZDB8x
          claim_id: c_UkN46BQo3YbWVGNUnHkPnk
          source_id: s_Ld6eAaNDM2h9orwWezqoBe
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
        id: c_P3y08hQk2ZTziKHnyPxo2E
        subject_person_id: p_ZWypDfDdSWhB1gKA9Sq5FX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hnGaouPfqefCGE1Y4ioHiB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AMI5aCb-P8uCgfqZyiMK1d
          claim_id: c_P3y08hQk2ZTziKHnyPxo2E
          source_id: s_Ld6eAaNDM2h9orwWezqoBe
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 502：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZWypDfDdSWhB1gKA9Sq5FX
        status: active
        display_name: 王輔義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_35h6yEgDlZxrj7mtdYBZT6
        subject_person_id: p_hnGaouPfqefCGE1Y4ioHiB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_RqrkJEnBCgxLrhrCFqcroW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EP5odr-O8rSGohLgNticgy
          claim_id: c_35h6yEgDlZxrj7mtdYBZT6
          source_id: s_QBRHw9oMbb5n8QgFJN49dr
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 502：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QBRHw9oMbb5n8QgFJN49dr
            source_type: api_record
            title: 中国历代人物传记资料库：束府君(王承法夫)（CBDB 153073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153073&o=json
            external_identifier: CBDB:153073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RqrkJEnBCgxLrhrCFqcroW
        status: active
        display_name: 束府君
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王承法

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承法 | accepted |
| birth.date | 657年 | accepted |
| death.date | 720年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZWypDfDdSWhB1gKA9Sq5FX | 王輔義 | accepted |
| spouses | p_RqrkJEnBCgxLrhrCFqcroW | 束府君 | accepted |

## 外部来源

- [中国历代人物传记资料库：束府君(王承法夫)（CBDB 153073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153073&o=json)
- [中国历代人物传记资料库：王承法（CBDB 140768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140768&o=json)

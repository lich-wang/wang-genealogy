---
schema: wang-person/v1
id: p_9vp8SfkcaLh3BHQ66WSVvS
status: active
merged_into: null
display_name: 王文林
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DKNYi3w3FWUrp3ZQByKTLt
        subject_person_id: p_9vp8SfkcaLh3BHQ66WSVvS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3hfSrb48T3W4g9TcB7qL2u
          claim_id: c_DKNYi3w3FWUrp3ZQByKTLt
          source_id: s_NUKaMQLG4Qa6pFRsxP79dG
          stance: supports
          locator: CBDB:190754
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190754）
          source: &a1
            id: s_NUKaMQLG4Qa6pFRsxP79dG
            source_type: api_record
            title: 中国历代人物传记资料库：王文林（CBDB 190754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190754&o=json
            external_identifier: CBDB:190754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.335Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_LgFWfmyKQb8sDwv5hD5Z5D
        subject_person_id: p_9vp8SfkcaLh3BHQ66WSVvS
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 709年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3KYGw1RtnSc9JEa7M7bYV6
          claim_id: c_LgFWfmyKQb8sDwv5hD5Z5D
          source_id: s_NUKaMQLG4Qa6pFRsxP79dG
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
        id: c_uidFMJYUafZf7rAa47b8Er
        subject_person_id: p_9vp8SfkcaLh3BHQ66WSVvS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文林（卒于709年），唐人物。曾任御史大夫。（中国历代人物传记资料库 CBDB 190754）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Iw-UMdaTR55zbUDk1APHe0
          claim_id: c_uidFMJYUafZf7rAa47b8Er
          source_id: s_NUKaMQLG4Qa6pFRsxP79dG
          stance: supports
          locator: CBDB:190754
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hM4EhdgCVzO1eRPQkSnWTr
        subject_person_id: p_zctgFCNVJ1RK3NU6AbmosJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9vp8SfkcaLh3BHQ66WSVvS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WxaYaeUM6Wm9_ug6PlUN6P
          claim_id: c_hM4EhdgCVzO1eRPQkSnWTr
          source_id: s_NUKaMQLG4Qa6pFRsxP79dG
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zctgFCNVJ1RK3NU6AbmosJ
        status: active
        display_name: 王行成
        merged_into_person_id: null
  children:
    - claim:
        id: c_COdDvi-APcFZEzLMTAe4xT
        subject_person_id: p_9vp8SfkcaLh3BHQ66WSVvS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_f5HDaeimCAPXFME3b5BWep
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HJrIlt0S7vHFl4pFWp-oAm
          claim_id: c_COdDvi-APcFZEzLMTAe4xT
          source_id: s_NUKaMQLG4Qa6pFRsxP79dG
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_f5HDaeimCAPXFME3b5BWep
        status: active
        display_name: 王智
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文林 | accepted |
| death.date | 709年 | accepted |
| bio.summary | 王文林（卒于709年），唐人物。曾任御史大夫。（中国历代人物传记资料库 CBDB 190754） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zctgFCNVJ1RK3NU6AbmosJ | 王行成 | accepted |
| children | p_f5HDaeimCAPXFME3b5BWep | 王智 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文林（CBDB 190754）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190754&o=json)

---
schema: wang-person/v1
id: p_bLHviNSMqcWaXUj1iVBaiL
status: active
merged_into: null
display_name: 王晉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xr5T9oEqqC8iogpjZmev6e
        subject_person_id: p_bLHviNSMqcWaXUj1iVBaiL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sPVNttcuHL5ED7yK5o75Su
          claim_id: c_xr5T9oEqqC8iogpjZmev6e
          source_id: s_z98XsdwuTUocAtMFKmA1JJ
          stance: supports
          locator: CBDB:158635
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（158635）
          source: &a1
            id: s_z98XsdwuTUocAtMFKmA1JJ
            source_type: api_record
            title: 中国历代人物传记资料库：王晉（CBDB 158635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158635&o=json
            external_identifier: CBDB:158635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.926Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gvQXyEcgBGeuGrwneUpSL8
        subject_person_id: p_bLHviNSMqcWaXUj1iVBaiL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 158635）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D0kVYp_frd2c-hrtjqaoyF
          claim_id: c_gvQXyEcgBGeuGrwneUpSL8
          source_id: s_z98XsdwuTUocAtMFKmA1JJ
          stance: supports
          locator: CBDB:158635
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_VPuq_ME5uGToAe5RaUh6fh
        subject_person_id: p_bLHviNSMqcWaXUj1iVBaiL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i3WGndmgUJBz6SMXSFX2av
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_txmxjCga0YDE_V36-M5ioW
          claim_id: c_VPuq_ME5uGToAe5RaUh6fh
          source_id: s_z98XsdwuTUocAtMFKmA1JJ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_i3WGndmgUJBz6SMXSFX2av
        status: active
        display_name: 王從
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_Jrus_1Fon5tkiSOXyKEmr2
        subject_person_id: p_bLHviNSMqcWaXUj1iVBaiL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qCDtQiLmeEnX8dr3rpqXVC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rbulVTCXf7qxA0jm9ukING
          claim_id: c_Jrus_1Fon5tkiSOXyKEmr2
          source_id: s_z98XsdwuTUocAtMFKmA1JJ
          stance: supports
          locator: 唐代墓誌匯編:二卷，Huichang 17：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qCDtQiLmeEnX8dr3rpqXVC
        status: active
        display_name: 王頊
        merged_into_person_id: null
  other: []
---

# 王晉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晉 | accepted |
| bio.summary | 王晉，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 158635） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_i3WGndmgUJBz6SMXSFX2av | 王從 | accepted |
| descendants | p_qCDtQiLmeEnX8dr3rpqXVC | 王頊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王晉（CBDB 158635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158635&o=json)

---
schema: wang-person/v1
id: p_NP2A5pkQy4Coy8RvLsFQwk
status: active
merged_into: null
display_name: 王瓚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_41mB2QK2vGPZs3z2pVKx1T
        subject_person_id: p_NP2A5pkQy4Coy8RvLsFQwk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CLme5deHKmwrZiQ7QqbyTA
          claim_id: c_41mB2QK2vGPZs3z2pVKx1T
          source_id: s_xDTM8vHu84Qgy93KxUwgwb
          stance: supports
          locator: CBDB:193396
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（193396）
          source: &a1
            id: s_xDTM8vHu84Qgy93KxUwgwb
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 193396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193396&o=json
            external_identifier: CBDB:193396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.442Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_WFAsMsXTw5XMwDaD29oTBT
        subject_person_id: p_NP2A5pkQy4Coy8RvLsFQwk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 714年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uQ5kAwrUq4V1sASxBPvU2E
          claim_id: c_WFAsMsXTw5XMwDaD29oTBT
          source_id: s_xDTM8vHu84Qgy93KxUwgwb
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
        id: c_8LpJjxKT5hoE3Gjz39SAbH
        subject_person_id: p_NP2A5pkQy4Coy8RvLsFQwk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚（卒于714年），唐人物。籍贯萬年，曾任縣令。（中国历代人物传记资料库 CBDB 193396）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yfpNPsa-D6_uMqfpxYQIxb
          claim_id: c_8LpJjxKT5hoE3Gjz39SAbH
          source_id: s_xDTM8vHu84Qgy93KxUwgwb
          stance: supports
          locator: CBDB:193396
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_aiM24aExe_cH0zOn7YicnN
        subject_person_id: p_NP2A5pkQy4Coy8RvLsFQwk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4AQB7B6yE1sFykYmmaZuh8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5-dTscf9gb0ebsZwRemV3Y
          claim_id: c_aiM24aExe_cH0zOn7YicnN
          source_id: s_wEoYHAq7oQPpjnuMCPqcSE
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wEoYHAq7oQPpjnuMCPqcSE
            source_type: api_record
            title: 中国历代人物传记资料库：王道光（CBDB 193395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193395&o=json
            external_identifier: CBDB:193395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.440Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4AQB7B6yE1sFykYmmaZuh8
        status: active
        display_name: 王道光
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瓚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓚 | accepted |
| death.date | 714年 | accepted |
| bio.summary | 王瓚（卒于714年），唐人物。籍贯萬年，曾任縣令。（中国历代人物传记资料库 CBDB 193396） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4AQB7B6yE1sFykYmmaZuh8 | 王道光 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道光（CBDB 193395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193395&o=json)
- [中国历代人物传记资料库：王瓚（CBDB 193396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193396&o=json)

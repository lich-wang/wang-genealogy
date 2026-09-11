---
schema: wang-person/v1
id: p_roxoRSVD56KUF4GGHzN446
status: active
merged_into: null
display_name: 王仲言
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BCjUhvBEmFyYS32JSit939
        subject_person_id: p_roxoRSVD56KUF4GGHzN446
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JqbVcJcxEha9tepQEgCw3p
          claim_id: c_BCjUhvBEmFyYS32JSit939
          source_id: s_M8sy6DHikAM4d5XZen8Euc
          stance: supports
          locator: CBDB:193212
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（193212）
          source: &a1
            id: s_M8sy6DHikAM4d5XZen8Euc
            source_type: api_record
            title: 中国历代人物传记资料库：王仲言（CBDB 193212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193212&o=json
            external_identifier: CBDB:193212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.296Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_3DPtPhtNdoy6SKK8wfc5QF
        subject_person_id: p_roxoRSVD56KUF4GGHzN446
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 843年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1s8es6H9CdKuvCMPa9UPXX
          claim_id: c_3DPtPhtNdoy6SKK8wfc5QF
          source_id: s_M8sy6DHikAM4d5XZen8Euc
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
        id: c_CFkBghFQwNaPciw45jAq2a
        subject_person_id: p_roxoRSVD56KUF4GGHzN446
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲言（卒于843年），唐人物。籍贯丹徒。（中国历代人物传记资料库 CBDB 193212）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X1RwflcAK7FYEAz1ets9p3
          claim_id: c_CFkBghFQwNaPciw45jAq2a
          source_id: s_M8sy6DHikAM4d5XZen8Euc
          stance: supports
          locator: CBDB:193212
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hk4BHK6lST4mDMtdoQrmdJ
        subject_person_id: p_3JQhJ6V1PYArAt9hMRD7UM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_roxoRSVD56KUF4GGHzN446
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HXFAl6DFRpKX3CLQN2JFGi
          claim_id: c_hk4BHK6lST4mDMtdoQrmdJ
          source_id: s_9cH4Wz7cVkGPVnRJQsf5ei
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9cH4Wz7cVkGPVnRJQsf5ei
            source_type: api_record
            title: 中国历代人物传记资料库：王鍊（CBDB 145376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145376&o=json
            external_identifier: CBDB:145376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.669Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3JQhJ6V1PYArAt9hMRD7UM
        status: active
        display_name: 王鍊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲言 | accepted |
| death.date | 843年 | accepted |
| bio.summary | 王仲言（卒于843年），唐人物。籍贯丹徒。（中国历代人物传记资料库 CBDB 193212） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3JQhJ6V1PYArAt9hMRD7UM | 王鍊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鍊（CBDB 145376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145376&o=json)
- [中国历代人物传记资料库：王仲言（CBDB 193212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193212&o=json)

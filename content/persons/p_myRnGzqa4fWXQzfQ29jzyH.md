---
schema: wang-person/v1
id: p_myRnGzqa4fWXQzfQ29jzyH
status: active
merged_into: null
display_name: 王劇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KYtJnMt24UJfL43qT5TxMw
        subject_person_id: p_myRnGzqa4fWXQzfQ29jzyH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王劇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DV6QRvaGkv2CzUpApJUGPL
          claim_id: c_KYtJnMt24UJfL43qT5TxMw
          source_id: s_8opmz4VDSirXQ13d1RPhyw
          stance: supports
          locator: CBDB:190094
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190094）
          source: &a1
            id: s_8opmz4VDSirXQ13d1RPhyw
            source_type: api_record
            title: 中国历代人物传记资料库：王劇（CBDB 190094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190094&o=json
            external_identifier: CBDB:190094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.278Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_St3urhy5EeLsPPJFo1V72E
        subject_person_id: p_myRnGzqa4fWXQzfQ29jzyH
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
        - id: cs_ZXq1x6yfD1aJRvJoSefhJP
          claim_id: c_St3urhy5EeLsPPJFo1V72E
          source_id: s_8opmz4VDSirXQ13d1RPhyw
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
        id: c_2mVT6AeuAoRKiNb5uXEz21
        subject_person_id: p_myRnGzqa4fWXQzfQ29jzyH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王劇（卒于720年），唐人物。籍贯洛陽，曾任弘文館大學士。（中国历代人物传记资料库 CBDB 190094）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fgjyu-3abCZL9qYD30bNsQ
          claim_id: c_2mVT6AeuAoRKiNb5uXEz21
          source_id: s_8opmz4VDSirXQ13d1RPhyw
          stance: supports
          locator: CBDB:190094
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_HPxd_X-jWLSo1DNu5m6osn
        subject_person_id: p_myRnGzqa4fWXQzfQ29jzyH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XHyvJtE4AFhgXPWDApbS3G
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1yV0wR4QHQX-wFhbvhQx-y
          claim_id: c_HPxd_X-jWLSo1DNu5m6osn
          source_id: s_8opmz4VDSirXQ13d1RPhyw
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XHyvJtE4AFhgXPWDApbS3G
        status: active
        display_name: 王恮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王劇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王劇 | accepted |
| death.date | 720年 | accepted |
| bio.summary | 王劇（卒于720年），唐人物。籍贯洛陽，曾任弘文館大學士。（中国历代人物传记资料库 CBDB 190094） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_XHyvJtE4AFhgXPWDApbS3G | 王恮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王劇（CBDB 190094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190094&o=json)

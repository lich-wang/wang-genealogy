---
schema: wang-person/v1
id: p_CKPv9UAc3q29PWyukafcq8
status: active
merged_into: null
display_name: 王文奎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_etCRxQjePbbgku2LMpV9Hr
        subject_person_id: p_CKPv9UAc3q29PWyukafcq8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文奎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TubvA5pDGFJTiFnTddff1A
          claim_id: c_etCRxQjePbbgku2LMpV9Hr
          source_id: s_Cg2uT2jLBdKAn8ujADvzDV
          stance: supports
          locator: CBDB:267005
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（267005）
          source: &a1
            id: s_Cg2uT2jLBdKAn8ujADvzDV
            source_type: api_record
            title: 中国历代人物传记资料库：王文奎（CBDB 267005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267005&o=json
            external_identifier: CBDB:267005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.757Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ygtwg55HH8DDHTTrq6FFn5
        subject_person_id: p_CKPv9UAc3q29PWyukafcq8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文奎，明人物。景泰五年進士，籍贯溧水。（中国历代人物传记资料库 CBDB 267005）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YPRqQ9HmonKfXr782oNQcR
          claim_id: c_Ygtwg55HH8DDHTTrq6FFn5
          source_id: s_Cg2uT2jLBdKAn8ujADvzDV
          stance: supports
          locator: CBDB:267005
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_f--7Ef3bfwXRVwErnaEdjk
        subject_person_id: p_CKPv9UAc3q29PWyukafcq8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_q8jv2duMSqfqCbpkkK9Wow
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B0LJomOgWEjeHsS8Evk1jj
          claim_id: c_f--7Ef3bfwXRVwErnaEdjk
          source_id: s_Cg2uT2jLBdKAn8ujADvzDV
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第六十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_q8jv2duMSqfqCbpkkK9Wow
        status: active
        display_name: 王魯
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文奎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文奎 | accepted |
| bio.summary | 王文奎，明人物。景泰五年進士，籍贯溧水。（中国历代人物传记资料库 CBDB 267005） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_q8jv2duMSqfqCbpkkK9Wow | 王魯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文奎（CBDB 267005）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267005&o=json)

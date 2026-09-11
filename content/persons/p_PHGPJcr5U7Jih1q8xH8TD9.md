---
schema: wang-person/v1
id: p_PHGPJcr5U7Jih1q8xH8TD9
status: active
merged_into: null
display_name: 王友端
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pdfnCq4n5MJJP9mDeDBVzs
        subject_person_id: p_PHGPJcr5U7Jih1q8xH8TD9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友端
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qyWkJj4rdgBALMDy93171i
          claim_id: c_pdfnCq4n5MJJP9mDeDBVzs
          source_id: s_jV868H1maPG6A8PAJuv1hG
          stance: supports
          locator: CBDB:38102
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38102）
          source: &a1
            id: s_jV868H1maPG6A8PAJuv1hG
            source_type: api_record
            title: 中国历代人物传记资料库：王友端（CBDB 38102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38102&o=json
            external_identifier: CBDB:38102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.358Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8Pa6DL6iLQ4kYyAuZNGizd
        subject_person_id: p_PHGPJcr5U7Jih1q8xH8TD9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友端，宋人物。身份为畫家。（中国历代人物传记资料库 CBDB 38102）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xin-uGGRm7fJpoWy8bGdMo
          claim_id: c_8Pa6DL6iLQ4kYyAuZNGizd
          source_id: s_jV868H1maPG6A8PAJuv1hG
          stance: supports
          locator: CBDB:38102
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王友端

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王友端 | accepted |
| bio.summary | 王友端，宋人物。身份为畫家。（中国历代人物传记资料库 CBDB 38102） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王友端（CBDB 38102）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38102&o=json)

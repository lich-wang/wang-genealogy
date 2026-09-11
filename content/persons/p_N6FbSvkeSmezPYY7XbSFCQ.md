---
schema: wang-person/v1
id: p_N6FbSvkeSmezPYY7XbSFCQ
status: merged
merged_into: p_H3Gcv5yupi2SQ8G254fb4U
display_name: 王敬直
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Xtqp941rLrZnQ1K22qG18d
        subject_person_id: p_N6FbSvkeSmezPYY7XbSFCQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬直
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M6oYjWMBtQLDm96LA7pTSp
          claim_id: c_Xtqp941rLrZnQ1K22qG18d
          source_id: s_2VqYRsL4V5TobjG2o9HMFA
          stance: supports
          locator: CBDB:175861
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175861）
          source: &a1
            id: s_2VqYRsL4V5TobjG2o9HMFA
            source_type: api_record
            title: 中国历代人物传记资料库：王敬直（CBDB 175861）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175861&o=json
            external_identifier: CBDB:175861
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.166Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GAXpwGVAT68MqYXKQ44TXM
        subject_person_id: p_N6FbSvkeSmezPYY7XbSFCQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 667年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xH3tX3u5ivhJo3WkS71yWH
          claim_id: c_GAXpwGVAT68MqYXKQ44TXM
          source_id: s_2VqYRsL4V5TobjG2o9HMFA
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
        id: c_6G9m5q86uwQ78FWt8xWXzn
        subject_person_id: p_N6FbSvkeSmezPYY7XbSFCQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬直（卒于667年），唐人物。籍贯祁縣。（中国历代人物传记资料库 CBDB 175861）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wW0pgfWWKZXEtdDyeNCiwi
          claim_id: c_6G9m5q86uwQ78FWt8xWXzn
          source_id: s_2VqYRsL4V5TobjG2o9HMFA
          stance: supports
          locator: CBDB:175861
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

# 王敬直

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬直 | accepted |
| death.date | 667年 | accepted |
| bio.summary | 王敬直（卒于667年），唐人物。籍贯祁縣。（中国历代人物传记资料库 CBDB 175861） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敬直（CBDB 175861）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175861&o=json)

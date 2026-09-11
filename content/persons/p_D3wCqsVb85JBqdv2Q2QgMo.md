---
schema: wang-person/v1
id: p_D3wCqsVb85JBqdv2Q2QgMo
status: active
merged_into: null
display_name: 王田
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Qhw1MkG3ZM8cn3mKDHqw3N
        subject_person_id: p_D3wCqsVb85JBqdv2Q2QgMo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王田
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q2QWrutRcBZ9EmryFEjEnc
          claim_id: c_Qhw1MkG3ZM8cn3mKDHqw3N
          source_id: s_H9Yp8iEePQcYWNm29e6775
          stance: supports
          locator: CBDB:639482
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639482）
          source: &a1
            id: s_H9Yp8iEePQcYWNm29e6775
            source_type: api_record
            title: 中国历代人物传记资料库：王田（CBDB 639482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639482&o=json
            external_identifier: CBDB:639482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2URC9745rbuiW1Ah1cpsGt
        subject_person_id: p_D3wCqsVb85JBqdv2Q2QgMo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王田，清人物。籍贯汾州府，曾任復設訓導。（中国历代人物传记资料库 CBDB 639482）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_H35KOSiqOxyCzgTtTHiEtN
          claim_id: c_2URC9745rbuiW1Ah1cpsGt
          source_id: s_H9Yp8iEePQcYWNm29e6775
          stance: supports
          locator: CBDB:639482
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

# 王田

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王田 | accepted |
| bio.summary | 王田，清人物。籍贯汾州府，曾任復設訓導。（中国历代人物传记资料库 CBDB 639482） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王田（CBDB 639482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639482&o=json)

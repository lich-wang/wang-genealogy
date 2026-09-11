---
schema: wang-person/v1
id: p_TkqEBK7B44Ecr5nxMCfJjv
status: active
merged_into: null
display_name: 王人雄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ha9gQNPLV4515QqgQQRS5T
        subject_person_id: p_TkqEBK7B44Ecr5nxMCfJjv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王人雄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_39bxNpzKavU1ffcKe6WZuw
          claim_id: c_Ha9gQNPLV4515QqgQQRS5T
          source_id: s_4NK2xMvE2Ygmo5aQryLmCb
          stance: supports
          locator: CBDB:562513
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（562513）
          source: &a1
            id: s_4NK2xMvE2Ygmo5aQryLmCb
            source_type: api_record
            title: 中国历代人物传记资料库：王人雄（CBDB 562513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562513&o=json
            external_identifier: CBDB:562513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.561Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eP8WPYDQrAFhmMrMaPDkoH
        subject_person_id: p_TkqEBK7B44Ecr5nxMCfJjv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王人雄，清人物。籍贯蕭山。（中国历代人物传记资料库 CBDB 562513）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iLunftC3G1MYPt8MtWrNVw
          claim_id: c_eP8WPYDQrAFhmMrMaPDkoH
          source_id: s_4NK2xMvE2Ygmo5aQryLmCb
          stance: supports
          locator: CBDB:562513
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

# 王人雄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王人雄 | accepted |
| bio.summary | 王人雄，清人物。籍贯蕭山。（中国历代人物传记资料库 CBDB 562513） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王人雄（CBDB 562513）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562513&o=json)

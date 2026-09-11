---
schema: wang-person/v1
id: p_9Skv89c2BKw2GhUgYZH2qc
status: active
merged_into: null
display_name: 王奐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ECW6Xq3oSzLQMtYQ56RMDJ
        subject_person_id: p_9Skv89c2BKw2GhUgYZH2qc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W3KKJYTW1kBXxs17M8iz36
          claim_id: c_ECW6Xq3oSzLQMtYQ56RMDJ
          source_id: s_Qek8BL9BVxQT341YE2h2vH
          stance: supports
          locator: CBDB:100714
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100714）
          source: &a1
            id: s_Qek8BL9BVxQT341YE2h2vH
            source_type: api_record
            title: 中国历代人物传记资料库：王奐（CBDB 100714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100714&o=json
            external_identifier: CBDB:100714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.387Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8V2VN1t2mih1dpdd1MjG6A
        subject_person_id: p_9Skv89c2BKw2GhUgYZH2qc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奐，元人物。籍贯汶上，身份为良吏;循吏。（中国历代人物传记资料库 CBDB 100714）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_W4y4pDJ5SNyqUx05tb_sVr
          claim_id: c_8V2VN1t2mih1dpdd1MjG6A
          source_id: s_Qek8BL9BVxQT341YE2h2vH
          stance: supports
          locator: CBDB:100714
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

# 王奐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奐 | accepted |
| bio.summary | 王奐，元人物。籍贯汶上，身份为良吏;循吏。（中国历代人物传记资料库 CBDB 100714） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王奐（CBDB 100714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100714&o=json)

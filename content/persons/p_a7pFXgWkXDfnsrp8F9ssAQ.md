---
schema: wang-person/v1
id: p_a7pFXgWkXDfnsrp8F9ssAQ
status: active
merged_into: null
display_name: 王珍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mRypkAh47d55N3289h1jQ6
        subject_person_id: p_a7pFXgWkXDfnsrp8F9ssAQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1gbunt3Jz6yKbaw497L12w
          claim_id: c_mRypkAh47d55N3289h1jQ6
          source_id: s_yYPL783fLXD4TF4A6c6v7U
          stance: supports
          locator: CBDB:495170
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（495170）
          source: &a1
            id: s_yYPL783fLXD4TF4A6c6v7U
            source_type: api_record
            title: 中国历代人物传记资料库：王珍（CBDB 495170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495170&o=json
            external_identifier: CBDB:495170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.480Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cTXECkvxfMq4AQTShaSCzU
        subject_person_id: p_a7pFXgWkXDfnsrp8F9ssAQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珍，清人物。入仕行伍，曾任守備。（中国历代人物传记资料库 CBDB 495170）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WAwwvV0QRii3zHgWk1LpFE
          claim_id: c_cTXECkvxfMq4AQTShaSCzU
          source_id: s_yYPL783fLXD4TF4A6c6v7U
          stance: supports
          locator: CBDB:495170
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

# 王珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珍 | accepted |
| bio.summary | 王珍，清人物。入仕行伍，曾任守備。（中国历代人物传记资料库 CBDB 495170） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珍（CBDB 495170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495170&o=json)

---
schema: wang-person/v1
id: p_wEcw3km21hYReL1ypv6aei
status: active
merged_into: null
display_name: 王壽朋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e9g1zQSxMzADU4eaWC1r7L
        subject_person_id: p_wEcw3km21hYReL1ypv6aei
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽朋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aRZxMPx6rujHqkFDAvHghk
          claim_id: c_e9g1zQSxMzADU4eaWC1r7L
          source_id: s_fRoquAwncwW3sLNDdP4hjc
          stance: supports
          locator: CBDB:18813
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（18813）
          source: &a1
            id: s_fRoquAwncwW3sLNDdP4hjc
            source_type: api_record
            title: 中国历代人物传记资料库：王壽朋（CBDB 18813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18813&o=json
            external_identifier: CBDB:18813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.715Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ANSYyiSQs52r6KmBE6TP6G
        subject_person_id: p_wEcw3km21hYReL1ypv6aei
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽朋，宋人物。籍贯樂清。（中国历代人物传记资料库 CBDB 18813）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-y68lAba-pN9YHm4QRcCAy
          claim_id: c_ANSYyiSQs52r6KmBE6TP6G
          source_id: s_fRoquAwncwW3sLNDdP4hjc
          stance: supports
          locator: CBDB:18813
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

# 王壽朋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壽朋 | accepted |
| bio.summary | 王壽朋，宋人物。籍贯樂清。（中国历代人物传记资料库 CBDB 18813） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王壽朋（CBDB 18813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18813&o=json)

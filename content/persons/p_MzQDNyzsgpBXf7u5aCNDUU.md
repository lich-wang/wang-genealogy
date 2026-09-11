---
schema: wang-person/v1
id: p_MzQDNyzsgpBXf7u5aCNDUU
status: active
merged_into: null
display_name: 王志超
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XTkFBiHtSwtz6gmnjoPTDN
        subject_person_id: p_MzQDNyzsgpBXf7u5aCNDUU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志超
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PFL9GQegp6vg8ihj9muRjg
          claim_id: c_XTkFBiHtSwtz6gmnjoPTDN
          source_id: s_EJWFzwxAHJ9qr7kodkPJtq
          stance: supports
          locator: CBDB:71657
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71657）
          source: &a1
            id: s_EJWFzwxAHJ9qr7kodkPJtq
            source_type: api_record
            title: 中国历代人物传记资料库：王志超（CBDB 71657）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71657&o=json
            external_identifier: CBDB:71657
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.809Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6u2rEHv3f4ueeEcawuhf1y
        subject_person_id: p_MzQDNyzsgpBXf7u5aCNDUU
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1800年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3MavVrNubB3SmnpM4XQPBd
          claim_id: c_6u2rEHv3f4ueeEcawuhf1y
          source_id: s_EJWFzwxAHJ9qr7kodkPJtq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c1Fo8nBEKgsJ9ShEwhSFTQ
        subject_person_id: p_MzQDNyzsgpBXf7u5aCNDUU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志超（生于1800年），清人物。籍贯諸城。（中国历代人物传记资料库 CBDB 71657）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lWmg3OWDmMXti86lN_4gbt
          claim_id: c_c1Fo8nBEKgsJ9ShEwhSFTQ
          source_id: s_EJWFzwxAHJ9qr7kodkPJtq
          stance: supports
          locator: CBDB:71657
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

# 王志超

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志超 | accepted |
| birth.date | 1800年 | accepted |
| bio.summary | 王志超（生于1800年），清人物。籍贯諸城。（中国历代人物传记资料库 CBDB 71657） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志超（CBDB 71657）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71657&o=json)

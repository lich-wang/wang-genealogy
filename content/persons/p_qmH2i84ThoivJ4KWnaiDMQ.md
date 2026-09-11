---
schema: wang-person/v1
id: p_qmH2i84ThoivJ4KWnaiDMQ
status: active
merged_into: null
display_name: 王訓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6Jna7zq8HQ8ooLisQQ3eQX
        subject_person_id: p_qmH2i84ThoivJ4KWnaiDMQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EcMpCSRPQzFiYwqUysequE
          claim_id: c_6Jna7zq8HQ8ooLisQQ3eQX
          source_id: s_fgYdX7HRuBf4A8V43awhnd
          stance: supports
          locator: CBDB:140867
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140867）
          source: &a1
            id: s_fgYdX7HRuBf4A8V43awhnd
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 140867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140867&o=json
            external_identifier: CBDB:140867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.532Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NXpsd91iXq5KgmeSyW7SAX
        subject_person_id: p_qmH2i84ThoivJ4KWnaiDMQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 677年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sn8yLuERqGedZth2WpPHz9
          claim_id: c_NXpsd91iXq5KgmeSyW7SAX
          source_id: s_fgYdX7HRuBf4A8V43awhnd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ttpN53a1wBa6FjRJABvc8e
        subject_person_id: p_qmH2i84ThoivJ4KWnaiDMQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 744年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q4kFNrBsp5BgB7XrWiPCYV
          claim_id: c_ttpN53a1wBa6FjRJABvc8e
          source_id: s_fgYdX7HRuBf4A8V43awhnd
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
        id: c_P22VLKDaHdSjfTo48Gb3cK
        subject_person_id: p_qmH2i84ThoivJ4KWnaiDMQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訓（677年—744年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 140867）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7Ji2A8xCnABL3jKKaQdZ4N
          claim_id: c_P22VLKDaHdSjfTo48Gb3cK
          source_id: s_fgYdX7HRuBf4A8V43awhnd
          stance: supports
          locator: CBDB:140867
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OF16RJcPsZcMwDNw9QyO65
        subject_person_id: p_JJkrCV4jc7hBF4kPPQXXmu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qmH2i84ThoivJ4KWnaiDMQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TyDq6I8J2zoP5tke2S7ANr
          claim_id: c_OF16RJcPsZcMwDNw9QyO65
          source_id: s_fx6BGwhFJ7mJbCzrYdKXLQ
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 62：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fx6BGwhFJ7mJbCzrYdKXLQ
            source_type: api_record
            title: 中国历代人物传记资料库：王訥（CBDB 153512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153512&o=json
            external_identifier: CBDB:153512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.861Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JJkrCV4jc7hBF4kPPQXXmu
        status: active
        display_name: 王訥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王訓 | accepted |
| birth.date | 677年 | accepted |
| death.date | 744年 | accepted |
| bio.summary | 王訓（677年—744年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 140867） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JJkrCV4jc7hBF4kPPQXXmu | 王訥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王訥（CBDB 153512）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153512&o=json)
- [中国历代人物传记资料库：王訓（CBDB 140867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140867&o=json)

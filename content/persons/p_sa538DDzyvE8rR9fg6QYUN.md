---
schema: wang-person/v1
id: p_sa538DDzyvE8rR9fg6QYUN
status: active
merged_into: null
display_name: 王玘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jBku98oijuBFLP4296SotU
        subject_person_id: p_sa538DDzyvE8rR9fg6QYUN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SDKF2NMKE3yguaM2EsA5tL
          claim_id: c_jBku98oijuBFLP4296SotU
          source_id: s_MyrJ2YK1Gv4wzT1pfsKJJu
          stance: supports
          locator: CBDB:249585
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（249585）
          source: &a1
            id: s_MyrJ2YK1Gv4wzT1pfsKJJu
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 249585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249585&o=json
            external_identifier: CBDB:249585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.180Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PF9ZGgaycy1Y8nRYzG3gk5
        subject_person_id: p_sa538DDzyvE8rR9fg6QYUN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玘，明人物。成化十一年進士，籍贯棗陽。（中国历代人物传记资料库 CBDB 249585）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ns-Se5Bl9UYEAFuW-3hqOo
          claim_id: c_PF9ZGgaycy1Y8nRYzG3gk5
          source_id: s_MyrJ2YK1Gv4wzT1pfsKJJu
          stance: supports
          locator: CBDB:249585
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

# 王玘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玘 | accepted |
| bio.summary | 王玘，明人物。成化十一年進士，籍贯棗陽。（中国历代人物传记资料库 CBDB 249585） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玘（CBDB 249585）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249585&o=json)

---
schema: wang-person/v1
id: p_tq3WBS19JRoVJUH3RrY8U5
status: active
merged_into: null
display_name: 王璿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zWFsQhrNKCP1P4B6P7VrEg
        subject_person_id: p_tq3WBS19JRoVJUH3RrY8U5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_neuUcwTMSvcmszy4RpX2pF
          claim_id: c_zWFsQhrNKCP1P4B6P7VrEg
          source_id: s_AXrbMKkASwXD6JH4vpBSZ8
          stance: supports
          locator: CBDB:241141
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241141）
          source: &a1
            id: s_AXrbMKkASwXD6JH4vpBSZ8
            source_type: api_record
            title: 中国历代人物传记资料库：王璿（CBDB 241141）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241141&o=json
            external_identifier: CBDB:241141
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.947Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M3tRaBmb6auPpBP2nSiSNh
        subject_person_id: p_tq3WBS19JRoVJUH3RrY8U5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璿，明人物。正統十三年進士，籍贯和州。（中国历代人物传记资料库 CBDB 241141）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D4BpeDADkOivIUyfXe3NWA
          claim_id: c_M3tRaBmb6auPpBP2nSiSNh
          source_id: s_AXrbMKkASwXD6JH4vpBSZ8
          stance: supports
          locator: CBDB:241141
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

# 王璿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璿 | accepted |
| bio.summary | 王璿，明人物。正統十三年進士，籍贯和州。（中国历代人物传记资料库 CBDB 241141） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璿（CBDB 241141）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241141&o=json)

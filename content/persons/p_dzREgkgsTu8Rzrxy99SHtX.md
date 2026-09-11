---
schema: wang-person/v1
id: p_dzREgkgsTu8Rzrxy99SHtX
status: active
merged_into: null
display_name: 張天植
revision: 1
cbdb_id: 123423
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XjpU5kREP1l3xDOPWxcilI
        subject_person_id: p_dzREgkgsTu8Rzrxy99SHtX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張天植，史料所见人物。本项目依据《中国历代人物传记资料库：張天植（CBDB 123423）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9XH2aaTq0FjhlxuSKUZkwK
          claim_id: c_XjpU5kREP1l3xDOPWxcilI
          source_id: s_slOa9ZWRf2UvGbaaXyF0Qf
          stance: supports
          locator: CBDB:123423
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_slOa9ZWRf2UvGbaaXyF0Qf
            source_type: api_record
            title: 中国历代人物传记资料库：張天植（CBDB 123423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123423&o=json
            external_identifier: CBDB:123423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wwK9G-sctH4qgAFYvJPTL8
        subject_person_id: p_dzREgkgsTu8Rzrxy99SHtX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張天植
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PWSOu2sToqv154ooNFC_Wt
          claim_id: c_wwK9G-sctH4qgAFYvJPTL8
          source_id: s_slOa9ZWRf2UvGbaaXyF0Qf
          stance: supports
          locator: CBDB:123423
          quotation: null
          interpretation_note: CBDB 明确记录的王湘貞配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_hIAbxiIdiiV9i51yLlBCci
        subject_person_id: p_cHA9LAEc5A8EKN1RguXQ6u
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_dzREgkgsTu8Rzrxy99SHtX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Wjpcu3XhYYF923oQORmAs
          claim_id: c_hIAbxiIdiiV9i51yLlBCci
          source_id: s_slOa9ZWRf2UvGbaaXyF0Qf
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #5193：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cHA9LAEc5A8EKN1RguXQ6u
        status: active
        display_name: 王湘貞
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張天植

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 張天植，史料所见人物。本项目依据《中国历代人物传记资料库：張天植（CBDB 123423）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 張天植 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_cHA9LAEc5A8EKN1RguXQ6u | 王湘貞 | accepted |

## 外部来源

- [中国历代人物传记资料库：張天植（CBDB 123423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123423&o=json)

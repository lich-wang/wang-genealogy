---
schema: wang-person/v1
id: p_9fuHFqLqKdsYW13k8sXVgj
status: active
merged_into: null
display_name: 王鉽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tM529Sw4Jw9rD6bBvGBjXN
        subject_person_id: p_9fuHFqLqKdsYW13k8sXVgj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qqJC4DeCEPQSwF13SBsekN
          claim_id: c_tM529Sw4Jw9rD6bBvGBjXN
          source_id: s_sB8agXGaQq8GctLB2ZYSaw
          stance: supports
          locator: CBDB:562147
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（562147）
          source: &a1
            id: s_sB8agXGaQq8GctLB2ZYSaw
            source_type: api_record
            title: 中国历代人物传记资料库：王鉽（CBDB 562147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562147&o=json
            external_identifier: CBDB:562147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.769Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rTdnSygJ7HbnPzLh97UzEf
        subject_person_id: p_9fuHFqLqKdsYW13k8sXVgj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉽，清人物。籍贯蕭山，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 562147）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a5sygBZt2SpfmpgNZMCL4_
          claim_id: c_rTdnSygJ7HbnPzLh97UzEf
          source_id: s_sB8agXGaQq8GctLB2ZYSaw
          stance: supports
          locator: CBDB:562147
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

# 王鉽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉽 | accepted |
| bio.summary | 王鉽，清人物。籍贯蕭山，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 562147） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鉽（CBDB 562147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562147&o=json)

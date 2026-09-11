---
schema: wang-person/v1
id: p_zS7M6m1NGaZ8W7F7JLMDSD
status: active
merged_into: null
display_name: 王鴻達
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sEBQXTWvv2L8HoU93163XM
        subject_person_id: p_zS7M6m1NGaZ8W7F7JLMDSD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻達
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rnP9KG64rGK8nfn4wKH4g2
          claim_id: c_sEBQXTWvv2L8HoU93163XM
          source_id: s_tjr3R1DYQX8VTwK8JKdKWM
          stance: supports
          locator: CBDB:640999
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640999）
          source: &a1
            id: s_tjr3R1DYQX8VTwK8JKdKWM
            source_type: api_record
            title: 中国历代人物传记资料库：王鴻達（CBDB 640999）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640999&o=json
            external_identifier: CBDB:640999
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.438Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4uDDUnM21EmMmRwhaxDiPh
        subject_person_id: p_zS7M6m1NGaZ8W7F7JLMDSD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻達，清人物。籍贯東湖，曾任主事。（中国历代人物传记资料库 CBDB 640999）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_c5VPLiRWE3VtSm4_oUss1L
          claim_id: c_4uDDUnM21EmMmRwhaxDiPh
          source_id: s_tjr3R1DYQX8VTwK8JKdKWM
          stance: supports
          locator: CBDB:640999
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

# 王鴻達

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鴻達 | accepted |
| bio.summary | 王鴻達，清人物。籍贯東湖，曾任主事。（中国历代人物传记资料库 CBDB 640999） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鴻達（CBDB 640999）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640999&o=json)

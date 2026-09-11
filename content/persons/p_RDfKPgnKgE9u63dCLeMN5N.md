---
schema: wang-person/v1
id: p_RDfKPgnKgE9u63dCLeMN5N
status: active
merged_into: null
display_name: 王世傳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CC58Kd7rgwUp2z9xLrWawD
        subject_person_id: p_RDfKPgnKgE9u63dCLeMN5N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世傳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mLqnE74fmMJ51tKaKXEe6i
          claim_id: c_CC58Kd7rgwUp2z9xLrWawD
          source_id: s_fpuE9rcHHUwxMhD2597ZV8
          stance: supports
          locator: CBDB:635664
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635664）
          source: &a1
            id: s_fpuE9rcHHUwxMhD2597ZV8
            source_type: api_record
            title: 中国历代人物传记资料库：王世傳（CBDB 635664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635664&o=json
            external_identifier: CBDB:635664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.753Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_14fXoUhU154BZfBzEMd92a
        subject_person_id: p_RDfKPgnKgE9u63dCLeMN5N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世傳，清人物。籍贯青州府，曾任訓導。（中国历代人物传记资料库 CBDB 635664）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_z4UmJsyv2xjD6USD5nZRD6
          claim_id: c_14fXoUhU154BZfBzEMd92a
          source_id: s_fpuE9rcHHUwxMhD2597ZV8
          stance: supports
          locator: CBDB:635664
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

# 王世傳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世傳 | accepted |
| bio.summary | 王世傳，清人物。籍贯青州府，曾任訓導。（中国历代人物传记资料库 CBDB 635664） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世傳（CBDB 635664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635664&o=json)

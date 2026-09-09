---
schema: wang-person/v1
id: p_eoivHemMn18D7qQ67qnH2v
status: active
merged_into: null
display_name: 王經邦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GZcxpPutjQp8iKcPrTQWKg
        subject_person_id: p_eoivHemMn18D7qQ67qnH2v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經邦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QVA4pAbvXo5TtxmiDDPe3g
          claim_id: c_GZcxpPutjQp8iKcPrTQWKg
          source_id: s_Th1peMhM2eiBbz65gHmioE
          stance: supports
          locator: CBDB:639797
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639797）
          source: &a1
            id: s_Th1peMhM2eiBbz65gHmioE
            source_type: api_record
            title: 中国历代人物传记资料库：王經邦（CBDB 639797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639797&o=json
            external_identifier: CBDB:639797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.977Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hT4VZFMdLnC2ZPqQgdXMNP
        subject_person_id: p_eoivHemMn18D7qQ67qnH2v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_86rzuB9DaogeV9Z4PsDzCd
          claim_id: c_hT4VZFMdLnC2ZPqQgdXMNP
          source_id: s_Th1peMhM2eiBbz65gHmioE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王經邦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王經邦 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王經邦（CBDB 639797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639797&o=json)

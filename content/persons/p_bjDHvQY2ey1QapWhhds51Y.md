---
schema: wang-person/v1
id: p_bjDHvQY2ey1QapWhhds51Y
status: active
merged_into: null
display_name: 王中圻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iHjeQSe9uYoh6SAFnqYd1J
        subject_person_id: p_bjDHvQY2ey1QapWhhds51Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中圻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KMRL6jPH1Q9dB1FJdV4d52
          claim_id: c_iHjeQSe9uYoh6SAFnqYd1J
          source_id: s_JpY6PHRcJ8DXyWQ5TSQZSK
          stance: supports
          locator: CBDB:635746
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635746）
          source: &a1
            id: s_JpY6PHRcJ8DXyWQ5TSQZSK
            source_type: api_record
            title: 中国历代人物传记资料库：王中圻（CBDB 635746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635746&o=json
            external_identifier: CBDB:635746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.778Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ktphnx8UjQ24SwMrPfxDfm
        subject_person_id: p_bjDHvQY2ey1QapWhhds51Y
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
        - id: cs_28PNP2zUVyJghEpTvqDPkb
          claim_id: c_Ktphnx8UjQ24SwMrPfxDfm
          source_id: s_JpY6PHRcJ8DXyWQ5TSQZSK
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

# 王中圻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王中圻 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王中圻（CBDB 635746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635746&o=json)

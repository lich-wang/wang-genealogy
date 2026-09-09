---
schema: wang-person/v1
id: p_W5GaHUMJSWCuMuNBjxxdj7
status: active
merged_into: null
display_name: 王友諒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_abGex8pQjHdMyCujVrsXN2
        subject_person_id: p_W5GaHUMJSWCuMuNBjxxdj7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友諒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K2Wqa9R2Gvj1PniA8UDToE
          claim_id: c_abGex8pQjHdMyCujVrsXN2
          source_id: s_3J9pmGsfd9UKrk238pfduo
          stance: supports
          locator: CBDB:309073
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309073）
          source: &a1
            id: s_3J9pmGsfd9UKrk238pfduo
            source_type: api_record
            title: 中国历代人物传记资料库：王友諒（CBDB 309073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309073&o=json
            external_identifier: CBDB:309073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.803Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ARop2cRpHnSN5NFK4dsaHn
        subject_person_id: p_W5GaHUMJSWCuMuNBjxxdj7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4uBY56u9LE1UwkzQsY37T4
          claim_id: c_ARop2cRpHnSN5NFK4dsaHn
          source_id: s_3J9pmGsfd9UKrk238pfduo
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

# 王友諒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王友諒 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王友諒（CBDB 309073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309073&o=json)

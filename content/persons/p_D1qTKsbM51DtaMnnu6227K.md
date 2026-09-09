---
schema: wang-person/v1
id: p_D1qTKsbM51DtaMnnu6227K
status: active
merged_into: null
display_name: 王承佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hRTFEiRCNsko8Y2ceumiDi
        subject_person_id: p_D1qTKsbM51DtaMnnu6227K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SK4d9gCr8LztaN3515MkoV
          claim_id: c_hRTFEiRCNsko8Y2ceumiDi
          source_id: s_x4qJ7TRQMeKaUS2McvTP3M
          stance: supports
          locator: CBDB:342044
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342044）
          source: &a1
            id: s_x4qJ7TRQMeKaUS2McvTP3M
            source_type: api_record
            title: 中国历代人物传记资料库：王承佐（CBDB 342044）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342044&o=json
            external_identifier: CBDB:342044
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.822Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1kLAVTCrFWHPN9pvYfQx9S
        subject_person_id: p_D1qTKsbM51DtaMnnu6227K
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
        - id: cs_JV4XsZYfSLnsCqHHwfzCFC
          claim_id: c_1kLAVTCrFWHPN9pvYfQx9S
          source_id: s_x4qJ7TRQMeKaUS2McvTP3M
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

# 王承佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承佐 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承佐（CBDB 342044）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342044&o=json)

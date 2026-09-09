---
schema: wang-person/v1
id: p_g5TNwKGm7gBF1wAmeP8dxi
status: active
merged_into: null
display_name: 王廷臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aZke14Rw5zChAY6kSXDyo2
        subject_person_id: p_g5TNwKGm7gBF1wAmeP8dxi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K1mL97ruymuC14atb6MahC
          claim_id: c_aZke14Rw5zChAY6kSXDyo2
          source_id: s_Md4Pv1p6kmdEvG38mGty4j
          stance: supports
          locator: CBDB:486909
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（486909）
          source: &a1
            id: s_Md4Pv1p6kmdEvG38mGty4j
            source_type: api_record
            title: 中国历代人物传记资料库：王廷臣（CBDB 486909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=486909&o=json
            external_identifier: CBDB:486909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.926Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BNj1Eye8qJ5e7ubaCtjYS5
        subject_person_id: p_g5TNwKGm7gBF1wAmeP8dxi
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
        - id: cs_C32NqNDp7svZAyUUSFNcWF
          claim_id: c_BNj1Eye8qJ5e7ubaCtjYS5
          source_id: s_Md4Pv1p6kmdEvG38mGty4j
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

# 王廷臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷臣 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷臣（CBDB 486909）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=486909&o=json)

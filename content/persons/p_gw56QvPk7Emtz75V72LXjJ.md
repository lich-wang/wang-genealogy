---
schema: wang-person/v1
id: p_gw56QvPk7Emtz75V72LXjJ
status: active
merged_into: null
display_name: 王陵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9TpdDC17Kd6cVEAswMngEp
        subject_person_id: p_gw56QvPk7Emtz75V72LXjJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ChqyyEK4szufnAbVqb68Wi
          claim_id: c_9TpdDC17Kd6cVEAswMngEp
          source_id: s_CbdFWW68HwHMBCvCVWicGC
          stance: supports
          locator: CBDB:134995
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（134995）
          source: &a1
            id: s_CbdFWW68HwHMBCvCVWicGC
            source_type: api_record
            title: 中国历代人物传记资料库：王陵（CBDB 134995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134995&o=json
            external_identifier: CBDB:134995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.334Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pZWWZNYKFL1mx7cM9vYyzm
        subject_person_id: p_gw56QvPk7Emtz75V72LXjJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为秦漢人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ERJE1X3mQ8QBGLf1tCChkJ
          claim_id: c_pZWWZNYKFL1mx7cM9vYyzm
          source_id: s_CbdFWW68HwHMBCvCVWicGC
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

# 王陵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王陵 | accepted |
| bio.summary | CBDB 记载为秦漢人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王陵（CBDB 134995）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134995&o=json)

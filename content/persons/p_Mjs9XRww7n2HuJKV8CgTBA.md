---
schema: wang-person/v1
id: p_Mjs9XRww7n2HuJKV8CgTBA
status: active
merged_into: null
display_name: 王宗偉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vj7nFCejtoUzWgAqco38NP
        subject_person_id: p_Mjs9XRww7n2HuJKV8CgTBA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗偉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WX6b7D2mz9CRBReDvCnvdr
          claim_id: c_Vj7nFCejtoUzWgAqco38NP
          source_id: s_HokDKnaWo87HfgYquvN9qd
          stance: supports
          locator: CBDB:383510
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（383510）
          source: &a1
            id: s_HokDKnaWo87HfgYquvN9qd
            source_type: api_record
            title: 中国历代人物传记资料库：王宗偉（CBDB 383510）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383510&o=json
            external_identifier: CBDB:383510
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.842Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z8vcS92h2UD6GAwx6SFn4Z
        subject_person_id: p_Mjs9XRww7n2HuJKV8CgTBA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NjBUTJxycQr4U1AHJkejDS
          claim_id: c_z8vcS92h2UD6GAwx6SFn4Z
          source_id: s_HokDKnaWo87HfgYquvN9qd
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

# 王宗偉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗偉 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗偉（CBDB 383510）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383510&o=json)

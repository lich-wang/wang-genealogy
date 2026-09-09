---
schema: wang-person/v1
id: p_XnCDo1YhExNmij5yB6DdD4
status: active
merged_into: null
display_name: 王燦桂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SFVJYm8FmFEf3nnAhNG25D
        subject_person_id: p_XnCDo1YhExNmij5yB6DdD4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燦桂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bGqcHmJPRUEDZg5WsVxZG3
          claim_id: c_SFVJYm8FmFEf3nnAhNG25D
          source_id: s_CXCvMSd6cw9NLr3E44S4oB
          stance: supports
          locator: CBDB:545378
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（545378）
          source: &a1
            id: s_CXCvMSd6cw9NLr3E44S4oB
            source_type: api_record
            title: 中国历代人物传记资料库：王燦桂（CBDB 545378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545378&o=json
            external_identifier: CBDB:545378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.468Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XczB9mMNJAHki4JJvW5dj5
        subject_person_id: p_XnCDo1YhExNmij5yB6DdD4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iDyPLrPP55y6JiKACjpEU6
          claim_id: c_XczB9mMNJAHki4JJvW5dj5
          source_id: s_CXCvMSd6cw9NLr3E44S4oB
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

# 王燦桂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王燦桂 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王燦桂（CBDB 545378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545378&o=json)

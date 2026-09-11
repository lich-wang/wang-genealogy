---
schema: wang-person/v1
id: p_UXSqNk8LF96TgoA9CNkoxk
status: active
merged_into: null
display_name: 王文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YvGWThZSjDniJrwTGE9nXf
        subject_person_id: p_UXSqNk8LF96TgoA9CNkoxk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sh8sW3JUmyFJKReCCMWCt1
          claim_id: c_YvGWThZSjDniJrwTGE9nXf
          source_id: s_i2Qd7kmc7EjxwJXW6gKEKu
          stance: supports
          locator: CBDB:67338
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67338）
          source: &a1
            id: s_i2Qd7kmc7EjxwJXW6gKEKu
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 67338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67338&o=json
            external_identifier: CBDB:67338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.990Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vF7Myg5sq56JqLWmCh4hk9
        subject_person_id: p_UXSqNk8LF96TgoA9CNkoxk
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1393年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3B8B8neA2ShVse64xzLXYw
          claim_id: c_vF7Myg5sq56JqLWmCh4hk9
          source_id: s_i2Qd7kmc7EjxwJXW6gKEKu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_3yQ98GCHri7qmoka273gRJ
        subject_person_id: p_UXSqNk8LF96TgoA9CNkoxk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1457年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zsnhQNJvkZGH5MEuTYu5pW
          claim_id: c_3yQ98GCHri7qmoka273gRJ
          source_id: s_i2Qd7kmc7EjxwJXW6gKEKu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7hhfD8AYV8Fy8zF6oag7NC
        subject_person_id: p_UXSqNk8LF96TgoA9CNkoxk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文（1393年—1457年），明人物。籍贯束鹿，入仕進士，曾任按察使、殿試讀卷官、東閣大學士。（中国历代人物传记资料库 CBDB 67338）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_l1GrYAxr908Ape8UnOFwBI
          claim_id: c_7hhfD8AYV8Fy8zF6oag7NC
          source_id: s_i2Qd7kmc7EjxwJXW6gKEKu
          stance: supports
          locator: CBDB:67338
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

# 王文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文 | accepted |
| birth.date | 1393年 | accepted |
| death.date | 1457年 | accepted |
| bio.summary | 王文（1393年—1457年），明人物。籍贯束鹿，入仕進士，曾任按察使、殿試讀卷官、東閣大學士。（中国历代人物传记资料库 CBDB 67338） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文（CBDB 67338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67338&o=json)

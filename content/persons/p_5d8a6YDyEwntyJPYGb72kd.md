---
schema: wang-person/v1
id: p_5d8a6YDyEwntyJPYGb72kd
status: active
merged_into: null
display_name: 王金初
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_56iCNZ5v3rcqNChEktBUHz
        subject_person_id: p_5d8a6YDyEwntyJPYGb72kd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金初
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zc647848nHiamrbp5p9YMG
          claim_id: c_56iCNZ5v3rcqNChEktBUHz
          source_id: s_7H4P7ik2XHkUK4AXFyr8Pb
          stance: supports
          locator: CBDB:640507
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640507）
          source: &a1
            id: s_7H4P7ik2XHkUK4AXFyr8Pb
            source_type: api_record
            title: 中国历代人物传记资料库：王金初（CBDB 640507）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640507&o=json
            external_identifier: CBDB:640507
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.281Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xno8KsYkDxiD5iKnL9UiJ1
        subject_person_id: p_5d8a6YDyEwntyJPYGb72kd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金初，清人物。籍贯浙江省，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 640507）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nBCuEQ6gVK1xj125831uk2
          claim_id: c_Xno8KsYkDxiD5iKnL9UiJ1
          source_id: s_7H4P7ik2XHkUK4AXFyr8Pb
          stance: supports
          locator: CBDB:640507
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

# 王金初

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金初 | accepted |
| bio.summary | 王金初，清人物。籍贯浙江省，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 640507） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王金初（CBDB 640507）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640507&o=json)

---
schema: wang-person/v1
id: p_EYAGffN4T8Hvqaf8G9Trvm
status: active
merged_into: null
display_name: 王莘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ve55qV8qpp54W3c9NnGVXz
        subject_person_id: p_EYAGffN4T8Hvqaf8G9Trvm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王莘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wBqm69FH75VhVVPDF3KSau
          claim_id: c_Ve55qV8qpp54W3c9NnGVXz
          source_id: s_2Qb1f6uFvYBKnn9KB4JzBp
          stance: supports
          locator: CBDB:550562
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（550562）
          source: &a1
            id: s_2Qb1f6uFvYBKnn9KB4JzBp
            source_type: api_record
            title: 中国历代人物传记资料库：王莘（CBDB 550562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550562&o=json
            external_identifier: CBDB:550562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.562Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pq2LmJLpxscvXQjZe4T3yv
        subject_person_id: p_EYAGffN4T8Hvqaf8G9Trvm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王莘，明人物。入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 550562）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vSim296RQg1q2WG91G8t_z
          claim_id: c_pq2LmJLpxscvXQjZe4T3yv
          source_id: s_2Qb1f6uFvYBKnn9KB4JzBp
          stance: supports
          locator: CBDB:550562
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
  other:
    - claim:
        id: c_WX5LKlAVk5Ewwy7t4QjH6w
        subject_person_id: p_EYAGffN4T8Hvqaf8G9Trvm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bYUL2W2qRosAHJ46FNDj3v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OAdvzDfuImK65PdtKyRgQq
          claim_id: c_WX5LKlAVk5Ewwy7t4QjH6w
          source_id: s_peKVw--F5urY72zrfuqUo0
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 415372 王蓁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_peKVw--F5urY72zrfuqUo0
            source_type: api_record
            title: 中国历代人物传记资料库：王莘（CBDB 550562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550562&o=json
            external_identifier: CBDB:550562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bYUL2W2qRosAHJ46FNDj3v
        status: active
        display_name: 王蓁
        merged_into_person_id: null
---

# 王莘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王莘 | accepted |
| bio.summary | 王莘，明人物。入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 550562） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_bYUL2W2qRosAHJ46FNDj3v | 王蓁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王莘（CBDB 550562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550562&o=json)

---
schema: wang-person/v1
id: p_4aCLULLvtBG7mr7EKB1ctL
status: active
merged_into: null
display_name: 王鈞韻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eMpff71Qhv6s9NPuKV45ik
        subject_person_id: p_4aCLULLvtBG7mr7EKB1ctL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈞韻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nqRrF4dUskXnSKjte9WAym
          claim_id: c_eMpff71Qhv6s9NPuKV45ik
          source_id: s_ao1G8YV8GowP4SCqvQqQWD
          stance: supports
          locator: CBDB:640551
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640551）
          source: &a1
            id: s_ao1G8YV8GowP4SCqvQqQWD
            source_type: api_record
            title: 中国历代人物传记资料库：王鈞韻（CBDB 640551）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640551&o=json
            external_identifier: CBDB:640551
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.294Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NB9rG4NvVdKLX7LxxN2TQk
        subject_person_id: p_4aCLULLvtBG7mr7EKB1ctL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈞韻，清人物。籍贯青州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 640551）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_x0QtlCuEXSoK6PNqCFdTy0
          claim_id: c_NB9rG4NvVdKLX7LxxN2TQk
          source_id: s_ao1G8YV8GowP4SCqvQqQWD
          stance: supports
          locator: CBDB:640551
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

# 王鈞韻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鈞韻 | accepted |
| bio.summary | 王鈞韻，清人物。籍贯青州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 640551） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鈞韻（CBDB 640551）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640551&o=json)

---
schema: wang-person/v1
id: p_cqKz1UB6z1DDAz5QFyPa6J
status: active
merged_into: null
display_name: 王弼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_v5Q3oeDevXoZyTnafzQw17
        subject_person_id: p_cqKz1UB6z1DDAz5QFyPa6J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F9FDXC4EomJ8bXr42ZHfuR
          claim_id: c_v5Q3oeDevXoZyTnafzQw17
          source_id: s_YuaMzfW6CbhzDYy1oPxBaB
          stance: supports
          locator: CBDB:453401
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（453401）
          source: &a1
            id: s_YuaMzfW6CbhzDYy1oPxBaB
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 453401）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453401&o=json
            external_identifier: CBDB:453401
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.390Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z1en4bD8F9N2ucy84C8Mcq
        subject_person_id: p_cqKz1UB6z1DDAz5QFyPa6J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 453401）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9rAXLVg4HkQRAR9EJ3vscB
          claim_id: c_z1en4bD8F9N2ucy84C8Mcq
          source_id: s_YuaMzfW6CbhzDYy1oPxBaB
          stance: supports
          locator: CBDB:453401
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

# 王弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弼 | accepted |
| bio.summary | 王弼，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 453401） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 453401）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453401&o=json)

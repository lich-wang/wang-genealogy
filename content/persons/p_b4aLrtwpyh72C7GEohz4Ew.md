---
schema: wang-person/v1
id: p_b4aLrtwpyh72C7GEohz4Ew
status: active
merged_into: null
display_name: 王顯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6sVwjy5o4czLGMsJKg8gT6
        subject_person_id: p_b4aLrtwpyh72C7GEohz4Ew
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NP5JNcB47LM6X8pUHSYwHM
          claim_id: c_6sVwjy5o4czLGMsJKg8gT6
          source_id: s_E5GUPXQtutM8KGwkNMz9LJ
          stance: supports
          locator: CBDB:497010
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（497010）
          source: &a1
            id: s_E5GUPXQtutM8KGwkNMz9LJ
            source_type: api_record
            title: 中国历代人物传记资料库：王顯（CBDB 497010）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497010&o=json
            external_identifier: CBDB:497010
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.607Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DR4WPsK7roHJwHXdAEQtM9
        subject_person_id: p_b4aLrtwpyh72C7GEohz4Ew
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯，明人物。入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 497010）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wTj1TClIBXsiXJoNgRFBd9
          claim_id: c_DR4WPsK7roHJwHXdAEQtM9
          source_id: s_E5GUPXQtutM8KGwkNMz9LJ
          stance: supports
          locator: CBDB:497010
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

# 王顯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顯 | accepted |
| bio.summary | 王顯，明人物。入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 497010） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王顯（CBDB 497010）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497010&o=json)

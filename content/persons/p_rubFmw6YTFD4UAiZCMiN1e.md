---
schema: wang-person/v1
id: p_rubFmw6YTFD4UAiZCMiN1e
status: active
merged_into: null
display_name: 王與
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cix5QKHcDp5C5XLLuV4Ds8
        subject_person_id: p_rubFmw6YTFD4UAiZCMiN1e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王與
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8uyC4S65fMhCeCg7XbPLHX
          claim_id: c_cix5QKHcDp5C5XLLuV4Ds8
          source_id: s_AvGR91bBDZqiWXzsPRi3HH
          stance: supports
          locator: CBDB:640026
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640026）
          source: &a1
            id: s_AvGR91bBDZqiWXzsPRi3HH
            source_type: api_record
            title: 中国历代人物传记资料库：王與（CBDB 640026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640026&o=json
            external_identifier: CBDB:640026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.010Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CARKwGVGtPQJ13EgtenQEM
        subject_person_id: p_rubFmw6YTFD4UAiZCMiN1e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王與，清人物。籍贯淮安府，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640026）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wrNZdP6DpmVjpqn827qfEN
          claim_id: c_CARKwGVGtPQJ13EgtenQEM
          source_id: s_AvGR91bBDZqiWXzsPRi3HH
          stance: supports
          locator: CBDB:640026
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

# 王與

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王與 | accepted |
| bio.summary | 王與，清人物。籍贯淮安府，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640026） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王與（CBDB 640026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640026&o=json)

---
schema: wang-person/v1
id: p_FauoTUzHCAHcwE8trjPJxj
status: active
merged_into: null
display_name: 王人驥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h8LpanV5ZbxaU7JjqyRsbC
        subject_person_id: p_FauoTUzHCAHcwE8trjPJxj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王人驥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JNu6YGYPC8YyzDSqSwEP7b
          claim_id: c_h8LpanV5ZbxaU7JjqyRsbC
          source_id: s_NwaELALoa7b2cHtCEDXvMS
          stance: supports
          locator: CBDB:635875
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635875）
          source: &a1
            id: s_NwaELALoa7b2cHtCEDXvMS
            source_type: api_record
            title: 中国历代人物传记资料库：王人驥（CBDB 635875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635875&o=json
            external_identifier: CBDB:635875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.043Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_28YeS6AvikiX1Cxa11DdBX
        subject_person_id: p_FauoTUzHCAHcwE8trjPJxj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王人驥，清人物。籍贯龍溪，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 635875）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dbOSk0EApbOC-NqfEycUT4
          claim_id: c_28YeS6AvikiX1Cxa11DdBX
          source_id: s_NwaELALoa7b2cHtCEDXvMS
          stance: supports
          locator: CBDB:635875
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

# 王人驥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王人驥 | accepted |
| bio.summary | 王人驥，清人物。籍贯龍溪，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 635875） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王人驥（CBDB 635875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635875&o=json)

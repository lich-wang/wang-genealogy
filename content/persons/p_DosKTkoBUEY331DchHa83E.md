---
schema: wang-person/v1
id: p_DosKTkoBUEY331DchHa83E
status: active
merged_into: null
display_name: 王廷銘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DZV3sHybqY5RyNbGFcjpn4
        subject_person_id: p_DosKTkoBUEY331DchHa83E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷銘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MAsiLD49XCJgdzzR3E1QNU
          claim_id: c_DZV3sHybqY5RyNbGFcjpn4
          source_id: s_Q4KuxUiFzQDsmg1jAHVNqc
          stance: supports
          locator: CBDB:637570
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637570）
          source: &a1
            id: s_Q4KuxUiFzQDsmg1jAHVNqc
            source_type: api_record
            title: 中国历代人物传记资料库：王廷銘（CBDB 637570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637570&o=json
            external_identifier: CBDB:637570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.357Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7u16cf3fCw7t6sfADXvzfb
        subject_person_id: p_DosKTkoBUEY331DchHa83E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷銘，清人物。籍贯大定府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 637570）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kSn59-VJSbCz7C6FcB3Aa4
          claim_id: c_7u16cf3fCw7t6sfADXvzfb
          source_id: s_Q4KuxUiFzQDsmg1jAHVNqc
          stance: supports
          locator: CBDB:637570
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

# 王廷銘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷銘 | accepted |
| bio.summary | 王廷銘，清人物。籍贯大定府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 637570） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷銘（CBDB 637570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637570&o=json)

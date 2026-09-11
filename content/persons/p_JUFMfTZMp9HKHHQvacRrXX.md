---
schema: wang-person/v1
id: p_JUFMfTZMp9HKHHQvacRrXX
status: active
merged_into: null
display_name: 王廷賡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RADSYPQg6ZfqJU45kwNXe5
        subject_person_id: p_JUFMfTZMp9HKHHQvacRrXX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷賡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xC3CQurZT3Vg1NSf38owNG
          claim_id: c_RADSYPQg6ZfqJU45kwNXe5
          source_id: s_MoMKqJTghPdeaAH9dCC4M3
          stance: supports
          locator: CBDB:637565
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637565）
          source: &a1
            id: s_MoMKqJTghPdeaAH9dCC4M3
            source_type: api_record
            title: 中国历代人物传记资料库：王廷賡（CBDB 637565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637565&o=json
            external_identifier: CBDB:637565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.357Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uKJ7WwDQPSs4BtBEDMXSLj
        subject_person_id: p_JUFMfTZMp9HKHHQvacRrXX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷賡，清人物。籍贯潼川府，入仕鄉貢舉人，曾任學正、復設教諭。（中国历代人物传记资料库 CBDB 637565）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fbWCYXvBngKhVrWZyOj5Qp
          claim_id: c_uKJ7WwDQPSs4BtBEDMXSLj
          source_id: s_MoMKqJTghPdeaAH9dCC4M3
          stance: supports
          locator: CBDB:637565
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

# 王廷賡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷賡 | accepted |
| bio.summary | 王廷賡，清人物。籍贯潼川府，入仕鄉貢舉人，曾任學正、復設教諭。（中国历代人物传记资料库 CBDB 637565） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷賡（CBDB 637565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637565&o=json)

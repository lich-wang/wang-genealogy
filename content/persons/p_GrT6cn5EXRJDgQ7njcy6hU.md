---
schema: wang-person/v1
id: p_GrT6cn5EXRJDgQ7njcy6hU
status: active
merged_into: null
display_name: 王俊愫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gkLNUB7J5AgDgn68EAdsx7
        subject_person_id: p_GrT6cn5EXRJDgQ7njcy6hU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊愫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WPAVfWxowGNK6fKmgyf7CX
          claim_id: c_gkLNUB7J5AgDgn68EAdsx7
          source_id: s_h9HR6Twwke5BXj9N87ecMo
          stance: supports
          locator: CBDB:636102
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636102）
          source: &a1
            id: s_h9HR6Twwke5BXj9N87ecMo
            source_type: api_record
            title: 中国历代人物传记资料库：王俊愫（CBDB 636102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636102&o=json
            external_identifier: CBDB:636102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.889Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RAjaHVXcjphgC6qV62iRrT
        subject_person_id: p_GrT6cn5EXRJDgQ7njcy6hU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊愫，清人物。籍贯開封府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 636102）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d6yyE-sB0JJRJS5dCNZEhh
          claim_id: c_RAjaHVXcjphgC6qV62iRrT
          source_id: s_h9HR6Twwke5BXj9N87ecMo
          stance: supports
          locator: CBDB:636102
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

# 王俊愫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊愫 | accepted |
| bio.summary | 王俊愫，清人物。籍贯開封府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 636102） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王俊愫（CBDB 636102）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636102&o=json)

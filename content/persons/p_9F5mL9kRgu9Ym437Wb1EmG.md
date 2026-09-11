---
schema: wang-person/v1
id: p_9F5mL9kRgu9Ym437Wb1EmG
status: active
merged_into: null
display_name: 王廷蘭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FZm4Nu4VvmnD1jGYeL8cxi
        subject_person_id: p_9F5mL9kRgu9Ym437Wb1EmG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ur4XRBDQzieg1ykEaxoxYr
          claim_id: c_FZm4Nu4VvmnD1jGYeL8cxi
          source_id: s_Vh5xm8dWrPfNNJpha6uNRJ
          stance: supports
          locator: CBDB:637558
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637558）
          source: &a1
            id: s_Vh5xm8dWrPfNNJpha6uNRJ
            source_type: api_record
            title: 中国历代人物传记资料库：王廷蘭（CBDB 637558）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637558&o=json
            external_identifier: CBDB:637558
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.447Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Aqm5ygw3hULL2hceeYZXgP
        subject_person_id: p_9F5mL9kRgu9Ym437Wb1EmG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷蘭，清人物。籍贯萊州府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 637558）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pl5etqT3gQcpS5xA2JIlhC
          claim_id: c_Aqm5ygw3hULL2hceeYZXgP
          source_id: s_Vh5xm8dWrPfNNJpha6uNRJ
          stance: supports
          locator: CBDB:637558
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

# 王廷蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷蘭 | accepted |
| bio.summary | 王廷蘭，清人物。籍贯萊州府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 637558） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷蘭（CBDB 637558）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637558&o=json)

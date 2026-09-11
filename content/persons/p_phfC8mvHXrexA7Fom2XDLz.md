---
schema: wang-person/v1
id: p_phfC8mvHXrexA7Fom2XDLz
status: active
merged_into: null
display_name: 王宗堯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ohDa8w53S8J78Hd5XhNmFX
        subject_person_id: p_phfC8mvHXrexA7Fom2XDLz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗堯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MJmC2BfLvj3apDHijoXcBk
          claim_id: c_ohDa8w53S8J78Hd5XhNmFX
          source_id: s_9UbewRuqDjCwoYjELFWBT2
          stance: supports
          locator: CBDB:637097
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637097）
          source: &a1
            id: s_9UbewRuqDjCwoYjELFWBT2
            source_type: api_record
            title: 中国历代人物传记资料库：王宗堯（CBDB 637097）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637097&o=json
            external_identifier: CBDB:637097
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.336Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6BicVjG8E23zgMN9tcdsp7
        subject_person_id: p_phfC8mvHXrexA7Fom2XDLz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗堯，清人物。籍贯彰德府，入仕附貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 637097）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CPWXiRV8yrde0YwGDs1LjI
          claim_id: c_6BicVjG8E23zgMN9tcdsp7
          source_id: s_9UbewRuqDjCwoYjELFWBT2
          stance: supports
          locator: CBDB:637097
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

# 王宗堯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗堯 | accepted |
| bio.summary | 王宗堯，清人物。籍贯彰德府，入仕附貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 637097） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗堯（CBDB 637097）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637097&o=json)

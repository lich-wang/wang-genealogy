---
schema: wang-person/v1
id: p_4QN77QBkH4AmxwRMhDjUn8
status: active
merged_into: null
display_name: 王道庥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WCcomCHuviHZjNREe8yY9M
        subject_person_id: p_4QN77QBkH4AmxwRMhDjUn8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道庥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YS9BSJDbK6ZfHtBtadY85P
          claim_id: c_WCcomCHuviHZjNREe8yY9M
          source_id: s_KUeYckahAiXk41pW4fed86
          stance: supports
          locator: CBDB:640452
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640452）
          source: &a1
            id: s_KUeYckahAiXk41pW4fed86
            source_type: api_record
            title: 中国历代人物传记资料库：王道庥（CBDB 640452）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640452&o=json
            external_identifier: CBDB:640452
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.265Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rE3sb3pGu9NrkQuHLw3LtU
        subject_person_id: p_4QN77QBkH4AmxwRMhDjUn8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道庥，清人物。籍贯順天府，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640452）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0QQMmbZXQ_0EOaWK9XjkA9
          claim_id: c_rE3sb3pGu9NrkQuHLw3LtU
          source_id: s_KUeYckahAiXk41pW4fed86
          stance: supports
          locator: CBDB:640452
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

# 王道庥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道庥 | accepted |
| bio.summary | 王道庥，清人物。籍贯順天府，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640452） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道庥（CBDB 640452）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640452&o=json)

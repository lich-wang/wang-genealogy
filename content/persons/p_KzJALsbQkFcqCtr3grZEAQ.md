---
schema: wang-person/v1
id: p_KzJALsbQkFcqCtr3grZEAQ
status: active
merged_into: null
display_name: 王宗武
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SYtvVMhLFaDqDJhayFCRyz
        subject_person_id: p_KzJALsbQkFcqCtr3grZEAQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗武
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ji6PAd9gLKNHp18rMphDdy
          claim_id: c_SYtvVMhLFaDqDJhayFCRyz
          source_id: s_JfAwyZE8YEXcW4LUBYzhiq
          stance: supports
          locator: CBDB:317700
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（317700）
          source: &a1
            id: s_JfAwyZE8YEXcW4LUBYzhiq
            source_type: api_record
            title: 中国历代人物传记资料库：王宗武（CBDB 317700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317700&o=json
            external_identifier: CBDB:317700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.981Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xXnyxhLq4vJ5zc2xDbkfUK
        subject_person_id: p_KzJALsbQkFcqCtr3grZEAQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗武，明人物。嘉靖三十二年進士，籍贯聞喜。（中国历代人物传记资料库 CBDB 317700）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0Ih78QqMfGbfkPgvBk9W7V
          claim_id: c_xXnyxhLq4vJ5zc2xDbkfUK
          source_id: s_JfAwyZE8YEXcW4LUBYzhiq
          stance: supports
          locator: CBDB:317700
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

# 王宗武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗武 | accepted |
| bio.summary | 王宗武，明人物。嘉靖三十二年進士，籍贯聞喜。（中国历代人物传记资料库 CBDB 317700） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗武（CBDB 317700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317700&o=json)

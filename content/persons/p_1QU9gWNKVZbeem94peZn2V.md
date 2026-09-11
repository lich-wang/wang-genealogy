---
schema: wang-person/v1
id: p_1QU9gWNKVZbeem94peZn2V
status: active
merged_into: null
display_name: 王懿德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SqgJEVHA7RSF4RxUK3wTPP
        subject_person_id: p_1QU9gWNKVZbeem94peZn2V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懿德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2VMPizW7zqRyAQXZHNowxH
          claim_id: c_SqgJEVHA7RSF4RxUK3wTPP
          source_id: s_6nxB1YYD5x64DAFS69WTkp
          stance: supports
          locator: CBDB:57221
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57221）
          source: &a1
            id: s_6nxB1YYD5x64DAFS69WTkp
            source_type: api_record
            title: 中国历代人物传记资料库：王懿德（CBDB 57221）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57221&o=json
            external_identifier: CBDB:57221
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.809Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GNEzvZYairdKgHFSPHHS5q
        subject_person_id: p_1QU9gWNKVZbeem94peZn2V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懿德，清人物。明清進士進士，籍贯漢軍正白旗，入仕進士，曾任按察使、編修、關監督。（中国历代人物传记资料库 CBDB 57221）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cL8mno5dfnJt0uQZIc8uOy
          claim_id: c_GNEzvZYairdKgHFSPHHS5q
          source_id: s_6nxB1YYD5x64DAFS69WTkp
          stance: supports
          locator: CBDB:57221
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

# 王懿德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懿德 | accepted |
| bio.summary | 王懿德，清人物。明清進士進士，籍贯漢軍正白旗，入仕進士，曾任按察使、編修、關監督。（中国历代人物传记资料库 CBDB 57221） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懿德（CBDB 57221）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57221&o=json)

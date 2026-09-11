---
schema: wang-person/v1
id: p_EF2HHAbsQUutJSULR7TGyf
status: active
merged_into: null
display_name: 王得釗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_apBNo3G6HSYs9HwshxYM8X
        subject_person_id: p_EF2HHAbsQUutJSULR7TGyf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得釗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UnT74E7i18PUf35qMD9EQP
          claim_id: c_apBNo3G6HSYs9HwshxYM8X
          source_id: s_e1hrHtuNKGGdk57jTmHiom
          stance: supports
          locator: CBDB:637651
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637651）
          source: &a1
            id: s_e1hrHtuNKGGdk57jTmHiom
            source_type: api_record
            title: 中国历代人物传记资料库：王得釗（CBDB 637651）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637651&o=json
            external_identifier: CBDB:637651
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.384Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PwrLvfiwCXCCkFRjdq51as
        subject_person_id: p_EF2HHAbsQUutJSULR7TGyf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得釗，清人物。籍贯武威，入仕鄉貢舉人，曾任學正、復設訓導。（中国历代人物传记资料库 CBDB 637651）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5B6pk4MKcw1DVDjcAIEM9Y
          claim_id: c_PwrLvfiwCXCCkFRjdq51as
          source_id: s_e1hrHtuNKGGdk57jTmHiom
          stance: supports
          locator: CBDB:637651
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

# 王得釗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王得釗 | accepted |
| bio.summary | 王得釗，清人物。籍贯武威，入仕鄉貢舉人，曾任學正、復設訓導。（中国历代人物传记资料库 CBDB 637651） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王得釗（CBDB 637651）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637651&o=json)

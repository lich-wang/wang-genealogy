---
schema: wang-person/v1
id: p_wbSqwkcacDo6kF5YEgZC7W
status: active
merged_into: null
display_name: 王士棻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RFfwm65W4eub3hH1J5nw7L
        subject_person_id: p_wbSqwkcacDo6kF5YEgZC7W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士棻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Cgn16gZBE166KK4vaxj3nE
          claim_id: c_RFfwm65W4eub3hH1J5nw7L
          source_id: s_Mq7dx8A1KfN78h58vHuik2
          stance: supports
          locator: CBDB:342939
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342939）
          source: &a1
            id: s_Mq7dx8A1KfN78h58vHuik2
            source_type: api_record
            title: 中国历代人物传记资料库：王士棻（CBDB 342939）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342939&o=json
            external_identifier: CBDB:342939
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.135Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_syEd6CjgPqxgU4TU64JGPk
        subject_person_id: p_wbSqwkcacDo6kF5YEgZC7W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士棻，清人物。明清進士進士，籍贯華州，入仕進士，曾任鄉試考官、刑部郎中、刑部員外郎。（中国历代人物传记资料库 CBDB 342939）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tQWbtFfAIDiK1n4NrqLzUr
          claim_id: c_syEd6CjgPqxgU4TU64JGPk
          source_id: s_Mq7dx8A1KfN78h58vHuik2
          stance: supports
          locator: CBDB:342939
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

# 王士棻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士棻 | accepted |
| bio.summary | 王士棻，清人物。明清進士進士，籍贯華州，入仕進士，曾任鄉試考官、刑部郎中、刑部員外郎。（中国历代人物传记资料库 CBDB 342939） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士棻（CBDB 342939）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342939&o=json)

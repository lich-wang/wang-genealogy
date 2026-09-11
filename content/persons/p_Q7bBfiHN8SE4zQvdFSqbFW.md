---
schema: wang-person/v1
id: p_Q7bBfiHN8SE4zQvdFSqbFW
status: active
merged_into: null
display_name: 王步堂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rXufRWkAnnAkWybjVn1HBF
        subject_person_id: p_Q7bBfiHN8SE4zQvdFSqbFW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王步堂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3oqSVgU9sY2qm8kHor7KH6
          claim_id: c_rXufRWkAnnAkWybjVn1HBF
          source_id: s_qiMy8ELw8LFg4mH4EMMN49
          stance: supports
          locator: CBDB:638907
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638907）
          source: &a1
            id: s_qiMy8ELw8LFg4mH4EMMN49
            source_type: api_record
            title: 中国历代人物传记资料库：王步堂（CBDB 638907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638907&o=json
            external_identifier: CBDB:638907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.784Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2ZBtuMYX6WwrBfY8AF3NVU
        subject_person_id: p_Q7bBfiHN8SE4zQvdFSqbFW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王步堂，清人物。籍贯臨安，曾任復設訓導。（中国历代人物传记资料库 CBDB 638907）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OW3db3cdVXAammI2U0Jai1
          claim_id: c_2ZBtuMYX6WwrBfY8AF3NVU
          source_id: s_qiMy8ELw8LFg4mH4EMMN49
          stance: supports
          locator: CBDB:638907
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

# 王步堂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王步堂 | accepted |
| bio.summary | 王步堂，清人物。籍贯臨安，曾任復設訓導。（中国历代人物传记资料库 CBDB 638907） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王步堂（CBDB 638907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638907&o=json)

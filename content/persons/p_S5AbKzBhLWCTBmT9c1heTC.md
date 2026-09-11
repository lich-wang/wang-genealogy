---
schema: wang-person/v1
id: p_S5AbKzBhLWCTBmT9c1heTC
status: active
merged_into: null
display_name: 王簡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y48Rkd74BDAtZ1FuD1kd6N
        subject_person_id: p_S5AbKzBhLWCTBmT9c1heTC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王簡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VErNThP7KGNax3K22Nge65
          claim_id: c_y48Rkd74BDAtZ1FuD1kd6N
          source_id: s_X15452quXqBUcqNkoLNPMS
          stance: supports
          locator: CBDB:45818
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45818）
          source: &a1
            id: s_X15452quXqBUcqNkoLNPMS
            source_type: api_record
            title: 中国历代人物传记资料库：王簡（CBDB 45818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45818&o=json
            external_identifier: CBDB:45818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.668Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NpfC5ePRXWd8qSehtx9kif
        subject_person_id: p_S5AbKzBhLWCTBmT9c1heTC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王簡，宋人物。曾任太常寺博士、尚書省工部屯田司員外郎。（中国历代人物传记资料库 CBDB 45818）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_y5vVsiiBItZyfEw7E5-Z6Y
          claim_id: c_NpfC5ePRXWd8qSehtx9kif
          source_id: s_X15452quXqBUcqNkoLNPMS
          stance: supports
          locator: CBDB:45818
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

# 王簡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王簡 | accepted |
| bio.summary | 王簡，宋人物。曾任太常寺博士、尚書省工部屯田司員外郎。（中国历代人物传记资料库 CBDB 45818） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王簡（CBDB 45818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45818&o=json)

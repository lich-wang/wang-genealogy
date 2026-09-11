---
schema: wang-person/v1
id: p_MDf6on8Pi5wK6F7ZdR4rdc
status: active
merged_into: null
display_name: 王正民
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LCyQUf9JteJEXm9vDhXAqL
        subject_person_id: p_MDf6on8Pi5wK6F7ZdR4rdc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QCks7HB8EYGvq97QUkckgZ
          claim_id: c_LCyQUf9JteJEXm9vDhXAqL
          source_id: s_BwqUsHgPQ3kJ4q95tN8Cwb
          stance: supports
          locator: CBDB:38391
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38391）
          source: &a1
            id: s_BwqUsHgPQ3kJ4q95tN8Cwb
            source_type: api_record
            title: 中国历代人物传记资料库：王正民（CBDB 38391）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38391&o=json
            external_identifier: CBDB:38391
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.448Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fAXtGrJNrF2YPCoeDr42ET
        subject_person_id: p_MDf6on8Pi5wK6F7ZdR4rdc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正民，宋人物。曾任尚書省工部虞部司員外郎。（中国历代人物传记资料库 CBDB 38391）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vvUmlL_jytx2lXkeZcy86x
          claim_id: c_fAXtGrJNrF2YPCoeDr42ET
          source_id: s_BwqUsHgPQ3kJ4q95tN8Cwb
          stance: supports
          locator: CBDB:38391
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

# 王正民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正民 | accepted |
| bio.summary | 王正民，宋人物。曾任尚書省工部虞部司員外郎。（中国历代人物传记资料库 CBDB 38391） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正民（CBDB 38391）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38391&o=json)

---
schema: wang-person/v1
id: p_KHzQ7wdhC6yqwPUoW3rRLC
status: active
merged_into: null
display_name: 王祚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rv6fnNzwJ2NVqhrX6NM8vx
        subject_person_id: p_KHzQ7wdhC6yqwPUoW3rRLC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3Q5xGgcPHLyXgZfNUVPiLU
          claim_id: c_rv6fnNzwJ2NVqhrX6NM8vx
          source_id: s_ub5HJuZFGK7t2fsWrbqTeU
          stance: supports
          locator: CBDB:457327
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（457327）
          source: &a1
            id: s_ub5HJuZFGK7t2fsWrbqTeU
            source_type: api_record
            title: 中国历代人物传记资料库：王祚（CBDB 457327）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=457327&o=json
            external_identifier: CBDB:457327
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.603Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TBpfJfn4DAhDMU6tWPvSfH
        subject_person_id: p_KHzQ7wdhC6yqwPUoW3rRLC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚，清人物。曾任守備。（中国历代人物传记资料库 CBDB 457327）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Dvr1aUss7io588XGN7fpqa
          claim_id: c_TBpfJfn4DAhDMU6tWPvSfH
          source_id: s_ub5HJuZFGK7t2fsWrbqTeU
          stance: supports
          locator: CBDB:457327
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

# 王祚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祚 | accepted |
| bio.summary | 王祚，清人物。曾任守備。（中国历代人物传记资料库 CBDB 457327） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祚（CBDB 457327）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=457327&o=json)

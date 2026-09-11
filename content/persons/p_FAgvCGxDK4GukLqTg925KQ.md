---
schema: wang-person/v1
id: p_FAgvCGxDK4GukLqTg925KQ
status: active
merged_into: null
display_name: 王魁元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WytHfmMyeLDdFwR6Mhum43
        subject_person_id: p_FAgvCGxDK4GukLqTg925KQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王魁元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B4WJLFLjLXGJBf955gksVf
          claim_id: c_WytHfmMyeLDdFwR6Mhum43
          source_id: s_tSTAVh56jQCzTsDa2WQwBo
          stance: supports
          locator: CBDB:467149
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（467149）
          source: &a1
            id: s_tSTAVh56jQCzTsDa2WQwBo
            source_type: api_record
            title: 中国历代人物传记资料库：王魁元（CBDB 467149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467149&o=json
            external_identifier: CBDB:467149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.003Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GaM81DMpQFcAaVPBhQcTbs
        subject_person_id: p_FAgvCGxDK4GukLqTg925KQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王魁元，清人物。曾任把總。（中国历代人物传记资料库 CBDB 467149）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gZ47NKxkgzEXavH6YhMffv
          claim_id: c_GaM81DMpQFcAaVPBhQcTbs
          source_id: s_tSTAVh56jQCzTsDa2WQwBo
          stance: supports
          locator: CBDB:467149
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

# 王魁元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王魁元 | accepted |
| bio.summary | 王魁元，清人物。曾任把總。（中国历代人物传记资料库 CBDB 467149） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王魁元（CBDB 467149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467149&o=json)

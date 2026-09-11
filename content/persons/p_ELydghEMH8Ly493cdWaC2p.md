---
schema: wang-person/v1
id: p_ELydghEMH8Ly493cdWaC2p
status: active
merged_into: null
display_name: 王全
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PjrsCPHa7DyV8xMWYr3LwF
        subject_person_id: p_ELydghEMH8Ly493cdWaC2p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王全
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_76mb94Bn5Twg6w92tYaCuH
          claim_id: c_PjrsCPHa7DyV8xMWYr3LwF
          source_id: s_4zbfQ94DP2gxntkvXC8LmJ
          stance: supports
          locator: CBDB:687948
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（687948）
          source: &a1
            id: s_4zbfQ94DP2gxntkvXC8LmJ
            source_type: api_record
            title: 中国历代人物传记资料库：王全（CBDB 687948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687948&o=json
            external_identifier: CBDB:687948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.469Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9X6r8maqS9qPJMJQSDJ8PH
        subject_person_id: p_ELydghEMH8Ly493cdWaC2p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王全，宋人物。籍贯耀州，入仕進士。（中国历代人物传记资料库 CBDB 687948）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RpWMqmQxHav8Cz1QJSQJRa
          claim_id: c_9X6r8maqS9qPJMJQSDJ8PH
          source_id: s_4zbfQ94DP2gxntkvXC8LmJ
          stance: supports
          locator: CBDB:687948
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

# 王全

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王全 | accepted |
| bio.summary | 王全，宋人物。籍贯耀州，入仕進士。（中国历代人物传记资料库 CBDB 687948） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王全（CBDB 687948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687948&o=json)

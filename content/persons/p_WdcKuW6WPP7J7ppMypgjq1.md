---
schema: wang-person/v1
id: p_WdcKuW6WPP7J7ppMypgjq1
status: active
merged_into: null
display_name: 王和齡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nPH2n3aGmKj5QB84AGqRup
        subject_person_id: p_WdcKuW6WPP7J7ppMypgjq1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LDDNoXkMQFT7v2JzSsLUiL
          claim_id: c_nPH2n3aGmKj5QB84AGqRup
          source_id: s_z1VzusF9sREfNoWcJ49pa8
          stance: supports
          locator: CBDB:636533
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636533）
          source: &a1
            id: s_z1VzusF9sREfNoWcJ49pa8
            source_type: api_record
            title: 中国历代人物传记资料库：王和齡（CBDB 636533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636533&o=json
            external_identifier: CBDB:636533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.022Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WJUq8BHzB6yMJq8kn31Fxi
        subject_person_id: p_WdcKuW6WPP7J7ppMypgjq1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和齡，清人物。籍贯膠州，入仕進士，曾任中軍守備。（中国历代人物传记资料库 CBDB 636533）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PxvZnqeYh7ilhJdVqBSE4v
          claim_id: c_WJUq8BHzB6yMJq8kn31Fxi
          source_id: s_z1VzusF9sREfNoWcJ49pa8
          stance: supports
          locator: CBDB:636533
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

# 王和齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王和齡 | accepted |
| bio.summary | 王和齡，清人物。籍贯膠州，入仕進士，曾任中軍守備。（中国历代人物传记资料库 CBDB 636533） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王和齡（CBDB 636533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636533&o=json)

---
schema: wang-person/v1
id: p_cqVQeTfotQQ3jAHQjaA88X
status: active
merged_into: null
display_name: 王𠅤亮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Bjn412nD9o1vhkJDsXYdYU
        subject_person_id: p_cqVQeTfotQQ3jAHQjaA88X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王𠅤亮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3TQTKrfzHcsL2DoBuLotoJ
          claim_id: c_Bjn412nD9o1vhkJDsXYdYU
          source_id: s_8Dig4B69S99Zw4bVbK1R63
          stance: supports
          locator: CBDB:641060
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（641060）
          source: &a1
            id: s_8Dig4B69S99Zw4bVbK1R63
            source_type: api_record
            title: 中国历代人物传记资料库：王𠅤亮（CBDB 641060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641060&o=json
            external_identifier: CBDB:641060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.454Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QUHGqANL5x1GCaH6UuVLT2
        subject_person_id: p_cqVQeTfotQQ3jAHQjaA88X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王𠅤亮，清人物。籍贯撫州府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 641060）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hk2FeoKEM7T6q5bXPrEDdF
          claim_id: c_QUHGqANL5x1GCaH6UuVLT2
          source_id: s_8Dig4B69S99Zw4bVbK1R63
          stance: supports
          locator: CBDB:641060
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

# 王𠅤亮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王𠅤亮 | accepted |
| bio.summary | 王𠅤亮，清人物。籍贯撫州府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 641060） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王𠅤亮（CBDB 641060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641060&o=json)

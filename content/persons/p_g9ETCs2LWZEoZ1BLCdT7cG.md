---
schema: wang-person/v1
id: p_g9ETCs2LWZEoZ1BLCdT7cG
status: active
merged_into: null
display_name: 王昱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c1SYwiVL27wDzUaA5bwnAg
        subject_person_id: p_g9ETCs2LWZEoZ1BLCdT7cG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wQkpuJ6UgvaXN4d81odCfK
          claim_id: c_c1SYwiVL27wDzUaA5bwnAg
          source_id: s_vrh45sBiTzNsTgVVTuuXcf
          stance: supports
          locator: CBDB:268962
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（268962）
          source: &a1
            id: s_vrh45sBiTzNsTgVVTuuXcf
            source_type: api_record
            title: 中国历代人物传记资料库：王昱（CBDB 268962）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268962&o=json
            external_identifier: CBDB:268962
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.802Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sWdM9M8mKuvwo9g5zQ8eGx
        subject_person_id: p_g9ETCs2LWZEoZ1BLCdT7cG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昱，明人物。弘治九年進士，籍贯侯官。（中国历代人物传记资料库 CBDB 268962）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-5WB0-xbwXhV9Pqqg2axyx
          claim_id: c_sWdM9M8mKuvwo9g5zQ8eGx
          source_id: s_vrh45sBiTzNsTgVVTuuXcf
          stance: supports
          locator: CBDB:268962
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

# 王昱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昱 | accepted |
| bio.summary | 王昱，明人物。弘治九年進士，籍贯侯官。（中国历代人物传记资料库 CBDB 268962） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昱（CBDB 268962）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268962&o=json)

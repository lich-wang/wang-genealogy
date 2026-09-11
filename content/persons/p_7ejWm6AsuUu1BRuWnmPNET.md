---
schema: wang-person/v1
id: p_7ejWm6AsuUu1BRuWnmPNET
status: active
merged_into: null
display_name: 王軾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o2fCLQ9uDhRw2zjic78a2W
        subject_person_id: p_7ejWm6AsuUu1BRuWnmPNET
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MwMt1mhEWKTTg4F2KC7FKr
          claim_id: c_o2fCLQ9uDhRw2zjic78a2W
          source_id: s_Bd1AeXdisN38iLQfwRiWzp
          stance: supports
          locator: CBDB:330016
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（330016）
          source: &a1
            id: s_Bd1AeXdisN38iLQfwRiWzp
            source_type: api_record
            title: 中国历代人物传记资料库：王軾（CBDB 330016）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330016&o=json
            external_identifier: CBDB:330016
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.346Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r87reZUav4m4HLY4xPU3ap
        subject_person_id: p_7ejWm6AsuUu1BRuWnmPNET
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軾，明人物。嘉靖四十四年進士，籍贯清苑。（中国历代人物传记资料库 CBDB 330016）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KPKc6k6qkcNvnJslkuBcV2
          claim_id: c_r87reZUav4m4HLY4xPU3ap
          source_id: s_Bd1AeXdisN38iLQfwRiWzp
          stance: supports
          locator: CBDB:330016
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

# 王軾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王軾 | accepted |
| bio.summary | 王軾，明人物。嘉靖四十四年進士，籍贯清苑。（中国历代人物传记资料库 CBDB 330016） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王軾（CBDB 330016）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330016&o=json)

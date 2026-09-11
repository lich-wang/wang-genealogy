---
schema: wang-person/v1
id: p_uGQAA3NcHBZ1SAjHX1gdm5
status: active
merged_into: null
display_name: 王化
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dYWu5PWFYZA6PZ4A9XCz86
        subject_person_id: p_uGQAA3NcHBZ1SAjHX1gdm5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qXcAf9SUUFsaA6f3TejF5y
          claim_id: c_dYWu5PWFYZA6PZ4A9XCz86
          source_id: s_M3gt94ueNHox6JgdM7qKkT
          stance: supports
          locator: CBDB:488180
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（488180）
          source: &a1
            id: s_M3gt94ueNHox6JgdM7qKkT
            source_type: api_record
            title: 中国历代人物传记资料库：王化（CBDB 488180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488180&o=json
            external_identifier: CBDB:488180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.983Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aVwBNVB16RwQTKKiRrHQ87
        subject_person_id: p_uGQAA3NcHBZ1SAjHX1gdm5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化，明人物。入仕考上會試/貢士，曾任訓導。（中国历代人物传记资料库 CBDB 488180）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sIM8CpsxgJD_3lhHL_wW0h
          claim_id: c_aVwBNVB16RwQTKKiRrHQ87
          source_id: s_M3gt94ueNHox6JgdM7qKkT
          stance: supports
          locator: CBDB:488180
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

# 王化

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王化 | accepted |
| bio.summary | 王化，明人物。入仕考上會試/貢士，曾任訓導。（中国历代人物传记资料库 CBDB 488180） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王化（CBDB 488180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488180&o=json)

---
schema: wang-person/v1
id: p_mf3Ad5AoYu6WAUA5Ybv9Vu
status: active
merged_into: null
display_name: 王國禎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nYudMfiYEEUufcxdhYsn7J
        subject_person_id: p_mf3Ad5AoYu6WAUA5Ybv9Vu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國禎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GiCjPx5nmugYHEHwUH43iE
          claim_id: c_nYudMfiYEEUufcxdhYsn7J
          source_id: s_HVhmLPri25PXMbQyk4WX29
          stance: supports
          locator: CBDB:343432
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343432）
          source: &a1
            id: s_HVhmLPri25PXMbQyk4WX29
            source_type: api_record
            title: 中国历代人物传记资料库：王國禎（CBDB 343432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343432&o=json
            external_identifier: CBDB:343432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.347Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KV3nijHP3hyHaBdriCE5tW
        subject_person_id: p_mf3Ad5AoYu6WAUA5Ybv9Vu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國禎，明人物。明清進士進士，籍贯咸寧，入仕進士。（中国历代人物传记资料库 CBDB 343432）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zPTKjz0D7gLpBqe8o1gb2F
          claim_id: c_KV3nijHP3hyHaBdriCE5tW
          source_id: s_HVhmLPri25PXMbQyk4WX29
          stance: supports
          locator: CBDB:343432
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

# 王國禎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國禎 | accepted |
| bio.summary | 王國禎，明人物。明清進士進士，籍贯咸寧，入仕進士。（中国历代人物传记资料库 CBDB 343432） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國禎（CBDB 343432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343432&o=json)

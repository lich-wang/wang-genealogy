---
schema: wang-person/v1
id: p_3niFbtKDGKwmowLj53jzda
status: active
merged_into: null
display_name: 王化光
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_efK9LAtcpkFxngZuaJo4by
        subject_person_id: p_3niFbtKDGKwmowLj53jzda
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5Yd9R8T4gUC16neCkpMoQR
          claim_id: c_efK9LAtcpkFxngZuaJo4by
          source_id: s_oa4sNTK3QMBHCp8w2zKooW
          stance: supports
          locator: CBDB:342290
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342290）
          source: &a1
            id: s_oa4sNTK3QMBHCp8w2zKooW
            source_type: api_record
            title: 中国历代人物传记资料库：王化光（CBDB 342290）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342290&o=json
            external_identifier: CBDB:342290
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n2uTsvnCJMZkqmZE1D3LqF
        subject_person_id: p_3niFbtKDGKwmowLj53jzda
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化光，清人物。明清進士進士，籍贯臨晉，入仕進士。（中国历代人物传记资料库 CBDB 342290）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_05OguGoe2ahrA6RYK0qxaf
          claim_id: c_n2uTsvnCJMZkqmZE1D3LqF
          source_id: s_oa4sNTK3QMBHCp8w2zKooW
          stance: supports
          locator: CBDB:342290
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

# 王化光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王化光 | accepted |
| bio.summary | 王化光，清人物。明清進士進士，籍贯臨晉，入仕進士。（中国历代人物传记资料库 CBDB 342290） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王化光（CBDB 342290）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342290&o=json)

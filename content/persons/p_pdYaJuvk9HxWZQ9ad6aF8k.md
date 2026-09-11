---
schema: wang-person/v1
id: p_pdYaJuvk9HxWZQ9ad6aF8k
status: active
merged_into: null
display_name: 王曦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E1H92KVXUNxS4Sg4GwPtDM
        subject_person_id: p_pdYaJuvk9HxWZQ9ad6aF8k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PPjoLZJnMC7FyK9gjz6yTS
          claim_id: c_E1H92KVXUNxS4Sg4GwPtDM
          source_id: s_eBC8mLyT7FpeDpG5VSHCfG
          stance: supports
          locator: CBDB:280922
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280922）
          source: &a1
            id: s_eBC8mLyT7FpeDpG5VSHCfG
            source_type: api_record
            title: 中国历代人物传记资料库：王曦（CBDB 280922）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280922&o=json
            external_identifier: CBDB:280922
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.029Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eqkzVgDDTym36e3939kYuN
        subject_person_id: p_pdYaJuvk9HxWZQ9ad6aF8k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曦，明人物。正德十二年進士，籍贯句容。（中国历代人物传记资料库 CBDB 280922）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VyAGbUhsSwNGkWlQ8L8QE1
          claim_id: c_eqkzVgDDTym36e3939kYuN
          source_id: s_eBC8mLyT7FpeDpG5VSHCfG
          stance: supports
          locator: CBDB:280922
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

# 王曦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曦 | accepted |
| bio.summary | 王曦，明人物。正德十二年進士，籍贯句容。（中国历代人物传记资料库 CBDB 280922） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王曦（CBDB 280922）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280922&o=json)

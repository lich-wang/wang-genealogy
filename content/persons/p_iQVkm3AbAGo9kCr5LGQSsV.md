---
schema: wang-person/v1
id: p_iQVkm3AbAGo9kCr5LGQSsV
status: active
merged_into: null
display_name: 王教
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ubc1CVkfoVr4HHwKsZ21UM
        subject_person_id: p_iQVkm3AbAGo9kCr5LGQSsV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王教
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dNx6m97sgmcPKReGxcBwR8
          claim_id: c_ubc1CVkfoVr4HHwKsZ21UM
          source_id: s_6PzPjfEJudTQa1uvmu568c
          stance: supports
          locator: CBDB:343315
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343315）
          source: &a1
            id: s_6PzPjfEJudTQa1uvmu568c
            source_type: api_record
            title: 中国历代人物传记资料库：王教（CBDB 343315）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343315&o=json
            external_identifier: CBDB:343315
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.288Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nTHLhY3UyLt8vJRKLP37Xd
        subject_person_id: p_iQVkm3AbAGo9kCr5LGQSsV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王教，明人物。明清進士進士，籍贯淄川，入仕進士，曾任吏部文選司郎中。（中国历代人物传记资料库 CBDB 343315）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DVCioz1uHCs6iMkEFU6MJG
          claim_id: c_nTHLhY3UyLt8vJRKLP37Xd
          source_id: s_6PzPjfEJudTQa1uvmu568c
          stance: supports
          locator: CBDB:343315
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

# 王教

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王教 | accepted |
| bio.summary | 王教，明人物。明清進士進士，籍贯淄川，入仕進士，曾任吏部文選司郎中。（中国历代人物传记资料库 CBDB 343315） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王教（CBDB 343315）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343315&o=json)

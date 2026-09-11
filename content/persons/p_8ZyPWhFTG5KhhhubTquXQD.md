---
schema: wang-person/v1
id: p_8ZyPWhFTG5KhhhubTquXQD
status: active
merged_into: null
display_name: 王紹慶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ftJyRDqy4D3LGqtTLc8cNX
        subject_person_id: p_8ZyPWhFTG5KhhhubTquXQD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xtV2TktMgqXUZQQAktFm7F
          claim_id: c_ftJyRDqy4D3LGqtTLc8cNX
          source_id: s_twFK21sctJ4VpoeeLQxBJg
          stance: supports
          locator: CBDB:222281
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（222281）
          source: &a1
            id: s_twFK21sctJ4VpoeeLQxBJg
            source_type: api_record
            title: 中国历代人物传记资料库：王紹慶（CBDB 222281）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222281&o=json
            external_identifier: CBDB:222281
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.374Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gaojasqUQWpKAqBy5pFP8j
        subject_person_id: p_8ZyPWhFTG5KhhhubTquXQD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹慶，明人物。萬曆十一年進士，籍贯咸寧。（中国历代人物传记资料库 CBDB 222281）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SSFuZ2G6FduWI_sZve6glU
          claim_id: c_gaojasqUQWpKAqBy5pFP8j
          source_id: s_twFK21sctJ4VpoeeLQxBJg
          stance: supports
          locator: CBDB:222281
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

# 王紹慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹慶 | accepted |
| bio.summary | 王紹慶，明人物。萬曆十一年進士，籍贯咸寧。（中国历代人物传记资料库 CBDB 222281） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹慶（CBDB 222281）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222281&o=json)

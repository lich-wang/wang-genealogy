---
schema: wang-person/v1
id: p_b37o2yNb74XNZbNG37ntjy
status: active
merged_into: null
display_name: 王思明
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tNQ3Tbi4CYJCH3K1W5htbA
        subject_person_id: p_b37o2yNb74XNZbNG37ntjy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ckhnjNgDndmaibuUG2Hg2M
          claim_id: c_tNQ3Tbi4CYJCH3K1W5htbA
          source_id: s_3MruASrvWgX5GF1NPiFcLM
          stance: supports
          locator: CBDB:37686
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37686）
          source: &a1
            id: s_3MruASrvWgX5GF1NPiFcLM
            source_type: api_record
            title: 中国历代人物传记资料库：王思明（CBDB 37686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37686&o=json
            external_identifier: CBDB:37686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.237Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u918PxSEkqSDtdFTZxv8Gu
        subject_person_id: p_b37o2yNb74XNZbNG37ntjy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思明，宋人物。籍贯臨海，身份为處士。（中国历代人物传记资料库 CBDB 37686）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ooI4vQ4ZaKv8ju2Nupt3Z1
          claim_id: c_u918PxSEkqSDtdFTZxv8Gu
          source_id: s_3MruASrvWgX5GF1NPiFcLM
          stance: supports
          locator: CBDB:37686
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

# 王思明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思明 | accepted |
| bio.summary | 王思明，宋人物。籍贯臨海，身份为處士。（中国历代人物传记资料库 CBDB 37686） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思明（CBDB 37686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37686&o=json)

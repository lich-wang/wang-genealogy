---
schema: wang-person/v1
id: p_K6vyDH8gPnByEat3hXcVPp
status: active
merged_into: null
display_name: 王寵光
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2R8v3U5dXH7YgpTscXAQev
        subject_person_id: p_K6vyDH8gPnByEat3hXcVPp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寵光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3PR5vLxzhoneWhPemdhbn5
          claim_id: c_2R8v3U5dXH7YgpTscXAQev
          source_id: s_HqHQcgFmfnfDUMwdGYRs9R
          stance: supports
          locator: CBDB:541421
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（541421）
          source: &a1
            id: s_HqHQcgFmfnfDUMwdGYRs9R
            source_type: api_record
            title: 中国历代人物传记资料库：王寵光（CBDB 541421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=541421&o=json
            external_identifier: CBDB:541421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.458Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hNH9fjYxU2EoWDp9r6yQFR
        subject_person_id: p_K6vyDH8gPnByEat3hXcVPp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寵光，宋人物。籍贯內江，入仕進士。（中国历代人物传记资料库 CBDB 541421）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nXjlfzvQscGuZ2MFeJ_mYW
          claim_id: c_hNH9fjYxU2EoWDp9r6yQFR
          source_id: s_HqHQcgFmfnfDUMwdGYRs9R
          stance: supports
          locator: CBDB:541421
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

# 王寵光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寵光 | accepted |
| bio.summary | 王寵光，宋人物。籍贯內江，入仕進士。（中国历代人物传记资料库 CBDB 541421） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寵光（CBDB 541421）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=541421&o=json)

---
schema: wang-person/v1
id: p_39dLPDcwb7oGGqotegKSEK
status: active
merged_into: null
display_name: 王珩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_spjqVJoUC8QKC5Pe8F4SrA
        subject_person_id: p_39dLPDcwb7oGGqotegKSEK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4Cbczs93YEgDLkDSFvQ6t9
          claim_id: c_spjqVJoUC8QKC5Pe8F4SrA
          source_id: s_1UZrDNQGgDdoDwxooN28g2
          stance: supports
          locator: CBDB:341863
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341863）
          source: &a1
            id: s_1UZrDNQGgDdoDwxooN28g2
            source_type: api_record
            title: 中国历代人物传记资料库：王珩（CBDB 341863）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341863&o=json
            external_identifier: CBDB:341863
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.741Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Tmf6NTunaBL6qK6sojzF59
        subject_person_id: p_39dLPDcwb7oGGqotegKSEK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珩，清人物。明清進士進士，籍贯河內，入仕進士。（中国历代人物传记资料库 CBDB 341863）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BEREQdvYErPer0oX0j00by
          claim_id: c_Tmf6NTunaBL6qK6sojzF59
          source_id: s_1UZrDNQGgDdoDwxooN28g2
          stance: supports
          locator: CBDB:341863
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

# 王珩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珩 | accepted |
| bio.summary | 王珩，清人物。明清進士進士，籍贯河內，入仕進士。（中国历代人物传记资料库 CBDB 341863） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珩（CBDB 341863）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341863&o=json)

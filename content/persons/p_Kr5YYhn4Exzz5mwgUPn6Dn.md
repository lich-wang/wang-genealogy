---
schema: wang-person/v1
id: p_Kr5YYhn4Exzz5mwgUPn6Dn
status: active
merged_into: null
display_name: 王榮武
cbdb_id: 414890
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dEFDBs1h2XPukNschMHm4F
        subject_person_id: p_Kr5YYhn4Exzz5mwgUPn6Dn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮武，清人物。曾任遊擊。（中国历代人物传记资料库 CBDB 414890）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_duZzXwVwcAEslCAEukCPTT
          claim_id: c_dEFDBs1h2XPukNschMHm4F
          source_id: s_KrewY7yCtThncCZXSSAHep
          stance: supports
          locator: CBDB:414890
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_KrewY7yCtThncCZXSSAHep
            source_type: api_record
            title: 中国历代人物传记资料库：王榮武（CBDB 414890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414890&o=json
            external_identifier: CBDB:414890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:40.762Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3mLdpr2qZkjfwvwVH3v3jb
        subject_person_id: p_Kr5YYhn4Exzz5mwgUPn6Dn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮武
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6kyo9ML5yWMG3Ubzrx3j6g
          claim_id: c_3mLdpr2qZkjfwvwVH3v3jb
          source_id: s_KrewY7yCtThncCZXSSAHep
          stance: supports
          locator: CBDB:414890
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5801-5900）｜历史性依据：CBDB 朝代 = 清
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

# 王榮武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王榮武，清人物。曾任遊擊。（中国历代人物传记资料库 CBDB 414890） | accepted |
| name.primary | 王榮武 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王榮武（CBDB 414890）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414890&o=json)

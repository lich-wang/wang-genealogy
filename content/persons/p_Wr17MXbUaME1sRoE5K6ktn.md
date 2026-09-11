---
schema: wang-person/v1
id: p_Wr17MXbUaME1sRoE5K6ktn
status: active
merged_into: null
display_name: 王槃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7xpraHT3AKKsoad1Ho8A6S
        subject_person_id: p_Wr17MXbUaME1sRoE5K6ktn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a6itzeuvjiJ36HNM1x5Sow
          claim_id: c_7xpraHT3AKKsoad1Ho8A6S
          source_id: s_mwgKiZXnTUfrxd1DqnnNMw
          stance: supports
          locator: CBDB:456654
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（456654）
          source: &a1
            id: s_mwgKiZXnTUfrxd1DqnnNMw
            source_type: api_record
            title: 中国历代人物传记资料库：王槃（CBDB 456654）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456654&o=json
            external_identifier: CBDB:456654
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.586Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kHAHVuzqDtC6eMjD5XVg7n
        subject_person_id: p_Wr17MXbUaME1sRoE5K6ktn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王槃，清人物。入仕貢生: 拔貢，曾任知州。（中国历代人物传记资料库 CBDB 456654）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XcXjbQfeJCIsWoP3U2wxMB
          claim_id: c_kHAHVuzqDtC6eMjD5XVg7n
          source_id: s_mwgKiZXnTUfrxd1DqnnNMw
          stance: supports
          locator: CBDB:456654
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

# 王槃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王槃 | accepted |
| bio.summary | 王槃，清人物。入仕貢生: 拔貢，曾任知州。（中国历代人物传记资料库 CBDB 456654） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王槃（CBDB 456654）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456654&o=json)

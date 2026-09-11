---
schema: wang-person/v1
id: p_dX7g1AvYQNFNkFzfTVkHJi
status: active
merged_into: null
display_name: 王居鼇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p3FQq554dfXTq2eQEJA1u7
        subject_person_id: p_dX7g1AvYQNFNkFzfTVkHJi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居鼇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZGukW4hHWCH1rA69BVDuEc
          claim_id: c_p3FQq554dfXTq2eQEJA1u7
          source_id: s_HR1MyRJNf513QJtxkvU4K5
          stance: supports
          locator: CBDB:637308
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637308）
          source: &a1
            id: s_HR1MyRJNf513QJtxkvU4K5
            source_type: api_record
            title: 中国历代人物传记资料库：王居鼇（CBDB 637308）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637308&o=json
            external_identifier: CBDB:637308
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.277Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fab85jTH2ZArKFyB3or7gq
        subject_person_id: p_dX7g1AvYQNFNkFzfTVkHJi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居鼇，清人物。籍贯咸寧，曾任訓導。（中国历代人物传记资料库 CBDB 637308）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5b2ywkcCbrYcpHf2CF35zl
          claim_id: c_fab85jTH2ZArKFyB3or7gq
          source_id: s_HR1MyRJNf513QJtxkvU4K5
          stance: supports
          locator: CBDB:637308
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

# 王居鼇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王居鼇 | accepted |
| bio.summary | 王居鼇，清人物。籍贯咸寧，曾任訓導。（中国历代人物传记资料库 CBDB 637308） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王居鼇（CBDB 637308）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637308&o=json)

---
schema: wang-person/v1
id: p_QGbDtuNbu6n9MneEtyhbn9
status: active
merged_into: null
display_name: 王恒謙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P87pF7kHa964hX9xMbCwHq
        subject_person_id: p_QGbDtuNbu6n9MneEtyhbn9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恒謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WoP4LNUSPa26TSfVHBpvkA
          claim_id: c_P87pF7kHa964hX9xMbCwHq
          source_id: s_sq2S9SDs6XKC9vPfzutboh
          stance: supports
          locator: CBDB:456318
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（456318）
          source: &a1
            id: s_sq2S9SDs6XKC9vPfzutboh
            source_type: api_record
            title: 中国历代人物传记资料库：王恒謙（CBDB 456318）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456318&o=json
            external_identifier: CBDB:456318
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.572Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NuWMd6sBw8zPNAZ5nmqL1M
        subject_person_id: p_QGbDtuNbu6n9MneEtyhbn9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恒謙，清人物。入仕監生，曾任丞、縣丞。（中国历代人物传记资料库 CBDB 456318）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G9bHYQi8xAFLGNQU4mbain
          claim_id: c_NuWMd6sBw8zPNAZ5nmqL1M
          source_id: s_sq2S9SDs6XKC9vPfzutboh
          stance: supports
          locator: CBDB:456318
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

# 王恒謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恒謙 | accepted |
| bio.summary | 王恒謙，清人物。入仕監生，曾任丞、縣丞。（中国历代人物传记资料库 CBDB 456318） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恒謙（CBDB 456318）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456318&o=json)

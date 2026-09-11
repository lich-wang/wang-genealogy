---
schema: wang-person/v1
id: p_i45rtvYVx9GprSDZcrAJnh
status: active
merged_into: null
display_name: 王廣元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C3AfNZRCqi4BjaK18V43d9
        subject_person_id: p_i45rtvYVx9GprSDZcrAJnh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廣元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZvZMRjPCTtTnZxeb44mwpM
          claim_id: c_C3AfNZRCqi4BjaK18V43d9
          source_id: s_gyoBFbAc5gKUCaL4HineUM
          stance: supports
          locator: CBDB:637448
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637448）
          source: &a1
            id: s_gyoBFbAc5gKUCaL4HineUM
            source_type: api_record
            title: 中国历代人物传记资料库：王廣元（CBDB 637448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637448&o=json
            external_identifier: CBDB:637448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.323Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o113Qf9yEhgAYw9gksC1b4
        subject_person_id: p_i45rtvYVx9GprSDZcrAJnh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廣元，清人物。籍贯大荔，入仕附貢生，曾任知縣。（中国历代人物传记资料库 CBDB 637448）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_veWpkogBG0i-6_6kHYA658
          claim_id: c_o113Qf9yEhgAYw9gksC1b4
          source_id: s_gyoBFbAc5gKUCaL4HineUM
          stance: supports
          locator: CBDB:637448
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

# 王廣元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廣元 | accepted |
| bio.summary | 王廣元，清人物。籍贯大荔，入仕附貢生，曾任知縣。（中国历代人物传记资料库 CBDB 637448） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廣元（CBDB 637448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637448&o=json)

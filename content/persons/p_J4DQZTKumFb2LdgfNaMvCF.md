---
schema: wang-person/v1
id: p_J4DQZTKumFb2LdgfNaMvCF
status: active
merged_into: null
display_name: 王如
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JX6T6QKk1SM71WuNkqF9gh
        subject_person_id: p_J4DQZTKumFb2LdgfNaMvCF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3uATGr1913jyz49qPW9qHp
          claim_id: c_JX6T6QKk1SM71WuNkqF9gh
          source_id: s_RipnKUQDPFmADYY9hVee7m
          stance: supports
          locator: CBDB:147438
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（147438）
          source: &a1
            id: s_RipnKUQDPFmADYY9hVee7m
            source_type: api_record
            title: 中国历代人物传记资料库：王如（CBDB 147438）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147438&o=json
            external_identifier: CBDB:147438
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.736Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tpmmzYcmNDmFQiX1aHUx6g
        subject_person_id: p_J4DQZTKumFb2LdgfNaMvCF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如，唐人物。籍贯芒山。（中国历代人物传记资料库 CBDB 147438）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VLSsV0KnXbPfxwSF774aCR
          claim_id: c_tpmmzYcmNDmFQiX1aHUx6g
          source_id: s_RipnKUQDPFmADYY9hVee7m
          stance: supports
          locator: CBDB:147438
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_oqkXh3lYo75ABjoDRp2e0q
        subject_person_id: p_J4DQZTKumFb2LdgfNaMvCF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LgUjB5PDpPTj2Y6txt5PDo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B00-bIavex71RdoEnXv6Z5
          claim_id: c_oqkXh3lYo75ABjoDRp2e0q
          source_id: s_RipnKUQDPFmADYY9hVee7m
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianqing 62：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LgUjB5PDpPTj2Y6txt5PDo
        status: active
        display_name: 王段
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王如

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王如 | accepted |
| bio.summary | 王如，唐人物。籍贯芒山。（中国历代人物传记资料库 CBDB 147438） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_LgUjB5PDpPTj2Y6txt5PDo | 王段 | accepted |

## 外部来源

- [中国历代人物传记资料库：王如（CBDB 147438）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147438&o=json)

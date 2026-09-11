---
schema: wang-person/v1
id: p_WjeYTbJLizNMFWEvwEaeug
status: active
merged_into: null
display_name: 王逈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fXrQnmy6CPynRXoVJjV7hF
        subject_person_id: p_WjeYTbJLizNMFWEvwEaeug
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Nr9miYsGMYNCoSDvPB4ND5
          claim_id: c_fXrQnmy6CPynRXoVJjV7hF
          source_id: s_LV5czV13AsibyQdvPEkgGe
          stance: supports
          locator: CBDB:342808
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342808）
          source: &a1
            id: s_LV5czV13AsibyQdvPEkgGe
            source_type: api_record
            title: 中国历代人物传记资料库：王逈（CBDB 342808）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342808&o=json
            external_identifier: CBDB:342808
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.074Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kzHpTBk22K12X84q6V37zK
        subject_person_id: p_WjeYTbJLizNMFWEvwEaeug
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逈，明人物。明清進士進士，籍贯尉氏，入仕進士。（中国历代人物传记资料库 CBDB 342808）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_61wUvtYV63Lbz8GiYqGANq
          claim_id: c_kzHpTBk22K12X84q6V37zK
          source_id: s_LV5czV13AsibyQdvPEkgGe
          stance: supports
          locator: CBDB:342808
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

# 王逈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逈 | accepted |
| bio.summary | 王逈，明人物。明清進士進士，籍贯尉氏，入仕進士。（中国历代人物传记资料库 CBDB 342808） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王逈（CBDB 342808）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342808&o=json)

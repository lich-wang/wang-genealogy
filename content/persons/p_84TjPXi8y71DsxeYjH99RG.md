---
schema: wang-person/v1
id: p_84TjPXi8y71DsxeYjH99RG
status: active
merged_into: null
display_name: 王龍
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HpABoQfBdFoR9SrrZahyux
        subject_person_id: p_84TjPXi8y71DsxeYjH99RG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aR4eThBwm5KXYEFj5MvGfG
          claim_id: c_HpABoQfBdFoR9SrrZahyux
          source_id: s_49xgzFB5NBr4mo8s3DtWKL
          stance: supports
          locator: CBDB:308955
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（308955）
          source: &a1
            id: s_49xgzFB5NBr4mo8s3DtWKL
            source_type: api_record
            title: 中国历代人物传记资料库：王龍（CBDB 308955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308955&o=json
            external_identifier: CBDB:308955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.801Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t96cCEuht5tpvCDs974tf4
        subject_person_id: p_84TjPXi8y71DsxeYjH99RG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龍，明人物。嘉靖二十六年進士。（中国历代人物传记资料库 CBDB 308955）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qOBBJHecdd8XK676VIaA6s
          claim_id: c_t96cCEuht5tpvCDs974tf4
          source_id: s_49xgzFB5NBr4mo8s3DtWKL
          stance: supports
          locator: CBDB:308955
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
  descendants:
    - claim:
        id: c_qumh4sIxPQGtRfRYI75kOD
        subject_person_id: p_84TjPXi8y71DsxeYjH99RG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DA2QvREynL5ZUoyG8V9cNp
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PzRovKNnj9NRz5P-vzWp5g
          claim_id: c_qumh4sIxPQGtRfRYI75kOD
          source_id: s_49xgzFB5NBr4mo8s3DtWKL
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第三十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DA2QvREynL5ZUoyG8V9cNp
        status: active
        display_name: 王春澤
        merged_into_person_id: null
  other: []
---

# 王龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王龍 | accepted |
| bio.summary | 王龍，明人物。嘉靖二十六年進士。（中国历代人物传记资料库 CBDB 308955） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_DA2QvREynL5ZUoyG8V9cNp | 王春澤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王龍（CBDB 308955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308955&o=json)

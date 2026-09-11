---
schema: wang-person/v1
id: p_12q5jBq6XL9aBiWK6P4q54
status: active
merged_into: null
display_name: 王理
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VCQCAjvwowhURKGhgfhbHL
        subject_person_id: p_12q5jBq6XL9aBiWK6P4q54
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王理
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fqx3aYWbGzxNf6DjCkmFS6
          claim_id: c_VCQCAjvwowhURKGhgfhbHL
          source_id: s_E93zvFaFewyEzb6NDGtBap
          stance: supports
          locator: CBDB:312785
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312785）
          source: &a1
            id: s_E93zvFaFewyEzb6NDGtBap
            source_type: api_record
            title: 中国历代人物传记资料库：王理（CBDB 312785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312785&o=json
            external_identifier: CBDB:312785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.883Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XUKtRkfiDiPrF5T3bK961S
        subject_person_id: p_12q5jBq6XL9aBiWK6P4q54
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王理，明人物。天順四年進士，籍贯高郵州。（中国历代人物传记资料库 CBDB 312785）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-xsxjmHlsfpzdyy6XaAm0X
          claim_id: c_XUKtRkfiDiPrF5T3bK961S
          source_id: s_E93zvFaFewyEzb6NDGtBap
          stance: supports
          locator: CBDB:312785
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_HNyOIC3JkFGCmYxxyeZ4Ms
        subject_person_id: p_12q5jBq6XL9aBiWK6P4q54
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tBUiiaLdovkgJJmciCi2LY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hxTMkSls_a0c9QuW_8ghKR
          claim_id: c_HNyOIC3JkFGCmYxxyeZ4Ms
          source_id: s_E93zvFaFewyEzb6NDGtBap
          stance: supports
          locator: 天順四年進士登科錄:一卷，第二甲第三十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tBUiiaLdovkgJJmciCi2LY
        status: active
        display_name: 王震
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王理

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王理 | accepted |
| bio.summary | 王理，明人物。天順四年進士，籍贯高郵州。（中国历代人物传记资料库 CBDB 312785） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_tBUiiaLdovkgJJmciCi2LY | 王震 | accepted |

## 外部来源

- [中国历代人物传记资料库：王理（CBDB 312785）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312785&o=json)

---
schema: wang-person/v1
id: p_Q6amHE4HK8gJDrscEZBJcD
status: active
merged_into: null
display_name: 王訓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D3zqkgDzWd2q5uqKre521L
        subject_person_id: p_Q6amHE4HK8gJDrscEZBJcD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XS6xYhET5NsZg9LXuXMCWP
          claim_id: c_D3zqkgDzWd2q5uqKre521L
          source_id: s_gRmJsUL1kRg7QCQLSHWn72
          stance: supports
          locator: CBDB:290695
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（290695）
          source: &a1
            id: s_gRmJsUL1kRg7QCQLSHWn72
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 290695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290695&o=json
            external_identifier: CBDB:290695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.341Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uLhS4AHLQZDYmcQZa5wYaG
        subject_person_id: p_Q6amHE4HK8gJDrscEZBJcD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訓，明人物。嘉靖八年進士，籍贯奉化。（中国历代人物传记资料库 CBDB 290695）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bKq8tdNyTZt9CtW-qlTc2l
          claim_id: c_uLhS4AHLQZDYmcQZa5wYaG
          source_id: s_gRmJsUL1kRg7QCQLSHWn72
          stance: supports
          locator: CBDB:290695
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_PLx3m2WVYm7kDiDLl9h2Ky
        subject_person_id: p_Q6amHE4HK8gJDrscEZBJcD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tqwNUi4YHEq3GLVvJB5D2K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jA12w5kCOCe0G3t8kAZrGt
          claim_id: c_PLx3m2WVYm7kDiDLl9h2Ky
          source_id: s_gRmJsUL1kRg7QCQLSHWn72
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第二百二十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tqwNUi4YHEq3GLVvJB5D2K
        status: active
        display_name: 王杏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王訓 | accepted |
| bio.summary | 王訓，明人物。嘉靖八年進士，籍贯奉化。（中国历代人物传记资料库 CBDB 290695） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_tqwNUi4YHEq3GLVvJB5D2K | 王杏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王訓（CBDB 290695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290695&o=json)

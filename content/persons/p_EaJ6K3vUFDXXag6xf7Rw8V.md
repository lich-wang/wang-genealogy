---
schema: wang-person/v1
id: p_EaJ6K3vUFDXXag6xf7Rw8V
status: active
merged_into: null
display_name: 姜氏
revision: 1
cbdb_id: 326318
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JPE6iwLOxqfIB_nAMlo3VB
        subject_person_id: p_EaJ6K3vUFDXXag6xf7Rw8V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 姜氏，明人物。天順八年進士。（中国历代人物传记资料库 CBDB 326318）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1rIuT95U27Jylfas7VrOoY
          claim_id: c_JPE6iwLOxqfIB_nAMlo3VB
          source_id: s_fbm2jyThna1zKpCSScM7hW
          stance: supports
          locator: CBDB:326318
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_fbm2jyThna1zKpCSScM7hW
            source_type: api_record
            title: 中国历代人物传记资料库：姜氏(王讓妻)（CBDB 326318）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326318&o=json
            external_identifier: CBDB:326318
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nQv91xh4vbfEZ4mbf-jV7n
        subject_person_id: p_EaJ6K3vUFDXXag6xf7Rw8V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 姜氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rUHyQxhW36COCkKDTqYXTP
          claim_id: c_nQv91xh4vbfEZ4mbf-jV7n
          source_id: s_fbm2jyThna1zKpCSScM7hW
          stance: supports
          locator: CBDB:326318
          quotation: null
          interpretation_note: CBDB 明确记录的王讓配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_QVJWwlq3zx_JD6EYQtenWd
        subject_person_id: p_H6ADXcsddQz8PL3XHF26HH
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_EaJ6K3vUFDXXag6xf7Rw8V
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VGH1pE40aabHOfEu0rQOqz
          claim_id: c_QVJWwlq3zx_JD6EYQtenWd
          source_id: s_fbm2jyThna1zKpCSScM7hW
          stance: supports
          locator: 天順八年進士登科錄:一卷，第二甲第二十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_H6ADXcsddQz8PL3XHF26HH
        status: active
        display_name: 王讓
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 姜氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 姜氏，明人物。天順八年進士。（中国历代人物传记资料库 CBDB 326318） | accepted |
| name.primary | 姜氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_H6ADXcsddQz8PL3XHF26HH | 王讓 | accepted |

## 外部来源

- [中国历代人物传记资料库：姜氏(王讓妻)（CBDB 326318）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326318&o=json)

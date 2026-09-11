---
schema: wang-person/v1
id: p_Hnn3Qah4uCDRNgFy2Kb9jp
status: active
merged_into: null
display_name: 王一恭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AZ9QFhyAe1pC2DAwYPHeJB
        subject_person_id: p_Hnn3Qah4uCDRNgFy2Kb9jp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JH64L8CKARHULMHEQ6oEZb
          claim_id: c_AZ9QFhyAe1pC2DAwYPHeJB
          source_id: s_gGy4XYw2vZNSTCwEcjvWKK
          stance: supports
          locator: CBDB:337566
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（337566）
          source: &a1
            id: s_gGy4XYw2vZNSTCwEcjvWKK
            source_type: api_record
            title: 中国历代人物传记资料库：王一恭（CBDB 337566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337566&o=json
            external_identifier: CBDB:337566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.520Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fZwF7Q8AVEQnU9E7aZJH4G
        subject_person_id: p_Hnn3Qah4uCDRNgFy2Kb9jp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一恭，明人物。隆慶二年進士，籍贯太倉州。（中国历代人物传记资料库 CBDB 337566）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZLF8c-xp-qi3dsgieX6L-G
          claim_id: c_fZwF7Q8AVEQnU9E7aZJH4G
          source_id: s_gGy4XYw2vZNSTCwEcjvWKK
          stance: supports
          locator: CBDB:337566
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

# 王一恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一恭 | accepted |
| bio.summary | 王一恭，明人物。隆慶二年進士，籍贯太倉州。（中国历代人物传记资料库 CBDB 337566） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一恭（CBDB 337566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337566&o=json)

---
schema: wang-person/v1
id: p_tE38h7PQT2RGTDHJYfdJbH
status: active
merged_into: null
display_name: 王鍾秀
cbdb_id: 30063
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i8wAPfBiehuZuYPP1Bhg5p
        subject_person_id: p_tE38h7PQT2RGTDHJYfdJbH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾秀，清人物。籍贯寶坻，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任訓導。（中国历代人物传记资料库 CBDB 30063）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_DzGQSiQbLkvUwNeFUAnkNO
          claim_id: c_i8wAPfBiehuZuYPP1Bhg5p
          source_id: s_F5yLTZiatKz4s2BeeR8xU6
          stance: supports
          locator: CBDB:30063
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_F5yLTZiatKz4s2BeeR8xU6
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾秀（CBDB 30063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30063&o=json
            external_identifier: CBDB:30063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vZiXfpwSzNLjVutBj4Miby
        subject_person_id: p_tE38h7PQT2RGTDHJYfdJbH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾秀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KaRbFwC2r8PE1gCQJFB6Lt
          claim_id: c_vZiXfpwSzNLjVutBj4Miby
          source_id: s_F5yLTZiatKz4s2BeeR8xU6
          stance: supports
          locator: CBDB:30063
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_O_KkZIgLIzwK86zHGcLust
        subject_person_id: p_Rtn4knLShMzCHnFn2QERef
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tE38h7PQT2RGTDHJYfdJbH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NazVavn69frus7gNqkra4R
          claim_id: c_O_KkZIgLIzwK86zHGcLust
          source_id: s_G-j9Pk5k2rrL5XF2qpLkXQ
          stance: supports
          locator: CBDB 亲属：父（KinPerson 30048）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_G-j9Pk5k2rrL5XF2qpLkXQ
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾秀（CBDB 30063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30063&o=json
            external_identifier: CBDB:30063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Rtn4knLShMzCHnFn2QERef
        status: active
        display_name: 王振聲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鍾秀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鍾秀，清人物。籍贯寶坻，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任訓導。（中国历代人物传记资料库 CBDB 30063） | accepted |
| name.primary | 王鍾秀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Rtn4knLShMzCHnFn2QERef | 王振聲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鍾秀（CBDB 30063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30063&o=json)

---
schema: wang-person/v1
id: p_ek7reJ4HuSEY185HbF4fcc
status: active
merged_into: null
display_name: 王鉉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NJ1rPQe29a9dycQh4J8bUx
        subject_person_id: p_ek7reJ4HuSEY185HbF4fcc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JWHUFvpMR7R7HAA72jw5az
          claim_id: c_NJ1rPQe29a9dycQh4J8bUx
          source_id: s_BBeRGMeRYRkgEF7F98iDaS
          stance: supports
          locator: CBDB:268137
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（268137）
          source: &a1
            id: s_BBeRGMeRYRkgEF7F98iDaS
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 268137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268137&o=json
            external_identifier: CBDB:268137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.797Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yh19ikvB3zQH8sziEkXP1j
        subject_person_id: p_ek7reJ4HuSEY185HbF4fcc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉉，明人物。弘治九年進士，曾任賜冠帶。（中国历代人物传记资料库 CBDB 268137）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IikCnMo2r3FtwBNxpENdIL
          claim_id: c_yh19ikvB3zQH8sziEkXP1j
          source_id: s_BBeRGMeRYRkgEF7F98iDaS
          stance: supports
          locator: CBDB:268137
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
        id: c_5QverLXIm3CpoqZk0YJEMw
        subject_person_id: p_ek7reJ4HuSEY185HbF4fcc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BDk6YNhR5VP5UAnHiZAmaN
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MJ-ZXin_9lHM6_gVb0ZB_y
          claim_id: c_5QverLXIm3CpoqZk0YJEMw
          source_id: s_BBeRGMeRYRkgEF7F98iDaS
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第三十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BDk6YNhR5VP5UAnHiZAmaN
        status: active
        display_name: 王九思
        merged_into_person_id: null
  other: []
---

# 王鉉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉉 | accepted |
| bio.summary | 王鉉，明人物。弘治九年進士，曾任賜冠帶。（中国历代人物传记资料库 CBDB 268137） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_BDk6YNhR5VP5UAnHiZAmaN | 王九思 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鉉（CBDB 268137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268137&o=json)

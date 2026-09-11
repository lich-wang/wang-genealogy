---
schema: wang-person/v1
id: p_MdGjr9t9d5enBaVmAb7Hoe
status: active
merged_into: null
display_name: 王封
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XFPKJi7wzN3ZqBGkLX8kjn
        subject_person_id: p_MdGjr9t9d5enBaVmAb7Hoe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王封
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wjkGsSxa5QuMPFCrD9eSpT
          claim_id: c_XFPKJi7wzN3ZqBGkLX8kjn
          source_id: s_vSYU1Kkyd2DzfW65Fo6MX5
          stance: supports
          locator: CBDB:328612
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328612）
          source: &a1
            id: s_vSYU1Kkyd2DzfW65Fo6MX5
            source_type: api_record
            title: 中国历代人物传记资料库：王封（CBDB 328612）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328612&o=json
            external_identifier: CBDB:328612
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.301Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yQEPYYfr4s4K6qdChQTFY7
        subject_person_id: p_MdGjr9t9d5enBaVmAb7Hoe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eKPFMp3WBLDTjD6K2KcyD5
          claim_id: c_yQEPYYfr4s4K6qdChQTFY7
          source_id: s_vSYU1Kkyd2DzfW65Fo6MX5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_DaQaxj7e2AUQ1bKOwfdwN9
        subject_person_id: p_MdGjr9t9d5enBaVmAb7Hoe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2q5oLPYeHNC3ozo65nG5VF
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y0cjIYyORNOFrVaktS1RGQ
          claim_id: c_DaQaxj7e2AUQ1bKOwfdwN9
          source_id: s_5FoRMCCjYq81yzD5zvd1kZ
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百三十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5FoRMCCjYq81yzD5zvd1kZ
            source_type: api_record
            title: 中国历代人物传记资料库：王叔杲（CBDB 126579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126579&o=json
            external_identifier: CBDB:126579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.038Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2q5oLPYeHNC3ozo65nG5VF
        status: active
        display_name: 王叔杲
        merged_into_person_id: null
  other: []
---

# 王封

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王封 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2q5oLPYeHNC3ozo65nG5VF | 王叔杲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王封（CBDB 328612）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328612&o=json)
- [中国历代人物传记资料库：王叔杲（CBDB 126579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126579&o=json)

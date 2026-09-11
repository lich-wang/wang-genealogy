---
schema: wang-person/v1
id: p_kK9zSdM9HPzF6bPSwAPxfV
status: active
merged_into: null
display_name: 王昭
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e6L8yPDS4zBL7tCKyRWrPs
        subject_person_id: p_kK9zSdM9HPzF6bPSwAPxfV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6JHJ67tVwh1FooP24xXqLv
          claim_id: c_e6L8yPDS4zBL7tCKyRWrPs
          source_id: s_6CKNNGzCo8JEiF4cQS65aw
          stance: supports
          locator: CBDB:321403
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（321403）
          source: &a1
            id: s_6CKNNGzCo8JEiF4cQS65aw
            source_type: api_record
            title: 中国历代人物传记资料库：王昭（CBDB 321403）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321403&o=json
            external_identifier: CBDB:321403
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.092Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bc3VYPdCuZ3aq8D3o2Mk1X
        subject_person_id: p_kK9zSdM9HPzF6bPSwAPxfV
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
        - id: cs_JLNMrDoCR5wTvSF5MA88Md
          claim_id: c_bc3VYPdCuZ3aq8D3o2Mk1X
          source_id: s_6CKNNGzCo8JEiF4cQS65aw
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
        id: c_8niB_fcoS8Q6Z9SQ7ejgJa
        subject_person_id: p_kK9zSdM9HPzF6bPSwAPxfV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jxJb77T2SQUuZWU7nrgLP5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1egTNCu8Exmynf0NDJ4j8_
          claim_id: c_8niB_fcoS8Q6Z9SQ7ejgJa
          source_id: s_2wGjdALaD45tx6N97DN7RH
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第一百三十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2wGjdALaD45tx6N97DN7RH
            source_type: api_record
            title: 中国历代人物传记资料库：王同倫（CBDB 204603）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204603&o=json
            external_identifier: CBDB:204603
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jxJb77T2SQUuZWU7nrgLP5
        status: active
        display_name: 王同倫
        merged_into_person_id: null
  other: []
---

# 王昭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昭 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_jxJb77T2SQUuZWU7nrgLP5 | 王同倫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同倫（CBDB 204603）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204603&o=json)
- [中国历代人物传记资料库：王昭（CBDB 321403）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321403&o=json)

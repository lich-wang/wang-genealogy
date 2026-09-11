---
schema: wang-person/v1
id: p_BqT9GM9yFPoPmNsjdsf7T3
status: active
merged_into: null
display_name: 王化行
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uEqJPnk1ttF5GJTM3S5RFh
        subject_person_id: p_BqT9GM9yFPoPmNsjdsf7T3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化行
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JnAjeMfLupgg7BRSC7yjie
          claim_id: c_uEqJPnk1ttF5GJTM3S5RFh
          source_id: s_uQANrLFPg9QZnXwr7qdvwP
          stance: supports
          locator: CBDB:118642
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（118642）
          source: &a1
            id: s_uQANrLFPg9QZnXwr7qdvwP
            source_type: api_record
            title: 中国历代人物传记资料库：王化行（CBDB 118642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118642&o=json
            external_identifier: CBDB:118642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.881Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yKR3JVeniYxKXVmK6kZKcd
        subject_person_id: p_BqT9GM9yFPoPmNsjdsf7T3
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
        - id: cs_XpJ4JEa1e7jxA389UpkVCz
          claim_id: c_yKR3JVeniYxKXVmK6kZKcd
          source_id: s_uQANrLFPg9QZnXwr7qdvwP
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
        id: c_fO3OEpwFe3pAisPxKX8sSd
        subject_person_id: p_BqT9GM9yFPoPmNsjdsf7T3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DGzZ8wX5BL5EKCxJCq69dz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LK448573gUt2_GLf70i5LX
          claim_id: c_fO3OEpwFe3pAisPxKX8sSd
          source_id: s_mJZRWFbG4gLqoKptttYS2k
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2247：祖父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mJZRWFbG4gLqoKptttYS2k
            source_type: api_record
            title: 中国历代人物传记资料库：王鎔（CBDB 118641）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118641&o=json
            external_identifier: CBDB:118641
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DGzZ8wX5BL5EKCxJCq69dz
        status: active
        display_name: 王鎔
        merged_into_person_id: null
  other: []
---

# 王化行

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王化行 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_DGzZ8wX5BL5EKCxJCq69dz | 王鎔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王化行（CBDB 118642）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118642&o=json)
- [中国历代人物传记资料库：王鎔（CBDB 118641）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118641&o=json)

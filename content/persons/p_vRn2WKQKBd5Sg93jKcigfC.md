---
schema: wang-person/v1
id: p_vRn2WKQKBd5Sg93jKcigfC
status: active
merged_into: null
display_name: 王惠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LXSC1PUSaZQ83tfwstvAjB
        subject_person_id: p_vRn2WKQKBd5Sg93jKcigfC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YG6KAdB3BsEgwG3eWhNz7s
          claim_id: c_LXSC1PUSaZQ83tfwstvAjB
          source_id: s_eSS792D7EEABifNi77rEHc
          stance: supports
          locator: CBDB:294327
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294327）
          source: &a1
            id: s_eSS792D7EEABifNi77rEHc
            source_type: api_record
            title: 中国历代人物传记资料库：王惠（CBDB 294327）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294327&o=json
            external_identifier: CBDB:294327
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.445Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C2J4AuP14GJb9Pg84vKXfz
        subject_person_id: p_vRn2WKQKBd5Sg93jKcigfC
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
        - id: cs_gEk3LqazwzhyYCwZZRuBvF
          claim_id: c_C2J4AuP14GJb9Pg84vKXfz
          source_id: s_eSS792D7EEABifNi77rEHc
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
        id: c_2uf8fSMtbkpT8qNe04XEXU
        subject_person_id: p_vRn2WKQKBd5Sg93jKcigfC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AKiZ73AHqEtzATAkDq6m9S
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_22LjhYU42udEkw1mzzyGFP
          claim_id: c_2uf8fSMtbkpT8qNe04XEXU
          source_id: s_GWdGKWBoQ5Yau2CR5qC4YT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百九十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GWdGKWBoQ5Yau2CR5qC4YT
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 126750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126750&o=json
            external_identifier: CBDB:126750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.175Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AKiZ73AHqEtzATAkDq6m9S
        status: active
        display_name: 王瑛
        merged_into_person_id: null
  other: []
---

# 王惠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_AKiZ73AHqEtzATAkDq6m9S | 王瑛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惠（CBDB 294327）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294327&o=json)
- [中国历代人物传记资料库：王瑛（CBDB 126750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126750&o=json)

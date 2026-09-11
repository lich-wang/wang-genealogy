---
schema: wang-person/v1
id: p_xpqoa13dt91WrzFePwdVeE
status: active
merged_into: null
display_name: 王慶章
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FEdBNzjp3BajjB8yP55ttG
        subject_person_id: p_xpqoa13dt91WrzFePwdVeE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XPD2TnSikjPdUskXphzMrx
          claim_id: c_FEdBNzjp3BajjB8yP55ttG
          source_id: s_mLGo2FWnskk8DkX5kSN2Js
          stance: supports
          locator: CBDB:158558
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（158558）
          source: &a1
            id: s_mLGo2FWnskk8DkX5kSN2Js
            source_type: api_record
            title: 中国历代人物传记资料库：王慶章（CBDB 158558）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158558&o=json
            external_identifier: CBDB:158558
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.923Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B812p8QknYYC3L7u7MYWkM
        subject_person_id: p_xpqoa13dt91WrzFePwdVeE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7jM22YCmuBGQBJ7XtQhkb5
          claim_id: c_B812p8QknYYC3L7u7MYWkM
          source_id: s_mLGo2FWnskk8DkX5kSN2Js
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GW9yMakq2nL_Jn-W77sDFd
        subject_person_id: p_GJeyWZ8BmQEGkRVveGseKt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xpqoa13dt91WrzFePwdVeE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BoosfPZfZTuobvjoImqOS1
          claim_id: c_GW9yMakq2nL_Jn-W77sDFd
          source_id: s_EX3U4a4j8KHM9p8usA792N
          stance: supports
          locator: 唐代墓誌匯編:二卷，Huichang 7：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EX3U4a4j8KHM9p8usA792N
            source_type: api_record
            title: 中国历代人物传记资料库：王方徹（CBDB 141793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141793&o=json
            external_identifier: CBDB:141793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.206Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GJeyWZ8BmQEGkRVveGseKt
        status: active
        display_name: 王方徹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王慶章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶章 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GJeyWZ8BmQEGkRVveGseKt | 王方徹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王方徹（CBDB 141793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141793&o=json)
- [中国历代人物传记资料库：王慶章（CBDB 158558）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158558&o=json)

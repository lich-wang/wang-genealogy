---
schema: wang-person/v1
id: p_QJQHNHpFHc52Kek4hVNKqE
status: active
merged_into: null
display_name: 王有才
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eANLtbs3juy8MtL9zrdAY3
        subject_person_id: p_QJQHNHpFHc52Kek4hVNKqE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p7n98CaV4kLb9sPt3Npe3a
          claim_id: c_eANLtbs3juy8MtL9zrdAY3
          source_id: s_3dKXBVH4KmuhHoVD1mFTiq
          stance: supports
          locator: CBDB:297867
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297867）
          source: &a1
            id: s_3dKXBVH4KmuhHoVD1mFTiq
            source_type: api_record
            title: 中国历代人物传记资料库：王有才（CBDB 297867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297867&o=json
            external_identifier: CBDB:297867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.581Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p77g4JPQsHhYG6VBvhvtwJ
        subject_person_id: p_QJQHNHpFHc52Kek4hVNKqE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有才，明人物。嘉靖十四年進士，曾任副將軍。（中国历代人物传记资料库 CBDB 297867）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pyjb0OJm4jzEdT9mWY2sgk
          claim_id: c_p77g4JPQsHhYG6VBvhvtwJ
          source_id: s_3dKXBVH4KmuhHoVD1mFTiq
          stance: supports
          locator: CBDB:297867
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
        id: c_oc4qLlHTRVfuSsZMcmGNZ2
        subject_person_id: p_QJQHNHpFHc52Kek4hVNKqE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7D1Y7WN5ERwLJ26e35fypo
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z57BP1NxpqZnTytz_aGqDN
          claim_id: c_oc4qLlHTRVfuSsZMcmGNZ2
          source_id: s_PMHJGMbGKztLxoRHDL7wWN
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百六十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PMHJGMbGKztLxoRHDL7wWN
            source_type: api_record
            title: 中国历代人物传记资料库：王希賢（CBDB 202984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202984&o=json
            external_identifier: CBDB:202984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.769Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7D1Y7WN5ERwLJ26e35fypo
        status: active
        display_name: 王希賢
        merged_into_person_id: null
  other: []
---

# 王有才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有才 | accepted |
| bio.summary | 王有才，明人物。嘉靖十四年進士，曾任副將軍。（中国历代人物传记资料库 CBDB 297867） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_7D1Y7WN5ERwLJ26e35fypo | 王希賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希賢（CBDB 202984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202984&o=json)
- [中国历代人物传记资料库：王有才（CBDB 297867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297867&o=json)

---
schema: wang-person/v1
id: p_jf9czE6gj8V3fCw8ZoQ8o7
status: active
merged_into: null
display_name: 王廷玉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tHU5ny6pvc15NhynGKQJto
        subject_person_id: p_jf9czE6gj8V3fCw8ZoQ8o7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FMotNB3BbCAS7ib9VPMGLg
          claim_id: c_tHU5ny6pvc15NhynGKQJto
          source_id: s_QGQQJpwzKF3CLCw5R69foi
          stance: supports
          locator: CBDB:247361
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247361）
          source: &a1
            id: s_QGQQJpwzKF3CLCw5R69foi
            source_type: api_record
            title: 中国历代人物传记资料库：王廷玉（CBDB 247361）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247361&o=json
            external_identifier: CBDB:247361
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.114Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GDcUQs27CN146w93o11zDh
        subject_person_id: p_jf9czE6gj8V3fCw8ZoQ8o7
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
        - id: cs_zYKVABVZMyW8ndZvydmSFA
          claim_id: c_GDcUQs27CN146w93o11zDh
          source_id: s_QGQQJpwzKF3CLCw5R69foi
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
        id: c_jV8UhoUm4A0SUCRwYAgwEv
        subject_person_id: p_jf9czE6gj8V3fCw8ZoQ8o7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rwT632YsFfSAag9fvfmftc
          claim_id: c_jV8UhoUm4A0SUCRwYAgwEv
          source_id: s_UajPbreWAJ8SWtEFXGFhUY
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百四十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UajPbreWAJ8SWtEFXGFhUY
            source_type: api_record
            title: 中国历代人物传记资料库：王暄（CBDB 199620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199620&o=json
            external_identifier: CBDB:199620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.564Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dHFBy8GTgBZpvwKJGG8hsX
        status: active
        display_name: 王暄
        merged_into_person_id: null
  other: []
---

# 王廷玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷玉 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_dHFBy8GTgBZpvwKJGG8hsX | 王暄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷玉（CBDB 247361）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247361&o=json)
- [中国历代人物传记资料库：王暄（CBDB 199620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199620&o=json)

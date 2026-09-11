---
schema: wang-person/v1
id: p_PZeZ87VB1Mdvv684nqDdDb
status: active
merged_into: null
display_name: 孫汝寶
revision: 1
cbdb_id: 69822
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ohKAkb8kyyaScNwcxbJoZL
        subject_person_id: p_PZeZ87VB1Mdvv684nqDdDb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孫汝寶
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j50y9xLkJWe4HpapPr7WRn
          claim_id: c_ohKAkb8kyyaScNwcxbJoZL
          source_id: s_4j0ufOnn94Vu8jxHJ07Efz
          stance: supports
          locator: CBDB:69822
          quotation: null
          interpretation_note: CBDB 明确记录的王兆淑配偶
          source: &a1
            id: s_4j0ufOnn94Vu8jxHJ07Efz
            source_type: api_record
            title: 中国历代人物传记资料库：孫汝寶（CBDB 69822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69822&o=json
            external_identifier: CBDB:69822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_nSZeo1CMnCDQVwXtCdwzG-
        subject_person_id: p_3fcH9ES9qAurb6CYRaNykg
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_PZeZ87VB1Mdvv684nqDdDb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8kISY8NQjAVKATF1KZw3zP
          claim_id: c_nSZeo1CMnCDQVwXtCdwzG-
          source_id: s_4j0ufOnn94Vu8jxHJ07Efz
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1348, HuWenKai #86：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3fcH9ES9qAurb6CYRaNykg
        status: active
        display_name: 王兆淑
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 孫汝寶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 孫汝寶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_3fcH9ES9qAurb6CYRaNykg | 王兆淑 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫汝寶（CBDB 69822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69822&o=json)

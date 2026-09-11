---
schema: wang-person/v1
id: p_7voJGdvDGZ8Lvw8v2aKkMF
status: active
merged_into: null
display_name: 王秀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nfK674TkXnsdRESbhidWqp
        subject_person_id: p_7voJGdvDGZ8Lvw8v2aKkMF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jZy2tiySnW9DrDWqnUGPq3
          claim_id: c_nfK674TkXnsdRESbhidWqp
          source_id: s_aaMTQ5K9aK7zM73KJfxY8K
          stance: supports
          locator: CBDB:694641
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694641）
          source: &a1
            id: s_aaMTQ5K9aK7zM73KJfxY8K
            source_type: api_record
            title: 中国历代人物传记资料库：王秀（CBDB 694641）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694641&o=json
            external_identifier: CBDB:694641
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.675Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8gR3QQxk26uR4TSatiQ9qE
        subject_person_id: p_7voJGdvDGZ8Lvw8v2aKkMF
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
        - id: cs_D8D7dvr2jBuju31STLX9QK
          claim_id: c_8gR3QQxk26uR4TSatiQ9qE
          source_id: s_aaMTQ5K9aK7zM73KJfxY8K
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
        id: c_tsLQYSr7U9bUxLJBMLXMCc
        subject_person_id: p_7voJGdvDGZ8Lvw8v2aKkMF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4c9S7229FDCN2g6V51K39N
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cw-xMNcgY6jx3HWT_ALCTq
          claim_id: c_tsLQYSr7U9bUxLJBMLXMCc
          source_id: s_CXq6MozGjKtuPZQox5uKQu
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=294053：祖父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CXq6MozGjKtuPZQox5uKQu
            source_type: api_record
            title: 中国历代人物传记资料库：王槐（CBDB 694640）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694640&o=json
            external_identifier: CBDB:694640
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.674Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4c9S7229FDCN2g6V51K39N
        status: active
        display_name: 王槐
        merged_into_person_id: null
  other: []
---

# 王秀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秀 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_4c9S7229FDCN2g6V51K39N | 王槐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王槐（CBDB 694640）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694640&o=json)
- [中国历代人物传记资料库：王秀（CBDB 694641）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694641&o=json)

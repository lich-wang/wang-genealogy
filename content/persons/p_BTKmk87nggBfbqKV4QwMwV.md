---
schema: wang-person/v1
id: p_BTKmk87nggBfbqKV4QwMwV
status: active
merged_into: null
display_name: 曹佩英
revision: 1
cbdb_id: 120231
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iCFhxVvpEspxt140YyooUS
        subject_person_id: p_BTKmk87nggBfbqKV4QwMwV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 曹佩英
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UwAK4tBFe-nzDTRQ1GIjUD
          claim_id: c_iCFhxVvpEspxt140YyooUS
          source_id: s_sF77R6KnFK_YO4JdVorwwF
          stance: supports
          locator: CBDB:120231
          quotation: null
          interpretation_note: CBDB 明确记录的王嘉祿配偶
          source: &a1
            id: s_sF77R6KnFK_YO4JdVorwwF
            source_type: api_record
            title: 中国历代人物传记资料库：曹佩英（CBDB 120231）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120231&o=json
            external_identifier: CBDB:120231
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
        id: c_57yhbbCHZrZCdCGceZjtQM
        subject_person_id: p_WsAwCg9S6LRMQeMBEP1E9d
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_BTKmk87nggBfbqKV4QwMwV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xa6TK6pfthRBg9xVKUqgcu
          claim_id: c_57yhbbCHZrZCdCGceZjtQM
          source_id: s_sF77R6KnFK_YO4JdVorwwF
          stance: supports
          locator: CBDB 双向互证（妻子 曹佩英）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WsAwCg9S6LRMQeMBEP1E9d
        status: active
        display_name: 王嘉祿
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 曹佩英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 曹佩英 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_WsAwCg9S6LRMQeMBEP1E9d | 王嘉祿 | accepted |

## 外部来源

- [中国历代人物传记资料库：曹佩英（CBDB 120231）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120231&o=json)

---
schema: wang-person/v1
id: p_S3naJroKWgSC1rNxfMtn8R
status: active
merged_into: null
display_name: 王吉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2aSE7iiJP1fvVKi7SSHcH9
        subject_person_id: p_S3naJroKWgSC1rNxfMtn8R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dsRDKECZzLrhPTTPGqGGUp
          claim_id: c_2aSE7iiJP1fvVKi7SSHcH9
          source_id: s_hPEm8g9ytuCicRXFJy1bJC
          stance: supports
          locator: CBDB:16683
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（16683）
          source: &a1
            id: s_hPEm8g9ytuCicRXFJy1bJC
            source_type: api_record
            title: 中国历代人物传记资料库：王吉（CBDB 16683）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16683&o=json
            external_identifier: CBDB:16683
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.648Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jvQnLHR2eW24dEZcRUsjj3
        subject_person_id: p_S3naJroKWgSC1rNxfMtn8R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为西漢人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iB2PggtAv65J7RWYBcVEoi
          claim_id: c_jvQnLHR2eW24dEZcRUsjj3
          source_id: s_hPEm8g9ytuCicRXFJy1bJC
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
  ancestors:
    - claim:
        id: c_GZKQiLHkwSunAMj50mRt_K
        subject_person_id: p_SZeSnkBNgyjBtDh2Z2ku9F
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_S3naJroKWgSC1rNxfMtn8R
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PtIox5h32lRviK1eya0kt8
          claim_id: c_GZKQiLHkwSunAMj50mRt_K
          source_id: s_hPEm8g9ytuCicRXFJy1bJC
          stance: supports
          locator: CBDB 双向互证（高祖;四世祖 王元 ⇄ 玄孫;四世孫 王吉）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_SZeSnkBNgyjBtDh2Z2ku9F
        status: active
        display_name: 王元
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王吉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王吉 | accepted |
| bio.summary | CBDB 记载为西漢人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_SZeSnkBNgyjBtDh2Z2ku9F | 王元 | accepted |

## 外部来源

- [中国历代人物传记资料库：王吉（CBDB 16683）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16683&o=json)

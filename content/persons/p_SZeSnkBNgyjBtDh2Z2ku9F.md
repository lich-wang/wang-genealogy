---
schema: wang-person/v1
id: p_SZeSnkBNgyjBtDh2Z2ku9F
status: active
merged_into: null
display_name: 王元
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5KDYHx2RYupL3DZHDGvjBm
        subject_person_id: p_SZeSnkBNgyjBtDh2Z2ku9F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8cjwYHNNNH4LvAJ7oanHHM
          claim_id: c_5KDYHx2RYupL3DZHDGvjBm
          source_id: s_4iG1m3rwWKEjs6YdiAiW3K
          stance: supports
          locator: CBDB:16682
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（16682）
          source: &a1
            id: s_4iG1m3rwWKEjs6YdiAiW3K
            source_type: api_record
            title: 中国历代人物传记资料库：王元（CBDB 16682）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16682&o=json
            external_identifier: CBDB:16682
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.647Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MzfAKBPHWoQf8oZmV58zwD
        subject_person_id: p_SZeSnkBNgyjBtDh2Z2ku9F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为贏秦人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_igqSoptqzSrDGKfmP5yJCB
          claim_id: c_MzfAKBPHWoQf8oZmV58zwD
          source_id: s_4iG1m3rwWKEjs6YdiAiW3K
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
          source:
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
      object_person:
        id: p_S3naJroKWgSC1rNxfMtn8R
        status: active
        display_name: 王吉
        merged_into_person_id: null
  other: []
---

# 王元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元 | accepted |
| bio.summary | CBDB 记载为贏秦人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_S3naJroKWgSC1rNxfMtn8R | 王吉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王吉（CBDB 16683）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16683&o=json)
- [中国历代人物传记资料库：王元（CBDB 16682）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16682&o=json)

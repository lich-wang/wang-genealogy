---
schema: wang-person/v1
id: p_cwErF9dNaRLczjgvF4iKPD
status: active
merged_into: null
display_name: 王淮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fq7Ud1boy7h8AH4eGJCJGb
        subject_person_id: p_cwErF9dNaRLczjgvF4iKPD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tkikuQAdFjHApSkkQDswXQ
          claim_id: c_Fq7Ud1boy7h8AH4eGJCJGb
          source_id: s_7Uv9SPA1E3s1vqo63xeaBW
          stance: supports
          locator: CBDB:22118
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22118）
          source: &a1
            id: s_7Uv9SPA1E3s1vqo63xeaBW
            source_type: api_record
            title: 中国历代人物传记资料库：王淮（CBDB 22118）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22118&o=json
            external_identifier: CBDB:22118
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.825Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7o41uMP6VQTFSoA9KqGmGw
        subject_person_id: p_cwErF9dNaRLczjgvF4iKPD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fj27wwcF9NiMeLn2S3ojDF
          claim_id: c_7o41uMP6VQTFSoA9KqGmGw
          source_id: s_7Uv9SPA1E3s1vqo63xeaBW
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
        id: c_-ttnUnZFnrBLZsBea8pHnt
        subject_person_id: p_U4hGLBbX2mHKRKZw9eRccs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cwErF9dNaRLczjgvF4iKPD
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tXQBWTJg0SW4TtTS3LY6WO
          claim_id: c_-ttnUnZFnrBLZsBea8pHnt
          source_id: s_7Uv9SPA1E3s1vqo63xeaBW
          stance: supports
          locator: CBDB 双向互证（祖父 王延 ⇄ 孫 王淮）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_U4hGLBbX2mHKRKZw9eRccs
        status: active
        display_name: 王延
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王淮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淮 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_U4hGLBbX2mHKRKZw9eRccs | 王延 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淮（CBDB 22118）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22118&o=json)

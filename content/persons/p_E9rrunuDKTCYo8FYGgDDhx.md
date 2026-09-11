---
schema: wang-person/v1
id: p_E9rrunuDKTCYo8FYGgDDhx
status: active
merged_into: null
display_name: 王稠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hB9qhRRtLiDH8Cm8xFX1Nk
        subject_person_id: p_E9rrunuDKTCYo8FYGgDDhx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PbYN5qmTkwzFysiXnEWEBK
          claim_id: c_hB9qhRRtLiDH8Cm8xFX1Nk
          source_id: s_LWVB1HdXfxi96uud4AtkR2
          stance: supports
          locator: CBDB:437551
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（437551）
          source: &a1
            id: s_LWVB1HdXfxi96uud4AtkR2
            source_type: api_record
            title: 中国历代人物传记资料库：王稠（CBDB 437551）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437551&o=json
            external_identifier: CBDB:437551
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.047Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r3DjKZZ5zfAG1JFRdzagXd
        subject_person_id: p_E9rrunuDKTCYo8FYGgDDhx
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
        - id: cs_pbxtNHFxqmcBvX1yoTmvih
          claim_id: c_r3DjKZZ5zfAG1JFRdzagXd
          source_id: s_LWVB1HdXfxi96uud4AtkR2
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
        id: c_elfibPuhyZ_kqYeo_ZGsCT
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_E9rrunuDKTCYo8FYGgDDhx
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5h06NNq9613Sefmp6T26Ok
          claim_id: c_elfibPuhyZ_kqYeo_ZGsCT
          source_id: s_LWVB1HdXfxi96uud4AtkR2
          stance: supports
          locator: CBDB 双向互证（祖父 王文彪 ⇄ 孫 王稠）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_ePUgH55QWsG6Hauqd4raHD
        status: active
        display_name: 王文彪
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王稠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王稠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_ePUgH55QWsG6Hauqd4raHD | 王文彪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王稠（CBDB 437551）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437551&o=json)

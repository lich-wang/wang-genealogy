---
schema: wang-person/v1
id: p_Q2BUzEFPEcUPwCvzvG5JVv
status: active
merged_into: null
display_name: 郭瑛
revision: 1
cbdb_id: 56664
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ri2u0aRNVk069mMv7b8z8j
        subject_person_id: p_Q2BUzEFPEcUPwCvzvG5JVv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 郭瑛
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8j1KG6yz5uwN6gfj11pg8J
          claim_id: c_ri2u0aRNVk069mMv7b8z8j
          source_id: s_OgANLKD6kpX8Oi5BdDvkAM
          stance: supports
          locator: CBDB:56664
          quotation: null
          interpretation_note: CBDB 明确记录的王磵松配偶
          source: &a1
            id: s_OgANLKD6kpX8Oi5BdDvkAM
            source_type: api_record
            title: 中国历代人物传记资料库：郭瑛（CBDB 56664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56664&o=json
            external_identifier: CBDB:56664
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
        id: c_BXwqH7jr-PicEHWC5E5LaO
        subject_person_id: p_SGxowFRyQGSdRaJeuGGNko
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Q2BUzEFPEcUPwCvzvG5JVv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XJ5PAd3SVuMJoSNYZ7ZfW5
          claim_id: c_BXwqH7jr-PicEHWC5E5LaO
          source_id: s_OgANLKD6kpX8Oi5BdDvkAM
          stance: supports
          locator: CBDB 双向互证（妻子 郭瑛）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SGxowFRyQGSdRaJeuGGNko
        status: active
        display_name: 王磵松
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 郭瑛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 郭瑛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_SGxowFRyQGSdRaJeuGGNko | 王磵松 | accepted |

## 外部来源

- [中国历代人物传记资料库：郭瑛（CBDB 56664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56664&o=json)

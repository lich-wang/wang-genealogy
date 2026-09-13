---
schema: wang-person/v1
id: p_bR58M5z5uimNJPKCzwsfSS
status: active
merged_into: null
display_name: 王宜孫
cbdb_id: 28735
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pNYAbXPFR6mDddAGyZY57e
        subject_person_id: p_bR58M5z5uimNJPKCzwsfSS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宜孫，元人物。籍贯汲縣。（中国历代人物传记资料库 CBDB 28735）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ZQs8KOMz8I12Ab25ypa0qG
          claim_id: c_pNYAbXPFR6mDddAGyZY57e
          source_id: s_YcEkZNAfdhZYKmjE9mtpy3
          stance: supports
          locator: CBDB:28735
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_YcEkZNAfdhZYKmjE9mtpy3
            source_type: api_record
            title: 中国历代人物传记资料库：王宜孫（CBDB 28735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28735&o=json
            external_identifier: CBDB:28735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cY9LacZnhuSdX67aXAHfua
        subject_person_id: p_bR58M5z5uimNJPKCzwsfSS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宜孫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2XBhcwWQXMbnrnb6H5NyH7
          claim_id: c_cY9LacZnhuSdX67aXAHfua
          source_id: s_YcEkZNAfdhZYKmjE9mtpy3
          stance: supports
          locator: CBDB:28735
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 元
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
        id: c_imXx2kI2GsV3Ravbkir4Ue
        subject_person_id: p_VhEE1K9QYVSnK1V1eF11SZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bR58M5z5uimNJPKCzwsfSS
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WfotnTQL4d19Ns0Wttj0RP
          claim_id: c_imXx2kI2GsV3Ravbkir4Ue
          source_id: s_YcEkZNAfdhZYKmjE9mtpy3
          stance: supports
          locator: CBDB 双向互证（祖父 王天鐸 ⇄ 孫 王宜孫）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_YcEkZNAfdhZYKmjE9mtpy3
            source_type: api_record
            title: 中国历代人物传记资料库：王宜孫（CBDB 28735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28735&o=json
            external_identifier: CBDB:28735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_VhEE1K9QYVSnK1V1eF11SZ
        status: active
        display_name: 王天鐸
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王宜孫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宜孫，元人物。籍贯汲縣。（中国历代人物传记资料库 CBDB 28735） | accepted |
| name.primary | 王宜孫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_VhEE1K9QYVSnK1V1eF11SZ | 王天鐸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宜孫（CBDB 28735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28735&o=json)

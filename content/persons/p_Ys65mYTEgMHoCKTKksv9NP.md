---
schema: wang-person/v1
id: p_Ys65mYTEgMHoCKTKksv9NP
status: active
merged_into: null
display_name: 王振孫
cbdb_id: 28736
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3Trf7P4TK8c8PQAFYwkZSP
        subject_person_id: p_Ys65mYTEgMHoCKTKksv9NP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振孫，元人物。中国历代人物传记资料库（CBDB）以人物编号 28736 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_U78U-TSmUkw_xQ4ewMLmLO
          claim_id: c_3Trf7P4TK8c8PQAFYwkZSP
          source_id: s_9AsJR4rH6tHdbY41PhvPJX
          stance: supports
          locator: CBDB:28736
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_9AsJR4rH6tHdbY41PhvPJX
            source_type: api_record
            title: 中国历代人物传记资料库：王振孫（CBDB 28736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28736&o=json
            external_identifier: CBDB:28736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wgiYmBEkf7xSACHhSkQibG
        subject_person_id: p_Ys65mYTEgMHoCKTKksv9NP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振孫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TWC55vR2e5WiVFrzqkQads
          claim_id: c_wgiYmBEkf7xSACHhSkQibG
          source_id: s_9AsJR4rH6tHdbY41PhvPJX
          stance: supports
          locator: CBDB:28736
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 元
          source:
            id: s_9AsJR4rH6tHdbY41PhvPJX
            source_type: api_record
            title: 中国历代人物传记资料库：王振孫（CBDB 28736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28736&o=json
            external_identifier: CBDB:28736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
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
        id: c_eR_sermGFzY3E1_mEh5d67
        subject_person_id: p_VhEE1K9QYVSnK1V1eF11SZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Ys65mYTEgMHoCKTKksv9NP
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vdUSC0poTKFmzy8WE4EuWm
          claim_id: c_eR_sermGFzY3E1_mEh5d67
          source_id: s_WH1Up4UH2t9wWc2UfBzsXT
          stance: supports
          locator: CBDB 双向互证（孫 王振孫 ⇄ 祖父 王天鐸）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_WH1Up4UH2t9wWc2UfBzsXT
            source_type: api_record
            title: 中国历代人物传记资料库：王天鐸（CBDB 28726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28726&o=json
            external_identifier: CBDB:28726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
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

# 王振孫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王振孫，元人物。中国历代人物传记资料库（CBDB）以人物编号 28736 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王振孫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_VhEE1K9QYVSnK1V1eF11SZ | 王天鐸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王天鐸（CBDB 28726）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28726&o=json)
- [中国历代人物传记资料库：王振孫（CBDB 28736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28736&o=json)

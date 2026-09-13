---
schema: wang-person/v1
id: p_LNf8smqH73ZjMfUV1HmCb8
status: active
merged_into: null
display_name: 王脫
cbdb_id: 35522
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vKfgzKgv7hMykyKB7yBRR5
        subject_person_id: p_LNf8smqH73ZjMfUV1HmCb8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王脫，明人物。籍贯廬陵。（中国历代人物传记资料库 CBDB 35522）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_qUtPZ5Euyp2lsLW1ENjJsE
          claim_id: c_vKfgzKgv7hMykyKB7yBRR5
          source_id: s_pZKg8Vi6TaEGUu32d9FPCe
          stance: supports
          locator: CBDB:35522
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_pZKg8Vi6TaEGUu32d9FPCe
            source_type: api_record
            title: 中国历代人物传记资料库：王脫（CBDB 35522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35522&o=json
            external_identifier: CBDB:35522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_e3CYJSLPzDJL1R1rk12axL
        subject_person_id: p_LNf8smqH73ZjMfUV1HmCb8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王脫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fbUkCDKAuLafRMkcuwbzVH
          claim_id: c_e3CYJSLPzDJL1R1rk12axL
          source_id: s_pZKg8Vi6TaEGUu32d9FPCe
          stance: supports
          locator: CBDB:35522
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 明
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
        id: c_UExzlblsim-eXyxiKhFASL
        subject_person_id: p_6VfyaJrbVtLEDBvH7EiLTz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LNf8smqH73ZjMfUV1HmCb8
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MMzN-ZOytTrfn2FnU3eFxb
          claim_id: c_UExzlblsim-eXyxiKhFASL
          source_id: s_F1TcqvGHdYzK17GykP5oga
          stance: supports
          locator: CBDB 双向互证（孫 王脫 ⇄ 祖父 王斯覺）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_F1TcqvGHdYzK17GykP5oga
            source_type: api_record
            title: 中国历代人物传记资料库：王斯覺（CBDB 35516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35516&o=json
            external_identifier: CBDB:35516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_6VfyaJrbVtLEDBvH7EiLTz
        status: active
        display_name: 王斯覺
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王脫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王脫，明人物。籍贯廬陵。（中国历代人物传记资料库 CBDB 35522） | accepted |
| name.primary | 王脫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_6VfyaJrbVtLEDBvH7EiLTz | 王斯覺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王斯覺（CBDB 35516）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35516&o=json)
- [中国历代人物传记资料库：王脫（CBDB 35522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35522&o=json)

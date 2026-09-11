---
schema: wang-person/v1
id: p_jqEiBuqNdYKWEF4cuEvm5K
status: active
merged_into: null
display_name: 王子善
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DtdpmTqTYQJXcqBGixbRzy
        subject_person_id: p_jqEiBuqNdYKWEF4cuEvm5K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7wKQ5LeHMaKuD384cxynfq
          claim_id: c_DtdpmTqTYQJXcqBGixbRzy
          source_id: s_3D9ntfS2FZTVD5F1LYL8Mt
          stance: supports
          locator: CBDB:243236
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（243236）
          source: &a1
            id: s_3D9ntfS2FZTVD5F1LYL8Mt
            source_type: api_record
            title: 中国历代人物传记资料库：王子善（CBDB 243236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243236&o=json
            external_identifier: CBDB:243236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.993Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gR1ggK1zJ7M73J512nAXNm
        subject_person_id: p_jqEiBuqNdYKWEF4cuEvm5K
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
        - id: cs_EyA37AYN6YRwegY8c9EaU9
          claim_id: c_gR1ggK1zJ7M73J512nAXNm
          source_id: s_3D9ntfS2FZTVD5F1LYL8Mt
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
        id: c_15cqO9uv_THXj465autTnJ
        subject_person_id: p_jqEiBuqNdYKWEF4cuEvm5K
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_eeT9SQ93RGpf2B6Bihu6TP
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n950vCw_HAxxJ0Q2Yqc45-
          claim_id: c_15cqO9uv_THXj465autTnJ
          source_id: s_3D9ntfS2FZTVD5F1LYL8Mt
          stance: supports
          locator: 成化五年進士登科錄:一卷，第二甲第六十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eeT9SQ93RGpf2B6Bihu6TP
        status: active
        display_name: 王臣
        merged_into_person_id: null
  other: []
---

# 王子善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子善 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_eeT9SQ93RGpf2B6Bihu6TP | 王臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王子善（CBDB 243236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243236&o=json)

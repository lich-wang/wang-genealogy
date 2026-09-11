---
schema: wang-person/v1
id: p_f1etzqZkjDQnNgQC99Wzfa
status: active
merged_into: null
display_name: 王昺
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j25dftPTMgfsdwZc1RkEBm
        subject_person_id: p_f1etzqZkjDQnNgQC99Wzfa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jyFZ6dbAbnH4KbjrpsP1Hb
          claim_id: c_j25dftPTMgfsdwZc1RkEBm
          source_id: s_9wW7a6AbKnTUU7Ce259nvU
          stance: supports
          locator: CBDB:234983
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（234983）
          source: &a1
            id: s_9wW7a6AbKnTUU7Ce259nvU
            source_type: api_record
            title: 中国历代人物传记资料库：王昺（CBDB 234983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234983&o=json
            external_identifier: CBDB:234983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.747Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gPkXy882V42zUNk1FabBU9
        subject_person_id: p_f1etzqZkjDQnNgQC99Wzfa
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
        - id: cs_u7YU8feYhH8NrEaEDFWEx1
          claim_id: c_gPkXy882V42zUNk1FabBU9
          source_id: s_9wW7a6AbKnTUU7Ce259nvU
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
        id: c_95Oeg7WpWeEOEpcsALeyai
        subject_person_id: p_f1etzqZkjDQnNgQC99Wzfa
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_etxF8UycP4Urogz61YgdPb
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uSVxQfPA7U-XZco-_nv5P3
          claim_id: c_95Oeg7WpWeEOEpcsALeyai
          source_id: s_9wW7a6AbKnTUU7Ce259nvU
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第九十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_etxF8UycP4Urogz61YgdPb
        status: active
        display_name: 王安舜
        merged_into_person_id: null
  other: []
---

# 王昺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昺 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_etxF8UycP4Urogz61YgdPb | 王安舜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昺（CBDB 234983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234983&o=json)

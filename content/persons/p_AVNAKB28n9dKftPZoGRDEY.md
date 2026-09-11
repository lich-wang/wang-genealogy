---
schema: wang-person/v1
id: p_AVNAKB28n9dKftPZoGRDEY
status: active
merged_into: null
display_name: 王瓘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_buhMWLjYV6WPdQHPEPQfCU
        subject_person_id: p_AVNAKB28n9dKftPZoGRDEY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aUBA6bnon1jb1f1qGxcyje
          claim_id: c_buhMWLjYV6WPdQHPEPQfCU
          source_id: s_YyQeCa2MS3qYp6HfjYkPEj
          stance: supports
          locator: CBDB:185929
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（185929）
          source: &a1
            id: s_YyQeCa2MS3qYp6HfjYkPEj
            source_type: api_record
            title: 中国历代人物传记资料库：王瓘（CBDB 185929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185929&o=json
            external_identifier: CBDB:185929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.251Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_HGBSRwhAStpMHY61CJRrPz
        subject_person_id: p_AVNAKB28n9dKftPZoGRDEY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 924年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gdv4N8goFVFFU4nz64pA7M
          claim_id: c_HGBSRwhAStpMHY61CJRrPz
          source_id: s_YyQeCa2MS3qYp6HfjYkPEj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NP69zQ8r26kXcrPEpkbwnf
        subject_person_id: p_AVNAKB28n9dKftPZoGRDEY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TmxXa8yvnrke86WadvcLFZ
          claim_id: c_NP69zQ8r26kXcrPEpkbwnf
          source_id: s_YyQeCa2MS3qYp6HfjYkPEj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gUOxynGGwg6mD_icpnB7Rm
        subject_person_id: p_8WSGHAfAoQ3TLEpo8p8wJU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AVNAKB28n9dKftPZoGRDEY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ztRbn8hCmfyHJ6OySTD4ew
          claim_id: c_gUOxynGGwg6mD_icpnB7Rm
          source_id: s_7Kh4ohyjr1CuQj4gARXkoz
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7Kh4ohyjr1CuQj4gARXkoz
            source_type: api_record
            title: 中国历代人物传记资料库：王重榮（CBDB 185355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185355&o=json
            external_identifier: CBDB:185355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.243Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8WSGHAfAoQ3TLEpo8p8wJU
        status: active
        display_name: 王重榮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瓘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓘 | accepted |
| death.date | 924年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8WSGHAfAoQ3TLEpo8p8wJU | 王重榮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瓘（CBDB 185929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185929&o=json)
- [中国历代人物传记资料库：王重榮（CBDB 185355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185355&o=json)

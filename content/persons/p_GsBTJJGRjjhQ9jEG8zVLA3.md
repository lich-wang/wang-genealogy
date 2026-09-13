---
schema: wang-person/v1
id: p_GsBTJJGRjjhQ9jEG8zVLA3
status: active
merged_into: null
display_name: 王仁惠
cbdb_id: 170380
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PiUyT4nD1K1WCrvzdiuVYb
        subject_person_id: p_GsBTJJGRjjhQ9jEG8zVLA3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁惠（卒于740年），史料所见人物。本项目依据《中国历代人物传记资料库：王仁惠（CBDB 170380）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_Uw0H70vhmz7He3xNoZCGDI
          claim_id: c_PiUyT4nD1K1WCrvzdiuVYb
          source_id: s_7QcBQGNqV47L7SQxtNPXBs
          stance: supports
          locator: CBDB:170380
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_7QcBQGNqV47L7SQxtNPXBs
            source_type: api_record
            title: 中国历代人物传记资料库：王仁惠（CBDB 170380）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170380&o=json
            external_identifier: CBDB:170380
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_eDxpDErah6KLRguW7WPvCE
        subject_person_id: p_GsBTJJGRjjhQ9jEG8zVLA3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 740年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0740-01-01
            latest: 0740-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TiNxbwiHB2fRxp3Aw8cgCh
          claim_id: c_eDxpDErah6KLRguW7WPvCE
          source_id: s_7QcBQGNqV47L7SQxtNPXBs
          stance: supports
          locator: CBDB:170380
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 740
          source:
            id: s_7QcBQGNqV47L7SQxtNPXBs
            source_type: api_record
            title: 中国历代人物传记资料库：王仁惠（CBDB 170380）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170380&o=json
            external_identifier: CBDB:170380
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_F4Bad2UYYYgpr6VH8veUoP
        subject_person_id: p_GsBTJJGRjjhQ9jEG8zVLA3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁惠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_28JZ7bqR8Xp8P6Rbxsr92G
          claim_id: c_F4Bad2UYYYgpr6VH8veUoP
          source_id: s_7QcBQGNqV47L7SQxtNPXBs
          stance: supports
          locator: CBDB:170380
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 740
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_qaG9OcLudL8Mnw9lWuRZlR
        subject_person_id: p_GsBTJJGRjjhQ9jEG8zVLA3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3HCaNXxL8AgjTTECHqX6T9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zwP4O2h00efypxFqfJVSnn
          claim_id: c_qaG9OcLudL8Mnw9lWuRZlR
          source_id: s_7KNeUdNeVN6CuaWUXtNTjA
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7KNeUdNeVN6CuaWUXtNTjA
            source_type: api_record
            title: 中国历代人物传记资料库：王岳（CBDB 169880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169880&o=json
            external_identifier: CBDB:169880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.026Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3HCaNXxL8AgjTTECHqX6T9
        status: active
        display_name: 王岳
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仁惠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仁惠（卒于740年），史料所见人物。本项目依据《中国历代人物传记资料库：王仁惠（CBDB 170380）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 740年 | accepted |
| name.primary | 王仁惠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3HCaNXxL8AgjTTECHqX6T9 | 王岳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仁惠（CBDB 170380）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170380&o=json)
- [中国历代人物传记资料库：王岳（CBDB 169880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169880&o=json)

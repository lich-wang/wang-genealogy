---
schema: wang-person/v1
id: p_VN31uWhY9QBmtG4fRRJCLD
status: active
merged_into: null
display_name: 曹氏
revision: 1
cbdb_id: 141558
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t4XYZVrUfA-yWByhQXofrU
        subject_person_id: p_VN31uWhY9QBmtG4fRRJCLD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 曹氏，史料所见人物。本项目依据《中国历代人物传记资料库：曹氏(曹萬女)（CBDB 141558）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JXjYovuP0IDGvDkk0k-YPq
          claim_id: c_t4XYZVrUfA-yWByhQXofrU
          source_id: s_d-fd-_tAw2Lmwu0i6z7M1E
          stance: supports
          locator: CBDB:141558
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_d-fd-_tAw2Lmwu0i6z7M1E
            source_type: api_record
            title: 中国历代人物传记资料库：曹氏(曹萬女)（CBDB 141558）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141558&o=json
            external_identifier: CBDB:141558
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vSoZMkjE1zfCW_V5ZhUD93
        subject_person_id: p_VN31uWhY9QBmtG4fRRJCLD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 曹氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PU4o1GQE13M9Tzs0XsHGmC
          claim_id: c_vSoZMkjE1zfCW_V5ZhUD93
          source_id: s_d-fd-_tAw2Lmwu0i6z7M1E
          stance: supports
          locator: CBDB:141558
          quotation: null
          interpretation_note: CBDB 明确记录的王式配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_zdZTk40FToERP8njS_eOnR
        subject_person_id: p_nkQf6mjVFgBHsGZRQ9pX16
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_VN31uWhY9QBmtG4fRRJCLD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_96nsv0vjdqrUIRNzOzdBPC
          claim_id: c_zdZTk40FToERP8njS_eOnR
          source_id: s_d-fd-_tAw2Lmwu0i6z7M1E
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nkQf6mjVFgBHsGZRQ9pX16
        status: active
        display_name: 王式
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 曹氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 曹氏，史料所见人物。本项目依据《中国历代人物传记资料库：曹氏(曹萬女)（CBDB 141558）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 曹氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_nkQf6mjVFgBHsGZRQ9pX16 | 王式 | accepted |

## 外部来源

- [中国历代人物传记资料库：曹氏(曹萬女)（CBDB 141558）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141558&o=json)

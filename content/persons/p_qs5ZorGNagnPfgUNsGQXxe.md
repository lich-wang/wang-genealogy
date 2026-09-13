---
schema: wang-person/v1
id: p_qs5ZorGNagnPfgUNsGQXxe
status: active
merged_into: null
display_name: 王子紹
cbdb_id: 149141
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZA4YJMVQd8xFeyhNgxigEg
        subject_person_id: p_qs5ZorGNagnPfgUNsGQXxe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子紹，史料所见人物。本项目依据《中国历代人物传记资料库：王子紹（CBDB 149141）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_7nWUqqYSx9HOC86Ht2SmxR
          claim_id: c_ZA4YJMVQd8xFeyhNgxigEg
          source_id: s_ZNq2AHensyUEn1ECWBN1zf
          stance: supports
          locator: CBDB:149141
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_ZNq2AHensyUEn1ECWBN1zf
            source_type: api_record
            title: 中国历代人物传记资料库：王子紹（CBDB 149141）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149141&o=json
            external_identifier: CBDB:149141
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9uuxdvjwPvm2rxx9JWe9wB
        subject_person_id: p_qs5ZorGNagnPfgUNsGQXxe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子紹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jXhMJJcAerErxKEV1UtyBK
          claim_id: c_9uuxdvjwPvm2rxx9JWe9wB
          source_id: s_ZNq2AHensyUEn1ECWBN1zf
          stance: supports
          locator: CBDB:149141
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_d7yeFaG7ps34edHBxCOOPS
        subject_person_id: p_qs5ZorGNagnPfgUNsGQXxe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zLXMS5QPGxbNh1ZEv2Zsbj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WPe9C2W0FMVLXoCBR8BLJ4
          claim_id: c_d7yeFaG7ps34edHBxCOOPS
          source_id: s_S41eJ8smHY6tvN1ApoD2zP
          stance: supports
          locator: 唐代墓誌匯編:二卷，Wenming 8：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_S41eJ8smHY6tvN1ApoD2zP
            source_type: api_record
            title: 中国历代人物传记资料库：王岐（CBDB 139818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139818&o=json
            external_identifier: CBDB:139818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.456Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zLXMS5QPGxbNh1ZEv2Zsbj
        status: active
        display_name: 王岐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子紹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子紹，史料所见人物。本项目依据《中国历代人物传记资料库：王子紹（CBDB 149141）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王子紹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_zLXMS5QPGxbNh1ZEv2Zsbj | 王岐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王岐（CBDB 139818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139818&o=json)
- [中国历代人物传记资料库：王子紹（CBDB 149141）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149141&o=json)

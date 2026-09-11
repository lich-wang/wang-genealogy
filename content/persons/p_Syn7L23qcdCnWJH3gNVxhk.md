---
schema: wang-person/v1
id: p_Syn7L23qcdCnWJH3gNVxhk
status: active
merged_into: null
display_name: 王國柱
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kL2p2J1tRs3hxPpui6tMeu
        subject_person_id: p_Syn7L23qcdCnWJH3gNVxhk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國柱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bqm5G7wCLDSDbRZeTBumpu
          claim_id: c_kL2p2J1tRs3hxPpui6tMeu
          source_id: s_e934oePsLt7rBWzJFsQKXK
          stance: supports
          locator: CBDB:221612
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221612）
          source: &a1
            id: s_e934oePsLt7rBWzJFsQKXK
            source_type: api_record
            title: 中国历代人物传记资料库：王國柱（CBDB 221612）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221612&o=json
            external_identifier: CBDB:221612
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.318Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8gh8Bphx3cEn4ZdUzJB6rL
        subject_person_id: p_Syn7L23qcdCnWJH3gNVxhk
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
        - id: cs_poA9VkgE6APFfJfyiFVCga
          claim_id: c_8gh8Bphx3cEn4ZdUzJB6rL
          source_id: s_e934oePsLt7rBWzJFsQKXK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_UDLvmgqy5BbnCG_xVBYuyu
        subject_person_id: p_Syn7L23qcdCnWJH3gNVxhk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Vu5wPFU9etB1mZyT3n6avf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NS8Km9clhrQGpV2Kv4Og0b
          claim_id: c_UDLvmgqy5BbnCG_xVBYuyu
          source_id: s_e934oePsLt7rBWzJFsQKXK
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百零三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Vu5wPFU9etB1mZyT3n6avf
        status: active
        display_name: 王永寧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王國柱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國柱 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Vu5wPFU9etB1mZyT3n6avf | 王永寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國柱（CBDB 221612）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221612&o=json)

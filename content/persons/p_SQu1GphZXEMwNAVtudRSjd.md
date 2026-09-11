---
schema: wang-person/v1
id: p_SQu1GphZXEMwNAVtudRSjd
status: active
merged_into: null
display_name: 王邦彥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6dMq4N657X4ZCE1nUtKeEL
        subject_person_id: p_SQu1GphZXEMwNAVtudRSjd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦彥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XaE9VKVXaForipAer9Vxu2
          claim_id: c_6dMq4N657X4ZCE1nUtKeEL
          source_id: s_SPdfu76eZTdqnvgD4c7fnJ
          stance: supports
          locator: CBDB:524212
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（524212）
          source: &a1
            id: s_SPdfu76eZTdqnvgD4c7fnJ
            source_type: api_record
            title: 中国历代人物传记资料库：王邦彥（CBDB 524212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=524212&o=json
            external_identifier: CBDB:524212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.324Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fM4oUNE7GcJy5Y2j1Z99sp
        subject_person_id: p_SQu1GphZXEMwNAVtudRSjd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦彥，史料所见人物。本项目依据《中国历代人物传记资料库：王邦彥（CBDB 524212）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pct8vz_aIFTg4UJwTv2ikr
          claim_id: c_fM4oUNE7GcJy5Y2j1Z99sp
          source_id: s_SPdfu76eZTdqnvgD4c7fnJ
          stance: supports
          locator: CBDB:524212
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3I4VbqqpTqWdbn9I9saVAk
        subject_person_id: p_A5QFTSA7HNbXFqxcZ9vPCR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SQu1GphZXEMwNAVtudRSjd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RV_Zo1szSND8mJ2R9_FG6v
          claim_id: c_3I4VbqqpTqWdbn9I9saVAk
          source_id: s_2A4CWoaGp3nxiKVzQjVeAr
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），10681：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2A4CWoaGp3nxiKVzQjVeAr
            source_type: api_record
            title: 中国历代人物传记资料库：王懋（CBDB 67078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67078&o=json
            external_identifier: CBDB:67078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.971Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A5QFTSA7HNbXFqxcZ9vPCR
        status: active
        display_name: 王懋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王邦彥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邦彥 | accepted |
| bio.summary | 王邦彥，史料所见人物。本项目依据《中国历代人物传记资料库：王邦彥（CBDB 524212）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_A5QFTSA7HNbXFqxcZ9vPCR | 王懋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邦彥（CBDB 524212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=524212&o=json)
- [中国历代人物传记资料库：王懋（CBDB 67078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67078&o=json)

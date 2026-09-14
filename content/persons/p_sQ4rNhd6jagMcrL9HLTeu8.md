---
schema: wang-person/v1
id: p_sQ4rNhd6jagMcrL9HLTeu8
status: active
merged_into: null
display_name: 王孫麟
cbdb_id: 526878
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fxwnTNNyGtMcPjYBcDEFo4
        subject_person_id: p_sQ4rNhd6jagMcrL9HLTeu8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孫麟，史料所见人物。本项目依据《中国历代人物传记资料库：王孫麟（CBDB 526878）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_CGHn39bipAFRhIApEEf9tr
          claim_id: c_fxwnTNNyGtMcPjYBcDEFo4
          source_id: s_86paAjACeRarjFgSnhpZ7q
          stance: supports
          locator: CBDB:526878
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_86paAjACeRarjFgSnhpZ7q
            source_type: api_record
            title: 中国历代人物传记资料库：王孫麟（CBDB 526878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526878&o=json
            external_identifier: CBDB:526878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:19.665Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_VbRAB2nKVtDwLJsFz4EffB
        subject_person_id: p_sQ4rNhd6jagMcrL9HLTeu8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孫麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CRYQ8yM3b74xuU16TJXkbJ
          claim_id: c_VbRAB2nKVtDwLJsFz4EffB
          source_id: s_86paAjACeRarjFgSnhpZ7q
          stance: supports
          locator: CBDB:526878
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7201-7229）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_luj4AQcoyWTgEogqZJW4bo
        subject_person_id: p_LDAvDXeJSzwR3HFvGsLwNg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sQ4rNhd6jagMcrL9HLTeu8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JVjmqho053xVeWL_0XpS_W
          claim_id: c_luj4AQcoyWTgEogqZJW4bo
          source_id: s_m5yAUq2qMQ2t1_CnQaZFC1
          stance: supports
          locator: CBDB：兄弟 王孫蔚（69343）之父／母 王增生
          quotation: null
          interpretation_note: 由兄弟关系推断：王孫麟 与 王孫蔚 为同胞（CBDB 记「弟」），王孫蔚 之父／母即 王孫麟 之父／母。
          source:
            id: s_m5yAUq2qMQ2t1_CnQaZFC1
            source_type: api_record
            title: 中国历代人物传记资料库：王孫麟（CBDB 526878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526878&o=json
            external_identifier: CBDB:526878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LDAvDXeJSzwR3HFvGsLwNg
        status: active
        display_name: 王增生
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_NzEy4kOQpgvPr2_71YLepM
        subject_person_id: p_sQ4rNhd6jagMcrL9HLTeu8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uBQSNz6265pj7jQUYJU3TJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bRvZFlmx1bTI9I60ZEshlo
          claim_id: c_NzEy4kOQpgvPr2_71YLepM
          source_id: s_m5yAUq2qMQ2t1_CnQaZFC1
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 69343 王孫蔚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_m5yAUq2qMQ2t1_CnQaZFC1
            source_type: api_record
            title: 中国历代人物传记资料库：王孫麟（CBDB 526878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526878&o=json
            external_identifier: CBDB:526878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uBQSNz6265pj7jQUYJU3TJ
        status: active
        display_name: 王孫蔚
        merged_into_person_id: null
---

# 王孫麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孫麟，史料所见人物。本项目依据《中国历代人物传记资料库：王孫麟（CBDB 526878）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王孫麟 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LDAvDXeJSzwR3HFvGsLwNg | 王增生 | accepted |
| other | p_uBQSNz6265pj7jQUYJU3TJ | 王孫蔚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孫麟（CBDB 526878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526878&o=json)

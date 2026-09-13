---
schema: wang-person/v1
id: p_eJdKzNPvPGqGFk5vNPPWhh
status: active
merged_into: null
display_name: 王仲詹
cbdb_id: 186740
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_86W8kWMz7j22trFEp1e7hf
        subject_person_id: p_eJdKzNPvPGqGFk5vNPPWhh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲詹（卒于833年），史料所见人物。本项目依据《中国历代人物传记资料库：王仲詹（CBDB 186740）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_Ohtoixp_8_x0CK2Z_zOijF
          claim_id: c_86W8kWMz7j22trFEp1e7hf
          source_id: s_eJVxNcdeV7HPqYzHn9GjQ4
          stance: supports
          locator: CBDB:186740
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_eJVxNcdeV7HPqYzHn9GjQ4
            source_type: api_record
            title: 中国历代人物传记资料库：王仲詹（CBDB 186740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186740&o=json
            external_identifier: CBDB:186740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_g8mDNt1J7gFcHQAByJv8ds
        subject_person_id: p_eJdKzNPvPGqGFk5vNPPWhh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 833年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0833-01-01
            latest: 0833-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mrBQztQQf9G52WHkCfgVkT
          claim_id: c_g8mDNt1J7gFcHQAByJv8ds
          source_id: s_eJVxNcdeV7HPqYzHn9GjQ4
          stance: supports
          locator: CBDB:186740
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 833
          source:
            id: s_eJVxNcdeV7HPqYzHn9GjQ4
            source_type: api_record
            title: 中国历代人物传记资料库：王仲詹（CBDB 186740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186740&o=json
            external_identifier: CBDB:186740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NCG6x1wev8ZJP71s2aJPKj
        subject_person_id: p_eJdKzNPvPGqGFk5vNPPWhh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲詹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Pa3jpNec58URw136eyN8dq
          claim_id: c_NCG6x1wev8ZJP71s2aJPKj
          source_id: s_eJVxNcdeV7HPqYzHn9GjQ4
          stance: supports
          locator: CBDB:186740
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 833
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_94HVMsWo6E8QpW5zkYvzwg
        subject_person_id: p_XLANjjKCBK7qVKBrPKgEcS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eJdKzNPvPGqGFk5vNPPWhh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yTlbzIqh68lwQ0Cyw_1ygH
          claim_id: c_94HVMsWo6E8QpW5zkYvzwg
          source_id: s_ECj7QkZf2eqrd31bgGYu9Z
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ECj7QkZf2eqrd31bgGYu9Z
            source_type: api_record
            title: 中国历代人物传记资料库：王堅（CBDB 186733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186733&o=json
            external_identifier: CBDB:186733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.284Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_XLANjjKCBK7qVKBrPKgEcS
        status: active
        display_name: 王堅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲詹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仲詹（卒于833年），史料所见人物。本项目依据《中国历代人物传记资料库：王仲詹（CBDB 186740）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 833年 | accepted |
| name.primary | 王仲詹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XLANjjKCBK7qVKBrPKgEcS | 王堅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王堅（CBDB 186733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186733&o=json)
- [中国历代人物传记资料库：王仲詹（CBDB 186740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186740&o=json)

---
schema: wang-person/v1
id: p_Z3JaM8RvpbipsG5jk695wX
status: active
merged_into: null
display_name: 王景旻
cbdb_id: 186490
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uvJDyyLozJ892BfNVupmue
        subject_person_id: p_Z3JaM8RvpbipsG5jk695wX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景旻（卒于878年），史料所见人物。本项目依据《中国历代人物传记资料库：王景旻（CBDB 186490）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_-rzZ8_t4uTTQMxrILcAPSF
          claim_id: c_uvJDyyLozJ892BfNVupmue
          source_id: s_phT5kNaaNGaN2Kmjr523dJ
          stance: supports
          locator: CBDB:186490
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_phT5kNaaNGaN2Kmjr523dJ
            source_type: api_record
            title: 中国历代人物传记资料库：王景旻（CBDB 186490）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186490&o=json
            external_identifier: CBDB:186490
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Ug8MmNvd92hENubpUwZ3nZ
        subject_person_id: p_Z3JaM8RvpbipsG5jk695wX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 878年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0878-01-01
            latest: 0878-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4paNCQAjhgQrSsbW9wTcVG
          claim_id: c_Ug8MmNvd92hENubpUwZ3nZ
          source_id: s_phT5kNaaNGaN2Kmjr523dJ
          stance: supports
          locator: CBDB:186490
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 878
          source:
            id: s_phT5kNaaNGaN2Kmjr523dJ
            source_type: api_record
            title: 中国历代人物传记资料库：王景旻（CBDB 186490）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186490&o=json
            external_identifier: CBDB:186490
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZSCWQmMZRGb6S4QMzr3ecp
        subject_person_id: p_Z3JaM8RvpbipsG5jk695wX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景旻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_792K3TDRYck4vf54s3AWhp
          claim_id: c_ZSCWQmMZRGb6S4QMzr3ecp
          source_id: s_phT5kNaaNGaN2Kmjr523dJ
          stance: supports
          locator: CBDB:186490
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 878
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qCUWCD2W5wrokulQnjnBKN
        subject_person_id: p_A14LP6YVSXyCHjhPT46BAe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z3JaM8RvpbipsG5jk695wX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wzC3fp4Pm49BlypOWX7n6L
          claim_id: c_qCUWCD2W5wrokulQnjnBKN
          source_id: s_jj9pH1K8E1rHVwKkhYMsU8
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jj9pH1K8E1rHVwKkhYMsU8
            source_type: api_record
            title: 中国历代人物传记资料库：王怡政（CBDB 146314）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146314&o=json
            external_identifier: CBDB:146314
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_A14LP6YVSXyCHjhPT46BAe
        status: active
        display_name: 王怡政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景旻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王景旻（卒于878年），史料所见人物。本项目依据《中国历代人物传记资料库：王景旻（CBDB 186490）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 878年 | accepted |
| name.primary | 王景旻 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_A14LP6YVSXyCHjhPT46BAe | 王怡政 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景旻（CBDB 186490）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186490&o=json)
- [中国历代人物传记资料库：王怡政（CBDB 146314）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146314&o=json)

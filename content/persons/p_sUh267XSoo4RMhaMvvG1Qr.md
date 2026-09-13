---
schema: wang-person/v1
id: p_sUh267XSoo4RMhaMvvG1Qr
status: active
merged_into: null
display_name: 王萬釗
cbdb_id: 58622
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HPjp3YpieWxCiHHN62pAJg
        subject_person_id: p_sUh267XSoo4RMhaMvvG1Qr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬釗（卒于1872年），史料所见人物。本项目依据《中国历代人物传记资料库：王萬釗（CBDB 58622）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_-eUKhYwWkvMhNKajglnCy4
          claim_id: c_HPjp3YpieWxCiHHN62pAJg
          source_id: s_1nUJGtdURWtumuyCmQA8J6
          stance: supports
          locator: CBDB:58622
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_1nUJGtdURWtumuyCmQA8J6
            source_type: api_record
            title: 中国历代人物传记资料库：王萬釗（CBDB 58622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58622&o=json
            external_identifier: CBDB:58622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_e9U1U2J1uj94Pk2wfyUg1r
        subject_person_id: p_sUh267XSoo4RMhaMvvG1Qr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1872年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1872-01-01
            latest: 1872-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YUocKayqdNHW3aF8HSku6D
          claim_id: c_e9U1U2J1uj94Pk2wfyUg1r
          source_id: s_1nUJGtdURWtumuyCmQA8J6
          stance: supports
          locator: CBDB:58622
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1872
          source:
            id: s_1nUJGtdURWtumuyCmQA8J6
            source_type: api_record
            title: 中国历代人物传记资料库：王萬釗（CBDB 58622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58622&o=json
            external_identifier: CBDB:58622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gE93DQBV8tAKuP36BSUfCT
        subject_person_id: p_sUh267XSoo4RMhaMvvG1Qr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬釗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LkBVmRXAJ9J8Xwz1VYLgKG
          claim_id: c_gE93DQBV8tAKuP36BSUfCT
          source_id: s_1nUJGtdURWtumuyCmQA8J6
          stance: supports
          locator: CBDB:58622
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1872
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
  descendants: []
  other: []
---

# 王萬釗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王萬釗（卒于1872年），史料所见人物。本项目依据《中国历代人物传记资料库：王萬釗（CBDB 58622）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1872年 | accepted |
| name.primary | 王萬釗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萬釗（CBDB 58622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58622&o=json)

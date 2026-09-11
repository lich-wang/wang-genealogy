---
schema: wang-person/v1
id: p_C538WK4TnVgFkLGApHN3DR
status: active
merged_into: null
display_name: 王綍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZAHokhLUkkw26ukVXT4NtL
        subject_person_id: p_C538WK4TnVgFkLGApHN3DR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w3keZNddMnqmmDAcQrVnNr
          claim_id: c_ZAHokhLUkkw26ukVXT4NtL
          source_id: s_xXB6J14eLibfP5Mg3nCHV1
          stance: supports
          locator: CBDB:415236
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（415236）
          source: &a1
            id: s_xXB6J14eLibfP5Mg3nCHV1
            source_type: api_record
            title: 中国历代人物传记资料库：王綍（CBDB 415236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415236&o=json
            external_identifier: CBDB:415236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.998Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ehns8Yo25fJ2JcvLgr1DSd
        subject_person_id: p_C538WK4TnVgFkLGApHN3DR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綍，史料所见人物。本项目依据《中国历代人物传记资料库：王綍（CBDB 415236）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KvlSIxl15JEvaywTzvMRef
          claim_id: c_ehns8Yo25fJ2JcvLgr1DSd
          source_id: s_xXB6J14eLibfP5Mg3nCHV1
          stance: supports
          locator: CBDB:415236
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王綍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綍 | accepted |
| bio.summary | 王綍，史料所见人物。本项目依据《中国历代人物传记资料库：王綍（CBDB 415236）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綍（CBDB 415236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415236&o=json)

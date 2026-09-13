---
schema: wang-person/v1
id: p_CjC4SW7tdrT9xAY3iQdgQB
status: merged
merged_into: p_6LbpfJW9bcMf9hfDL3m9ms
display_name: 卓氏
revision: 2
cbdb_id: 45902
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3PQipJZqfEMYmeseE820xZ
        subject_person_id: p_CjC4SW7tdrT9xAY3iQdgQB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 卓氏，史料所见人物。本项目依据《中国历代人物传记资料库：卓氏(王居仁妻)（CBDB 45902）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_liQqVznPt1mHPwunnhApDo
          claim_id: c_3PQipJZqfEMYmeseE820xZ
          source_id: s_Phn90jYw3R4mE-OQdtp_vs
          stance: supports
          locator: CBDB:45902
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Phn90jYw3R4mE-OQdtp_vs
            source_type: api_record
            title: 中国历代人物传记资料库：卓氏(王居仁妻)（CBDB 45902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45902&o=json
            external_identifier: CBDB:45902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xjuYLGFJdmE_XbFaxnviQ8
        subject_person_id: p_CjC4SW7tdrT9xAY3iQdgQB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 卓氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BpjGP9rpyJ46Wm2jD8zQPP
          claim_id: c_xjuYLGFJdmE_XbFaxnviQ8
          source_id: s_Phn90jYw3R4mE-OQdtp_vs
          stance: supports
          locator: CBDB:45902
          quotation: null
          interpretation_note: CBDB 明确记录的王居仁配偶
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

# 卓氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 卓氏，史料所见人物。本项目依据《中国历代人物传记资料库：卓氏(王居仁妻)（CBDB 45902）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 卓氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：卓氏(王居仁妻)（CBDB 45902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45902&o=json)

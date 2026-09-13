---
schema: wang-person/v1
id: p_4rxkYJcuZD4JyP5fvTjnvP
status: active
merged_into: null
display_name: 王愈太
cbdb_id: 526807
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6mXHVPX4Kq63q26zSPAbXm
        subject_person_id: p_4rxkYJcuZD4JyP5fvTjnvP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愈太，史料所见人物。本项目依据《中国历代人物传记资料库：王愈太（CBDB 526807）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_VO6SGtjdqNgNayTMjou0w4
          claim_id: c_6mXHVPX4Kq63q26zSPAbXm
          source_id: s_Qk5dZVP1SQvFFXcQwHMmwf
          stance: supports
          locator: CBDB:526807
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Qk5dZVP1SQvFFXcQwHMmwf
            source_type: api_record
            title: 中国历代人物传记资料库：王愈太（CBDB 526807）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526807&o=json
            external_identifier: CBDB:526807
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_i2CMFAN3kCeucgPRyAaWPX
        subject_person_id: p_4rxkYJcuZD4JyP5fvTjnvP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愈太
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BM6QA4wUJ9rcjQZN12or9E
          claim_id: c_i2CMFAN3kCeucgPRyAaWPX
          source_id: s_Qk5dZVP1SQvFFXcQwHMmwf
          stance: supports
          locator: CBDB:526807
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Hu1vgJp4Tn3H6xJ9eEsurL
        subject_person_id: p_4rxkYJcuZD4JyP5fvTjnvP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LrMmLqP8UX3PAEont2NFmW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XYW9wTbB2vicUM0fMHocZF
          claim_id: c_Hu1vgJp4Tn3H6xJ9eEsurL
          source_id: s_Qk5dZVP1SQvFFXcQwHMmwf
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12966：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Qk5dZVP1SQvFFXcQwHMmwf
            source_type: api_record
            title: 中国历代人物传记资料库：王愈太（CBDB 526807）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526807&o=json
            external_identifier: CBDB:526807
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_LrMmLqP8UX3PAEont2NFmW
        status: active
        display_name: 王洪順
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王愈太

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王愈太，史料所见人物。本项目依据《中国历代人物传记资料库：王愈太（CBDB 526807）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王愈太 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_LrMmLqP8UX3PAEont2NFmW | 王洪順 | accepted |

## 外部来源

- [中国历代人物传记资料库：王愈太（CBDB 526807）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526807&o=json)

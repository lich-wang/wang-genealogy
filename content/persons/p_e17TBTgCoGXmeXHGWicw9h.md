---
schema: wang-person/v1
id: p_e17TBTgCoGXmeXHGWicw9h
status: active
merged_into: null
display_name: 王承謙
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_du6XKQrumQU91PaGtfm533
        subject_person_id: p_e17TBTgCoGXmeXHGWicw9h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WNErTE6uFm1d56bDkRUAkK
          claim_id: c_du6XKQrumQU91PaGtfm533
          source_id: s_VU5AwBQA7y8HFfrcTjdMHS
          stance: supports
          locator: CBDB:526943
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526943）
          source: &a1
            id: s_VU5AwBQA7y8HFfrcTjdMHS
            source_type: api_record
            title: 中国历代人物传记资料库：王承謙（CBDB 526943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526943&o=json
            external_identifier: CBDB:526943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.346Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g8Qh8uJ3h4TGnrhC1QpiDG
        subject_person_id: p_e17TBTgCoGXmeXHGWicw9h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承謙，史料所见人物。本项目依据《中国历代人物传记资料库：王承謙（CBDB 526943）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JkWvbJYhLelpMhctZNvxP8
          claim_id: c_g8Qh8uJ3h4TGnrhC1QpiDG
          source_id: s_VU5AwBQA7y8HFfrcTjdMHS
          stance: supports
          locator: CBDB:526943
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RVXnAEvWJmbsyeUHDQdHBG
        subject_person_id: p_Vwq963UZgCdEz4M1RLtLbW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e17TBTgCoGXmeXHGWicw9h
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zo5zm2UBRP4JXsC66RjzzC
          claim_id: c_RVXnAEvWJmbsyeUHDQdHBG
          source_id: s_VU5AwBQA7y8HFfrcTjdMHS
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13116：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Vwq963UZgCdEz4M1RLtLbW
        status: active
        display_name: 王榮烈
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王承謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承謙 | accepted |
| bio.summary | 王承謙，史料所见人物。本项目依据《中国历代人物传记资料库：王承謙（CBDB 526943）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Vwq963UZgCdEz4M1RLtLbW | 王榮烈 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承謙（CBDB 526943）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526943&o=json)

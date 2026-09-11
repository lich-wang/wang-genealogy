---
schema: wang-person/v1
id: p_sEX6BoyS2rpFEjZqz3MGwz
status: active
merged_into: null
display_name: 李毓清
revision: 1
cbdb_id: 54266
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SFKPp1Z3Z3EArgobvQw-jT
        subject_person_id: p_sEX6BoyS2rpFEjZqz3MGwz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李毓清，史料所见人物。本项目依据《中国历代人物传记资料库：李毓清（CBDB 54266）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fGlaWZcD8ou8D4D7ntjDEZ
          claim_id: c_SFKPp1Z3Z3EArgobvQw-jT
          source_id: s_tLeBL04m51Q2srxyk_vyn7
          stance: supports
          locator: CBDB:54266
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_tLeBL04m51Q2srxyk_vyn7
            source_type: api_record
            title: 中国历代人物传记资料库：李毓清（CBDB 54266）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54266&o=json
            external_identifier: CBDB:54266
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_37wEJQM-jHPBVXczD6p361
        subject_person_id: p_sEX6BoyS2rpFEjZqz3MGwz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李毓清
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r-FztgbC1KebyNReCwdOzh
          claim_id: c_37wEJQM-jHPBVXczD6p361
          source_id: s_tLeBL04m51Q2srxyk_vyn7
          stance: supports
          locator: CBDB:54266
          quotation: null
          interpretation_note: CBDB 明确记录的王騶配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_X7Kf3dbKyNRcSNEOlB1q24
        subject_person_id: p_NZLA6g9uGGjPLH4EQ9Nhd9
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_sEX6BoyS2rpFEjZqz3MGwz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RCZ4SjUj1F7n22qiAuMK1m
          claim_id: c_X7Kf3dbKyNRcSNEOlB1q24
          source_id: s_tLeBL04m51Q2srxyk_vyn7
          stance: supports
          locator: CBDB 双向互证（妻子 李毓清）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NZLA6g9uGGjPLH4EQ9Nhd9
        status: active
        display_name: 王騶
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李毓清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李毓清，史料所见人物。本项目依据《中国历代人物传记资料库：李毓清（CBDB 54266）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 李毓清 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_NZLA6g9uGGjPLH4EQ9Nhd9 | 王騶 | accepted |

## 外部来源

- [中国历代人物传记资料库：李毓清（CBDB 54266）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54266&o=json)

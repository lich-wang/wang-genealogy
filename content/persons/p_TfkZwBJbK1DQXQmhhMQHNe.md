---
schema: wang-person/v1
id: p_TfkZwBJbK1DQXQmhhMQHNe
status: active
merged_into: null
display_name: 蔡香君
revision: 1
cbdb_id: 122375
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HLFk-ep7LN31BQLXBC3bE4
        subject_person_id: p_TfkZwBJbK1DQXQmhhMQHNe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蔡香君，史料所见人物。本项目依据《中国历代人物传记资料库：蔡香君（CBDB 122375）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aJRj6OLO65u5v9abxoPP9j
          claim_id: c_HLFk-ep7LN31BQLXBC3bE4
          source_id: s_qGjAlLdWxou6g1j6xFVQzX
          stance: supports
          locator: CBDB:122375
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_qGjAlLdWxou6g1j6xFVQzX
            source_type: api_record
            title: 中国历代人物传记资料库：蔡香君（CBDB 122375）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122375&o=json
            external_identifier: CBDB:122375
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JafM8kIwKEBa048eDTrSBN
        subject_person_id: p_TfkZwBJbK1DQXQmhhMQHNe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蔡香君
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-zqIlRklw67wgBz5r2NR5Y
          claim_id: c_JafM8kIwKEBa048eDTrSBN
          source_id: s_qGjAlLdWxou6g1j6xFVQzX
          stance: supports
          locator: CBDB:122375
          quotation: null
          interpretation_note: CBDB 明确记录的王月配偶
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
        id: c_2tiFKwmXkUsIf94VnwfhnW
        subject_person_id: p_H3nYPzPtFcmw5YUiGcy29G
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_TfkZwBJbK1DQXQmhhMQHNe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tOercxIisOiOSW6rH8KsTU
          claim_id: c_2tiFKwmXkUsIf94VnwfhnW
          source_id: s_qGjAlLdWxou6g1j6xFVQzX
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4960：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_H3nYPzPtFcmw5YUiGcy29G
        status: active
        display_name: 王月
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 蔡香君

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 蔡香君，史料所见人物。本项目依据《中国历代人物传记资料库：蔡香君（CBDB 122375）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 蔡香君 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_H3nYPzPtFcmw5YUiGcy29G | 王月 | accepted |

## 外部来源

- [中国历代人物传记资料库：蔡香君（CBDB 122375）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122375&o=json)

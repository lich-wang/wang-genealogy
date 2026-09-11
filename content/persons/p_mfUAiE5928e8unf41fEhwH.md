---
schema: wang-person/v1
id: p_mfUAiE5928e8unf41fEhwH
status: active
merged_into: null
display_name: 王均
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Xd7D5V237p9XPMPYRLWcMY
        subject_person_id: p_mfUAiE5928e8unf41fEhwH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王均
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GmpDKoCryMe3RuPBf6hdBK
          claim_id: c_Xd7D5V237p9XPMPYRLWcMY
          source_id: s_XmYU3XvGAMoVzdECzViSBb
          stance: supports
          locator: CBDB:166234
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（166234）
          source: &a1
            id: s_XmYU3XvGAMoVzdECzViSBb
            source_type: api_record
            title: 中国历代人物传记资料库：王均（CBDB 166234）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166234&o=json
            external_identifier: CBDB:166234
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.982Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LQAtUHio4Bt8ELdyMAwFp6
        subject_person_id: p_mfUAiE5928e8unf41fEhwH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王均，史料所见人物。本项目依据《中国历代人物传记资料库：王均（CBDB 166234）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t1z_uwNJ381NCkYWr5XvZS
          claim_id: c_LQAtUHio4Bt8ELdyMAwFp6
          source_id: s_XmYU3XvGAMoVzdECzViSBb
          stance: supports
          locator: CBDB:166234
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Hkhg-r6_psoawpEgTuhhA0
        subject_person_id: p_GCUbRsVW8TQC8UPFJ4RVue
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mfUAiE5928e8unf41fEhwH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u8q4ItyaGbOfno67J_dLrY
          claim_id: c_Hkhg-r6_psoawpEgTuhhA0
          source_id: s_XmYU3XvGAMoVzdECzViSBb
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Yuanhe65：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GCUbRsVW8TQC8UPFJ4RVue
        status: active
        display_name: 王海朝
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王均

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王均 | accepted |
| bio.summary | 王均，史料所见人物。本项目依据《中国历代人物传记资料库：王均（CBDB 166234）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GCUbRsVW8TQC8UPFJ4RVue | 王海朝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王均（CBDB 166234）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166234&o=json)

---
schema: wang-person/v1
id: p_ApLXu2GBrF5ZAbkDYreKzV
status: active
merged_into: null
display_name: 張佳儒
revision: 1
cbdb_id: 123175
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X-oLEC1OTUIQJ3YKSYSVw7
        subject_person_id: p_ApLXu2GBrF5ZAbkDYreKzV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張佳儒，史料所见人物。本项目依据《中国历代人物传记资料库：張佳儒（CBDB 123175）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ip1GGkBPP2fq4SV1FPBEC7
          claim_id: c_X-oLEC1OTUIQJ3YKSYSVw7
          source_id: s_W9qdtdzpTYbBeul_xefw9C
          stance: supports
          locator: CBDB:123175
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_W9qdtdzpTYbBeul_xefw9C
            source_type: api_record
            title: 中国历代人物传记资料库：張佳儒（CBDB 123175）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123175&o=json
            external_identifier: CBDB:123175
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c__fNe4bVY6ydisPaSpuIvtG
        subject_person_id: p_ApLXu2GBrF5ZAbkDYreKzV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張佳儒
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qCXoint3HIFdk6HjjeFpyl
          claim_id: c__fNe4bVY6ydisPaSpuIvtG
          source_id: s_W9qdtdzpTYbBeul_xefw9C
          stance: supports
          locator: CBDB:123175
          quotation: null
          interpretation_note: CBDB 明确记录的王耀基配偶
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
        id: c_KPdUkePbaGa0fiTQK8_TuQ
        subject_person_id: p_HQN79dJJDzCif1Vqe18XqZ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ApLXu2GBrF5ZAbkDYreKzV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FwGwfbnZR03KIr-zlH_kvV
          claim_id: c_KPdUkePbaGa0fiTQK8_TuQ
          source_id: s_W9qdtdzpTYbBeul_xefw9C
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #5328：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HQN79dJJDzCif1Vqe18XqZ
        status: active
        display_name: 王耀基
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張佳儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 張佳儒，史料所见人物。本项目依据《中国历代人物传记资料库：張佳儒（CBDB 123175）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 張佳儒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_HQN79dJJDzCif1Vqe18XqZ | 王耀基 | accepted |

## 外部来源

- [中国历代人物传记资料库：張佳儒（CBDB 123175）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123175&o=json)

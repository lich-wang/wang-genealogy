---
schema: wang-person/v1
id: p_aKzqvNK69JVAWyY43CLQPK
status: active
merged_into: null
display_name: 王靜儀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EaLFTrR1pBi3s4JLe2nMmR
        subject_person_id: p_aKzqvNK69JVAWyY43CLQPK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靜儀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t1kSmhfqMN3WihkhtGq2kS
          claim_id: c_EaLFTrR1pBi3s4JLe2nMmR
          source_id: s_9KGuFfQuJ6KcB58sh7o7n2
          stance: supports
          locator: CBDB:122194
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（122194）
          source: &a1
            id: s_9KGuFfQuJ6KcB58sh7o7n2
            source_type: api_record
            title: 中国历代人物传记资料库：王靜儀（CBDB 122194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122194&o=json
            external_identifier: CBDB:122194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.921Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CBjeXYqueUf2tX5Gj3he45
        subject_person_id: p_aKzqvNK69JVAWyY43CLQPK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1774年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RL16DFNApG289DYZ1GpHDo
          claim_id: c_CBjeXYqueUf2tX5Gj3he45
          source_id: s_9KGuFfQuJ6KcB58sh7o7n2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_CDSSBPRxNxQBYq73oT3Qm8
        subject_person_id: p_aKzqvNK69JVAWyY43CLQPK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1793年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gwv4DpwCdjPU2FDcGDYVt4
          claim_id: c_CDSSBPRxNxQBYq73oT3Qm8
          source_id: s_9KGuFfQuJ6KcB58sh7o7n2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1cs6hQEEERkMrGLmSXWXZu
        subject_person_id: p_aKzqvNK69JVAWyY43CLQPK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靜儀（1774年—1793年），史料所见人物。本项目依据《中国历代人物传记资料库：王靜儀（CBDB 122194）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PyV6iAEGr6PSG3UflEafzD
          claim_id: c_1cs6hQEEERkMrGLmSXWXZu
          source_id: s_9KGuFfQuJ6KcB58sh7o7n2
          stance: supports
          locator: CBDB:122194
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ScNK7gFCd_1UZfX882P5BO
        subject_person_id: p_fTKKWyZ4tsB4z3Yh6eZTJi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aKzqvNK69JVAWyY43CLQPK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PVAlZUJo-bLB2c4p3fGW-K
          claim_id: c_ScNK7gFCd_1UZfX882P5BO
          source_id: s_9KGuFfQuJ6KcB58sh7o7n2
          stance: supports
          locator: 明清婦女著作數據庫，4632：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fTKKWyZ4tsB4z3Yh6eZTJi
        status: active
        display_name: 王錫琛
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_IXz0AEGNSZ5Y6EeOTbUeci
        subject_person_id: p_ZiAK8zAJR9h7qSc2BgYZR5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aKzqvNK69JVAWyY43CLQPK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-Z46dArYjI2t23eRdKsnhr
          claim_id: c_IXz0AEGNSZ5Y6EeOTbUeci
          source_id: s_9KGuFfQuJ6KcB58sh7o7n2
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4632：祖父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZiAK8zAJR9h7qSc2BgYZR5
        status: active
        display_name: 王者輔
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王靜儀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王靜儀 | accepted |
| birth.date | 1774年 | accepted |
| death.date | 1793年 | accepted |
| bio.summary | 王靜儀（1774年—1793年），史料所见人物。本项目依据《中国历代人物传记资料库：王靜儀（CBDB 122194）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fTKKWyZ4tsB4z3Yh6eZTJi | 王錫琛 | accepted |
| ancestors | p_ZiAK8zAJR9h7qSc2BgYZR5 | 王者輔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王靜儀（CBDB 122194）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122194&o=json)

---
schema: wang-person/v1
id: p_sJV3o1g9cdPaCH2Ho9mKA7
status: active
merged_into: null
display_name: 王祖慶
cbdb_id: 56784
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Coun2x1uvTLbTNF7MJaa95
        subject_person_id: p_sJV3o1g9cdPaCH2Ho9mKA7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖慶，史料所见人物。本项目依据《中国历代人物传记资料库：王祖慶（CBDB 56784）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_HtCZrxKoBpKBKeogU47TNZ
          claim_id: c_Coun2x1uvTLbTNF7MJaa95
          source_id: s_dsVU5JMT9DfaoksKXCf7FV
          stance: supports
          locator: CBDB:56784
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_dsVU5JMT9DfaoksKXCf7FV
            source_type: api_record
            title: 中国历代人物传记资料库：王祖慶（CBDB 56784）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56784&o=json
            external_identifier: CBDB:56784
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PrFUG866acXELLZ5qxQcuN
        subject_person_id: p_sJV3o1g9cdPaCH2Ho9mKA7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_A73h1HmsaXcSK7SJEpsxnh
          claim_id: c_PrFUG866acXELLZ5qxQcuN
          source_id: s_dsVU5JMT9DfaoksKXCf7FV
          stance: supports
          locator: CBDB:56784
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1401-1500）｜历史性依据：CBDB 朝代 = 清
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
        id: c_9_DyxOnQcEBpcRDuLXX6kM
        subject_person_id: p_sJV3o1g9cdPaCH2Ho9mKA7
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_V7gb4EHpjS24HworFh3dgj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ksVIbavHEeGHyK84JxcgbY
          claim_id: c_9_DyxOnQcEBpcRDuLXX6kM
          source_id: s_6iYlQlPw1U1q3FQg0x5Ofj
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #669, HuWenKai #312：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6iYlQlPw1U1q3FQg0x5Ofj
            source_type: api_record
            title: 中国历代人物传记资料库：吳茝春（CBDB 56780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56780&o=json
            external_identifier: CBDB:56780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_V7gb4EHpjS24HworFh3dgj
        status: active
        display_name: 吳茝春
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王祖慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王祖慶，史料所见人物。本项目依据《中国历代人物传记资料库：王祖慶（CBDB 56784）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王祖慶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_V7gb4EHpjS24HworFh3dgj | 吳茝春 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祖慶（CBDB 56784）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56784&o=json)
- [中国历代人物传记资料库：吳茝春（CBDB 56780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56780&o=json)

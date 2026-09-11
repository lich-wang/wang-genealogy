---
schema: wang-person/v1
id: p_gndgvkLL1MqogJouWEE1Z1
status: active
merged_into: null
display_name: 王琛
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RLzBB7XakvMsfJDESbZ8Af
        subject_person_id: p_gndgvkLL1MqogJouWEE1Z1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iH2KV3dE9ZYBq1QG6PMwaS
          claim_id: c_RLzBB7XakvMsfJDESbZ8Af
          source_id: s_qL86m3QcUSiGePJ1b8UEgz
          stance: supports
          locator: CBDB:122910
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（122910）
          source: &a1
            id: s_qL86m3QcUSiGePJ1b8UEgz
            source_type: api_record
            title: 中国历代人物传记资料库：王琛（CBDB 122910）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122910&o=json
            external_identifier: CBDB:122910
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XzMBC5M88rGu4bYP2BU3TQ
        subject_person_id: p_gndgvkLL1MqogJouWEE1Z1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琛，史料所见人物。本项目依据《中国历代人物传记资料库：王琛（CBDB 122910）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hoQ2Cix4hr-nnltqDQ5Pj6
          claim_id: c_XzMBC5M88rGu4bYP2BU3TQ
          source_id: s_qL86m3QcUSiGePJ1b8UEgz
          stance: supports
          locator: CBDB:122910
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
  spouses:
    - claim:
        id: c_Ol5IcblC8wX2soH5ZKtluP
        subject_person_id: p_gndgvkLL1MqogJouWEE1Z1
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_pXaQvaZa6kdZyw9NrtBAtA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8gIQHt3HOOrZG3ShUbwInB
          claim_id: c_Ol5IcblC8wX2soH5ZKtluP
          source_id: s_wa6MIvAI9dVDSkvm19gcdq
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3438, HuWenKai #242：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wa6MIvAI9dVDSkvm19gcdq
            source_type: api_record
            title: 中国历代人物传记资料库：沈宋圻（CBDB 119268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119268&o=json
            external_identifier: CBDB:119268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pXaQvaZa6kdZyw9NrtBAtA
        status: active
        display_name: 沈宋圻
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王琛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琛 | accepted |
| bio.summary | 王琛，史料所见人物。本项目依据《中国历代人物传记资料库：王琛（CBDB 122910）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_pXaQvaZa6kdZyw9NrtBAtA | 沈宋圻 | accepted |

## 外部来源

- [中国历代人物传记资料库：沈宋圻（CBDB 119268）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119268&o=json)
- [中国历代人物传记资料库：王琛（CBDB 122910）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122910&o=json)

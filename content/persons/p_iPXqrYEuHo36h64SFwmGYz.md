---
schema: wang-person/v1
id: p_iPXqrYEuHo36h64SFwmGYz
status: active
merged_into: null
display_name: 韓充
revision: 1
cbdb_id: 119186
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E146iTqBJ6VN6pNLJ4J5W4
        subject_person_id: p_iPXqrYEuHo36h64SFwmGYz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 韓充，史料所见人物。本项目依据《中国历代人物传记资料库：韓充（CBDB 119186）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RhWWE5BCxI6uxiAIpnxXL9
          claim_id: c_E146iTqBJ6VN6pNLJ4J5W4
          source_id: s_M7OlfMuZthrJG2OOUfpcLS
          stance: supports
          locator: CBDB:119186
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_M7OlfMuZthrJG2OOUfpcLS
            source_type: api_record
            title: 中国历代人物传记资料库：韓充（CBDB 119186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119186&o=json
            external_identifier: CBDB:119186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6j94JRkdqVt52xLPfakL9g
        subject_person_id: p_iPXqrYEuHo36h64SFwmGYz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 韓充
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6Xu7i9a0saNTB_V_nBXREf
          claim_id: c_6j94JRkdqVt52xLPfakL9g
          source_id: s_M7OlfMuZthrJG2OOUfpcLS
          stance: supports
          locator: CBDB:119186
          quotation: null
          interpretation_note: CBDB 明确记录的王仙媛配偶
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
        id: c_UL0sr2tkfubel7fqgdGdrz
        subject_person_id: p_Eb9mfCFLPFFzhw9gTgo3QX
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_iPXqrYEuHo36h64SFwmGYz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZK8B4zzqomgoIg3T1kGkTY
          claim_id: c_UL0sr2tkfubel7fqgdGdrz
          source_id: s_M7OlfMuZthrJG2OOUfpcLS
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3312：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Eb9mfCFLPFFzhw9gTgo3QX
        status: active
        display_name: 王仙媛
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 韓充

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 韓充，史料所见人物。本项目依据《中国历代人物传记资料库：韓充（CBDB 119186）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 韓充 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Eb9mfCFLPFFzhw9gTgo3QX | 王仙媛 | accepted |

## 外部来源

- [中国历代人物传记资料库：韓充（CBDB 119186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119186&o=json)

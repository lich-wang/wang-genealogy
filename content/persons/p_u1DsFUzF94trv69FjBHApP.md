---
schema: wang-person/v1
id: p_u1DsFUzF94trv69FjBHApP
status: active
merged_into: null
display_name: 趙氏
revision: 1
cbdb_id: 572761
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_64j61SOgl6GfrxKJFT332h
        subject_person_id: p_u1DsFUzF94trv69FjBHApP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙氏，史料所见人物。本项目依据《中国历代人物传记资料库：趙氏(王梧妻)（CBDB 572761）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GvL6Xjdp1Su1BuKPjM4s1U
          claim_id: c_64j61SOgl6GfrxKJFT332h
          source_id: s_oFIgySuKiwf2a1yGi2mE6J
          stance: supports
          locator: CBDB:572761
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_oFIgySuKiwf2a1yGi2mE6J
            source_type: api_record
            title: 中国历代人物传记资料库：趙氏(王梧妻)（CBDB 572761）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572761&o=json
            external_identifier: CBDB:572761
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EdGchI_Un1339LerEH3NPw
        subject_person_id: p_u1DsFUzF94trv69FjBHApP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HgGHpe5jP-P6alvpc-A2HJ
          claim_id: c_EdGchI_Un1339LerEH3NPw
          source_id: s_oFIgySuKiwf2a1yGi2mE6J
          stance: supports
          locator: CBDB:572761
          quotation: null
          interpretation_note: CBDB 明确记录的王梧配偶
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
        id: c_SDmcnNzZn7uaDgAik8rts2
        subject_person_id: p_xYAi4kPbDNtEHzbVT8xw3s
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_u1DsFUzF94trv69FjBHApP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dc2fdhEgiBvOmhR-YUdVGc
          claim_id: c_SDmcnNzZn7uaDgAik8rts2
          source_id: s_oFIgySuKiwf2a1yGi2mE6J
          stance: supports
          locator: 東都冢墓遺文，趙士宇妻王氏墓志：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xYAi4kPbDNtEHzbVT8xw3s
        status: active
        display_name: 王梧
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 趙氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 趙氏，史料所见人物。本项目依据《中国历代人物传记资料库：趙氏(王梧妻)（CBDB 572761）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 趙氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_xYAi4kPbDNtEHzbVT8xw3s | 王梧 | accepted |

## 外部来源

- [中国历代人物传记资料库：趙氏(王梧妻)（CBDB 572761）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572761&o=json)

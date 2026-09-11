---
schema: wang-person/v1
id: p_xYAi4kPbDNtEHzbVT8xw3s
status: active
merged_into: null
display_name: 王梧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qt3hG7pgbtUq766AwGyB4J
        subject_person_id: p_xYAi4kPbDNtEHzbVT8xw3s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C1RRZyCZdPyUtCopRq4ub3
          claim_id: c_qt3hG7pgbtUq766AwGyB4J
          source_id: s_NuAyQNL4Do3nUzXrCJCu9u
          stance: supports
          locator: CBDB:572763
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（572763）
          source: &a1
            id: s_NuAyQNL4Do3nUzXrCJCu9u
            source_type: api_record
            title: 中国历代人物传记资料库：王梧（CBDB 572763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572763&o=json
            external_identifier: CBDB:572763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.892Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ac5DxpnowLaSNLUGWqHwvF
        subject_person_id: p_xYAi4kPbDNtEHzbVT8xw3s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bCDDWopxTUheB6kWwptSEL
          claim_id: c_Ac5DxpnowLaSNLUGWqHwvF
          source_id: s_NuAyQNL4Do3nUzXrCJCu9u
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
          source:
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
      object_person:
        id: p_u1DsFUzF94trv69FjBHApP
        status: active
        display_name: 趙氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王梧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王梧 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_u1DsFUzF94trv69FjBHApP | 趙氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王梧（CBDB 572763）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572763&o=json)
- [中国历代人物传记资料库：趙氏(王梧妻)（CBDB 572761）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572761&o=json)

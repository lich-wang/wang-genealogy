---
schema: wang-person/v1
id: p_GG19HjshvqyvDbfowdsVH9
status: active
merged_into: null
display_name: 王孜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jp3sjEufiSaAPwTaZPQ1XJ
        subject_person_id: p_GG19HjshvqyvDbfowdsVH9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M1Q1kSZVkmmhPGcL1s1N5K
          claim_id: c_Jp3sjEufiSaAPwTaZPQ1XJ
          source_id: s_9WMtxUjBdJzt8NJN96DvG6
          stance: supports
          locator: CBDB:212635
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212635）
          source: &a1
            id: s_9WMtxUjBdJzt8NJN96DvG6
            source_type: api_record
            title: 中国历代人物传记资料库：王孜（CBDB 212635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212635&o=json
            external_identifier: CBDB:212635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.089Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DUwKcxvxf6c3TLaTjshAP9
        subject_person_id: p_GG19HjshvqyvDbfowdsVH9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孜，明人物。萬曆二年進士。（中国历代人物传记资料库 CBDB 212635）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9clLZ9ca7e50v-w1e2EX-F
          claim_id: c_DUwKcxvxf6c3TLaTjshAP9
          source_id: s_9WMtxUjBdJzt8NJN96DvG6
          stance: supports
          locator: CBDB:212635
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_MTBKYP1q81kTnTBjX_ELz6
        subject_person_id: p_GG19HjshvqyvDbfowdsVH9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9WD2WpcaAMBVHNJjVMQ2UR
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k2J_WIKEy918PEET7VwwMk
          claim_id: c_MTBKYP1q81kTnTBjX_ELz6
          source_id: s_9WMtxUjBdJzt8NJN96DvG6
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第三十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9WD2WpcaAMBVHNJjVMQ2UR
        status: active
        display_name: 王錄
        merged_into_person_id: null
  other: []
---

# 王孜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孜 | accepted |
| bio.summary | 王孜，明人物。萬曆二年進士。（中国历代人物传记资料库 CBDB 212635） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_9WD2WpcaAMBVHNJjVMQ2UR | 王錄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孜（CBDB 212635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212635&o=json)

---
schema: wang-person/v1
id: p_5VEtn9hdqZGfhD1DRs1AKo
status: active
merged_into: null
display_name: 王景泰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dSHEWE7NU6hQd2Aj5RMq8R
        subject_person_id: p_5VEtn9hdqZGfhD1DRs1AKo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t5cGjQnrjSz97WFVaF9SBT
          claim_id: c_dSHEWE7NU6hQd2Aj5RMq8R
          source_id: s_JvF7Nq9Vbdv5924eN93UwA
          stance: supports
          locator: CBDB:638491
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638491）
          source: &a1
            id: s_JvF7Nq9Vbdv5924eN93UwA
            source_type: api_record
            title: 中国历代人物传记资料库：王景泰（CBDB 638491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638491&o=json
            external_identifier: CBDB:638491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.697Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PaxMH4yNAo4FHEMCepVmwS
        subject_person_id: p_5VEtn9hdqZGfhD1DRs1AKo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景泰，清人物。籍贯萊州府，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 638491）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mzg3M3LXMWJJooEtiAiJ4m
          claim_id: c_PaxMH4yNAo4FHEMCepVmwS
          source_id: s_JvF7Nq9Vbdv5924eN93UwA
          stance: supports
          locator: CBDB:638491
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
  descendants: []
  other: []
---

# 王景泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景泰 | accepted |
| bio.summary | 王景泰，清人物。籍贯萊州府，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 638491） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景泰（CBDB 638491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638491&o=json)

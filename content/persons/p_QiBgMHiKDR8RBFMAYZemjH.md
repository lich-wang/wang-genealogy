---
schema: wang-person/v1
id: p_QiBgMHiKDR8RBFMAYZemjH
status: active
merged_into: null
display_name: 趙琳
revision: 1
cbdb_id: 121700
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GtY9sVEEfuyC06Lc3qiv9A
        subject_person_id: p_QiBgMHiKDR8RBFMAYZemjH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙琳，史料所见人物。本项目依据《中国历代人物传记资料库：趙琳（CBDB 121700）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1PX6TMYt7W9LFItb2XE4xl
          claim_id: c_GtY9sVEEfuyC06Lc3qiv9A
          source_id: s_R2Szc1ndwswW1ADrw-0Rg2
          stance: supports
          locator: CBDB:121700
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_R2Szc1ndwswW1ADrw-0Rg2
            source_type: api_record
            title: 中国历代人物传记资料库：趙琳（CBDB 121700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121700&o=json
            external_identifier: CBDB:121700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3s87DZ9qpp-wxVgyy_S1RC
        subject_person_id: p_QiBgMHiKDR8RBFMAYZemjH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙琳
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Nu2f3Sp5t6h7ud56qTiW20
          claim_id: c_3s87DZ9qpp-wxVgyy_S1RC
          source_id: s_R2Szc1ndwswW1ADrw-0Rg2
          stance: supports
          locator: CBDB:121700
          quotation: null
          interpretation_note: CBDB 明确记录的王竹素配偶
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
        id: c_FtmkdeawBLR42wjx9L0N98
        subject_person_id: p_D9obMig5jN89VZFYFZHVPZ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_QiBgMHiKDR8RBFMAYZemjH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EtYU1sC_N7sO6MGSeRK20M
          claim_id: c_FtmkdeawBLR42wjx9L0N98
          source_id: s_R2Szc1ndwswW1ADrw-0Rg2
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4147, HuWenKai #232：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_D9obMig5jN89VZFYFZHVPZ
        status: active
        display_name: 王竹素
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 趙琳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 趙琳，史料所见人物。本项目依据《中国历代人物传记资料库：趙琳（CBDB 121700）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 趙琳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_D9obMig5jN89VZFYFZHVPZ | 王竹素 | accepted |

## 外部来源

- [中国历代人物传记资料库：趙琳（CBDB 121700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121700&o=json)

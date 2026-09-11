---
schema: wang-person/v1
id: p_jrr2Fwz4x5hKA8iAkHGgin
status: active
merged_into: null
display_name: 王文信
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nXy4ttNK6eHbgrXcCCzjLh
        subject_person_id: p_jrr2Fwz4x5hKA8iAkHGgin
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xkKYQKSHDBwq7JG5GGzSLq
          claim_id: c_nXy4ttNK6eHbgrXcCCzjLh
          source_id: s_4MQtP6TpeDQDiyToqEkpP2
          stance: supports
          locator: CBDB:252699
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（252699）
          source: &a1
            id: s_4MQtP6TpeDQDiyToqEkpP2
            source_type: api_record
            title: 中国历代人物传记资料库：王文信（CBDB 252699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252699&o=json
            external_identifier: CBDB:252699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.277Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L2eaBHP6TGacJHbb9Wm9vJ
        subject_person_id: p_jrr2Fwz4x5hKA8iAkHGgin
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文信，明人物。成化十四年進士，籍贯大寧中衛。（中国历代人物传记资料库 CBDB 252699）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_z1053PXBFaQ1Kp-Zze0ZUL
          claim_id: c_L2eaBHP6TGacJHbb9Wm9vJ
          source_id: s_4MQtP6TpeDQDiyToqEkpP2
          stance: supports
          locator: CBDB:252699
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_MwtqiZ7HwyqtRRdGyjxapY
        subject_person_id: p_jrr2Fwz4x5hKA8iAkHGgin
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2LCs128HMx8dbvsEorc8ou
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BxEpKwkd0djT2pIC53mIE0
          claim_id: c_MwtqiZ7HwyqtRRdGyjxapY
          source_id: s_dKnFiskbarp17JvcEgAkrM
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百零八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dKnFiskbarp17JvcEgAkrM
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 200018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200018&o=json
            external_identifier: CBDB:200018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.584Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2LCs128HMx8dbvsEorc8ou
        status: active
        display_name: 王鉉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文信 | accepted |
| bio.summary | 王文信，明人物。成化十四年進士，籍贯大寧中衛。（中国历代人物传记资料库 CBDB 252699） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2LCs128HMx8dbvsEorc8ou | 王鉉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文信（CBDB 252699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252699&o=json)
- [中国历代人物传记资料库：王鉉（CBDB 200018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200018&o=json)

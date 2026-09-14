---
schema: wang-person/v1
id: p_i7TE8GAQBDSARQziXA9bL1
status: active
merged_into: null
display_name: 王諫
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TpieBEscHDczaiPP9FeghN
        subject_person_id: p_i7TE8GAQBDSARQziXA9bL1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5cV7mPgQrg3bwKAwq8EuBi
          claim_id: c_TpieBEscHDczaiPP9FeghN
          source_id: s_aox8CeEa13PocPCwG6L5pc
          stance: supports
          locator: CBDB:323018
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（323018）
          source: &a1
            id: s_aox8CeEa13PocPCwG6L5pc
            source_type: api_record
            title: 中国历代人物传记资料库：王諫（CBDB 323018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323018&o=json
            external_identifier: CBDB:323018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.137Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Tv9mr4A9L8pGYaWcJjEh81
        subject_person_id: p_i7TE8GAQBDSARQziXA9bL1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諫，明人物。嘉靖三十八年進士，籍贯臨海，曾任府通判。（中国历代人物传记资料库 CBDB 323018）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xXaMKKrGajkrrqHKsKVKJD
          claim_id: c_Tv9mr4A9L8pGYaWcJjEh81
          source_id: s_aox8CeEa13PocPCwG6L5pc
          stance: supports
          locator: CBDB:323018
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_mLoa4k6Uw8j5CgrGbLUw0j
        subject_person_id: p_i7TE8GAQBDSARQziXA9bL1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wAFqCzpuCN66ZSxVPcW8sQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pkfb2u17me7OsM83vlz_PK
          claim_id: c_mLoa4k6Uw8j5CgrGbLUw0j
          source_id: s_aox8CeEa13PocPCwG6L5pc
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第二甲第三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wAFqCzpuCN66ZSxVPcW8sQ
        status: active
        display_name: 王湜
        merged_into_person_id: null
    - claim:
        id: c_CMMiXOQhBFR0rwUHUxqPbr
        subject_person_id: p_i7TE8GAQBDSARQziXA9bL1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QMT9AhChMMcn38M4BKKGf2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9MO9755_G49y3y_XCgbmDs
          claim_id: c_CMMiXOQhBFR0rwUHUxqPbr
          source_id: s_4cZQRm7er_xWKR-d4_CmQt
          stance: supports
          locator: CBDB：兄弟 王湜（204714）之父／母 王諫
          quotation: null
          interpretation_note: 由兄弟关系推断：王澍 与 王湜 为同胞（CBDB 记「兄」），王湜 之父／母即 王澍 之父／母。
          source:
            id: s_4cZQRm7er_xWKR-d4_CmQt
            source_type: api_record
            title: 中国历代人物传记资料库：王澍（CBDB 323024）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323024&o=json
            external_identifier: CBDB:323024
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QMT9AhChMMcn38M4BKKGf2
        status: active
        display_name: 王澍
        merged_into_person_id: null
    - claim:
        id: c_5V5W90UKN_SUxbHviE2szU
        subject_person_id: p_i7TE8GAQBDSARQziXA9bL1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aaCvWvcncDVW4xVU5xEtVN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c2hx8ebkm9WZ1WmwsVb-Xq
          claim_id: c_5V5W90UKN_SUxbHviE2szU
          source_id: s_6y0DQ-Rx3EoFwKceiz6gtb
          stance: supports
          locator: CBDB：兄弟 王湜（204714）之父／母 王諫
          quotation: null
          interpretation_note: 由兄弟关系推断：王淑 与 王湜 为同胞（CBDB 记「弟」），王湜 之父／母即 王淑 之父／母。
          source:
            id: s_6y0DQ-Rx3EoFwKceiz6gtb
            source_type: api_record
            title: 中国历代人物传记资料库：王淑（CBDB 323023）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323023&o=json
            external_identifier: CBDB:323023
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aaCvWvcncDVW4xVU5xEtVN
        status: active
        display_name: 王淑
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王諫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諫 | accepted |
| bio.summary | 王諫，明人物。嘉靖三十八年進士，籍贯臨海，曾任府通判。（中国历代人物传记资料库 CBDB 323018） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_wAFqCzpuCN66ZSxVPcW8sQ | 王湜 | accepted |
| children | p_QMT9AhChMMcn38M4BKKGf2 | 王澍 | accepted |
| children | p_aaCvWvcncDVW4xVU5xEtVN | 王淑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王諫（CBDB 323018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323018&o=json)
- [中国历代人物传记资料库：王淑（CBDB 323023）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323023&o=json)
- [中国历代人物传记资料库：王澍（CBDB 323024）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323024&o=json)

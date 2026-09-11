---
schema: wang-person/v1
id: p_9yrh3LG22eDzqwJQoBMgVx
status: active
merged_into: null
display_name: 王世揚
cbdb_id: 126490
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LsqHBykECPDNHiGm8tXdRx
        subject_person_id: p_9yrh3LG22eDzqwJQoBMgVx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世揚，明人物。中国历代人物传记资料库（CBDB）以人物编号 126490 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_xI3WFuHCXUHvMiWsVkBhN9
          claim_id: c_LsqHBykECPDNHiGm8tXdRx
          source_id: s_UTLNizbFgtE2Z9XPpU5rfV
          stance: supports
          locator: CBDB:126490
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_UTLNizbFgtE2Z9XPpU5rfV
            source_type: api_record
            title: 中国历代人物传记资料库：王世揚（CBDB 126490）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126490&o=json
            external_identifier: CBDB:126490
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zFmzX8Hay4e2dHss9C5N2r
        subject_person_id: p_9yrh3LG22eDzqwJQoBMgVx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世揚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_d2Vj9vHMmBf1HnYEhEQ1zP
          claim_id: c_zFmzX8Hay4e2dHss9C5N2r
          source_id: s_UTLNizbFgtE2Z9XPpU5rfV
          stance: supports
          locator: CBDB:126490
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_UTLNizbFgtE2Z9XPpU5rfV
            source_type: api_record
            title: 中国历代人物传记资料库：王世揚（CBDB 126490）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126490&o=json
            external_identifier: CBDB:126490
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_W2t1Y98Pa4LWxvKXFPw1mF
        subject_person_id: p_xpiQNZoQgcWtNfoW2kc14W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9yrh3LG22eDzqwJQoBMgVx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hKnjEikv-YJfSAeUQ5nnHG
          claim_id: c_W2t1Y98Pa4LWxvKXFPw1mF
          source_id: s_SuKUKV1H1TkxJ6pKLg9oPZ
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第七十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SuKUKV1H1TkxJ6pKLg9oPZ
            source_type: api_record
            title: 中国历代人物传记资料库：王允武（CBDB 216908）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216908&o=json
            external_identifier: CBDB:216908
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.245Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xpiQNZoQgcWtNfoW2kc14W
        status: active
        display_name: 王允武
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_e6Mer22-ULN3kTAxodTrP4
        subject_person_id: p_EfXEWqMhu5JQP4bh8VVTtk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9yrh3LG22eDzqwJQoBMgVx
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yG7PhgDQVSKGud9S77AKym
          claim_id: c_e6Mer22-ULN3kTAxodTrP4
          source_id: s_zcTxWMNGjp7NGzuwbcrXTu
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第七十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zcTxWMNGjp7NGzuwbcrXTu
            source_type: api_record
            title: 中国历代人物传记资料库：王友（CBDB 216906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216906&o=json
            external_identifier: CBDB:216906
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.245Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EfXEWqMhu5JQP4bh8VVTtk
        status: active
        display_name: 王友
        merged_into_person_id: null
    - claim:
        id: c_y6mNixAW9aOLDg2MgxwMTK
        subject_person_id: p_WQ4wcYfcHhFGcEzF1kRY5Z
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9yrh3LG22eDzqwJQoBMgVx
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kO0bjiy5I45HHw8eJv1qHX
          claim_id: c_y6mNixAW9aOLDg2MgxwMTK
          source_id: s_MHChDkDJX12NRgPPUfeKBT
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第七十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MHChDkDJX12NRgPPUfeKBT
            source_type: api_record
            title: 中国历代人物传记资料库：王臣（CBDB 216907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216907&o=json
            external_identifier: CBDB:216907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.245Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WQ4wcYfcHhFGcEzF1kRY5Z
        status: active
        display_name: 王臣
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王世揚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世揚，明人物。中国历代人物传记资料库（CBDB）以人物编号 126490 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王世揚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xpiQNZoQgcWtNfoW2kc14W | 王允武 | accepted |
| ancestors | p_EfXEWqMhu5JQP4bh8VVTtk | 王友 | accepted |
| ancestors | p_WQ4wcYfcHhFGcEzF1kRY5Z | 王臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王臣（CBDB 216907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216907&o=json)
- [中国历代人物传记资料库：王世揚（CBDB 126490）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126490&o=json)
- [中国历代人物传记资料库：王友（CBDB 216906）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216906&o=json)
- [中国历代人物传记资料库：王允武（CBDB 216908）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216908&o=json)

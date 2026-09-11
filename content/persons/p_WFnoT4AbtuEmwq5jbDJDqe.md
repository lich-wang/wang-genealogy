---
schema: wang-person/v1
id: p_WFnoT4AbtuEmwq5jbDJDqe
status: active
merged_into: null
display_name: 王恬
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UkJiGY9tKW8tCz3Pr7cKNw
        subject_person_id: p_WFnoT4AbtuEmwq5jbDJDqe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MAeQMvzDVT8n71AYyEroUh
          claim_id: c_UkJiGY9tKW8tCz3Pr7cKNw
          source_id: s_JuL1yAwLhY34c9tGyGgFKS
          stance: supports
          locator: CBDB:38258
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38258）
          source: &a1
            id: s_JuL1yAwLhY34c9tGyGgFKS
            source_type: api_record
            title: 中国历代人物传记资料库：王恬（CBDB 38258）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38258&o=json
            external_identifier: CBDB:38258
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.404Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xaPMdR1b1QEXhrfKjEkPwb
        subject_person_id: p_WFnoT4AbtuEmwq5jbDJDqe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1110年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LVe3z5PyC4WXPLboFK3jkh
          claim_id: c_xaPMdR1b1QEXhrfKjEkPwb
          source_id: s_JuL1yAwLhY34c9tGyGgFKS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9seEoe9jNZNq23odgs99ax
        subject_person_id: p_WFnoT4AbtuEmwq5jbDJDqe
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1174年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RMhnTfboSALnZwLK7MAhMi
          claim_id: c_9seEoe9jNZNq23odgs99ax
          source_id: s_JuL1yAwLhY34c9tGyGgFKS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wtdcBHmgNrHQ6Me4zvFMa1
        subject_person_id: p_WFnoT4AbtuEmwq5jbDJDqe
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
        - id: cs_fUaXLR2tLJNSEMd6eU5jbr
          claim_id: c_wtdcBHmgNrHQ6Me4zvFMa1
          source_id: s_JuL1yAwLhY34c9tGyGgFKS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_8I2eCNvpeigGoQUN5gXx9r
        subject_person_id: p_WFnoT4AbtuEmwq5jbDJDqe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7Q3M1Hbtu1HLXLHWBytBjr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SxKgi67JXG1l6KB1W9xbIn
          claim_id: c_8I2eCNvpeigGoQUN5gXx9r
          source_id: s_BXJX6woFPmQAM5SSBWFP8Y
          stance: supports
          locator: 全宋文，卷 5677：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BXJX6woFPmQAM5SSBWFP8Y
            source_type: api_record
            title: 中国历代人物传记资料库：王穎（CBDB 385852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385852&o=json
            external_identifier: CBDB:385852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.884Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7Q3M1Hbtu1HLXLHWBytBjr
        status: active
        display_name: 王穎
        merged_into_person_id: null
    - claim:
        id: c_i2Hzu1htltf3SQyhlA7Xi7
        subject_person_id: p_WFnoT4AbtuEmwq5jbDJDqe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_atRhzDs4oFYS811oM1atCv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5pMc5_c3oMKvsvWnFnffEO
          claim_id: c_i2Hzu1htltf3SQyhlA7Xi7
          source_id: s_xRkNTXpF2k4ZKYiz3nN2ng
          stance: supports
          locator: 全宋文，卷 5677：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xRkNTXpF2k4ZKYiz3nN2ng
            source_type: api_record
            title: 中国历代人物传记资料库：王碩（CBDB 384841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384841&o=json
            external_identifier: CBDB:384841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.876Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_atRhzDs4oFYS811oM1atCv
        status: active
        display_name: 王碩
        merged_into_person_id: null
    - claim:
        id: c_u5nDoKPA6TxuSSjMruOceW
        subject_person_id: p_WFnoT4AbtuEmwq5jbDJDqe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PcEuQQgHX77JBLMDejCXRZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cT63IdMkqkqJkabjyOUeLl
          claim_id: c_u5nDoKPA6TxuSSjMruOceW
          source_id: s_C1b7HWg38WNvktJWFRJvqU
          stance: supports
          locator: 全宋文，卷 5677：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_C1b7HWg38WNvktJWFRJvqU
            source_type: api_record
            title: 中国历代人物传记资料库：王頎（CBDB 385854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385854&o=json
            external_identifier: CBDB:385854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.885Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PcEuQQgHX77JBLMDejCXRZ
        status: active
        display_name: 王頎
        merged_into_person_id: null
    - claim:
        id: c_qNo4Qw2ziKAMmZX7KsGNyy
        subject_person_id: p_WFnoT4AbtuEmwq5jbDJDqe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QP3NwvKZSaBQQRph12F9S8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qbswn1eoZ4hPNxteOYxn8A
          claim_id: c_qNo4Qw2ziKAMmZX7KsGNyy
          source_id: s_bTSXycdJZLGF666BU27ZvF
          stance: supports
          locator: 全宋文，卷 5677：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bTSXycdJZLGF666BU27ZvF
            source_type: api_record
            title: 中国历代人物传记资料库：王頤（CBDB 34068）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34068&o=json
            external_identifier: CBDB:34068
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.076Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QP3NwvKZSaBQQRph12F9S8
        status: active
        display_name: 王頤
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恬 | accepted |
| birth.date | 1110年 | accepted |
| death.date | 1174年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7Q3M1Hbtu1HLXLHWBytBjr | 王穎 | accepted |
| children | p_atRhzDs4oFYS811oM1atCv | 王碩 | accepted |
| children | p_PcEuQQgHX77JBLMDejCXRZ | 王頎 | accepted |
| children | p_QP3NwvKZSaBQQRph12F9S8 | 王頤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王頎（CBDB 385854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385854&o=json)
- [中国历代人物传记资料库：王碩（CBDB 384841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384841&o=json)
- [中国历代人物传记资料库：王恬（CBDB 38258）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38258&o=json)
- [中国历代人物传记资料库：王頤（CBDB 34068）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34068&o=json)
- [中国历代人物传记资料库：王穎（CBDB 385852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385852&o=json)

---
schema: wang-person/v1
id: p_fkF8hzVLW2Qoy8U6zqLToC
status: active
merged_into: null
display_name: 王璽
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DUrGpym4ogMJB2mRtkrFRz
        subject_person_id: p_fkF8hzVLW2Qoy8U6zqLToC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7FquevMLwGc7vdzHmNLpV7
          claim_id: c_DUrGpym4ogMJB2mRtkrFRz
          source_id: s_Vzo2Maf6PiDSG6DJNmyedj
          stance: supports
          locator: CBDB:287105
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287105）
          source: &a1
            id: s_Vzo2Maf6PiDSG6DJNmyedj
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 287105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287105&o=json
            external_identifier: CBDB:287105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.257Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SYeESU39j7VArHCh4PKsGq
        subject_person_id: p_fkF8hzVLW2Qoy8U6zqLToC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽，明人物。永樂十年進士，籍贯代州。（中国历代人物传记资料库 CBDB 287105）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__ivbbppulagQpCUZaBpJrR
          claim_id: c_SYeESU39j7VArHCh4PKsGq
          source_id: s_Vzo2Maf6PiDSG6DJNmyedj
          stance: supports
          locator: CBDB:287105
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dwCFl91cF4Dh0XRggm6Tj-
        subject_person_id: p_WPx4EjSn2rHqao5Mj3syGV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fkF8hzVLW2Qoy8U6zqLToC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6IDARcVgH8raH89IMmwyXZ
          claim_id: c_dwCFl91cF4Dh0XRggm6Tj-
          source_id: s_jKjUNCED_eZS4YaAfpizqP
          stance: supports
          locator: CBDB：兄弟 王璜（202374）之父／母 王安道
          quotation: null
          interpretation_note: 由兄弟关系推断：王璽 与 王璜 为同胞（CBDB 记「兄」），王璜 之父／母即 王璽 之父／母。
          source:
            id: s_jKjUNCED_eZS4YaAfpizqP
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 287105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287105&o=json
            external_identifier: CBDB:287105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WPx4EjSn2rHqao5Mj3syGV
        status: active
        display_name: 王安道
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_HdIRRyEOAGlXdGqtU-3SFu
        subject_person_id: p_fkF8hzVLW2Qoy8U6zqLToC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hMbDUQB1GaYNgCJcxGcWWL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T-bqa67P2SZDkX_ZmvDKYe
          claim_id: c_HdIRRyEOAGlXdGqtU-3SFu
          source_id: s_jKjUNCED_eZS4YaAfpizqP
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202374 王璜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jKjUNCED_eZS4YaAfpizqP
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 287105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287105&o=json
            external_identifier: CBDB:287105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hMbDUQB1GaYNgCJcxGcWWL
        status: active
        display_name: 王璜
        merged_into_person_id: null
---

# 王璽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璽 | accepted |
| bio.summary | 王璽，明人物。永樂十年進士，籍贯代州。（中国历代人物传记资料库 CBDB 287105） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WPx4EjSn2rHqao5Mj3syGV | 王安道 | accepted |
| other | p_hMbDUQB1GaYNgCJcxGcWWL | 王璜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璽（CBDB 287105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287105&o=json)

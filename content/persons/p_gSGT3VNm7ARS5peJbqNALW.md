---
schema: wang-person/v1
id: p_gSGT3VNm7ARS5peJbqNALW
status: active
merged_into: null
display_name: 王明
cbdb_id: 217866
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QPR91DkZhT4jVZRD52ppdK
        subject_person_id: p_gSGT3VNm7ARS5peJbqNALW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mauCW6yqaf8PiEcrbiL3AC
          claim_id: c_QPR91DkZhT4jVZRD52ppdK
          source_id: s_AwUVLy7mrpFTX1RmPK1CbC
          stance: supports
          locator: Q45614374
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_AwUVLy7mrpFTX1RmPK1CbC
            source_type: api_record
            title: 维基数据：王明（Q45614374）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45614374
            external_identifier: Q45614374
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_LuNFxg2VC6oqC5CVtanj7R
          claim_id: c_QPR91DkZhT4jVZRD52ppdK
          source_id: s_KaxcQyEUjWPJNvEJZwHUrS
          stance: supports
          locator: CBDB:217866
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_KaxcQyEUjWPJNvEJZwHUrS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王明（217866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217866&o=json
            external_identifier: CBDB:217866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C5H6DPPxd3U2AP33zThrt8
        subject_person_id: p_gSGT3VNm7ARS5peJbqNALW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明，明人物。萬曆五年進士。（中国历代人物传记资料库 CBDB 217866）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JARvdq3j5HHHckW3yVyPKF
          claim_id: c_C5H6DPPxd3U2AP33zThrt8
          source_id: s_AwUVLy7mrpFTX1RmPK1CbC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
        - id: cs_El9Vnay3gfDJBTYbk-Qjtd
          claim_id: c_C5H6DPPxd3U2AP33zThrt8
          source_id: s_KaxcQyEUjWPJNvEJZwHUrS
          stance: supports
          locator: CBDB:217866
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a2
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_M5bq9SaVnG9SCMN7VYTBzj
        subject_person_id: p_gSGT3VNm7ARS5peJbqNALW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tc8tLCyEu49sXcAYbw2GP6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UB3g99M4xz6Y1UWBJybyYa
          claim_id: c_M5bq9SaVnG9SCMN7VYTBzj
          source_id: s_w14uGT4Ny4mX3owuAhJBBW
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_w14uGT4Ny4mX3owuAhJBBW
            source_type: api_record
            title: 维基数据：王訚（Q45614438）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45614438
            external_identifier: Q45614438
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:00.338Z
            metadata_json: null
        - id: cs_CML4Q2QypBXCZm9ZqpX22g
          claim_id: c_M5bq9SaVnG9SCMN7VYTBzj
          source_id: s_AwUVLy7mrpFTX1RmPK1CbC
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_tc8tLCyEu49sXcAYbw2GP6
        status: active
        display_name: 王訚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_XqhZQirKmKPuTLfyiKMSPQ
        subject_person_id: p_gSGT3VNm7ARS5peJbqNALW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_K23baGuNzCVmxSWXhhYJ4B
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r5_APwP7L-jis3zEj2z4E-
          claim_id: c_XqhZQirKmKPuTLfyiKMSPQ
          source_id: s_KaxcQyEUjWPJNvEJZwHUrS
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百六十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_K23baGuNzCVmxSWXhhYJ4B
        status: active
        display_name: 王士性
        merged_into_person_id: null
  other: []
---

# 王明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明 | accepted |
| bio.summary | 王明，明人物。萬曆五年進士。（中国历代人物传记资料库 CBDB 217866） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_tc8tLCyEu49sXcAYbw2GP6 | 王訚 | accepted |
| descendants | p_K23baGuNzCVmxSWXhhYJ4B | 王士性 | accepted |

## 外部来源

- [维基数据：王明（Q45614374）](https://www.wikidata.org/wiki/Q45614374)
- [维基数据：王訚（Q45614438）](https://www.wikidata.org/wiki/Q45614438)
- [CBDB 中国历代人物传记资料库：王明（217866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217866&o=json)

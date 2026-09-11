---
schema: wang-person/v1
id: p_k56NV9rgDghGTPDaQfrfU6
status: active
merged_into: null
display_name: 王守斌
cbdb_id: 14932
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UWDrAURDBUJR3iuQNk48Mv
        subject_person_id: p_k56NV9rgDghGTPDaQfrfU6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守斌，宋人物。中国历代人物传记资料库（CBDB）以人物编号 14932 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_NuLZDPvp7jj---Ai7lzSMv
          claim_id: c_UWDrAURDBUJR3iuQNk48Mv
          source_id: s_aX5sTAYE2GbgMFPkBdbsid
          stance: supports
          locator: CBDB:14932
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_aX5sTAYE2GbgMFPkBdbsid
            source_type: api_record
            title: 中国历代人物传记资料库：王守斌（CBDB 14932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14932&o=json
            external_identifier: CBDB:14932
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sb4cKtpHNG1wueZG5SNtiH
        subject_person_id: p_k56NV9rgDghGTPDaQfrfU6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守斌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2Y8BKyBMGdZ2nrhQ3Mz6np
          claim_id: c_sb4cKtpHNG1wueZG5SNtiH
          source_id: s_aX5sTAYE2GbgMFPkBdbsid
          stance: supports
          locator: CBDB:14932
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_aX5sTAYE2GbgMFPkBdbsid
            source_type: api_record
            title: 中国历代人物传记资料库：王守斌（CBDB 14932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14932&o=json
            external_identifier: CBDB:14932
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_bHXSArL9SU9u-HMMzRcOPA
        subject_person_id: p_k56NV9rgDghGTPDaQfrfU6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1UovNv3RvaDjuSDcVBcdxK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ywiyq7rXcghAh7Fb2XXSQ5
          claim_id: c_bHXSArL9SU9u-HMMzRcOPA
          source_id: s_dCcrudZqwWkWRGsPA8H59W
          stance: supports
          locator: CBDB 双向互证（父 王守斌 ⇄ 子 王令傑）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_dCcrudZqwWkWRGsPA8H59W
            source_type: api_record
            title: 中国历代人物传记资料库：王令傑（CBDB 14933）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14933&o=json
            external_identifier: CBDB:14933
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_1UovNv3RvaDjuSDcVBcdxK
        status: active
        display_name: 王令傑
        merged_into_person_id: null
    - claim:
        id: c_-VtCv8PGKFCGA10S1KY4CQ
        subject_person_id: p_k56NV9rgDghGTPDaQfrfU6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7NCMzTjd3GKLRxFrwXNrak
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CCmrOcHZJGueQ9iUF-dGqw
          claim_id: c_-VtCv8PGKFCGA10S1KY4CQ
          source_id: s_GQRXLtdHL7cgzJK4FMcZYE
          stance: supports
          locator: CBDB 双向互证（父 王守斌 ⇄ 子 王令圖）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_GQRXLtdHL7cgzJK4FMcZYE
            source_type: api_record
            title: 中国历代人物传记资料库：王令圖（CBDB 1851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1851&o=json
            external_identifier: CBDB:1851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_7NCMzTjd3GKLRxFrwXNrak
        status: active
        display_name: 王令圖
        merged_into_person_id: null
    - claim:
        id: c_P-0KrtqtzNW8-rnW25ai_V
        subject_person_id: p_k56NV9rgDghGTPDaQfrfU6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JUDsn7CdzZpbDPgjJYPZwa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tGs-bGLqgiMSw7HMtelwc5
          claim_id: c_P-0KrtqtzNW8-rnW25ai_V
          source_id: s_keY2x4cu459XEZv8X8wfbD
          stance: supports
          locator: CBDB 双向互证（父 王守斌 ⇄ 子 王令短）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_keY2x4cu459XEZv8X8wfbD
            source_type: api_record
            title: 中国历代人物传记资料库：王令短（CBDB 14934）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14934&o=json
            external_identifier: CBDB:14934
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_JUDsn7CdzZpbDPgjJYPZwa
        status: active
        display_name: 王令短
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王守斌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王守斌，宋人物。中国历代人物传记资料库（CBDB）以人物编号 14932 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王守斌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_1UovNv3RvaDjuSDcVBcdxK | 王令傑 | accepted |
| children | p_7NCMzTjd3GKLRxFrwXNrak | 王令圖 | accepted |
| children | p_JUDsn7CdzZpbDPgjJYPZwa | 王令短 | accepted |

## 外部来源

- [中国历代人物传记资料库：王令短（CBDB 14934）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14934&o=json)
- [中国历代人物传记资料库：王令傑（CBDB 14933）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14933&o=json)
- [中国历代人物传记资料库：王令圖（CBDB 1851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1851&o=json)
- [中国历代人物传记资料库：王守斌（CBDB 14932）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14932&o=json)

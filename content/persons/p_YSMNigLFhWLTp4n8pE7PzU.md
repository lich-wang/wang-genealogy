---
schema: wang-person/v1
id: p_YSMNigLFhWLTp4n8pE7PzU
status: active
merged_into: null
display_name: 王象臯
cbdb_id: 220280
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DaYdPHWhZov2AJoqddEnp4
        subject_person_id: p_YSMNigLFhWLTp4n8pE7PzU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象臯，明人物。萬曆八年進士，籍贯新城。（中国历代人物传记资料库 CBDB 220280）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_XEzrZC_J7urEaL7SP_crOr
          claim_id: c_DaYdPHWhZov2AJoqddEnp4
          source_id: s_sQVC7G5m5PgSBCBb5t2pHb
          stance: supports
          locator: CBDB:220280
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_sQVC7G5m5PgSBCBb5t2pHb
            source_type: api_record
            title: 中国历代人物传记资料库：王象臯（CBDB 220280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220280&o=json
            external_identifier: CBDB:220280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5MMVHYwtBm8iyM6bnewkVk
        subject_person_id: p_YSMNigLFhWLTp4n8pE7PzU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象臯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MK61ShKsvBGovWuxriQG67
          claim_id: c_5MMVHYwtBm8iyM6bnewkVk
          source_id: s_sQVC7G5m5PgSBCBb5t2pHb
          stance: supports
          locator: CBDB:220280
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WkB1k3JQxaKbJDUNu69jdT
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YSMNigLFhWLTp4n8pE7PzU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lHS2FMcaGtRmw27KWR2n8p
          claim_id: c_WkB1k3JQxaKbJDUNu69jdT
          source_id: s_q-QJOqHPIv5Lw9K0QaQRwf
          stance: supports
          locator: CBDB：兄弟 王象蒙（206595）之父／母 王之辅
          quotation: null
          interpretation_note: 由兄弟关系推断：王象臯 与 王象蒙 为同胞（CBDB 记「兄」），王象蒙 之父／母即 王象臯 之父／母。
          source:
            id: s_q-QJOqHPIv5Lw9K0QaQRwf
            source_type: api_record
            title: 中国历代人物传记资料库：王象臯（CBDB 220280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220280&o=json
            external_identifier: CBDB:220280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VLPN2ybQtkqyCPrJiYL7vx
        status: active
        display_name: 王之辅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_aiGFYeJlWt9U3HdQGKYkDJ
        subject_person_id: p_UCuWmdu88wkXMEGK9geKmL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YSMNigLFhWLTp4n8pE7PzU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9wEmxyTpt7-n_cL2HnkV0K
          claim_id: c_aiGFYeJlWt9U3HdQGKYkDJ
          source_id: s_q-QJOqHPIv5Lw9K0QaQRwf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206595 王象蒙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_q-QJOqHPIv5Lw9K0QaQRwf
            source_type: api_record
            title: 中国历代人物传记资料库：王象臯（CBDB 220280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220280&o=json
            external_identifier: CBDB:220280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UCuWmdu88wkXMEGK9geKmL
        status: active
        display_name: 王象蒙
        merged_into_person_id: null
---

# 王象臯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王象臯，明人物。萬曆八年進士，籍贯新城。（中国历代人物传记资料库 CBDB 220280） | accepted |
| name.primary | 王象臯 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VLPN2ybQtkqyCPrJiYL7vx | 王之辅 | accepted |
| other | p_UCuWmdu88wkXMEGK9geKmL | 王象蒙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王象臯（CBDB 220280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220280&o=json)

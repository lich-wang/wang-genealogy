---
schema: wang-person/v1
id: p_d5sjQXxXxUwPFvxWCDybzP
status: active
merged_into: null
display_name: 王景春
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zSrWCPWfME8iHLytGKpMWD
        subject_person_id: p_d5sjQXxXxUwPFvxWCDybzP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ie7WwRhPPyM6KEsMLPCFfz
          claim_id: c_zSrWCPWfME8iHLytGKpMWD
          source_id: s_ypRfDJdW8ToQ3myyWakCLr
          stance: supports
          locator: CBDB:254562
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（254562）
          source: &a1
            id: s_ypRfDJdW8ToQ3myyWakCLr
            source_type: api_record
            title: 中国历代人物传记资料库：王景春（CBDB 254562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254562&o=json
            external_identifier: CBDB:254562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.324Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XFhEwkCnxohb48KAGspRMQ
        subject_person_id: p_d5sjQXxXxUwPFvxWCDybzP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景春，明人物。建文二年殿試進士。（中国历代人物传记资料库 CBDB 254562）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yYEyl442T5JBfWykqVfM0J
          claim_id: c_XFhEwkCnxohb48KAGspRMQ
          source_id: s_ypRfDJdW8ToQ3myyWakCLr
          stance: supports
          locator: CBDB:254562
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
  descendants:
    - claim:
        id: c_cn3mUn4226UhrV2BOnlRmQ
        subject_person_id: p_d5sjQXxXxUwPFvxWCDybzP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6Gg8iGSgGr3S6qEitAvCqZ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-ayq7pwaM3tiFwMUyqv2UL
          claim_id: c_cn3mUn4226UhrV2BOnlRmQ
          source_id: s_EDAR71GKiVBtQ9XHGXTeMe
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第三甲第四十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EDAR71GKiVBtQ9XHGXTeMe
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 200180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200180&o=json
            external_identifier: CBDB:200180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.594Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6Gg8iGSgGr3S6qEitAvCqZ
        status: active
        display_name: 王政
        merged_into_person_id: null
  other: []
---

# 王景春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景春 | accepted |
| bio.summary | 王景春，明人物。建文二年殿試進士。（中国历代人物传记资料库 CBDB 254562） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_6Gg8iGSgGr3S6qEitAvCqZ | 王政 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景春（CBDB 254562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254562&o=json)
- [中国历代人物传记资料库：王政（CBDB 200180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200180&o=json)

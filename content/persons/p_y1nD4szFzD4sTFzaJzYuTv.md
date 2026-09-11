---
schema: wang-person/v1
id: p_y1nD4szFzD4sTFzaJzYuTv
status: active
merged_into: null
display_name: 王玠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1pj6vpf9jsb1eBcqEpgw3E
        subject_person_id: p_y1nD4szFzD4sTFzaJzYuTv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tnSvJa99jG1WEC6GTkhtSS
          claim_id: c_1pj6vpf9jsb1eBcqEpgw3E
          source_id: s_6pRmn1qaLUok1oWgA471HL
          stance: supports
          locator: CBDB:260096
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260096）
          source: &a1
            id: s_6pRmn1qaLUok1oWgA471HL
            source_type: api_record
            title: 中国历代人物传记资料库：王玠（CBDB 260096）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260096&o=json
            external_identifier: CBDB:260096
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.480Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hYxZLEro3YYF25qVGM675Z
        subject_person_id: p_y1nD4szFzD4sTFzaJzYuTv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玠，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 260096）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IDZyn9VwMDQD_Gjd0fcRaN
          claim_id: c_hYxZLEro3YYF25qVGM675Z
          source_id: s_6pRmn1qaLUok1oWgA471HL
          stance: supports
          locator: CBDB:260096
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
        id: c_vY8TtNecw5FhhT5waWozdj
        subject_person_id: p_y1nD4szFzD4sTFzaJzYuTv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7THfMJodZEJjq2hbN5iKFW
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qZ9W9GLJ9eXZI8dBgFUleI
          claim_id: c_vY8TtNecw5FhhT5waWozdj
          source_id: s_tHp2FnyoXei6ksmFF82P9Q
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百五十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tHp2FnyoXei6ksmFF82P9Q
            source_type: api_record
            title: 中国历代人物传记资料库：王秩（CBDB 200588）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200588&o=json
            external_identifier: CBDB:200588
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.620Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7THfMJodZEJjq2hbN5iKFW
        status: active
        display_name: 王秩
        merged_into_person_id: null
  other: []
---

# 王玠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玠 | accepted |
| bio.summary | 王玠，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 260096） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_7THfMJodZEJjq2hbN5iKFW | 王秩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玠（CBDB 260096）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260096&o=json)
- [中国历代人物传记资料库：王秩（CBDB 200588）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200588&o=json)

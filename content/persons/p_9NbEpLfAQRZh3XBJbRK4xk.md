---
schema: wang-person/v1
id: p_9NbEpLfAQRZh3XBJbRK4xk
status: active
merged_into: null
display_name: 王公蒙
cbdb_id: 258048
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LzB855xBeAx8jQSB1Hd6B1
        subject_person_id: p_9NbEpLfAQRZh3XBJbRK4xk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公蒙，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 258048）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_yTpXu1mJccNlZr3n1f-FY3
          claim_id: c_LzB855xBeAx8jQSB1Hd6B1
          source_id: s_c6ECLnk2zr9w6SJK4PX5WU
          stance: supports
          locator: CBDB:258048
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_c6ECLnk2zr9w6SJK4PX5WU
            source_type: api_record
            title: 中国历代人物传记资料库：王公蒙（CBDB 258048）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258048&o=json
            external_identifier: CBDB:258048
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_X7ZoSBePCPBGNQrH1sZyum
        subject_person_id: p_9NbEpLfAQRZh3XBJbRK4xk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公蒙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jozk1rK3aM9gb9CQAsnthT
          claim_id: c_X7ZoSBePCPBGNQrH1sZyum
          source_id: s_c6ECLnk2zr9w6SJK4PX5WU
          stance: supports
          locator: CBDB:258048
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
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
        id: c_uk1o9W6CHjCeS-CzUsKbOI
        subject_person_id: p_9NbEpLfAQRZh3XBJbRK4xk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_x8mQMeJnHp1fPict2xPV7L
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P51cVcPI0TdWyaiMX8mqWM
          claim_id: c_uk1o9W6CHjCeS-CzUsKbOI
          source_id: s_c6ECLnk2zr9w6SJK4PX5WU
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第五十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_c6ECLnk2zr9w6SJK4PX5WU
            source_type: api_record
            title: 中国历代人物传记资料库：王公蒙（CBDB 258048）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258048&o=json
            external_identifier: CBDB:258048
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_x8mQMeJnHp1fPict2xPV7L
        status: active
        display_name: 王中
        merged_into_person_id: null
  other: []
---

# 王公蒙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王公蒙，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 258048） | accepted |
| name.primary | 王公蒙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_x8mQMeJnHp1fPict2xPV7L | 王中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公蒙（CBDB 258048）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258048&o=json)

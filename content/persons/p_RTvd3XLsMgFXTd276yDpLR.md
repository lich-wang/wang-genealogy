---
schema: wang-person/v1
id: p_RTvd3XLsMgFXTd276yDpLR
status: active
merged_into: null
display_name: 王政
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K5Z35eB5b5gXKHKc62rwe2
        subject_person_id: p_RTvd3XLsMgFXTd276yDpLR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CgFYGAUq4H1gUfGfLgkk3m
          claim_id: c_K5Z35eB5b5gXKHKc62rwe2
          source_id: s_Jk4MvdmS778nhyF4AfvBRH
          stance: supports
          locator: CBDB:309759
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309759）
          source: &a1
            id: s_Jk4MvdmS778nhyF4AfvBRH
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 309759）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309759&o=json
            external_identifier: CBDB:309759
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_heJvX65LzEcrobNgSvbjGh
        subject_person_id: p_RTvd3XLsMgFXTd276yDpLR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GToysMQN1pptTX7YMrBtRJ
          claim_id: c_heJvX65LzEcrobNgSvbjGh
          source_id: s_Jk4MvdmS778nhyF4AfvBRH
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
        id: c_iQemv0MqUEKLrUIptYearR
        subject_person_id: p_RTvd3XLsMgFXTd276yDpLR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CLVogrJsobqnPvkSGHQ8V4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ylcauVJ5B41wSjnqScXPLy
          claim_id: c_iQemv0MqUEKLrUIptYearR
          source_id: s_BPFKQVE7voYxhrah4SdQpz
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第二十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BPFKQVE7voYxhrah4SdQpz
            source_type: api_record
            title: 中国历代人物传记资料库：王尚禮（CBDB 203768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203768&o=json
            external_identifier: CBDB:203768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.799Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CLVogrJsobqnPvkSGHQ8V4
        status: active
        display_name: 王尚禮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_CLVogrJsobqnPvkSGHQ8V4 | 王尚禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王尚禮（CBDB 203768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203768&o=json)
- [中国历代人物传记资料库：王政（CBDB 309759）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309759&o=json)

---
schema: wang-person/v1
id: p_uKtw89jSsSeAASaebTHqy1
status: active
merged_into: null
display_name: 王大有
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uQAfG7Hd7kokw9riXoYR4M
        subject_person_id: p_uKtw89jSsSeAASaebTHqy1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大有
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mfumsQUWQZ6PUZQMn3exMJ
          claim_id: c_uQAfG7Hd7kokw9riXoYR4M
          source_id: s_dTX1mqBQCy3uLqwb752EBJ
          stance: supports
          locator: CBDB:699351
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699351）
          source: &a1
            id: s_dTX1mqBQCy3uLqwb752EBJ
            source_type: api_record
            title: 中国历代人物传记资料库：王大有（CBDB 699351）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699351&o=json
            external_identifier: CBDB:699351
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.753Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PNKQy2bV7QT4jLf8vC7PaL
        subject_person_id: p_uKtw89jSsSeAASaebTHqy1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大有，宋人物。籍贯衛州。（中国历代人物传记资料库 CBDB 699351）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VbNN2UO86qeLfczjMqVDAL
          claim_id: c_PNKQy2bV7QT4jLf8vC7PaL
          source_id: s_dTX1mqBQCy3uLqwb752EBJ
          stance: supports
          locator: CBDB:699351
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_b0r3ZAQBN0S0dYbc6urI7e
        subject_person_id: p_ML8cZt68RYcGdQ69NvHGpJ
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_uKtw89jSsSeAASaebTHqy1
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oTO1ahxRj4WEYf7183K5x7
          claim_id: c_b0r3ZAQBN0S0dYbc6urI7e
          source_id: s_dOQYn1mqoWqy8NGprD3Bv4
          stance: supports
          locator: CBDB 亲属：母（KinPerson 699344）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_dOQYn1mqoWqy8NGprD3Bv4
            source_type: api_record
            title: 中国历代人物传记资料库：王大有（CBDB 699351）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699351&o=json
            external_identifier: CBDB:699351
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ML8cZt68RYcGdQ69NvHGpJ
        status: active
        display_name: 張氏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大有

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大有 | accepted |
| bio.summary | 王大有，宋人物。籍贯衛州。（中国历代人物传记资料库 CBDB 699351） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ML8cZt68RYcGdQ69NvHGpJ | 張氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大有（CBDB 699351）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699351&o=json)

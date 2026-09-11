---
schema: wang-person/v1
id: p_ZsjbF1Mqq3C8MjG69TLp1v
status: active
merged_into: null
display_name: 王遇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CpfmvQQKEaAmBXNNez4Ybz
        subject_person_id: p_ZsjbF1Mqq3C8MjG69TLp1v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rE8er8gSPnK6BJjSSv7i9p
          claim_id: c_CpfmvQQKEaAmBXNNez4Ybz
          source_id: s_3BtBVzcYjXXEkEYUvsmxdn
          stance: supports
          locator: CBDB:12049
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12049）
          source: &a1
            id: s_3BtBVzcYjXXEkEYUvsmxdn
            source_type: api_record
            title: 中国历代人物传记资料库：王遇（CBDB 12049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12049&o=json
            external_identifier: CBDB:12049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.578Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rgdDL9sBgE4Sm3C9gMLPJK
        subject_person_id: p_ZsjbF1Mqq3C8MjG69TLp1v
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
        - id: cs_K7GS1WNux9QfbRkgC238aj
          claim_id: c_rgdDL9sBgE4Sm3C9gMLPJK
          source_id: s_3BtBVzcYjXXEkEYUvsmxdn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fxBXusykWRc3zFkXMOVq4K
        subject_person_id: p_A8joo6NeYC4UXQ39h8yDbE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZsjbF1Mqq3C8MjG69TLp1v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Ho1wUcUgekGhGZU3jxk6D
          claim_id: c_fxBXusykWRc3zFkXMOVq4K
          source_id: s_BpRUdpD2Nob1Bc4oRdRgCc
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1064：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BpRUdpD2Nob1Bc4oRdRgCc
            source_type: api_record
            title: 中国历代人物传记资料库：王萬全（CBDB 12048）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12048&o=json
            external_identifier: CBDB:12048
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.576Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A8joo6NeYC4UXQ39h8yDbE
        status: active
        display_name: 王萬全
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王遇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遇 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_A8joo6NeYC4UXQ39h8yDbE | 王萬全 | accepted |

## 外部来源

- [中国历代人物传记资料库：王萬全（CBDB 12048）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12048&o=json)
- [中国历代人物传记资料库：王遇（CBDB 12049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12049&o=json)

---
schema: wang-person/v1
id: p_Bwotp897XYpQDb3JvMznKN
status: active
merged_into: null
display_name: 王觀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K8gnu1M58SBtUEgifdPKHY
        subject_person_id: p_Bwotp897XYpQDb3JvMznKN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_91aw7JCUcYHhwLy4XyZPpC
          claim_id: c_K8gnu1M58SBtUEgifdPKHY
          source_id: s_4u41fGDx6sh4RFd4jp9qy4
          stance: supports
          locator: CBDB:480011
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（480011）
          source: &a1
            id: s_4u41fGDx6sh4RFd4jp9qy4
            source_type: api_record
            title: 中国历代人物传记资料库：王觀（CBDB 480011）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480011&o=json
            external_identifier: CBDB:480011
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.630Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Sz1DXiBMbDy5MLrAPEr3QG
        subject_person_id: p_Bwotp897XYpQDb3JvMznKN
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
        - id: cs_zeEXdH3Gg11VZn9UBfaNK1
          claim_id: c_Sz1DXiBMbDy5MLrAPEr3QG
          source_id: s_4u41fGDx6sh4RFd4jp9qy4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
  descendants: []
  other: []
---

# 王觀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王觀 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王觀（CBDB 480011）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480011&o=json)

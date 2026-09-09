---
schema: wang-person/v1
id: p_oz8NKbK4wLW8qT5ei8DMej
status: active
merged_into: null
display_name: 王承祚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TCNt6ojfX5axz5vF81F138
        subject_person_id: p_oz8NKbK4wLW8qT5ei8DMej
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承祚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9ken2X62nJUnQsg7BGNBBE
          claim_id: c_TCNt6ojfX5axz5vF81F138
          source_id: s_7KCRz66m37EJFFruxsHnn3
          stance: supports
          locator: CBDB:638098
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638098）
          source: &a1
            id: s_7KCRz66m37EJFFruxsHnn3
            source_type: api_record
            title: 中国历代人物传记资料库：王承祚（CBDB 638098）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638098&o=json
            external_identifier: CBDB:638098
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.606Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eCcTBpBUXGMSE7BkQdh3qU
        subject_person_id: p_oz8NKbK4wLW8qT5ei8DMej
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Un4oc6A2Zr6aPmk1xCTKMC
          claim_id: c_eCcTBpBUXGMSE7BkQdh3qU
          source_id: s_7KCRz66m37EJFFruxsHnn3
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

# 王承祚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承祚 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承祚（CBDB 638098）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638098&o=json)

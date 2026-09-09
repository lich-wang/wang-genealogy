---
schema: wang-person/v1
id: p_oVs6tGMugwEvqerYzeG771
status: active
merged_into: null
display_name: 王秉和
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2Ja3ghSp5HsPJRAECU2gLF
        subject_person_id: p_oVs6tGMugwEvqerYzeG771
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6YPLYN8LN1rBoHJ54K8Vzx
          claim_id: c_2Ja3ghSp5HsPJRAECU2gLF
          source_id: s_bKGxQ7HnQMYXUh93LtTTF2
          stance: supports
          locator: CBDB:697833
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（697833）
          source: &a1
            id: s_bKGxQ7HnQMYXUh93LtTTF2
            source_type: api_record
            title: 中国历代人物传记资料库：王秉和（CBDB 697833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697833&o=json
            external_identifier: CBDB:697833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.732Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mY8KjMxL4oWQeRN8JF9wSE
        subject_person_id: p_oVs6tGMugwEvqerYzeG771
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
        - id: cs_4bVn5a9zTtzobDrWoKkCPe
          claim_id: c_mY8KjMxL4oWQeRN8JF9wSE
          source_id: s_bKGxQ7HnQMYXUh93LtTTF2
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

# 王秉和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秉和 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秉和（CBDB 697833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697833&o=json)

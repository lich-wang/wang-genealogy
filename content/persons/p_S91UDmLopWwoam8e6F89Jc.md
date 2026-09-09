---
schema: wang-person/v1
id: p_S91UDmLopWwoam8e6F89Jc
status: active
merged_into: null
display_name: 王俊彥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_572vaNxwzBB8BWiojm5DsS
        subject_person_id: p_S91UDmLopWwoam8e6F89Jc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊彥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w9irBBgx1mY5gpXMCrPH4k
          claim_id: c_572vaNxwzBB8BWiojm5DsS
          source_id: s_pUzhjajoLAKTyuZT2Q98QT
          stance: supports
          locator: CBDB:13476
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（13476）
          source: &a1
            id: s_pUzhjajoLAKTyuZT2Q98QT
            source_type: api_record
            title: 中国历代人物传记资料库：王俊彥（CBDB 13476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13476&o=json
            external_identifier: CBDB:13476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.619Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CeNyZdhUt5aqdrDr8A9KsC
        subject_person_id: p_S91UDmLopWwoam8e6F89Jc
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
        - id: cs_oKjGxNaanURA9vYRKhmwAi
          claim_id: c_CeNyZdhUt5aqdrDr8A9KsC
          source_id: s_pUzhjajoLAKTyuZT2Q98QT
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

# 王俊彥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊彥 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王俊彥（CBDB 13476）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13476&o=json)

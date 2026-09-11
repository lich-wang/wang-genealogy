---
schema: wang-person/v1
id: p_jRhL4sV7stvK4utTV4sxgM
status: active
merged_into: null
display_name: 王玉璞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9sfishZQXRKGLVQxXKdbD2
        subject_person_id: p_jRhL4sV7stvK4utTV4sxgM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉璞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9VBgF3mtK4uEUXJMh5f1YG
          claim_id: c_9sfishZQXRKGLVQxXKdbD2
          source_id: s_MSHQLMc67oVx2UhX7Ag5P8
          stance: supports
          locator: CBDB:526958
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526958）
          source: &a1
            id: s_MSHQLMc67oVx2UhX7Ag5P8
            source_type: api_record
            title: 中国历代人物传记资料库：王玉璞（CBDB 526958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526958&o=json
            external_identifier: CBDB:526958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.317Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J9d35gJS1axTYDZwGmDtKA
        subject_person_id: p_jRhL4sV7stvK4utTV4sxgM
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
        - id: cs_apNU2fMjQ6GXwfUmr5gZCN
          claim_id: c_J9d35gJS1axTYDZwGmDtKA
          source_id: s_MSHQLMc67oVx2UhX7Ag5P8
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
        id: c_1oU4CHPRy5hmAgbHfbod4U
        subject_person_id: p_qizDTnB3WekbPdnh4QuvEM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jRhL4sV7stvK4utTV4sxgM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-_wwQGNXoYW2EXsmm30Lc-
          claim_id: c_1oU4CHPRy5hmAgbHfbod4U
          source_id: s_MSHQLMc67oVx2UhX7Ag5P8
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13133：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qizDTnB3WekbPdnh4QuvEM
        status: active
        display_name: 王照遠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玉璞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉璞 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qizDTnB3WekbPdnh4QuvEM | 王照遠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玉璞（CBDB 526958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526958&o=json)

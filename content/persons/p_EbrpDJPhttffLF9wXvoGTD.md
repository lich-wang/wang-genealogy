---
schema: wang-person/v1
id: p_EbrpDJPhttffLF9wXvoGTD
status: active
merged_into: null
display_name: 陳寶月
revision: 1
cbdb_id: 120421
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_-g-74wWhPzXlum-Yvw2zqG
        subject_person_id: p_EbrpDJPhttffLF9wXvoGTD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳寶月
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yGcKH6_lgJfYKhmQONsNPl
          claim_id: c_-g-74wWhPzXlum-Yvw2zqG
          source_id: s_tVUMPzsNe8a1CxK-FJmAkR
          stance: supports
          locator: CBDB:120421
          quotation: null
          interpretation_note: CBDB 明确记录的王慶嵩配偶
          source: &a1
            id: s_tVUMPzsNe8a1CxK-FJmAkR
            source_type: api_record
            title: 中国历代人物传记资料库：陳寶月（CBDB 120421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120421&o=json
            external_identifier: CBDB:120421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_kA0HEqQlouOo4w-lLc5xpR
        subject_person_id: p_j5QK4MXR5LwaE6dHX7rsYc
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_EbrpDJPhttffLF9wXvoGTD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b-tsuu-XfbYeARDrmQuB4k
          claim_id: c_kA0HEqQlouOo4w-lLc5xpR
          source_id: s_tVUMPzsNe8a1CxK-FJmAkR
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3542, HuWenKai #258：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_j5QK4MXR5LwaE6dHX7rsYc
        status: active
        display_name: 王慶嵩
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳寶月

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 陳寶月 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_j5QK4MXR5LwaE6dHX7rsYc | 王慶嵩 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳寶月（CBDB 120421）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120421&o=json)

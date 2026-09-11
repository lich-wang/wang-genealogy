---
schema: wang-person/v1
id: p_y6WWM1FgMGi6MF5sh3nn1e
status: active
merged_into: null
display_name: 王勛
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PNVH46nHMjDZjRp8zYnhnb
        subject_person_id: p_y6WWM1FgMGi6MF5sh3nn1e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H9AP7gUMRn5aQeRZHNd11W
          claim_id: c_PNVH46nHMjDZjRp8zYnhnb
          source_id: s_ZRSu7DMvV4jbK4YQ6H1JQX
          stance: supports
          locator: CBDB:145231
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145231）
          source: &a1
            id: s_ZRSu7DMvV4jbK4YQ6H1JQX
            source_type: api_record
            title: 中国历代人物传记资料库：王勛（CBDB 145231）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145231&o=json
            external_identifier: CBDB:145231
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.659Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aaW4GFKo668yN87Ar6UFNv
        subject_person_id: p_y6WWM1FgMGi6MF5sh3nn1e
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 789年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DSqktj37NJj2QUwhJe9ML8
          claim_id: c_aaW4GFKo668yN87Ar6UFNv
          source_id: s_ZRSu7DMvV4jbK4YQ6H1JQX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MLtGsbEJ1ZSMZvPNPk5eeN
        subject_person_id: p_y6WWM1FgMGi6MF5sh3nn1e
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 827年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4mzxi9c3EUgwzQoCsUVE14
          claim_id: c_MLtGsbEJ1ZSMZvPNPk5eeN
          source_id: s_ZRSu7DMvV4jbK4YQ6H1JQX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jsWoQYMCmxkjx1uJvCVqY9
        subject_person_id: p_y6WWM1FgMGi6MF5sh3nn1e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cSBwrkFKm35NfKJY2SEBAn
          claim_id: c_jsWoQYMCmxkjx1uJvCVqY9
          source_id: s_ZRSu7DMvV4jbK4YQ6H1JQX
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
        id: c_K9uZrjpE3gq8DSHRUX5n_f
        subject_person_id: p_eJBnye85tBdoiRcsLUrLW1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_y6WWM1FgMGi6MF5sh3nn1e
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QME9YCobZ9PP5mlJRDlNgF
          claim_id: c_K9uZrjpE3gq8DSHRUX5n_f
          source_id: s_ZRSu7DMvV4jbK4YQ6H1JQX
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eJBnye85tBdoiRcsLUrLW1
        status: active
        display_name: 王絳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王勛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勛 | accepted |
| birth.date | 789年 | accepted |
| death.date | 827年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_eJBnye85tBdoiRcsLUrLW1 | 王絳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王勛（CBDB 145231）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145231&o=json)

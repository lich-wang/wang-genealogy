---
schema: wang-person/v1
id: p_sEGDXi7ck4pKNAhddgmbiq
status: active
merged_into: null
display_name: 王珹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yHodAXPh3zkckeMgheGD9X
        subject_person_id: p_sEGDXi7ck4pKNAhddgmbiq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vsFki4FrRegVLeF7KWeGQK
          claim_id: c_yHodAXPh3zkckeMgheGD9X
          source_id: s_t2VA7WS1nJbLWR9WK7ND6Q
          stance: supports
          locator: CBDB:37927
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37927）
          source: &a1
            id: s_t2VA7WS1nJbLWR9WK7ND6Q
            source_type: api_record
            title: 中国历代人物传记资料库：王珹（CBDB 37927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37927&o=json
            external_identifier: CBDB:37927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.294Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UJ65fmzC6gcFveSvJBTpPV
        subject_person_id: p_sEGDXi7ck4pKNAhddgmbiq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1247年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZDc67hEuULpSSpMmheTToD
          claim_id: c_UJ65fmzC6gcFveSvJBTpPV
          source_id: s_t2VA7WS1nJbLWR9WK7ND6Q
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
        id: c_SNMQbeuGTNBPpR8aMGBLAw
        subject_person_id: p_sEGDXi7ck4pKNAhddgmbiq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1324年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vc7eGtZuZyAJJcb7BzDFBB
          claim_id: c_SNMQbeuGTNBPpR8aMGBLAw
          source_id: s_t2VA7WS1nJbLWR9WK7ND6Q
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
        id: c_1CSxUWypkRzGdGRnfTNAgz
        subject_person_id: p_sEGDXi7ck4pKNAhddgmbiq
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
        - id: cs_YFiMap5ZzVd4tV9VESMnp2
          claim_id: c_1CSxUWypkRzGdGRnfTNAgz
          source_id: s_t2VA7WS1nJbLWR9WK7ND6Q
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

# 王珹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珹 | accepted |
| birth.date | 1247年 | accepted |
| death.date | 1324年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珹（CBDB 37927）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37927&o=json)

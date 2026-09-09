---
schema: wang-person/v1
id: p_pRRVYtHgiQwfVFMKpgmGok
status: active
merged_into: null
display_name: 王家相
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1UoBHqXmitDWV9hBe8PMTN
        subject_person_id: p_pRRVYtHgiQwfVFMKpgmGok
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eG7465e354S2WkNjkFZeFe
          claim_id: c_1UoBHqXmitDWV9hBe8PMTN
          source_id: s_WhMyNJ81diwDMK98q9rHCP
          stance: supports
          locator: CBDB:67713
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67713）
          source: &a1
            id: s_WhMyNJ81diwDMK98q9rHCP
            source_type: api_record
            title: 中国历代人物传记资料库：王家相（CBDB 67713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67713&o=json
            external_identifier: CBDB:67713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.003Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_jtP7z32d3CX1Z437Nsgdzi
        subject_person_id: p_pRRVYtHgiQwfVFMKpgmGok
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1762年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rhAXySDdAUiYqjLquJAjkj
          claim_id: c_jtP7z32d3CX1Z437Nsgdzi
          source_id: s_WhMyNJ81diwDMK98q9rHCP
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
        id: c_icYPs6NJhCq7kugD3oTidZ
        subject_person_id: p_pRRVYtHgiQwfVFMKpgmGok
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1838年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C3RoJYPPynb3QdutmdsXaC
          claim_id: c_icYPs6NJhCq7kugD3oTidZ
          source_id: s_WhMyNJ81diwDMK98q9rHCP
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
        id: c_8JkCYep677Ye7LzLkgLWcU
        subject_person_id: p_pRRVYtHgiQwfVFMKpgmGok
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
        - id: cs_gR4nKNS9k4DpumF6f739N5
          claim_id: c_8JkCYep677Ye7LzLkgLWcU
          source_id: s_WhMyNJ81diwDMK98q9rHCP
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

# 王家相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家相 | accepted |
| birth.date | 1762年 | accepted |
| death.date | 1838年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家相（CBDB 67713）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67713&o=json)

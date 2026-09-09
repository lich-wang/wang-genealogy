---
schema: wang-person/v1
id: p_uvTZsR7PG2rjTcGPMExhnJ
status: active
merged_into: null
display_name: 王文秀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SoX5Xk5sAjKoqbZ8ki5EDa
        subject_person_id: p_uvTZsR7PG2rjTcGPMExhnJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文秀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DZ7JKaN9G7F4eLLDBsGhEm
          claim_id: c_SoX5Xk5sAjKoqbZ8ki5EDa
          source_id: s_f9JHRDjXSLUdt6DLujqPRG
          stance: supports
          locator: CBDB:186201
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186201）
          source: &a1
            id: s_f9JHRDjXSLUdt6DLujqPRG
            source_type: api_record
            title: 中国历代人物传记资料库：王文秀（CBDB 186201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186201&o=json
            external_identifier: CBDB:186201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.259Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Dhd1XwS7gjUxnLJHnZXuW6
        subject_person_id: p_uvTZsR7PG2rjTcGPMExhnJ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 891年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zLqpu1cCdBg2jQSTCd8wif
          claim_id: c_Dhd1XwS7gjUxnLJHnZXuW6
          source_id: s_f9JHRDjXSLUdt6DLujqPRG
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
        id: c_C7YECtwddQB2KELo63ZyAZ
        subject_person_id: p_uvTZsR7PG2rjTcGPMExhnJ
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
        - id: cs_uKm1gEB7CHTuAmEw8oG3DW
          claim_id: c_C7YECtwddQB2KELo63ZyAZ
          source_id: s_f9JHRDjXSLUdt6DLujqPRG
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

# 王文秀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文秀 | accepted |
| death.date | 891年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文秀（CBDB 186201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186201&o=json)

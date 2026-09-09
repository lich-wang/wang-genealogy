---
schema: wang-person/v1
id: p_NZBRacXCiG51Ka6uGH7vGU
status: active
merged_into: null
display_name: 王價
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ShKLdQrK8ruYKse48AYkG5
        subject_person_id: p_NZBRacXCiG51Ka6uGH7vGU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王價
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J8vqdheLBQK8FVNTXZypAj
          claim_id: c_ShKLdQrK8ruYKse48AYkG5
          source_id: s_Avrospoe8r2r4H2nghiRoW
          stance: supports
          locator: CBDB:635962
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635962）
          source: &a1
            id: s_Avrospoe8r2r4H2nghiRoW
            source_type: api_record
            title: 中国历代人物传记资料库：王價（CBDB 635962）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635962&o=json
            external_identifier: CBDB:635962
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.067Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r2xGfJFkxh7CPTX4iJxUgu
        subject_person_id: p_NZBRacXCiG51Ka6uGH7vGU
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
        - id: cs_ZDhL9DRaEKMP4BHn646JEm
          claim_id: c_r2xGfJFkxh7CPTX4iJxUgu
          source_id: s_Avrospoe8r2r4H2nghiRoW
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

# 王價

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王價 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王價（CBDB 635962）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635962&o=json)

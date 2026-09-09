---
schema: wang-person/v1
id: p_r7fYkgr4Tidi2HeQqRa7G5
status: active
merged_into: null
display_name: 王爵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hAGQ23QfKaEPU6LamsC13h
        subject_person_id: p_r7fYkgr4Tidi2HeQqRa7G5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cuLHp2CFaNPYSV3RVoPGKL
          claim_id: c_hAGQ23QfKaEPU6LamsC13h
          source_id: s_LGWGjqG32DaZFFFUHCeHEH
          stance: supports
          locator: CBDB:441245
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（441245）
          source: &a1
            id: s_LGWGjqG32DaZFFFUHCeHEH
            source_type: api_record
            title: 中国历代人物传记资料库：王爵（CBDB 441245）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=441245&o=json
            external_identifier: CBDB:441245
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.112Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VHyJ3GtVMMhLhTFCUnB6FK
        subject_person_id: p_r7fYkgr4Tidi2HeQqRa7G5
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
        - id: cs_BQ1kH9he8tbHS6PNjm61Yw
          claim_id: c_VHyJ3GtVMMhLhTFCUnB6FK
          source_id: s_LGWGjqG32DaZFFFUHCeHEH
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

# 王爵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王爵 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王爵（CBDB 441245）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=441245&o=json)

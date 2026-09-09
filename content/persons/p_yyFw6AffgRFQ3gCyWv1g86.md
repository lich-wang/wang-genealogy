---
schema: wang-person/v1
id: p_yyFw6AffgRFQ3gCyWv1g86
status: active
merged_into: null
display_name: 王孳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_noyA5xeSvDnw7CtNqrWS4W
        subject_person_id: p_yyFw6AffgRFQ3gCyWv1g86
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KQeDs3tC7LpDMcbK5JRr59
          claim_id: c_noyA5xeSvDnw7CtNqrWS4W
          source_id: s_U8vCDkfEaMJyvQzmCAnRM6
          stance: supports
          locator: CBDB:688002
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688002）
          source: &a1
            id: s_U8vCDkfEaMJyvQzmCAnRM6
            source_type: api_record
            title: 中国历代人物传记资料库：王孳（CBDB 688002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688002&o=json
            external_identifier: CBDB:688002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.479Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rJ2LQ3NZBH4M4CN9kvCcyh
        subject_person_id: p_yyFw6AffgRFQ3gCyWv1g86
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
        - id: cs_xkQAb1HZbd1MLv8JC31S9X
          claim_id: c_rJ2LQ3NZBH4M4CN9kvCcyh
          source_id: s_U8vCDkfEaMJyvQzmCAnRM6
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

# 王孳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孳 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王孳（CBDB 688002）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688002&o=json)

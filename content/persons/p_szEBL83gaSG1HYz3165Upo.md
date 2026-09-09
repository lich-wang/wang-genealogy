---
schema: wang-person/v1
id: p_szEBL83gaSG1HYz3165Upo
status: active
merged_into: null
display_name: 王乾福
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hMkY3gmtuytZ2KMQz8MhRP
        subject_person_id: p_szEBL83gaSG1HYz3165Upo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乾福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D3d451LJUw5rPJb5KGQn8P
          claim_id: c_hMkY3gmtuytZ2KMQz8MhRP
          source_id: s_v2vW2Y7fZNvMb7G47R4LKH
          stance: supports
          locator: CBDB:139958
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139958）
          source: &a1
            id: s_v2vW2Y7fZNvMb7G47R4LKH
            source_type: api_record
            title: 中国历代人物传记资料库：王乾福（CBDB 139958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139958&o=json
            external_identifier: CBDB:139958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.460Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_sYxCeyVCqFbJxyp5Hp9SZh
        subject_person_id: p_szEBL83gaSG1HYz3165Upo
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 694年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LbiyXEgXkEM7oz4JxfA5TL
          claim_id: c_sYxCeyVCqFbJxyp5Hp9SZh
          source_id: s_v2vW2Y7fZNvMb7G47R4LKH
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
        id: c_ymPx7ewd4ygUQ8kabVPy97
        subject_person_id: p_szEBL83gaSG1HYz3165Upo
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
        - id: cs_ETqm5ymmNUNrZeW7D926YG
          claim_id: c_ymPx7ewd4ygUQ8kabVPy97
          source_id: s_v2vW2Y7fZNvMb7G47R4LKH
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

# 王乾福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王乾福 | accepted |
| death.date | 694年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王乾福（CBDB 139958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139958&o=json)

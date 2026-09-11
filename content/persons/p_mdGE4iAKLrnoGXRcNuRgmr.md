---
schema: wang-person/v1
id: p_mdGE4iAKLrnoGXRcNuRgmr
status: active
merged_into: null
display_name: 王琮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k2wGL33k323q1daGA5Ckg7
        subject_person_id: p_mdGE4iAKLrnoGXRcNuRgmr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Tz8LqRP7QADbHxc1x1xEB4
          claim_id: c_k2wGL33k323q1daGA5Ckg7
          source_id: s_TLFud4x8MM4UK9xTi7pFQ9
          stance: supports
          locator: CBDB:241146
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241146）
          source: &a1
            id: s_TLFud4x8MM4UK9xTi7pFQ9
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 241146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241146&o=json
            external_identifier: CBDB:241146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.950Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Uex7ZYkJTpEaj6TUwaTEQb
        subject_person_id: p_mdGE4iAKLrnoGXRcNuRgmr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琮，明人物。正統十三年進士，籍贯和州。（中国历代人物传记资料库 CBDB 241146）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_41OvutTJtTz5fPTejjEODg
          claim_id: c_Uex7ZYkJTpEaj6TUwaTEQb
          source_id: s_TLFud4x8MM4UK9xTi7pFQ9
          stance: supports
          locator: CBDB:241146
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王琮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琮 | accepted |
| bio.summary | 王琮，明人物。正統十三年進士，籍贯和州。（中国历代人物传记资料库 CBDB 241146） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 241146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241146&o=json)

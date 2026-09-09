---
schema: wang-person/v1
id: p_f8BaSo3uJrNBkY4PNCe7uX
status: active
merged_into: null
display_name: 王廷範
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ouwtBDsvNGPdNTmX5L927f
        subject_person_id: p_f8BaSo3uJrNBkY4PNCe7uX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷範
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8v617PhTQLXdgCzaYz7Kr5
          claim_id: c_ouwtBDsvNGPdNTmX5L927f
          source_id: s_bD94N4skff2HLK51govvQh
          stance: supports
          locator: CBDB:414481
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（414481）
          source: &a1
            id: s_bD94N4skff2HLK51govvQh
            source_type: api_record
            title: 中国历代人物传记资料库：王廷範（CBDB 414481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414481&o=json
            external_identifier: CBDB:414481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ybw32LxQEdTRu9inCsN2CH
        subject_person_id: p_f8BaSo3uJrNBkY4PNCe7uX
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
        - id: cs_UH6DiDRgY6LUPc97ha7t7V
          claim_id: c_Ybw32LxQEdTRu9inCsN2CH
          source_id: s_bD94N4skff2HLK51govvQh
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

# 王廷範

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷範 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷範（CBDB 414481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414481&o=json)

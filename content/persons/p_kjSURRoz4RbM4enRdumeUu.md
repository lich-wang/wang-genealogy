---
schema: wang-person/v1
id: p_kjSURRoz4RbM4enRdumeUu
status: active
merged_into: null
display_name: 王廷燦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V8L9W5if3GV3roniByLUxD
        subject_person_id: p_kjSURRoz4RbM4enRdumeUu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷燦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2KFsiR1JRJCzMk64BXeLSP
          claim_id: c_V8L9W5if3GV3roniByLUxD
          source_id: s_do1DsJSBF2u7xe53rkpBwu
          stance: supports
          locator: CBDB:71559
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71559）
          source: &a1
            id: s_do1DsJSBF2u7xe53rkpBwu
            source_type: api_record
            title: 中国历代人物传记资料库：王廷燦（CBDB 71559）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71559&o=json
            external_identifier: CBDB:71559
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.750Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_84aLuMvSqLQt2gaqTrrj6c
        subject_person_id: p_kjSURRoz4RbM4enRdumeUu
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1652年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gnedowmmiTpVrPqx1vBzMQ
          claim_id: c_84aLuMvSqLQt2gaqTrrj6c
          source_id: s_do1DsJSBF2u7xe53rkpBwu
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
        id: c_AEcVBvyAY92PEXjRwHsCQN
        subject_person_id: p_kjSURRoz4RbM4enRdumeUu
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1720年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fK7JohK1AGWiy1y4vwFYh7
          claim_id: c_AEcVBvyAY92PEXjRwHsCQN
          source_id: s_do1DsJSBF2u7xe53rkpBwu
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
        id: c_B2pP6cqAS1JxEHso1xtSuq
        subject_person_id: p_kjSURRoz4RbM4enRdumeUu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷燦（1652年—1720年），清人物。籍贯錢塘，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 71559）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iQuxXvNhgcbRh1xRHn4alO
          claim_id: c_B2pP6cqAS1JxEHso1xtSuq
          source_id: s_do1DsJSBF2u7xe53rkpBwu
          stance: supports
          locator: CBDB:71559
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

# 王廷燦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷燦 | accepted |
| birth.date | 1652年 | accepted |
| death.date | 1720年 | accepted |
| bio.summary | 王廷燦（1652年—1720年），清人物。籍贯錢塘，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 71559） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷燦（CBDB 71559）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71559&o=json)

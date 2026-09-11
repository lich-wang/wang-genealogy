---
schema: wang-person/v1
id: p_MYc4nvzBBs26xVqX87RTa4
status: active
merged_into: null
display_name: 王仲達
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LDqk813fPzP4KAbBowpCJC
        subject_person_id: p_MYc4nvzBBs26xVqX87RTa4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲達
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_evazMvBVPryTcdsBHtgwat
          claim_id: c_LDqk813fPzP4KAbBowpCJC
          source_id: s_qEFomQabFSNUGUk93bxq5A
          stance: supports
          locator: CBDB:38903
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38903）
          source: &a1
            id: s_qEFomQabFSNUGUk93bxq5A
            source_type: api_record
            title: 中国历代人物传记资料库：王仲達（CBDB 38903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38903&o=json
            external_identifier: CBDB:38903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.563Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_43NvF7EWry572wiWkDp7Pt
        subject_person_id: p_MYc4nvzBBs26xVqX87RTa4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1004年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5AygCpzmPsp5tarw9CVCXL
          claim_id: c_43NvF7EWry572wiWkDp7Pt
          source_id: s_qEFomQabFSNUGUk93bxq5A
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
        id: c_rGNjWyhdLf7kEDF7pRfdv6
        subject_person_id: p_MYc4nvzBBs26xVqX87RTa4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1041年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yznj8pbeaMU56BGnCP3dDa
          claim_id: c_rGNjWyhdLf7kEDF7pRfdv6
          source_id: s_qEFomQabFSNUGUk93bxq5A
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
        id: c_gGrJsQLCK8f27T9KfHQpJ5
        subject_person_id: p_MYc4nvzBBs26xVqX87RTa4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲達（1004年—1041年），史料所见人物。本项目依据《中国历代人物传记资料库：王仲達（CBDB 38903）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LrNuZychbcQbF72oQItYzW
          claim_id: c_gGrJsQLCK8f27T9KfHQpJ5
          source_id: s_qEFomQabFSNUGUk93bxq5A
          stance: supports
          locator: CBDB:38903
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王仲達

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲達 | accepted |
| birth.date | 1004年 | accepted |
| death.date | 1041年 | accepted |
| bio.summary | 王仲達（1004年—1041年），史料所见人物。本项目依据《中国历代人物传记资料库：王仲達（CBDB 38903）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲達（CBDB 38903）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38903&o=json)

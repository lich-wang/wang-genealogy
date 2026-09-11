---
schema: wang-person/v1
id: p_MemBevEtxLnjXYkLG35pym
status: active
merged_into: null
display_name: 王信
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ri6BWXGxYb7HLiQGH9WrwB
        subject_person_id: p_MemBevEtxLnjXYkLG35pym
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UXeR7SDvHFqyGSLqe8LRXT
          claim_id: c_Ri6BWXGxYb7HLiQGH9WrwB
          source_id: s_tS8WbRbCSoGBQ55FGhWx3P
          stance: supports
          locator: CBDB:209974
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209974）
          source: &a1
            id: s_tS8WbRbCSoGBQ55FGhWx3P
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 209974）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209974&o=json
            external_identifier: CBDB:209974
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.989Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BohxuCDwhDEugWrUQDrg6M
        subject_person_id: p_MemBevEtxLnjXYkLG35pym
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6KWUXkZR5RPELTLoZxEAWs
          claim_id: c_BohxuCDwhDEugWrUQDrg6M
          source_id: s_tS8WbRbCSoGBQ55FGhWx3P
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
  descendants:
    - claim:
        id: c_9tV6oWMTr91oOM7ei-1zsg
        subject_person_id: p_MemBevEtxLnjXYkLG35pym
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3K8YMQuna5CRk3d72KDoG1
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_23Dq8Lo0lDOqY8N9ZlHle6
          claim_id: c_9tV6oWMTr91oOM7ei-1zsg
          source_id: s_tS8WbRbCSoGBQ55FGhWx3P
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百零四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3K8YMQuna5CRk3d72KDoG1
        status: active
        display_name: 王淑民
        merged_into_person_id: null
  other: []
---

# 王信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_3K8YMQuna5CRk3d72KDoG1 | 王淑民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王信（CBDB 209974）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209974&o=json)

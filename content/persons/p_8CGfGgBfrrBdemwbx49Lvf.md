---
schema: wang-person/v1
id: p_8CGfGgBfrrBdemwbx49Lvf
status: active
merged_into: null
display_name: 王演
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Cg1KPjuuWKh2msy7dqoQJX
        subject_person_id: p_8CGfGgBfrrBdemwbx49Lvf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王演
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HxbHunkQyo11M2svXBskjF
          claim_id: c_Cg1KPjuuWKh2msy7dqoQJX
          source_id: s_MRk5qwxwMFd2V43dqjQ6s4
          stance: supports
          locator: CBDB:134052
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（134052）
          source: &a1
            id: s_MRk5qwxwMFd2V43dqjQ6s4
            source_type: api_record
            title: 中国历代人物传记资料库：王演（CBDB 134052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134052&o=json
            external_identifier: CBDB:134052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.301Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JfhSDDDMUGN8QfkaZKzx77
        subject_person_id: p_8CGfGgBfrrBdemwbx49Lvf
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
        - id: cs_25XgPTeJ3ehF6ohz9GS5JU
          claim_id: c_JfhSDDDMUGN8QfkaZKzx77
          source_id: s_MRk5qwxwMFd2V43dqjQ6s4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WxmAtGjr9OHIBApXd_EJTG
        subject_person_id: p_gwVUKjMQycQaZ6UR2zvJFs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8CGfGgBfrrBdemwbx49Lvf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OrmFn4cO3VWqzdLIG2iR7y
          claim_id: c_WxmAtGjr9OHIBApXd_EJTG
          source_id: s_MRk5qwxwMFd2V43dqjQ6s4
          stance: supports
          locator: 宋濂全集，1196：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gwVUKjMQycQaZ6UR2zvJFs
        status: active
        display_name: 王順
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王演

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王演 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gwVUKjMQycQaZ6UR2zvJFs | 王順 | accepted |

## 外部来源

- [中国历代人物传记资料库：王演（CBDB 134052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134052&o=json)

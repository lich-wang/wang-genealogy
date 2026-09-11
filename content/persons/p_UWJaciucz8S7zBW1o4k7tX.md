---
schema: wang-person/v1
id: p_UWJaciucz8S7zBW1o4k7tX
status: active
merged_into: null
display_name: 王文公
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LcPYDiNKwBwMBgCzKpNfdH
        subject_person_id: p_UWJaciucz8S7zBW1o4k7tX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文公
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MF3SYoi2RPK9BuFSJXLR6M
          claim_id: c_LcPYDiNKwBwMBgCzKpNfdH
          source_id: s_7Bhq2WE9yiVZqPoSfuu4z8
          stance: supports
          locator: CBDB:251894
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（251894）
          source: &a1
            id: s_7Bhq2WE9yiVZqPoSfuu4z8
            source_type: api_record
            title: 中国历代人物传记资料库：王文公（CBDB 251894）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251894&o=json
            external_identifier: CBDB:251894
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.252Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BD35C8YkQ3QXrUufg63HZs
        subject_person_id: p_UWJaciucz8S7zBW1o4k7tX
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
        - id: cs_9kMrtKpRtT67oUQnBodJgH
          claim_id: c_BD35C8YkQ3QXrUufg63HZs
          source_id: s_7Bhq2WE9yiVZqPoSfuu4z8
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
        id: c_Pvj66eLfuSQ5S47QYgH4eE
        subject_person_id: p_UWJaciucz8S7zBW1o4k7tX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cnN8Qwq9XduFw216Ep1U5h
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gxIUSv64xrH3Hhr-9xvWJk
          claim_id: c_Pvj66eLfuSQ5S47QYgH4eE
          source_id: s_7Bhq2WE9yiVZqPoSfuu4z8
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第二十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cnN8Qwq9XduFw216Ep1U5h
        status: active
        display_name: 王宏
        merged_into_person_id: null
  other: []
---

# 王文公

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文公 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_cnN8Qwq9XduFw216Ep1U5h | 王宏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文公（CBDB 251894）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251894&o=json)

---
schema: wang-person/v1
id: p_fHWLZSGPRrVehEZSh8KThr
status: active
merged_into: null
display_name: 王宋
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4yxhbhEbM1XcT87DSM5ZVL
        subject_person_id: p_fHWLZSGPRrVehEZSh8KThr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J2tVKW4YDcXByLbxc3hHhB
          claim_id: c_4yxhbhEbM1XcT87DSM5ZVL
          source_id: s_cMnNa2PZHz5zfAfcQ4NsVj
          stance: supports
          locator: CBDB:327776
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327776）
          source: &a1
            id: s_cMnNa2PZHz5zfAfcQ4NsVj
            source_type: api_record
            title: 中国历代人物传记资料库：王宋（CBDB 327776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327776&o=json
            external_identifier: CBDB:327776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.256Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZKvyWGB8sHERYN2kJQkCPg
        subject_person_id: p_fHWLZSGPRrVehEZSh8KThr
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
        - id: cs_vhDDQTAaGaVyLthxH6GDH5
          claim_id: c_ZKvyWGB8sHERYN2kJQkCPg
          source_id: s_cMnNa2PZHz5zfAfcQ4NsVj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_z3jPlKRTMtGLw-KIj72a3r
        subject_person_id: p_fHWLZSGPRrVehEZSh8KThr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jmQBNF2thuLTj5CEgg4gFw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L0Kj6li0EgP9quHYvhW5kX
          claim_id: c_z3jPlKRTMtGLw-KIj72a3r
          source_id: s_cMnNa2PZHz5zfAfcQ4NsVj
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第五十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jmQBNF2thuLTj5CEgg4gFw
        status: active
        display_name: 王宗載
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宋 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_jmQBNF2thuLTj5CEgg4gFw | 王宗載 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宋（CBDB 327776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327776&o=json)

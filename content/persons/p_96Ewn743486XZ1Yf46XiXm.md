---
schema: wang-person/v1
id: p_96Ewn743486XZ1Yf46XiXm
status: active
merged_into: null
display_name: 王庸
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M57cXUiDJo28e6FjtpDuCc
        subject_person_id: p_96Ewn743486XZ1Yf46XiXm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H638XPzsjFneKr4CAQYLao
          claim_id: c_M57cXUiDJo28e6FjtpDuCc
          source_id: s_T35hrPcoDVBtveX2U7SyQ5
          stance: supports
          locator: CBDB:275693
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（275693）
          source: &a1
            id: s_T35hrPcoDVBtveX2U7SyQ5
            source_type: api_record
            title: 中国历代人物传记资料库：王庸（CBDB 275693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275693&o=json
            external_identifier: CBDB:275693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.932Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zPEZLZoEnLcQPJbc234itp
        subject_person_id: p_96Ewn743486XZ1Yf46XiXm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庸，明人物。弘治十八年進士。（中国历代人物传记资料库 CBDB 275693）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X6aN2yd75RDjpahCs98JbQ
          claim_id: c_zPEZLZoEnLcQPJbc234itp
          source_id: s_T35hrPcoDVBtveX2U7SyQ5
          stance: supports
          locator: CBDB:275693
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
  descendants:
    - claim:
        id: c_r4TNoAxZwNxkjpqExRdieL
        subject_person_id: p_96Ewn743486XZ1Yf46XiXm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Td8aSiPoW9PKF48tkv2vXs
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vksmSgf5XtMa0P4Y1B5PgJ
          claim_id: c_r4TNoAxZwNxkjpqExRdieL
          source_id: s_T35hrPcoDVBtveX2U7SyQ5
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第二百零四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Td8aSiPoW9PKF48tkv2vXs
        status: active
        display_name: 王瑤
        merged_into_person_id: null
  other: []
---

# 王庸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庸 | accepted |
| bio.summary | 王庸，明人物。弘治十八年進士。（中国历代人物传记资料库 CBDB 275693） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Td8aSiPoW9PKF48tkv2vXs | 王瑤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王庸（CBDB 275693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275693&o=json)

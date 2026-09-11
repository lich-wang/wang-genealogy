---
schema: wang-person/v1
id: p_dPbUUoQEGcRs5zuUF67Td8
status: active
merged_into: null
display_name: 王坤
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QxTujsG7PvJFCoM4tbvbjK
        subject_person_id: p_dPbUUoQEGcRs5zuUF67Td8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D9b1x7Nv1PKNWSM5D1ftCv
          claim_id: c_QxTujsG7PvJFCoM4tbvbjK
          source_id: s_37EqMwj6AWqcVdX4xs8pBL
          stance: supports
          locator: CBDB:274038
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（274038）
          source: &a1
            id: s_37EqMwj6AWqcVdX4xs8pBL
            source_type: api_record
            title: 中国历代人物传记资料库：王坤（CBDB 274038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274038&o=json
            external_identifier: CBDB:274038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rnVmCahQP2aqA38QAMgQbX
        subject_person_id: p_dPbUUoQEGcRs5zuUF67Td8
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
        - id: cs_CnEC4bVYnGL83s168ErJuK
          claim_id: c_rnVmCahQP2aqA38QAMgQbX
          source_id: s_37EqMwj6AWqcVdX4xs8pBL
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
        id: c_a5esC13_CSruIZLXdahB3s
        subject_person_id: p_dPbUUoQEGcRs5zuUF67Td8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zypfM9LtT1QVxbd1JRHGna
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fsOvLH33kZgIqZi01DDAd1
          claim_id: c_a5esC13_CSruIZLXdahB3s
          source_id: s_37EqMwj6AWqcVdX4xs8pBL
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第三十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zypfM9LtT1QVxbd1JRHGna
        status: active
        display_name: 王一麟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王坤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王坤 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_zypfM9LtT1QVxbd1JRHGna | 王一麟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王坤（CBDB 274038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274038&o=json)

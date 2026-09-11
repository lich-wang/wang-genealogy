---
schema: wang-person/v1
id: p_oCXVM7557zGQmqzQ94ZCEU
status: active
merged_into: null
display_name: 王福
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HAnW1t7d6X4suheK2PvRB4
        subject_person_id: p_oCXVM7557zGQmqzQ94ZCEU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_m1JBjFCbbBSjQ4tcDYfp5F
          claim_id: c_HAnW1t7d6X4suheK2PvRB4
          source_id: s_K9jmEFrPjCK2LNic4spMmN
          stance: supports
          locator: CBDB:274427
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（274427）
          source: &a1
            id: s_K9jmEFrPjCK2LNic4spMmN
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 274427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274427&o=json
            external_identifier: CBDB:274427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.925Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_frPiNcxTgZ3DTU6chY2kKM
        subject_person_id: p_oCXVM7557zGQmqzQ94ZCEU
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
        - id: cs_TqNiFLtSnGYgK7LuBXpruY
          claim_id: c_frPiNcxTgZ3DTU6chY2kKM
          source_id: s_K9jmEFrPjCK2LNic4spMmN
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
        id: c_ANJP5WZV9aSgRGXyl2GJNg
        subject_person_id: p_oCXVM7557zGQmqzQ94ZCEU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ofDNL1hsFt1v6GYpjecDnr
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w64gSgPNrF5VBg3TOYlL_W
          claim_id: c_ANJP5WZV9aSgRGXyl2GJNg
          source_id: s_K9jmEFrPjCK2LNic4spMmN
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第七十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ofDNL1hsFt1v6GYpjecDnr
        status: active
        display_name: 王億
        merged_into_person_id: null
  other: []
---

# 王福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ofDNL1hsFt1v6GYpjecDnr | 王億 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 274427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274427&o=json)

---
schema: wang-person/v1
id: p_WxESaqfXoRne3LVPqRgpV4
status: active
merged_into: null
display_name: 王珪
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BdwGVQQPayX3LovTwUtDj7
        subject_person_id: p_WxESaqfXoRne3LVPqRgpV4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LLwzYQPoJVuzZQmqUXbcei
          claim_id: c_BdwGVQQPayX3LovTwUtDj7
          source_id: s_MmkSBTq62nev9HTtT8M18S
          stance: supports
          locator: CBDB:237440
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237440）
          source: &a1
            id: s_MmkSBTq62nev9HTtT8M18S
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 237440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237440&o=json
            external_identifier: CBDB:237440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.839Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T9kjFdq235i4abgSmkA5Wg
        subject_person_id: p_WxESaqfXoRne3LVPqRgpV4
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
        - id: cs_quWHjjteSAJtknLZdivgHK
          claim_id: c_T9kjFdq235i4abgSmkA5Wg
          source_id: s_MmkSBTq62nev9HTtT8M18S
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
        id: c_pB__r2kpggkzHomtmlZb8O
        subject_person_id: p_WxESaqfXoRne3LVPqRgpV4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dHV6AgtpcgRLpJFycLHnbd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CFzD8E9X8yyonwDE5ZGi4v
          claim_id: c_pB__r2kpggkzHomtmlZb8O
          source_id: s_BrL8FgKbWmjfM3JrsFKFu6
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第五十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BrL8FgKbWmjfM3JrsFKFu6
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 67212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67212&o=json
            external_identifier: CBDB:67212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.978Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dHV6AgtpcgRLpJFycLHnbd
        status: active
        display_name: 王信
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珪 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_dHV6AgtpcgRLpJFycLHnbd | 王信 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珪（CBDB 237440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237440&o=json)
- [中国历代人物传记资料库：王信（CBDB 67212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67212&o=json)

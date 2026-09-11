---
schema: wang-person/v1
id: p_LUJFYyJjwhK11TRQYR923b
status: active
merged_into: null
display_name: 楊氏
revision: 1
cbdb_id: 555113
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ic7Zo5NGACJQLCrRP7HoYV
        subject_person_id: p_LUJFYyJjwhK11TRQYR923b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 楊氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FomAcKWGNj8Ac6PmXAnBIr
          claim_id: c_Ic7Zo5NGACJQLCrRP7HoYV
          source_id: s_HWH33wY96-vBxOdA3v-DXf
          stance: supports
          locator: CBDB:555113
          quotation: null
          interpretation_note: CBDB 明确记录的王化育配偶
          source: &a1
            id: s_HWH33wY96-vBxOdA3v-DXf
            source_type: api_record
            title: 中国历代人物传记资料库：楊氏(王化育妻)（CBDB 555113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555113&o=json
            external_identifier: CBDB:555113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_s8OsUUHJsvB05iaFpdlEw4
        subject_person_id: p_C1WzvioYLhRubASkP1WBiN
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_LUJFYyJjwhK11TRQYR923b
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Lv_q_qwq6_QG48Of8jabLj
          claim_id: c_s8OsUUHJsvB05iaFpdlEw4
          source_id: s_HWH33wY96-vBxOdA3v-DXf
          stance: supports
          locator: 南陽府志，lgid=878687：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_C1WzvioYLhRubASkP1WBiN
        status: active
        display_name: 王化育
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 楊氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 楊氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_C1WzvioYLhRubASkP1WBiN | 王化育 | accepted |

## 外部来源

- [中国历代人物传记资料库：楊氏(王化育妻)（CBDB 555113）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555113&o=json)

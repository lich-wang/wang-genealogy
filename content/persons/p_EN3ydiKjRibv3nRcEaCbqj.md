---
schema: wang-person/v1
id: p_EN3ydiKjRibv3nRcEaCbqj
status: active
merged_into: null
display_name: 王政
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2jNdz7Rd6M2Y8FuJA62vr9
        subject_person_id: p_EN3ydiKjRibv3nRcEaCbqj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zj4VBh2hP7CU3J2dvN1VCE
          claim_id: c_2jNdz7Rd6M2Y8FuJA62vr9
          source_id: s_EF7DHHGHXKcw4Nmxy3fCNB
          stance: supports
          locator: CBDB:242559
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242559）
          source: &a1
            id: s_EF7DHHGHXKcw4Nmxy3fCNB
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 242559）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242559&o=json
            external_identifier: CBDB:242559
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.976Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Pt1MFaQjaGhVEBEdBjfdy8
        subject_person_id: p_EN3ydiKjRibv3nRcEaCbqj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政，明人物。成化二年進士，籍贯寧州，曾任府經歷。（中国历代人物传记资料库 CBDB 242559）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Yuk8V-id6Xq5Pu874aJxD3
          claim_id: c_Pt1MFaQjaGhVEBEdBjfdy8
          source_id: s_EF7DHHGHXKcw4Nmxy3fCNB
          stance: supports
          locator: CBDB:242559
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_PCyQBQpLSOIL-1HXZtbosH
        subject_person_id: p_EN3ydiKjRibv3nRcEaCbqj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XFNHC3xzSn5PQ61c2MLe3i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pTi8pL8Hk7IjI0bdfMyoWh
          claim_id: c_PCyQBQpLSOIL-1HXZtbosH
          source_id: s_EF7DHHGHXKcw4Nmxy3fCNB
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第二百四十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XFNHC3xzSn5PQ61c2MLe3i
        status: active
        display_name: 王偉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政 | accepted |
| bio.summary | 王政，明人物。成化二年進士，籍贯寧州，曾任府經歷。（中国历代人物传记资料库 CBDB 242559） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_XFNHC3xzSn5PQ61c2MLe3i | 王偉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王政（CBDB 242559）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242559&o=json)

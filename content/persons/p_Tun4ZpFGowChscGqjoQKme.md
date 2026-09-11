---
schema: wang-person/v1
id: p_Tun4ZpFGowChscGqjoQKme
status: active
merged_into: null
display_name: 王榮清
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WLgmtFJfWiZAmbgqRd5fc1
        subject_person_id: p_Tun4ZpFGowChscGqjoQKme
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VkvGPeA1nFfccfaG2qhnT2
          claim_id: c_WLgmtFJfWiZAmbgqRd5fc1
          source_id: s_uYP1QWJ2VMtMn5C9H3nSyf
          stance: supports
          locator: CBDB:335610
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（335610）
          source: &a1
            id: s_uYP1QWJ2VMtMn5C9H3nSyf
            source_type: api_record
            title: 中国历代人物传记资料库：王榮清（CBDB 335610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335610&o=json
            external_identifier: CBDB:335610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.462Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sqZLa9PA3vCVSzCRZArudx
        subject_person_id: p_Tun4ZpFGowChscGqjoQKme
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
        - id: cs_SiA2m8Uf5RyDGTKRbTf7GR
          claim_id: c_sqZLa9PA3vCVSzCRZArudx
          source_id: s_uYP1QWJ2VMtMn5C9H3nSyf
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
        id: c_4YlRr9B8Wm3lMUZuCUj0Vn
        subject_person_id: p_Tun4ZpFGowChscGqjoQKme
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RPTGuNk7UCyXG66UZ8YB1y
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w3RhC8nGhZj8umE1gg_FER
          claim_id: c_4YlRr9B8Wm3lMUZuCUj0Vn
          source_id: s_uYP1QWJ2VMtMn5C9H3nSyf
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第三十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RPTGuNk7UCyXG66UZ8YB1y
        status: active
        display_name: 王琮
        merged_into_person_id: null
  other: []
---

# 王榮清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮清 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_RPTGuNk7UCyXG66UZ8YB1y | 王琮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王榮清（CBDB 335610）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335610&o=json)

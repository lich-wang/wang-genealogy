---
schema: wang-person/v1
id: p_AgKmu3if3fzH6xxsK1rH6a
status: active
merged_into: null
display_name: 王威
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sUdHuJdGXSyfvc43zytUcT
        subject_person_id: p_AgKmu3if3fzH6xxsK1rH6a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王威
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CXTCQgdMGsYpRwJzXnqqzB
          claim_id: c_sUdHuJdGXSyfvc43zytUcT
          source_id: s_YTSva9txjCwUpSQWa23PfC
          stance: supports
          locator: CBDB:531133
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（531133）
          source: &a1
            id: s_YTSva9txjCwUpSQWa23PfC
            source_type: api_record
            title: 中国历代人物传记资料库：王威（CBDB 531133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531133&o=json
            external_identifier: CBDB:531133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.354Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rvNa1CSw78aHA3DwoAEjDR
        subject_person_id: p_AgKmu3if3fzH6xxsK1rH6a
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
        - id: cs_o6dJDB9GsQ6cK2R3pqRW66
          claim_id: c_rvNa1CSw78aHA3DwoAEjDR
          source_id: s_YTSva9txjCwUpSQWa23PfC
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
        id: c_0JyImQwjFvdRJtjc3ycORX
        subject_person_id: p_AgKmu3if3fzH6xxsK1rH6a
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_89LKcBgPnnvGWgUmdU3U65
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__y7NmJIvf2qg0RJUz8bDEo
          claim_id: c_0JyImQwjFvdRJtjc3ycORX
          source_id: s_GWiBKivMBy63BwdBK5339e
          stance: supports
          locator: 榆林府志，lgid=1046726：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GWiBKivMBy63BwdBK5339e
            source_type: api_record
            title: 中国历代人物传记资料库：王洪（CBDB 531136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531136&o=json
            external_identifier: CBDB:531136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.355Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_89LKcBgPnnvGWgUmdU3U65
        status: active
        display_name: 王洪
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王威

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王威 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_89LKcBgPnnvGWgUmdU3U65 | 王洪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王洪（CBDB 531136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531136&o=json)
- [中国历代人物传记资料库：王威（CBDB 531133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531133&o=json)

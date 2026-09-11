---
schema: wang-person/v1
id: p_b6w6en5bMsXhtNVTcf96XT
status: active
merged_into: null
display_name: 王九經
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_95ePBHBMBGTh1oDzQ7ZxeG
        subject_person_id: p_b6w6en5bMsXhtNVTcf96XT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TN8FECCsiGFH8pdUJKJKHM
          claim_id: c_95ePBHBMBGTh1oDzQ7ZxeG
          source_id: s_EkBeFR4VnwLhK1bjD74rsy
          stance: supports
          locator: CBDB:232586
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（232586）
          source: &a1
            id: s_EkBeFR4VnwLhK1bjD74rsy
            source_type: api_record
            title: 中国历代人物传记资料库：王九經（CBDB 232586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232586&o=json
            external_identifier: CBDB:232586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.695Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ejXWn8rtV16x5W1AwYNEik
        subject_person_id: p_b6w6en5bMsXhtNVTcf96XT
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
        - id: cs_Q7S2SyBfefNDuqfeJiNZH4
          claim_id: c_ejXWn8rtV16x5W1AwYNEik
          source_id: s_EkBeFR4VnwLhK1bjD74rsy
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
        id: c_e_x7o-44gAmrfqdmeJ66EB
        subject_person_id: p_b6w6en5bMsXhtNVTcf96XT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D7dK1u4GKLagJY81LcTNi5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XBpcoWhZ6W40flfsKWXWZO
          claim_id: c_e_x7o-44gAmrfqdmeJ66EB
          source_id: s_EkBeFR4VnwLhK1bjD74rsy
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第一百七十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_D7dK1u4GKLagJY81LcTNi5
        status: active
        display_name: 王用謨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王九經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九經 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_D7dK1u4GKLagJY81LcTNi5 | 王用謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王九經（CBDB 232586）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232586&o=json)

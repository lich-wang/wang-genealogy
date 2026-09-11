---
schema: wang-person/v1
id: p_s5BhBT8c6qD1BRcxk3t6Pe
status: active
merged_into: null
display_name: 王建封
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Hn6CGX5uxh4CmSkXHyCMbY
        subject_person_id: p_s5BhBT8c6qD1BRcxk3t6Pe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建封
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TpVNczDBRVub3h9VmUP5QQ
          claim_id: c_Hn6CGX5uxh4CmSkXHyCMbY
          source_id: s_bAn3K1MtrTCuXpx3K8z3YB
          stance: supports
          locator: CBDB:13479
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（13479）
          source: &a1
            id: s_bAn3K1MtrTCuXpx3K8z3YB
            source_type: api_record
            title: 中国历代人物传记资料库：王建封（CBDB 13479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13479&o=json
            external_identifier: CBDB:13479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.621Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iES18UuCjjq2mSPVCT4EbA
        subject_person_id: p_s5BhBT8c6qD1BRcxk3t6Pe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aWz5WYw1GV81TnLnA33WvK
          claim_id: c_iES18UuCjjq2mSPVCT4EbA
          source_id: s_bAn3K1MtrTCuXpx3K8z3YB
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
  ancestors:
    - claim:
        id: c_kSECppnNZQd_1Ps-9m-QCt
        subject_person_id: p_S91UDmLopWwoam8e6F89Jc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_s5BhBT8c6qD1BRcxk3t6Pe
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G6PJjwFvZmxtDtmg-JukxV
          claim_id: c_kSECppnNZQd_1Ps-9m-QCt
          source_id: s_bAn3K1MtrTCuXpx3K8z3YB
          stance: supports
          locator: CBDB 双向互证（祖父 王俊彥 ⇄ 孫 王建封）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_S91UDmLopWwoam8e6F89Jc
        status: active
        display_name: 王俊彥
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王建封

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建封 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_S91UDmLopWwoam8e6F89Jc | 王俊彥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王建封（CBDB 13479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13479&o=json)

---
schema: wang-person/v1
id: p_gE3CnwapCniUCHrAKzxaDg
status: active
merged_into: null
display_name: 王獻之
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DfAdmPri6D9cX8JqkGTa3D
        subject_person_id: p_gE3CnwapCniUCHrAKzxaDg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jgavr89BaMwkW3bzMUBxiU
          claim_id: c_DfAdmPri6D9cX8JqkGTa3D
          source_id: s_DMWKppxrZCxAwAhDa6vJx2
          stance: supports
          locator: CBDB:135441
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（135441）
          source: &a1
            id: s_DMWKppxrZCxAwAhDa6vJx2
            source_type: api_record
            title: 中国历代人物传记资料库：王獻之（CBDB 135441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135441&o=json
            external_identifier: CBDB:135441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.338Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SjuPoFycWv3BjgiE36phoJ
        subject_person_id: p_gE3CnwapCniUCHrAKzxaDg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为東晉人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7CJFxAdAvYuxTbXNMuR4Vn
          claim_id: c_SjuPoFycWv3BjgiE36phoJ
          source_id: s_DMWKppxrZCxAwAhDa6vJx2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BADVkloT39Rgdb9SrsE1sb
        subject_person_id: p_VCkK1jW79rQ6D9gE1Q4vrU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gE3CnwapCniUCHrAKzxaDg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_30Xq2bbaPLccoF8PFfqhxB
          claim_id: c_BADVkloT39Rgdb9SrsE1sb
          source_id: s_DMWKppxrZCxAwAhDa6vJx2
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2002：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VCkK1jW79rQ6D9gE1Q4vrU
        status: active
        display_name: 王羲之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_9WW_K-o1D6qYHd4CjWMljd
        subject_person_id: p_D562GFGgr5DcYbDm42BV2v
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_gE3CnwapCniUCHrAKzxaDg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s15WOFc-6nlmx7Hpbol6qs
          claim_id: c_9WW_K-o1D6qYHd4CjWMljd
          source_id: s_myQeEEFabNEHwRWbKUSQAD
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2002：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_myQeEEFabNEHwRWbKUSQAD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：桃葉（135442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135442&o=json
            external_identifier: CBDB:135442
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:30.737Z
            metadata_json: null
      object_person:
        id: p_D562GFGgr5DcYbDm42BV2v
        status: active
        display_name: 桃叶
        merged_into_person_id: null
    - claim:
        id: c_l2LW95t-NhbjgNN1ljiXFG
        subject_person_id: p_GbjoLBYDxAWAuAAdwTiJ1z
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_gE3CnwapCniUCHrAKzxaDg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T84H--UW2t1Sp1LUM0EPhA
          claim_id: c_l2LW95t-NhbjgNN1ljiXFG
          source_id: s_uwNH2dAJxGQ3DZd37a14He
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2002：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uwNH2dAJxGQ3DZd37a14He
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：桃根（135443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135443&o=json
            external_identifier: CBDB:135443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:31.505Z
            metadata_json: null
      object_person:
        id: p_GbjoLBYDxAWAuAAdwTiJ1z
        status: active
        display_name: 桃根
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王獻之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王獻之 | accepted |
| bio.summary | CBDB 记载为東晉人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VCkK1jW79rQ6D9gE1Q4vrU | 王羲之 | accepted |
| spouses | p_D562GFGgr5DcYbDm42BV2v | 桃叶 | accepted |
| spouses | p_GbjoLBYDxAWAuAAdwTiJ1z | 桃根 | accepted |

## 外部来源

- [中国历代人物传记资料库：王獻之（CBDB 135441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135441&o=json)
- [CBDB 中国历代人物传记资料库：桃根（135443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135443&o=json)
- [CBDB 中国历代人物传记资料库：桃葉（135442）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135442&o=json)

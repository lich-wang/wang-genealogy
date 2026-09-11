---
schema: wang-person/v1
id: p_u7EsVBbqzhdscb4MCv8fHW
status: active
merged_into: null
display_name: 王承芳
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6ALNzAnbztsavnp6hYABb2
        subject_person_id: p_u7EsVBbqzhdscb4MCv8fHW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EHa53v9M6FpYdoZfhjPvH4
          claim_id: c_6ALNzAnbztsavnp6hYABb2
          source_id: s_LHgMBTSrtVrvKx74zVjc4S
          stance: supports
          locator: CBDB:208931
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208931）
          source: &a1
            id: s_LHgMBTSrtVrvKx74zVjc4S
            source_type: api_record
            title: 中国历代人物传记资料库：王承芳（CBDB 208931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208931&o=json
            external_identifier: CBDB:208931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.969Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gjNh6tgVtsPkUpHZi8uEjV
        subject_person_id: p_u7EsVBbqzhdscb4MCv8fHW
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
        - id: cs_iUivUwBvTxWtsRTWb35mHU
          claim_id: c_gjNh6tgVtsPkUpHZi8uEjV
          source_id: s_LHgMBTSrtVrvKx74zVjc4S
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
        id: c_FS-KHpRJ0IXVOEfWGY9Kg3
        subject_person_id: p_u7EsVBbqzhdscb4MCv8fHW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Sg6kuXv7Vis1mLCj6EFgTh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B8_y4pKR3EEHrMytFsa9WJ
          claim_id: c_FS-KHpRJ0IXVOEfWGY9Kg3
          source_id: s_LHgMBTSrtVrvKx74zVjc4S
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Sg6kuXv7Vis1mLCj6EFgTh
        status: active
        display_name: 王希元
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王承芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承芳 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Sg6kuXv7Vis1mLCj6EFgTh | 王希元 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承芳（CBDB 208931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208931&o=json)

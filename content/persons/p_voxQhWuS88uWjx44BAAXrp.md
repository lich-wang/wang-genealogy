---
schema: wang-person/v1
id: p_voxQhWuS88uWjx44BAAXrp
status: active
merged_into: null
display_name: 王大寶
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8CHHcxD8Czz9HyHXevDgW6
        subject_person_id: p_voxQhWuS88uWjx44BAAXrp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大寶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8AmdCsJiryALVoADfakysx
          claim_id: c_8CHHcxD8Czz9HyHXevDgW6
          source_id: s_gRtnhxyK2yX2iSDGQHnW97
          stance: supports
          locator: CBDB:14454
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（14454）
          source: &a1
            id: s_gRtnhxyK2yX2iSDGQHnW97
            source_type: api_record
            title: 中国历代人物传记资料库：王大寶（CBDB 14454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14454&o=json
            external_identifier: CBDB:14454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.638Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pS2yFmg3exJeWvHyL8pyha
        subject_person_id: p_voxQhWuS88uWjx44BAAXrp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1094年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kJJZAmHiNH7jjvoKUkwMgz
          claim_id: c_pS2yFmg3exJeWvHyL8pyha
          source_id: s_gRtnhxyK2yX2iSDGQHnW97
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_rF6kaoSwQ3aLn59j2dFf81
        subject_person_id: p_voxQhWuS88uWjx44BAAXrp
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1170年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K3pJMSJxAQbJKh1teUHJLL
          claim_id: c_rF6kaoSwQ3aLn59j2dFf81
          source_id: s_gRtnhxyK2yX2iSDGQHnW97
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MWCWXQGBJDakuGy84Aj8GY
        subject_person_id: p_voxQhWuS88uWjx44BAAXrp
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
        - id: cs_hoB9eEbtKUM1Rc7ABUjepT
          claim_id: c_MWCWXQGBJDakuGy84Aj8GY
          source_id: s_gRtnhxyK2yX2iSDGQHnW97
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
        id: c_tuyFmGppFTonei1x4K1WjN
        subject_person_id: p_ADbJSjSjnLbVVNHeHEk13h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_voxQhWuS88uWjx44BAAXrp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5WZLUxAIFJPWqGQLNi8VyE
          claim_id: c_tuyFmGppFTonei1x4K1WjN
          source_id: s_24EoYefEZCz5g58nCjPkh8
          stance: supports
          locator: CBDB 双向互证（子 王大寶 ⇄ 父 王昌時）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_24EoYefEZCz5g58nCjPkh8
            source_type: api_record
            title: 中国历代人物传记资料库：王昌時（CBDB 14453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14453&o=json
            external_identifier: CBDB:14453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.638Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ADbJSjSjnLbVVNHeHEk13h
        status: active
        display_name: 王昌時
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大寶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大寶 | accepted |
| birth.date | 1094年 | accepted |
| death.date | 1170年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ADbJSjSjnLbVVNHeHEk13h | 王昌時 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昌時（CBDB 14453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14453&o=json)
- [中国历代人物传记资料库：王大寶（CBDB 14454）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14454&o=json)

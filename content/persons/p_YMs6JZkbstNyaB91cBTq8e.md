---
schema: wang-person/v1
id: p_YMs6JZkbstNyaB91cBTq8e
status: active
merged_into: null
display_name: 王珍
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8Ar82y4X7h8vPvSZttWy7Z
        subject_person_id: p_YMs6JZkbstNyaB91cBTq8e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z14aM5YarKJY2yDX1rYaG7
          claim_id: c_8Ar82y4X7h8vPvSZttWy7Z
          source_id: s_DDxcxQL1ev4xkH9RkHws9x
          stance: supports
          locator: CBDB:143099
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（143099）
          source: &a1
            id: s_DDxcxQL1ev4xkH9RkHws9x
            source_type: api_record
            title: 中国历代人物传记资料库：王珍（CBDB 143099）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143099&o=json
            external_identifier: CBDB:143099
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.614Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_egqQBtYfuT3BWRJ3jjHTHu
        subject_person_id: p_YMs6JZkbstNyaB91cBTq8e
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 707年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ePV4iBbVZBSJNfVKHW4Lrb
          claim_id: c_egqQBtYfuT3BWRJ3jjHTHu
          source_id: s_DDxcxQL1ev4xkH9RkHws9x
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
        id: c_FxV4V19mwstMKqJbE5wyog
        subject_person_id: p_YMs6JZkbstNyaB91cBTq8e
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 763年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZaZhRmCiFkUt58Wge4hqW5
          claim_id: c_FxV4V19mwstMKqJbE5wyog
          source_id: s_DDxcxQL1ev4xkH9RkHws9x
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
        id: c_i9V1eLWyKjCyaHqxDyFYDN
        subject_person_id: p_YMs6JZkbstNyaB91cBTq8e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nQzzxqdmaavqQp473v391N
          claim_id: c_i9V1eLWyKjCyaHqxDyFYDN
          source_id: s_DDxcxQL1ev4xkH9RkHws9x
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
        id: c_ELY_kY4s3OAjAmSP2Sl2nl
        subject_person_id: p_YMs6JZkbstNyaB91cBTq8e
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3kourbNuWNhGu69vBJXe7H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NFwFK8A6mpzSqNhfafLxJx
          claim_id: c_ELY_kY4s3OAjAmSP2Sl2nl
          source_id: s_CEp9didRtWQLcjMiS9wKDW
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dali18：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CEp9didRtWQLcjMiS9wKDW
            source_type: api_record
            title: 中国历代人物传记资料库：王安國（CBDB 165213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165213&o=json
            external_identifier: CBDB:165213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.973Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3kourbNuWNhGu69vBJXe7H
        status: active
        display_name: 王安國
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珍 | accepted |
| birth.date | 707年 | accepted |
| death.date | 763年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3kourbNuWNhGu69vBJXe7H | 王安國 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安國（CBDB 165213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165213&o=json)
- [中国历代人物传记资料库：王珍（CBDB 143099）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143099&o=json)

---
schema: wang-person/v1
id: p_NgoTKWoLmsuhHmR46XJC8A
status: active
merged_into: null
display_name: 王淑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ztKZKevs5Z59FxgsxNucQX
        subject_person_id: p_NgoTKWoLmsuhHmR46XJC8A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JoApiRW5NZQgLqLFnJ4xtZ
          claim_id: c_ztKZKevs5Z59FxgsxNucQX
          source_id: s_uVDb5gvUcPe4S4GFbDCQMZ
          stance: supports
          locator: CBDB:139449
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139449）
          source: &a1
            id: s_uVDb5gvUcPe4S4GFbDCQMZ
            source_type: api_record
            title: 中国历代人物传记资料库：王淑（CBDB 139449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139449&o=json
            external_identifier: CBDB:139449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.413Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_phjTyEZ7NbunM6P34B3MRb
        subject_person_id: p_NgoTKWoLmsuhHmR46XJC8A
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 665年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_66JWt3RW4qrD7P6QaFGMYx
          claim_id: c_phjTyEZ7NbunM6P34B3MRb
          source_id: s_uVDb5gvUcPe4S4GFbDCQMZ
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
        id: c_7uc2aVXsBwY4fxcPM8S6Ex
        subject_person_id: p_NgoTKWoLmsuhHmR46XJC8A
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
        - id: cs_eGBhoKuMLCoqeCfjCyhHtm
          claim_id: c_7uc2aVXsBwY4fxcPM8S6Ex
          source_id: s_uVDb5gvUcPe4S4GFbDCQMZ
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
        id: c_0G3WNijiwaCbY44I5qbtRL
        subject_person_id: p_K4r135KRosihwdsa7nn85n
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NgoTKWoLmsuhHmR46XJC8A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6iwifsiPWGGSBZyQFDBDor
          claim_id: c_0G3WNijiwaCbY44I5qbtRL
          source_id: s_uVDb5gvUcPe4S4GFbDCQMZ
          stance: supports
          locator: 唐代墓誌匯編:二卷，Linde 40：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_K4r135KRosihwdsa7nn85n
        status: active
        display_name: 王遜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王淑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淑 | accepted |
| death.date | 665年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_K4r135KRosihwdsa7nn85n | 王遜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淑（CBDB 139449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139449&o=json)

---
schema: wang-person/v1
id: p_4LYFer57eogULuFKWU18ha
status: active
merged_into: null
display_name: 王湛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gV7UfAoqqLbiSKDzAfToom
        subject_person_id: p_4LYFer57eogULuFKWU18ha
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nwdKrYZuAULvkWGgUiTnRq
          claim_id: c_gV7UfAoqqLbiSKDzAfToom
          source_id: s_Be8wbzPugPCk9zymVFAri5
          stance: supports
          locator: CBDB:134623
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（134623）
          source: &a1
            id: s_Be8wbzPugPCk9zymVFAri5
            source_type: api_record
            title: 中国历代人物传记资料库：王湛（CBDB 134623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134623&o=json
            external_identifier: CBDB:134623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.329Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_w85V6FBrHCz2QLL1Le6g35
        subject_person_id: p_4LYFer57eogULuFKWU18ha
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 249年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jEFwM3Gm1qVnQin8pkASPp
          claim_id: c_w85V6FBrHCz2QLL1Le6g35
          source_id: s_Be8wbzPugPCk9zymVFAri5
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
        id: c_yhmkkMXTiMBh7HH7Vu6keT
        subject_person_id: p_4LYFer57eogULuFKWU18ha
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 295年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KcvMyT4yWDb53SRBrnZwJN
          claim_id: c_yhmkkMXTiMBh7HH7Vu6keT
          source_id: s_Be8wbzPugPCk9zymVFAri5
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
        id: c_Ngt7Fdz9yDx9hjm68oFubX
        subject_person_id: p_4LYFer57eogULuFKWU18ha
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为西晉人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GMwUVCbiKpvEJc6fqQgoKa
          claim_id: c_Ngt7Fdz9yDx9hjm68oFubX
          source_id: s_Be8wbzPugPCk9zymVFAri5
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
  descendants: []
  other: []
---

# 王湛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王湛 | accepted |
| birth.date | 249年 | accepted |
| death.date | 295年 | accepted |
| bio.summary | CBDB 记载为西晉人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王湛（CBDB 134623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134623&o=json)

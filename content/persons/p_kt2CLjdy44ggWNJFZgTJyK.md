---
schema: wang-person/v1
id: p_kt2CLjdy44ggWNJFZgTJyK
status: active
merged_into: null
display_name: 王之藩
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CFNG43jKG1xE2ryXfQkf8n
        subject_person_id: p_kt2CLjdy44ggWNJFZgTJyK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之藩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1cF4XGPJudtrgSw242ZVoA
          claim_id: c_CFNG43jKG1xE2ryXfQkf8n
          source_id: s_6rhFB6NwmDJF6rKTWorpen
          stance: supports
          locator: CBDB:557455
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557455）
          source: &a1
            id: s_6rhFB6NwmDJF6rKTWorpen
            source_type: api_record
            title: 中国历代人物传记资料库：王之藩（CBDB 557455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557455&o=json
            external_identifier: CBDB:557455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.671Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_39EJ65VXNBp71tzo68fKCX
        subject_person_id: p_kt2CLjdy44ggWNJFZgTJyK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之藩，明人物。籍贯鄧州，曾任遊擊將軍。（中国历代人物传记资料库 CBDB 557455）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0LGLZbeEhG7KUhu5e1ahyz
          claim_id: c_39EJ65VXNBp71tzo68fKCX
          source_id: s_6rhFB6NwmDJF6rKTWorpen
          stance: supports
          locator: CBDB:557455
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_TNMjyGIt_Sufnn-j020i5J
        subject_person_id: p_kt2CLjdy44ggWNJFZgTJyK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WrhQVFx4M3AwN7tYE7sR29
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KhaivUVT-0DztjlAwBQRUJ
          claim_id: c_TNMjyGIt_Sufnn-j020i5J
          source_id: s_6rhFB6NwmDJF6rKTWorpen
          stance: supports
          locator: 南陽府志，lgid=878782：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WrhQVFx4M3AwN7tYE7sR29
        status: active
        display_name: 王福
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_wERq48DnkPVFIYLpfIlAaB
        subject_person_id: p_kt2CLjdy44ggWNJFZgTJyK
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_wkdyaLL7B4eK18BV64Hjfu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_17xkbdr78Y8mkuPdiRNzi0
          claim_id: c_wERq48DnkPVFIYLpfIlAaB
          source_id: s_RKrPtAGtLy6jt-sBJaVola
          stance: supports
          locator: 南陽府志，lgid=878782：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RKrPtAGtLy6jt-sBJaVola
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王之藩妻)（CBDB 557456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557456&o=json
            external_identifier: CBDB:557456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wkdyaLL7B4eK18BV64Hjfu
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王之藩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之藩 | accepted |
| bio.summary | 王之藩，明人物。籍贯鄧州，曾任遊擊將軍。（中国历代人物传记资料库 CBDB 557455） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_WrhQVFx4M3AwN7tYE7sR29 | 王福 | accepted |
| spouses | p_wkdyaLL7B4eK18BV64Hjfu | 李氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王之藩妻)（CBDB 557456）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557456&o=json)
- [中国历代人物传记资料库：王之藩（CBDB 557455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557455&o=json)

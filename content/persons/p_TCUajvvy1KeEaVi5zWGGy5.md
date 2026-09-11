---
schema: wang-person/v1
id: p_TCUajvvy1KeEaVi5zWGGy5
status: active
merged_into: null
display_name: 王安
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nYwAZaXrTkFKhNurmhE2VQ
        subject_person_id: p_TCUajvvy1KeEaVi5zWGGy5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AaacJCGHcAsUQF7qRQVtdt
          claim_id: c_nYwAZaXrTkFKhNurmhE2VQ
          source_id: s_83jXmFREazpNzCK4wBDvbS
          stance: supports
          locator: CBDB:213739
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213739）
          source: &a1
            id: s_83jXmFREazpNzCK4wBDvbS
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 213739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213739&o=json
            external_identifier: CBDB:213739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.120Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vrKkrVwvyCTqAUEph5HKjn
        subject_person_id: p_TCUajvvy1KeEaVi5zWGGy5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安，明人物。萬曆二年進士。（中国历代人物传记资料库 CBDB 213739）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B7Z4vTlkDz1BpHETQW33Hf
          claim_id: c_vrKkrVwvyCTqAUEph5HKjn
          source_id: s_83jXmFREazpNzCK4wBDvbS
          stance: supports
          locator: CBDB:213739
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  descendants:
    - claim:
        id: c_rHnFDzUWfAMY9QQhY5flnb
        subject_person_id: p_TCUajvvy1KeEaVi5zWGGy5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vzt49mQ7898sBQeKmR1Czu
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mvI8WpDjG4FL-x3EwMxwpZ
          claim_id: c_rHnFDzUWfAMY9QQhY5flnb
          source_id: s_83jXmFREazpNzCK4wBDvbS
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第六十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vzt49mQ7898sBQeKmR1Czu
        status: active
        display_name: 王儒
        merged_into_person_id: null
  other: []
---

# 王安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安 | accepted |
| bio.summary | 王安，明人物。萬曆二年進士。（中国历代人物传记资料库 CBDB 213739） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_vzt49mQ7898sBQeKmR1Czu | 王儒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 213739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213739&o=json)

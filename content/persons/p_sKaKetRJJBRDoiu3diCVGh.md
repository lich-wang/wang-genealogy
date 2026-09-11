---
schema: wang-person/v1
id: p_sKaKetRJJBRDoiu3diCVGh
status: active
merged_into: null
display_name: 王達
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GjrDUDCPQgQcwYHUHwdRbD
        subject_person_id: p_sKaKetRJJBRDoiu3diCVGh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dAkyYxG78xZhBAF7CBD9CC
          claim_id: c_GjrDUDCPQgQcwYHUHwdRbD
          source_id: s_D62Bebv3MuLzYezq4xjfWN
          stance: supports
          locator: CBDB:320670
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（320670）
          source: &a1
            id: s_D62Bebv3MuLzYezq4xjfWN
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 320670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320670&o=json
            external_identifier: CBDB:320670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.066Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5RYy25eaTCp15akSYtnv1J
        subject_person_id: p_sKaKetRJJBRDoiu3diCVGh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達，明人物。嘉靖三十五年進士，曾任鳴贊、登仕佐郎。（中国历代人物传记资料库 CBDB 320670）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZLymzs8pIcAHSt3oXqlBnL
          claim_id: c_5RYy25eaTCp15akSYtnv1J
          source_id: s_D62Bebv3MuLzYezq4xjfWN
          stance: supports
          locator: CBDB:320670
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
        id: c__KGDYGACTzrWXAh_5lwdv3
        subject_person_id: p_sKaKetRJJBRDoiu3diCVGh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kJMVeQvjhmn2GKoEDEQfZk
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N2botUvUVnaD0NJ92ZzIDr
          claim_id: c__KGDYGACTzrWXAh_5lwdv3
          source_id: s_D62Bebv3MuLzYezq4xjfWN
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第六十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kJMVeQvjhmn2GKoEDEQfZk
        status: active
        display_name: 王用中
        merged_into_person_id: null
  other: []
---

# 王達

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王達 | accepted |
| bio.summary | 王達，明人物。嘉靖三十五年進士，曾任鳴贊、登仕佐郎。（中国历代人物传记资料库 CBDB 320670） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_kJMVeQvjhmn2GKoEDEQfZk | 王用中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王達（CBDB 320670）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320670&o=json)

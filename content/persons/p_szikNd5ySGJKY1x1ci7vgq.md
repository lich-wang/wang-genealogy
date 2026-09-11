---
schema: wang-person/v1
id: p_szikNd5ySGJKY1x1ci7vgq
status: active
merged_into: null
display_name: 王珩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k4wS9Gn6i7synbPPUo7ffz
        subject_person_id: p_szikNd5ySGJKY1x1ci7vgq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2qiD5Eqsd2CTXzWpaFoSzi
          claim_id: c_k4wS9Gn6i7synbPPUo7ffz
          source_id: s_1qXUwH2gVM19maxwm28Ayn
          stance: supports
          locator: CBDB:213200
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213200）
          source: &a1
            id: s_1qXUwH2gVM19maxwm28Ayn
            source_type: api_record
            title: 中国历代人物传记资料库：王珩（CBDB 213200）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213200&o=json
            external_identifier: CBDB:213200
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.106Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HnNS8u9Y3jMvLSuGYB6zoE
        subject_person_id: p_szikNd5ySGJKY1x1ci7vgq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珩，明人物。萬曆二年進士。（中国历代人物传记资料库 CBDB 213200）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r0w5qMv5FxGouMKE2eUlhy
          claim_id: c_HnNS8u9Y3jMvLSuGYB6zoE
          source_id: s_1qXUwH2gVM19maxwm28Ayn
          stance: supports
          locator: CBDB:213200
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
        id: c_nyVt-5MIi__VOpx0gyYh6F
        subject_person_id: p_szikNd5ySGJKY1x1ci7vgq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_v7QTG8DDAv27Aki2Sqpnvw
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gJFCTx1vJucN98C-uN2R4b
          claim_id: c_nyVt-5MIi__VOpx0gyYh6F
          source_id: s_1qXUwH2gVM19maxwm28Ayn
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_v7QTG8DDAv27Aki2Sqpnvw
        status: active
        display_name: 王問卿
        merged_into_person_id: null
  other: []
---

# 王珩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珩 | accepted |
| bio.summary | 王珩，明人物。萬曆二年進士。（中国历代人物传记资料库 CBDB 213200） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_v7QTG8DDAv27Aki2Sqpnvw | 王問卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珩（CBDB 213200）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213200&o=json)

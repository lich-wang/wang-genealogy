---
schema: wang-person/v1
id: p_6WVCyPZFzYK7Wi3KQchdvh
status: active
merged_into: null
display_name: 王紳
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vwd8NNWdXJ9WKGQp8QGMvY
        subject_person_id: p_6WVCyPZFzYK7Wi3KQchdvh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1zfGWWKuh5deFzU7PJit5j
          claim_id: c_Vwd8NNWdXJ9WKGQp8QGMvY
          source_id: s_AuaQB8dzegeRaxhauXGF4G
          stance: supports
          locator: CBDB:221765
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221765）
          source: &a1
            id: s_AuaQB8dzegeRaxhauXGF4G
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 221765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221765&o=json
            external_identifier: CBDB:221765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.336Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A6vi29jz8FkkdUcJZEZCoM
        subject_person_id: p_6WVCyPZFzYK7Wi3KQchdvh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紳，明人物。萬曆八年進士，曾任都察院右副都御史、中議大夫。（中国历代人物传记资料库 CBDB 221765）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_K1vC7U4JERErJaTdNphsnV
          claim_id: c_A6vi29jz8FkkdUcJZEZCoM
          source_id: s_AuaQB8dzegeRaxhauXGF4G
          stance: supports
          locator: CBDB:221765
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
        id: c_LCKHU2y1_VaRiSp6C0DMtS
        subject_person_id: p_6WVCyPZFzYK7Wi3KQchdvh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_88N8F7QC67BDANQ41w4EaZ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ykCCs3xV6YGf7KdwNhcdGd
          claim_id: c_LCKHU2y1_VaRiSp6C0DMtS
          source_id: s_AuaQB8dzegeRaxhauXGF4G
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百一十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_88N8F7QC67BDANQ41w4EaZ
        status: active
        display_name: 王顯仁
        merged_into_person_id: null
  other: []
---

# 王紳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紳 | accepted |
| bio.summary | 王紳，明人物。萬曆八年進士，曾任都察院右副都御史、中議大夫。（中国历代人物传记资料库 CBDB 221765） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_88N8F7QC67BDANQ41w4EaZ | 王顯仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紳（CBDB 221765）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221765&o=json)

---
schema: wang-person/v1
id: p_hfCGYE9t8CZi8LEbQZDGpq
status: active
merged_into: null
display_name: 王復
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mbP361KVTDNd4v93mXWQxN
        subject_person_id: p_hfCGYE9t8CZi8LEbQZDGpq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uiQqbnJpiHM9ij789bnyyB
          claim_id: c_mbP361KVTDNd4v93mXWQxN
          source_id: s_iWdwSXWC2jGtBLDcXJa14B
          stance: supports
          locator: CBDB:38557
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38557）
          source: &a1
            id: s_iWdwSXWC2jGtBLDcXJa14B
            source_type: api_record
            title: 中国历代人物传记资料库：王復（CBDB 38557）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38557&o=json
            external_identifier: CBDB:38557
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.511Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ogbBKX2Vtx8BdPU3YGWJX7
        subject_person_id: p_hfCGYE9t8CZi8LEbQZDGpq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1269年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3aNwM6ZmG8N9X8LHG2LJ1M
          claim_id: c_ogbBKX2Vtx8BdPU3YGWJX7
          source_id: s_iWdwSXWC2jGtBLDcXJa14B
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
        id: c_GyjwVuUuW91Fa3DptnP9Lt
        subject_person_id: p_hfCGYE9t8CZi8LEbQZDGpq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復（卒于1269年），宋人物。籍贯臨海，身份为布衣。（中国历代人物传记资料库 CBDB 38557）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xDhH6nnm5lf5524UY6pvIf
          claim_id: c_GyjwVuUuW91Fa3DptnP9Lt
          source_id: s_iWdwSXWC2jGtBLDcXJa14B
          stance: supports
          locator: CBDB:38557
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aVO98uy2SmnMdEVoBAvyAk
        subject_person_id: p_W33UcsPwnG2A9ZLEixVPKo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hfCGYE9t8CZi8LEbQZDGpq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UjWAK-ZypXzaXQ-jq5jwDe
          claim_id: c_aVO98uy2SmnMdEVoBAvyAk
          source_id: s_iWdwSXWC2jGtBLDcXJa14B
          stance: supports
          locator: 宋人傳記資料索引(電子版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_W33UcsPwnG2A9ZLEixVPKo
        status: active
        display_name: 王滋
        merged_into_person_id: null
  children:
    - claim:
        id: c_kN6KeksxXaXrR2Gd9f37J9
        subject_person_id: p_hfCGYE9t8CZi8LEbQZDGpq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jPz1H7nNuHgXtWSEgKFgeQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__5LGUolHJlio14nzFRrYGg
          claim_id: c_kN6KeksxXaXrR2Gd9f37J9
          source_id: s_iWdwSXWC2jGtBLDcXJa14B
          stance: supports
          locator: 宋人傳記資料索引(電子版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jPz1H7nNuHgXtWSEgKFgeQ
        status: active
        display_name: 王應午
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王復

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王復 | accepted |
| death.date | 1269年 | accepted |
| bio.summary | 王復（卒于1269年），宋人物。籍贯臨海，身份为布衣。（中国历代人物传记资料库 CBDB 38557） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_W33UcsPwnG2A9ZLEixVPKo | 王滋 | accepted |
| children | p_jPz1H7nNuHgXtWSEgKFgeQ | 王應午 | accepted |

## 外部来源

- [中国历代人物传记资料库：王復（CBDB 38557）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38557&o=json)

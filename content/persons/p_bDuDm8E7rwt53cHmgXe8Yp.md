---
schema: wang-person/v1
id: p_bDuDm8E7rwt53cHmgXe8Yp
status: active
merged_into: null
display_name: 王鼎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QBQ7XgDt5wWHtSbDD23MUH
        subject_person_id: p_bDuDm8E7rwt53cHmgXe8Yp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7FAkPkrHvbVVPz17rBi1tu
          claim_id: c_QBQ7XgDt5wWHtSbDD23MUH
          source_id: s_KEq5QZagwPxmW6L1hXn1sv
          stance: supports
          locator: CBDB:214678
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（214678）
          source: &a1
            id: s_KEq5QZagwPxmW6L1hXn1sv
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 214678）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214678&o=json
            external_identifier: CBDB:214678
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Nnzz9e5gGm9jKwtZfk26FM
        subject_person_id: p_bDuDm8E7rwt53cHmgXe8Yp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎，明人物。萬曆二年進士。（中国历代人物传记资料库 CBDB 214678）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ewzl15dvwuEhyGw2NBubOf
          claim_id: c_Nnzz9e5gGm9jKwtZfk26FM
          source_id: s_KEq5QZagwPxmW6L1hXn1sv
          stance: supports
          locator: CBDB:214678
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
        id: c_ECfs6c0X1kWZNFkpI60FJ6
        subject_person_id: p_bDuDm8E7rwt53cHmgXe8Yp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_y879UiTRBKZaXHHY531ywf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NMEBV1mE4WiGidbYY7xiP4
          claim_id: c_ECfs6c0X1kWZNFkpI60FJ6
          source_id: s_KEq5QZagwPxmW6L1hXn1sv
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百四十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_y879UiTRBKZaXHHY531ywf
        status: active
        display_name: 王价
        merged_into_person_id: null
  other: []
---

# 王鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎 | accepted |
| bio.summary | 王鼎，明人物。萬曆二年進士。（中国历代人物传记资料库 CBDB 214678） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_y879UiTRBKZaXHHY531ywf | 王价 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 214678）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214678&o=json)

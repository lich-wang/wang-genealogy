---
schema: wang-person/v1
id: p_EKeKWW2myZz4rE9rrMpRQP
status: active
merged_into: null
display_name: 王用
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BEnfxHjK2N6mnD28spUnYr
        subject_person_id: p_EKeKWW2myZz4rE9rrMpRQP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Rx9pcA1qRiS9rAHvavm1De
          claim_id: c_BEnfxHjK2N6mnD28spUnYr
          source_id: s_hyGDgWbazMBVGxB8stGE4A
          stance: supports
          locator: CBDB:324287
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（324287）
          source: &a1
            id: s_hyGDgWbazMBVGxB8stGE4A
            source_type: api_record
            title: 中国历代人物传记资料库：王用（CBDB 324287）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324287&o=json
            external_identifier: CBDB:324287
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.175Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6J9SKLQr9F98CYjB755Gwy
        subject_person_id: p_EKeKWW2myZz4rE9rrMpRQP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用，明人物。嘉靖三十八年進士，籍贯寧鄉，曾任義官。（中国历代人物传记资料库 CBDB 324287）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BnVmM9Qr8BbBPv342y1Xnm
          claim_id: c_6J9SKLQr9F98CYjB755Gwy
          source_id: s_hyGDgWbazMBVGxB8stGE4A
          stance: supports
          locator: CBDB:324287
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_s6_Dy3mE0kUZ8ICp_IOnu9
        subject_person_id: p_EKeKWW2myZz4rE9rrMpRQP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Mg9PgqsYuftinKZnQEScVa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WQtv4pqyZd7N6G6V8G-WBO
          claim_id: c_s6_Dy3mE0kUZ8ICp_IOnu9
          source_id: s_hyGDgWbazMBVGxB8stGE4A
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第三十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Mg9PgqsYuftinKZnQEScVa
        status: active
        display_name: 王友賢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用 | accepted |
| bio.summary | 王用，明人物。嘉靖三十八年進士，籍贯寧鄉，曾任義官。（中国历代人物传记资料库 CBDB 324287） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Mg9PgqsYuftinKZnQEScVa | 王友賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用（CBDB 324287）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324287&o=json)

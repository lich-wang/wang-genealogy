---
schema: wang-person/v1
id: p_p52NPJ3XEL4EMz8XmEty7C
status: active
merged_into: null
display_name: 王瀾
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dEQ22oAAMc1Bw7uLCcri54
        subject_person_id: p_p52NPJ3XEL4EMz8XmEty7C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gDNPRUspG4MEWGnKTjagjS
          claim_id: c_dEQ22oAAMc1Bw7uLCcri54
          source_id: s_QfxaMSXNDnsAA16j7kZEA5
          stance: supports
          locator: CBDB:214607
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（214607）
          source: &a1
            id: s_QfxaMSXNDnsAA16j7kZEA5
            source_type: api_record
            title: 中国历代人物传记资料库：王瀾（CBDB 214607）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214607&o=json
            external_identifier: CBDB:214607
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.161Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AJJ4zgumtQMKu9FBvX9Yk7
        subject_person_id: p_p52NPJ3XEL4EMz8XmEty7C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王瀾，明人物。萬曆二年進士，籍贯鄜州，入仕貢生: 歲貢、常貢、挨貢。（中国历代人物传记资料库 CBDB 214607）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_APgeWvOKcx21YN0v4h23CY
          claim_id: c_AJJ4zgumtQMKu9FBvX9Yk7
          source_id: s_QfxaMSXNDnsAA16j7kZEA5
          stance: supports
          locator: CBDB:214607
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ko2ZDv8EvnKExXLwp7Rnsr
        subject_person_id: p_p52NPJ3XEL4EMz8XmEty7C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RRZuE21H2Z9728UGo3kUPT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6y_a_lisH3tkyWQqjzEjXh
          claim_id: c_ko2ZDv8EvnKExXLwp7Rnsr
          source_id: s_QfxaMSXNDnsAA16j7kZEA5
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百四十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RRZuE21H2Z9728UGo3kUPT
        status: active
        display_name: 王邦俊
        merged_into_person_id: null
    - claim:
        id: c_qkcXxYsU9t21gy6R6PQfUZ
        subject_person_id: p_p52NPJ3XEL4EMz8XmEty7C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FqhZ4oxaHvpQE9TXe9sD9L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__4SsACjO3Qiysw9c5juW1P
          claim_id: c_qkcXxYsU9t21gy6R6PQfUZ
          source_id: s_PgDmBrnh47gQ3kQu2NW13H
          stance: supports
          locator: CBDB：兄弟 王邦俊（206190）之父／母 王瀾
          quotation: null
          interpretation_note: 由兄弟关系推断：王邦秀 与 王邦俊 为同胞（CBDB 记「兄」），王邦俊 之父／母即 王邦秀 之父／母。
          source:
            id: s_PgDmBrnh47gQ3kQu2NW13H
            source_type: api_record
            title: 中国历代人物传记资料库：王邦秀（CBDB 214610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214610&o=json
            external_identifier: CBDB:214610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FqhZ4oxaHvpQE9TXe9sD9L
        status: active
        display_name: 王邦秀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瀾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瀾 | accepted |
| bio.summary | 王瀾，明人物。萬曆二年進士，籍贯鄜州，入仕貢生: 歲貢、常貢、挨貢。（中国历代人物传记资料库 CBDB 214607） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_RRZuE21H2Z9728UGo3kUPT | 王邦俊 | accepted |
| children | p_FqhZ4oxaHvpQE9TXe9sD9L | 王邦秀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邦秀（CBDB 214610）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214610&o=json)
- [中国历代人物传记资料库：王瀾（CBDB 214607）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214607&o=json)

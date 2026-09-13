---
schema: wang-person/v1
id: p_yUmfb8gXoKN4N3QFaPUdA1
status: active
merged_into: null
display_name: 王顯謨
cbdb_id: 71869
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WwesPeTT5g4FyBSN9ieQxV
        subject_person_id: p_yUmfb8gXoKN4N3QFaPUdA1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯謨（生于1838年），史料所见人物。本项目依据《中国历代人物传记资料库：王顯謨（CBDB 71869）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_DAxnZ7xgvJ3uIzW2KKBjRA
          claim_id: c_WwesPeTT5g4FyBSN9ieQxV
          source_id: s_nCU38qDZQWkHXsS9HSDCuH
          stance: supports
          locator: CBDB:71869
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_nCU38qDZQWkHXsS9HSDCuH
            source_type: api_record
            title: 中国历代人物传记资料库：王顯謨（CBDB 71869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71869&o=json
            external_identifier: CBDB:71869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2hxcqHmX3Y1zud6L65nBuS
        subject_person_id: p_yUmfb8gXoKN4N3QFaPUdA1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1838年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1838-01-01
            latest: 1838-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gYx5iLZktER3kxAqWnDvGJ
          claim_id: c_2hxcqHmX3Y1zud6L65nBuS
          source_id: s_nCU38qDZQWkHXsS9HSDCuH
          stance: supports
          locator: CBDB:71869
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1838
          source:
            id: s_nCU38qDZQWkHXsS9HSDCuH
            source_type: api_record
            title: 中国历代人物传记资料库：王顯謨（CBDB 71869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71869&o=json
            external_identifier: CBDB:71869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LHSWWU1GfeKwsuL152sMuM
        subject_person_id: p_yUmfb8gXoKN4N3QFaPUdA1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯謨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hjLenkYoiR7C3MPkPeVmC5
          claim_id: c_LHSWWU1GfeKwsuL152sMuM
          source_id: s_nCU38qDZQWkHXsS9HSDCuH
          stance: supports
          locator: CBDB:71869
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1838
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

# 王顯謨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王顯謨（生于1838年），史料所见人物。本项目依据《中国历代人物传记资料库：王顯謨（CBDB 71869）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1838年 | accepted |
| name.primary | 王顯謨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王顯謨（CBDB 71869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71869&o=json)

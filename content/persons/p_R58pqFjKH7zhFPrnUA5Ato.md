---
schema: wang-person/v1
id: p_R58pqFjKH7zhFPrnUA5Ato
status: active
merged_into: null
display_name: 王楷
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gRmDe7TKJkZNknhnzgm3FG
        subject_person_id: p_R58pqFjKH7zhFPrnUA5Ato
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EfaoeoXBbfhM37SAe9i1yr
          claim_id: c_gRmDe7TKJkZNknhnzgm3FG
          source_id: s_WTGySF1Gh9mhG6G21h1d2r
          stance: supports
          locator: CBDB:126753
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126753）
          source: &a1
            id: s_WTGySF1Gh9mhG6G21h1d2r
            source_type: api_record
            title: 中国历代人物传记资料库：王楷（CBDB 126753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126753&o=json
            external_identifier: CBDB:126753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.177Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KHgn8vG24RyWrZZXexBWkc
        subject_person_id: p_R58pqFjKH7zhFPrnUA5Ato
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7KWDXm9uuMFB5fKnYmYsCt
          claim_id: c_KHgn8vG24RyWrZZXexBWkc
          source_id: s_WTGySF1Gh9mhG6G21h1d2r
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mDCWnUXKbFUIW0AyD74MeW
        subject_person_id: p_4TKB9CF1Pcy4hP4NGvXiGk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R58pqFjKH7zhFPrnUA5Ato
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6aG-g_jwLQ06H7FzKHy5RU
          claim_id: c_mDCWnUXKbFUIW0AyD74MeW
          source_id: s_Hrb1yr3ZC2CAqEgJVv6zv4
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Hrb1yr3ZC2CAqEgJVv6zv4
            source_type: api_record
            title: 中国历代人物传记资料库：王淮（CBDB 320121）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320121&o=json
            external_identifier: CBDB:320121
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.048Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4TKB9CF1Pcy4hP4NGvXiGk
        status: active
        display_name: 王淮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Drxri5hZDZBSlbk1lKbyqL
        subject_person_id: p_6kY5sYCXypt3u98Ntpz45B
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_R58pqFjKH7zhFPrnUA5Ato
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b5e5wwe-v3lhJWZwJw-pRa
          claim_id: c_Drxri5hZDZBSlbk1lKbyqL
          source_id: s_zabaEGBW52SVHtkvWq5pNw
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zabaEGBW52SVHtkvWq5pNw
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 320120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320120&o=json
            external_identifier: CBDB:320120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.048Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6kY5sYCXypt3u98Ntpz45B
        status: active
        display_name: 王綸
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王楷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楷 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4TKB9CF1Pcy4hP4NGvXiGk | 王淮 | accepted |
| ancestors | p_6kY5sYCXypt3u98Ntpz45B | 王綸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淮（CBDB 320121）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320121&o=json)
- [中国历代人物传记资料库：王楷（CBDB 126753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126753&o=json)
- [中国历代人物传记资料库：王綸（CBDB 320120）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320120&o=json)

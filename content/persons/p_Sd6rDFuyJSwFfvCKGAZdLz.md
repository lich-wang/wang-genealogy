---
schema: wang-person/v1
id: p_Sd6rDFuyJSwFfvCKGAZdLz
status: active
merged_into: null
display_name: 王樂堯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K4aJtm5n71m2sZb7D1d4Q6
        subject_person_id: p_Sd6rDFuyJSwFfvCKGAZdLz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樂堯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d1oFma58odviTgq574rABL
          claim_id: c_K4aJtm5n71m2sZb7D1d4Q6
          source_id: s_mQk4kmqmivgV5B6TWUL9ti
          stance: supports
          locator: CBDB:638827
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638827）
          source: &a1
            id: s_mQk4kmqmivgV5B6TWUL9ti
            source_type: api_record
            title: 中国历代人物传记资料库：王樂堯（CBDB 638827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638827&o=json
            external_identifier: CBDB:638827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.758Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5fX2ZoBeZWVwRGJHFdY6Hh
        subject_person_id: p_Sd6rDFuyJSwFfvCKGAZdLz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王樂堯，清人物。籍贯東台，入仕貢生: 副貢，曾任主事。（中国历代人物传记资料库 CBDB 638827）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AQznv4E7GKEddGf3qVapat
          claim_id: c_5fX2ZoBeZWVwRGJHFdY6Hh
          source_id: s_mQk4kmqmivgV5B6TWUL9ti
          stance: supports
          locator: CBDB:638827
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
  descendants: []
  other: []
---

# 王樂堯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樂堯 | accepted |
| bio.summary | 王樂堯，清人物。籍贯東台，入仕貢生: 副貢，曾任主事。（中国历代人物传记资料库 CBDB 638827） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樂堯（CBDB 638827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638827&o=json)

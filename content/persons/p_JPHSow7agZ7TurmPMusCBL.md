---
schema: wang-person/v1
id: p_JPHSow7agZ7TurmPMusCBL
status: active
merged_into: null
display_name: 王文祿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hJL9J5tY4qTbTvhwyc7FSs
        subject_person_id: p_JPHSow7agZ7TurmPMusCBL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文祿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q2yy5s1YLVQZuQhahw7Q6y
          claim_id: c_hJL9J5tY4qTbTvhwyc7FSs
          source_id: s_CRaRX5HFCUddrZkve19NBt
          stance: supports
          locator: CBDB:126459
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126459）
          source: &a1
            id: s_CRaRX5HFCUddrZkve19NBt
            source_type: api_record
            title: 中国历代人物传记资料库：王文祿（CBDB 126459）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126459&o=json
            external_identifier: CBDB:126459
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.175Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RNzvLH3jBGdMsCaH8c3PUb
        subject_person_id: p_JPHSow7agZ7TurmPMusCBL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文祿，明人物。籍贯海鹽，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 126459）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__MgNdSRANvg5L4PqBY96uE
          claim_id: c_RNzvLH3jBGdMsCaH8c3PUb
          source_id: s_CRaRX5HFCUddrZkve19NBt
          stance: supports
          locator: CBDB:126459
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

# 王文祿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文祿 | accepted |
| bio.summary | 王文祿，明人物。籍贯海鹽，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 126459） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文祿（CBDB 126459）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126459&o=json)

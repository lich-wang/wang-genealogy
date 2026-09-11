---
schema: wang-person/v1
id: p_6RpXXEfXnGvAQXNQQcuQeh
status: active
merged_into: null
display_name: 孔传铎
cbdb_id: 56694
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fVXpO6aozEdm3uyWxw2P-o
        subject_person_id: p_6RpXXEfXnGvAQXNQQcuQeh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孔传铎（1673—1735），清人物。籍贯曲阜。（中国历代人物传记资料库 CBDB 56694）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WarmfDNG65kk9LZtYRLmoi
          claim_id: c_fVXpO6aozEdm3uyWxw2P-o
          source_id: s_GSo9CDnq9yN6jTEZhE1Y8t
          stance: supports
          locator: CBDB:56694
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_GSo9CDnq9yN6jTEZhE1Y8t
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：孔傳鐸（56694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56694&o=json
            external_identifier: CBDB:56694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KUSzM7vm3QLfCCBW5W6xXU
        subject_person_id: p_6RpXXEfXnGvAQXNQQcuQeh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孔传铎
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pGbvVXBmjeqxNnxUpoZYvp
          claim_id: c_KUSzM7vm3QLfCCBW5W6xXU
          source_id: s_K9LBHjQM9fJczwv6sy2kPP
          stance: supports
          locator: Q10944224
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_K9LBHjQM9fJczwv6sy2kPP
            source_type: api_record
            title: 维基数据：孔传铎（Q10944224）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10944224
            external_identifier: Q10944224
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%AD%94%E5%82%B3%E9%90%B8
        - id: cs_2vj5S2HN6jq9ByEdjNMmEr
          claim_id: c_KUSzM7vm3QLfCCBW5W6xXU
          source_id: s_GSo9CDnq9yN6jTEZhE1Y8t
          stance: supports
          locator: CBDB:56694
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_eNqWjTeeRvhY8JPed56p4v
        subject_person_id: p_6RpXXEfXnGvAQXNQQcuQeh
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_YbJtXntaA19PL7EU5mpmxE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rqnTjsccBY1HZyh1LsbEKB
          claim_id: c_eNqWjTeeRvhY8JPed56p4v
          source_id: s_UH3PSyxcBPQG7QE4uE1Xcn
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_UH3PSyxcBPQG7QE4uE1Xcn
            source_type: api_record
            title: 维基数据：王氏（Q13668765）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13668765
            external_identifier: Q13668765
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:29.703Z
            metadata_json: null
        - id: cs_HSBgACmKUQMB8AC8qcyT98
          claim_id: c_eNqWjTeeRvhY8JPed56p4v
          source_id: s_K9LBHjQM9fJczwv6sy2kPP
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_YbJtXntaA19PL7EU5mpmxE
        status: active
        display_name: 王氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 孔传铎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 孔传铎（1673—1735），清人物。籍贯曲阜。（中国历代人物传记资料库 CBDB 56694） | accepted |
| name.primary | 孔传铎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_YbJtXntaA19PL7EU5mpmxE | 王氏 | accepted |

## 外部来源

- [维基数据：孔传铎（Q10944224）](https://www.wikidata.org/wiki/Q10944224)
- [维基数据：王氏（Q13668765）](https://www.wikidata.org/wiki/Q13668765)
- [CBDB 中国历代人物传记资料库：孔傳鐸（56694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56694&o=json)

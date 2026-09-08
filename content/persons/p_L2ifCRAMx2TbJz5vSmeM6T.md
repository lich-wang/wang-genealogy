---
schema: wang-person/v1
id: p_L2ifCRAMx2TbJz5vSmeM6T
status: active
merged_into: null
display_name: 赵氏
cbdb_id: 38569
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c43sQEAP5d5k2m6MJRpHsE
        subject_person_id: p_L2ifCRAMx2TbJz5vSmeM6T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 赵氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_deEHMxBHQsJDGhwoD9KHPF
          claim_id: c_c43sQEAP5d5k2m6MJRpHsE
          source_id: s_pquE6piAMMVG6tzVZzsHtU
          stance: supports
          locator: Q45430725
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_pquE6piAMMVG6tzVZzsHtU
            source_type: api_record
            title: 维基数据：赵氏（Q45430725）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45430725
            external_identifier: Q45430725
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_uivqvtsv8SaNEJN4kSTCDx
          claim_id: c_c43sQEAP5d5k2m6MJRpHsE
          source_id: s_inp2TgyDeUUZJ8Zq2rkTe5
          stance: supports
          locator: CBDB:38569
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_inp2TgyDeUUZJ8Zq2rkTe5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：趙氏（38569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38569&o=json
            external_identifier: CBDB:38569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_gHvL8xjTNojYSVWv31e6Ay
        subject_person_id: p_4Hjde84UDSxNby7XrvDD1E
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_L2ifCRAMx2TbJz5vSmeM6T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GgWRMPH7aSkSAbYWxQ1ujP
          claim_id: c_gHvL8xjTNojYSVWv31e6Ay
          source_id: s_pquE6piAMMVG6tzVZzsHtU
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_i5PB6m3zDsMhr8nUmA2fMs
          claim_id: c_gHvL8xjTNojYSVWv31e6Ay
          source_id: s_vRaCPeuuKnxFV9tq7HyLW3
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_vRaCPeuuKnxFV9tq7HyLW3
            source_type: api_record
            title: 维基数据：王寂（Q45386119）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45386119
            external_identifier: Q45386119
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:10.721Z
            metadata_json: null
        - id: cs_4ooDcZ87cbacEjzKd678CM
          claim_id: c_gHvL8xjTNojYSVWv31e6Ay
          source_id: s_LYQVz212NDq8PUvaBty1BP
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_LYQVz212NDq8PUvaBty1BP
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王寂（17425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17425&o=json
            external_identifier: CBDB:17425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:10.884Z
            metadata_json: null
      object_person:
        id: p_4Hjde84UDSxNby7XrvDD1E
        status: active
        display_name: 王寂
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 赵氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 赵氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_4Hjde84UDSxNby7XrvDD1E | 王寂 | accepted |

## 外部来源

- [维基数据：王寂（Q45386119）](https://www.wikidata.org/wiki/Q45386119)
- [维基数据：赵氏（Q45430725）](https://www.wikidata.org/wiki/Q45430725)
- [CBDB 中国历代人物传记资料库：王寂（17425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17425&o=json)
- [CBDB 中国历代人物传记资料库：趙氏（38569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38569&o=json)

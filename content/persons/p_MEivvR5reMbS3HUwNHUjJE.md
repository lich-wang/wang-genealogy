---
schema: wang-person/v1
id: p_MEivvR5reMbS3HUwNHUjJE
status: active
merged_into: null
display_name: 王献臣
cbdb_id: 3954
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Moim64eRjR6QHPKyaBaGk2
        subject_person_id: p_MEivvR5reMbS3HUwNHUjJE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王献臣
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LAv8wi9XMqVLHVg9TmHA5y
          claim_id: c_Moim64eRjR6QHPKyaBaGk2
          source_id: s_eoJfK1zjX7DSvUpaC2DMRp
          stance: supports
          locator: Q45362954
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_eoJfK1zjX7DSvUpaC2DMRp
            source_type: api_record
            title: 维基数据：王献臣（Q45362954）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45362954
            external_identifier: Q45362954
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_DasyAB2tvfmT2zAjBFaMXp
          claim_id: c_Moim64eRjR6QHPKyaBaGk2
          source_id: s_jFw4v3QPEetm4ywQfww42i
          stance: supports
          locator: CBDB:3954
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_jFw4v3QPEetm4ywQfww42i
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王獻臣（3954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3954&o=json
            external_identifier: CBDB:3954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W252S1jPNMAG852UYKBBsC
        subject_person_id: p_MEivvR5reMbS3HUwNHUjJE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Song dynasty person (CBDB = 3954)
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zb5jSAjVkJgQ5ftMkukF8P
          claim_id: c_W252S1jPNMAG852UYKBBsC
          source_id: s_eoJfK1zjX7DSvUpaC2DMRp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dxCj9VLAx4WGU4Ccy7bwQC
        subject_person_id: p_X1JHNSNn6VXFCTFVn6HXuA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MEivvR5reMbS3HUwNHUjJE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PB2kfMqTbXSZR64Co63fFw
          claim_id: c_dxCj9VLAx4WGU4Ccy7bwQC
          source_id: s_eoJfK1zjX7DSvUpaC2DMRp
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_ogLKGYwjCyFKcYQ5yNJ7uc
          claim_id: c_dxCj9VLAx4WGU4Ccy7bwQC
          source_id: s_GDCh7KN73yY43YCNHFB3qh
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_GDCh7KN73yY43YCNHFB3qh
            source_type: api_record
            title: 维基数据：王涣（Q45362965）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45362965
            external_identifier: Q45362965
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:12.061Z
            metadata_json: null
        - id: cs_gvmxc3ncNvddr8E3GA77Zo
          claim_id: c_dxCj9VLAx4WGU4Ccy7bwQC
          source_id: s_VfErtMxHoQqfgD66dDrBwg
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_VfErtMxHoQqfgD66dDrBwg
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王渙（3957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3957&o=json
            external_identifier: CBDB:3957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:12.214Z
            metadata_json: null
      object_person:
        id: p_X1JHNSNn6VXFCTFVn6HXuA
        status: active
        display_name: 王涣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王献臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王献臣 | accepted |
| bio.summary | Song dynasty person (CBDB = 3954) | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_X1JHNSNn6VXFCTFVn6HXuA | 王涣 | accepted |

## 外部来源

- [维基数据：王涣（Q45362965）](https://www.wikidata.org/wiki/Q45362965)
- [维基数据：王献臣（Q45362954）](https://www.wikidata.org/wiki/Q45362954)
- [CBDB 中国历代人物传记资料库：王渙（3957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3957&o=json)
- [CBDB 中国历代人物传记资料库：王獻臣（3954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3954&o=json)

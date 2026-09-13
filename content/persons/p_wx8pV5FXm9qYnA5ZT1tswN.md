---
schema: wang-person/v1
id: p_wx8pV5FXm9qYnA5ZT1tswN
status: active
merged_into: null
display_name: 葛氏
cbdb_id: 272146
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HVUaerb3h3tVUkrx4xHX9O
        subject_person_id: p_wx8pV5FXm9qYnA5ZT1tswN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 葛氏，明人物。弘治十五年進士。（中国历代人物传记资料库 CBDB 272146）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_14HbrtzDmsxi0-zDEZm9d-
          claim_id: c_HVUaerb3h3tVUkrx4xHX9O
          source_id: s_4MaWeKY4dNjyyMrfWPZQkB
          stance: supports
          locator: CBDB:272146
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4MaWeKY4dNjyyMrfWPZQkB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：葛氏（272146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272146&o=json
            external_identifier: CBDB:272146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:56.528Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NnQf5wPUB2YMwYb48ZF82i
        subject_person_id: p_wx8pV5FXm9qYnA5ZT1tswN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 葛氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Lz3Espf5aPLkYteGyubGTY
          claim_id: c_NnQf5wPUB2YMwYb48ZF82i
          source_id: s_8ffxLtmpx4Et5dN5xD2CQC
          stance: supports
          locator: Q65880296
          quotation: null
          interpretation_note: null
          source:
            id: s_8ffxLtmpx4Et5dN5xD2CQC
            source_type: api_record
            title: 维基数据：葛氏（Q65880296）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65880296
            external_identifier: Q65880296
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:56.366Z
            metadata_json: null
        - id: cs_xDA7TKfRMjDgkBc5rXv3ZZ
          claim_id: c_NnQf5wPUB2YMwYb48ZF82i
          source_id: s_4MaWeKY4dNjyyMrfWPZQkB
          stance: supports
          locator: Q65880296
          quotation: null
          interpretation_note: null
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
        id: c_CvDHo7vG3R2J4BtHMpfip5
        subject_person_id: p_YFXpD1H4mYzD71g98dxSNt
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_wx8pV5FXm9qYnA5ZT1tswN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XreamqfkEE5ErRg6vRsMPY
          claim_id: c_CvDHo7vG3R2J4BtHMpfip5
          source_id: s_8ffxLtmpx4Et5dN5xD2CQC
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_8ffxLtmpx4Et5dN5xD2CQC
            source_type: api_record
            title: 维基数据：葛氏（Q65880296）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65880296
            external_identifier: Q65880296
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:56.366Z
            metadata_json: null
        - id: cs_kJBPm69id1MXeoJSw2spSb
          claim_id: c_CvDHo7vG3R2J4BtHMpfip5
          source_id: s_7hdvw8f5c7MGNRVN14ZCfA
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：弘治十五年進士登科錄:一卷
          source:
            id: s_7hdvw8f5c7MGNRVN14ZCfA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王爌（68280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68280&o=json
            external_identifier: CBDB:68280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:40.894Z
            metadata_json: null
        - id: cs_w4XxDRzMH2ewMU1LePiTh4
          claim_id: c_CvDHo7vG3R2J4BtHMpfip5
          source_id: s_nMm7HFiky9P7HNhESGnnNx
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_nMm7HFiky9P7HNhESGnnNx
            source_type: api_record
            title: 维基数据：王爌（Q15926463）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15926463
            external_identifier: Q15926463
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:30.744Z
            metadata_json: null
      object_person:
        id: p_YFXpD1H4mYzD71g98dxSNt
        status: active
        display_name: 王爌
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 葛氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 葛氏，明人物。弘治十五年進士。（中国历代人物传记资料库 CBDB 272146） | accepted |
| name.primary | 葛氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_YFXpD1H4mYzD71g98dxSNt | 王爌 | accepted |

## 外部来源

- [维基数据：葛氏（Q65880296）](https://www.wikidata.org/wiki/Q65880296)
- [维基数据：王爌（Q15926463）](https://www.wikidata.org/wiki/Q15926463)
- [CBDB 中国历代人物传记资料库：葛氏（272146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272146&o=json)
- [CBDB 中国历代人物传记资料库：王爌（68280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68280&o=json)

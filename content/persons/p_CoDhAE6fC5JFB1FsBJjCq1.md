---
schema: wang-person/v1
id: p_CoDhAE6fC5JFB1FsBJjCq1
status: active
merged_into: null
display_name: 邢氏
cbdb_id: 220265
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VXaPTilcGqmyR5M3Vb_qgz
        subject_person_id: p_CoDhAE6fC5JFB1FsBJjCq1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 邢氏，明人物。萬曆八年進士。（中国历代人物传记资料库 CBDB 220265）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VR8Lg9FDurg49ugoD4uLtY
          claim_id: c_VXaPTilcGqmyR5M3Vb_qgz
          source_id: s_Zg27aMJEwQNPkD4Bj7dRWr
          stance: supports
          locator: CBDB:220265
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Zg27aMJEwQNPkD4Bj7dRWr
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：邢氏（220265）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220265&o=json
            external_identifier: CBDB:220265
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sFukwkEa1EWYKoTfwBN9Hp
        subject_person_id: p_CoDhAE6fC5JFB1FsBJjCq1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 邢氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aSgJqTHmC6GM2oMzi3LpFi
          claim_id: c_sFukwkEa1EWYKoTfwBN9Hp
          source_id: s_wM3Ko6rz6aq7Jxb6fMnjDL
          stance: supports
          locator: Q65823254
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_wM3Ko6rz6aq7Jxb6fMnjDL
            source_type: api_record
            title: 维基数据：邢氏（Q65823254）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65823254
            external_identifier: Q65823254
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_bCx5WuMvS1vBeKn659EdA5
          claim_id: c_sFukwkEa1EWYKoTfwBN9Hp
          source_id: s_Zg27aMJEwQNPkD4Bj7dRWr
          stance: supports
          locator: CBDB:220265
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
        id: c_2RDr867GXnM84rCZM27YC9
        subject_person_id: p_CoDhAE6fC5JFB1FsBJjCq1
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_UCuWmdu88wkXMEGK9geKmL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rQS7S38PQQ5aCkYGFAmAF4
          claim_id: c_2RDr867GXnM84rCZM27YC9
          source_id: s_zLJ9Hfx1NHziz4NGzxh4Dr
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_zLJ9Hfx1NHziz4NGzxh4Dr
            source_type: api_record
            title: 维基数据：王象蒙（Q45647401）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45647401
            external_identifier: Q45647401
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:02.160Z
            metadata_json: null
        - id: cs_WC1UGdDpFEgwqhcBHrFQca
          claim_id: c_2RDr867GXnM84rCZM27YC9
          source_id: s_wM3Ko6rz6aq7Jxb6fMnjDL
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_7qxBSe6zLgzKveAXD2Cbce
          claim_id: c_2RDr867GXnM84rCZM27YC9
          source_id: s_zcmyoLPxLotZ84tb26zKRH
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：萬曆八年進士登科錄:一卷
          source:
            id: s_zcmyoLPxLotZ84tb26zKRH
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王象蒙（206595）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206595&o=json
            external_identifier: CBDB:206595
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:02.345Z
            metadata_json: null
      object_person:
        id: p_UCuWmdu88wkXMEGK9geKmL
        status: active
        display_name: 王象蒙
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 邢氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 邢氏，明人物。萬曆八年進士。（中国历代人物传记资料库 CBDB 220265） | accepted |
| name.primary | 邢氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_UCuWmdu88wkXMEGK9geKmL | 王象蒙 | accepted |

## 外部来源

- [维基数据：王象蒙（Q45647401）](https://www.wikidata.org/wiki/Q45647401)
- [维基数据：邢氏（Q65823254）](https://www.wikidata.org/wiki/Q65823254)
- [CBDB 中国历代人物传记资料库：王象蒙（206595）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206595&o=json)
- [CBDB 中国历代人物传记资料库：邢氏（220265）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220265&o=json)

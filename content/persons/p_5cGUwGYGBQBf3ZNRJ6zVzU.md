---
schema: wang-person/v1
id: p_5cGUwGYGBQBf3ZNRJ6zVzU
status: active
merged_into: null
display_name: 刘氏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_l5YblI3TZfhAccv7lMqlaC
        subject_person_id: p_5cGUwGYGBQBf3ZNRJ6zVzU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 刘氏，明人物。中国历代人物传记资料库（CBDB）以人物编号 246752 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rC8R12vHe9J3aO4omo1psB
          claim_id: c_l5YblI3TZfhAccv7lMqlaC
          source_id: s_QvmYayo4YHyQ3r7jSjrV7L
          stance: supports
          locator: CBDB:246752
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QvmYayo4YHyQ3r7jSjrV7L
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：劉氏（246752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246752&o=json
            external_identifier: CBDB:246752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:55.531Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KVgztLdNcsEHboZ4gqAsPv
        subject_person_id: p_5cGUwGYGBQBf3ZNRJ6zVzU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 刘氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Sp9XQNFA3dNwciEh3V7Ysz
          claim_id: c_KVgztLdNcsEHboZ4gqAsPv
          source_id: s_QvmYayo4YHyQ3r7jSjrV7L
          stance: supports
          locator: Q65850500
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_iubKhiojK2kr3cx3ZhWzV2
          claim_id: c_KVgztLdNcsEHboZ4gqAsPv
          source_id: s_5LEHU7YNYevgC6CZBG2MqH
          stance: supports
          locator: Q65850500
          quotation: null
          interpretation_note: null
          source:
            id: s_5LEHU7YNYevgC6CZBG2MqH
            source_type: api_record
            title: 维基数据：刘氏（Q65850500）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65850500
            external_identifier: Q65850500
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:55.359Z
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
        id: c_UkQKtDJbQAaAaLVZT6K3Sm
        subject_person_id: p_5cGUwGYGBQBf3ZNRJ6zVzU
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_7koQzcggkeDLYupbQwieGE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BL3nefUyjpG9gGZGtPvQX8
          claim_id: c_UkQKtDJbQAaAaLVZT6K3Sm
          source_id: s_5LEHU7YNYevgC6CZBG2MqH
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_5LEHU7YNYevgC6CZBG2MqH
            source_type: api_record
            title: 维基数据：刘氏（Q65850500）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65850500
            external_identifier: Q65850500
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:55.359Z
            metadata_json: null
        - id: cs_QT4r61w3jYWDko8zVGcuJN
          claim_id: c_UkQKtDJbQAaAaLVZT6K3Sm
          source_id: s_cV4wGFvD6QSZMyNzhdHSgy
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：成化八年進士登科錄:一卷
          source:
            id: s_cV4wGFvD6QSZMyNzhdHSgy
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王璟（67987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67987&o=json
            external_identifier: CBDB:67987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:38.720Z
            metadata_json: null
        - id: cs_xfV7db2F8C4DF97Grcf3BY
          claim_id: c_UkQKtDJbQAaAaLVZT6K3Sm
          source_id: s_xsPTYDtJ99pFyKQsn3EBUa
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_xsPTYDtJ99pFyKQsn3EBUa
            source_type: api_record
            title: 维基数据：王璟（Q15929306）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15929306
            external_identifier: Q15929306
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:35.752Z
            metadata_json: null
      object_person:
        id: p_7koQzcggkeDLYupbQwieGE
        status: active
        display_name: 王璟
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 刘氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 刘氏，明人物。中国历代人物传记资料库（CBDB）以人物编号 246752 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 刘氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_7koQzcggkeDLYupbQwieGE | 王璟 | accepted |

## 外部来源

- [维基数据：刘氏（Q65850500）](https://www.wikidata.org/wiki/Q65850500)
- [维基数据：王璟（Q15929306）](https://www.wikidata.org/wiki/Q15929306)
- [CBDB 中国历代人物传记资料库：劉氏（246752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246752&o=json)
- [CBDB 中国历代人物传记资料库：王璟（67987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67987&o=json)

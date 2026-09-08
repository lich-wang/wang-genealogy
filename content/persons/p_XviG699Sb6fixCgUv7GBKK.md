---
schema: wang-person/v1
id: p_XviG699Sb6fixCgUv7GBKK
status: active
merged_into: null
display_name: 霍氏
cbdb_id: 333597
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QjU5dTsUBp3KPiFLnW8TLo
        subject_person_id: p_XviG699Sb6fixCgUv7GBKK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 霍氏，王家屏妻。维基数据以独立条目 Q65860927 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_PbW5eeEkRGBewizw7GUoLD
          claim_id: c_QjU5dTsUBp3KPiFLnW8TLo
          source_id: s_1qw6oPd83gXSfUuu5BPBbe
          stance: supports
          locator: Q65860927
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_1qw6oPd83gXSfUuu5BPBbe
            source_type: api_record
            title: 维基数据：霍氏（Q65860927）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65860927
            external_identifier: Q65860927
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:55.359Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uUK9xhNBu1J9iqaeZZxUvR
        subject_person_id: p_XviG699Sb6fixCgUv7GBKK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 霍氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3nkDnKoBQXukbpN6XM64a2
          claim_id: c_uUK9xhNBu1J9iqaeZZxUvR
          source_id: s_1qw6oPd83gXSfUuu5BPBbe
          stance: supports
          locator: Q65860927
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_DjHZgsG5CB5iLg9V63qtgY
          claim_id: c_uUK9xhNBu1J9iqaeZZxUvR
          source_id: s_sFCsMMu4JKu5vJyBJtq55s
          stance: supports
          locator: Q65860927
          quotation: null
          interpretation_note: null
          source:
            id: s_sFCsMMu4JKu5vJyBJtq55s
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：霍氏（333597）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333597&o=json
            external_identifier: CBDB:333597
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:55.532Z
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
        id: c_rTy2midZSG1T6qhCcRaxxS
        subject_person_id: p_XviG699Sb6fixCgUv7GBKK
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_bcrM1JDUkTLmV6rQDefNJN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AtStEBwxu261Ec7FTnBJFD
          claim_id: c_rTy2midZSG1T6qhCcRaxxS
          source_id: s_1qw6oPd83gXSfUuu5BPBbe
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_1qw6oPd83gXSfUuu5BPBbe
            source_type: api_record
            title: 维基数据：霍氏（Q65860927）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65860927
            external_identifier: Q65860927
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:55.359Z
            metadata_json: null
        - id: cs_Up688P3v559AuJf1XFRbvw
          claim_id: c_rTy2midZSG1T6qhCcRaxxS
          source_id: s_KpdKQDm85BhFx3TLa2zEy4
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_KpdKQDm85BhFx3TLa2zEy4
            source_type: api_record
            title: 维基数据：王家屏（Q15926237）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15926237
            external_identifier: Q15926237
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:30.744Z
            metadata_json: null
        - id: cs_tTy5u7S8LzUHw5m5JrQD46
          claim_id: c_rTy2midZSG1T6qhCcRaxxS
          source_id: s_1SuhmwcxCdPEQUYJoHxhF8
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：隆慶二年進士登科錄:一卷
          source:
            id: s_1SuhmwcxCdPEQUYJoHxhF8
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王家屛（126627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126627&o=json
            external_identifier: CBDB:126627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:39.324Z
            metadata_json: null
      object_person:
        id: p_bcrM1JDUkTLmV6rQDefNJN
        status: active
        display_name: 王家屏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 霍氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 霍氏，王家屏妻。维基数据以独立条目 Q65860927 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 霍氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_bcrM1JDUkTLmV6rQDefNJN | 王家屏 | accepted |

## 外部来源

- [维基数据：霍氏（Q65860927）](https://www.wikidata.org/wiki/Q65860927)
- [维基数据：王家屏（Q15926237）](https://www.wikidata.org/wiki/Q15926237)
- [CBDB 中国历代人物传记资料库：霍氏（333597）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333597&o=json)
- [CBDB 中国历代人物传记资料库：王家屛（126627）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126627&o=json)

---
schema: wang-person/v1
id: p_3YfGj4is8xidR3bZEoJwJr
status: active
merged_into: null
display_name: 薛氏
cbdb_id: 154134
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_upq0yBTP9dCiYk7k9DdBPL
        subject_person_id: p_3YfGj4is8xidR3bZEoJwJr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 薛氏，王鴻妻。维基数据以独立条目 Q65805409 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_plgbi1bes-3edVUJAU0Pyz
          claim_id: c_upq0yBTP9dCiYk7k9DdBPL
          source_id: s_f96eebEACDuDWkfC2x25g9
          stance: supports
          locator: Q65805409
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_f96eebEACDuDWkfC2x25g9
            source_type: api_record
            title: 维基数据：薛氏（Q65805409）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65805409
            external_identifier: Q65805409
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:43.809Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MT3FNkgYyTPs4xvTZ8YTgx
        subject_person_id: p_3YfGj4is8xidR3bZEoJwJr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 薛氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_G13fiAXreWdxNU8H8zuHvY
          claim_id: c_MT3FNkgYyTPs4xvTZ8YTgx
          source_id: s_9NPQCBuy9V2zpzyMF3bN9G
          stance: supports
          locator: Q65805409
          quotation: null
          interpretation_note: null
          source:
            id: s_9NPQCBuy9V2zpzyMF3bN9G
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：薛氏（154134）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154134&o=json
            external_identifier: CBDB:154134
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:43.983Z
            metadata_json: null
        - id: cs_iAj2HeNu2JKVBqLm14kzRW
          claim_id: c_MT3FNkgYyTPs4xvTZ8YTgx
          source_id: s_f96eebEACDuDWkfC2x25g9
          stance: supports
          locator: Q65805409
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
        id: c_8VXYnsyQg9uC1s6RxKKHT4
        subject_person_id: p_3YfGj4is8xidR3bZEoJwJr
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Bj8bFyazic2NrpdNesGfKg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_rvpL83gV1yHuVcXssAECrU
          claim_id: c_8VXYnsyQg9uC1s6RxKKHT4
          source_id: s_842fPHTiuXebkgrsSQy6Wc
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_842fPHTiuXebkgrsSQy6Wc
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鴻（140992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140992&o=json
            external_identifier: CBDB:140992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:31.350Z
            metadata_json: null
        - id: cs_uyAFCZwEArvmSfAE5ZRkBo
          claim_id: c_8VXYnsyQg9uC1s6RxKKHT4
          source_id: s_oEZhBpmPhCMLgvgFWpzFVy
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_oEZhBpmPhCMLgvgFWpzFVy
            source_type: api_record
            title: 维基数据：王鸿（Q45507766）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45507766
            external_identifier: Q45507766
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:31.027Z
            metadata_json: null
        - id: cs_cHrGh8NV96fmrj7byM1A3a
          claim_id: c_8VXYnsyQg9uC1s6RxKKHT4
          source_id: s_f96eebEACDuDWkfC2x25g9
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_f96eebEACDuDWkfC2x25g9
            source_type: api_record
            title: 维基数据：薛氏（Q65805409）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65805409
            external_identifier: Q65805409
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:43.809Z
            metadata_json: null
      object_person:
        id: p_Bj8bFyazic2NrpdNesGfKg
        status: active
        display_name: 王鸿
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 薛氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 薛氏，王鴻妻。维基数据以独立条目 Q65805409 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 薛氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Bj8bFyazic2NrpdNesGfKg | 王鸿 | accepted |

## 外部来源

- [维基数据：王鸿（Q45507766）](https://www.wikidata.org/wiki/Q45507766)
- [维基数据：薛氏（Q65805409）](https://www.wikidata.org/wiki/Q65805409)
- [CBDB 中国历代人物传记资料库：王鴻（140992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140992&o=json)
- [CBDB 中国历代人物传记资料库：薛氏（154134）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154134&o=json)

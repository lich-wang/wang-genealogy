---
schema: wang-person/v1
id: p_J2VKD1dU6tCXowCHagNLp8
status: active
merged_into: null
display_name: 陈氏
cbdb_id: 288235
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BYavutTGEKxKtZtl1XzDjA
        subject_person_id: p_J2VKD1dU6tCXowCHagNLp8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陈氏，王正思妻。维基数据以独立条目 Q65812299 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs__lTek8wTZabgUqDpVeogzd
          claim_id: c_BYavutTGEKxKtZtl1XzDjA
          source_id: s_JiqaqGzZJtQT8Loteqo9xa
          stance: supports
          locator: Q65812299
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_JiqaqGzZJtQT8Loteqo9xa
            source_type: api_record
            title: 维基数据：陈氏（Q65812299）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65812299
            external_identifier: Q65812299
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:32.932Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_VrDMaL6xgxRAdhi5q1F3pW
        subject_person_id: p_J2VKD1dU6tCXowCHagNLp8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陈氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fiN4bEU26TnizveaFyEarD
          claim_id: c_VrDMaL6xgxRAdhi5q1F3pW
          source_id: s_cNCEyU5UGc24MjGBbr8Vy9
          stance: supports
          locator: Q65812299
          quotation: null
          interpretation_note: null
          source:
            id: s_cNCEyU5UGc24MjGBbr8Vy9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：陳氏（288235）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288235&o=json
            external_identifier: CBDB:288235
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:25:33.085Z
            metadata_json: null
        - id: cs_zed7HrLwhoekJ5mqKKRHPM
          claim_id: c_VrDMaL6xgxRAdhi5q1F3pW
          source_id: s_JiqaqGzZJtQT8Loteqo9xa
          stance: supports
          locator: Q65812299
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
        id: c_AVsDDNzMoAry1XjEjboakJ
        subject_person_id: p_J2VKD1dU6tCXowCHagNLp8
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_qfyAqTA3PGUUXcgAsCUJEh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_Cv77EufLg2qmtxBM5mB2L1
          claim_id: c_AVsDDNzMoAry1XjEjboakJ
          source_id: s_KJHBKoaT55PZNcFJGfSbn2
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_KJHBKoaT55PZNcFJGfSbn2
            source_type: api_record
            title: 维基数据：王正思（Q16077354）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077354
            external_identifier: Q16077354
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:10.844Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%AD%A3%E6%80%9D
        - id: cs_tyUbjeq6gCgE2A99BNbCK2
          claim_id: c_AVsDDNzMoAry1XjEjboakJ
          source_id: s_ciu1UrQeyrub6PGojXTZRW
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖八年進士登科錄:一卷
          source:
            id: s_ciu1UrQeyrub6PGojXTZRW
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王正思（202442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202442&o=json
            external_identifier: CBDB:202442
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:11.006Z
            metadata_json: null
        - id: cs_NfGNCDPTNdX7AadqqgLDgA
          claim_id: c_AVsDDNzMoAry1XjEjboakJ
          source_id: s_JiqaqGzZJtQT8Loteqo9xa
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_JiqaqGzZJtQT8Loteqo9xa
            source_type: api_record
            title: 维基数据：陈氏（Q65812299）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65812299
            external_identifier: Q65812299
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:32.932Z
            metadata_json: null
        - id: cs_NRGwjQgv6ddPFUMUDDMdEE
          claim_id: c_AVsDDNzMoAry1XjEjboakJ
          source_id: s_cNCEyU5UGc24MjGBbr8Vy9
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖八年進士登科錄:一卷
          source:
            id: s_cNCEyU5UGc24MjGBbr8Vy9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：陳氏（288235）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288235&o=json
            external_identifier: CBDB:288235
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:25:33.085Z
            metadata_json: null
      object_person:
        id: p_qfyAqTA3PGUUXcgAsCUJEh
        status: active
        display_name: 王正思
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陈氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陈氏，王正思妻。维基数据以独立条目 Q65812299 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 陈氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_qfyAqTA3PGUUXcgAsCUJEh | 王正思 | accepted |

## 外部来源

- [维基数据：陈氏（Q65812299）](https://www.wikidata.org/wiki/Q65812299)
- [维基数据：王正思（Q16077354）](https://www.wikidata.org/wiki/Q16077354)
- [CBDB 中国历代人物传记资料库：陳氏（288235）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288235&o=json)
- [CBDB 中国历代人物传记资料库：王正思（202442）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202442&o=json)

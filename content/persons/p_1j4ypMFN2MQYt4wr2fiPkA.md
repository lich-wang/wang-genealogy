---
schema: wang-person/v1
id: p_1j4ypMFN2MQYt4wr2fiPkA
status: active
merged_into: null
display_name: 张氏
cbdb_id: 222288
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V3qFeYXJ1cKaDRAMvG8kTv
        subject_person_id: p_1j4ypMFN2MQYt4wr2fiPkA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 张氏，王佐妻。维基数据以独立条目 Q65825389 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_60kI0lKfR0FPSrgHpwig3e
          claim_id: c_V3qFeYXJ1cKaDRAMvG8kTv
          source_id: s_3yjNTrG6eYRgWCTuPgFjdd
          stance: supports
          locator: Q65825389
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_3yjNTrG6eYRgWCTuPgFjdd
            source_type: api_record
            title: 维基数据：张氏（Q65825389）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65825389
            external_identifier: Q65825389
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:53.553Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_95yNpMAvC4DhJrZ65tWeB9
        subject_person_id: p_1j4ypMFN2MQYt4wr2fiPkA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 张氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2U8j6Y78NKya18h4WbR64g
          claim_id: c_95yNpMAvC4DhJrZ65tWeB9
          source_id: s_3yjNTrG6eYRgWCTuPgFjdd
          stance: supports
          locator: Q65825389
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_EgA43K25xaNSVjPUoGM7XR
          claim_id: c_95yNpMAvC4DhJrZ65tWeB9
          source_id: s_C9JU7X7zMz4c91NH2W4pod
          stance: supports
          locator: Q65825389
          quotation: null
          interpretation_note: null
          source:
            id: s_C9JU7X7zMz4c91NH2W4pod
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：張氏（222288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222288&o=json
            external_identifier: CBDB:222288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:53.698Z
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
        id: c_BiTzNP9PAzbzUkGcPiiBai
        subject_person_id: p_1j4ypMFN2MQYt4wr2fiPkA
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_bZ12YW1VvZ8wACEDC3JXA6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2ZbnHq4H3BZ8XzFAhjiPHt
          claim_id: c_BiTzNP9PAzbzUkGcPiiBai
          source_id: s_L4BeNb9rMxrQA4zmr4EXA2
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：萬曆十一年進士登科錄:一卷
          source:
            id: s_L4BeNb9rMxrQA4zmr4EXA2
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佐（67281）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67281&o=json
            external_identifier: CBDB:67281
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:38.152Z
            metadata_json: null
        - id: cs_AytawyMFCaGoE332ZQZbmQ
          claim_id: c_BiTzNP9PAzbzUkGcPiiBai
          source_id: s_1qJBUqsxpfhkPoPLWcdh8r
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_1qJBUqsxpfhkPoPLWcdh8r
            source_type: api_record
            title: 维基数据：王佐（Q15928723）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15928723
            external_identifier: Q15928723
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:33.776Z
            metadata_json: null
        - id: cs_GLtP5ywUrkt2oaxrvannPL
          claim_id: c_BiTzNP9PAzbzUkGcPiiBai
          source_id: s_3yjNTrG6eYRgWCTuPgFjdd
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_3yjNTrG6eYRgWCTuPgFjdd
            source_type: api_record
            title: 维基数据：张氏（Q65825389）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65825389
            external_identifier: Q65825389
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:53.553Z
            metadata_json: null
      object_person:
        id: p_bZ12YW1VvZ8wACEDC3JXA6
        status: active
        display_name: 王佐
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 张氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 张氏，王佐妻。维基数据以独立条目 Q65825389 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 张氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_bZ12YW1VvZ8wACEDC3JXA6 | 王佐 | accepted |

## 外部来源

- [维基数据：王佐（Q15928723）](https://www.wikidata.org/wiki/Q15928723)
- [维基数据：张氏（Q65825389）](https://www.wikidata.org/wiki/Q65825389)
- [CBDB 中国历代人物传记资料库：王佐（67281）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67281&o=json)
- [CBDB 中国历代人物传记资料库：張氏（222288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222288&o=json)

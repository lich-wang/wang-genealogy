---
schema: wang-person/v1
id: p_T3HfvKJwe8oNYNwYQCppo7
status: active
merged_into: null
display_name: 王广心
cbdb_id: 61089
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tgf61qsi894PBDVxG1NdPG
        subject_person_id: p_T3HfvKJwe8oNYNwYQCppo7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王广心（生于1610年），清人物。CBDB 记录其籍贯记录为華亭，入仕记录为科舉: 進士(籠統)，曾任行人司行人、巡漕御史。中国历代人物传记资料库（CBDB）以人物编号 61089 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_driYA1fBwZZLhQx7Gxt7fE
          claim_id: c_tgf61qsi894PBDVxG1NdPG
          source_id: s_FmaGCBtNfD2X2dM8NTgkHk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_FmaGCBtNfD2X2dM8NTgkHk
            source_type: api_record
            title: 维基数据：王广心（Q16077638）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077638
            external_identifier: Q16077638
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:46.107Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%A3%E5%BF%83
        - id: cs_2bp_1nkJ3n4p5Mn8j5gFgD
          claim_id: c_tgf61qsi894PBDVxG1NdPG
          source_id: s_CZqm6cxQHmUQrEHsewB4id
          stance: supports
          locator: CBDB:61089
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_CZqm6cxQHmUQrEHsewB4id
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王廣心（61089）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61089&o=json
            external_identifier: CBDB:61089
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:46.272Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_TQxGESJGXJRLN3ewkeu7QB
        subject_person_id: p_T3HfvKJwe8oNYNwYQCppo7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1610年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1610-01-01
            latest: 1610-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1dUMEtuJ73PM4LT5Z1CJVc
          claim_id: c_TQxGESJGXJRLN3ewkeu7QB
          source_id: s_FmaGCBtNfD2X2dM8NTgkHk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_FmaGCBtNfD2X2dM8NTgkHk
            source_type: api_record
            title: 维基数据：王广心（Q16077638）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077638
            external_identifier: Q16077638
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:46.107Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%A3%E5%BF%83
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ARgLofacWioGCq5qYyDVTc
        subject_person_id: p_T3HfvKJwe8oNYNwYQCppo7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王广心
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ha2Xwyufa4vhnYF5Byi9n2
          claim_id: c_ARgLofacWioGCq5qYyDVTc
          source_id: s_CZqm6cxQHmUQrEHsewB4id
          stance: supports
          locator: Q16077638
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_pog6kJ3vXqjTyxdvo5FCCv
          claim_id: c_ARgLofacWioGCq5qYyDVTc
          source_id: s_FmaGCBtNfD2X2dM8NTgkHk
          stance: supports
          locator: Q16077638
          quotation: null
          interpretation_note: null
          source:
            id: s_FmaGCBtNfD2X2dM8NTgkHk
            source_type: api_record
            title: 维基数据：王广心（Q16077638）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077638
            external_identifier: Q16077638
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:46.107Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%A3%E5%BF%83
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_qZv86qiVDCMA2w59DXSHgL
        subject_person_id: p_T3HfvKJwe8oNYNwYQCppo7
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_CzTWpHL7Ygd6jZ5FnFr3gg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4MQpdxLvqGDhgL9L8pjYKQ
          claim_id: c_qZv86qiVDCMA2w59DXSHgL
          source_id: s_FmaGCBtNfD2X2dM8NTgkHk
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_FmaGCBtNfD2X2dM8NTgkHk
            source_type: api_record
            title: 维基数据：王广心（Q16077638）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077638
            external_identifier: Q16077638
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:46.107Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%A3%E5%BF%83
        - id: cs_Fm9aeNDdUmMAMZBogeJjVb
          claim_id: c_qZv86qiVDCMA2w59DXSHgL
          source_id: s_3274JnsuaAfJg8rZ4kF3gw
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_3274JnsuaAfJg8rZ4kF3gw
            source_type: api_record
            title: 维基数据：王鸿绪（Q15913275）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15913275
            external_identifier: Q15913275
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:12.577Z
            metadata_json: null
      object_person:
        id: p_CzTWpHL7Ygd6jZ5FnFr3gg
        status: active
        display_name: 王鸿绪
        merged_into_person_id: null
    - claim:
        id: c_CwJNszZq8iC7MXqLE7w4UR
        subject_person_id: p_T3HfvKJwe8oNYNwYQCppo7
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_gK3s5as8p46itCw9YJw9F7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_19ceqXAL92G1TQP3L5tvLm
          claim_id: c_CwJNszZq8iC7MXqLE7w4UR
          source_id: s_gJ1dDL3EU6R6QgkmwDCWgU
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_gJ1dDL3EU6R6QgkmwDCWgU
            source_type: api_record
            title: 维基数据：王顼龄（Q15916283）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15916283
            external_identifier: Q15916283
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:18.396Z
            metadata_json: null
        - id: cs_EQc4aCug73nmRMUZd3JpV3
          claim_id: c_CwJNszZq8iC7MXqLE7w4UR
          source_id: s_FmaGCBtNfD2X2dM8NTgkHk
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_FmaGCBtNfD2X2dM8NTgkHk
            source_type: api_record
            title: 维基数据：王广心（Q16077638）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077638
            external_identifier: Q16077638
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:46.107Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%A3%E5%BF%83
      object_person:
        id: p_gK3s5as8p46itCw9YJw9F7
        status: active
        display_name: 王顼龄
        merged_into_person_id: null
    - claim:
        id: c_3eBfJQtc5rgKnfPhEBNJha
        subject_person_id: p_T3HfvKJwe8oNYNwYQCppo7
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_b4dpeAET33uHSS4HsGtiLx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BiVZ3tmqQ6B4PshDU22fCi
          claim_id: c_3eBfJQtc5rgKnfPhEBNJha
          source_id: s_Df3VZzosecHfJQeRriV58J
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Df3VZzosecHfJQeRriV58J
            source_type: api_record
            title: 维基数据：王九龄（Q16077441）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077441
            external_identifier: Q16077441
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:00.361Z
            metadata_json: null
        - id: cs_xY69FhFynYAGnvN8z7w59d
          claim_id: c_3eBfJQtc5rgKnfPhEBNJha
          source_id: s_FmaGCBtNfD2X2dM8NTgkHk
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_FmaGCBtNfD2X2dM8NTgkHk
            source_type: api_record
            title: 维基数据：王广心（Q16077638）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077638
            external_identifier: Q16077638
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:46.107Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%A3%E5%BF%83
      object_person:
        id: p_b4dpeAET33uHSS4HsGtiLx
        status: active
        display_name: 王九龄
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王广心

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王广心（生于1610年），清人物。CBDB 记录其籍贯记录为華亭，入仕记录为科舉: 進士(籠統)，曾任行人司行人、巡漕御史。中国历代人物传记资料库（CBDB）以人物编号 61089 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1610年 | accepted |
| name.primary | 王广心 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_CzTWpHL7Ygd6jZ5FnFr3gg | 王鸿绪 | accepted |
| children | p_gK3s5as8p46itCw9YJw9F7 | 王顼龄 | accepted |
| children | p_b4dpeAET33uHSS4HsGtiLx | 王九龄 | accepted |

## 外部来源

- [维基数据：王广心（Q16077638）](https://www.wikidata.org/wiki/Q16077638)
- [维基数据：王鸿绪（Q15913275）](https://www.wikidata.org/wiki/Q15913275)
- [维基数据：王九龄（Q16077441）](https://www.wikidata.org/wiki/Q16077441)
- [维基数据：王顼龄（Q15916283）](https://www.wikidata.org/wiki/Q15916283)
- [CBDB 中国历代人物传记资料库：王廣心（61089）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61089&o=json)

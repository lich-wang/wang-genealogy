---
schema: wang-person/v1
id: p_uMoYvHtHcYSbRrJYWwDGUq
status: active
merged_into: null
display_name: 王陳策
cbdb_id: 203846
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bct4RGxyG9czCXCyrJc7dJ
        subject_person_id: p_uMoYvHtHcYSbRrJYWwDGUq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陳策（生于1516年），明人物。中国历代人物传记资料库（CBDB）以人物编号 203846 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_BW1M7pOgBp1Ro07LbSqHGf
          claim_id: c_Bct4RGxyG9czCXCyrJc7dJ
          source_id: s_RUnCbb2DFuH3k73RX43JQg
          stance: supports
          locator: CBDB:203846
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_RUnCbb2DFuH3k73RX43JQg
            source_type: api_record
            title: 中国历代人物传记资料库：王陳策（CBDB 203846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203846&o=json
            external_identifier: CBDB:203846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_cYkUo2rCxqUGF7kFeAMeAt
        subject_person_id: p_uMoYvHtHcYSbRrJYWwDGUq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1516年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1516-01-01
            latest: 1516-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oL22JcNj3ynVPgzWAdYsrS
          claim_id: c_cYkUo2rCxqUGF7kFeAMeAt
          source_id: s_RUnCbb2DFuH3k73RX43JQg
          stance: supports
          locator: CBDB:203846
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1516
          source:
            id: s_RUnCbb2DFuH3k73RX43JQg
            source_type: api_record
            title: 中国历代人物传记资料库：王陳策（CBDB 203846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203846&o=json
            external_identifier: CBDB:203846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rdPd4gaGjke1ZQhNm7wntP
        subject_person_id: p_uMoYvHtHcYSbRrJYWwDGUq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陳策
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hjFJwMDHAKRtDvccZ8jHqC
          claim_id: c_rdPd4gaGjke1ZQhNm7wntP
          source_id: s_RUnCbb2DFuH3k73RX43JQg
          stance: supports
          locator: CBDB:203846
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1516
          source:
            id: s_RUnCbb2DFuH3k73RX43JQg
            source_type: api_record
            title: 中国历代人物传记资料库：王陳策（CBDB 203846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203846&o=json
            external_identifier: CBDB:203846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kl8euLA_3aNzo3sM65GxYa
        subject_person_id: p_BtDG6VoMZJKLkro1XEtynE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uMoYvHtHcYSbRrJYWwDGUq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_weeUT0QX9lSxlmLM7MrFI-
          claim_id: c_kl8euLA_3aNzo3sM65GxYa
          source_id: s_4BPSPcLCgXckishAaYqrqA
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百三十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4BPSPcLCgXckishAaYqrqA
            source_type: api_record
            title: 中国历代人物传记资料库：王交（CBDB 310881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310881&o=json
            external_identifier: CBDB:310881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.846Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BtDG6VoMZJKLkro1XEtynE
        status: active
        display_name: 王交
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王陳策

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王陳策（生于1516年），明人物。中国历代人物传记资料库（CBDB）以人物编号 203846 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1516年 | accepted |
| name.primary | 王陳策 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BtDG6VoMZJKLkro1XEtynE | 王交 | accepted |

## 外部来源

- [中国历代人物传记资料库：王陳策（CBDB 203846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203846&o=json)
- [中国历代人物传记资料库：王交（CBDB 310881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310881&o=json)

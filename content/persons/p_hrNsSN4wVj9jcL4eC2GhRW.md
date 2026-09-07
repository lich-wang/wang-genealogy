---
schema: wang-person/v1
id: p_hrNsSN4wVj9jcL4eC2GhRW
status: active
merged_into: null
display_name: 王晏斌
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qGAobSZuiykTJrqXfwEHyq
        subject_person_id: p_hrNsSN4wVj9jcL4eC2GhRW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏斌（卒于854年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 184947 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_BeEhqns1Bftdm2rAJcsNDS
          claim_id: c_qGAobSZuiykTJrqXfwEHyq
          source_id: s_NbnvMKFf1XpDayAMaJZZwv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_NbnvMKFf1XpDayAMaJZZwv
            source_type: api_record
            title: 维基数据：王晏斌（Q45603793）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45603793
            external_identifier: Q45603793
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:42.360Z
            metadata_json: null
        - id: cs_Vzn0Pl8kCn59U4HuF_OcPK
          claim_id: c_qGAobSZuiykTJrqXfwEHyq
          source_id: s_RR2hojuNLEJtH66Nm4RzL4
          stance: supports
          locator: CBDB:184947
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_RR2hojuNLEJtH66Nm4RzL4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晏斌（184947）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184947&o=json
            external_identifier: CBDB:184947
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:42.531Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5b7c2V1U6w3pppVBVasr9C
        subject_person_id: p_hrNsSN4wVj9jcL4eC2GhRW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 854年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0854-01-01
            latest: 0854-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_38g6sr1qrpLkJYiXF9BKQG
          claim_id: c_5b7c2V1U6w3pppVBVasr9C
          source_id: s_NbnvMKFf1XpDayAMaJZZwv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_NbnvMKFf1XpDayAMaJZZwv
            source_type: api_record
            title: 维基数据：王晏斌（Q45603793）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45603793
            external_identifier: Q45603793
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:42.360Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QzQ4XaGA2UrkF69vKCh1fE
        subject_person_id: p_hrNsSN4wVj9jcL4eC2GhRW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏斌
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EActSEPYzrXNUCcdgg8ieD
          claim_id: c_QzQ4XaGA2UrkF69vKCh1fE
          source_id: s_RR2hojuNLEJtH66Nm4RzL4
          stance: supports
          locator: Q45603793
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_VNyeEVJkGGVHboFnq1nUCd
          claim_id: c_QzQ4XaGA2UrkF69vKCh1fE
          source_id: s_NbnvMKFf1XpDayAMaJZZwv
          stance: supports
          locator: Q45603793
          quotation: null
          interpretation_note: null
          source:
            id: s_NbnvMKFf1XpDayAMaJZZwv
            source_type: api_record
            title: 维基数据：王晏斌（Q45603793）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45603793
            external_identifier: Q45603793
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:42.360Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晏斌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王晏斌（卒于854年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 184947 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 854年 | accepted |
| name.primary | 王晏斌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王晏斌（Q45603793）](https://www.wikidata.org/wiki/Q45603793)
- [CBDB 中国历代人物传记资料库：王晏斌（184947）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184947&o=json)

---
schema: wang-person/v1
id: p_dZqLGjwekV6LPujmAiJp69
status: active
merged_into: null
display_name: 王老生
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rFEc6N9iGrdVtSWZLt6TEC
        subject_person_id: p_dZqLGjwekV6LPujmAiJp69
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王老生（478年—529年6月1日），名休，字老生，以字行，自称是太原郡晋阳县（今山西省太原市）人，北魏官员。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_Qmr_xIkwubPwg38MGwYYQu
          claim_id: c_rFEc6N9iGrdVtSWZLt6TEC
          source_id: s_fQD_P75zaMHkP9np9aDlFg
          stance: supports
          locator: 导言
          quotation: 王老生（478年—529年6月1日），名休，字老生，以字行，自称
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_fQD_P75zaMHkP9np9aDlFg
            source_type: website
            title: 中文维基百科：王老生
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%80%81%E7%94%9F
            external_identifier: Q136759790
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_y76uCafje9HrNQYhUPiFLg
        subject_person_id: p_dZqLGjwekV6LPujmAiJp69
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 478年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0478-01-01
            latest: 0478-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_rog5mmN4xJhe9X1fn1XHNB
          claim_id: c_y76uCafje9HrNQYhUPiFLg
          source_id: s_7PtpZgvmSdoco8XkWwECz2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_7PtpZgvmSdoco8XkWwECz2
            source_type: api_record
            title: 维基数据：王老生（Q136759790）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q136759790
            external_identifier: Q136759790
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:13.529Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Pv6sssbfdZjKu2oq5KobpU
        subject_person_id: p_dZqLGjwekV6LPujmAiJp69
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 529年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0529-01-01
            latest: 0529-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5rV1WfySExWfjjEm2tURa1
          claim_id: c_Pv6sssbfdZjKu2oq5KobpU
          source_id: s_7PtpZgvmSdoco8XkWwECz2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_7PtpZgvmSdoco8XkWwECz2
            source_type: api_record
            title: 维基数据：王老生（Q136759790）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q136759790
            external_identifier: Q136759790
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:13.529Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TFy85FaC34GCoGuHw6atPg
        subject_person_id: p_dZqLGjwekV6LPujmAiJp69
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王老生
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_K8kysLSPPFQM4VnmaPnc6x
          claim_id: c_TFy85FaC34GCoGuHw6atPg
          source_id: s_7PtpZgvmSdoco8XkWwECz2
          stance: supports
          locator: Q136759790
          quotation: null
          interpretation_note: null
          source:
            id: s_7PtpZgvmSdoco8XkWwECz2
            source_type: api_record
            title: 维基数据：王老生（Q136759790）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q136759790
            external_identifier: Q136759790
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:13.529Z
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

# 王老生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王老生（478年—529年6月1日），名休，字老生，以字行，自称是太原郡晋阳县（今山西省太原市）人，北魏官员。 | accepted |
| birth.date | 478年 | accepted |
| death.date | 529年 | accepted |
| name.primary | 王老生 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王老生（Q136759790）](https://www.wikidata.org/wiki/Q136759790)
- [中文维基百科：王老生](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%80%81%E7%94%9F)

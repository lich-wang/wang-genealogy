---
schema: wang-person/v1
id: p_Djkmc4uicJBuT6DjuX7m7t
status: active
merged_into: null
display_name: 王稌
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gnWpm6qnQ977EibLia9hZy
        subject_person_id: p_Djkmc4uicJBuT6DjuX7m7t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稌，明人物。CBDB 记录其籍贯记录为義烏，曾任中書舍人。中国历代人物传记资料库（CBDB）以人物编号 437664 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_BgtFNf2RafEya8EKtfgv13
          claim_id: c_gnWpm6qnQ977EibLia9hZy
          source_id: s_LPKamJ78vzJUu4765xEYKj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_LPKamJ78vzJUu4765xEYKj
            source_type: api_record
            title: 维基数据：王稌（Q65903516）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65903516
            external_identifier: Q65903516
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:09.724Z
            metadata_json: null
        - id: cs_bT98MJeEKy_PCPgaPrpP3z
          claim_id: c_gnWpm6qnQ977EibLia9hZy
          source_id: s_DifVCfdMFb5K6Mo67xCm1z
          stance: supports
          locator: CBDB:437664
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_DifVCfdMFb5K6Mo67xCm1z
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王稌（437664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437664&o=json
            external_identifier: CBDB:437664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:09.885Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NN6HeYPFFs7LMMYGYZffLt
        subject_person_id: p_Djkmc4uicJBuT6DjuX7m7t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稌
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UVWZRLFnFMoA413nvK7BUB
          claim_id: c_NN6HeYPFFs7LMMYGYZffLt
          source_id: s_LPKamJ78vzJUu4765xEYKj
          stance: supports
          locator: Q65903516
          quotation: null
          interpretation_note: null
          source:
            id: s_LPKamJ78vzJUu4765xEYKj
            source_type: api_record
            title: 维基数据：王稌（Q65903516）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65903516
            external_identifier: Q65903516
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:09.724Z
            metadata_json: null
        - id: cs_iWd4hEdfLL3KtUzUksVQAD
          claim_id: c_NN6HeYPFFs7LMMYGYZffLt
          source_id: s_DifVCfdMFb5K6Mo67xCm1z
          stance: supports
          locator: Q65903516
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
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王稌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王稌，明人物。CBDB 记录其籍贯记录为義烏，曾任中書舍人。中国历代人物传记资料库（CBDB）以人物编号 437664 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王稌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王稌（Q65903516）](https://www.wikidata.org/wiki/Q65903516)
- [CBDB 中国历代人物传记资料库：王稌（437664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437664&o=json)

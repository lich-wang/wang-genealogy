---
schema: wang-person/v1
id: p_YCdG7XtqNcYaExuN76xqKv
status: active
merged_into: null
display_name: 王瑶
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3VJPMWm6BHRXzpGAAk5TGx
        subject_person_id: p_YCdG7XtqNcYaExuN76xqKv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑶，明人物。CBDB 记录其籍贯记录为蒲州。中国历代人物传记资料库（CBDB）以人物编号 302968 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_sd1QvtA3hRvJPB9qanaJF4
          claim_id: c_3VJPMWm6BHRXzpGAAk5TGx
          source_id: s_y5KoWVZ1HsF6z8upxwGLeU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_y5KoWVZ1HsF6z8upxwGLeU
            source_type: api_record
            title: 维基数据：王瑶（Q45626878）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45626878
            external_identifier: Q45626878
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:12.194Z
            metadata_json: null
        - id: cs_CS7y_zJifuVvDGkuCqbMT1
          claim_id: c_3VJPMWm6BHRXzpGAAk5TGx
          source_id: s_p4Jc8LB9YB3bScFAx3zcwL
          stance: supports
          locator: CBDB:302968
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_p4Jc8LB9YB3bScFAx3zcwL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王瑤（302968）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302968&o=json
            external_identifier: CBDB:302968
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:12.361Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rFYFYRtEE19bvDNPqEqBpT
        subject_person_id: p_YCdG7XtqNcYaExuN76xqKv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑶
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2eTELdtBMB19YwC6z6D5w3
          claim_id: c_rFYFYRtEE19bvDNPqEqBpT
          source_id: s_p4Jc8LB9YB3bScFAx3zcwL
          stance: supports
          locator: Q45626878
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_tLu8bZdHKFcKjvQ3hJ6TJQ
          claim_id: c_rFYFYRtEE19bvDNPqEqBpT
          source_id: s_y5KoWVZ1HsF6z8upxwGLeU
          stance: supports
          locator: Q45626878
          quotation: null
          interpretation_note: null
          source:
            id: s_y5KoWVZ1HsF6z8upxwGLeU
            source_type: api_record
            title: 维基数据：王瑶（Q45626878）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45626878
            external_identifier: Q45626878
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:12.194Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Wc2jmmPM58wTQYJaVf4qxJ
        subject_person_id: p_YCdG7XtqNcYaExuN76xqKv
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_CqGGoAHd4xav6yj4gHyTHE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BfDfhJNJAU9EqLxGcc2wcT
          claim_id: c_Wc2jmmPM58wTQYJaVf4qxJ
          source_id: s_cLEqrKXY73DkEAFGT4PZQv
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_cLEqrKXY73DkEAFGT4PZQv
            source_type: api_record
            title: 维基数据：王崇古（Q15934835）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15934835
            external_identifier: Q15934835
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:31.009Z
            metadata_json: null
        - id: cs_pcfCdwCUKj9poqWhBQdRFD
          claim_id: c_Wc2jmmPM58wTQYJaVf4qxJ
          source_id: s_y5KoWVZ1HsF6z8upxwGLeU
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_y5KoWVZ1HsF6z8upxwGLeU
            source_type: api_record
            title: 维基数据：王瑶（Q45626878）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45626878
            external_identifier: Q45626878
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:12.194Z
            metadata_json: null
      object_person:
        id: p_CqGGoAHd4xav6yj4gHyTHE
        status: active
        display_name: 王崇古
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王瑶，明人物。CBDB 记录其籍贯记录为蒲州。中国历代人物传记资料库（CBDB）以人物编号 302968 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王瑶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_CqGGoAHd4xav6yj4gHyTHE | 王崇古 | accepted |

## 外部来源

- [维基数据：王崇古（Q15934835）](https://www.wikidata.org/wiki/Q15934835)
- [维基数据：王瑶（Q45626878）](https://www.wikidata.org/wiki/Q45626878)
- [CBDB 中国历代人物传记资料库：王瑤（302968）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302968&o=json)

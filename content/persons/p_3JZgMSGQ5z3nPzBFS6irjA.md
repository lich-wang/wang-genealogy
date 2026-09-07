---
schema: wang-person/v1
id: p_3JZgMSGQ5z3nPzBFS6irjA
status: active
merged_into: null
display_name: 王琬
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GJn6fA115w3o3KBvwfrYyJ
        subject_person_id: p_3JZgMSGQ5z3nPzBFS6irjA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琬，明人物。CBDB 记录其籍贯记录为吳縣，入仕记录为薦舉 (保任,保舉)，曾任知縣。中国历代人物传记资料库（CBDB）以人物编号 34581 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_5xzJzDZM78f7HCyBDRRRRS
          claim_id: c_GJn6fA115w3o3KBvwfrYyJ
          source_id: s_Pep3yEWZ9xNkK9JDhN8XfH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Pep3yEWZ9xNkK9JDhN8XfH
            source_type: api_record
            title: 维基数据：王琬（Q45426296）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426296
            external_identifier: Q45426296
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:32.124Z
            metadata_json: null
        - id: cs_NaVK4g3uMjPpOR4aaU2Evv
          claim_id: c_GJn6fA115w3o3KBvwfrYyJ
          source_id: s_RKoAncChYFnPjTFkDWbWQL
          stance: supports
          locator: CBDB:34581
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_RKoAncChYFnPjTFkDWbWQL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王琬（34581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34581&o=json
            external_identifier: CBDB:34581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:32.290Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GKGKX1RuKjHeBGDZQQpEJN
        subject_person_id: p_3JZgMSGQ5z3nPzBFS6irjA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琬
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Ky8FT8twUZfD6u2Us54UEm
          claim_id: c_GKGKX1RuKjHeBGDZQQpEJN
          source_id: s_RKoAncChYFnPjTFkDWbWQL
          stance: supports
          locator: Q45426296
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_WxuKQfS1kzLbhkFS5V99Wi
          claim_id: c_GKGKX1RuKjHeBGDZQQpEJN
          source_id: s_Pep3yEWZ9xNkK9JDhN8XfH
          stance: supports
          locator: Q45426296
          quotation: null
          interpretation_note: null
          source:
            id: s_Pep3yEWZ9xNkK9JDhN8XfH
            source_type: api_record
            title: 维基数据：王琬（Q45426296）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426296
            external_identifier: Q45426296
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:32.124Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_814SJ6xfoJ5AhYWP8gFw3j
        subject_person_id: p_3JZgMSGQ5z3nPzBFS6irjA
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Wp6B6oFJWureDLbUWC4XTo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BKq4kAPkHSumaayoGnw5Pi
          claim_id: c_814SJ6xfoJ5AhYWP8gFw3j
          source_id: s_Pep3yEWZ9xNkK9JDhN8XfH
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Pep3yEWZ9xNkK9JDhN8XfH
            source_type: api_record
            title: 维基数据：王琬（Q45426296）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426296
            external_identifier: Q45426296
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:32.124Z
            metadata_json: null
        - id: cs_HxhaCQ2rWWjL6TuubEs9z9
          claim_id: c_814SJ6xfoJ5AhYWP8gFw3j
          source_id: s_dWRCcR6daat23BeqA6jHUm
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_dWRCcR6daat23BeqA6jHUm
            source_type: api_record
            title: 维基数据：王鏊（Q15904946）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15904946
            external_identifier: Q15904946
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:35.973Z
            metadata_json: null
      object_person:
        id: p_Wp6B6oFJWureDLbUWC4XTo
        status: active
        display_name: 王鏊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王琬，明人物。CBDB 记录其籍贯记录为吳縣，入仕记录为薦舉 (保任,保舉)，曾任知縣。中国历代人物传记资料库（CBDB）以人物编号 34581 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王琬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Wp6B6oFJWureDLbUWC4XTo | 王鏊 | accepted |

## 外部来源

- [维基数据：王鏊（Q15904946）](https://www.wikidata.org/wiki/Q15904946)
- [维基数据：王琬（Q45426296）](https://www.wikidata.org/wiki/Q45426296)
- [CBDB 中国历代人物传记资料库：王琬（34581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34581&o=json)

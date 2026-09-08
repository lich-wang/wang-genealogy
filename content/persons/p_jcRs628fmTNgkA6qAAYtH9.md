---
schema: wang-person/v1
id: p_jcRs628fmTNgkA6qAAYtH9
status: active
merged_into: null
display_name: 王𬘘
cbdb_id: 32178
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LKELvNjaNxmgED7tKSbPLw
        subject_person_id: p_jcRs628fmTNgkA6qAAYtH9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王𬘘，唐人物。CBDB 记录其籍贯记录为河東，曾任太常少卿。中国历代人物传记资料库（CBDB）以人物编号 32178 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ReFn5vFK1v72yGQFhKdVN4
          claim_id: c_LKELvNjaNxmgED7tKSbPLw
          source_id: s_kPTm95xyHupfP8rVqgAjEL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_kPTm95xyHupfP8rVqgAjEL
            source_type: api_record
            title: 维基数据：王𬘘（Q45421044）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421044
            external_identifier: Q45421044
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:28.442Z
            metadata_json: null
        - id: cs_zZJKIF-HRIvts7_FI_RY1X
          claim_id: c_LKELvNjaNxmgED7tKSbPLw
          source_id: s_83m9unAymvRNCCz5QCWTjq
          stance: supports
          locator: CBDB:32178
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_83m9unAymvRNCCz5QCWTjq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王紞（32178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32178&o=json
            external_identifier: CBDB:32178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:28.578Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_a8RnCCC344KDWmKL9TeDKY
        subject_person_id: p_jcRs628fmTNgkA6qAAYtH9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王𬘘
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AByBYNSomuo7iNG2fAk72s
          claim_id: c_a8RnCCC344KDWmKL9TeDKY
          source_id: s_kPTm95xyHupfP8rVqgAjEL
          stance: supports
          locator: Q45421044
          quotation: null
          interpretation_note: null
          source:
            id: s_kPTm95xyHupfP8rVqgAjEL
            source_type: api_record
            title: 维基数据：王𬘘（Q45421044）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421044
            external_identifier: Q45421044
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:28.442Z
            metadata_json: null
        - id: cs_SdyNZVGuB6PTyTfxac18BQ
          claim_id: c_a8RnCCC344KDWmKL9TeDKY
          source_id: s_83m9unAymvRNCCz5QCWTjq
          stance: supports
          locator: Q45421044
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dbgoVsb2iadF4Y3k2tuXAf
        subject_person_id: p_LhrXSwBKuTqBng4RsWfQ9E
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_jcRs628fmTNgkA6qAAYtH9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RP1UZ1Zx8P2rop2CVVc74t
          claim_id: c_dbgoVsb2iadF4Y3k2tuXAf
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 卷七十二中·河东王氏
          quotation: 處廉生維、縉、繟、紘、紞。
          interpretation_note: 原文作王紞；库内人物 Q45421044/CBDB 32178 的主名字形为王𬘘，CBDB 同时明确其父为王處廉。
          source:
            id: s_XmK4uXKaoBAKcwvzzk8Dzr
            source_type: book
            title: 中文维基文库：新唐書/卷072中
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T10:12:55.026Z
            metadata_json: null
        - id: cs_UjDYB4wc9QuYFvG1BeZ5Bq
          claim_id: c_dbgoVsb2iadF4Y3k2tuXAf
          source_id: s_HqRrMT9yszgHjvPBBXB6LL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_HqRrMT9yszgHjvPBBXB6LL
            source_type: api_record
            title: 維基數據：王处廉（Q45421031）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421031
            external_identifier: Q45421031
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:53.926Z
            metadata_json: null
        - id: cs_b6eXxdEYVVcXL92tuQnTWp
          claim_id: c_dbgoVsb2iadF4Y3k2tuXAf
          source_id: s_kPTm95xyHupfP8rVqgAjEL
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_kPTm95xyHupfP8rVqgAjEL
            source_type: api_record
            title: 维基数据：王𬘘（Q45421044）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421044
            external_identifier: Q45421044
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:28.442Z
            metadata_json: null
        - id: cs_yAzXcATB8PifACdTEdHYfz
          claim_id: c_dbgoVsb2iadF4Y3k2tuXAf
          source_id: s_aNun5qZFaVaT8dqBJrt7kz
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_aNun5qZFaVaT8dqBJrt7kz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王處廉（32173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32173&o=json
            external_identifier: CBDB:32173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:25.998Z
            metadata_json: null
      object_person:
        id: p_LhrXSwBKuTqBng4RsWfQ9E
        status: active
        display_name: 王处廉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王𬘘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王𬘘，唐人物。CBDB 记录其籍贯记录为河東，曾任太常少卿。中国历代人物传记资料库（CBDB）以人物编号 32178 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王𬘘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LhrXSwBKuTqBng4RsWfQ9E | 王处廉 | accepted |

## 外部来源

- [维基数据：王𬘘（Q45421044）](https://www.wikidata.org/wiki/Q45421044)
- [維基數據：王处廉（Q45421031）](https://www.wikidata.org/wiki/Q45421031)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
- [CBDB 中国历代人物传记资料库：王處廉（32173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32173&o=json)
- [CBDB 中国历代人物传记资料库：王紞（32178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32178&o=json)

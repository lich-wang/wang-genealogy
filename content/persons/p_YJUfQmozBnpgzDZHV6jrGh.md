---
schema: wang-person/v1
id: p_YJUfQmozBnpgzDZHV6jrGh
status: active
merged_into: null
display_name: 李氏
cbdb_id: 140322
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2UTLdAgPPewn81cKpEN9YW
        subject_person_id: p_YJUfQmozBnpgzDZHV6jrGh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v3fwEo6BcCnMjCyev2jHC6
          claim_id: c_2UTLdAgPPewn81cKpEN9YW
          source_id: s_TMRDHAUSbWoFpWkt5oCG1k
          stance: supports
          locator: Q65802952
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_TMRDHAUSbWoFpWkt5oCG1k
            source_type: api_record
            title: 维基数据：李氏（Q65802952）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65802952
            external_identifier: Q65802952
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_bHBnTL8EbEHM4SwceTfM3D
          claim_id: c_2UTLdAgPPewn81cKpEN9YW
          source_id: s_GfMGSQkwGeLC59AEiWNiKr
          stance: supports
          locator: CBDB:140322
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_GfMGSQkwGeLC59AEiWNiKr
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：李氏（140322）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140322&o=json
            external_identifier: CBDB:140322
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
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
        id: c_7wGur8m996P1JspXYLpc15
        subject_person_id: p_ELimFJDuCmQgYQUz8JcHYB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_YJUfQmozBnpgzDZHV6jrGh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LEnzwNDCgN5QfiKXGTE4Bq
          claim_id: c_7wGur8m996P1JspXYLpc15
          source_id: s_7bxB2L41VCZBskr62oKt5P
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_7bxB2L41VCZBskr62oKt5P
            source_type: api_record
            title: 维基数据：王将勗（Q45510314）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45510314
            external_identifier: Q45510314
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:38.809Z
            metadata_json: null
        - id: cs_5MqXZ4JWnHVeMRfLY9DHQ6
          claim_id: c_7wGur8m996P1JspXYLpc15
          source_id: s_TMRDHAUSbWoFpWkt5oCG1k
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_6iXso3da9NsTRCHTxSucgj
          claim_id: c_7wGur8m996P1JspXYLpc15
          source_id: s_1HjBNJSAiFFvcNMcDTE7mi
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_1HjBNJSAiFFvcNMcDTE7mi
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王將勗（194048）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194048&o=json
            external_identifier: CBDB:194048
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:38.980Z
            metadata_json: null
      object_person:
        id: p_ELimFJDuCmQgYQUz8JcHYB
        status: active
        display_name: 王将勗
        merged_into_person_id: null
    - claim:
        id: c_v4UPffzJexAi1Evpr_mY4Q
        subject_person_id: p_cDKZ9odWpBmQ6RH3xs3UzM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_YJUfQmozBnpgzDZHV6jrGh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XSiYIY20t8iyeo3Y_fIUkA
          claim_id: c_v4UPffzJexAi1Evpr_mY4Q
          source_id: s_kud9tGDRR8FuSL6PST6CwA
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 47：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kud9tGDRR8FuSL6PST6CwA
            source_type: api_record
            title: 中国历代人物传记资料库：王勗（CBDB 151255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151255&o=json
            external_identifier: CBDB:151255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.836Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cDKZ9odWpBmQ6RH3xs3UzM
        status: active
        display_name: 王勗
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ELimFJDuCmQgYQUz8JcHYB | 王将勗 | accepted |
| spouses | p_cDKZ9odWpBmQ6RH3xs3UzM | 王勗 | accepted |

## 外部来源

- [维基数据：李氏（Q65802952）](https://www.wikidata.org/wiki/Q65802952)
- [维基数据：王将勗（Q45510314）](https://www.wikidata.org/wiki/Q45510314)
- [中国历代人物传记资料库：王勗（CBDB 151255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151255&o=json)
- [CBDB 中国历代人物传记资料库：李氏（140322）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140322&o=json)
- [CBDB 中国历代人物传记资料库：王將勗（194048）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194048&o=json)

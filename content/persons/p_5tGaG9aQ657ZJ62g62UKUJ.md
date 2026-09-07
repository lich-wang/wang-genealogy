---
schema: wang-person/v1
id: p_5tGaG9aQ657ZJ62g62UKUJ
status: active
merged_into: null
display_name: 王杰
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g6bAi2U1Tah9yJ2xepn1Yy
        subject_person_id: p_5tGaG9aQ657ZJ62g62UKUJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杰，明人物。CBDB 记录其入仕记录为監生(籠統)。中国历代人物传记资料库（CBDB）以人物编号 254714 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_eoNJ632yx4KCo7dVJP6Kvu
          claim_id: c_g6bAi2U1Tah9yJ2xepn1Yy
          source_id: s_afnBHwMfAJQHEjwJDZXUds
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_afnBHwMfAJQHEjwJDZXUds
            source_type: api_record
            title: 维基数据：王杰（Q45601328）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45601328
            external_identifier: Q45601328
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:13.176Z
            metadata_json: null
        - id: cs_vlzkUscpUZqf1xTB5nt6Op
          claim_id: c_g6bAi2U1Tah9yJ2xepn1Yy
          source_id: s_8tHB4QJWQb8qgMJwErEiCw
          stance: supports
          locator: CBDB:254714
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8tHB4QJWQb8qgMJwErEiCw
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王傑（254714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254714&o=json
            external_identifier: CBDB:254714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:13.366Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zf4UTLQ6kxkAfeACuos6f6
        subject_person_id: p_5tGaG9aQ657ZJ62g62UKUJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杰
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kQumxY2QUbYDDnNDhErxMR
          claim_id: c_Zf4UTLQ6kxkAfeACuos6f6
          source_id: s_8tHB4QJWQb8qgMJwErEiCw
          stance: supports
          locator: Q45601328
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_v7Y8BJny4gVkh39HNyNFfX
          claim_id: c_Zf4UTLQ6kxkAfeACuos6f6
          source_id: s_afnBHwMfAJQHEjwJDZXUds
          stance: supports
          locator: Q45601328
          quotation: null
          interpretation_note: null
          source:
            id: s_afnBHwMfAJQHEjwJDZXUds
            source_type: api_record
            title: 维基数据：王杰（Q45601328）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45601328
            external_identifier: Q45601328
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:13.176Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Dh7UfGRTcnNGdtqy2u2T68
        subject_person_id: p_V2Doo57wvZbJXi5ms13R7t
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5tGaG9aQ657ZJ62g62UKUJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_P2YqqyEtKNAhkuE7pGeuoW
          claim_id: c_Dh7UfGRTcnNGdtqy2u2T68
          source_id: s_afnBHwMfAJQHEjwJDZXUds
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_afnBHwMfAJQHEjwJDZXUds
            source_type: api_record
            title: 维基数据：王杰（Q45601328）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45601328
            external_identifier: Q45601328
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:13.176Z
            metadata_json: null
        - id: cs_J38fd2eYSVwhbZKtvAMKGz
          claim_id: c_Dh7UfGRTcnNGdtqy2u2T68
          source_id: s_MRfa71QMX14YkV6nXUKPbr
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_MRfa71QMX14YkV6nXUKPbr
            source_type: api_record
            title: 维基数据：王与准（Q45601206）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45601206
            external_identifier: Q45601206
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:46.649Z
            metadata_json: null
        - id: cs_8JYqUBz2EZQ6dMGWUaFw3C
          claim_id: c_Dh7UfGRTcnNGdtqy2u2T68
          source_id: s_EhFHcfWz7Y8ks9SN62JqMv
          stance: supports
          locator: 条文：世系圖
          quotation: 余姚王氏 世系圖：王与准 → 王杰
          interpretation_note: null
          source:
            id: s_EhFHcfWz7Y8ks9SN62JqMv
            source_type: website
            title: 中文维基百科：余姚王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E4%BD%99%E5%A7%9A%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:06.836Z
            metadata_json: null
      object_person:
        id: p_V2Doo57wvZbJXi5ms13R7t
        status: active
        display_name: 王与准
        merged_into_person_id: null
  children:
    - claim:
        id: c_yFmNoKYmD4q1qajPK1mXy8
        subject_person_id: p_5tGaG9aQ657ZJ62g62UKUJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1kZF9QBi4ZCyjKfPjzwHnS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_h2yXgWLW6TLSqy8hMuXEfH
          claim_id: c_yFmNoKYmD4q1qajPK1mXy8
          source_id: s_ZGpfWcofycxnGtfH3jJ7yg
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ZGpfWcofycxnGtfH3jJ7yg
            source_type: api_record
            title: 维基数据：王天叙（Q45444805）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45444805
            external_identifier: Q45444805
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:50:01.554Z
            metadata_json: null
        - id: cs_ZebAVBZjr99mgqiZ1urnYJ
          claim_id: c_yFmNoKYmD4q1qajPK1mXy8
          source_id: s_afnBHwMfAJQHEjwJDZXUds
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_afnBHwMfAJQHEjwJDZXUds
            source_type: api_record
            title: 维基数据：王杰（Q45601328）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45601328
            external_identifier: Q45601328
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:13.176Z
            metadata_json: null
      object_person:
        id: p_1kZF9QBi4ZCyjKfPjzwHnS
        status: active
        display_name: 王天叙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王杰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王杰，明人物。CBDB 记录其入仕记录为監生(籠統)。中国历代人物传记资料库（CBDB）以人物编号 254714 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王杰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_V2Doo57wvZbJXi5ms13R7t | 王与准 | accepted |
| children | p_1kZF9QBi4ZCyjKfPjzwHnS | 王天叙 | accepted |

## 外部来源

- [维基数据：王杰（Q45601328）](https://www.wikidata.org/wiki/Q45601328)
- [维基数据：王天叙（Q45444805）](https://www.wikidata.org/wiki/Q45444805)
- [维基数据：王与准（Q45601206）](https://www.wikidata.org/wiki/Q45601206)
- [中文维基百科：余姚王氏](https://zh.wikipedia.org/wiki/%E4%BD%99%E5%A7%9A%E7%8E%8B%E6%B0%8F)
- [CBDB 中国历代人物传记资料库：王傑（254714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254714&o=json)

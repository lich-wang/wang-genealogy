---
schema: wang-person/v1
id: p_oXeM1DhnzL8dBtmUo4Qtqd
status: active
merged_into: null
display_name: 王晙
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BqOyYM5e8ALragC2iUQUkU
        subject_person_id: p_oXeM1DhnzL8dBtmUo4Qtqd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晙，唐人物。CBDB 记录其籍贯记录为咸陽，身份包括工於文，曾任都督、鳳閣侍郎。中国历代人物传记资料库（CBDB）以人物编号 91982 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__i55JTiFlRlnD-DT7qCSW9
          claim_id: c_BqOyYM5e8ALragC2iUQUkU
          source_id: s_T1ghCs1VBUTNw5nSgpKgZg
          stance: supports
          locator: CBDB:91982
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_T1ghCs1VBUTNw5nSgpKgZg
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王琳（91982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91982&o=json
            external_identifier: CBDB:91982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:43.980Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EtFw6FhRPjnGSUZR2zYDeN
        subject_person_id: p_oXeM1DhnzL8dBtmUo4Qtqd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晙
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1s39HkSxfgArV2GxYqT7h9
          claim_id: c_EtFw6FhRPjnGSUZR2zYDeN
          source_id: s_T1ghCs1VBUTNw5nSgpKgZg
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：Pers DB / 唐代人物知識ベース
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_J2t23GrWqAqtrLQuKp2jJM
        subject_person_id: p_PMHDEn49o8y5aW5qiXbb15
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oXeM1DhnzL8dBtmUo4Qtqd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7T1b2iMLtAaJoRpRrQErZw
          claim_id: c_J2t23GrWqAqtrLQuKp2jJM
          source_id: s_EXcmMaeYVJwk593LFj6s41
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_EXcmMaeYVJwk593LFj6s41
            source_type: api_record
            title: 维基数据：王晙（Q45439660）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45439660
            external_identifier: Q45439660
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:31.027Z
            metadata_json: null
        - id: cs_kFgLJ8Uk15M6A2DG1Yhtsd
          claim_id: c_J2t23GrWqAqtrLQuKp2jJM
          source_id: s_ncsTj4zGGPHFgrCZYwyE47
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：Pers DB / 唐代人物知識ベース
          source:
            id: s_ncsTj4zGGPHFgrCZYwyE47
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晙（91993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91993&o=json
            external_identifier: CBDB:91993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:31.346Z
            metadata_json: null
        - id: cs_pCXN6E6HsxVK5x9xHPKd4X
          claim_id: c_J2t23GrWqAqtrLQuKp2jJM
          source_id: s_4GtVCfCGU2oMvNkWfi1429
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_4GtVCfCGU2oMvNkWfi1429
            source_type: api_record
            title: 维基数据：王琳（Q45438985）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45438985
            external_identifier: Q45438985
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:43.809Z
            metadata_json: null
        - id: cs_wMnqWpqfNkBQK22d1PeemZ
          claim_id: c_J2t23GrWqAqtrLQuKp2jJM
          source_id: s_T1ghCs1VBUTNw5nSgpKgZg
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：Pers DB / 唐代人物知識ベース
          source:
            id: s_T1ghCs1VBUTNw5nSgpKgZg
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王琳（91982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91982&o=json
            external_identifier: CBDB:91982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:43.980Z
            metadata_json: null
      object_person:
        id: p_PMHDEn49o8y5aW5qiXbb15
        status: active
        display_name: 王琳
        merged_into_person_id: null
  children:
    - claim:
        id: c_SUyG4VCA3o6n5hcn5L5VqY
        subject_person_id: p_oXeM1DhnzL8dBtmUo4Qtqd
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_PyPYdgPJF9TEybjfkDt91f
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MptggR4FcjmMYqXwavN4Eo
          claim_id: c_SUyG4VCA3o6n5hcn5L5VqY
          source_id: s_T1ghCs1VBUTNw5nSgpKgZg
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：Pers DB / 唐代人物知識ベース
          source:
            id: s_T1ghCs1VBUTNw5nSgpKgZg
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王琳（91982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91982&o=json
            external_identifier: CBDB:91982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:43.980Z
            metadata_json: null
        - id: cs_h9XZw5somtAPzPXG4XZmjA
          claim_id: c_SUyG4VCA3o6n5hcn5L5VqY
          source_id: s_4GtVCfCGU2oMvNkWfi1429
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_4GtVCfCGU2oMvNkWfi1429
            source_type: api_record
            title: 维基数据：王琳（Q45438985）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45438985
            external_identifier: Q45438985
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:43.809Z
            metadata_json: null
        - id: cs_kjNJNqQCoZC63yM6cBox69
          claim_id: c_SUyG4VCA3o6n5hcn5L5VqY
          source_id: s_EXcmMaeYVJwk593LFj6s41
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_EXcmMaeYVJwk593LFj6s41
            source_type: api_record
            title: 维基数据：王晙（Q45439660）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45439660
            external_identifier: Q45439660
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:31.027Z
            metadata_json: null
      object_person:
        id: p_PyPYdgPJF9TEybjfkDt91f
        status: active
        display_name: 王晙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王晙，唐人物。CBDB 记录其籍贯记录为咸陽，身份包括工於文，曾任都督、鳳閣侍郎。中国历代人物传记资料库（CBDB）以人物编号 91982 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王晙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PMHDEn49o8y5aW5qiXbb15 | 王琳 | accepted |
| children | p_PyPYdgPJF9TEybjfkDt91f | 王晙 | accepted |

## 外部来源

- [维基数据：王晙（Q45439660）](https://www.wikidata.org/wiki/Q45439660)
- [维基数据：王琳（Q45438985）](https://www.wikidata.org/wiki/Q45438985)
- [CBDB 中国历代人物传记资料库：王晙（91993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91993&o=json)
- [CBDB 中国历代人物传记资料库：王琳（91982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91982&o=json)

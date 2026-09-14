---
schema: wang-person/v1
id: p_f6b1ybdq775DN4Ct5frMxH
status: active
merged_into: null
display_name: 王浙
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JEYStptzWJCJYoTEiaGKBv
        subject_person_id: p_f6b1ybdq775DN4Ct5frMxH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wMz22xjWc2373Yma1tnUzm
          claim_id: c_JEYStptzWJCJYoTEiaGKBv
          source_id: s_7ZdUa1vST7Q1GFj9CdRFcd
          stance: supports
          locator: CBDB:318699
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318699）
          source: &a1
            id: s_7ZdUa1vST7Q1GFj9CdRFcd
            source_type: api_record
            title: 中国历代人物传记资料库：王浙（CBDB 318699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318699&o=json
            external_identifier: CBDB:318699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FzhJb3hGbprQVQUu9PJBSg
        subject_person_id: p_f6b1ybdq775DN4Ct5frMxH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浙，明人物。嘉靖三十二年進士，籍贯忻州。（中国历代人物传记资料库 CBDB 318699）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qZhB42sTrTEYGgcKDHTKst
          claim_id: c_FzhJb3hGbprQVQUu9PJBSg
          source_id: s_7ZdUa1vST7Q1GFj9CdRFcd
          stance: supports
          locator: CBDB:318699
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FB8JCQulR-mMxsCWxylXTB
        subject_person_id: p_UidqakXpG7WU72BqWJwGkC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_f6b1ybdq775DN4Ct5frMxH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dl4IG-9GVG2N2u4CZrBh9J
          claim_id: c_FB8JCQulR-mMxsCWxylXTB
          source_id: s_wKtw7R4ADsYRr1Bnf44gV7
          stance: supports
          locator: CBDB：兄弟 王治（69158）之父／母 王鎧
          quotation: null
          interpretation_note: 由兄弟关系推断：王浙 与 王治 为同胞（CBDB 记「兄」），王治 之父／母即 王浙 之父／母。
          source:
            id: s_wKtw7R4ADsYRr1Bnf44gV7
            source_type: api_record
            title: 中国历代人物传记资料库：王浙（CBDB 318699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318699&o=json
            external_identifier: CBDB:318699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UidqakXpG7WU72BqWJwGkC
        status: active
        display_name: 王鎧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_OWLrPrLNkQ-7jVfEBIdp3k
        subject_person_id: p_YMRfqBqGcb2AtmuSSgfQHF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_f6b1ybdq775DN4Ct5frMxH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lfQTbP9w7qIZpspMnEVAk3
          claim_id: c_OWLrPrLNkQ-7jVfEBIdp3k
          source_id: s_wKtw7R4ADsYRr1Bnf44gV7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 69158 王治）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wKtw7R4ADsYRr1Bnf44gV7
            source_type: api_record
            title: 中国历代人物传记资料库：王浙（CBDB 318699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318699&o=json
            external_identifier: CBDB:318699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YMRfqBqGcb2AtmuSSgfQHF
        status: active
        display_name: 王治
        merged_into_person_id: null
---

# 王浙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浙 | accepted |
| bio.summary | 王浙，明人物。嘉靖三十二年進士，籍贯忻州。（中国历代人物传记资料库 CBDB 318699） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UidqakXpG7WU72BqWJwGkC | 王鎧 | accepted |
| other | p_YMRfqBqGcb2AtmuSSgfQHF | 王治 | accepted |

## 外部来源

- [中国历代人物传记资料库：王浙（CBDB 318699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318699&o=json)

---
schema: wang-person/v1
id: p_2JBV3UP1jjSL1hUd6uRUK3
status: active
merged_into: null
display_name: 王鸾
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xGnMNZ7sLWuDXaE5dWWRuq
        subject_person_id: p_2JBV3UP1jjSL1hUd6uRUK3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鸾，明人物。CBDB 记录其籍贯记录为鄞縣。中国历代人物传记资料库（CBDB）以人物编号 222285 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_RGndpvj7fD7YSVb23AXqNf
          claim_id: c_xGnMNZ7sLWuDXaE5dWWRuq
          source_id: s_AzvgXDoZLR15WaH1xj38Sy
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_AzvgXDoZLR15WaH1xj38Sy
            source_type: api_record
            title: 维基数据：王鸾（Q45580943）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45580943
            external_identifier: Q45580943
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:52.069Z
            metadata_json: null
        - id: cs_N2J68Oq6sTmlExXYsctjnm
          claim_id: c_xGnMNZ7sLWuDXaE5dWWRuq
          source_id: s_6yxLzqCVN6DcVvJMGxkjKc
          stance: supports
          locator: CBDB:222285
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_6yxLzqCVN6DcVvJMGxkjKc
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鸞（222285）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222285&o=json
            external_identifier: CBDB:222285
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:52.205Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UUQ9pBWwsFXPBqQjTRXSA8
        subject_person_id: p_2JBV3UP1jjSL1hUd6uRUK3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鸾
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_T77D6MbnjPGLLyg7BWu8eK
          claim_id: c_UUQ9pBWwsFXPBqQjTRXSA8
          source_id: s_6yxLzqCVN6DcVvJMGxkjKc
          stance: supports
          locator: Q45580943
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_moMgRUkzCA6SF9nRY7PVz5
          claim_id: c_UUQ9pBWwsFXPBqQjTRXSA8
          source_id: s_AzvgXDoZLR15WaH1xj38Sy
          stance: supports
          locator: Q45580943
          quotation: null
          interpretation_note: null
          source:
            id: s_AzvgXDoZLR15WaH1xj38Sy
            source_type: api_record
            title: 维基数据：王鸾（Q45580943）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45580943
            external_identifier: Q45580943
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:52.069Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FYkNrP5J2b6faMGQ58xi54
        subject_person_id: p_LhDftPTdBSJ1CGALBq6bm6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2JBV3UP1jjSL1hUd6uRUK3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eq3q819QEZHT87fWJTX1Tr
          claim_id: c_FYkNrP5J2b6faMGQ58xi54
          source_id: s_AzvgXDoZLR15WaH1xj38Sy
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_DkC5M1fsfYnEmniBJp2VKg
          claim_id: c_FYkNrP5J2b6faMGQ58xi54
          source_id: s_F9Mri2PURAb1LHFviet2Zn
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_F9Mri2PURAb1LHFviet2Zn
            source_type: api_record
            title: 维基数据：王铭（Q45580879）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45580879
            external_identifier: Q45580879
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:58.883Z
            metadata_json: null
      object_person:
        id: p_LhDftPTdBSJ1CGALBq6bm6
        status: active
        display_name: 王铭
        merged_into_person_id: null
  children:
    - claim:
        id: c_KivXHi7fCLDAWcjhNMoiWj
        subject_person_id: p_2JBV3UP1jjSL1hUd6uRUK3
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_bZ12YW1VvZ8wACEDC3JXA6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7jNLDu5QnGgLB9zbuA9ThQ
          claim_id: c_KivXHi7fCLDAWcjhNMoiWj
          source_id: s_1qJBUqsxpfhkPoPLWcdh8r
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_1qJBUqsxpfhkPoPLWcdh8r
            source_type: api_record
            title: 维基数据：王佐（Q15928723）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15928723
            external_identifier: Q15928723
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:33.776Z
            metadata_json: null
        - id: cs_KaQhBieAhGVn2mNXPPbC22
          claim_id: c_KivXHi7fCLDAWcjhNMoiWj
          source_id: s_AzvgXDoZLR15WaH1xj38Sy
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_AzvgXDoZLR15WaH1xj38Sy
            source_type: api_record
            title: 维基数据：王鸾（Q45580943）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45580943
            external_identifier: Q45580943
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:52.069Z
            metadata_json: null
      object_person:
        id: p_bZ12YW1VvZ8wACEDC3JXA6
        status: active
        display_name: 王佐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鸾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鸾，明人物。CBDB 记录其籍贯记录为鄞縣。中国历代人物传记资料库（CBDB）以人物编号 222285 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王鸾 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LhDftPTdBSJ1CGALBq6bm6 | 王铭 | accepted |
| children | p_bZ12YW1VvZ8wACEDC3JXA6 | 王佐 | accepted |

## 外部来源

- [维基数据：王鸾（Q45580943）](https://www.wikidata.org/wiki/Q45580943)
- [维基数据：王铭（Q45580879）](https://www.wikidata.org/wiki/Q45580879)
- [维基数据：王佐（Q15928723）](https://www.wikidata.org/wiki/Q15928723)
- [CBDB 中国历代人物传记资料库：王鸞（222285）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222285&o=json)

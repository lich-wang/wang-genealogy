---
schema: wang-person/v1
id: p_yaK3v157GQYGTQP5RhE7JJ
status: active
merged_into: null
display_name: 王俊卿
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZpEoBp23RLjBWRsk34C3G4
        subject_person_id: p_yaK3v157GQYGTQP5RhE7JJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊卿，明人物。CBDB 记录其曾任百戶。中国历代人物传记资料库（CBDB）以人物编号 236877 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Htp8d3buXBdpQx6yPycz3U
          claim_id: c_ZpEoBp23RLjBWRsk34C3G4
          source_id: s_KerkffX6Nege7oC5WwMN2q
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_KerkffX6Nege7oC5WwMN2q
            source_type: api_record
            title: 维基数据：王俊卿（Q45527566）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45527566
            external_identifier: Q45527566
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:38.809Z
            metadata_json: null
        - id: cs_IbSLSwcw8lLIEiMq0wNiaB
          claim_id: c_ZpEoBp23RLjBWRsk34C3G4
          source_id: s_HKKP3v91AaD88vdZnQWk2v
          stance: supports
          locator: CBDB:236877
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HKKP3v91AaD88vdZnQWk2v
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王俊卿（236877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236877&o=json
            external_identifier: CBDB:236877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:38.977Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_25kgQgqhJ6apyJwJTLVSsW
        subject_person_id: p_yaK3v157GQYGTQP5RhE7JJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊卿
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HM6ZWJVv953S3AkjEbTkkG
          claim_id: c_25kgQgqhJ6apyJwJTLVSsW
          source_id: s_KerkffX6Nege7oC5WwMN2q
          stance: supports
          locator: Q45527566
          quotation: null
          interpretation_note: null
          source:
            id: s_KerkffX6Nege7oC5WwMN2q
            source_type: api_record
            title: 维基数据：王俊卿（Q45527566）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45527566
            external_identifier: Q45527566
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:38.809Z
            metadata_json: null
        - id: cs_LpfzCshF8WZupqLGhBWLMM
          claim_id: c_25kgQgqhJ6apyJwJTLVSsW
          source_id: s_HKKP3v91AaD88vdZnQWk2v
          stance: supports
          locator: Q45527566
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JtYFDivwtfL6P8U2h6yemY
        subject_person_id: p_C9xm5jCmEkeQHuYEcbM82J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yaK3v157GQYGTQP5RhE7JJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rHBavXte3rinmWQvk5N8wP
          claim_id: c_JtYFDivwtfL6P8U2h6yemY
          source_id: s_KerkffX6Nege7oC5WwMN2q
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_tMARqizAwHdnM2X4mRZ7Nb
          claim_id: c_JtYFDivwtfL6P8U2h6yemY
          source_id: s_EnUMzmsSH9GSBFWJjjs9zN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_EnUMzmsSH9GSBFWJjjs9zN
            source_type: api_record
            title: 维基数据：王景（Q45527504）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45527504
            external_identifier: Q45527504
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_C9xm5jCmEkeQHuYEcbM82J
        status: active
        display_name: 王景
        merged_into_person_id: null
  children:
    - claim:
        id: c_JpbTfSjX53GaWC93KZkSBt
        subject_person_id: p_yaK3v157GQYGTQP5RhE7JJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wxNC97go3Ly1JHGAcv6FvX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gyfp8Mt3zEjFu4gNmmdwhC
          claim_id: c_JpbTfSjX53GaWC93KZkSBt
          source_id: s_9noZnKactHYY2Rut3H7eGs
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_9noZnKactHYY2Rut3H7eGs
            source_type: api_record
            title: 维基数据：王佐（Q45527630）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45527630
            external_identifier: Q45527630
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:33.526Z
            metadata_json: null
        - id: cs_49NJfETCKuF9Gq7f3jPRdC
          claim_id: c_JpbTfSjX53GaWC93KZkSBt
          source_id: s_KerkffX6Nege7oC5WwMN2q
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_wxNC97go3Ly1JHGAcv6FvX
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

# 王俊卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王俊卿，明人物。CBDB 记录其曾任百戶。中国历代人物传记资料库（CBDB）以人物编号 236877 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王俊卿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_C9xm5jCmEkeQHuYEcbM82J | 王景 | accepted |
| children | p_wxNC97go3Ly1JHGAcv6FvX | 王佐 | accepted |

## 外部来源

- [维基数据：王景（Q45527504）](https://www.wikidata.org/wiki/Q45527504)
- [维基数据：王俊卿（Q45527566）](https://www.wikidata.org/wiki/Q45527566)
- [维基数据：王佐（Q45527630）](https://www.wikidata.org/wiki/Q45527630)
- [CBDB 中国历代人物传记资料库：王俊卿（236877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236877&o=json)

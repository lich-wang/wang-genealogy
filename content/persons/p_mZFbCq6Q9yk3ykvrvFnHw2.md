---
schema: wang-person/v1
id: p_mZFbCq6Q9yk3ykvrvFnHw2
status: active
merged_into: null
display_name: 王罗云
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mqBFBQzp3iMJ7mQIEdtip-
        subject_person_id: p_mZFbCq6Q9yk3ykvrvFnHw2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王罗云，史料所见人物。本项目依据《王罗云》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ToYxY5wjgYgGisKxdKAEAE
          claim_id: c_mqBFBQzp3iMJ7mQIEdtip-
          source_id: s_JvGitqqhMVy4vcW36VafY4
          stance: supports
          locator: Q22815011
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_JvGitqqhMVy4vcW36VafY4
            source_type: api_record
            title: 维基数据：王罗云（Q22815011）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22815011
            external_identifier: Q22815011
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:06.301Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fDRkNctnjbByi89ipfELKG
        subject_person_id: p_mZFbCq6Q9yk3ykvrvFnHw2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王罗云
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DAdfDtvrm3gtXUM7awgZkm
          claim_id: c_fDRkNctnjbByi89ipfELKG
          source_id: s_JvGitqqhMVy4vcW36VafY4
          stance: supports
          locator: Q22815011
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9MpPssZ83vJn4N2RKK7144
        subject_person_id: p_DqZgLkLxDg6fw1Jmrcs9bW
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_mZFbCq6Q9yk3ykvrvFnHw2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9dxnDHFS7AcELwKmnXmf17
          claim_id: c_9MpPssZ83vJn4N2RKK7144
          source_id: s_JvGitqqhMVy4vcW36VafY4
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_JvGitqqhMVy4vcW36VafY4
            source_type: api_record
            title: 维基数据：王罗云（Q22815011）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22815011
            external_identifier: Q22815011
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:06.301Z
            metadata_json: null
        - id: cs_JR5thn2TCUU3rkTHYLFY1C
          claim_id: c_9MpPssZ83vJn4N2RKK7144
          source_id: s_eDNMwzgGggzMZ5ckjXDbpj
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_eDNMwzgGggzMZ5ckjXDbpj
            source_type: api_record
            title: 维基数据：王弘之（Q13618784）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13618784
            external_identifier: Q13618784
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:11.806Z
            metadata_json: null
      object_person:
        id: p_DqZgLkLxDg6fw1Jmrcs9bW
        status: active
        display_name: 王弘之
        merged_into_person_id: null
  children:
    - claim:
        id: c_2svCStWL9tSVsBkYfaJa6U
        subject_person_id: p_mZFbCq6Q9yk3ykvrvFnHw2
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_8Vg1T5R7ukaKqBB4atcTLS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oGF2hht6YzJNzT3tmYitPd
          claim_id: c_2svCStWL9tSVsBkYfaJa6U
          source_id: s_u8v7nYY6isM3BJDNEMQPsf
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_u8v7nYY6isM3BJDNEMQPsf
            source_type: api_record
            title: 维基数据：王思遠（Q11573071）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573071
            external_identifier: Q11573071
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:12.610Z
            metadata_json: null
        - id: cs_uvpUw4RJmPyCsiwH6sCaoC
          claim_id: c_2svCStWL9tSVsBkYfaJa6U
          source_id: s_JvGitqqhMVy4vcW36VafY4
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_JvGitqqhMVy4vcW36VafY4
            source_type: api_record
            title: 维基数据：王罗云（Q22815011）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22815011
            external_identifier: Q22815011
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:06.301Z
            metadata_json: null
      object_person:
        id: p_8Vg1T5R7ukaKqBB4atcTLS
        status: active
        display_name: 王思遠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王罗云

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王罗云，史料所见人物。本项目依据《王罗云》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王罗云 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DqZgLkLxDg6fw1Jmrcs9bW | 王弘之 | accepted |
| children | p_8Vg1T5R7ukaKqBB4atcTLS | 王思遠 | accepted |

## 外部来源

- [维基数据：王弘之（Q13618784）](https://www.wikidata.org/wiki/Q13618784)
- [维基数据：王罗云（Q22815011）](https://www.wikidata.org/wiki/Q22815011)
- [维基数据：王思遠（Q11573071）](https://www.wikidata.org/wiki/Q11573071)

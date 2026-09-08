---
schema: wang-person/v1
id: p_bsaBkdmG56EXm3A3mHUYh8
status: active
merged_into: null
display_name: 曹氏
cbdb_id: 437858
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Gk46uIQmO-V0RKtO5i4mq0
        subject_person_id: p_bsaBkdmG56EXm3A3mHUYh8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 曹氏，王紳妻。维基数据以独立条目 Q65904097 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_uisYiAobKJW7HjCDhstl0D
          claim_id: c_Gk46uIQmO-V0RKtO5i4mq0
          source_id: s_YKqPPbeE82Tf7iaFH52m7b
          stance: supports
          locator: Q65904097
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_YKqPPbeE82Tf7iaFH52m7b
            source_type: api_record
            title: 维基数据：曹氏（Q65904097）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65904097
            external_identifier: Q65904097
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:11.128Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YVvKbRYf1LxhWRCRdKNwHD
        subject_person_id: p_bsaBkdmG56EXm3A3mHUYh8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 曹氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_RdcPJEAwrEMkXmMTTJy5Sq
          claim_id: c_YVvKbRYf1LxhWRCRdKNwHD
          source_id: s_5g8C98WqsNbmThFqxkReZq
          stance: supports
          locator: Q65904097
          quotation: null
          interpretation_note: null
          source:
            id: s_5g8C98WqsNbmThFqxkReZq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：曹氏（437858）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437858&o=json
            external_identifier: CBDB:437858
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:11.287Z
            metadata_json: null
        - id: cs_jFCU778u3REmX72Xkg1tqm
          claim_id: c_YVvKbRYf1LxhWRCRdKNwHD
          source_id: s_YKqPPbeE82Tf7iaFH52m7b
          stance: supports
          locator: Q65904097
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_GHJB1TqnaTKQAVua8FQHNL
        subject_person_id: p_bsaBkdmG56EXm3A3mHUYh8
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ujxGmCBGatyUsmPNvx1eeB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wPyWb1rgQTPKzAeHaUMNAz
          claim_id: c_GHJB1TqnaTKQAVua8FQHNL
          source_id: s_vS2t2ntyv7LmatgEDDuYin
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_vS2t2ntyv7LmatgEDDuYin
            source_type: api_record
            title: 维基数据：王绅（Q45413317）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45413317
            external_identifier: Q45413317
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:07.031Z
            metadata_json: null
        - id: cs_9J2FB4AmyK9HGj2oUk4711
          claim_id: c_GHJB1TqnaTKQAVua8FQHNL
          source_id: s_YKqPPbeE82Tf7iaFH52m7b
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_frPfHQHfdT4Fq3h3EWYV1U
          claim_id: c_GHJB1TqnaTKQAVua8FQHNL
          source_id: s_TRViFeuhUj6uqvpFPe1kuG
          stance: supports
          locator: 亲属关系：第二任妻
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_TRViFeuhUj6uqvpFPe1kuG
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王紳（28112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28112&o=json
            external_identifier: CBDB:28112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:07.216Z
            metadata_json: null
      object_person:
        id: p_ujxGmCBGatyUsmPNvx1eeB
        status: active
        display_name: 王绅
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 曹氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 曹氏，王紳妻。维基数据以独立条目 Q65904097 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 曹氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ujxGmCBGatyUsmPNvx1eeB | 王绅 | accepted |

## 外部来源

- [维基数据：曹氏（Q65904097）](https://www.wikidata.org/wiki/Q65904097)
- [维基数据：王绅（Q45413317）](https://www.wikidata.org/wiki/Q45413317)
- [CBDB 中国历代人物传记资料库：曹氏（437858）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437858&o=json)
- [CBDB 中国历代人物传记资料库：王紳（28112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28112&o=json)

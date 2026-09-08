---
schema: wang-person/v1
id: p_YdbFSMV9s3AQb86u7EkdDN
status: active
merged_into: null
display_name: 王臣
cbdb_id: 313120
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TE7pVNTDLCGoFJxDgF7NzJ
        subject_person_id: p_YdbFSMV9s3AQb86u7EkdDN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣，明人物。CBDB 记录其曾任壽官。中国历代人物传记资料库（CBDB）以人物编号 313120 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_NUq8N157i2bkzsLAzWL3ZD
          claim_id: c_TE7pVNTDLCGoFJxDgF7NzJ
          source_id: s_M6Jx2ULhfF3afm41LXVGft
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_M6Jx2ULhfF3afm41LXVGft
            source_type: api_record
            title: 维基数据：王臣（Q45613816）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45613816
            external_identifier: Q45613816
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:00.338Z
            metadata_json: null
        - id: cs_2WyoRssZW29vvJm9JoQxuM
          claim_id: c_TE7pVNTDLCGoFJxDgF7NzJ
          source_id: s_KyBpH45EBm8fnXU9NBUHLP
          stance: supports
          locator: CBDB:313120
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_KyBpH45EBm8fnXU9NBUHLP
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王臣（313120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313120&o=json
            external_identifier: CBDB:313120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:00.598Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_G15Zs5f543n7jrsdHy2Eh1
        subject_person_id: p_YdbFSMV9s3AQb86u7EkdDN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_mEAfhy41vk1126Bmi7seSa
          claim_id: c_G15Zs5f543n7jrsdHy2Eh1
          source_id: s_M6Jx2ULhfF3afm41LXVGft
          stance: supports
          locator: Q45613816
          quotation: null
          interpretation_note: null
          source:
            id: s_M6Jx2ULhfF3afm41LXVGft
            source_type: api_record
            title: 维基数据：王臣（Q45613816）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45613816
            external_identifier: Q45613816
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:00.338Z
            metadata_json: null
        - id: cs_yugbND4uaMhy3GmKQjfhFT
          claim_id: c_G15Zs5f543n7jrsdHy2Eh1
          source_id: s_KyBpH45EBm8fnXU9NBUHLP
          stance: supports
          locator: Q45613816
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LqdESTn2PPhWuj1kLJBcA7
        subject_person_id: p_hhC7WcHCPL6E8fvMUH5DQ3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YdbFSMV9s3AQb86u7EkdDN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7Evwk2Ym2SKGv83LSmGAKh
          claim_id: c_LqdESTn2PPhWuj1kLJBcA7
          source_id: s_M6Jx2ULhfF3afm41LXVGft
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_WHp8rqf1G3QexFgMFMkoi6
          claim_id: c_LqdESTn2PPhWuj1kLJBcA7
          source_id: s_wf5fgiE4219vxr9cYMwx4P
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_wf5fgiE4219vxr9cYMwx4P
            source_type: api_record
            title: 维基数据：王璘（Q45662142）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662142
            external_identifier: Q45662142
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_hhC7WcHCPL6E8fvMUH5DQ3
        status: active
        display_name: 王璘
        merged_into_person_id: null
  children:
    - claim:
        id: c_tpv3sBQFJ2GxL44ky4M12Q
        subject_person_id: p_YdbFSMV9s3AQb86u7EkdDN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fubDQJjS45y6q3DDqG3cmV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GzAFh2nwn2JdaE5fSPY4sx
          claim_id: c_tpv3sBQFJ2GxL44ky4M12Q
          source_id: s_bMvr9FFr13GEoAwQLCdtrk
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_bMvr9FFr13GEoAwQLCdtrk
            source_type: api_record
            title: 维基数据：王谟（Q45613879）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45613879
            external_identifier: Q45613879
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:34.983Z
            metadata_json: null
        - id: cs_JoBtNJaaeCFfUNJcnjLyy9
          claim_id: c_tpv3sBQFJ2GxL44ky4M12Q
          source_id: s_M6Jx2ULhfF3afm41LXVGft
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_fubDQJjS45y6q3DDqG3cmV
        status: active
        display_name: 王谟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王臣，明人物。CBDB 记录其曾任壽官。中国历代人物传记资料库（CBDB）以人物编号 313120 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王臣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hhC7WcHCPL6E8fvMUH5DQ3 | 王璘 | accepted |
| children | p_fubDQJjS45y6q3DDqG3cmV | 王谟 | accepted |

## 外部来源

- [维基数据：王臣（Q45613816）](https://www.wikidata.org/wiki/Q45613816)
- [维基数据：王璘（Q45662142）](https://www.wikidata.org/wiki/Q45662142)
- [维基数据：王谟（Q45613879）](https://www.wikidata.org/wiki/Q45613879)
- [CBDB 中国历代人物传记资料库：王臣（313120）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313120&o=json)

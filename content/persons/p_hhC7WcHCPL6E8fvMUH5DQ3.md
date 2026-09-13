---
schema: wang-person/v1
id: p_hhC7WcHCPL6E8fvMUH5DQ3
status: active
merged_into: null
display_name: 王璘
cbdb_id: 282593
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_57LHaHHbWivFw6sV2nXRpk
        subject_person_id: p_hhC7WcHCPL6E8fvMUH5DQ3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璘
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yavXrfcWwuLj3X6fNLKbSD
          claim_id: c_57LHaHHbWivFw6sV2nXRpk
          source_id: s_wf5fgiE4219vxr9cYMwx4P
          stance: supports
          locator: Q45662142
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
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
        - id: cs_mcJrnPCTR6zHZDNC999fLm
          claim_id: c_57LHaHHbWivFw6sV2nXRpk
          source_id: s_8cX77Uk8hKfz8zUMehuKPY
          stance: supports
          locator: CBDB:282593
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_8cX77Uk8hKfz8zUMehuKPY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王璘（282593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282593&o=json
            external_identifier: CBDB:282593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AH6q3qXGj3KsrNLBipjQ35
        subject_person_id: p_hhC7WcHCPL6E8fvMUH5DQ3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璘，明人物。正德十二年進士，曾任縣丞。（中国历代人物传记资料库 CBDB 282593）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bNJ2okF5J2TeD2g294qTCR
          claim_id: c_AH6q3qXGj3KsrNLBipjQ35
          source_id: s_wf5fgiE4219vxr9cYMwx4P
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
        - id: cs_gR92u1KHdVRI8t1Vmhs8vA
          claim_id: c_AH6q3qXGj3KsrNLBipjQ35
          source_id: s_8cX77Uk8hKfz8zUMehuKPY
          stance: supports
          locator: CBDB:282593
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a2
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
        - id: cs_WHp8rqf1G3QexFgMFMkoi6
          claim_id: c_LqdESTn2PPhWuj1kLJBcA7
          source_id: s_wf5fgiE4219vxr9cYMwx4P
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_YdbFSMV9s3AQb86u7EkdDN
        status: active
        display_name: 王臣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_YCNkwDDFsk1KP0tNX8jYEV
        subject_person_id: p_hhC7WcHCPL6E8fvMUH5DQ3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Uu3urkECTiPumEtH6sBydY
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TAyF2D_SFIczsnwtbFUoIm
          claim_id: c_YCNkwDDFsk1KP0tNX8jYEV
          source_id: s_8cX77Uk8hKfz8zUMehuKPY
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百九十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_Uu3urkECTiPumEtH6sBydY
        status: active
        display_name: 王邦瑞
        merged_into_person_id: null
  other: []
---

# 王璘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璘 | accepted |
| bio.summary | 王璘，明人物。正德十二年進士，曾任縣丞。（中国历代人物传记资料库 CBDB 282593） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_YdbFSMV9s3AQb86u7EkdDN | 王臣 | accepted |
| descendants | p_Uu3urkECTiPumEtH6sBydY | 王邦瑞 | accepted |

## 外部来源

- [维基数据：王臣（Q45613816）](https://www.wikidata.org/wiki/Q45613816)
- [维基数据：王璘（Q45662142）](https://www.wikidata.org/wiki/Q45662142)
- [CBDB 中国历代人物传记资料库：王璘（282593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282593&o=json)

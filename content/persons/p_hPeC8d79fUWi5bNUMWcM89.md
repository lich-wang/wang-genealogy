---
schema: wang-person/v1
id: p_hPeC8d79fUWi5bNUMWcM89
status: active
merged_into: null
display_name: 王璘
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VQo4rDBmt4Ag88rcBNNaTv
        subject_person_id: p_hPeC8d79fUWi5bNUMWcM89
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2m9AHByuMRG9ikYRPJkR8Z
          claim_id: c_VQo4rDBmt4Ag88rcBNNaTv
          source_id: s_KBBrEikcDsK5g2ix2T2XtG
          stance: supports
          locator: CBDB:291525
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（291525）
          source: &a1
            id: s_KBBrEikcDsK5g2ix2T2XtG
            source_type: api_record
            title: 中国历代人物传记资料库：王璘（CBDB 291525）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291525&o=json
            external_identifier: CBDB:291525
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.356Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wcqKQRD2BkgHD5eAiCaoJS
        subject_person_id: p_hPeC8d79fUWi5bNUMWcM89
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璘，明人物。嘉靖十一年進士，籍贯錢塘，曾任衛經歷。（中国历代人物传记资料库 CBDB 291525）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pe8WbRKZ1ezpC4Vwhw6Xrv
          claim_id: c_wcqKQRD2BkgHD5eAiCaoJS
          source_id: s_KBBrEikcDsK5g2ix2T2XtG
          stance: supports
          locator: CBDB:291525
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_nfzXWOjaaKBEjm3D2bUX83
        subject_person_id: p_hPeC8d79fUWi5bNUMWcM89
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1R7tJCQnDzHJMgdYcvFf8v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0-y4LTvL8XEqUEuUNYM26J
          claim_id: c_nfzXWOjaaKBEjm3D2bUX83
          source_id: s_Z2FLbe9bQgBZm3cMUB3yFn
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第二甲第六十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Z2FLbe9bQgBZm3cMUB3yFn
            source_type: api_record
            title: 中国历代人物传记资料库：王椿（CBDB 202645）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202645&o=json
            external_identifier: CBDB:202645
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.748Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1R7tJCQnDzHJMgdYcvFf8v
        status: active
        display_name: 王椿
        merged_into_person_id: null
    - claim:
        id: c_GW5A-JSu1gGlUlZ2X2EIt8
        subject_person_id: p_hPeC8d79fUWi5bNUMWcM89
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UZaJrSCB14421jWm2bfu9Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X-CffrRi3dbxvysc9DkEeA
          claim_id: c_GW5A-JSu1gGlUlZ2X2EIt8
          source_id: s_KbQnc1DLNNFWyHZD0bRhMH
          stance: supports
          locator: CBDB：兄弟 王椿（202645）之父／母 王璘
          quotation: null
          interpretation_note: 由兄弟关系推断：王材 与 王椿 为同胞（CBDB 记「兄」），王椿 之父／母即 王材 之父／母。
          source:
            id: s_KbQnc1DLNNFWyHZD0bRhMH
            source_type: api_record
            title: 中国历代人物传记资料库：王材（CBDB 291532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291532&o=json
            external_identifier: CBDB:291532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UZaJrSCB14421jWm2bfu9Q
        status: active
        display_name: 王材
        merged_into_person_id: null
    - claim:
        id: c_i6aITym-CGYZ6_t-K2RELp
        subject_person_id: p_hPeC8d79fUWi5bNUMWcM89
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_a9nNGLG19fus2VUx21NZAb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OAUGIdHdxs2laXUepMbhc5
          claim_id: c_i6aITym-CGYZ6_t-K2RELp
          source_id: s_97XiiMVzPRLA5ngKGJLWi0
          stance: supports
          locator: CBDB：兄弟 王椿（202645）之父／母 王璘
          quotation: null
          interpretation_note: 由兄弟关系推断：王相 与 王椿 为同胞（CBDB 记「弟」），王椿 之父／母即 王相 之父／母。
          source:
            id: s_97XiiMVzPRLA5ngKGJLWi0
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 291531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291531&o=json
            external_identifier: CBDB:291531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_a9nNGLG19fus2VUx21NZAb
        status: active
        display_name: 王相
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璘 | accepted |
| bio.summary | 王璘，明人物。嘉靖十一年進士，籍贯錢塘，曾任衛經歷。（中国历代人物传记资料库 CBDB 291525） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_1R7tJCQnDzHJMgdYcvFf8v | 王椿 | accepted |
| children | p_UZaJrSCB14421jWm2bfu9Q | 王材 | accepted |
| children | p_a9nNGLG19fus2VUx21NZAb | 王相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王材（CBDB 291532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291532&o=json)
- [中国历代人物传记资料库：王椿（CBDB 202645）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202645&o=json)
- [中国历代人物传记资料库：王璘（CBDB 291525）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291525&o=json)
- [中国历代人物传记资料库：王相（CBDB 291531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291531&o=json)

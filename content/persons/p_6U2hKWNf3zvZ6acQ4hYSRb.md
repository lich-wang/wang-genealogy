---
schema: wang-person/v1
id: p_6U2hKWNf3zvZ6acQ4hYSRb
status: active
merged_into: null
display_name: 王相
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZebPMphH2qpFtwHWqAKiAG
        subject_person_id: p_6U2hKWNf3zvZ6acQ4hYSRb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jpv53KrpHNoktcmjwP58Bu
          claim_id: c_ZebPMphH2qpFtwHWqAKiAG
          source_id: s_DywXQHriPtFqgpRz6xT2A1
          stance: supports
          locator: CBDB:315443
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（315443）
          source: &a1
            id: s_DywXQHriPtFqgpRz6xT2A1
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 315443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315443&o=json
            external_identifier: CBDB:315443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.946Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ehCdWSiHPqRqY9zt4syb7E
        subject_person_id: p_6U2hKWNf3zvZ6acQ4hYSRb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相，明人物。嘉靖三十二年進士，籍贯湘潭，曾任訓導。（中国历代人物传记资料库 CBDB 315443）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mK8ON3Y5FgnlMajWPU-Z96
          claim_id: c_ehCdWSiHPqRqY9zt4syb7E
          source_id: s_DywXQHriPtFqgpRz6xT2A1
          stance: supports
          locator: CBDB:315443
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_AjAbuzPbXOgiv6tkhLQtG5
        subject_person_id: p_6U2hKWNf3zvZ6acQ4hYSRb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tJ4a7bRMV9hCP3y348uRJE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZSq2jSy5D0VStuzk3KJgSx
          claim_id: c_AjAbuzPbXOgiv6tkhLQtG5
          source_id: s_DywXQHriPtFqgpRz6xT2A1
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第二甲第五十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tJ4a7bRMV9hCP3y348uRJE
        status: active
        display_name: 王學顏
        merged_into_person_id: null
    - claim:
        id: c_C1Q8_ZK1joldiyD0kUOKSC
        subject_person_id: p_6U2hKWNf3zvZ6acQ4hYSRb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N79j3qJ7kSXo4mPw794Y9Y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n1LJFHDJErLaVapkXR-v9L
          claim_id: c_C1Q8_ZK1joldiyD0kUOKSC
          source_id: s_snmPmV0nHSizYPDETQ3tOM
          stance: supports
          locator: CBDB：兄弟 王學顏（126840）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王學朱 与 王學顏 为同胞（CBDB 记「兄」），王學顏 之父／母即 王學朱 之父／母。
          source:
            id: s_snmPmV0nHSizYPDETQ3tOM
            source_type: api_record
            title: 中国历代人物传记资料库：王學朱（CBDB 315450）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315450&o=json
            external_identifier: CBDB:315450
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N79j3qJ7kSXo4mPw794Y9Y
        status: active
        display_name: 王學朱
        merged_into_person_id: null
    - claim:
        id: c_NYqI7WPj_dpFElWGUJMG5h
        subject_person_id: p_6U2hKWNf3zvZ6acQ4hYSRb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TuFF97w586gB9dLGs2aawd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZW7rPFmZ89xAKRstrqVk3B
          claim_id: c_NYqI7WPj_dpFElWGUJMG5h
          source_id: s_vqCWmfMlFc3A3OsbfAl-PN
          stance: supports
          locator: CBDB：兄弟 王學顏（126840）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王學周 与 王學顏 为同胞（CBDB 记「兄」），王學顏 之父／母即 王學周 之父／母。
          source:
            id: s_vqCWmfMlFc3A3OsbfAl-PN
            source_type: api_record
            title: 中国历代人物传记资料库：王學周（CBDB 315449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315449&o=json
            external_identifier: CBDB:315449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TuFF97w586gB9dLGs2aawd
        status: active
        display_name: 王學周
        merged_into_person_id: null
    - claim:
        id: c_k5CMGw3QtzpNpOpYGHZQQt
        subject_person_id: p_6U2hKWNf3zvZ6acQ4hYSRb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YW3a63CCDAWxKBQcS5S44K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uZiGBXJ9Uz2b92ot4qxi4m
          claim_id: c_k5CMGw3QtzpNpOpYGHZQQt
          source_id: s_Yi-oY26a5dyBS2omEtlpDg
          stance: supports
          locator: CBDB：兄弟 王學顏（126840）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王學曾 与 王學顏 为同胞（CBDB 记「兄」），王學顏 之父／母即 王學曾 之父／母。
          source:
            id: s_Yi-oY26a5dyBS2omEtlpDg
            source_type: api_record
            title: 中国历代人物传记资料库：王學曾（CBDB 315447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315447&o=json
            external_identifier: CBDB:315447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YW3a63CCDAWxKBQcS5S44K
        status: active
        display_name: 王學曾
        merged_into_person_id: null
    - claim:
        id: c_uBLc7H2gWNnuHadihD8-us
        subject_person_id: p_6U2hKWNf3zvZ6acQ4hYSRb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_u3nGyTYXwikKsvfMw72gDu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_09qvHgKNkUp-7r4-r_kUBm
          claim_id: c_uBLc7H2gWNnuHadihD8-us
          source_id: s_KvXX5UOhav5y9Ja6Z7LBle
          stance: supports
          locator: CBDB：兄弟 王學顏（126840）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王學孟 与 王學顏 为同胞（CBDB 记「兄」），王學顏 之父／母即 王學孟 之父／母。
          source:
            id: s_KvXX5UOhav5y9Ja6Z7LBle
            source_type: api_record
            title: 中国历代人物传记资料库：王學孟（CBDB 315448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315448&o=json
            external_identifier: CBDB:315448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_u3nGyTYXwikKsvfMw72gDu
        status: active
        display_name: 王學孟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王相 | accepted |
| bio.summary | 王相，明人物。嘉靖三十二年進士，籍贯湘潭，曾任訓導。（中国历代人物传记资料库 CBDB 315443） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_tJ4a7bRMV9hCP3y348uRJE | 王學顏 | accepted |
| children | p_N79j3qJ7kSXo4mPw794Y9Y | 王學朱 | accepted |
| children | p_TuFF97w586gB9dLGs2aawd | 王學周 | accepted |
| children | p_YW3a63CCDAWxKBQcS5S44K | 王學曾 | accepted |
| children | p_u3nGyTYXwikKsvfMw72gDu | 王學孟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王相（CBDB 315443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315443&o=json)
- [中国历代人物传记资料库：王學曾（CBDB 315447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315447&o=json)
- [中国历代人物传记资料库：王學孟（CBDB 315448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315448&o=json)
- [中国历代人物传记资料库：王學周（CBDB 315449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315449&o=json)
- [中国历代人物传记资料库：王學朱（CBDB 315450）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315450&o=json)

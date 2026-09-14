---
schema: wang-person/v1
id: p_uKtEKuzL33Ns79oVfb6c8x
status: active
merged_into: null
display_name: 王榮
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ywQmF6mS496Nuaqv9xinwW
        subject_person_id: p_uKtEKuzL33Ns79oVfb6c8x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sa2fAQY44enSY4hcJ4ApAv
          claim_id: c_ywQmF6mS496Nuaqv9xinwW
          source_id: s_wA8ftcYZeM2e7fqN2jkNPn
          stance: supports
          locator: CBDB:318840
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318840）
          source: &a1
            id: s_wA8ftcYZeM2e7fqN2jkNPn
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 318840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318840&o=json
            external_identifier: CBDB:318840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.033Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JiV93WUpgiJn2GvAmPuczs
        subject_person_id: p_uKtEKuzL33Ns79oVfb6c8x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮，明人物。天順四年進士，籍贯許州。（中国历代人物传记资料库 CBDB 318840）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UFIKArfF8FrHTCzR0NUiuZ
          claim_id: c_JiV93WUpgiJn2GvAmPuczs
          source_id: s_wA8ftcYZeM2e7fqN2jkNPn
          stance: supports
          locator: CBDB:318840
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_2kPw9D8J1uWrilXAeA3Pjv
        subject_person_id: p_uKtEKuzL33Ns79oVfb6c8x
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Mq4DjrJD3kuD51C35m7MXJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lPqRKQWPNXh1ztQdh26Fay
          claim_id: c_2kPw9D8J1uWrilXAeA3Pjv
          source_id: s_wA8ftcYZeM2e7fqN2jkNPn
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第四十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Mq4DjrJD3kuD51C35m7MXJ
        status: active
        display_name: 王塤
        merged_into_person_id: null
    - claim:
        id: c_7619yO9Bq-ieKbocveJJ8T
        subject_person_id: p_uKtEKuzL33Ns79oVfb6c8x
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4BLXyZCenGFGTpbxvtENEs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ikLjeCLVqUN_pdk7PQzWfL
          claim_id: c_7619yO9Bq-ieKbocveJJ8T
          source_id: s_RE_9jZkeCov6vuMCtZEy1b
          stance: supports
          locator: CBDB：兄弟 王塤（198806）之父／母 王榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王域 与 王塤 为同胞（CBDB 记「兄」），王塤 之父／母即 王域 之父／母。
          source:
            id: s_RE_9jZkeCov6vuMCtZEy1b
            source_type: api_record
            title: 中国历代人物传记资料库：王域（CBDB 318885）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318885&o=json
            external_identifier: CBDB:318885
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4BLXyZCenGFGTpbxvtENEs
        status: active
        display_name: 王域
        merged_into_person_id: null
    - claim:
        id: c_nAohPPV1F55DjTf4LxbRpr
        subject_person_id: p_uKtEKuzL33Ns79oVfb6c8x
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZWwwyZ4CZPwA7YuhKikuic
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3E8wW4ZmAA6T4QDemjZYzp
          claim_id: c_nAohPPV1F55DjTf4LxbRpr
          source_id: s_9V1B2OV7pKFAV1TT63Dhfs
          stance: supports
          locator: CBDB：兄弟 王塤（198806）之父／母 王榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王城 与 王塤 为同胞（CBDB 记「兄」），王塤 之父／母即 王城 之父／母。
          source:
            id: s_9V1B2OV7pKFAV1TT63Dhfs
            source_type: api_record
            title: 中国历代人物传记资料库：王城（CBDB 318896）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318896&o=json
            external_identifier: CBDB:318896
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZWwwyZ4CZPwA7YuhKikuic
        status: active
        display_name: 王城
        merged_into_person_id: null
    - claim:
        id: c_cioBoHujBrtUhri6l6iKs_
        subject_person_id: p_uKtEKuzL33Ns79oVfb6c8x
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hJ1QAW8UbdxEJ85GBLmUQf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MaNILI-KoserJ-8U1mSgEw
          claim_id: c_cioBoHujBrtUhri6l6iKs_
          source_id: s_srpUv6HDULkEPHphVCTCIt
          stance: supports
          locator: CBDB：兄弟 王塤（198806）之父／母 王榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王境 与 王塤 为同胞（CBDB 记「兄」），王塤 之父／母即 王境 之父／母。
          source:
            id: s_srpUv6HDULkEPHphVCTCIt
            source_type: api_record
            title: 中国历代人物传记资料库：王境（CBDB 318907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318907&o=json
            external_identifier: CBDB:318907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hJ1QAW8UbdxEJ85GBLmUQf
        status: active
        display_name: 王境
        merged_into_person_id: null
    - claim:
        id: c_ZMCG2HmF8KRBhjgYdjc5cC
        subject_person_id: p_uKtEKuzL33Ns79oVfb6c8x
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_svYTME3LUctd1nQtzjScRb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6-NgK-bsmgKJSqUPkRqDEu
          claim_id: c_ZMCG2HmF8KRBhjgYdjc5cC
          source_id: s_aZ3V0SwjQmDYapwjTXyNt4
          stance: supports
          locator: CBDB：兄弟 王塤（198806）之父／母 王榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王塘 与 王塤 为同胞（CBDB 记「兄」），王塤 之父／母即 王塘 之父／母。
          source:
            id: s_aZ3V0SwjQmDYapwjTXyNt4
            source_type: api_record
            title: 中国历代人物传记资料库：王塘（CBDB 318918）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318918&o=json
            external_identifier: CBDB:318918
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_svYTME3LUctd1nQtzjScRb
        status: active
        display_name: 王塘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮 | accepted |
| bio.summary | 王榮，明人物。天順四年進士，籍贯許州。（中国历代人物传记资料库 CBDB 318840） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Mq4DjrJD3kuD51C35m7MXJ | 王塤 | accepted |
| children | p_4BLXyZCenGFGTpbxvtENEs | 王域 | accepted |
| children | p_ZWwwyZ4CZPwA7YuhKikuic | 王城 | accepted |
| children | p_hJ1QAW8UbdxEJ85GBLmUQf | 王境 | accepted |
| children | p_svYTME3LUctd1nQtzjScRb | 王塘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王城（CBDB 318896）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318896&o=json)
- [中国历代人物传记资料库：王境（CBDB 318907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318907&o=json)
- [中国历代人物传记资料库：王榮（CBDB 318840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318840&o=json)
- [中国历代人物传记资料库：王塘（CBDB 318918）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318918&o=json)
- [中国历代人物传记资料库：王域（CBDB 318885）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318885&o=json)

---
schema: wang-person/v1
id: p_Mq4DjrJD3kuD51C35m7MXJ
status: active
merged_into: null
display_name: 王塤
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GNNgMjeUXTaw5nGBXv6RLu
        subject_person_id: p_Mq4DjrJD3kuD51C35m7MXJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王塤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CAYJiPFourF8HL4Yk7pmbm
          claim_id: c_GNNgMjeUXTaw5nGBXv6RLu
          source_id: s_gNqH7p9mt33cEsoSQ6nuGN
          stance: supports
          locator: CBDB:198806
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198806）
          source: &a1
            id: s_gNqH7p9mt33cEsoSQ6nuGN
            source_type: api_record
            title: 中国历代人物传记资料库：王塤（CBDB 198806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198806&o=json
            external_identifier: CBDB:198806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.512Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_19zTsrgUGGJCvmP94XHmam
        subject_person_id: p_Mq4DjrJD3kuD51C35m7MXJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1425年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CBQQkAk6AQcDVzBV4uZ2sB
          claim_id: c_19zTsrgUGGJCvmP94XHmam
          source_id: s_gNqH7p9mt33cEsoSQ6nuGN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LQJ7S1NsyQvvJqJyLfDDqX
        subject_person_id: p_Mq4DjrJD3kuD51C35m7MXJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王塤（生于1425年），明人物。明清進士進士，籍贯許州，入仕進士。（中国历代人物传记资料库 CBDB 198806）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BwJHZUPJcgnxT_rJBot8nk
          claim_id: c_LQJ7S1NsyQvvJqJyLfDDqX
          source_id: s_gNqH7p9mt33cEsoSQ6nuGN
          stance: supports
          locator: CBDB:198806
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_uKtEKuzL33Ns79oVfb6c8x
        status: active
        display_name: 王榮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_18hRAip3Y8F8A0UHJfDL54
        subject_person_id: p_bZt4AajrjJuA5KbB2ngKB6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Mq4DjrJD3kuD51C35m7MXJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A6dxOUQ99SRRY2h-HWc9wf
          claim_id: c_18hRAip3Y8F8A0UHJfDL54
          source_id: s_sfmm5Y9sH44ZFHBfgi5LSL
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第四十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sfmm5Y9sH44ZFHBfgi5LSL
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 318829）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318829&o=json
            external_identifier: CBDB:318829
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.032Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bZt4AajrjJuA5KbB2ngKB6
        status: active
        display_name: 王信
        merged_into_person_id: null
    - claim:
        id: c_-SCyy9SRgabkwdKNLdanLV
        subject_person_id: p_JmqKuzTLQH2ynPZGYCBF49
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Mq4DjrJD3kuD51C35m7MXJ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KoddUTqQF1hPbTXuJvk93V
          claim_id: c_-SCyy9SRgabkwdKNLdanLV
          source_id: s_LFdBNAALanCX5wxpV6a9M8
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第四十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LFdBNAALanCX5wxpV6a9M8
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 318818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318818&o=json
            external_identifier: CBDB:318818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.031Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JmqKuzTLQH2ynPZGYCBF49
        status: active
        display_name: 王忠
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_PGYF_-O_ldxWW7EKLiD5Lv
        subject_person_id: p_4BLXyZCenGFGTpbxvtENEs
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Mq4DjrJD3kuD51C35m7MXJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MWyA6nXmpfR1_f4MMyGBYS
          claim_id: c_PGYF_-O_ldxWW7EKLiD5Lv
          source_id: s_RE_9jZkeCov6vuMCtZEy1b
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198806 王塤）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_3qa4lxWspNlOF7aFYM5tPg
        subject_person_id: p_Mq4DjrJD3kuD51C35m7MXJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZWwwyZ4CZPwA7YuhKikuic
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6s3aTaQLEa8jvyyGqG3FYy
          claim_id: c_3qa4lxWspNlOF7aFYM5tPg
          source_id: s_9V1B2OV7pKFAV1TT63Dhfs
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198806 王塤）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_JU_3Wuop35a_FOrSNTW_j5
        subject_person_id: p_Mq4DjrJD3kuD51C35m7MXJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hJ1QAW8UbdxEJ85GBLmUQf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WPewBThsY7mwbQDRDJot_6
          claim_id: c_JU_3Wuop35a_FOrSNTW_j5
          source_id: s_srpUv6HDULkEPHphVCTCIt
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198806 王塤）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_2yOOURwSKrNXcgywZ1AV7s
        subject_person_id: p_Mq4DjrJD3kuD51C35m7MXJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_svYTME3LUctd1nQtzjScRb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_12dHWcj1ux10ELoaT87fA8
          claim_id: c_2yOOURwSKrNXcgywZ1AV7s
          source_id: s_aZ3V0SwjQmDYapwjTXyNt4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198806 王塤）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王塤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王塤 | accepted |
| birth.date | 1425年 | accepted |
| bio.summary | 王塤（生于1425年），明人物。明清進士進士，籍贯許州，入仕進士。（中国历代人物传记资料库 CBDB 198806） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uKtEKuzL33Ns79oVfb6c8x | 王榮 | accepted |
| ancestors | p_bZt4AajrjJuA5KbB2ngKB6 | 王信 | accepted |
| ancestors | p_JmqKuzTLQH2ynPZGYCBF49 | 王忠 | accepted |
| other | p_4BLXyZCenGFGTpbxvtENEs | 王域 | accepted |
| other | p_ZWwwyZ4CZPwA7YuhKikuic | 王城 | accepted |
| other | p_hJ1QAW8UbdxEJ85GBLmUQf | 王境 | accepted |
| other | p_svYTME3LUctd1nQtzjScRb | 王塘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王城（CBDB 318896）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318896&o=json)
- [中国历代人物传记资料库：王境（CBDB 318907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318907&o=json)
- [中国历代人物传记资料库：王榮（CBDB 318840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318840&o=json)
- [中国历代人物传记资料库：王塘（CBDB 318918）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318918&o=json)
- [中国历代人物传记资料库：王信（CBDB 318829）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318829&o=json)
- [中国历代人物传记资料库：王塤（CBDB 198806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198806&o=json)
- [中国历代人物传记资料库：王域（CBDB 318885）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318885&o=json)
- [中国历代人物传记资料库：王忠（CBDB 318818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318818&o=json)

---
schema: wang-person/v1
id: p_WQELCyNtxHbkJD3Uq4LakB
status: active
merged_into: null
display_name: 王堯封
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A1r17cKkCivyjvGkm1V39D
        subject_person_id: p_WQELCyNtxHbkJD3Uq4LakB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯封
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SuBandvgbRKubeR7MHGN3D
          claim_id: c_A1r17cKkCivyjvGkm1V39D
          source_id: s_ZQ1oa6xtuenYqZdV9TD4VC
          stance: supports
          locator: CBDB:126716
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126716）
          source: &a1
            id: s_ZQ1oa6xtuenYqZdV9TD4VC
            source_type: api_record
            title: 中国历代人物传记资料库：王堯封（CBDB 126716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126716&o=json
            external_identifier: CBDB:126716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.149Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QBDNQcyTge4YDUTXJWxL1d
        subject_person_id: p_WQELCyNtxHbkJD3Uq4LakB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯封，明人物。明清進士進士，籍贯定興，入仕進士，曾任兵部尚書、副都御史、府推官。（中国历代人物传记资料库 CBDB 126716）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_o71uQeaHoZPE9lETbHVtkQ
          claim_id: c_QBDNQcyTge4YDUTXJWxL1d
          source_id: s_ZQ1oa6xtuenYqZdV9TD4VC
          stance: supports
          locator: CBDB:126716
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aR1RNMc-Sh-5ZBScubQmJh
        subject_person_id: p_iqf8z5vVDeG4f4cJMH52mk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WQELCyNtxHbkJD3Uq4LakB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8hfYGyR7xtg6FUyyHERJzA
          claim_id: c_aR1RNMc-Sh-5ZBScubQmJh
          source_id: s_VAK9jzjnKBAHdJh6ndKMBP
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第二十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VAK9jzjnKBAHdJh6ndKMBP
            source_type: api_record
            title: 中国历代人物传记资料库：王諒（CBDB 273830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273830&o=json
            external_identifier: CBDB:273830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.909Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iqf8z5vVDeG4f4cJMH52mk
        status: active
        display_name: 王諒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_pDoo-F4hLUiuxKaLh3nIa-
        subject_person_id: p_mPHsf6VHzJt1o5uC9iYCJS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WQELCyNtxHbkJD3Uq4LakB
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NPUugZ6AU6N5eMq8AIkYgj
          claim_id: c_pDoo-F4hLUiuxKaLh3nIa-
          source_id: s_AcSW794C97fH2MwBqGFNPM
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第二十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AcSW794C97fH2MwBqGFNPM
            source_type: api_record
            title: 中国历代人物传记资料库：王興（CBDB 273827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273827&o=json
            external_identifier: CBDB:273827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.909Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mPHsf6VHzJt1o5uC9iYCJS
        status: active
        display_name: 王興
        merged_into_person_id: null
    - claim:
        id: c_l5j12_7eHa9ngZ0wS9cS43
        subject_person_id: p_EiHTYbCwNgFcHn8XwhbjFh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WQELCyNtxHbkJD3Uq4LakB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L8Mn_PlcjgbKIuGXm7BY0x
          claim_id: c_l5j12_7eHa9ngZ0wS9cS43
          source_id: s_LkPn9LoimCMJu9HKvJ9vQ5
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第二十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LkPn9LoimCMJu9HKvJ9vQ5
            source_type: api_record
            title: 中国历代人物传记资料库：王得辛（CBDB 273829）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273829&o=json
            external_identifier: CBDB:273829
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_EiHTYbCwNgFcHn8XwhbjFh
        status: active
        display_name: 王得辛
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_UvuWtcKk7KelGM_bDDQKJz
        subject_person_id: p_1iyy2sTfBKuMdfrTjqyFBP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WQELCyNtxHbkJD3Uq4LakB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZNJM1VqhTcCanNvO0ccIhZ
          claim_id: c_UvuWtcKk7KelGM_bDDQKJz
          source_id: s_YB-n9Jtw4txEJ8TR49lnwJ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126716 王堯封）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YB-n9Jtw4txEJ8TR49lnwJ
            source_type: api_record
            title: 中国历代人物传记资料库：王堯卿（CBDB 273833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273833&o=json
            external_identifier: CBDB:273833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1iyy2sTfBKuMdfrTjqyFBP
        status: active
        display_name: 王堯卿
        merged_into_person_id: null
    - claim:
        id: c_JxYP_x5BhUuRFFgmzWWnn4
        subject_person_id: p_6es6XQ9pfmNf8BVum2oix6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WQELCyNtxHbkJD3Uq4LakB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ekDXLXpXJbvbnKFOVmQA5b
          claim_id: c_JxYP_x5BhUuRFFgmzWWnn4
          source_id: s_6zbUhNwFxz53AvyB0Xv3MS
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126716 王堯封）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6zbUhNwFxz53AvyB0Xv3MS
            source_type: api_record
            title: 中国历代人物传记资料库：王堯咨（CBDB 273834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273834&o=json
            external_identifier: CBDB:273834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6es6XQ9pfmNf8BVum2oix6
        status: active
        display_name: 王堯咨
        merged_into_person_id: null
---

# 王堯封

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堯封 | accepted |
| bio.summary | 王堯封，明人物。明清進士進士，籍贯定興，入仕進士，曾任兵部尚書、副都御史、府推官。（中国历代人物传记资料库 CBDB 126716） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iqf8z5vVDeG4f4cJMH52mk | 王諒 | accepted |
| ancestors | p_mPHsf6VHzJt1o5uC9iYCJS | 王興 | accepted |
| ancestors | p_EiHTYbCwNgFcHn8XwhbjFh | 王得辛 | accepted |
| other | p_1iyy2sTfBKuMdfrTjqyFBP | 王堯卿 | accepted |
| other | p_6es6XQ9pfmNf8BVum2oix6 | 王堯咨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王得辛（CBDB 273829）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273829&o=json)
- [中国历代人物传记资料库：王諒（CBDB 273830）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273830&o=json)
- [中国历代人物传记资料库：王興（CBDB 273827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273827&o=json)
- [中国历代人物传记资料库：王堯封（CBDB 126716）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126716&o=json)
- [中国历代人物传记资料库：王堯卿（CBDB 273833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273833&o=json)
- [中国历代人物传记资料库：王堯咨（CBDB 273834）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273834&o=json)

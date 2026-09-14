---
schema: wang-person/v1
id: p_D1pWDsHWNd5wRUwygKh8wV
status: active
merged_into: null
display_name: 王三餘
cbdb_id: 126452
revision: 7
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T7rvAT5vhqYH24KkB7Wpr8
        subject_person_id: p_D1pWDsHWNd5wRUwygKh8wV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三餘，明人物。明清進士進士，籍贯安平，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 126452）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_np97aNshqgZjxFh0hZ30hF
          claim_id: c_T7rvAT5vhqYH24KkB7Wpr8
          source_id: s_ykLTZ4fenQDoggY7N55tnM
          stance: supports
          locator: CBDB:126452
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ykLTZ4fenQDoggY7N55tnM
            source_type: api_record
            title: 中国历代人物传记资料库：王三餘（CBDB 126452）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126452&o=json
            external_identifier: CBDB:126452
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fd1P4oZEqAEPHbUGTqgP2w
        subject_person_id: p_D1pWDsHWNd5wRUwygKh8wV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三餘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_v3bazMRz9nNSbT6KNr5wSr
          claim_id: c_Fd1P4oZEqAEPHbUGTqgP2w
          source_id: s_ykLTZ4fenQDoggY7N55tnM
          stance: supports
          locator: CBDB:126452
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ujeiQU1mGhPXS11WrbzFFP
        subject_person_id: p_NMZVjztWKmHmBJ3VeqqESt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D1pWDsHWNd5wRUwygKh8wV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yvTmrClVjv0u7dbzQVqN02
          claim_id: c_ujeiQU1mGhPXS11WrbzFFP
          source_id: s_xAEVe87o3biD33g4CLb25Y
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百二十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xAEVe87o3biD33g4CLb25Y
            source_type: api_record
            title: 中国历代人物传记资料库：王遜（CBDB 214400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214400&o=json
            external_identifier: CBDB:214400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.158Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NMZVjztWKmHmBJ3VeqqESt
        status: active
        display_name: 王遜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_p4kOqH25BY-JjhDNXwhWec
        subject_person_id: p_HFYLoGj9XA7izk92Amt8wf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_D1pWDsHWNd5wRUwygKh8wV
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dckEt0vZ-BYwMFKa4OXXBH
          claim_id: c_p4kOqH25BY-JjhDNXwhWec
          source_id: s_7SVHQWTaRvsDKUgykqg2us
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百二十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7SVHQWTaRvsDKUgykqg2us
            source_type: api_record
            title: 中国历代人物传记资料库：王讓（CBDB 214398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214398&o=json
            external_identifier: CBDB:214398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.157Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HFYLoGj9XA7izk92Amt8wf
        status: active
        display_name: 王讓
        merged_into_person_id: null
    - claim:
        id: c_DGgoB1ksBAeniSP6mlIvgy
        subject_person_id: p_zgCLZQVjSkLuQQqYEkm7ze
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_D1pWDsHWNd5wRUwygKh8wV
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__EwSA8MylU7YeWVHC5b9uN
          claim_id: c_DGgoB1ksBAeniSP6mlIvgy
          source_id: s_DhDLPqwJDh1gerD4dGYiZH
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百二十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DhDLPqwJDh1gerD4dGYiZH
            source_type: api_record
            title: 中国历代人物传记资料库：王質（CBDB 214399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214399&o=json
            external_identifier: CBDB:214399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.158Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zgCLZQVjSkLuQQqYEkm7ze
        status: active
        display_name: 王質
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_dzcmeVBeDurVEiRbqVi2YD
        subject_person_id: p_D1pWDsHWNd5wRUwygKh8wV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ENcN1JP5Ttz5sbf9M3tXox
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tHdM0mB1RSPRRNgOfa_xlV
          claim_id: c_dzcmeVBeDurVEiRbqVi2YD
          source_id: s_Fu_xgZE6uKlmlYUAxqVGw_
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126452 王三餘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Fu_xgZE6uKlmlYUAxqVGw_
            source_type: api_record
            title: 中国历代人物传记资料库：王三壽（CBDB 214406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214406&o=json
            external_identifier: CBDB:214406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ENcN1JP5Ttz5sbf9M3tXox
        status: active
        display_name: 王三壽
        merged_into_person_id: null
    - claim:
        id: c_ScrUnCfSHpTl9NyIWhsvmh
        subject_person_id: p_D1pWDsHWNd5wRUwygKh8wV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JdFR8yxrtP83oNDQKZ1JW5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qQI0gT-KeH-gKzMsMR4GZX
          claim_id: c_ScrUnCfSHpTl9NyIWhsvmh
          source_id: s_ryCewhe7TgUtlT8PbBwhFF
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126452 王三餘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ryCewhe7TgUtlT8PbBwhFF
            source_type: api_record
            title: 中国历代人物传记资料库：王三格（CBDB 214405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214405&o=json
            external_identifier: CBDB:214405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JdFR8yxrtP83oNDQKZ1JW5
        status: active
        display_name: 王三格
        merged_into_person_id: null
    - claim:
        id: c_EXHKpI4BpmgRl6uDPax8mt
        subject_person_id: p_D1pWDsHWNd5wRUwygKh8wV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dv36oyXFxRvxb1Eg33EeR8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fvT18u_zcdtIyf5Bq3XSjM
          claim_id: c_EXHKpI4BpmgRl6uDPax8mt
          source_id: s_WKV1S2wSWegyYENE4YUfhe
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126452 王三餘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WKV1S2wSWegyYENE4YUfhe
            source_type: api_record
            title: 中国历代人物传记资料库：王三槐（CBDB 214404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214404&o=json
            external_identifier: CBDB:214404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dv36oyXFxRvxb1Eg33EeR8
        status: active
        display_name: 王三槐
        merged_into_person_id: null
---

# 王三餘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王三餘，明人物。明清進士進士，籍贯安平，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 126452） | accepted |
| name.primary | 王三餘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NMZVjztWKmHmBJ3VeqqESt | 王遜 | accepted |
| ancestors | p_HFYLoGj9XA7izk92Amt8wf | 王讓 | accepted |
| ancestors | p_zgCLZQVjSkLuQQqYEkm7ze | 王質 | accepted |
| other | p_ENcN1JP5Ttz5sbf9M3tXox | 王三壽 | accepted |
| other | p_JdFR8yxrtP83oNDQKZ1JW5 | 王三格 | accepted |
| other | p_dv36oyXFxRvxb1Eg33EeR8 | 王三槐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王讓（CBDB 214398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214398&o=json)
- [中国历代人物传记资料库：王三格（CBDB 214405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214405&o=json)
- [中国历代人物传记资料库：王三槐（CBDB 214404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214404&o=json)
- [中国历代人物传记资料库：王三壽（CBDB 214406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214406&o=json)
- [中国历代人物传记资料库：王三餘（CBDB 126452）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126452&o=json)
- [中国历代人物传记资料库：王遜（CBDB 214400）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214400&o=json)
- [中国历代人物传记资料库：王質（CBDB 214399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214399&o=json)

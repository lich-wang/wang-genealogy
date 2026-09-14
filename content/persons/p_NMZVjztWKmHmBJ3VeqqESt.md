---
schema: wang-person/v1
id: p_NMZVjztWKmHmBJ3VeqqESt
status: active
merged_into: null
display_name: 王遜
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_67o46c7PcD9npJmYczhM8D
        subject_person_id: p_NMZVjztWKmHmBJ3VeqqESt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7DyutBi7fB2T6J8y3cFmv2
          claim_id: c_67o46c7PcD9npJmYczhM8D
          source_id: s_xAEVe87o3biD33g4CLb25Y
          stance: supports
          locator: CBDB:214400
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（214400）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CwXNu1DsGLAPFJGSKnimL7
        subject_person_id: p_NMZVjztWKmHmBJ3VeqqESt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遜，明人物。萬曆二年進士，籍贯安平，曾任訓導。（中国历代人物传记资料库 CBDB 214400）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EV6k1fGMJjHicxaUznO_3A
          claim_id: c_CwXNu1DsGLAPFJGSKnimL7
          source_id: s_xAEVe87o3biD33g4CLb25Y
          stance: supports
          locator: CBDB:214400
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_D1pWDsHWNd5wRUwygKh8wV
        status: active
        display_name: 王三餘
        merged_into_person_id: null
    - claim:
        id: c_3hb3f5WMfdky_20erAt2G3
        subject_person_id: p_NMZVjztWKmHmBJ3VeqqESt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ENcN1JP5Ttz5sbf9M3tXox
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_afrIkAYiNFu9Mm4WF84oEv
          claim_id: c_3hb3f5WMfdky_20erAt2G3
          source_id: s_Fu_xgZE6uKlmlYUAxqVGw_
          stance: supports
          locator: CBDB：兄弟 王三餘（126452）之父／母 王遜
          quotation: null
          interpretation_note: 由兄弟关系推断：王三壽 与 王三餘 为同胞（CBDB 记「弟」），王三餘 之父／母即 王三壽 之父／母。
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
        id: c_NjsSmOLNJVA6bloUsSRnIw
        subject_person_id: p_NMZVjztWKmHmBJ3VeqqESt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JdFR8yxrtP83oNDQKZ1JW5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I3VaJW3Vd9KyMGVA7KIJVu
          claim_id: c_NjsSmOLNJVA6bloUsSRnIw
          source_id: s_ryCewhe7TgUtlT8PbBwhFF
          stance: supports
          locator: CBDB：兄弟 王三餘（126452）之父／母 王遜
          quotation: null
          interpretation_note: 由兄弟关系推断：王三格 与 王三餘 为同胞（CBDB 记「弟」），王三餘 之父／母即 王三格 之父／母。
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
        id: c_lNEe6v44XrGz1x9qonyTPk
        subject_person_id: p_NMZVjztWKmHmBJ3VeqqESt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dv36oyXFxRvxb1Eg33EeR8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_969hkEQ2Tn_L8Fs1YidYRE
          claim_id: c_lNEe6v44XrGz1x9qonyTPk
          source_id: s_WKV1S2wSWegyYENE4YUfhe
          stance: supports
          locator: CBDB：兄弟 王三餘（126452）之父／母 王遜
          quotation: null
          interpretation_note: 由兄弟关系推断：王三槐 与 王三餘 为同胞（CBDB 记「弟」），王三餘 之父／母即 王三槐 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王遜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遜 | accepted |
| bio.summary | 王遜，明人物。萬曆二年進士，籍贯安平，曾任訓導。（中国历代人物传记资料库 CBDB 214400） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_D1pWDsHWNd5wRUwygKh8wV | 王三餘 | accepted |
| children | p_ENcN1JP5Ttz5sbf9M3tXox | 王三壽 | accepted |
| children | p_JdFR8yxrtP83oNDQKZ1JW5 | 王三格 | accepted |
| children | p_dv36oyXFxRvxb1Eg33EeR8 | 王三槐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三格（CBDB 214405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214405&o=json)
- [中国历代人物传记资料库：王三槐（CBDB 214404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214404&o=json)
- [中国历代人物传记资料库：王三壽（CBDB 214406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214406&o=json)
- [中国历代人物传记资料库：王遜（CBDB 214400）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214400&o=json)

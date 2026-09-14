---
schema: wang-person/v1
id: p_URk2BrLDKqiyhHZQPHt91g
status: active
merged_into: null
display_name: 王貴
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HNHcwKrCGws14uK5BTBiA4
        subject_person_id: p_URk2BrLDKqiyhHZQPHt91g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L3EGBp1gipMqQNa2vsz3Nj
          claim_id: c_HNHcwKrCGws14uK5BTBiA4
          source_id: s_Vc6cNcWdaXraSupbQx5sXp
          stance: supports
          locator: CBDB:265668
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265668）
          source: &a1
            id: s_Vc6cNcWdaXraSupbQx5sXp
            source_type: api_record
            title: 中国历代人物传记资料库：王貴（CBDB 265668）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265668&o=json
            external_identifier: CBDB:265668
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.696Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8PmEmPP97nwhDDRJubcges
        subject_person_id: p_URk2BrLDKqiyhHZQPHt91g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴，明人物。弘治六年進士，籍贯衡陽。（中国历代人物传记资料库 CBDB 265668）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zv3ECvzCPrIv7CwVmpe1Wp
          claim_id: c_8PmEmPP97nwhDDRJubcges
          source_id: s_Vc6cNcWdaXraSupbQx5sXp
          stance: supports
          locator: CBDB:265668
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_EWZvwX3aecOPL1E4sXJzzi
        subject_person_id: p_URk2BrLDKqiyhHZQPHt91g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EoJk1Y5s39yxBJTaiKbEQe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p6yqU9aBKMuAfGbUZvUkQx
          claim_id: c_EWZvwX3aecOPL1E4sXJzzi
          source_id: s_c86NwDAvjxnvgHHxfBCn5p
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第九十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_c86NwDAvjxnvgHHxfBCn5p
            source_type: api_record
            title: 中国历代人物传记资料库：王昊（CBDB 200990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200990&o=json
            external_identifier: CBDB:200990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.649Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EoJk1Y5s39yxBJTaiKbEQe
        status: active
        display_name: 王昊
        merged_into_person_id: null
    - claim:
        id: c_gSH7jSN3Vu1Z2roslhjM3h
        subject_person_id: p_URk2BrLDKqiyhHZQPHt91g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6M4HVWJcfPdnrou8i4MDus
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FT6sKi9f8Yi3Xkn-KPFRQf
          claim_id: c_gSH7jSN3Vu1Z2roslhjM3h
          source_id: s_hvuEDm6Hjf5BGQCMzJhLPq
          stance: supports
          locator: CBDB：兄弟 王昊（200990）之父／母 王貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王潮 与 王昊 为同胞（CBDB 记「弟」），王昊 之父／母即 王潮 之父／母。
          source:
            id: s_hvuEDm6Hjf5BGQCMzJhLPq
            source_type: api_record
            title: 中国历代人物传记资料库：王潮（CBDB 265674）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265674&o=json
            external_identifier: CBDB:265674
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6M4HVWJcfPdnrou8i4MDus
        status: active
        display_name: 王潮
        merged_into_person_id: null
    - claim:
        id: c_hNb0XpsloIfqAklaav-9l8
        subject_person_id: p_URk2BrLDKqiyhHZQPHt91g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GpCeMqr77DJz3vuKGSCddh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BgnHo_f8rBABQrWjwWJlj-
          claim_id: c_hNb0XpsloIfqAklaav-9l8
          source_id: s_pCtIJw5FwRujEHVNvmHFAL
          stance: supports
          locator: CBDB：兄弟 王昊（200990）之父／母 王貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王洪 与 王昊 为同胞（CBDB 记「弟」），王昊 之父／母即 王洪 之父／母。
          source:
            id: s_pCtIJw5FwRujEHVNvmHFAL
            source_type: api_record
            title: 中国历代人物传记资料库：王洪（CBDB 265672）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265672&o=json
            external_identifier: CBDB:265672
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GpCeMqr77DJz3vuKGSCddh
        status: active
        display_name: 王洪
        merged_into_person_id: null
    - claim:
        id: c_SUm8ep6jy1s4Gyru-58GmD
        subject_person_id: p_URk2BrLDKqiyhHZQPHt91g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PCHc8haH6HepKbDig5Gxtg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MIcVuf7SCysjywzPqWWJ3h
          claim_id: c_SUm8ep6jy1s4Gyru-58GmD
          source_id: s_6ObIC9Hr6_Zw2SujSQsg6C
          stance: supports
          locator: CBDB：兄弟 王昊（200990）之父／母 王貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王潤 与 王昊 为同胞（CBDB 记「兄」），王昊 之父／母即 王潤 之父／母。
          source:
            id: s_6ObIC9Hr6_Zw2SujSQsg6C
            source_type: api_record
            title: 中国历代人物传记资料库：王潤（CBDB 265675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265675&o=json
            external_identifier: CBDB:265675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PCHc8haH6HepKbDig5Gxtg
        status: active
        display_name: 王潤
        merged_into_person_id: null
    - claim:
        id: c_Bxi0oxkXXK0eaYed3aUOjx
        subject_person_id: p_URk2BrLDKqiyhHZQPHt91g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_X8FVL1x3K1cGDDJ4h9uCZs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EM5anbAEWnwbLNl3Pu-iCx
          claim_id: c_Bxi0oxkXXK0eaYed3aUOjx
          source_id: s_0e0UX0T_niKpzhxVXUzpG4
          stance: supports
          locator: CBDB：兄弟 王昊（200990）之父／母 王貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王湖 与 王昊 为同胞（CBDB 记「弟」），王昊 之父／母即 王湖 之父／母。
          source:
            id: s_0e0UX0T_niKpzhxVXUzpG4
            source_type: api_record
            title: 中国历代人物传记资料库：王湖（CBDB 265673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265673&o=json
            external_identifier: CBDB:265673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_X8FVL1x3K1cGDDJ4h9uCZs
        status: active
        display_name: 王湖
        merged_into_person_id: null
    - claim:
        id: c_NNvd6SY7ofoTyXdONUG7Q_
        subject_person_id: p_URk2BrLDKqiyhHZQPHt91g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zeW711oJeLWgrfVdMmfSUw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8tGeGp-UPxa1GHqWf2zQfq
          claim_id: c_NNvd6SY7ofoTyXdONUG7Q_
          source_id: s_oWGic9cG1wEucdX4-dLtDy
          stance: supports
          locator: CBDB：兄弟 王昊（200990）之父／母 王貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王澗 与 王昊 为同胞（CBDB 记「兄」），王昊 之父／母即 王澗 之父／母。
          source:
            id: s_oWGic9cG1wEucdX4-dLtDy
            source_type: api_record
            title: 中国历代人物传记资料库：王澗（CBDB 265676）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265676&o=json
            external_identifier: CBDB:265676
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zeW711oJeLWgrfVdMmfSUw
        status: active
        display_name: 王澗
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貴 | accepted |
| bio.summary | 王貴，明人物。弘治六年進士，籍贯衡陽。（中国历代人物传记资料库 CBDB 265668） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_EoJk1Y5s39yxBJTaiKbEQe | 王昊 | accepted |
| children | p_6M4HVWJcfPdnrou8i4MDus | 王潮 | accepted |
| children | p_GpCeMqr77DJz3vuKGSCddh | 王洪 | accepted |
| children | p_PCHc8haH6HepKbDig5Gxtg | 王潤 | accepted |
| children | p_X8FVL1x3K1cGDDJ4h9uCZs | 王湖 | accepted |
| children | p_zeW711oJeLWgrfVdMmfSUw | 王澗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王潮（CBDB 265674）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265674&o=json)
- [中国历代人物传记资料库：王貴（CBDB 265668）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265668&o=json)
- [中国历代人物传记资料库：王昊（CBDB 200990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200990&o=json)
- [中国历代人物传记资料库：王洪（CBDB 265672）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265672&o=json)
- [中国历代人物传记资料库：王湖（CBDB 265673）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265673&o=json)
- [中国历代人物传记资料库：王澗（CBDB 265676）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265676&o=json)
- [中国历代人物传记资料库：王潤（CBDB 265675）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265675&o=json)

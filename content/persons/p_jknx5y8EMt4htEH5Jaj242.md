---
schema: wang-person/v1
id: p_jknx5y8EMt4htEH5Jaj242
status: active
merged_into: null
display_name: 王獻箴
cbdb_id: 212076
revision: 6
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n36if1togBcF9rsDa6EzDP
        subject_person_id: p_jknx5y8EMt4htEH5Jaj242
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻箴，明人物。隆慶五年進士，籍贯咸寧，曾任判官。（中国历代人物传记资料库 CBDB 212076）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_qesSuhuV1tC3gcVffufYd0
          claim_id: c_n36if1togBcF9rsDa6EzDP
          source_id: s_ydgB8BsKyBiJfFFWa8Pi4B
          stance: supports
          locator: CBDB:212076
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ydgB8BsKyBiJfFFWa8Pi4B
            source_type: api_record
            title: 中国历代人物传记资料库：王獻箴（CBDB 212076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212076&o=json
            external_identifier: CBDB:212076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jk64hP4XMiypjLxFZ9qC6G
        subject_person_id: p_jknx5y8EMt4htEH5Jaj242
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻箴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_c7jEWN4mjcQ3RXX4VEY6qu
          claim_id: c_Jk64hP4XMiypjLxFZ9qC6G
          source_id: s_ydgB8BsKyBiJfFFWa8Pi4B
          stance: supports
          locator: CBDB:212076
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_eRmuj6ClTWKqMKstrNZk8X
        subject_person_id: p_jknx5y8EMt4htEH5Jaj242
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1XLNfRiDAQG1jeNLog7rHV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cTmtCwnKYq9yVtxn25KT3c
          claim_id: c_eRmuj6ClTWKqMKstrNZk8X
          source_id: s_45JC3rMvbrBETLdFp221Ko
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百九十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_45JC3rMvbrBETLdFp221Ko
            source_type: api_record
            title: 中国历代人物传记资料库：王煥（CBDB 206011）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206011&o=json
            external_identifier: CBDB:206011
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1XLNfRiDAQG1jeNLog7rHV
        status: active
        display_name: 王煥
        merged_into_person_id: null
    - claim:
        id: c_gHR737eyH0DStTu0RIyYWM
        subject_person_id: p_jknx5y8EMt4htEH5Jaj242
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1FKhqcGYVs5rmbsoiupsCV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NHA57r-O6oP8Pz8pj7rQHM
          claim_id: c_gHR737eyH0DStTu0RIyYWM
          source_id: s_bUjktyll65M4PRS11XluPE
          stance: supports
          locator: CBDB：兄弟 王煥（206011）之父／母 王獻箴
          quotation: null
          interpretation_note: 由兄弟关系推断：王燦 与 王煥 为同胞（CBDB 记「兄」），王煥 之父／母即 王燦 之父／母。
          source:
            id: s_bUjktyll65M4PRS11XluPE
            source_type: api_record
            title: 中国历代人物传记资料库：王燦（CBDB 212083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212083&o=json
            external_identifier: CBDB:212083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1FKhqcGYVs5rmbsoiupsCV
        status: active
        display_name: 王燦
        merged_into_person_id: null
    - claim:
        id: c_KhGyMaCz7_x8rehefMLsTS
        subject_person_id: p_jknx5y8EMt4htEH5Jaj242
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_32EMVaGAfBPgDeQdJGDuHq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5vGXw7Gca0d-AZU9jstiIi
          claim_id: c_KhGyMaCz7_x8rehefMLsTS
          source_id: s__UkbvMrrg7a5WnM2RkczAD
          stance: supports
          locator: CBDB：兄弟 王煥（206011）之父／母 王獻箴
          quotation: null
          interpretation_note: 由兄弟关系推断：王曾 与 王煥 为同胞（CBDB 记「兄」），王煥 之父／母即 王曾 之父／母。
          source:
            id: s__UkbvMrrg7a5WnM2RkczAD
            source_type: api_record
            title: 中国历代人物传记资料库：王曾（CBDB 212082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212082&o=json
            external_identifier: CBDB:212082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_32EMVaGAfBPgDeQdJGDuHq
        status: active
        display_name: 王曾
        merged_into_person_id: null
    - claim:
        id: c__sElFxNvARvNrzm2u_FH4U
        subject_person_id: p_jknx5y8EMt4htEH5Jaj242
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MQiW44QzS4C75gfByfDNP1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__7wsiB_IAIiQ8DzFlWPdUs
          claim_id: c__sElFxNvARvNrzm2u_FH4U
          source_id: s__nPJlc1-OAZp0IAOMmjcMN
          stance: supports
          locator: CBDB：兄弟 王煥（206011）之父／母 王獻箴
          quotation: null
          interpretation_note: 由兄弟关系推断：王煉 与 王煥 为同胞（CBDB 记「兄」），王煥 之父／母即 王煉 之父／母。
          source:
            id: s__nPJlc1-OAZp0IAOMmjcMN
            source_type: api_record
            title: 中国历代人物传记资料库：王煉（CBDB 212080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212080&o=json
            external_identifier: CBDB:212080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MQiW44QzS4C75gfByfDNP1
        status: active
        display_name: 王煉
        merged_into_person_id: null
    - claim:
        id: c_i9VBWvGxKzv7Rd9jaIe5Ml
        subject_person_id: p_jknx5y8EMt4htEH5Jaj242
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fm6AmpL9wzWdVb22pFsyzn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6QHpegeQsATSsPtGIKjTgB
          claim_id: c_i9VBWvGxKzv7Rd9jaIe5Ml
          source_id: s_ZJ_ZNjimwfI20YS46i3Si4
          stance: supports
          locator: CBDB：兄弟 王煥（206011）之父／母 王獻箴
          quotation: null
          interpretation_note: 由兄弟关系推断：王爚 与 王煥 为同胞（CBDB 记「兄」），王煥 之父／母即 王爚 之父／母。
          source:
            id: s_ZJ_ZNjimwfI20YS46i3Si4
            source_type: api_record
            title: 中国历代人物传记资料库：王爚（CBDB 212079）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212079&o=json
            external_identifier: CBDB:212079
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fm6AmpL9wzWdVb22pFsyzn
        status: active
        display_name: 王爚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王獻箴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王獻箴，明人物。隆慶五年進士，籍贯咸寧，曾任判官。（中国历代人物传记资料库 CBDB 212076） | accepted |
| name.primary | 王獻箴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_1XLNfRiDAQG1jeNLog7rHV | 王煥 | accepted |
| children | p_1FKhqcGYVs5rmbsoiupsCV | 王燦 | accepted |
| children | p_32EMVaGAfBPgDeQdJGDuHq | 王曾 | accepted |
| children | p_MQiW44QzS4C75gfByfDNP1 | 王煉 | accepted |
| children | p_fm6AmpL9wzWdVb22pFsyzn | 王爚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王燦（CBDB 212083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212083&o=json)
- [中国历代人物传记资料库：王曾（CBDB 212082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212082&o=json)
- [中国历代人物传记资料库：王煥（CBDB 206011）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206011&o=json)
- [中国历代人物传记资料库：王煉（CBDB 212080）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212080&o=json)
- [中国历代人物传记资料库：王獻箴（CBDB 212076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212076&o=json)
- [中国历代人物传记资料库：王爚（CBDB 212079）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212079&o=json)

---
schema: wang-person/v1
id: p_NF9HbHTtZ8ow78qFYfTJ3z
status: active
merged_into: null
display_name: 王傳
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dQwArTzPjmwjRgoc6cyDMT
        subject_person_id: p_NF9HbHTtZ8ow78qFYfTJ3z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pa2CFMBfQPA8td4rYVyuhQ
          claim_id: c_dQwArTzPjmwjRgoc6cyDMT
          source_id: s_Ny7BuFfUk3DwZJkUqqTWqP
          stance: supports
          locator: CBDB:219540
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（219540）
          source: &a1
            id: s_Ny7BuFfUk3DwZJkUqqTWqP
            source_type: api_record
            title: 中国历代人物传记资料库：王傳（CBDB 219540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219540&o=json
            external_identifier: CBDB:219540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.285Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F9Lq9Q4FmYwj3h74iTebF3
        subject_person_id: p_NF9HbHTtZ8ow78qFYfTJ3z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傳，明人物。萬曆八年進士，籍贯朝邑，曾任知縣。（中国历代人物传记资料库 CBDB 219540）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_neNo8qHwqf4xqVXALM080J
          claim_id: c_F9Lq9Q4FmYwj3h74iTebF3
          source_id: s_Ny7BuFfUk3DwZJkUqqTWqP
          stance: supports
          locator: CBDB:219540
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_xf7F92KJ52scWWVDz5ThWY
        subject_person_id: p_NF9HbHTtZ8ow78qFYfTJ3z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tEHS6YSuyxSKL9JTr26FoR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jwqcHgvnOwCf2QlbcpT_pk
          claim_id: c_xf7F92KJ52scWWVDz5ThWY
          source_id: s_Ny7BuFfUk3DwZJkUqqTWqP
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tEHS6YSuyxSKL9JTr26FoR
        status: active
        display_name: 王嗣美
        merged_into_person_id: null
    - claim:
        id: c_OK7wldT6zr34AsWwEetndM
        subject_person_id: p_NF9HbHTtZ8ow78qFYfTJ3z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3Z1Mv3WDcPuC8YgCUj1m1E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R7M1CdSyPzNbc1fYDm3bzX
          claim_id: c_OK7wldT6zr34AsWwEetndM
          source_id: s_eZFkohyq8mMja-P3P0wTBq
          stance: supports
          locator: CBDB：兄弟 王嗣美（206544）之父／母 王傳
          quotation: null
          interpretation_note: 由兄弟关系推断：王嗣初 与 王嗣美 为同胞（CBDB 记「弟」），王嗣美 之父／母即 王嗣初 之父／母。
          source:
            id: s_eZFkohyq8mMja-P3P0wTBq
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣初（CBDB 219543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219543&o=json
            external_identifier: CBDB:219543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3Z1Mv3WDcPuC8YgCUj1m1E
        status: active
        display_name: 王嗣初
        merged_into_person_id: null
    - claim:
        id: c_qwzWZvSISWS1-7cd0Nsys3
        subject_person_id: p_NF9HbHTtZ8ow78qFYfTJ3z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EjgKZosseJbMoFKBB2G7JA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QR0Xs3FnSvftpfDl4qR-Fs
          claim_id: c_qwzWZvSISWS1-7cd0Nsys3
          source_id: s_Goo0QP4ZBRmiv1PoHvV01p
          stance: supports
          locator: CBDB：兄弟 王嗣美（206544）之父／母 王傳
          quotation: null
          interpretation_note: 由兄弟关系推断：王嗣中 与 王嗣美 为同胞（CBDB 记「弟」），王嗣美 之父／母即 王嗣中 之父／母。
          source:
            id: s_Goo0QP4ZBRmiv1PoHvV01p
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣中（CBDB 219544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219544&o=json
            external_identifier: CBDB:219544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EjgKZosseJbMoFKBB2G7JA
        status: active
        display_name: 王嗣中
        merged_into_person_id: null
    - claim:
        id: c_B5ZqdwBNO_akTiD7wH_qhw
        subject_person_id: p_NF9HbHTtZ8ow78qFYfTJ3z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HM8p3xaLtLNroHFt1TRx1Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aGN6AZp0fG4FQi4m0R9ASG
          claim_id: c_B5ZqdwBNO_akTiD7wH_qhw
          source_id: s_Ahh6RPLHfUwnAfl6RQaWnq
          stance: supports
          locator: CBDB：兄弟 王嗣美（206544）之父／母 王傳
          quotation: null
          interpretation_note: 由兄弟关系推断：王嗣蕃 与 王嗣美 为同胞（CBDB 记「弟」），王嗣美 之父／母即 王嗣蕃 之父／母。
          source:
            id: s_Ahh6RPLHfUwnAfl6RQaWnq
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣蕃（CBDB 219545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219545&o=json
            external_identifier: CBDB:219545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HM8p3xaLtLNroHFt1TRx1Q
        status: active
        display_name: 王嗣蕃
        merged_into_person_id: null
    - claim:
        id: c_qZI1UdGRTSsZR9oel1NFCW
        subject_person_id: p_NF9HbHTtZ8ow78qFYfTJ3z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vp3nFAeimwgDEaLu3yhdvL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V0YktuhksMQJR9KflW8KFX
          claim_id: c_qZI1UdGRTSsZR9oel1NFCW
          source_id: s_5Gp8jOxvad4dpX5j6JZ1dL
          stance: supports
          locator: CBDB：兄弟 王嗣美（206544）之父／母 王傳
          quotation: null
          interpretation_note: 由兄弟关系推断：王嗣盛 与 王嗣美 为同胞（CBDB 记「兄」），王嗣美 之父／母即 王嗣盛 之父／母。
          source:
            id: s_5Gp8jOxvad4dpX5j6JZ1dL
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣盛（CBDB 219546）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219546&o=json
            external_identifier: CBDB:219546
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vp3nFAeimwgDEaLu3yhdvL
        status: active
        display_name: 王嗣盛
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王傳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傳 | accepted |
| bio.summary | 王傳，明人物。萬曆八年進士，籍贯朝邑，曾任知縣。（中国历代人物传记资料库 CBDB 219540） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_tEHS6YSuyxSKL9JTr26FoR | 王嗣美 | accepted |
| children | p_3Z1Mv3WDcPuC8YgCUj1m1E | 王嗣初 | accepted |
| children | p_EjgKZosseJbMoFKBB2G7JA | 王嗣中 | accepted |
| children | p_HM8p3xaLtLNroHFt1TRx1Q | 王嗣蕃 | accepted |
| children | p_vp3nFAeimwgDEaLu3yhdvL | 王嗣盛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傳（CBDB 219540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219540&o=json)
- [中国历代人物传记资料库：王嗣蕃（CBDB 219545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219545&o=json)
- [中国历代人物传记资料库：王嗣初（CBDB 219543）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219543&o=json)
- [中国历代人物传记资料库：王嗣盛（CBDB 219546）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219546&o=json)
- [中国历代人物传记资料库：王嗣中（CBDB 219544）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219544&o=json)

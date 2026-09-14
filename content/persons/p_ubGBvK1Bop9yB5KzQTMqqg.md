---
schema: wang-person/v1
id: p_ubGBvK1Bop9yB5KzQTMqqg
status: active
merged_into: null
display_name: 王聚
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tTLfDp6ZSLNDnHg1PWhVML
        subject_person_id: p_ubGBvK1Bop9yB5KzQTMqqg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Wabdg1sdQLj9ndfWr2C46B
          claim_id: c_tTLfDp6ZSLNDnHg1PWhVML
          source_id: s_DsF1rpSZUrAb5NPq4vqDYM
          stance: supports
          locator: CBDB:254531
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（254531）
          source: &a1
            id: s_DsF1rpSZUrAb5NPq4vqDYM
            source_type: api_record
            title: 中国历代人物传记资料库：王聚（CBDB 254531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254531&o=json
            external_identifier: CBDB:254531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.323Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XTVWqddMYAEGYm3uX9r5ss
        subject_person_id: p_ubGBvK1Bop9yB5KzQTMqqg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聚，明人物。建文二年殿試進士，籍贯靈璧。（中国历代人物传记资料库 CBDB 254531）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cHkofuBDrFvHudFZUSAT0w
          claim_id: c_XTVWqddMYAEGYm3uX9r5ss
          source_id: s_DsF1rpSZUrAb5NPq4vqDYM
          stance: supports
          locator: CBDB:254531
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ABpOvXIP9XZgec_iAYKYd3
        subject_person_id: p_ubGBvK1Bop9yB5KzQTMqqg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FF1uMbfonZZUerwpoYGsZJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oAmSHKx2KaI65Unt4ZDcr8
          claim_id: c_ABpOvXIP9XZgec_iAYKYd3
          source_id: s_zCS6b7dveiWpFNsmNscBEW
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第三甲第四十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zCS6b7dveiWpFNsmNscBEW
            source_type: api_record
            title: 中国历代人物传记资料库：王郁（CBDB 200177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200177&o=json
            external_identifier: CBDB:200177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.592Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FF1uMbfonZZUerwpoYGsZJ
        status: active
        display_name: 王郁
        merged_into_person_id: null
    - claim:
        id: c_kb-6veqepPNCXXgY_CUwEG
        subject_person_id: p_ubGBvK1Bop9yB5KzQTMqqg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6K7Q5ESTtUvMABnWTJmfLL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZaGc-qRIuK3qgV0IHNr9Bu
          claim_id: c_kb-6veqepPNCXXgY_CUwEG
          source_id: s_zB2qcP6slXskyEb9-5fAGV
          stance: supports
          locator: CBDB：兄弟 王郁（200177）之父／母 王聚
          quotation: null
          interpretation_note: 由兄弟关系推断：王誾 与 王郁 为同胞（CBDB 记「兄」），王郁 之父／母即 王誾 之父／母。
          source:
            id: s_zB2qcP6slXskyEb9-5fAGV
            source_type: api_record
            title: 中国历代人物传记资料库：王誾（CBDB 254534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254534&o=json
            external_identifier: CBDB:254534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6K7Q5ESTtUvMABnWTJmfLL
        status: active
        display_name: 王誾
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王聚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聚 | accepted |
| bio.summary | 王聚，明人物。建文二年殿試進士，籍贯靈璧。（中国历代人物传记资料库 CBDB 254531） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_FF1uMbfonZZUerwpoYGsZJ | 王郁 | accepted |
| children | p_6K7Q5ESTtUvMABnWTJmfLL | 王誾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聚（CBDB 254531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254531&o=json)
- [中国历代人物传记资料库：王誾（CBDB 254534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254534&o=json)
- [中国历代人物传记资料库：王郁（CBDB 200177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200177&o=json)

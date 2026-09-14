---
schema: wang-person/v1
id: p_CaxhV3WpC3bWeKjSHRUMHG
status: active
merged_into: null
display_name: 王遵忠
cbdb_id: 224062
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_424mxn3inMujLvEaPNqFAw
        subject_person_id: p_CaxhV3WpC3bWeKjSHRUMHG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵忠，明人物。萬曆十一年進士，籍贯杞縣。（中国历代人物传记资料库 CBDB 224062）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_xBXI5Z930dg3lLObF6MS_L
          claim_id: c_424mxn3inMujLvEaPNqFAw
          source_id: s_NHpCzt7C1e11vM79Zr4TAC
          stance: supports
          locator: CBDB:224062
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_NHpCzt7C1e11vM79Zr4TAC
            source_type: api_record
            title: 中国历代人物传记资料库：王遵忠（CBDB 224062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224062&o=json
            external_identifier: CBDB:224062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mzEHK4MiNDMf3FzfYuHHjV
        subject_person_id: p_CaxhV3WpC3bWeKjSHRUMHG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_66bpB5KFm8fPQ1QJUL7MLx
          claim_id: c_mzEHK4MiNDMf3FzfYuHHjV
          source_id: s_NHpCzt7C1e11vM79Zr4TAC
          stance: supports
          locator: CBDB:224062
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3JxT69F94D54a9NpGGiXzg
        subject_person_id: p_SW2vBS5Q2Gs57G32UxYrWC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CaxhV3WpC3bWeKjSHRUMHG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zlJMrnCQSjb2x8mUY1F32C
          claim_id: c_3JxT69F94D54a9NpGGiXzg
          source_id: s_ghf3sr_uUZS1SRKxFmae-h
          stance: supports
          locator: CBDB：兄弟 王遵訓（206844）之父／母 王倫
          quotation: null
          interpretation_note: 由兄弟关系推断：王遵忠 与 王遵訓 为同胞（CBDB 记「兄」），王遵訓 之父／母即 王遵忠 之父／母。
          source:
            id: s_ghf3sr_uUZS1SRKxFmae-h
            source_type: api_record
            title: 中国历代人物传记资料库：王遵忠（CBDB 224062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224062&o=json
            external_identifier: CBDB:224062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SW2vBS5Q2Gs57G32UxYrWC
        status: active
        display_name: 王倫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c__1p-77_2bkEclF_Kzk3fss
        subject_person_id: p_CaxhV3WpC3bWeKjSHRUMHG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DyAEKNuW84v9PAan2XrKHV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_umUA1in8SlQeB8JTWud4wq
          claim_id: c__1p-77_2bkEclF_Kzk3fss
          source_id: s_ghf3sr_uUZS1SRKxFmae-h
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206844 王遵訓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ghf3sr_uUZS1SRKxFmae-h
            source_type: api_record
            title: 中国历代人物传记资料库：王遵忠（CBDB 224062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224062&o=json
            external_identifier: CBDB:224062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DyAEKNuW84v9PAan2XrKHV
        status: active
        display_name: 王遵訓
        merged_into_person_id: null
---

# 王遵忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王遵忠，明人物。萬曆十一年進士，籍贯杞縣。（中国历代人物传记资料库 CBDB 224062） | accepted |
| name.primary | 王遵忠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SW2vBS5Q2Gs57G32UxYrWC | 王倫 | accepted |
| other | p_DyAEKNuW84v9PAan2XrKHV | 王遵訓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遵忠（CBDB 224062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224062&o=json)

---
schema: wang-person/v1
id: p_KsWy8wVRKEEg8nQb2iqxGo
status: active
merged_into: null
display_name: 王希周
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kbkPHCcJtJEgMaVRnnRX2N
        subject_person_id: p_KsWy8wVRKEEg8nQb2iqxGo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希周
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NV2oGiFKGDiAJBG3TfRiB1
          claim_id: c_kbkPHCcJtJEgMaVRnnRX2N
          source_id: s_zVeVVPj1sQKu6XBz1ayHXW
          stance: supports
          locator: CBDB:219651
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（219651）
          source: &a1
            id: s_zVeVVPj1sQKu6XBz1ayHXW
            source_type: api_record
            title: 中国历代人物传记资料库：王希周（CBDB 219651）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219651&o=json
            external_identifier: CBDB:219651
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.291Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KooEhkW2x7ZfXKNdm3BDca
        subject_person_id: p_KsWy8wVRKEEg8nQb2iqxGo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希周，明人物。萬曆八年進士，籍贯懷寧。（中国历代人物传记资料库 CBDB 219651）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6I0Y4jbNFTYffamxl9PqIq
          claim_id: c_KooEhkW2x7ZfXKNdm3BDca
          source_id: s_zVeVVPj1sQKu6XBz1ayHXW
          stance: supports
          locator: CBDB:219651
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8ElNxz5b-iDzsMv4Dd3qUM
        subject_person_id: p_SEtLP5GkVoAmGmZP4M96hJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KsWy8wVRKEEg8nQb2iqxGo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_anOThHjI0IPRo0wiZnz7UH
          claim_id: c_8ElNxz5b-iDzsMv4Dd3qUM
          source_id: s_XxTaD2cEnzPWEnL593nh7l
          stance: supports
          locator: CBDB：兄弟 王希曾（206553）之父／母 王語
          quotation: null
          interpretation_note: 由兄弟关系推断：王希周 与 王希曾 为同胞（CBDB 记「兄」），王希曾 之父／母即 王希周 之父／母。
          source:
            id: s_XxTaD2cEnzPWEnL593nh7l
            source_type: api_record
            title: 中国历代人物传记资料库：王希周（CBDB 219651）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219651&o=json
            external_identifier: CBDB:219651
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SEtLP5GkVoAmGmZP4M96hJ
        status: active
        display_name: 王語
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_unvj3ZXEb1X5F7tx4IX-b0
        subject_person_id: p_KsWy8wVRKEEg8nQb2iqxGo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_U1s98XVN7fk14ATdRBVYZw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m5l1O_xlHjbzX8zQqyflGv
          claim_id: c_unvj3ZXEb1X5F7tx4IX-b0
          source_id: s_XxTaD2cEnzPWEnL593nh7l
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206553 王希曾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XxTaD2cEnzPWEnL593nh7l
            source_type: api_record
            title: 中国历代人物传记资料库：王希周（CBDB 219651）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219651&o=json
            external_identifier: CBDB:219651
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_U1s98XVN7fk14ATdRBVYZw
        status: active
        display_name: 王希曾
        merged_into_person_id: null
---

# 王希周

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希周 | accepted |
| bio.summary | 王希周，明人物。萬曆八年進士，籍贯懷寧。（中国历代人物传记资料库 CBDB 219651） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SEtLP5GkVoAmGmZP4M96hJ | 王語 | accepted |
| other | p_U1s98XVN7fk14ATdRBVYZw | 王希曾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希周（CBDB 219651）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219651&o=json)

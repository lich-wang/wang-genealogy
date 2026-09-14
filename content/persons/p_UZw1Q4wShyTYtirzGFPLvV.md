---
schema: wang-person/v1
id: p_UZw1Q4wShyTYtirzGFPLvV
status: active
merged_into: null
display_name: 王可立
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_569kMer5BrWKeNLstu3FsH
        subject_person_id: p_UZw1Q4wShyTYtirzGFPLvV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可立
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YeFwXrWbva5z2q9FCFaDe3
          claim_id: c_569kMer5BrWKeNLstu3FsH
          source_id: s_kFX81t5cHv4nEG1enLifnA
          stance: supports
          locator: CBDB:315818
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（315818）
          source: &a1
            id: s_kFX81t5cHv4nEG1enLifnA
            source_type: api_record
            title: 中国历代人物传记资料库：王可立（CBDB 315818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315818&o=json
            external_identifier: CBDB:315818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.955Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CfMv7PCB1M1wtDqmbBEx6g
        subject_person_id: p_UZw1Q4wShyTYtirzGFPLvV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可立，明人物。嘉靖三十二年進士，籍贯吳江。（中国历代人物传记资料库 CBDB 315818）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0hbo1szXW0nbsP5vKD62ni
          claim_id: c_CfMv7PCB1M1wtDqmbBEx6g
          source_id: s_kFX81t5cHv4nEG1enLifnA
          stance: supports
          locator: CBDB:315818
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CEsCA_slQ492LoHIyaNOZJ
        subject_person_id: p_WtHSaGmBzhNmmSZGD4ByjL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UZw1Q4wShyTYtirzGFPLvV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EWd8jweWr6JDloD5S_-b3e
          claim_id: c_CEsCA_slQ492LoHIyaNOZJ
          source_id: s_250XxhrCW850vQb5-gH5Kv
          stance: supports
          locator: CBDB：兄弟 王可大（126483）之父／母 王鑾
          quotation: null
          interpretation_note: 由兄弟关系推断：王可立 与 王可大 为同胞（CBDB 记「兄」），王可大 之父／母即 王可立 之父／母。
          source:
            id: s_250XxhrCW850vQb5-gH5Kv
            source_type: api_record
            title: 中国历代人物传记资料库：王可立（CBDB 315818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315818&o=json
            external_identifier: CBDB:315818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WtHSaGmBzhNmmSZGD4ByjL
        status: active
        display_name: 王鑾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_E0D2lGihgddd6y0S-8Lq--
        subject_person_id: p_4tfg9oHA8nXBC3KDi6Ftkj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UZw1Q4wShyTYtirzGFPLvV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OVLKymHnS82AirHUYePs9i
          claim_id: c_E0D2lGihgddd6y0S-8Lq--
          source_id: s_250XxhrCW850vQb5-gH5Kv
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126483 王可大）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_250XxhrCW850vQb5-gH5Kv
            source_type: api_record
            title: 中国历代人物传记资料库：王可立（CBDB 315818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315818&o=json
            external_identifier: CBDB:315818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4tfg9oHA8nXBC3KDi6Ftkj
        status: active
        display_name: 王可大
        merged_into_person_id: null
---

# 王可立

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王可立 | accepted |
| bio.summary | 王可立，明人物。嘉靖三十二年進士，籍贯吳江。（中国历代人物传记资料库 CBDB 315818） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WtHSaGmBzhNmmSZGD4ByjL | 王鑾 | accepted |
| other | p_4tfg9oHA8nXBC3KDi6Ftkj | 王可大 | accepted |

## 外部来源

- [中国历代人物传记资料库：王可立（CBDB 315818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315818&o=json)

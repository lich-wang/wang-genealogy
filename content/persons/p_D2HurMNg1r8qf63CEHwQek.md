---
schema: wang-person/v1
id: p_D2HurMNg1r8qf63CEHwQek
status: active
merged_into: null
display_name: 王時
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fR188y76D79EHXsLW6aQzu
        subject_person_id: p_D2HurMNg1r8qf63CEHwQek
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SGdszt6jjsjscFrbg75hME
          claim_id: c_fR188y76D79EHXsLW6aQzu
          source_id: s_rtC1bUB8aFKTGguVB8U2GQ
          stance: supports
          locator: CBDB:262454
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262454）
          source: &a1
            id: s_rtC1bUB8aFKTGguVB8U2GQ
            source_type: api_record
            title: 中国历代人物传记资料库：王時（CBDB 262454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262454&o=json
            external_identifier: CBDB:262454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.589Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AJU3HsbSDTAjTjScFiQyxv
        subject_person_id: p_D2HurMNg1r8qf63CEHwQek
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時，明人物。弘治三年進士，籍贯黃縣。（中国历代人物传记资料库 CBDB 262454）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1V6yfcjkNqnMNGm_D-E6x8
          claim_id: c_AJU3HsbSDTAjTjScFiQyxv
          source_id: s_rtC1bUB8aFKTGguVB8U2GQ
          stance: supports
          locator: CBDB:262454
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fsHoNy8LBU4HKX2JCo1esq
        subject_person_id: p_bVznNBP2hMh6tDWAzv1nG9
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_D2HurMNg1r8qf63CEHwQek
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P7IjrZIj57tOJSCZ2D935D
          claim_id: c_fsHoNy8LBU4HKX2JCo1esq
          source_id: s_SiPyhp6TfuLQt6ukIhp-44
          stance: supports
          locator: CBDB：兄弟 王时中（68328）之父／母 王钻
          quotation: null
          interpretation_note: 由兄弟关系推断：王時 与 王时中 为同胞（CBDB 记「兄」），王时中 之父／母即 王時 之父／母。
          source:
            id: s_SiPyhp6TfuLQt6ukIhp-44
            source_type: api_record
            title: 中国历代人物传记资料库：王時（CBDB 262454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262454&o=json
            external_identifier: CBDB:262454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bVznNBP2hMh6tDWAzv1nG9
        status: active
        display_name: 王钻
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Rvu86l1ukDer3-40TdJbh6
        subject_person_id: p_3SWv8LY5fsb1rb4ZwewsLo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_D2HurMNg1r8qf63CEHwQek
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IxnB_5AB_Z4vuVyPK4hTj1
          claim_id: c_Rvu86l1ukDer3-40TdJbh6
          source_id: s_SiPyhp6TfuLQt6ukIhp-44
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68328 王時中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SiPyhp6TfuLQt6ukIhp-44
            source_type: api_record
            title: 中国历代人物传记资料库：王時（CBDB 262454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262454&o=json
            external_identifier: CBDB:262454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3SWv8LY5fsb1rb4ZwewsLo
        status: active
        display_name: 王时中
        merged_into_person_id: null
---

# 王時

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時 | accepted |
| bio.summary | 王時，明人物。弘治三年進士，籍贯黃縣。（中国历代人物传记资料库 CBDB 262454） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bVznNBP2hMh6tDWAzv1nG9 | 王钻 | accepted |
| other | p_3SWv8LY5fsb1rb4ZwewsLo | 王时中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時（CBDB 262454）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262454&o=json)

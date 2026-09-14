---
schema: wang-person/v1
id: p_jyzLeB9zL3EFtRn9LCbhNW
status: active
merged_into: null
display_name: 王義
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BEkEE23JJ9THJri7L6DWJh
        subject_person_id: p_jyzLeB9zL3EFtRn9LCbhNW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2h4HTWR58kL2Lpz1NNRYuW
          claim_id: c_BEkEE23JJ9THJri7L6DWJh
          source_id: s_xSTpVbH1kzRKFgL3d8QnA1
          stance: supports
          locator: CBDB:257378
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257378）
          source: &a1
            id: s_xSTpVbH1kzRKFgL3d8QnA1
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 257378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257378&o=json
            external_identifier: CBDB:257378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.415Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q1fxQSwe9SNTWn7oDq2Bxx
        subject_person_id: p_jyzLeB9zL3EFtRn9LCbhNW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義，明人物。成化十七年進士，籍贯肥城。（中国历代人物传记资料库 CBDB 257378）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qCxF3GT-xDFA52E0kaybAt
          claim_id: c_Q1fxQSwe9SNTWn7oDq2Bxx
          source_id: s_xSTpVbH1kzRKFgL3d8QnA1
          stance: supports
          locator: CBDB:257378
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_B_Hd0i3lsF365mkm79Trbu
        subject_person_id: p_Wyqe2QSiKh31LC5bvKcMQt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jyzLeB9zL3EFtRn9LCbhNW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zoejxIKAhN9Ek8L05rYSg0
          claim_id: c_B_Hd0i3lsF365mkm79Trbu
          source_id: s_9ntURg3DpPvGF5QX6iNBsE
          stance: supports
          locator: CBDB：兄弟 王佑（67865）之父／母 王敬
          quotation: null
          interpretation_note: 由兄弟关系推断：王義 与 王佑 为同胞（CBDB 记「弟」），王佑 之父／母即 王義 之父／母。
          source:
            id: s_9ntURg3DpPvGF5QX6iNBsE
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 257378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257378&o=json
            external_identifier: CBDB:257378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Wyqe2QSiKh31LC5bvKcMQt
        status: active
        display_name: 王敬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_rma-bUazLI4fsmcCT3Po8v
        subject_person_id: p_cABDg4AGMJS98TZaoLa2HU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jyzLeB9zL3EFtRn9LCbhNW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZsqyPIt-mCpv9CA1WxAWft
          claim_id: c_rma-bUazLI4fsmcCT3Po8v
          source_id: s_9ntURg3DpPvGF5QX6iNBsE
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67865 王佑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9ntURg3DpPvGF5QX6iNBsE
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 257378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257378&o=json
            external_identifier: CBDB:257378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cABDg4AGMJS98TZaoLa2HU
        status: active
        display_name: 王佑
        merged_into_person_id: null
---

# 王義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義 | accepted |
| bio.summary | 王義，明人物。成化十七年進士，籍贯肥城。（中国历代人物传记资料库 CBDB 257378） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Wyqe2QSiKh31LC5bvKcMQt | 王敬 | accepted |
| other | p_cABDg4AGMJS98TZaoLa2HU | 王佑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王義（CBDB 257378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257378&o=json)

---
schema: wang-person/v1
id: p_r4sAd9PLc2f12uwSYcuCCC
status: active
merged_into: null
display_name: 王堯臣
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r1HUM5zq3D8oGUNQ5DzatZ
        subject_person_id: p_r4sAd9PLc2f12uwSYcuCCC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fMG1qFin31r8Ld5nr9LrA7
          claim_id: c_r1HUM5zq3D8oGUNQ5DzatZ
          source_id: s_vYAC8S8cmeerr8MQLJco6e
          stance: supports
          locator: CBDB:222820
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（222820）
          source: &a1
            id: s_vYAC8S8cmeerr8MQLJco6e
            source_type: api_record
            title: 中国历代人物传记资料库：王堯臣（CBDB 222820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222820&o=json
            external_identifier: CBDB:222820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.397Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z79JcwcZKtBmPuyk1P7tpr
        subject_person_id: p_r4sAd9PLc2f12uwSYcuCCC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯臣，明人物。萬曆十一年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 222820）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_01lQx4Y7P7NGSvDmu0muZy
          claim_id: c_z79JcwcZKtBmPuyk1P7tpr
          source_id: s_vYAC8S8cmeerr8MQLJco6e
          stance: supports
          locator: CBDB:222820
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UpYEfxZQ_xkxhES7orIGHh
        subject_person_id: p_oruQD3pLHzNQ8AvU3GVazK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r4sAd9PLc2f12uwSYcuCCC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U-YwkZI6r5RtRShx-Ps3EA
          claim_id: c_UpYEfxZQ_xkxhES7orIGHh
          source_id: s_T5_cNbOSifgwxvh5plPcLu
          stance: supports
          locator: CBDB：兄弟 王堯封（126717）之父／母 王維熊
          quotation: null
          interpretation_note: 由兄弟关系推断：王堯臣 与 王堯封 为同胞（CBDB 记「兄」），王堯封 之父／母即 王堯臣 之父／母。
          source:
            id: s_T5_cNbOSifgwxvh5plPcLu
            source_type: api_record
            title: 中国历代人物传记资料库：王堯臣（CBDB 222820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222820&o=json
            external_identifier: CBDB:222820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oruQD3pLHzNQ8AvU3GVazK
        status: active
        display_name: 王維熊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_BDZjCjYuOicIUPA8nCK7A3
        subject_person_id: p_DpuSp4mmLYMfmUMioXctjR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_r4sAd9PLc2f12uwSYcuCCC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oMxM7VGMAg_snGkLHntQAW
          claim_id: c_BDZjCjYuOicIUPA8nCK7A3
          source_id: s_T5_cNbOSifgwxvh5plPcLu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126717 王堯封）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_T5_cNbOSifgwxvh5plPcLu
            source_type: api_record
            title: 中国历代人物传记资料库：王堯臣（CBDB 222820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222820&o=json
            external_identifier: CBDB:222820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DpuSp4mmLYMfmUMioXctjR
        status: active
        display_name: 王堯封
        merged_into_person_id: null
---

# 王堯臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堯臣 | accepted |
| bio.summary | 王堯臣，明人物。萬曆十一年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 222820） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oruQD3pLHzNQ8AvU3GVazK | 王維熊 | accepted |
| other | p_DpuSp4mmLYMfmUMioXctjR | 王堯封 | accepted |

## 外部来源

- [中国历代人物传记资料库：王堯臣（CBDB 222820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222820&o=json)

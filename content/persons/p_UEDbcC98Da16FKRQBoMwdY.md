---
schema: wang-person/v1
id: p_UEDbcC98Da16FKRQBoMwdY
status: active
merged_into: null
display_name: 王一正
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sbkZHqkHwVpXymxEibyTZw
        subject_person_id: p_UEDbcC98Da16FKRQBoMwdY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vytCnzdk4PXHrDoX876gea
          claim_id: c_sbkZHqkHwVpXymxEibyTZw
          source_id: s_9WU4oq8ijDKb7cTCuKo1QK
          stance: supports
          locator: CBDB:337563
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（337563）
          source: &a1
            id: s_9WU4oq8ijDKb7cTCuKo1QK
            source_type: api_record
            title: 中国历代人物传记资料库：王一正（CBDB 337563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337563&o=json
            external_identifier: CBDB:337563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.518Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XcX8tVm1Lbyk2YtA27dfsK
        subject_person_id: p_UEDbcC98Da16FKRQBoMwdY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一正，明人物。隆慶二年進士，籍贯太倉州。（中国历代人物传记资料库 CBDB 337563）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O7_xv8H9SRwvs_qvuH8oH5
          claim_id: c_XcX8tVm1Lbyk2YtA27dfsK
          source_id: s_9WU4oq8ijDKb7cTCuKo1QK
          stance: supports
          locator: CBDB:337563
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ad6RQZhQpAayFnWE8bGunM
        subject_person_id: p_uWARgTHwHotCqXAXAieGV4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UEDbcC98Da16FKRQBoMwdY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ic6xpjNtRfpg24llkP7A1z
          claim_id: c_ad6RQZhQpAayFnWE8bGunM
          source_id: s_uewrSBqVHj5n88LL_X4bmD
          stance: supports
          locator: CBDB：兄弟 王一誠（205728）之父／母 王世芳
          quotation: null
          interpretation_note: 由兄弟关系推断：王一正 与 王一誠 为同胞（CBDB 记「兄」），王一誠 之父／母即 王一正 之父／母。
          source:
            id: s_uewrSBqVHj5n88LL_X4bmD
            source_type: api_record
            title: 中国历代人物传记资料库：王一正（CBDB 337563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337563&o=json
            external_identifier: CBDB:337563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uWARgTHwHotCqXAXAieGV4
        status: active
        display_name: 王世芳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_pa1Ni-XJQQb3vDMVJAxPdo
        subject_person_id: p_2CCGS25AmJvxKtCikhBKeQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UEDbcC98Da16FKRQBoMwdY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dR2VIsNU6YOQBz-rT3yTcr
          claim_id: c_pa1Ni-XJQQb3vDMVJAxPdo
          source_id: s_uewrSBqVHj5n88LL_X4bmD
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205728 王一誠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uewrSBqVHj5n88LL_X4bmD
            source_type: api_record
            title: 中国历代人物传记资料库：王一正（CBDB 337563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337563&o=json
            external_identifier: CBDB:337563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2CCGS25AmJvxKtCikhBKeQ
        status: active
        display_name: 王一誠
        merged_into_person_id: null
---

# 王一正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一正 | accepted |
| bio.summary | 王一正，明人物。隆慶二年進士，籍贯太倉州。（中国历代人物传记资料库 CBDB 337563） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uWARgTHwHotCqXAXAieGV4 | 王世芳 | accepted |
| other | p_2CCGS25AmJvxKtCikhBKeQ | 王一誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一正（CBDB 337563）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337563&o=json)

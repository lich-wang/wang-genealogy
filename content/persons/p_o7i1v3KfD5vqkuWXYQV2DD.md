---
schema: wang-person/v1
id: p_o7i1v3KfD5vqkuWXYQV2DD
status: active
merged_into: null
display_name: 王繹
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_98Foo5RRVzg2S2eRGqjXVP
        subject_person_id: p_o7i1v3KfD5vqkuWXYQV2DD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MaZvjYRPCM5YH2iP7RETBX
          claim_id: c_98Foo5RRVzg2S2eRGqjXVP
          source_id: s_1H99CuyN5vcNDRqCEJpSC1
          stance: supports
          locator: CBDB:242728
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242728）
          source: &a1
            id: s_1H99CuyN5vcNDRqCEJpSC1
            source_type: api_record
            title: 中国历代人物传记资料库：王繹（CBDB 242728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242728&o=json
            external_identifier: CBDB:242728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.979Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y8uquVD5j1HRHQmAFhNBVa
        subject_person_id: p_o7i1v3KfD5vqkuWXYQV2DD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繹，明人物。成化五年進士，籍贯宜興。（中国历代人物传记资料库 CBDB 242728）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EcOGpbCM3MZy8rR4fBlZZG
          claim_id: c_Y8uquVD5j1HRHQmAFhNBVa
          source_id: s_1H99CuyN5vcNDRqCEJpSC1
          stance: supports
          locator: CBDB:242728
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tXRNJ0SCY99lJN4R2N2kCg
        subject_person_id: p_kUx3oCAAhxc2diNZfU7tJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o7i1v3KfD5vqkuWXYQV2DD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gpnBiFAqDZGfbF9J5BjprV
          claim_id: c_tXRNJ0SCY99lJN4R2N2kCg
          source_id: s_c7BvjzR3uFGFUN5174DkU7
          stance: supports
          locator: CBDB：兄弟 王纓（199281）之父／母 王懋
          quotation: null
          interpretation_note: 由兄弟关系推断：王繹 与 王纓 为同胞（CBDB 记「弟」），王纓 之父／母即 王繹 之父／母。
          source:
            id: s_c7BvjzR3uFGFUN5174DkU7
            source_type: api_record
            title: 中国历代人物传记资料库：王繹（CBDB 242728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242728&o=json
            external_identifier: CBDB:242728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kUx3oCAAhxc2diNZfU7tJD
        status: active
        display_name: 王懋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ckj38SkS5sOyhx_gXCdZMd
        subject_person_id: p_o7i1v3KfD5vqkuWXYQV2DD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_peHrYdss4DG3Q61Kgik3ci
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pfbbg5nUq2VdGR5svrh9Bv
          claim_id: c_ckj38SkS5sOyhx_gXCdZMd
          source_id: s_c7BvjzR3uFGFUN5174DkU7
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199281 王纓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_c7BvjzR3uFGFUN5174DkU7
            source_type: api_record
            title: 中国历代人物传记资料库：王繹（CBDB 242728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242728&o=json
            external_identifier: CBDB:242728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_peHrYdss4DG3Q61Kgik3ci
        status: active
        display_name: 王纓
        merged_into_person_id: null
---

# 王繹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繹 | accepted |
| bio.summary | 王繹，明人物。成化五年進士，籍贯宜興。（中国历代人物传记资料库 CBDB 242728） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kUx3oCAAhxc2diNZfU7tJD | 王懋 | accepted |
| other | p_peHrYdss4DG3Q61Kgik3ci | 王纓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繹（CBDB 242728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242728&o=json)

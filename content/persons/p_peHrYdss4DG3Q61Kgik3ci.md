---
schema: wang-person/v1
id: p_peHrYdss4DG3Q61Kgik3ci
status: active
merged_into: null
display_name: 王纓
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1EpKE88dMbhFNpn5FsyJ4X
        subject_person_id: p_peHrYdss4DG3Q61Kgik3ci
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_usbQbPb2KckdYWChfLzVwH
          claim_id: c_1EpKE88dMbhFNpn5FsyJ4X
          source_id: s_8nBJsf2ddzZFEX1xK1e2JQ
          stance: supports
          locator: CBDB:199281
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199281）
          source: &a1
            id: s_8nBJsf2ddzZFEX1xK1e2JQ
            source_type: api_record
            title: 中国历代人物传记资料库：王纓（CBDB 199281）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199281&o=json
            external_identifier: CBDB:199281
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.537Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_d6xSCcz3LY3EAND7gygymK
        subject_person_id: p_peHrYdss4DG3Q61Kgik3ci
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1437年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aheiCWDkK1Xb4QihAFguDu
          claim_id: c_d6xSCcz3LY3EAND7gygymK
          source_id: s_8nBJsf2ddzZFEX1xK1e2JQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W82vV9zXqJmaLx8ewB1Hz4
        subject_person_id: p_peHrYdss4DG3Q61Kgik3ci
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纓（生于1437年），明人物。明清進士進士，籍贯宜興，入仕進士。（中国历代人物传记资料库 CBDB 199281）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zYl6KlRDzMwWqZfcyNxkn3
          claim_id: c_W82vV9zXqJmaLx8ewB1Hz4
          source_id: s_8nBJsf2ddzZFEX1xK1e2JQ
          stance: supports
          locator: CBDB:199281
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Eo-_at73z0UGEZsEgg39ed
        subject_person_id: p_kUx3oCAAhxc2diNZfU7tJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_peHrYdss4DG3Q61Kgik3ci
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tKtgXrZbjCzUYPrLmRIWG0
          claim_id: c_Eo-_at73z0UGEZsEgg39ed
          source_id: s_SgYXqxgG56Zin1o12rba5z
          stance: supports
          locator: 成化五年進士登科錄:一卷，第二甲第十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SgYXqxgG56Zin1o12rba5z
            source_type: api_record
            title: 中国历代人物传记资料库：王懋（CBDB 242723）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242723&o=json
            external_identifier: CBDB:242723
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.979Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kUx3oCAAhxc2diNZfU7tJD
        status: active
        display_name: 王懋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_NcIOHXQmMaD6ncefBSaN0P
        subject_person_id: p_Ub2p1w91cUsdfpNRi7T2xc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_peHrYdss4DG3Q61Kgik3ci
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vDVA_FpSHqkO35ZaLJzFCA
          claim_id: c_NcIOHXQmMaD6ncefBSaN0P
          source_id: s_seoc89WHYFWmw8yDv7A8FV
          stance: supports
          locator: 成化五年進士登科錄:一卷，第二甲第十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_seoc89WHYFWmw8yDv7A8FV
            source_type: api_record
            title: 中国历代人物传记资料库：王孟常（CBDB 242722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242722&o=json
            external_identifier: CBDB:242722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.978Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Ub2p1w91cUsdfpNRi7T2xc
        status: active
        display_name: 王孟常
        merged_into_person_id: null
    - claim:
        id: c_SlDXd3PVymDyhJ1A3oRIUE
        subject_person_id: p_FQH8fdzpkVdxU9vCE52bBR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_peHrYdss4DG3Q61Kgik3ci
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rOUPVbStMgcVB8VU-5OGQ3
          claim_id: c_SlDXd3PVymDyhJ1A3oRIUE
          source_id: s_XkNbBUh9Fbux1GdUtTsXoF
          stance: supports
          locator: 成化五年進士登科錄:一卷，第二甲第十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XkNbBUh9Fbux1GdUtTsXoF
            source_type: api_record
            title: 中国历代人物传记资料库：王彥宗（CBDB 242721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242721&o=json
            external_identifier: CBDB:242721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_FQH8fdzpkVdxU9vCE52bBR
        status: active
        display_name: 王彥宗
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_8Vm6eTwqj1yYgbusN6y9wo
        subject_person_id: p_1T2cH1bL7Nhy7JGdKvC4vh
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
        - id: cs_vCEqPz0SMQMUemiBs_Pt8u
          claim_id: c_8Vm6eTwqj1yYgbusN6y9wo
          source_id: s_ugPGC-tonXu94pljqm4mdI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199281 王纓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ugPGC-tonXu94pljqm4mdI
            source_type: api_record
            title: 中国历代人物传记资料库：王繪（CBDB 242732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242732&o=json
            external_identifier: CBDB:242732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1T2cH1bL7Nhy7JGdKvC4vh
        status: active
        display_name: 王繪
        merged_into_person_id: null
    - claim:
        id: c_4sMpjk1elcHaQtXm0C2PAT
        subject_person_id: p_P4tRTiNaHH24iCaqBBi6RC
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
        - id: cs_m3MVHyfOhYbeufKnbSSAwe
          claim_id: c_4sMpjk1elcHaQtXm0C2PAT
          source_id: s_WA-baDLv0_Z9czLwQ-HdZg
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199281 王纓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WA-baDLv0_Z9czLwQ-HdZg
            source_type: api_record
            title: 中国历代人物传记资料库：王約（CBDB 242729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242729&o=json
            external_identifier: CBDB:242729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P4tRTiNaHH24iCaqBBi6RC
        status: active
        display_name: 王約
        merged_into_person_id: null
    - claim:
        id: c_-QOMGf3PCI_LVm8Jlb4fZi
        subject_person_id: p_UDMV4U4rJ5Mjn7kpeFjqhq
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
        - id: cs_1Qge1WB93M4-lcPbeovIFs
          claim_id: c_-QOMGf3PCI_LVm8Jlb4fZi
          source_id: s_EZHOYvyCYhiBnHby4UFmVX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199281 王纓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EZHOYvyCYhiBnHby4UFmVX
            source_type: api_record
            title: 中国历代人物传记资料库：王緝（CBDB 242731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242731&o=json
            external_identifier: CBDB:242731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UDMV4U4rJ5Mjn7kpeFjqhq
        status: active
        display_name: 王緝
        merged_into_person_id: null
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
        id: p_o7i1v3KfD5vqkuWXYQV2DD
        status: active
        display_name: 王繹
        merged_into_person_id: null
---

# 王纓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王纓 | accepted |
| birth.date | 1437年 | accepted |
| bio.summary | 王纓（生于1437年），明人物。明清進士進士，籍贯宜興，入仕進士。（中国历代人物传记资料库 CBDB 199281） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kUx3oCAAhxc2diNZfU7tJD | 王懋 | accepted |
| ancestors | p_Ub2p1w91cUsdfpNRi7T2xc | 王孟常 | accepted |
| ancestors | p_FQH8fdzpkVdxU9vCE52bBR | 王彥宗 | accepted |
| other | p_1T2cH1bL7Nhy7JGdKvC4vh | 王繪 | accepted |
| other | p_P4tRTiNaHH24iCaqBBi6RC | 王約 | accepted |
| other | p_UDMV4U4rJ5Mjn7kpeFjqhq | 王緝 | accepted |
| other | p_o7i1v3KfD5vqkuWXYQV2DD | 王繹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繪（CBDB 242732）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242732&o=json)
- [中国历代人物传记资料库：王緝（CBDB 242731）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242731&o=json)
- [中国历代人物传记资料库：王懋（CBDB 242723）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242723&o=json)
- [中国历代人物传记资料库：王孟常（CBDB 242722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242722&o=json)
- [中国历代人物传记资料库：王彥宗（CBDB 242721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242721&o=json)
- [中国历代人物传记资料库：王繹（CBDB 242728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242728&o=json)
- [中国历代人物传记资料库：王纓（CBDB 199281）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199281&o=json)
- [中国历代人物传记资料库：王約（CBDB 242729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242729&o=json)

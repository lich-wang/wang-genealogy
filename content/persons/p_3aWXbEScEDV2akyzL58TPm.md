---
schema: wang-person/v1
id: p_3aWXbEScEDV2akyzL58TPm
status: active
merged_into: null
display_name: 王鼎
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KXjGQcZ7RibZwBWkL6xQFm
        subject_person_id: p_3aWXbEScEDV2akyzL58TPm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K8sk1R6Mig1xDZBEwf4eGt
          claim_id: c_KXjGQcZ7RibZwBWkL6xQFm
          source_id: s_P9Q1v9Dux4zedhvCVweS3V
          stance: supports
          locator: CBDB:67757
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67757）
          source: &a1
            id: s_P9Q1v9Dux4zedhvCVweS3V
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 67757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67757&o=json
            external_identifier: CBDB:67757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.010Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QeMU3tRK7oQZQdhydMRsMh
        subject_person_id: p_3aWXbEScEDV2akyzL58TPm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎，明人物。明清進士進士，籍贯鉅鹿，入仕進士。（中国历代人物传记资料库 CBDB 67757）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KZBPSN0xX6JkF0NtSwtHUK
          claim_id: c_QeMU3tRK7oQZQdhydMRsMh
          source_id: s_P9Q1v9Dux4zedhvCVweS3V
          stance: supports
          locator: CBDB:67757
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7LxEZXDEKREKPJJy4ONXot
        subject_person_id: p_DH3cdxEBekGFnLswxt2AJm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3aWXbEScEDV2akyzL58TPm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BWbeJDl4L4AD1qSBusOnul
          claim_id: c_7LxEZXDEKREKPJJy4ONXot
          source_id: s_P9Q1v9Dux4zedhvCVweS3V
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第一百八十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DH3cdxEBekGFnLswxt2AJm
        status: active
        display_name: 王惟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_dqQo9wYv8Vw-X1VeZ8ZSVX
        subject_person_id: p_3aWXbEScEDV2akyzL58TPm
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_quQXdH6gCbAdm41HTEiYp1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j4r_uNfyg_Og0XVCVQL8ct
          claim_id: c_dqQo9wYv8Vw-X1VeZ8ZSVX
          source_id: s_hHUzlnGGEY0thenkWHPCsN
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第一百八十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hHUzlnGGEY0thenkWHPCsN
            source_type: api_record
            title: 中国历代人物传记资料库：喬氏(王鼎妻)（CBDB 263531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263531&o=json
            external_identifier: CBDB:263531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_quQXdH6gCbAdm41HTEiYp1
        status: active
        display_name: 喬氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_WS3Mk_f3oxMt8Wk8OFCRgT
        subject_person_id: p_J3r4egDAk291FHqMu29aXc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3aWXbEScEDV2akyzL58TPm
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_02cLvq4hEGy0luxpX16owz
          claim_id: c_WS3Mk_f3oxMt8Wk8OFCRgT
          source_id: s_P9Q1v9Dux4zedhvCVweS3V
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第一百八十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_J3r4egDAk291FHqMu29aXc
        status: active
        display_name: 王得名
        merged_into_person_id: null
    - claim:
        id: c__SoX6zIt5O7bLcljdWtlZM
        subject_person_id: p_3T1iZj11y4TrPJ2kHibcFm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3aWXbEScEDV2akyzL58TPm
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iDThu6QCFr5N8-W3T7EmYM
          claim_id: c__SoX6zIt5O7bLcljdWtlZM
          source_id: s_P9Q1v9Dux4zedhvCVweS3V
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第一百八十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3T1iZj11y4TrPJ2kHibcFm
        status: active
        display_name: 王文貴
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_ZM1CREsUXXVuOPTw8XeX-g
        subject_person_id: p_3aWXbEScEDV2akyzL58TPm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kpKZa5Rui7RBUb1WeJKFuc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dZnMQ6ur12eHGu81QkNvMW
          claim_id: c_ZM1CREsUXXVuOPTw8XeX-g
          source_id: s_Bzd9Vb_Jyqc9NDN05SC2oX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67757 王鼎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Bzd9Vb_Jyqc9NDN05SC2oX
            source_type: api_record
            title: 中国历代人物传记资料库：王鼐（CBDB 263533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263533&o=json
            external_identifier: CBDB:263533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kpKZa5Rui7RBUb1WeJKFuc
        status: active
        display_name: 王鼐
        merged_into_person_id: null
    - claim:
        id: c_XUjKOvVeCJ3kAnQequb4C2
        subject_person_id: p_3aWXbEScEDV2akyzL58TPm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rZeCJCHw9xk17KFtzkMuLH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_poJAv1P-vo8m9zsqBarRCZ
          claim_id: c_XUjKOvVeCJ3kAnQequb4C2
          source_id: s_hwvl-kcdZLYlZU5MlyyR3V
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67757 王鼎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hwvl-kcdZLYlZU5MlyyR3V
            source_type: api_record
            title: 中国历代人物传记资料库：王鏞（CBDB 263532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263532&o=json
            external_identifier: CBDB:263532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rZeCJCHw9xk17KFtzkMuLH
        status: active
        display_name: 王鏞
        merged_into_person_id: null
    - claim:
        id: c_qlAD-tvM02kyCBWo5A5Re9
        subject_person_id: p_3aWXbEScEDV2akyzL58TPm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vNmUWpNro5HZDiJA77F6D7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zCZDOUomfnIZg6wTUBgOmG
          claim_id: c_qlAD-tvM02kyCBWo5A5Re9
          source_id: s_Z_xaNNmTDyqqs9qHtlHxAI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67757 王鼎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Z_xaNNmTDyqqs9qHtlHxAI
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 263534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263534&o=json
            external_identifier: CBDB:263534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vNmUWpNro5HZDiJA77F6D7
        status: active
        display_name: 王鎮
        merged_into_person_id: null
---

# 王鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎 | accepted |
| bio.summary | 王鼎，明人物。明清進士進士，籍贯鉅鹿，入仕進士。（中国历代人物传记资料库 CBDB 67757） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DH3cdxEBekGFnLswxt2AJm | 王惟 | accepted |
| spouses | p_quQXdH6gCbAdm41HTEiYp1 | 喬氏 | accepted |
| ancestors | p_J3r4egDAk291FHqMu29aXc | 王得名 | accepted |
| ancestors | p_3T1iZj11y4TrPJ2kHibcFm | 王文貴 | accepted |
| other | p_kpKZa5Rui7RBUb1WeJKFuc | 王鼐 | accepted |
| other | p_rZeCJCHw9xk17KFtzkMuLH | 王鏞 | accepted |
| other | p_vNmUWpNro5HZDiJA77F6D7 | 王鎮 | accepted |

## 外部来源

- [中国历代人物传记资料库：喬氏(王鼎妻)（CBDB 263531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263531&o=json)
- [中国历代人物传记资料库：王鼎（CBDB 67757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67757&o=json)
- [中国历代人物传记资料库：王鼐（CBDB 263533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263533&o=json)
- [中国历代人物传记资料库：王鏞（CBDB 263532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263532&o=json)
- [中国历代人物传记资料库：王鎮（CBDB 263534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263534&o=json)

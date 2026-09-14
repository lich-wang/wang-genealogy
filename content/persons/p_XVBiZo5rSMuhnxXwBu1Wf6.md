---
schema: wang-person/v1
id: p_XVBiZo5rSMuhnxXwBu1Wf6
status: active
merged_into: null
display_name: 王義
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J1z2uNYurALFQfCR5vEKcA
        subject_person_id: p_XVBiZo5rSMuhnxXwBu1Wf6
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
        - id: cs_op9yZLBPSJa5SSar8fawqM
          claim_id: c_J1z2uNYurALFQfCR5vEKcA
          source_id: s_KRpobqRjCLVppRpcJKMFHD
          stance: supports
          locator: CBDB:29203
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（29203）
          source: &a1
            id: s_KRpobqRjCLVppRpcJKMFHD
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 29203）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29203&o=json
            external_identifier: CBDB:29203
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.992Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Et1orHWMz3ELWTec8bk9Yn
        subject_person_id: p_XVBiZo5rSMuhnxXwBu1Wf6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1181年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i4DpPHAyYKqyJoBCqmse2w
          claim_id: c_Et1orHWMz3ELWTec8bk9Yn
          source_id: s_KRpobqRjCLVppRpcJKMFHD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_7rejWPUXHg3HfHqtShRbWD
        subject_person_id: p_XVBiZo5rSMuhnxXwBu1Wf6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1249年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y5ETRKKdBu6phpeVvHsVjj
          claim_id: c_7rejWPUXHg3HfHqtShRbWD
          source_id: s_KRpobqRjCLVppRpcJKMFHD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_75UHKXi1CoXcMC5SW7rHW7
        subject_person_id: p_XVBiZo5rSMuhnxXwBu1Wf6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義（1181年—1249年），元人物。籍贯寧晉，身份为義軍首領，入仕徵辟，曾任縣尹、元帥。（中国历代人物传记资料库 CBDB 29203）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ofn9D-8EMEcv0PHK-h7965
          claim_id: c_75UHKXi1CoXcMC5SW7rHW7
          source_id: s_KRpobqRjCLVppRpcJKMFHD
          stance: supports
          locator: CBDB:29203
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_F43dAFTy6-XBLhjSywIs8w
        subject_person_id: p_XVBiZo5rSMuhnxXwBu1Wf6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UxMMKFnipueTNhy6nquddw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OIloELLnxVoWTspIvD_MWj
          claim_id: c_F43dAFTy6-XBLhjSywIs8w
          source_id: s_nLu66igk1NBqGkgtJsatk2
          stance: supports
          locator: CBDB 双向互证（父 王義 ⇄ 子 王清）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_nLu66igk1NBqGkgtJsatk2
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 29204）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29204&o=json
            external_identifier: CBDB:29204
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.992Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UxMMKFnipueTNhy6nquddw
        status: active
        display_name: 王清
        merged_into_person_id: null
    - claim:
        id: c_b5xCuiLOSrX4vfo5QJkQ3V
        subject_person_id: p_XVBiZo5rSMuhnxXwBu1Wf6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1H4NAP9aFbjY5JF74P3EV2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_-Ur8PWd83pG4kvvil5s3ro
          claim_id: c_b5xCuiLOSrX4vfo5QJkQ3V
          source_id: s_UFwSfydA1L6KLcbXd9RJuB
          stance: supports
          locator: CBDB 亲属：父（KinPerson 29203）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_UFwSfydA1L6KLcbXd9RJuB
            source_type: api_record
            title: 中国历代人物传记资料库：王椅（CBDB 29211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29211&o=json
            external_identifier: CBDB:29211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1H4NAP9aFbjY5JF74P3EV2
        status: active
        display_name: 王椅
        merged_into_person_id: null
    - claim:
        id: c_PbxO2cDpuUghVpX_Ky2imw
        subject_person_id: p_XVBiZo5rSMuhnxXwBu1Wf6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BubhJUaKURZMwP6jp84Qe1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iVfxJ3tVMg2zTvOtplVdoj
          claim_id: c_PbxO2cDpuUghVpX_Ky2imw
          source_id: s_pkjQOiofnZ2nW_DFWb8pWG
          stance: supports
          locator: CBDB 亲属：父（KinPerson 29203）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_pkjQOiofnZ2nW_DFWb8pWG
            source_type: api_record
            title: 中国历代人物传记资料库：王槍（CBDB 29208）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29208&o=json
            external_identifier: CBDB:29208
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BubhJUaKURZMwP6jp84Qe1
        status: active
        display_name: 王槍
        merged_into_person_id: null
    - claim:
        id: c_zDClKvVTAx8l6ykEUs9dM7
        subject_person_id: p_XVBiZo5rSMuhnxXwBu1Wf6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HymD6C9CB2gTbtLbqEXudT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UkUKUmbfgwH9nplZ7hde-y
          claim_id: c_zDClKvVTAx8l6ykEUs9dM7
          source_id: s_3b5tZahlBpfdgF66HeLXYc
          stance: supports
          locator: CBDB 亲属：父（KinPerson 29203）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_3b5tZahlBpfdgF66HeLXYc
            source_type: api_record
            title: 中国历代人物传记资料库：王松（CBDB 29207）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29207&o=json
            external_identifier: CBDB:29207
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HymD6C9CB2gTbtLbqEXudT
        status: active
        display_name: 王松
        merged_into_person_id: null
    - claim:
        id: c_bg72NTpAxXzaR80qqtO7zK
        subject_person_id: p_XVBiZo5rSMuhnxXwBu1Wf6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Qac9GiVB31kBwk4zxkeoB8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_08D28b71LUR_prGUFnKPnR
          claim_id: c_bg72NTpAxXzaR80qqtO7zK
          source_id: s_RAxHW2UbOZN8JlzttXyvOm
          stance: supports
          locator: CBDB 亲属：父（KinPerson 29203）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_RAxHW2UbOZN8JlzttXyvOm
            source_type: api_record
            title: 中国历代人物传记资料库：王楝（CBDB 29212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29212&o=json
            external_identifier: CBDB:29212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Qac9GiVB31kBwk4zxkeoB8
        status: active
        display_name: 王楝
        merged_into_person_id: null
    - claim:
        id: c_tcXRfMU4xu1TnNA6CJLVt6
        subject_person_id: p_XVBiZo5rSMuhnxXwBu1Wf6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RDUubsZPdvnDciWfTLLW4b
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Fk5CIXMArVWch4ekJ3dkpI
          claim_id: c_tcXRfMU4xu1TnNA6CJLVt6
          source_id: s_H3quh88WULI1byU0qEwCvY
          stance: supports
          locator: CBDB 亲属：父（KinPerson 29203）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_H3quh88WULI1byU0qEwCvY
            source_type: api_record
            title: 中国历代人物传记资料库：王植（CBDB 29206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29206&o=json
            external_identifier: CBDB:29206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RDUubsZPdvnDciWfTLLW4b
        status: active
        display_name: 王植
        merged_into_person_id: null
    - claim:
        id: c__Pm9IRiHh-c1sWOjtFXm4q
        subject_person_id: p_XVBiZo5rSMuhnxXwBu1Wf6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hkBc7Y2qBB53dNVF9HPUx6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Jj9-uWaljgBSYNACEJCqPD
          claim_id: c__Pm9IRiHh-c1sWOjtFXm4q
          source_id: s_DmbuWuHkY2FwT_GyV8jJ-T
          stance: supports
          locator: CBDB 亲属：父（KinPerson 29203）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_DmbuWuHkY2FwT_GyV8jJ-T
            source_type: api_record
            title: 中国历代人物传记资料库：王楨（CBDB 29209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29209&o=json
            external_identifier: CBDB:29209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hkBc7Y2qBB53dNVF9HPUx6
        status: active
        display_name: 王楨
        merged_into_person_id: null
    - claim:
        id: c_WT7qSSr6c6TsQ1D0NUujGw
        subject_person_id: p_XVBiZo5rSMuhnxXwBu1Wf6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vttgNNqAgvuhH3ckjVAX6v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RQSNwepR-zZyl0onVMcAj_
          claim_id: c_WT7qSSr6c6TsQ1D0NUujGw
          source_id: s_iEsGenz_7_0o01bQFnKiD4
          stance: supports
          locator: CBDB 亲属：父（KinPerson 29203）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_iEsGenz_7_0o01bQFnKiD4
            source_type: api_record
            title: 中国历代人物传记资料库：王楫（CBDB 29210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29210&o=json
            external_identifier: CBDB:29210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vttgNNqAgvuhH3ckjVAX6v
        status: active
        display_name: 王楫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義 | accepted |
| birth.date | 1181年 | accepted |
| death.date | 1249年 | accepted |
| bio.summary | 王義（1181年—1249年），元人物。籍贯寧晉，身份为義軍首領，入仕徵辟，曾任縣尹、元帥。（中国历代人物传记资料库 CBDB 29203） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_UxMMKFnipueTNhy6nquddw | 王清 | accepted |
| children | p_1H4NAP9aFbjY5JF74P3EV2 | 王椅 | accepted |
| children | p_BubhJUaKURZMwP6jp84Qe1 | 王槍 | accepted |
| children | p_HymD6C9CB2gTbtLbqEXudT | 王松 | accepted |
| children | p_Qac9GiVB31kBwk4zxkeoB8 | 王楝 | accepted |
| children | p_RDUubsZPdvnDciWfTLLW4b | 王植 | accepted |
| children | p_hkBc7Y2qBB53dNVF9HPUx6 | 王楨 | accepted |
| children | p_vttgNNqAgvuhH3ckjVAX6v | 王楫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王楫（CBDB 29210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29210&o=json)
- [中国历代人物传记资料库：王楝（CBDB 29212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29212&o=json)
- [中国历代人物传记资料库：王槍（CBDB 29208）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29208&o=json)
- [中国历代人物传记资料库：王清（CBDB 29204）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29204&o=json)
- [中国历代人物传记资料库：王松（CBDB 29207）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29207&o=json)
- [中国历代人物传记资料库：王椅（CBDB 29211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29211&o=json)
- [中国历代人物传记资料库：王義（CBDB 29203）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29203&o=json)
- [中国历代人物传记资料库：王楨（CBDB 29209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29209&o=json)
- [中国历代人物传记资料库：王植（CBDB 29206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29206&o=json)

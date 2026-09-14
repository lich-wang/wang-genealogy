---
schema: wang-person/v1
id: p_Cuoocx9FVbq3j8KTAiGKVC
status: active
merged_into: null
display_name: 王春
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sM3PEZ2M75wWAuEtP4DMAG
        subject_person_id: p_Cuoocx9FVbq3j8KTAiGKVC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dyd3SBNx7WnDeeWvGNua8i
          claim_id: c_sM3PEZ2M75wWAuEtP4DMAG
          source_id: s_Yopzc1u7LBcxcM1Db75xWx
          stance: supports
          locator: CBDB:201159
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201159）
          source: &a1
            id: s_Yopzc1u7LBcxcM1Db75xWx
            source_type: api_record
            title: 中国历代人物传记资料库：王春（CBDB 201159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201159&o=json
            external_identifier: CBDB:201159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.661Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4XtCY23XkUd5h1EtcT3k1P
        subject_person_id: p_Cuoocx9FVbq3j8KTAiGKVC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1463年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pU6h6YefdSBWC8T68m7C5y
          claim_id: c_4XtCY23XkUd5h1EtcT3k1P
          source_id: s_Yopzc1u7LBcxcM1Db75xWx
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
        id: c_GPh7G6XsQw5mexaCT3vsZ9
        subject_person_id: p_Cuoocx9FVbq3j8KTAiGKVC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春（生于1463年），明人物。明清進士進士，籍贯撫寧，入仕進士。（中国历代人物传记资料库 CBDB 201159）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6rNIaWYVU8Y35vlR1TOU6e
          claim_id: c_GPh7G6XsQw5mexaCT3vsZ9
          source_id: s_Yopzc1u7LBcxcM1Db75xWx
          stance: supports
          locator: CBDB:201159
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jySBw50Z3qMGthZ0WMGJpk
        subject_person_id: p_Hyw8SQGaRE528RGN3TPgxc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Cuoocx9FVbq3j8KTAiGKVC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IuOz77tOIAMpxISvieEPnj
          claim_id: c_jySBw50Z3qMGthZ0WMGJpk
          source_id: s_CCe2diTS36EQM8NfrvSx2X
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第三十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CCe2diTS36EQM8NfrvSx2X
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 268115）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268115&o=json
            external_identifier: CBDB:268115
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.795Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Hyw8SQGaRE528RGN3TPgxc
        status: active
        display_name: 王榮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Y7_VETw28wTx5nTGc9REMf
        subject_person_id: p_BeExBVBoLALEyg1y8qcCQ5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Cuoocx9FVbq3j8KTAiGKVC
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FBEzv-xo-8tbidW-srCPlQ
          claim_id: c_Y7_VETw28wTx5nTGc9REMf
          source_id: s_xudsnkQu3CaLxPue6WRmiK
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第三十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xudsnkQu3CaLxPue6WRmiK
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 268113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268113&o=json
            external_identifier: CBDB:268113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.794Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BeExBVBoLALEyg1y8qcCQ5
        status: active
        display_name: 王成
        merged_into_person_id: null
    - claim:
        id: c_ui-A4RYYuURpJ2CPILU9tb
        subject_person_id: p_RvHkZ87vJrtd4xeo9Z6XNM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Cuoocx9FVbq3j8KTAiGKVC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QhOZm6WuPhCWtbUdLKt1qK
          claim_id: c_ui-A4RYYuURpJ2CPILU9tb
          source_id: s_WXvbLwCMt8qUfgeBSUZFxV
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第三十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WXvbLwCMt8qUfgeBSUZFxV
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 268114）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268114&o=json
            external_identifier: CBDB:268114
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.794Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RvHkZ87vJrtd4xeo9Z6XNM
        status: active
        display_name: 王信
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_R4kGsV0foL3BkPBKe9WQ3n
        subject_person_id: p_Cuoocx9FVbq3j8KTAiGKVC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_LSAQbntELyjPo3DMMA6Fjf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wMHy1H9AKrh-nTD2vkBLo_
          claim_id: c_R4kGsV0foL3BkPBKe9WQ3n
          source_id: s_WQJ6QgmXq3305Vim6U-YyP
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201159 王春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WQJ6QgmXq3305Vim6U-YyP
            source_type: api_record
            title: 中国历代人物传记资料库：王舂（CBDB 268121）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268121&o=json
            external_identifier: CBDB:268121
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LSAQbntELyjPo3DMMA6Fjf
        status: active
        display_name: 王舂
        merged_into_person_id: null
    - claim:
        id: c_nDho9bpQWtUdhvPSnNKYtt
        subject_person_id: p_Cuoocx9FVbq3j8KTAiGKVC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_iQRRkNTQZeiWjjut1TEC1d
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GAT8njn1GV3ifuF-ugMa4v
          claim_id: c_nDho9bpQWtUdhvPSnNKYtt
          source_id: s_5h_GU_EPESG8MoBNiCAobg
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201159 王春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5h_GU_EPESG8MoBNiCAobg
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 268120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268120&o=json
            external_identifier: CBDB:268120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iQRRkNTQZeiWjjut1TEC1d
        status: active
        display_name: 王泰
        merged_into_person_id: null
---

# 王春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王春 | accepted |
| birth.date | 1463年 | accepted |
| bio.summary | 王春（生于1463年），明人物。明清進士進士，籍贯撫寧，入仕進士。（中国历代人物传记资料库 CBDB 201159） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Hyw8SQGaRE528RGN3TPgxc | 王榮 | accepted |
| ancestors | p_BeExBVBoLALEyg1y8qcCQ5 | 王成 | accepted |
| ancestors | p_RvHkZ87vJrtd4xeo9Z6XNM | 王信 | accepted |
| other | p_LSAQbntELyjPo3DMMA6Fjf | 王舂 | accepted |
| other | p_iQRRkNTQZeiWjjut1TEC1d | 王泰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王成（CBDB 268113）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268113&o=json)
- [中国历代人物传记资料库：王舂（CBDB 268121）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268121&o=json)
- [中国历代人物传记资料库：王春（CBDB 201159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201159&o=json)
- [中国历代人物传记资料库：王榮（CBDB 268115）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268115&o=json)
- [中国历代人物传记资料库：王泰（CBDB 268120）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268120&o=json)
- [中国历代人物传记资料库：王信（CBDB 268114）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268114&o=json)

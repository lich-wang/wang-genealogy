---
schema: wang-person/v1
id: p_uxPkZUqsvSYKoUuB2wuXGH
status: active
merged_into: null
display_name: 王鐶
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6BjtmPkrXhGTS1Cjs4t9K4
        subject_person_id: p_uxPkZUqsvSYKoUuB2wuXGH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CNkY8P3p7Lh8SNzEeXRBNn
          claim_id: c_6BjtmPkrXhGTS1Cjs4t9K4
          source_id: s_41z55gkvjdzsWNR1p2geD3
          stance: supports
          locator: CBDB:200621
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200621）
          source: &a1
            id: s_41z55gkvjdzsWNR1p2geD3
            source_type: api_record
            title: 中国历代人物传记资料库：王鐶（CBDB 200621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200621&o=json
            external_identifier: CBDB:200621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.623Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zCNQGphDGFsrNwMPFtHaXz
        subject_person_id: p_uxPkZUqsvSYKoUuB2wuXGH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1445年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z28ynHqGv8z5HYh7psk1Mj
          claim_id: c_zCNQGphDGFsrNwMPFtHaXz
          source_id: s_41z55gkvjdzsWNR1p2geD3
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
        id: c_b4dT1if8ppTFJHJtdXKrdu
        subject_person_id: p_uxPkZUqsvSYKoUuB2wuXGH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐶（生于1445年），明人物。明清進士進士，籍贯天台，入仕進士。（中国历代人物传记资料库 CBDB 200621）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZyEqNRZ51sf_mTt__3RqYE
          claim_id: c_b4dT1if8ppTFJHJtdXKrdu
          source_id: s_41z55gkvjdzsWNR1p2geD3
          stance: supports
          locator: CBDB:200621
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XnlXLs-camTy2pNaKJ2kS7
        subject_person_id: p_rFTZAq6ze35imaHPVmA96A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uxPkZUqsvSYKoUuB2wuXGH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XNAp6wmi_WQ6mJGulNyDta
          claim_id: c_XnlXLs-camTy2pNaKJ2kS7
          source_id: s_CgQjH5usLzWG6PYYEhW3kd
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百九十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CgQjH5usLzWG6PYYEhW3kd
            source_type: api_record
            title: 中国历代人物传记资料库：王公權（CBDB 260517）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260517&o=json
            external_identifier: CBDB:260517
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.513Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_rFTZAq6ze35imaHPVmA96A
        status: active
        display_name: 王公權
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_58--UJQ2dUSsUkQDOeq2-z
        subject_person_id: p_mFjnSDjQyLtEFJz89osNQM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uxPkZUqsvSYKoUuB2wuXGH
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qiTRo1Tod-VgBsA6Dah3Ak
          claim_id: c_58--UJQ2dUSsUkQDOeq2-z
          source_id: s_pRJzwknxkLQG6L3DRfYtt1
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百九十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pRJzwknxkLQG6L3DRfYtt1
            source_type: api_record
            title: 中国历代人物传记资料库：王思江（CBDB 260516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260516&o=json
            external_identifier: CBDB:260516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_mFjnSDjQyLtEFJz89osNQM
        status: active
        display_name: 王思江
        merged_into_person_id: null
    - claim:
        id: c_0ZAHwpWMZSgoHWRtGbXhdp
        subject_person_id: p_Xfst6BBbBd7M19mM4cTqNv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uxPkZUqsvSYKoUuB2wuXGH
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ykN_qdO_j2Urfoa6Hc3IFw
          claim_id: c_0ZAHwpWMZSgoHWRtGbXhdp
          source_id: s_gz6ke2TWk6HnMNArABZVfN
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百九十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gz6ke2TWk6HnMNArABZVfN
            source_type: api_record
            title: 中国历代人物传记资料库：王彥華（CBDB 260515）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260515&o=json
            external_identifier: CBDB:260515
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Xfst6BBbBd7M19mM4cTqNv
        status: active
        display_name: 王彥華
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鐶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鐶 | accepted |
| birth.date | 1445年 | accepted |
| bio.summary | 王鐶（生于1445年），明人物。明清進士進士，籍贯天台，入仕進士。（中国历代人物传记资料库 CBDB 200621） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rFTZAq6ze35imaHPVmA96A | 王公權 | accepted |
| ancestors | p_mFjnSDjQyLtEFJz89osNQM | 王思江 | accepted |
| ancestors | p_Xfst6BBbBd7M19mM4cTqNv | 王彥華 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公權（CBDB 260517）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260517&o=json)
- [中国历代人物传记资料库：王鐶（CBDB 200621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200621&o=json)
- [中国历代人物传记资料库：王思江（CBDB 260516）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260516&o=json)
- [中国历代人物传记资料库：王彥華（CBDB 260515）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260515&o=json)

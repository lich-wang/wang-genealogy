---
schema: wang-person/v1
id: p_cF1tS83LboioMzgPkBhT2W
status: active
merged_into: null
display_name: 王選
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DFrCvNAzbF9sR7cAC1pSwE
        subject_person_id: p_cF1tS83LboioMzgPkBhT2W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王選
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d7SpVBGoDdgYQEQm22yNJC
          claim_id: c_DFrCvNAzbF9sR7cAC1pSwE
          source_id: s_ycBjaLSCwSA1EL2RDVdTj2
          stance: supports
          locator: CBDB:200963
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200963）
          source: &a1
            id: s_ycBjaLSCwSA1EL2RDVdTj2
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 200963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200963&o=json
            external_identifier: CBDB:200963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.645Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_K6C24nCbdzPVh9Bcn5uQgG
        subject_person_id: p_cF1tS83LboioMzgPkBhT2W
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1452年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bdSVGk2YX4UPAzAZDgs4c3
          claim_id: c_K6C24nCbdzPVh9Bcn5uQgG
          source_id: s_ycBjaLSCwSA1EL2RDVdTj2
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
        id: c_A6AukPULmtVBZrypyctdVq
        subject_person_id: p_cF1tS83LboioMzgPkBhT2W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王選（生于1452年），明人物。明清進士進士，籍贯安福，入仕進士。（中国历代人物传记资料库 CBDB 200963）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_x9oDmSI4Amqa0uP80LguFO
          claim_id: c_A6AukPULmtVBZrypyctdVq
          source_id: s_ycBjaLSCwSA1EL2RDVdTj2
          stance: supports
          locator: CBDB:200963
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_J1oCx30o7_wcO0ZPvuqo1U
        subject_person_id: p_HBetaJRtzBcDVZP83F84Xv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cF1tS83LboioMzgPkBhT2W
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6YkpbBiLPcLYgQhxZikE0V
          claim_id: c_J1oCx30o7_wcO0ZPvuqo1U
          source_id: s_ycBjaLSCwSA1EL2RDVdTj2
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第四十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HBetaJRtzBcDVZP83F84Xv
        status: active
        display_name: 王稷時
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_1r_sVDdzCRl3HaR5ItA_J6
        subject_person_id: p_cF1tS83LboioMzgPkBhT2W
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ALE69A7iwJiKMjUHaxgrM5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mloyra98rZqer6uYvpife_
          claim_id: c_1r_sVDdzCRl3HaR5ItA_J6
          source_id: s_UEkKL4nxGGskiww3-jwy2_
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第四十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UEkKL4nxGGskiww3-jwy2_
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王選妻)（CBDB 265194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265194&o=json
            external_identifier: CBDB:265194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ALE69A7iwJiKMjUHaxgrM5
        status: active
        display_name: 劉氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_PmCEnOIdkK4ND3oGvjfMPv
        subject_person_id: p_xXfU17qq7kWf6RgD1JMA38
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cF1tS83LboioMzgPkBhT2W
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7Kccl8EySZ2maXrZjQCws5
          claim_id: c_PmCEnOIdkK4ND3oGvjfMPv
          source_id: s_ycBjaLSCwSA1EL2RDVdTj2
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第四十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xXfU17qq7kWf6RgD1JMA38
        status: active
        display_name: 王學韶
        merged_into_person_id: null
    - claim:
        id: c_iKxXzlvuJ-RFbGQlEf_zWs
        subject_person_id: p_L2CxX6rmuHacqK1sdFNeMY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cF1tS83LboioMzgPkBhT2W
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ycMTXGU8NzhpyOGHQe8tXz
          claim_id: c_iKxXzlvuJ-RFbGQlEf_zWs
          source_id: s_ycBjaLSCwSA1EL2RDVdTj2
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第四十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_L2CxX6rmuHacqK1sdFNeMY
        status: active
        display_name: 王克和
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王選

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王選 | accepted |
| birth.date | 1452年 | accepted |
| bio.summary | 王選（生于1452年），明人物。明清進士進士，籍贯安福，入仕進士。（中国历代人物传记资料库 CBDB 200963） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HBetaJRtzBcDVZP83F84Xv | 王稷時 | accepted |
| spouses | p_ALE69A7iwJiKMjUHaxgrM5 | 劉氏 | accepted |
| ancestors | p_xXfU17qq7kWf6RgD1JMA38 | 王學韶 | accepted |
| ancestors | p_L2CxX6rmuHacqK1sdFNeMY | 王克和 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王選妻)（CBDB 265194）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265194&o=json)
- [中国历代人物传记资料库：王選（CBDB 200963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200963&o=json)

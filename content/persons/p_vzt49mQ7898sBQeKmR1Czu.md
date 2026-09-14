---
schema: wang-person/v1
id: p_vzt49mQ7898sBQeKmR1Czu
status: active
merged_into: null
display_name: 王儒
revision: 12
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LKE3qrWz8TmrNNrpUPrugj
        subject_person_id: p_vzt49mQ7898sBQeKmR1Czu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_m7TgukC2JTP7j5Gc12gE31
          claim_id: c_LKE3qrWz8TmrNNrpUPrugj
          source_id: s_B4LiBRne2Mvyx2FLkFP4Lc
          stance: supports
          locator: CBDB:206132
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206132）
          source: &a1
            id: s_B4LiBRne2Mvyx2FLkFP4Lc
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 206132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206132&o=json
            external_identifier: CBDB:206132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.884Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4gEQwMPBA8xYSpfddQYMgy
        subject_person_id: p_vzt49mQ7898sBQeKmR1Czu
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1543年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wqtHzDhCieo6kNKhQS8acN
          claim_id: c_4gEQwMPBA8xYSpfddQYMgy
          source_id: s_B4LiBRne2Mvyx2FLkFP4Lc
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
        id: c_aSKyERHtEEE8XUmspDT5Sf
        subject_person_id: p_vzt49mQ7898sBQeKmR1Czu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒（生于1543年），明人物。明清進士進士，籍贯太原府，入仕進士。（中国历代人物传记资料库 CBDB 206132）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_voj-6eps2fIfaBG3pyVhJG
          claim_id: c_aSKyERHtEEE8XUmspDT5Sf
          source_id: s_B4LiBRne2Mvyx2FLkFP4Lc
          stance: supports
          locator: CBDB:206132
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WVm7ls5Bgx43VKe1jDdEAW
        subject_person_id: p_QEEDRgkTG1gPE2Q7oYF5FU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vzt49mQ7898sBQeKmR1Czu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bvy0c4_N3D_ySzxCsk6NAG
          claim_id: c_WVm7ls5Bgx43VKe1jDdEAW
          source_id: s_B5drTmiLVVUMoY2XeN9Xc1
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第六十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_B5drTmiLVVUMoY2XeN9Xc1
            source_type: api_record
            title: 中国历代人物传记资料库：王雲鵬（CBDB 213741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213741&o=json
            external_identifier: CBDB:213741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.121Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QEEDRgkTG1gPE2Q7oYF5FU
        status: active
        display_name: 王雲鵬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_XkJTXHnmn-b9ucYFYf4M2x
        subject_person_id: p_NzmzS4tvPrjELzTB7xahpm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vzt49mQ7898sBQeKmR1Czu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OHsJ3OT-zI3IsTFysjc2kp
          claim_id: c_XkJTXHnmn-b9ucYFYf4M2x
          source_id: s_MNwDEJH9bFBUvuz58vHDns
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第六十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MNwDEJH9bFBUvuz58vHDns
            source_type: api_record
            title: 中国历代人物传记资料库：王邦柱（CBDB 213740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213740&o=json
            external_identifier: CBDB:213740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.121Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NzmzS4tvPrjELzTB7xahpm
        status: active
        display_name: 王邦柱
        merged_into_person_id: null
    - claim:
        id: c_rHnFDzUWfAMY9QQhY5flnb
        subject_person_id: p_TCUajvvy1KeEaVi5zWGGy5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vzt49mQ7898sBQeKmR1Czu
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mvI8WpDjG4FL-x3EwMxwpZ
          claim_id: c_rHnFDzUWfAMY9QQhY5flnb
          source_id: s_83jXmFREazpNzCK4wBDvbS
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第六十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_83jXmFREazpNzCK4wBDvbS
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 213739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213739&o=json
            external_identifier: CBDB:213739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.120Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_TCUajvvy1KeEaVi5zWGGy5
        status: active
        display_name: 王安
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_219-Ibg3kPiQrPrXj1uQLT
        subject_person_id: p_1rFSs1MDWjoDEsWahgAEiH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vzt49mQ7898sBQeKmR1Czu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__1K8sqPiElUshtiLi2UaEy
          claim_id: c_219-Ibg3kPiQrPrXj1uQLT
          source_id: s_2kaSR4u1KbVaQbgqKlCiO3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206132 王儒）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2kaSR4u1KbVaQbgqKlCiO3
            source_type: api_record
            title: 中国历代人物传记资料库：王价（CBDB 213745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213745&o=json
            external_identifier: CBDB:213745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1rFSs1MDWjoDEsWahgAEiH
        status: active
        display_name: 王价
        merged_into_person_id: null
    - claim:
        id: c_vay-V8gOfs2za_CPsgZzNl
        subject_person_id: p_DEKU8PUczGT5KTc7N61XeP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vzt49mQ7898sBQeKmR1Czu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HOZS-hQBuGN__T12DNf8-a
          claim_id: c_vay-V8gOfs2za_CPsgZzNl
          source_id: s_4Uw84ZOtZBMZ7NA0bSSOgj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206132 王儒）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4Uw84ZOtZBMZ7NA0bSSOgj
            source_type: api_record
            title: 中国历代人物传记资料库：王仕（CBDB 213748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213748&o=json
            external_identifier: CBDB:213748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DEKU8PUczGT5KTc7N61XeP
        status: active
        display_name: 王仕
        merged_into_person_id: null
    - claim:
        id: c_icuIi9r5OYzKp7S9MARQKk
        subject_person_id: p_DtFsSKP86GUtExRKKocfLK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vzt49mQ7898sBQeKmR1Czu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I7rka0ZnYJEiDuOzjtaYSV
          claim_id: c_icuIi9r5OYzKp7S9MARQKk
          source_id: s_OuKsIokBcNQQn7Gm4Bxl1i
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206132 王儒）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OuKsIokBcNQQn7Gm4Bxl1i
            source_type: api_record
            title: 中国历代人物传记资料库：王伋（CBDB 213752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213752&o=json
            external_identifier: CBDB:213752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DtFsSKP86GUtExRKKocfLK
        status: active
        display_name: 王伋
        merged_into_person_id: null
    - claim:
        id: c_y5_bQXqXggXOqMbJPEGzhF
        subject_person_id: p_TrBNVDkCMthFCN2v3HWAK3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vzt49mQ7898sBQeKmR1Czu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n971qkV1O1WEFLCdxdSoGH
          claim_id: c_y5_bQXqXggXOqMbJPEGzhF
          source_id: s_1FCnxxNMxCp4a_PRwy3bW6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206132 王儒）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1FCnxxNMxCp4a_PRwy3bW6
            source_type: api_record
            title: 中国历代人物传记资料库：王僎（CBDB 213749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213749&o=json
            external_identifier: CBDB:213749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TrBNVDkCMthFCN2v3HWAK3
        status: active
        display_name: 王僎
        merged_into_person_id: null
    - claim:
        id: c_CBJGiBDBQ5JChQVfmfs0Lm
        subject_person_id: p_bNDLTW3gYoA1JcLjYeRCQ2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vzt49mQ7898sBQeKmR1Czu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U4NgcB_FTY3p_IuUJkdsOV
          claim_id: c_CBJGiBDBQ5JChQVfmfs0Lm
          source_id: s_9aduS-i8F_noIPh89wYGZS
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206132 王儒）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9aduS-i8F_noIPh89wYGZS
            source_type: api_record
            title: 中国历代人物传记资料库：王佑（CBDB 213744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213744&o=json
            external_identifier: CBDB:213744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bNDLTW3gYoA1JcLjYeRCQ2
        status: active
        display_name: 王佑
        merged_into_person_id: null
    - claim:
        id: c_r2MkLaXvlvG9ilfrVrL83v
        subject_person_id: p_dAteZp3MJh6FpVJDLdownb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vzt49mQ7898sBQeKmR1Czu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ni_RYQNk5GpB5dl8EcvnJX
          claim_id: c_r2MkLaXvlvG9ilfrVrL83v
          source_id: s_fKE74QtHFNj74PrjCJr_9a
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206132 王儒）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fKE74QtHFNj74PrjCJr_9a
            source_type: api_record
            title: 中国历代人物传记资料库：王佳（CBDB 213751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213751&o=json
            external_identifier: CBDB:213751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dAteZp3MJh6FpVJDLdownb
        status: active
        display_name: 王佳
        merged_into_person_id: null
    - claim:
        id: c_y-LkcTYKswk8_z0vuCHD82
        subject_person_id: p_mZ3QvU1uozUuNDFD3Fs4K3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vzt49mQ7898sBQeKmR1Czu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_akrfgn-KS7PXUuZRDC2sYK
          claim_id: c_y-LkcTYKswk8_z0vuCHD82
          source_id: s__D8c8SSI9qbfVogZpdIta7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206132 王儒）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__D8c8SSI9qbfVogZpdIta7
            source_type: api_record
            title: 中国历代人物传记资料库：王偉（CBDB 213746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213746&o=json
            external_identifier: CBDB:213746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mZ3QvU1uozUuNDFD3Fs4K3
        status: active
        display_name: 王偉
        merged_into_person_id: null
    - claim:
        id: c_esN7qyOt1aJTEwMIQLbkM9
        subject_person_id: p_ruAtE2o3DH5LKHmspo6Cfm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vzt49mQ7898sBQeKmR1Czu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ayf4FcBAsyr7ZWZ6laQoKz
          claim_id: c_esN7qyOt1aJTEwMIQLbkM9
          source_id: s_aLQkgYPgqviBApl4EhH8RC
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206132 王儒）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_aLQkgYPgqviBApl4EhH8RC
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 213750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213750&o=json
            external_identifier: CBDB:213750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ruAtE2o3DH5LKHmspo6Cfm
        status: active
        display_name: 王侃
        merged_into_person_id: null
---

# 王儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儒 | accepted |
| birth.date | 1543年 | accepted |
| bio.summary | 王儒（生于1543年），明人物。明清進士進士，籍贯太原府，入仕進士。（中国历代人物传记资料库 CBDB 206132） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QEEDRgkTG1gPE2Q7oYF5FU | 王雲鵬 | accepted |
| ancestors | p_NzmzS4tvPrjELzTB7xahpm | 王邦柱 | accepted |
| ancestors | p_TCUajvvy1KeEaVi5zWGGy5 | 王安 | accepted |
| other | p_1rFSs1MDWjoDEsWahgAEiH | 王价 | accepted |
| other | p_DEKU8PUczGT5KTc7N61XeP | 王仕 | accepted |
| other | p_DtFsSKP86GUtExRKKocfLK | 王伋 | accepted |
| other | p_TrBNVDkCMthFCN2v3HWAK3 | 王僎 | accepted |
| other | p_bNDLTW3gYoA1JcLjYeRCQ2 | 王佑 | accepted |
| other | p_dAteZp3MJh6FpVJDLdownb | 王佳 | accepted |
| other | p_mZ3QvU1uozUuNDFD3Fs4K3 | 王偉 | accepted |
| other | p_ruAtE2o3DH5LKHmspo6Cfm | 王侃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 213739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213739&o=json)
- [中国历代人物传记资料库：王邦柱（CBDB 213740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213740&o=json)
- [中国历代人物传记资料库：王伋（CBDB 213752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213752&o=json)
- [中国历代人物传记资料库：王佳（CBDB 213751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213751&o=json)
- [中国历代人物传记资料库：王价（CBDB 213745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213745&o=json)
- [中国历代人物传记资料库：王侃（CBDB 213750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213750&o=json)
- [中国历代人物传记资料库：王儒（CBDB 206132）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206132&o=json)
- [中国历代人物传记资料库：王仕（CBDB 213748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213748&o=json)
- [中国历代人物传记资料库：王偉（CBDB 213746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213746&o=json)
- [中国历代人物传记资料库：王佑（CBDB 213744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213744&o=json)
- [中国历代人物传记资料库：王雲鵬（CBDB 213741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213741&o=json)
- [中国历代人物传记资料库：王僎（CBDB 213749）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213749&o=json)

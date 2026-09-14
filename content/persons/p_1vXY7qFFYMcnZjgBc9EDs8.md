---
schema: wang-person/v1
id: p_1vXY7qFFYMcnZjgBc9EDs8
status: active
merged_into: null
display_name: 王佐
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9AF9fJuNsQLKvHYD5e49jD
        subject_person_id: p_1vXY7qFFYMcnZjgBc9EDs8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pmsKeQauM2V3T4X5eELifa
          claim_id: c_9AF9fJuNsQLKvHYD5e49jD
          source_id: s_57kZAzZH2t6g4w3F4mdEPS
          stance: supports
          locator: CBDB:198633
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198633）
          source: &a1
            id: s_57kZAzZH2t6g4w3F4mdEPS
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 198633）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198633&o=json
            external_identifier: CBDB:198633
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.505Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zKKwyuy3RFEpG7F74cUiEw
        subject_person_id: p_1vXY7qFFYMcnZjgBc9EDs8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1424年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_23Rifwh6q63EFXM4v56U9S
          claim_id: c_zKKwyuy3RFEpG7F74cUiEw
          source_id: s_57kZAzZH2t6g4w3F4mdEPS
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
        id: c_seAYnRYXX8nUEXYyyD6Yp7
        subject_person_id: p_1vXY7qFFYMcnZjgBc9EDs8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐（生于1424年），明人物。天順元年進士，籍贯盧龍，入仕進士。（中国历代人物传记资料库 CBDB 198633）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YGkU3iOSd0o60d_tbgjhvG
          claim_id: c_seAYnRYXX8nUEXYyyD6Yp7
          source_id: s_57kZAzZH2t6g4w3F4mdEPS
          stance: supports
          locator: CBDB:198633
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8n9uh0LHj6kH1tlFbUHbIb
        subject_person_id: p_e8GwzBVysey3Kb4uNTABDK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1vXY7qFFYMcnZjgBc9EDs8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wGQw8gHHlTbYM2qWCZ95RT
          claim_id: c_8n9uh0LHj6kH1tlFbUHbIb
          source_id: s_57kZAzZH2t6g4w3F4mdEPS
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第六十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_e8GwzBVysey3Kb4uNTABDK
        status: active
        display_name: 王敬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_PuZXWxYXlUMJeJkrUuj8GI
        subject_person_id: p_1vXY7qFFYMcnZjgBc9EDs8
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_LZa66noW4FLr3NMV38ZjMy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_75KOl4unryrJ5Cv7vB-2_a
          claim_id: c_PuZXWxYXlUMJeJkrUuj8GI
          source_id: s_UI3T6fIBZB8-LqwbIbnQ30
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第六十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UI3T6fIBZB8-LqwbIbnQ30
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王佐妻)（CBDB 296967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296967&o=json
            external_identifier: CBDB:296967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LZa66noW4FLr3NMV38ZjMy
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_M7_hie7WMtq86cP17g-bGk
        subject_person_id: p_Dp8q3v4je1nMarPFQKSQZg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1vXY7qFFYMcnZjgBc9EDs8
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MJle2ocWeYxVD2IQjI-i_T
          claim_id: c_M7_hie7WMtq86cP17g-bGk
          source_id: s_57kZAzZH2t6g4w3F4mdEPS
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第六十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Dp8q3v4je1nMarPFQKSQZg
        status: active
        display_name: 王克善
        merged_into_person_id: null
    - claim:
        id: c_pa7RT5crHC4JdFx-OrFVFL
        subject_person_id: p_EqBrC3P6PFftiJvnAm14hu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1vXY7qFFYMcnZjgBc9EDs8
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1b0fmFLbCLjNtna3cUuI1c
          claim_id: c_pa7RT5crHC4JdFx-OrFVFL
          source_id: s_57kZAzZH2t6g4w3F4mdEPS
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第六十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EqBrC3P6PFftiJvnAm14hu
        status: active
        display_name: 王希仁
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_w7OOrIytwiJliiR9UzqjSo
        subject_person_id: p_1vXY7qFFYMcnZjgBc9EDs8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_5FmaUx5pBcmXKQcqQ78YJT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IamUsSF9655ukhMaV0-T-t
          claim_id: c_w7OOrIytwiJliiR9UzqjSo
          source_id: s_KKvfI3LgaCl6Xsoh7-cq2O
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198633 王佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KKvfI3LgaCl6Xsoh7-cq2O
            source_type: api_record
            title: 中国历代人物传记资料库：王森（CBDB 297002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297002&o=json
            external_identifier: CBDB:297002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5FmaUx5pBcmXKQcqQ78YJT
        status: active
        display_name: 王森
        merged_into_person_id: null
    - claim:
        id: c_wuiLNeS_NCWyLvSxfukmqr
        subject_person_id: p_1vXY7qFFYMcnZjgBc9EDs8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_K1Pw3mH4W16CQa58kxjMDx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_krDTg613PzR0eK7fU-NpEg
          claim_id: c_wuiLNeS_NCWyLvSxfukmqr
          source_id: s_3rPm-cJeYhbtL7rHJnlGky
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198633 王佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3rPm-cJeYhbtL7rHJnlGky
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 296978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296978&o=json
            external_identifier: CBDB:296978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_K1Pw3mH4W16CQa58kxjMDx
        status: active
        display_name: 王榮
        merged_into_person_id: null
    - claim:
        id: c_jl7j4zGdPel5rZRFqs7pVF
        subject_person_id: p_1vXY7qFFYMcnZjgBc9EDs8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ReefGjaxLdLvD49RVzGPr4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dxdzn9R7V-QkpzyLN-jX6a
          claim_id: c_jl7j4zGdPel5rZRFqs7pVF
          source_id: s_AOa92-EOA1KRApV0gNVe_i
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198633 王佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AOa92-EOA1KRApV0gNVe_i
            source_type: api_record
            title: 中国历代人物传记资料库：王佑（CBDB 297024）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297024&o=json
            external_identifier: CBDB:297024
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ReefGjaxLdLvD49RVzGPr4
        status: active
        display_name: 王佑
        merged_into_person_id: null
    - claim:
        id: c_Ohuzns2PIAJ2QVfD64i9tT
        subject_person_id: p_1vXY7qFFYMcnZjgBc9EDs8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UuGXcDwknrKH31QUBdehui
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lrXL_8OT0IELz6BCtt2Mcp
          claim_id: c_Ohuzns2PIAJ2QVfD64i9tT
          source_id: s_oV-ycNjr4K7dXNExYQZNSW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198633 王佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oV-ycNjr4K7dXNExYQZNSW
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 297013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297013&o=json
            external_identifier: CBDB:297013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UuGXcDwknrKH31QUBdehui
        status: active
        display_name: 王傑
        merged_into_person_id: null
    - claim:
        id: c_2cKx2K98H-i7jt0_OARwfG
        subject_person_id: p_1vXY7qFFYMcnZjgBc9EDs8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XV2xTVa2MzpHGZnv5RX14j
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jh15P-dGRrq0o0dblKgnBN
          claim_id: c_2cKx2K98H-i7jt0_OARwfG
          source_id: s_ulbykcTIDdfVW96rGvDpCp
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198633 王佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ulbykcTIDdfVW96rGvDpCp
            source_type: api_record
            title: 中国历代人物传记资料库：王剛（CBDB 296991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296991&o=json
            external_identifier: CBDB:296991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XV2xTVa2MzpHGZnv5RX14j
        status: active
        display_name: 王剛
        merged_into_person_id: null
    - claim:
        id: c_N816pJKkE2SdL-FZmnJqu4
        subject_person_id: p_1vXY7qFFYMcnZjgBc9EDs8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hxV5knL2LSSLdrEPUHGPS6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jUCu02cIaCvds5YO9WhldK
          claim_id: c_N816pJKkE2SdL-FZmnJqu4
          source_id: s_HoJU2Vkjme4UzRsF3Pjvs-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198633 王佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HoJU2Vkjme4UzRsF3Pjvs-
            source_type: api_record
            title: 中国历代人物传记资料库：王佶（CBDB 297035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297035&o=json
            external_identifier: CBDB:297035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hxV5knL2LSSLdrEPUHGPS6
        status: active
        display_name: 王佶
        merged_into_person_id: null
---

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| birth.date | 1424年 | accepted |
| bio.summary | 王佐（生于1424年），明人物。天順元年進士，籍贯盧龍，入仕進士。（中国历代人物传记资料库 CBDB 198633） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_e8GwzBVysey3Kb4uNTABDK | 王敬 | accepted |
| spouses | p_LZa66noW4FLr3NMV38ZjMy | 張氏 | accepted |
| ancestors | p_Dp8q3v4je1nMarPFQKSQZg | 王克善 | accepted |
| ancestors | p_EqBrC3P6PFftiJvnAm14hu | 王希仁 | accepted |
| other | p_5FmaUx5pBcmXKQcqQ78YJT | 王森 | accepted |
| other | p_K1Pw3mH4W16CQa58kxjMDx | 王榮 | accepted |
| other | p_ReefGjaxLdLvD49RVzGPr4 | 王佑 | accepted |
| other | p_UuGXcDwknrKH31QUBdehui | 王傑 | accepted |
| other | p_XV2xTVa2MzpHGZnv5RX14j | 王剛 | accepted |
| other | p_hxV5knL2LSSLdrEPUHGPS6 | 王佶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王剛（CBDB 296991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296991&o=json)
- [中国历代人物传记资料库：王佶（CBDB 297035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297035&o=json)
- [中国历代人物传记资料库：王傑（CBDB 297013）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297013&o=json)
- [中国历代人物传记资料库：王榮（CBDB 296978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296978&o=json)
- [中国历代人物传记资料库：王森（CBDB 297002）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297002&o=json)
- [中国历代人物传记资料库：王佑（CBDB 297024）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297024&o=json)
- [中国历代人物传记资料库：王佐（CBDB 198633）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198633&o=json)
- [中国历代人物传记资料库：張氏(王佐妻)（CBDB 296967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296967&o=json)

---
schema: wang-person/v1
id: p_h3Q7yK4WppDDdJLx2W9dJW
status: active
merged_into: null
display_name: 王圖
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ocRvuE4bYt7F4Up524htAD
        subject_person_id: p_h3Q7yK4WppDDdJLx2W9dJW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王圖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xUhisDxSgYtUjYuEYU1Eqs
          claim_id: c_ocRvuE4bYt7F4Up524htAD
          source_id: s_kmyfRuizKBHF9muvy7k3F9
          stance: supports
          locator: CBDB:123710
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（123710）
          source: &a1
            id: s_kmyfRuizKBHF9muvy7k3F9
            source_type: api_record
            title: 中国历代人物传记资料库：王圖（CBDB 123710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123710&o=json
            external_identifier: CBDB:123710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_o26w5tKa77AbKSG77K4QG2
        subject_person_id: p_h3Q7yK4WppDDdJLx2W9dJW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1557年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8CQ3PubCQkqnC927t34tJ1
          claim_id: c_o26w5tKa77AbKSG77K4QG2
          source_id: s_kmyfRuizKBHF9muvy7k3F9
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
        id: c_URwrHJkg4ahHBPS8jgg27L
        subject_person_id: p_h3Q7yK4WppDDdJLx2W9dJW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1627年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n8Sxg8XRX1X6Xjf92Kq8h6
          claim_id: c_URwrHJkg4ahHBPS8jgg27L
          source_id: s_kmyfRuizKBHF9muvy7k3F9
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
        id: c_ky7NTt2kSESQ5GgpXd5Vaj
        subject_person_id: p_h3Q7yK4WppDDdJLx2W9dJW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e9uPANTHUVtCsuueJtY83o
          claim_id: c_ky7NTt2kSESQ5GgpXd5Vaj
          source_id: s_kmyfRuizKBHF9muvy7k3F9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zFTmFPsJQQT2mO20_pmhLQ
        subject_person_id: p_q3ewFUkH4tvUNYqQiNKdGz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_h3Q7yK4WppDDdJLx2W9dJW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Xo0QKaMvJSGslnHmTpQBz
          claim_id: c_zFTmFPsJQQT2mO20_pmhLQ
          source_id: s_GJqFtVwAXXnju2DayqWmKq
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第四十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GJqFtVwAXXnju2DayqWmKq
            source_type: api_record
            title: 中国历代人物传记资料库：王邦憲（CBDB 228102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228102&o=json
            external_identifier: CBDB:228102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.552Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_q3ewFUkH4tvUNYqQiNKdGz
        status: active
        display_name: 王邦憲
        merged_into_person_id: null
  children:
    - claim:
        id: c_KV-sRCyKgrBMmkZLGeTXxT
        subject_person_id: p_h3Q7yK4WppDDdJLx2W9dJW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1C9MSQ94Pw8CNN4oDdnF1n
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yl2iN4D7dI65IiDQUIfHSh
          claim_id: c_KV-sRCyKgrBMmkZLGeTXxT
          source_id: s_iPE4RbYA3Xg11vs8QC5j74
          stance: supports
          locator: IHP 人名權威資料 13357：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_iPE4RbYA3Xg11vs8QC5j74
            source_type: api_record
            title: 中国历代人物传记资料库：王毓玄（CBDB 527169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527169&o=json
            external_identifier: CBDB:527169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.346Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1C9MSQ94Pw8CNN4oDdnF1n
        status: active
        display_name: 王毓玄
        merged_into_person_id: null
    - claim:
        id: c_Ga_oedi1Ci_Hh7vOp_mHlV
        subject_person_id: p_h3Q7yK4WppDDdJLx2W9dJW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bG23UWqGUM28CjMMHeN157
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kx3j_OpnK2q43iKteMqV-e
          claim_id: c_Ga_oedi1Ci_Hh7vOp_mHlV
          source_id: s_BQna1HB3A42Q23qy3vbF8a
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第四十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BQna1HB3A42Q23qy3vbF8a
            source_type: api_record
            title: 中国历代人物传记资料库：王淑抃（CBDB 228114）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228114&o=json
            external_identifier: CBDB:228114
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.554Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bG23UWqGUM28CjMMHeN157
        status: active
        display_name: 王淑抃
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_5Sy1T4KbZ-cgNOwUlboZtn
        subject_person_id: p_aRgUR2bV5G8GcADRgTUTHB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_h3Q7yK4WppDDdJLx2W9dJW
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dJosXOO-juK7HzjPStQ6Qv
          claim_id: c_5Sy1T4KbZ-cgNOwUlboZtn
          source_id: s_AkDestfPH7cg592fhvVucB
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第四十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AkDestfPH7cg592fhvVucB
            source_type: api_record
            title: 中国历代人物传记资料库：王宗仁（CBDB 228101）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228101&o=json
            external_identifier: CBDB:228101
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.551Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aRgUR2bV5G8GcADRgTUTHB
        status: active
        display_name: 王宗仁
        merged_into_person_id: null
    - claim:
        id: c_lE5T9H8s2b7gS1_uldAMk0
        subject_person_id: p_LkKJK2kEArXGxvQn3KA1vQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_h3Q7yK4WppDDdJLx2W9dJW
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WMKeikUnmcPvZQZGT_GZI-
          claim_id: c_lE5T9H8s2b7gS1_uldAMk0
          source_id: s_7RUJc6wJgzAYr9tf5bf15J
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第四十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7RUJc6wJgzAYr9tf5bf15J
            source_type: api_record
            title: 中国历代人物传记资料库：王永寧（CBDB 228100）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228100&o=json
            external_identifier: CBDB:228100
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.550Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LkKJK2kEArXGxvQn3KA1vQ
        status: active
        display_name: 王永寧
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王圖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王圖 | accepted |
| birth.date | 1557年 | accepted |
| death.date | 1627年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_q3ewFUkH4tvUNYqQiNKdGz | 王邦憲 | accepted |
| children | p_1C9MSQ94Pw8CNN4oDdnF1n | 王毓玄 | accepted |
| children | p_bG23UWqGUM28CjMMHeN157 | 王淑抃 | accepted |
| ancestors | p_aRgUR2bV5G8GcADRgTUTHB | 王宗仁 | accepted |
| ancestors | p_LkKJK2kEArXGxvQn3KA1vQ | 王永寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邦憲（CBDB 228102）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228102&o=json)
- [中国历代人物传记资料库：王淑抃（CBDB 228114）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228114&o=json)
- [中国历代人物传记资料库：王圖（CBDB 123710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123710&o=json)
- [中国历代人物传记资料库：王永寧（CBDB 228100）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228100&o=json)
- [中国历代人物传记资料库：王毓玄（CBDB 527169）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527169&o=json)
- [中国历代人物传记资料库：王宗仁（CBDB 228101）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228101&o=json)

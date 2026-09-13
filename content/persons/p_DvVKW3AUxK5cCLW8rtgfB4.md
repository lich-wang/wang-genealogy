---
schema: wang-person/v1
id: p_DvVKW3AUxK5cCLW8rtgfB4
status: active
merged_into: null
display_name: 王湯孫
cbdb_id: 207629
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Fkynnry4nEEiNGDxQvkPSK
        subject_person_id: p_DvVKW3AUxK5cCLW8rtgfB4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湯孫（生于1571年），明人物。籍贯安福，入仕進士。（中国历代人物传记资料库 CBDB 207629）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_r1b6_DR2j3BymaH2W_LuEe
          claim_id: c_Fkynnry4nEEiNGDxQvkPSK
          source_id: s_M2GYBf3DFNr4N1AikHp1do
          stance: supports
          locator: CBDB:207629
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_M2GYBf3DFNr4N1AikHp1do
            source_type: api_record
            title: 中国历代人物传记资料库：王湯孫（CBDB 207629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207629&o=json
            external_identifier: CBDB:207629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9bG2fsRBwBX4BeM4PB5ySh
        subject_person_id: p_DvVKW3AUxK5cCLW8rtgfB4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1571年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1571-01-01
            latest: 1571-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vR3PCyD3nR9rMX2eK5bfHs
          claim_id: c_9bG2fsRBwBX4BeM4PB5ySh
          source_id: s_M2GYBf3DFNr4N1AikHp1do
          stance: supports
          locator: CBDB:207629
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1571
          source:
            id: s_M2GYBf3DFNr4N1AikHp1do
            source_type: api_record
            title: 中国历代人物传记资料库：王湯孫（CBDB 207629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207629&o=json
            external_identifier: CBDB:207629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_F84gDNNJ7V2uvv95tHg2ce
        subject_person_id: p_DvVKW3AUxK5cCLW8rtgfB4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湯孫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aX1jb8JmxiPNuDzkVziR9F
          claim_id: c_F84gDNNJ7V2uvv95tHg2ce
          source_id: s_M2GYBf3DFNr4N1AikHp1do
          stance: supports
          locator: CBDB:207629
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1571
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YZme0_6I4w56b_v4hEB-op
        subject_person_id: p_CoUh8uj5CWroLH246QDHok
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DvVKW3AUxK5cCLW8rtgfB4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_411eFGuroxg-2Blds9E_W7
          claim_id: c_YZme0_6I4w56b_v4hEB-op
          source_id: s_zFRHFG3ZspqhhMqJmnhMop
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第二十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zFRHFG3ZspqhhMqJmnhMop
            source_type: api_record
            title: 中国历代人物传记资料库：王而縉（CBDB 232799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232799&o=json
            external_identifier: CBDB:232799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_CoUh8uj5CWroLH246QDHok
        status: active
        display_name: 王而縉
        merged_into_person_id: null
  children:
    - claim:
        id: c_2EPCbnrw-aaHrdz2TCObqX
        subject_person_id: p_DvVKW3AUxK5cCLW8rtgfB4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aBsKvmg78SuxNAjHJSK1uw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V1v5z8tZ2Ajuw1sGRtG1z_
          claim_id: c_2EPCbnrw-aaHrdz2TCObqX
          source_id: s_MNPgQhcRbXbae8pyL2RrN7
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第二十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MNPgQhcRbXbae8pyL2RrN7
            source_type: api_record
            title: 中国历代人物传记资料库：王㣧震（CBDB 232805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232805&o=json
            external_identifier: CBDB:232805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_aBsKvmg78SuxNAjHJSK1uw
        status: active
        display_name: 王㣧震
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_4P1WkDmD_9JoCTa7AloKWn
        subject_person_id: p_8e2K3VWTefmXzfc1EdNEe7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DvVKW3AUxK5cCLW8rtgfB4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MrDLZlqUU-dGH1wQRn8l2z
          claim_id: c_4P1WkDmD_9JoCTa7AloKWn
          source_id: s_SHjemTjLriBfHCtxxXm6WK
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第二十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SHjemTjLriBfHCtxxXm6WK
            source_type: api_record
            title: 中国历代人物传记资料库：王士任（CBDB 232798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232798&o=json
            external_identifier: CBDB:232798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.711Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8e2K3VWTefmXzfc1EdNEe7
        status: active
        display_name: 王士任
        merged_into_person_id: null
    - claim:
        id: c_HQpoRit5A7ZVPEuDn2QkMT
        subject_person_id: p_ayr63C9j4FCs6LB1rxnwhd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DvVKW3AUxK5cCLW8rtgfB4
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oGCnaOkACxIIb5Qk2-_KmM
          claim_id: c_HQpoRit5A7ZVPEuDn2QkMT
          source_id: s_vGnnELESJEYGSZJYfYyxsG
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第二十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vGnnELESJEYGSZJYfYyxsG
            source_type: api_record
            title: 中国历代人物传记资料库：王季卿（CBDB 232797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232797&o=json
            external_identifier: CBDB:232797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_ayr63C9j4FCs6LB1rxnwhd
        status: active
        display_name: 王季卿
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王湯孫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王湯孫（生于1571年），明人物。籍贯安福，入仕進士。（中国历代人物传记资料库 CBDB 207629） | accepted |
| birth.date | 1571年 | accepted |
| name.primary | 王湯孫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CoUh8uj5CWroLH246QDHok | 王而縉 | accepted |
| children | p_aBsKvmg78SuxNAjHJSK1uw | 王㣧震 | accepted |
| ancestors | p_8e2K3VWTefmXzfc1EdNEe7 | 王士任 | accepted |
| ancestors | p_ayr63C9j4FCs6LB1rxnwhd | 王季卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王而縉（CBDB 232799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232799&o=json)
- [中国历代人物传记资料库：王季卿（CBDB 232797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232797&o=json)
- [中国历代人物传记资料库：王士任（CBDB 232798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232798&o=json)
- [中国历代人物传记资料库：王湯孫（CBDB 207629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207629&o=json)
- [中国历代人物传记资料库：王㣧震（CBDB 232805）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232805&o=json)

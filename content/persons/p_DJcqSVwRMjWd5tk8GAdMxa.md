---
schema: wang-person/v1
id: p_DJcqSVwRMjWd5tk8GAdMxa
status: active
merged_into: null
display_name: 王佐
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gr3j2PMmgGtH3PokFDYQTJ
        subject_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
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
        - id: cs_dpC8pWswY3k9FJDFuaxTLT
          claim_id: c_Gr3j2PMmgGtH3PokFDYQTJ
          source_id: s_FcLxjRasG8Cpm8SXFoJ3Nu
          stance: supports
          locator: CBDB:207228
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207228）
          source: &a1
            id: s_FcLxjRasG8Cpm8SXFoJ3Nu
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 207228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207228&o=json
            external_identifier: CBDB:207228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.914Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GwAx3H2R8y2ZykF1wBx4Xz
        subject_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1561年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9Pzd5TQry4vmcMUQhcYJdK
          claim_id: c_GwAx3H2R8y2ZykF1wBx4Xz
          source_id: s_FcLxjRasG8Cpm8SXFoJ3Nu
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
        id: c_yUEUiWkEA2ZQG8hqq8oMR1
        subject_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
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
        - id: cs_bHQDBeG1vzRSo9wCnuuyNu
          claim_id: c_yUEUiWkEA2ZQG8hqq8oMR1
          source_id: s_FcLxjRasG8Cpm8SXFoJ3Nu
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
        id: c_WCqGlaJU5Bfb2wTlMBzVQp
        subject_person_id: p_HMYgDEoVuyW9xCPbxcPZ9o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fmzqNDkEawe2Y5acGSvw17
          claim_id: c_WCqGlaJU5Bfb2wTlMBzVQp
          source_id: s_rpmE2qAdCZPZnB4KMQikrZ
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百九十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rpmE2qAdCZPZnB4KMQikrZ
            source_type: api_record
            title: 中国历代人物传记资料库：王大才（CBDB 229896）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229896&o=json
            external_identifier: CBDB:229896
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.586Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HMYgDEoVuyW9xCPbxcPZ9o
        status: active
        display_name: 王大才
        merged_into_person_id: null
  children:
    - claim:
        id: c_ly3Pb8eB8Jk0YdPGqgER57
        subject_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7CDVStC37Bm3jkdzWufAMo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_03PIt4qujquFUR_88toxpm
          claim_id: c_ly3Pb8eB8Jk0YdPGqgER57
          source_id: s_CkYUU6XYgf6aGXMHUFCdzP
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百九十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CkYUU6XYgf6aGXMHUFCdzP
            source_type: api_record
            title: 中国历代人物传记资料库：王國祥（CBDB 229907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229907&o=json
            external_identifier: CBDB:229907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.596Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7CDVStC37Bm3jkdzWufAMo
        status: active
        display_name: 王國祥
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_TtEQy5Jk-99ctE2bJzj6xm
        subject_person_id: p_5tUGjNNTxa32Gu1p3k1bMA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l7uZ6D-5U5K3dYOOn7ylC4
          claim_id: c_TtEQy5Jk-99ctE2bJzj6xm
          source_id: s_JDHukXmCY3ppiwfPPRcN7C
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百九十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JDHukXmCY3ppiwfPPRcN7C
            source_type: api_record
            title: 中国历代人物传记资料库：王良（CBDB 229894）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229894&o=json
            external_identifier: CBDB:229894
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.584Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5tUGjNNTxa32Gu1p3k1bMA
        status: active
        display_name: 王良
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| birth.date | 1561年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HMYgDEoVuyW9xCPbxcPZ9o | 王大才 | accepted |
| children | p_7CDVStC37Bm3jkdzWufAMo | 王國祥 | accepted |
| ancestors | p_5tUGjNNTxa32Gu1p3k1bMA | 王良 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大才（CBDB 229896）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229896&o=json)
- [中国历代人物传记资料库：王國祥（CBDB 229907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229907&o=json)
- [中国历代人物传记资料库：王良（CBDB 229894）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229894&o=json)
- [中国历代人物传记资料库：王佐（CBDB 207228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207228&o=json)

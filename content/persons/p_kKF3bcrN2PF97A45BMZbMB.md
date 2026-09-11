---
schema: wang-person/v1
id: p_kKF3bcrN2PF97A45BMZbMB
status: active
merged_into: null
display_name: 王頊
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N9WgBSbx8XS7Pcebc1jBR9
        subject_person_id: p_kKF3bcrN2PF97A45BMZbMB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Rn4m2yyUzuM7SJmyP1Z27f
          claim_id: c_N9WgBSbx8XS7Pcebc1jBR9
          source_id: s_6GxqCoN7QkiTBKpKA5PCzN
          stance: supports
          locator: CBDB:192264
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192264）
          source: &a1
            id: s_6GxqCoN7QkiTBKpKA5PCzN
            source_type: api_record
            title: 中国历代人物传记资料库：王頊（CBDB 192264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192264&o=json
            external_identifier: CBDB:192264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.397Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2Nd3F6xa4R8WG5dKvWhuzH
        subject_person_id: p_kKF3bcrN2PF97A45BMZbMB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 858年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9ezS15XJAUCWstReyTUTQv
          claim_id: c_2Nd3F6xa4R8WG5dKvWhuzH
          source_id: s_6GxqCoN7QkiTBKpKA5PCzN
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
        id: c_uBMN67fxXtVEgohQKNEbr6
        subject_person_id: p_kKF3bcrN2PF97A45BMZbMB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頊（卒于858年），唐人物。曾任主事。（中国历代人物传记资料库 CBDB 192264）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4Wi4O6XnuPCXXLryQAlq7_
          claim_id: c_uBMN67fxXtVEgohQKNEbr6
          source_id: s_6GxqCoN7QkiTBKpKA5PCzN
          stance: supports
          locator: CBDB:192264
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_lb-S-mXJToGp-tXr5YaTXQ
        subject_person_id: p_kKF3bcrN2PF97A45BMZbMB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4mMGf7gUZoLSvUQ8q63md8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xg2EcybMhp02rvQjBLy5l7
          claim_id: c_lb-S-mXJToGp-tXr5YaTXQ
          source_id: s_XvG8HuCLfDmLeCHuCBTMNF
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XvG8HuCLfDmLeCHuCBTMNF
            source_type: api_record
            title: 中国历代人物传记资料库：王復元（CBDB 167291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167291&o=json
            external_identifier: CBDB:167291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.992Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4mMGf7gUZoLSvUQ8q63md8
        status: active
        display_name: 王復元
        merged_into_person_id: null
    - claim:
        id: c_q41Cqlxd0nppsworklHdN6
        subject_person_id: p_kKF3bcrN2PF97A45BMZbMB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9pWEAz7NqMDgmyPJXzXPSA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-gxSsW6BKmc6JCOa5yZki_
          claim_id: c_q41Cqlxd0nppsworklHdN6
          source_id: s_6GxqCoN7QkiTBKpKA5PCzN
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9pWEAz7NqMDgmyPJXzXPSA
        status: active
        display_name: 王福政
        merged_into_person_id: null
    - claim:
        id: c_UTkAVTLpMuICyN_vApLkx-
        subject_person_id: p_kKF3bcrN2PF97A45BMZbMB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QkuBep2mwWaKEfbgHSG4N1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cqPIzdhl7AZwvrfEw_y7Am
          claim_id: c_UTkAVTLpMuICyN_vApLkx-
          source_id: s_j2z8eeWbHkpsU4ip4mEKhQ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_j2z8eeWbHkpsU4ip4mEKhQ
            source_type: api_record
            title: 中国历代人物传记资料库：王十六娘（CBDB 143464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143464&o=json
            external_identifier: CBDB:143464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.623Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QkuBep2mwWaKEfbgHSG4N1
        status: active
        display_name: 王十六娘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王頊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王頊 | accepted |
| death.date | 858年 | accepted |
| bio.summary | 王頊（卒于858年），唐人物。曾任主事。（中国历代人物传记资料库 CBDB 192264） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4mMGf7gUZoLSvUQ8q63md8 | 王復元 | accepted |
| children | p_9pWEAz7NqMDgmyPJXzXPSA | 王福政 | accepted |
| children | p_QkuBep2mwWaKEfbgHSG4N1 | 王十六娘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王復元（CBDB 167291）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167291&o=json)
- [中国历代人物传记资料库：王十六娘（CBDB 143464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143464&o=json)
- [中国历代人物传记资料库：王頊（CBDB 192264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192264&o=json)

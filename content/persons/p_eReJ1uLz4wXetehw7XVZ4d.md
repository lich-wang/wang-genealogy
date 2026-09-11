---
schema: wang-person/v1
id: p_eReJ1uLz4wXetehw7XVZ4d
status: active
merged_into: null
display_name: 王鐐
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TgQSLx6KPiYVvBS1ePpSxF
        subject_person_id: p_eReJ1uLz4wXetehw7XVZ4d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wJTMwHJ9Bh2evwweN4insP
          claim_id: c_TgQSLx6KPiYVvBS1ePpSxF
          source_id: s_J4KKsacg8s462QJ79knCLt
          stance: supports
          locator: CBDB:92124
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92124）
          source: &a1
            id: s_J4KKsacg8s462QJ79knCLt
            source_type: api_record
            title: 中国历代人物传记资料库：王鐐（CBDB 92124）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92124&o=json
            external_identifier: CBDB:92124
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.148Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B4fo375FcCEzR8JwC8SgHa
        subject_person_id: p_eReJ1uLz4wXetehw7XVZ4d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐐，唐人物。籍贯太原，身份为詩人，入仕進士，曾任倉部員外郎、尚書省左司郎中、太子賓客。（中国历代人物传记资料库 CBDB 92124）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zUyelBqHroQYrSEmKmpX-K
          claim_id: c_B4fo375FcCEzR8JwC8SgHa
          source_id: s_J4KKsacg8s462QJ79knCLt
          stance: supports
          locator: CBDB:92124
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_q3qVuD6PruG1VHHf2zaTb6
        subject_person_id: p_6RPHj2j4cH1L4YTjuMhCpn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eReJ1uLz4wXetehw7XVZ4d
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sm_PBpraqNPsqSb5STzdRg
          claim_id: c_q3qVuD6PruG1VHHf2zaTb6
          source_id: s_QZUQfDNG45gtkNvmB8J354
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QZUQfDNG45gtkNvmB8J354
            source_type: api_record
            title: 中国历代人物传记资料库：王起（CBDB 92061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92061&o=json
            external_identifier: CBDB:92061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.110Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6RPHj2j4cH1L4YTjuMhCpn
        status: active
        display_name: 王起
        merged_into_person_id: null
  children:
    - claim:
        id: c_YZze7Lln_GN2wsOdsqsm49
        subject_person_id: p_eReJ1uLz4wXetehw7XVZ4d
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1CxHHcR6UoEHhBsMsyBKWC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__c4MekaBnRKw_o1H-cIRjY
          claim_id: c_YZze7Lln_GN2wsOdsqsm49
          source_id: s_um3xNPxhCKhr2A2e22SZL5
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 8326：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_um3xNPxhCKhr2A2e22SZL5
            source_type: api_record
            title: 中国历代人物传记资料库：王蘋（CBDB 175921）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175921&o=json
            external_identifier: CBDB:175921
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.198Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1CxHHcR6UoEHhBsMsyBKWC
        status: active
        display_name: 王蘋
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鐐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鐐 | accepted |
| bio.summary | 王鐐，唐人物。籍贯太原，身份为詩人，入仕進士，曾任倉部員外郎、尚書省左司郎中、太子賓客。（中国历代人物传记资料库 CBDB 92124） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6RPHj2j4cH1L4YTjuMhCpn | 王起 | accepted |
| children | p_1CxHHcR6UoEHhBsMsyBKWC | 王蘋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鐐（CBDB 92124）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92124&o=json)
- [中国历代人物传记资料库：王蘋（CBDB 175921）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175921&o=json)
- [中国历代人物传记资料库：王起（CBDB 92061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92061&o=json)

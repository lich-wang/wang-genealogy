---
schema: wang-person/v1
id: p_An7txcyErXqQRxNdWrST9P
status: active
merged_into: null
display_name: 王學誨
cbdb_id: 316268
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Lmq1pbhyqMx4MsNoV1ctBo
        subject_person_id: p_An7txcyErXqQRxNdWrST9P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學誨，明人物。嘉靖三十二年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 316268）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_o-4JyBNOHwbWfSPh1eETyF
          claim_id: c_Lmq1pbhyqMx4MsNoV1ctBo
          source_id: s_eGcvcBjFiPoNYBgyTqxP1K
          stance: supports
          locator: CBDB:316268
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_eGcvcBjFiPoNYBgyTqxP1K
            source_type: api_record
            title: 中国历代人物传记资料库：王學誨（CBDB 316268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316268&o=json
            external_identifier: CBDB:316268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_saGCzwQQk46MkcM6fY2F5P
        subject_person_id: p_An7txcyErXqQRxNdWrST9P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學誨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_djXFNaNyCDKYm6JNj949Ms
          claim_id: c_saGCzwQQk46MkcM6fY2F5P
          source_id: s_eGcvcBjFiPoNYBgyTqxP1K
          stance: supports
          locator: CBDB:316268
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_t55uYJ-1VIh-bG-vSMrD6A
        subject_person_id: p_CTanKyckA8Emf57Dk1Jm7o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_An7txcyErXqQRxNdWrST9P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2gm-jDWdL2PqzH1dL9tuH0
          claim_id: c_t55uYJ-1VIh-bG-vSMrD6A
          source_id: s_9walWAVyBn3ACYfjDa_s3g
          stance: supports
          locator: CBDB：兄弟 王學謨（204228）之父／母 王世卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王學誨 与 王學謨 为同胞（CBDB 记「兄」），王學謨 之父／母即 王學誨 之父／母。
          source:
            id: s_9walWAVyBn3ACYfjDa_s3g
            source_type: api_record
            title: 中国历代人物传记资料库：王學誨（CBDB 316268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316268&o=json
            external_identifier: CBDB:316268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CTanKyckA8Emf57Dk1Jm7o
        status: active
        display_name: 王世卿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_hTIQ10fuN_iMdyUprOrIoJ
        subject_person_id: p_An7txcyErXqQRxNdWrST9P
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nxMTBwovWR92XT8tAZTvLW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nGGLsl8hd2Q-uPzuPAuAll
          claim_id: c_hTIQ10fuN_iMdyUprOrIoJ
          source_id: s_9walWAVyBn3ACYfjDa_s3g
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204228 王學謨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9walWAVyBn3ACYfjDa_s3g
            source_type: api_record
            title: 中国历代人物传记资料库：王學誨（CBDB 316268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316268&o=json
            external_identifier: CBDB:316268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nxMTBwovWR92XT8tAZTvLW
        status: active
        display_name: 王學謨
        merged_into_person_id: null
---

# 王學誨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王學誨，明人物。嘉靖三十二年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 316268） | accepted |
| name.primary | 王學誨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CTanKyckA8Emf57Dk1Jm7o | 王世卿 | accepted |
| other | p_nxMTBwovWR92XT8tAZTvLW | 王學謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學誨（CBDB 316268）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316268&o=json)

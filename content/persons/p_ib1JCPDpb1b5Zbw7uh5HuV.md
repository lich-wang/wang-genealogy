---
schema: wang-person/v1
id: p_ib1JCPDpb1b5Zbw7uh5HuV
status: active
merged_into: null
display_name: 王彤
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MLKX8iDJcm14rcQLuvca43
        subject_person_id: p_ib1JCPDpb1b5Zbw7uh5HuV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QJxntSskBDUjqdh8HA2z4y
          claim_id: c_MLKX8iDJcm14rcQLuvca43
          source_id: s_22rd7A7nfub9a8anxrH7W4
          stance: supports
          locator: CBDB:36756
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（36756）
          source: &a1
            id: s_22rd7A7nfub9a8anxrH7W4
            source_type: api_record
            title: 中国历代人物传记资料库：王彤（CBDB 36756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36756&o=json
            external_identifier: CBDB:36756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.175Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tdQ7AWLPuNf52siQAEgbsQ
        subject_person_id: p_ib1JCPDpb1b5Zbw7uh5HuV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彤，宋人物。籍贯鄆城，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 36756）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eroGFfCTTvKyXl7AoJ3u6B
          claim_id: c_tdQ7AWLPuNf52siQAEgbsQ
          source_id: s_22rd7A7nfub9a8anxrH7W4
          stance: supports
          locator: CBDB:36756
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6qv092tNQ4JuYc5krsggYt
        subject_person_id: p_oREgSd4itdA3Mz6Mp8dkNX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ib1JCPDpb1b5Zbw7uh5HuV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_64-N3SgSBR6UuhoptGOZgl
          claim_id: c_6qv092tNQ4JuYc5krsggYt
          source_id: s_xSCYJCLb3tccVfVM9nThj9
          stance: supports
          locator: 宋人傳記資料索引(電子版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xSCYJCLb3tccVfVM9nThj9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：晁氏（37788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37788&o=json
            external_identifier: CBDB:37788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_oREgSd4itdA3Mz6Mp8dkNX
        status: active
        display_name: 晁氏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_up25hxPvTxv1QCbpv_FIp_
        subject_person_id: p_tJA4SGo5rnDTPZB6FnPcWP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ib1JCPDpb1b5Zbw7uh5HuV
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qVsgIrrs5Lev_QIuMVCOqz
          claim_id: c_up25hxPvTxv1QCbpv_FIp_
          source_id: s_ZbRR2qinMrmQKSJZ5nhy4i
          stance: supports
          locator: 宋人傳記資料索引(電子版)：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZbRR2qinMrmQKSJZ5nhy4i
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：周氏（37792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37792&o=json
            external_identifier: CBDB:37792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_tJA4SGo5rnDTPZB6FnPcWP
        status: active
        display_name: 周氏
        merged_into_person_id: null
    - claim:
        id: c_f3WhoIAQP5xPIAGSQRuoVA
        subject_person_id: p_GZbsE9QaKe1eQKtqPL2T7F
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ib1JCPDpb1b5Zbw7uh5HuV
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r1Hg04A1rI53D7pbqW5y8e
          claim_id: c_f3WhoIAQP5xPIAGSQRuoVA
          source_id: s_fGW6nhH5W9uBA7hHf2yaa8
          stance: supports
          locator: 宋人傳記資料索引(電子版)：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fGW6nhH5W9uBA7hHf2yaa8
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：孔氏（37779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37779&o=json
            external_identifier: CBDB:37779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:17.529Z
            metadata_json: null
      object_person:
        id: p_GZbsE9QaKe1eQKtqPL2T7F
        status: active
        display_name: 孔氏
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王彤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彤 | accepted |
| bio.summary | 王彤，宋人物。籍贯鄆城，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 36756） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oREgSd4itdA3Mz6Mp8dkNX | 晁氏 | accepted |
| ancestors | p_tJA4SGo5rnDTPZB6FnPcWP | 周氏 | accepted |
| ancestors | p_GZbsE9QaKe1eQKtqPL2T7F | 孔氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彤（CBDB 36756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36756&o=json)
- [CBDB 中国历代人物传记资料库：晁氏（37788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37788&o=json)
- [CBDB 中国历代人物传记资料库：孔氏（37779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37779&o=json)
- [CBDB 中国历代人物传记资料库：周氏（37792）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37792&o=json)

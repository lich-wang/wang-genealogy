---
schema: wang-person/v1
id: p_AEPDTFs3e2Ci1GpeDM9fLo
status: active
merged_into: null
display_name: 王芳
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jEfnZ1PriuRKUt1nGzb88a
        subject_person_id: p_AEPDTFs3e2Ci1GpeDM9fLo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BPMJho62Zner4vwaWWDAJA
          claim_id: c_jEfnZ1PriuRKUt1nGzb88a
          source_id: s_J1gMaHBDQbgLAyWwZ2RhRx
          stance: supports
          locator: CBDB:202288
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202288）
          source: &a1
            id: s_J1gMaHBDQbgLAyWwZ2RhRx
            source_type: api_record
            title: 中国历代人物传记资料库：王芳（CBDB 202288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202288&o=json
            external_identifier: CBDB:202288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.737Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1MgKaC3Qup757pzf6KD4Cx
        subject_person_id: p_AEPDTFs3e2Ci1GpeDM9fLo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1489年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gv2qWL9QDXLwpbyyuJR8ZZ
          claim_id: c_1MgKaC3Qup757pzf6KD4Cx
          source_id: s_J1gMaHBDQbgLAyWwZ2RhRx
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
        id: c_AK5fDZbA3nLDdv54BFtQtn
        subject_person_id: p_AEPDTFs3e2Ci1GpeDM9fLo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芳（生于1489年），明人物。明清進士進士，籍贯石首，入仕進士。（中国历代人物传记资料库 CBDB 202288）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8f6RR7qE9MbLdMGJqJ8rgS
          claim_id: c_AK5fDZbA3nLDdv54BFtQtn
          source_id: s_J1gMaHBDQbgLAyWwZ2RhRx
          stance: supports
          locator: CBDB:202288
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nsEovVXQV7cyKtjJ3p-lYw
        subject_person_id: p_1VVqD7EPGnVHF4wrhTw5JU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AEPDTFs3e2Ci1GpeDM9fLo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rWe1cVok9sm3wfCfr2P9SZ
          claim_id: c_nsEovVXQV7cyKtjJ3p-lYw
          source_id: s_pDsvQAaPubTkoAZNWdrF1o
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百八十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pDsvQAaPubTkoAZNWdrF1o
            source_type: api_record
            title: 中国历代人物传记资料库：王伯載（CBDB 286128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286128&o=json
            external_identifier: CBDB:286128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.231Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1VVqD7EPGnVHF4wrhTw5JU
        status: active
        display_name: 王伯載
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_9lveZVEJg-7b4hbqESz96Z
        subject_person_id: p_u9CuttstGuo6dW6KTcgeGL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AEPDTFs3e2Ci1GpeDM9fLo
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YRpPLtEmDLVRQDU5L0H3mq
          claim_id: c_9lveZVEJg-7b4hbqESz96Z
          source_id: s_mHAHGt1yfYwXyBvTTvfcEM
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百八十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mHAHGt1yfYwXyBvTTvfcEM
            source_type: api_record
            title: 中国历代人物传记资料库：王俸（CBDB 286127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286127&o=json
            external_identifier: CBDB:286127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.231Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_u9CuttstGuo6dW6KTcgeGL
        status: active
        display_name: 王俸
        merged_into_person_id: null
    - claim:
        id: c_PExiPM6HjQHXprmZmF5DSU
        subject_person_id: p_RBEo71kRbE8kErjSrTc5Qb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AEPDTFs3e2Ci1GpeDM9fLo
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fSfzquvdwYj71uqMdGnqtQ
          claim_id: c_PExiPM6HjQHXprmZmF5DSU
          source_id: s_7j7yNMtPWAQUWPCeW7LqTj
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百八十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7j7yNMtPWAQUWPCeW7LqTj
            source_type: api_record
            title: 中国历代人物传记资料库：王宗智（CBDB 286126）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286126&o=json
            external_identifier: CBDB:286126
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_RBEo71kRbE8kErjSrTc5Qb
        status: active
        display_name: 王宗智
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王芳 | accepted |
| birth.date | 1489年 | accepted |
| bio.summary | 王芳（生于1489年），明人物。明清進士進士，籍贯石首，入仕進士。（中国历代人物传记资料库 CBDB 202288） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1VVqD7EPGnVHF4wrhTw5JU | 王伯載 | accepted |
| ancestors | p_u9CuttstGuo6dW6KTcgeGL | 王俸 | accepted |
| ancestors | p_RBEo71kRbE8kErjSrTc5Qb | 王宗智 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯載（CBDB 286128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286128&o=json)
- [中国历代人物传记资料库：王芳（CBDB 202288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202288&o=json)
- [中国历代人物传记资料库：王俸（CBDB 286127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286127&o=json)
- [中国历代人物传记资料库：王宗智（CBDB 286126）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286126&o=json)

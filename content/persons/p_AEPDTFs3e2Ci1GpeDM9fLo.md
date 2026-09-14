---
schema: wang-person/v1
id: p_AEPDTFs3e2Ci1GpeDM9fLo
status: active
merged_into: null
display_name: 王芳
revision: 11
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
  other:
    - claim:
        id: c_q5MzPR5PklTHiLRHTWUy3Q
        subject_person_id: p_6wq95j1YSNJ7cDTgyZdvCa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_AEPDTFs3e2Ci1GpeDM9fLo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kgp4Fy_Nxk5H8dcBtjHDVa
          claim_id: c_q5MzPR5PklTHiLRHTWUy3Q
          source_id: s_TR5BjJmPcSQs7e9MTAJrr-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202288 王芳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TR5BjJmPcSQs7e9MTAJrr-
            source_type: api_record
            title: 中国历代人物传记资料库：王美（CBDB 286138）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286138&o=json
            external_identifier: CBDB:286138
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6wq95j1YSNJ7cDTgyZdvCa
        status: active
        display_name: 王美
        merged_into_person_id: null
    - claim:
        id: c_mEhWYvq7_wC-DA5mEtXiDt
        subject_person_id: p_AEPDTFs3e2Ci1GpeDM9fLo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FW21k14xDqFca8g7ebjbJV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t1MmisYB5KlRR2w8DYV3Va
          claim_id: c_mEhWYvq7_wC-DA5mEtXiDt
          source_id: s_iXyxRG3Hj2J-5vK4VaOgDz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202288 王芳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iXyxRG3Hj2J-5vK4VaOgDz
            source_type: api_record
            title: 中国历代人物传记资料库：王艾（CBDB 286136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286136&o=json
            external_identifier: CBDB:286136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FW21k14xDqFca8g7ebjbJV
        status: active
        display_name: 王艾
        merged_into_person_id: null
    - claim:
        id: c_gbSdZqfVjhrpmxgtHRtyzi
        subject_person_id: p_AEPDTFs3e2Ci1GpeDM9fLo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Q4qRU6HptEz88Z1o2riodA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TwH0E8KexC8W4YqEoaLaEl
          claim_id: c_gbSdZqfVjhrpmxgtHRtyzi
          source_id: s_4mh9LC6-Nx2e4x-AgSXpS3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202288 王芳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4mh9LC6-Nx2e4x-AgSXpS3
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 286135）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286135&o=json
            external_identifier: CBDB:286135
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q4qRU6HptEz88Z1o2riodA
        status: active
        display_name: 王英
        merged_into_person_id: null
    - claim:
        id: c_13Al1r0p0qu32VoapIsxmG
        subject_person_id: p_AEPDTFs3e2Ci1GpeDM9fLo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_c3dL8Ne1U9R7PYPiEt63o9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LQMQArNYoNHwTB0W47E5ho
          claim_id: c_13Al1r0p0qu32VoapIsxmG
          source_id: s_uW4LVXaMYyPJpwgzNNXpMN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202288 王芳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uW4LVXaMYyPJpwgzNNXpMN
            source_type: api_record
            title: 中国历代人物传记资料库：王遵（CBDB 286137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286137&o=json
            external_identifier: CBDB:286137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_c3dL8Ne1U9R7PYPiEt63o9
        status: active
        display_name: 王遵
        merged_into_person_id: null
    - claim:
        id: c_g-2IJ4HZs4e-rhdKIht6du
        subject_person_id: p_AEPDTFs3e2Ci1GpeDM9fLo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sfeJ5RgQcGsyj1UUHuuZQZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g59sb6VfalOFX38d-KD87o
          claim_id: c_g-2IJ4HZs4e-rhdKIht6du
          source_id: s_yBtf9z9OYCQO3oI0HpbT20
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202288 王芳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yBtf9z9OYCQO3oI0HpbT20
            source_type: api_record
            title: 中国历代人物传记资料库：王萱（CBDB 286134）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286134&o=json
            external_identifier: CBDB:286134
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sfeJ5RgQcGsyj1UUHuuZQZ
        status: active
        display_name: 王萱
        merged_into_person_id: null
    - claim:
        id: c_vmH49cUbBh3PEdrbq3mVWn
        subject_person_id: p_AEPDTFs3e2Ci1GpeDM9fLo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xHg2A6nupwgnkXwUBjo6ef
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PQbQwZ8MtO07mi-SSDnuDn
          claim_id: c_vmH49cUbBh3PEdrbq3mVWn
          source_id: s_j3XAl0msjRL8M3UuY69BqZ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202288 王芳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_j3XAl0msjRL8M3UuY69BqZ
            source_type: api_record
            title: 中国历代人物传记资料库：王苾（CBDB 286133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286133&o=json
            external_identifier: CBDB:286133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xHg2A6nupwgnkXwUBjo6ef
        status: active
        display_name: 王苾
        merged_into_person_id: null
    - claim:
        id: c_am6KtVPhdFdi81ePwF6WHG
        subject_person_id: p_AEPDTFs3e2Ci1GpeDM9fLo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zNVm442JKJscXFnvcQ8A7v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qf8E58A2A4jHNBI7oT7Wg_
          claim_id: c_am6KtVPhdFdi81ePwF6WHG
          source_id: s_BDW29Nw4iLus4LoPo9gAfY
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202288 王芳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BDW29Nw4iLus4LoPo9gAfY
            source_type: api_record
            title: 中国历代人物传记资料库：王萃（CBDB 286132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286132&o=json
            external_identifier: CBDB:286132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zNVm442JKJscXFnvcQ8A7v
        status: active
        display_name: 王萃
        merged_into_person_id: null
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
| other | p_6wq95j1YSNJ7cDTgyZdvCa | 王美 | accepted |
| other | p_FW21k14xDqFca8g7ebjbJV | 王艾 | accepted |
| other | p_Q4qRU6HptEz88Z1o2riodA | 王英 | accepted |
| other | p_c3dL8Ne1U9R7PYPiEt63o9 | 王遵 | accepted |
| other | p_sfeJ5RgQcGsyj1UUHuuZQZ | 王萱 | accepted |
| other | p_xHg2A6nupwgnkXwUBjo6ef | 王苾 | accepted |
| other | p_zNVm442JKJscXFnvcQ8A7v | 王萃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王艾（CBDB 286136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286136&o=json)
- [中国历代人物传记资料库：王苾（CBDB 286133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286133&o=json)
- [中国历代人物传记资料库：王伯載（CBDB 286128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286128&o=json)
- [中国历代人物传记资料库：王萃（CBDB 286132）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286132&o=json)
- [中国历代人物传记资料库：王芳（CBDB 202288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202288&o=json)
- [中国历代人物传记资料库：王俸（CBDB 286127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286127&o=json)
- [中国历代人物传记资料库：王美（CBDB 286138）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286138&o=json)
- [中国历代人物传记资料库：王萱（CBDB 286134）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286134&o=json)
- [中国历代人物传记资料库：王英（CBDB 286135）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286135&o=json)
- [中国历代人物传记资料库：王宗智（CBDB 286126）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286126&o=json)
- [中国历代人物传记资料库：王遵（CBDB 286137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286137&o=json)

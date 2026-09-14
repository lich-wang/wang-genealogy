---
schema: wang-person/v1
id: p_k3fw4jn7UF1hujd81L3vBe
status: active
merged_into: null
display_name: 王蔚
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_55uE26EaMAW6ibGsLGWDb4
        subject_person_id: p_k3fw4jn7UF1hujd81L3vBe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蔚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sVTXFHctHdJFKQ65mJrNao
          claim_id: c_55uE26EaMAW6ibGsLGWDb4
          source_id: s_U7g8Yd5LE8wFECaYyRm7KG
          stance: supports
          locator: CBDB:205903
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205903）
          source: &a1
            id: s_U7g8Yd5LE8wFECaYyRm7KG
            source_type: api_record
            title: 中国历代人物传记资料库：王蔚（CBDB 205903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205903&o=json
            external_identifier: CBDB:205903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.875Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PWsXRFcmWABXxDQsrmCtSL
        subject_person_id: p_k3fw4jn7UF1hujd81L3vBe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1542年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jN9Xk315RtV681ZMCWC4Xt
          claim_id: c_PWsXRFcmWABXxDQsrmCtSL
          source_id: s_U7g8Yd5LE8wFECaYyRm7KG
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
        id: c_nrkKjNW5tTDyjHfbV4iSge
        subject_person_id: p_k3fw4jn7UF1hujd81L3vBe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蔚（生于1542年），明人物。明清進士進士，籍贯清源，入仕進士。（中国历代人物传记资料库 CBDB 205903）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DN_vdZeSH7YbL7sXIta6jN
          claim_id: c_nrkKjNW5tTDyjHfbV4iSge
          source_id: s_U7g8Yd5LE8wFECaYyRm7KG
          stance: supports
          locator: CBDB:205903
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wLHNayD-BMiX-fwj_amy1n
        subject_person_id: p_cJPjdNwsR6729BhxkY9bu9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_k3fw4jn7UF1hujd81L3vBe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BS0Jzn4pTaobnYPano6J-t
          claim_id: c_wLHNayD-BMiX-fwj_amy1n
          source_id: s_fX2NiBK6X1E4F19HSQV43o
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百四十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fX2NiBK6X1E4F19HSQV43o
            source_type: api_record
            title: 中国历代人物传记资料库：王撫民（CBDB 210428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210428&o=json
            external_identifier: CBDB:210428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cJPjdNwsR6729BhxkY9bu9
        status: active
        display_name: 王撫民
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_jvS9BIAasdxz7AzR_QcQp9
        subject_person_id: p_EvAbb7DY8himCdLDQKtXZq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_k3fw4jn7UF1hujd81L3vBe
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5rQi2uHw1MTMYIapw4ogYq
          claim_id: c_jvS9BIAasdxz7AzR_QcQp9
          source_id: s_D7h21eHSxKfMBTxBmEqCHD
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百四十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_D7h21eHSxKfMBTxBmEqCHD
            source_type: api_record
            title: 中国历代人物传记资料库：王連（CBDB 210426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210426&o=json
            external_identifier: CBDB:210426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.001Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EvAbb7DY8himCdLDQKtXZq
        status: active
        display_name: 王連
        merged_into_person_id: null
    - claim:
        id: c_AqkzjlK3J8O5ny0OIRc3H-
        subject_person_id: p_uUJPU1zQRi3DAsgSa7zacb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_k3fw4jn7UF1hujd81L3vBe
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TNy0Uo2_2Ka3CWxTCc2hXV
          claim_id: c_AqkzjlK3J8O5ny0OIRc3H-
          source_id: s_HtmfKcaR2gJCfGPWHP9r7a
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百四十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HtmfKcaR2gJCfGPWHP9r7a
            source_type: api_record
            title: 中国历代人物传记资料库：王佑（CBDB 210427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210427&o=json
            external_identifier: CBDB:210427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uUJPU1zQRi3DAsgSa7zacb
        status: active
        display_name: 王佑
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_iczTsbn8s7mw3FRh-QFRZU
        subject_person_id: p_H1xyKpfKKwUtC1UcZNSPpZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_k3fw4jn7UF1hujd81L3vBe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MlxXRsL3gfnzrWflIu1kva
          claim_id: c_iczTsbn8s7mw3FRh-QFRZU
          source_id: s_tLKvVMJr45JwzWM4cP01ow
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205903 王蔚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tLKvVMJr45JwzWM4cP01ow
            source_type: api_record
            title: 中国历代人物传记资料库：王文薦（CBDB 210432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210432&o=json
            external_identifier: CBDB:210432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_H1xyKpfKKwUtC1UcZNSPpZ
        status: active
        display_name: 王文薦
        merged_into_person_id: null
    - claim:
        id: c_qaklc_Er8gbIOzwXhC3cl1
        subject_person_id: p_HK7Yqf7oZNVE1Sm8bdpuJV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_k3fw4jn7UF1hujd81L3vBe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TUcAByfF5PRDFU3JLepzCW
          claim_id: c_qaklc_Er8gbIOzwXhC3cl1
          source_id: s_2EySgIHreaqR0TYHNPNSt3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205903 王蔚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2EySgIHreaqR0TYHNPNSt3
            source_type: api_record
            title: 中国历代人物传记资料库：王文藝（CBDB 210434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210434&o=json
            external_identifier: CBDB:210434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HK7Yqf7oZNVE1Sm8bdpuJV
        status: active
        display_name: 王文藝
        merged_into_person_id: null
    - claim:
        id: c_AkQwijbZE6WurOGzhZOPJ_
        subject_person_id: p_LB3b7yHcYcCthoZFCN1DB6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_k3fw4jn7UF1hujd81L3vBe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_24IxX3JZ2QUocTp3O143bs
          claim_id: c_AkQwijbZE6WurOGzhZOPJ_
          source_id: s_zvqkL-OhLF_hH3xDxtHYS4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205903 王蔚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zvqkL-OhLF_hH3xDxtHYS4
            source_type: api_record
            title: 中国历代人物传记资料库：王藻（CBDB 210431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210431&o=json
            external_identifier: CBDB:210431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LB3b7yHcYcCthoZFCN1DB6
        status: active
        display_name: 王藻
        merged_into_person_id: null
    - claim:
        id: c_VahjfflfIf4avsYalYHsFN
        subject_person_id: p_Mfr14WZdLtDDLf9Fy4GsT7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_k3fw4jn7UF1hujd81L3vBe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bi5wDo87oLP7GrMDiWRypG
          claim_id: c_VahjfflfIf4avsYalYHsFN
          source_id: s_Psw9qeQSVTv6ubsGXjN6sP
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205903 王蔚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Psw9qeQSVTv6ubsGXjN6sP
            source_type: api_record
            title: 中国历代人物传记资料库：王文英（CBDB 210433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210433&o=json
            external_identifier: CBDB:210433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Mfr14WZdLtDDLf9Fy4GsT7
        status: active
        display_name: 王文英
        merged_into_person_id: null
---

# 王蔚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蔚 | accepted |
| birth.date | 1542年 | accepted |
| bio.summary | 王蔚（生于1542年），明人物。明清進士進士，籍贯清源，入仕進士。（中国历代人物传记资料库 CBDB 205903） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cJPjdNwsR6729BhxkY9bu9 | 王撫民 | accepted |
| ancestors | p_EvAbb7DY8himCdLDQKtXZq | 王連 | accepted |
| ancestors | p_uUJPU1zQRi3DAsgSa7zacb | 王佑 | accepted |
| other | p_H1xyKpfKKwUtC1UcZNSPpZ | 王文薦 | accepted |
| other | p_HK7Yqf7oZNVE1Sm8bdpuJV | 王文藝 | accepted |
| other | p_LB3b7yHcYcCthoZFCN1DB6 | 王藻 | accepted |
| other | p_Mfr14WZdLtDDLf9Fy4GsT7 | 王文英 | accepted |

## 外部来源

- [中国历代人物传记资料库：王撫民（CBDB 210428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210428&o=json)
- [中国历代人物传记资料库：王連（CBDB 210426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210426&o=json)
- [中国历代人物传记资料库：王蔚（CBDB 205903）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205903&o=json)
- [中国历代人物传记资料库：王文薦（CBDB 210432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210432&o=json)
- [中国历代人物传记资料库：王文藝（CBDB 210434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210434&o=json)
- [中国历代人物传记资料库：王文英（CBDB 210433）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210433&o=json)
- [中国历代人物传记资料库：王佑（CBDB 210427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210427&o=json)
- [中国历代人物传记资料库：王藻（CBDB 210431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210431&o=json)

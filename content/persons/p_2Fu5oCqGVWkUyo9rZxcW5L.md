---
schema: wang-person/v1
id: p_2Fu5oCqGVWkUyo9rZxcW5L
status: active
merged_into: null
display_name: 王忠
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wocZ9Pjbx5rXHrbi2HSNh8
        subject_person_id: p_2Fu5oCqGVWkUyo9rZxcW5L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8S3fr7t2mwYXeciJmcaro2
          claim_id: c_wocZ9Pjbx5rXHrbi2HSNh8
          source_id: s_8DtRzDxXopvpFicBdQg4r9
          stance: supports
          locator: CBDB:201503
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201503）
          source: &a1
            id: s_8DtRzDxXopvpFicBdQg4r9
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 201503）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201503&o=json
            external_identifier: CBDB:201503
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.679Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zxHrnnSX6f9joCPa46DLpM
        subject_person_id: p_2Fu5oCqGVWkUyo9rZxcW5L
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1471年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9fUUfZARreRtW9R5DZu6pn
          claim_id: c_zxHrnnSX6f9joCPa46DLpM
          source_id: s_8DtRzDxXopvpFicBdQg4r9
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
        id: c_9ndJrE3LCU3tRWGJ2Fau1x
        subject_person_id: p_2Fu5oCqGVWkUyo9rZxcW5L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠（生于1471年），明人物。明清進士進士，籍贯瀘州，入仕進士。（中国历代人物传记资料库 CBDB 201503）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uqKm5NGuHk-jODDX159EFq
          claim_id: c_9ndJrE3LCU3tRWGJ2Fau1x
          source_id: s_8DtRzDxXopvpFicBdQg4r9
          stance: supports
          locator: CBDB:201503
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DIHOYVE_d2jWY4DGsWloXi
        subject_person_id: p_ujsEdeJcxM64Nah2LiaMGR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2Fu5oCqGVWkUyo9rZxcW5L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yKlm2Okjs6FBTsoU4IXh9P
          claim_id: c_DIHOYVE_d2jWY4DGsWloXi
          source_id: s_8DtRzDxXopvpFicBdQg4r9
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第二甲第八十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ujsEdeJcxM64Nah2LiaMGR
        status: active
        display_name: 王廷賓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_XEvKK3jG5BfFBmlDXlRAje
        subject_person_id: p_2Fu5oCqGVWkUyo9rZxcW5L
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_2Kp1ZCWFHeNxjPtJvqZec2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__XmV0D7hPrfwJDFD3N-rFl
          claim_id: c_XEvKK3jG5BfFBmlDXlRAje
          source_id: s_uzRbltqjMAxBFzz1tENtKa
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第二甲第八十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uzRbltqjMAxBFzz1tENtKa
            source_type: api_record
            title: 中国历代人物传记资料库：魏氏(王忠妻)（CBDB 273477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273477&o=json
            external_identifier: CBDB:273477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2Kp1ZCWFHeNxjPtJvqZec2
        status: active
        display_name: 魏氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_YVrhaPUPOiqCKnyn-FL5cp
        subject_person_id: p_smrUUFMi5vUzJvegicWQC9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2Fu5oCqGVWkUyo9rZxcW5L
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lo0MNxKLdjVENnJzAIAG5F
          claim_id: c_YVrhaPUPOiqCKnyn-FL5cp
          source_id: s_8DtRzDxXopvpFicBdQg4r9
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第二甲第八十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_smrUUFMi5vUzJvegicWQC9
        status: active
        display_name: 王文諒
        merged_into_person_id: null
    - claim:
        id: c_iwxbf4AOfSCso4TPZgpwPb
        subject_person_id: p_ijV1RxGZA58ZeR4UR2Bv2N
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2Fu5oCqGVWkUyo9rZxcW5L
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PDcj7Rfbw3Szei1bcyFtNk
          claim_id: c_iwxbf4AOfSCso4TPZgpwPb
          source_id: s_8DtRzDxXopvpFicBdQg4r9
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第二甲第八十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ijV1RxGZA58ZeR4UR2Bv2N
        status: active
        display_name: 王質
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_OeLkQzfxI5sf2PTJKBuszd
        subject_person_id: p_2Fu5oCqGVWkUyo9rZxcW5L
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_6AGgUBgJL6zMWug8R17AH1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CrhuJD9KjbcJIsUcJGHG7T
          claim_id: c_OeLkQzfxI5sf2PTJKBuszd
          source_id: s_EJs3ZAnqYPURkiLy4RCoFZ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201503 王忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EJs3ZAnqYPURkiLy4RCoFZ
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 273480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273480&o=json
            external_identifier: CBDB:273480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6AGgUBgJL6zMWug8R17AH1
        status: active
        display_name: 王慶
        merged_into_person_id: null
    - claim:
        id: c_SMCFH4XdXTKSmX4iWjIOOG
        subject_person_id: p_2Fu5oCqGVWkUyo9rZxcW5L
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DYnsDysa5m4Y4KbtXDzFyL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6fiLouaTD8ls3fy7Mg0-6Q
          claim_id: c_SMCFH4XdXTKSmX4iWjIOOG
          source_id: s_WaOqhrGplZKxyDKcRQOhDm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201503 王忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WaOqhrGplZKxyDKcRQOhDm
            source_type: api_record
            title: 中国历代人物传记资料库：王愈（CBDB 273486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273486&o=json
            external_identifier: CBDB:273486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DYnsDysa5m4Y4KbtXDzFyL
        status: active
        display_name: 王愈
        merged_into_person_id: null
    - claim:
        id: c_sLEAZRsLaH0gxk8OxkuDqc
        subject_person_id: p_2Fu5oCqGVWkUyo9rZxcW5L
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Nexg3FPbSC1oMjvvKHKAS7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iYAT2m1zzBEqU-Gwc-LBHk
          claim_id: c_sLEAZRsLaH0gxk8OxkuDqc
          source_id: s_I8IlbSTiCJgc4VzeA78PiC
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201503 王忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_I8IlbSTiCJgc4VzeA78PiC
            source_type: api_record
            title: 中国历代人物传记资料库：王惠（CBDB 273481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273481&o=json
            external_identifier: CBDB:273481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Nexg3FPbSC1oMjvvKHKAS7
        status: active
        display_name: 王惠
        merged_into_person_id: null
    - claim:
        id: c_Jq1dkVf1lOlqpF_ql9lcbo
        subject_person_id: p_2Fu5oCqGVWkUyo9rZxcW5L
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Zppn462BPbELVFrEbxoebn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hh094Cp7vQka4nM1mXSZ6N
          claim_id: c_Jq1dkVf1lOlqpF_ql9lcbo
          source_id: s_GDXN29tpj6hZrhrWetujsY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201503 王忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GDXN29tpj6hZrhrWetujsY
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 273484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273484&o=json
            external_identifier: CBDB:273484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Zppn462BPbELVFrEbxoebn
        status: active
        display_name: 王寧
        merged_into_person_id: null
    - claim:
        id: c_3E6UZiSDAw5o5cg0aYwEMQ
        subject_person_id: p_2Fu5oCqGVWkUyo9rZxcW5L
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gkQAN2qUqRaM9G93xfQ4FR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3ymuv3ErJYnMLgj2tM0E8R
          claim_id: c_3E6UZiSDAw5o5cg0aYwEMQ
          source_id: s_sn8jbaHoJt7NPjjTax5KMM
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201503 王忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sn8jbaHoJt7NPjjTax5KMM
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 273479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273479&o=json
            external_identifier: CBDB:273479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gkQAN2qUqRaM9G93xfQ4FR
        status: active
        display_name: 王憲
        merged_into_person_id: null
    - claim:
        id: c_hEVMTRuqutIfYrC61CZg_y
        subject_person_id: p_2Fu5oCqGVWkUyo9rZxcW5L
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gyFYsTP81AGCkV7JXvNyLJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gtLJvfJgPjW5XVanbjvIk2
          claim_id: c_hEVMTRuqutIfYrC61CZg_y
          source_id: s_xTE8AP3kJTeAhzATYHSS-6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201503 王忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xTE8AP3kJTeAhzATYHSS-6
            source_type: api_record
            title: 中国历代人物传记资料库：王意（CBDB 273485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273485&o=json
            external_identifier: CBDB:273485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gyFYsTP81AGCkV7JXvNyLJ
        status: active
        display_name: 王意
        merged_into_person_id: null
    - claim:
        id: c_LcgTr9YPqUfVmuqpVVIgKQ
        subject_person_id: p_2Fu5oCqGVWkUyo9rZxcW5L
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oj7GmWXJ5DnZnWe1Rj6445
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EpKcsNfNjLV6_U1OE1qJI0
          claim_id: c_LcgTr9YPqUfVmuqpVVIgKQ
          source_id: s_tqlHUle6LVhZzOiMydS4QK
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201503 王忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tqlHUle6LVhZzOiMydS4QK
            source_type: api_record
            title: 中国历代人物传记资料库：王恩（CBDB 273482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273482&o=json
            external_identifier: CBDB:273482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oj7GmWXJ5DnZnWe1Rj6445
        status: active
        display_name: 王恩
        merged_into_person_id: null
    - claim:
        id: c_RwnC9-zZAAK9jcI5Y7Ey6Q
        subject_person_id: p_2Fu5oCqGVWkUyo9rZxcW5L
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_v5PJWMe91mKCCnquhKxCRh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qKccQyUdblxuxefL3Js81r
          claim_id: c_RwnC9-zZAAK9jcI5Y7Ey6Q
          source_id: s_b2tlvW2wTru_MJlzjhqb9s
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201503 王忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_b2tlvW2wTru_MJlzjhqb9s
            source_type: api_record
            title: 中国历代人物传记资料库：王愛（CBDB 273478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273478&o=json
            external_identifier: CBDB:273478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_v5PJWMe91mKCCnquhKxCRh
        status: active
        display_name: 王愛
        merged_into_person_id: null
---

# 王忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忠 | accepted |
| birth.date | 1471年 | accepted |
| bio.summary | 王忠（生于1471年），明人物。明清進士進士，籍贯瀘州，入仕進士。（中国历代人物传记资料库 CBDB 201503） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ujsEdeJcxM64Nah2LiaMGR | 王廷賓 | accepted |
| spouses | p_2Kp1ZCWFHeNxjPtJvqZec2 | 魏氏 | accepted |
| ancestors | p_smrUUFMi5vUzJvegicWQC9 | 王文諒 | accepted |
| ancestors | p_ijV1RxGZA58ZeR4UR2Bv2N | 王質 | accepted |
| other | p_6AGgUBgJL6zMWug8R17AH1 | 王慶 | accepted |
| other | p_DYnsDysa5m4Y4KbtXDzFyL | 王愈 | accepted |
| other | p_Nexg3FPbSC1oMjvvKHKAS7 | 王惠 | accepted |
| other | p_Zppn462BPbELVFrEbxoebn | 王寧 | accepted |
| other | p_gkQAN2qUqRaM9G93xfQ4FR | 王憲 | accepted |
| other | p_gyFYsTP81AGCkV7JXvNyLJ | 王意 | accepted |
| other | p_oj7GmWXJ5DnZnWe1Rj6445 | 王恩 | accepted |
| other | p_v5PJWMe91mKCCnquhKxCRh | 王愛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王愛（CBDB 273478）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273478&o=json)
- [中国历代人物传记资料库：王恩（CBDB 273482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273482&o=json)
- [中国历代人物传记资料库：王惠（CBDB 273481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273481&o=json)
- [中国历代人物传记资料库：王寧（CBDB 273484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273484&o=json)
- [中国历代人物传记资料库：王慶（CBDB 273480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273480&o=json)
- [中国历代人物传记资料库：王憲（CBDB 273479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273479&o=json)
- [中国历代人物传记资料库：王意（CBDB 273485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273485&o=json)
- [中国历代人物传记资料库：王愈（CBDB 273486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273486&o=json)
- [中国历代人物传记资料库：王忠（CBDB 201503）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201503&o=json)
- [中国历代人物传记资料库：魏氏(王忠妻)（CBDB 273477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273477&o=json)

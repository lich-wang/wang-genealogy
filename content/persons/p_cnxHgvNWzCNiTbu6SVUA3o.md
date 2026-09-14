---
schema: wang-person/v1
id: p_cnxHgvNWzCNiTbu6SVUA3o
status: active
merged_into: null
display_name: 王春
revision: 12
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F2m3Ryp1kiggHECP1XA1ki
        subject_person_id: p_cnxHgvNWzCNiTbu6SVUA3o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zZ3JxJPJkxJCnhGVKHLBmv
          claim_id: c_F2m3Ryp1kiggHECP1XA1ki
          source_id: s_M5K8c7YTrHQkmNymF17C3J
          stance: supports
          locator: CBDB:198362
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198362）
          source: &a1
            id: s_M5K8c7YTrHQkmNymF17C3J
            source_type: api_record
            title: 中国历代人物传记资料库：王春（CBDB 198362）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198362&o=json
            external_identifier: CBDB:198362
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.485Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_L6N8vUWJEpqu8eEg1McttH
        subject_person_id: p_cnxHgvNWzCNiTbu6SVUA3o
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1424年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oMA4mCECYW78A21bnLdHtL
          claim_id: c_L6N8vUWJEpqu8eEg1McttH
          source_id: s_M5K8c7YTrHQkmNymF17C3J
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
        id: c_zQ4dK4A5eXwP3rXovn3QYr
        subject_person_id: p_cnxHgvNWzCNiTbu6SVUA3o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春（生于1424年），明人物。明清進士進士，籍贯濟寧州，入仕進士。（中国历代人物传记资料库 CBDB 198362）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0me_akcCdaUWNc9ygHPb2G
          claim_id: c_zQ4dK4A5eXwP3rXovn3QYr
          source_id: s_M5K8c7YTrHQkmNymF17C3J
          stance: supports
          locator: CBDB:198362
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_foX01O4HPgtEtpTtd03bqJ
        subject_person_id: p_psesBqxpFDwKqz2PBTA4dC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cnxHgvNWzCNiTbu6SVUA3o
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rqpKYBNcQx2IgwiOoAqbLP
          claim_id: c_foX01O4HPgtEtpTtd03bqJ
          source_id: s_rj4Xn1Tt1t2oVSwfrw3wy5
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rj4Xn1Tt1t2oVSwfrw3wy5
            source_type: api_record
            title: 中国历代人物传记资料库：王宗器（CBDB 262581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262581&o=json
            external_identifier: CBDB:262581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.593Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_psesBqxpFDwKqz2PBTA4dC
        status: active
        display_name: 王宗器
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_9Yp-BvmLeCd1i8JzqAbcnU
        subject_person_id: p_95awjgHBCHs1xjiDGEzzQZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cnxHgvNWzCNiTbu6SVUA3o
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9z7MH1VEK6yJmd41YeB_ex
          claim_id: c_9Yp-BvmLeCd1i8JzqAbcnU
          source_id: s_g8QKmkV21suPgQsLPSPGXg
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_g8QKmkV21suPgQsLPSPGXg
            source_type: api_record
            title: 中国历代人物传记资料库：王繼先（CBDB 262570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262570&o=json
            external_identifier: CBDB:262570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.593Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_95awjgHBCHs1xjiDGEzzQZ
        status: active
        display_name: 王繼先
        merged_into_person_id: null
    - claim:
        id: c_5pbRqggGAzvMpPfcufWSmm
        subject_person_id: p_9V1EE18tsy5ujNqPYDC9fD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cnxHgvNWzCNiTbu6SVUA3o
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qmvSofxcdi7IzOsPY63c_U
          claim_id: c_5pbRqggGAzvMpPfcufWSmm
          source_id: s_ddWEeffxitEDpXoEfD2CzC
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ddWEeffxitEDpXoEfD2CzC
            source_type: api_record
            title: 中国历代人物传记资料库：王正興（CBDB 262559）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262559&o=json
            external_identifier: CBDB:262559
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_9V1EE18tsy5ujNqPYDC9fD
        status: active
        display_name: 王正興
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_AO96-UFbrWgpy_gFYWM4VX
        subject_person_id: p_2X7wSmw2wE7k8i7edasqTV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cnxHgvNWzCNiTbu6SVUA3o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kq_BWQLsNAmw2hVs3p5gZr
          claim_id: c_AO96-UFbrWgpy_gFYWM4VX
          source_id: s_bZAh3XWnWnX2izPiHFkS4z
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198362 王春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bZAh3XWnWnX2izPiHFkS4z
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳（CBDB 262614）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262614&o=json
            external_identifier: CBDB:262614
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2X7wSmw2wE7k8i7edasqTV
        status: active
        display_name: 王鳳
        merged_into_person_id: null
    - claim:
        id: c_Gyip8LKX9fxhfHDyfJRXNJ
        subject_person_id: p_6MGMcTyBshjbphvYsaXUo7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cnxHgvNWzCNiTbu6SVUA3o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_35I9WTSIiNcGcvDawBXP20
          claim_id: c_Gyip8LKX9fxhfHDyfJRXNJ
          source_id: s_f2QkyOIGZkjF2IzUIgttwW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198362 王春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_f2QkyOIGZkjF2IzUIgttwW
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 262670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262670&o=json
            external_identifier: CBDB:262670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6MGMcTyBshjbphvYsaXUo7
        status: active
        display_name: 王俊
        merged_into_person_id: null
    - claim:
        id: c_wACThDAU9altS1f6Bwltnd
        subject_person_id: p_C4u12XMpyLMet89ty14rkZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cnxHgvNWzCNiTbu6SVUA3o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__0QLs4qSDamyzg5XuGJ7Ua
          claim_id: c_wACThDAU9altS1f6Bwltnd
          source_id: s_I0eoR78uFDcyiWAD_bLzBr
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198362 王春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_I0eoR78uFDcyiWAD_bLzBr
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 262648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262648&o=json
            external_identifier: CBDB:262648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C4u12XMpyLMet89ty14rkZ
        status: active
        display_name: 王佐
        merged_into_person_id: null
    - claim:
        id: c_yWAUSIQLule5sIDgcX_nzX
        subject_person_id: p_K2ekES6mKeE39N363otRZZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cnxHgvNWzCNiTbu6SVUA3o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f8g-YWrkn7jmnye3y7y3hw
          claim_id: c_yWAUSIQLule5sIDgcX_nzX
          source_id: s_elsq1NoaQzCxSrmQtiHoqv
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198362 王春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_elsq1NoaQzCxSrmQtiHoqv
            source_type: api_record
            title: 中国历代人物传记资料库：王儀（CBDB 262659）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262659&o=json
            external_identifier: CBDB:262659
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_K2ekES6mKeE39N363otRZZ
        status: active
        display_name: 王儀
        merged_into_person_id: null
    - claim:
        id: c_NfkTHZQtKVW85Ar-uFz8TH
        subject_person_id: p_V6BhJ85iu1tXqyuK82ksWA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cnxHgvNWzCNiTbu6SVUA3o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3F0GpoD9jhurx3_YAyltup
          claim_id: c_NfkTHZQtKVW85Ar-uFz8TH
          source_id: s_lLovxkhoKXVAbnF84zfQgC
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198362 王春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lLovxkhoKXVAbnF84zfQgC
            source_type: api_record
            title: 中国历代人物传记资料库：王衡（CBDB 262625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262625&o=json
            external_identifier: CBDB:262625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V6BhJ85iu1tXqyuK82ksWA
        status: active
        display_name: 王衡
        merged_into_person_id: null
    - claim:
        id: c_xI0Zdft8PG3MhDcS2zQ6FE
        subject_person_id: p_cnxHgvNWzCNiTbu6SVUA3o
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gzD7cs7HQHKLfwziCooNJD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JxmtIHxrUQ2zOpm5pxTU1u
          claim_id: c_xI0Zdft8PG3MhDcS2zQ6FE
          source_id: s_KCoKks7GZeR2WH7dcQZvA_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198362 王春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KCoKks7GZeR2WH7dcQZvA_
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 262692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262692&o=json
            external_identifier: CBDB:262692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gzD7cs7HQHKLfwziCooNJD
        status: active
        display_name: 王儼
        merged_into_person_id: null
    - claim:
        id: c_XXH7AVIht-ZxsDCey2VxUu
        subject_person_id: p_cnxHgvNWzCNiTbu6SVUA3o
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_iYGxGBVaCXJEW5CYUUJwPy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Lciaj--MQ7RTKG1nIissqW
          claim_id: c_XXH7AVIht-ZxsDCey2VxUu
          source_id: s_VhkGbj54cPR4RbKhOPbwhj
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198362 王春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VhkGbj54cPR4RbKhOPbwhj
            source_type: api_record
            title: 中国历代人物传记资料库：王賢（CBDB 262637）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262637&o=json
            external_identifier: CBDB:262637
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iYGxGBVaCXJEW5CYUUJwPy
        status: active
        display_name: 王賢
        merged_into_person_id: null
    - claim:
        id: c_vg4ChPbMFOSnYO5kq6K3er
        subject_person_id: p_cnxHgvNWzCNiTbu6SVUA3o
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qd7ws8JMzbZJ6MD4MNPSim
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IfHupzm4yBYfNK9SRjHGSV
          claim_id: c_vg4ChPbMFOSnYO5kq6K3er
          source_id: s_75BJQsjfzKxXUYA0L_mzPO
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198362 王春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_75BJQsjfzKxXUYA0L_mzPO
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 262681）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262681&o=json
            external_identifier: CBDB:262681
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qd7ws8JMzbZJ6MD4MNPSim
        status: active
        display_name: 王倫
        merged_into_person_id: null
---

# 王春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王春 | accepted |
| birth.date | 1424年 | accepted |
| bio.summary | 王春（生于1424年），明人物。明清進士進士，籍贯濟寧州，入仕進士。（中国历代人物传记资料库 CBDB 198362） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_psesBqxpFDwKqz2PBTA4dC | 王宗器 | accepted |
| ancestors | p_95awjgHBCHs1xjiDGEzzQZ | 王繼先 | accepted |
| ancestors | p_9V1EE18tsy5ujNqPYDC9fD | 王正興 | accepted |
| other | p_2X7wSmw2wE7k8i7edasqTV | 王鳳 | accepted |
| other | p_6MGMcTyBshjbphvYsaXUo7 | 王俊 | accepted |
| other | p_C4u12XMpyLMet89ty14rkZ | 王佐 | accepted |
| other | p_K2ekES6mKeE39N363otRZZ | 王儀 | accepted |
| other | p_V6BhJ85iu1tXqyuK82ksWA | 王衡 | accepted |
| other | p_gzD7cs7HQHKLfwziCooNJD | 王儼 | accepted |
| other | p_iYGxGBVaCXJEW5CYUUJwPy | 王賢 | accepted |
| other | p_qd7ws8JMzbZJ6MD4MNPSim | 王倫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王春（CBDB 198362）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198362&o=json)
- [中国历代人物传记资料库：王鳳（CBDB 262614）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262614&o=json)
- [中国历代人物传记资料库：王衡（CBDB 262625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262625&o=json)
- [中国历代人物传记资料库：王繼先（CBDB 262570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262570&o=json)
- [中国历代人物传记资料库：王俊（CBDB 262670）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262670&o=json)
- [中国历代人物传记资料库：王倫（CBDB 262681）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262681&o=json)
- [中国历代人物传记资料库：王賢（CBDB 262637）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262637&o=json)
- [中国历代人物传记资料库：王儼（CBDB 262692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262692&o=json)
- [中国历代人物传记资料库：王儀（CBDB 262659）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262659&o=json)
- [中国历代人物传记资料库：王正興（CBDB 262559）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262559&o=json)
- [中国历代人物传记资料库：王宗器（CBDB 262581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262581&o=json)
- [中国历代人物传记资料库：王佐（CBDB 262648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262648&o=json)

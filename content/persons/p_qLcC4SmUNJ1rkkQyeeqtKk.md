---
schema: wang-person/v1
id: p_qLcC4SmUNJ1rkkQyeeqtKk
status: active
merged_into: null
display_name: 王廷陳
cbdb_id: 34668
revision: 14
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A2kwrdA2RcDJzDjewFGUFd
        subject_person_id: p_qLcC4SmUNJ1rkkQyeeqtKk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷陳，明人物。明清進士進士，籍贯黃岡，身份为博學之人，入仕進士。（中国历代人物传记资料库 CBDB 34668）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Th-XM-kU9QmGyuPy3zTpWU
          claim_id: c_A2kwrdA2RcDJzDjewFGUFd
          source_id: s_qjhQCVEp1sFgwz2z9YqyeK
          stance: supports
          locator: CBDB:34668
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_qjhQCVEp1sFgwz2z9YqyeK
            source_type: api_record
            title: 中国历代人物传记资料库：王廷陳（CBDB 34668）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34668&o=json
            external_identifier: CBDB:34668
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FqLCDSaaMPBBFfTE43vPgb
        subject_person_id: p_qLcC4SmUNJ1rkkQyeeqtKk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷陳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NEYeNrMwSgLrNvZ2ennxmH
          claim_id: c_FqLCDSaaMPBBFfTE43vPgb
          source_id: s_qjhQCVEp1sFgwz2z9YqyeK
          stance: supports
          locator: CBDB:34668
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_q77rACv3cwzYgfv64buhwJ
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qLcC4SmUNJ1rkkQyeeqtKk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Op6PToK09XMWs0pL-vjxCb
          claim_id: c_q77rACv3cwzYgfv64buhwJ
          source_id: s_8MUgv6sNQt8ThP4q5TJstL
          stance: supports
          locator: CBDB 双向互证（子 王廷陳 ⇄ 父 王濟）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_8MUgv6sNQt8ThP4q5TJstL
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 34667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34667&o=json
            external_identifier: CBDB:34667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.091Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CF5LJP7gMSDjjxZDLTJKd5
        status: active
        display_name: 王濟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_4xaFbTKSXT0qtHpfSI0Twg
        subject_person_id: p_g4twhoub1NzNDbDHptPzJX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qLcC4SmUNJ1rkkQyeeqtKk
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dM9rjW2fd8aAlrTsy-64TL
          claim_id: c_4xaFbTKSXT0qtHpfSI0Twg
          source_id: s_YkbBB1kk6cWXoE8hhwTBKb
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YkbBB1kk6cWXoE8hhwTBKb
            source_type: api_record
            title: 中国历代人物传记资料库：王思旻（CBDB 279532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279532&o=json
            external_identifier: CBDB:279532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_g4twhoub1NzNDbDHptPzJX
        status: active
        display_name: 王思旻
        merged_into_person_id: null
    - claim:
        id: c_e8OJR5Gkmn9wnOPJWyyF-X
        subject_person_id: p_phDjmWxWjdrApBA3u5EZWu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qLcC4SmUNJ1rkkQyeeqtKk
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q-cfz_AY6G4099c-zB5mYc
          claim_id: c_e8OJR5Gkmn9wnOPJWyyF-X
          source_id: s_EmKgwKiNH65kFz2QCRFA6s
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EmKgwKiNH65kFz2QCRFA6s
            source_type: api_record
            title: 中国历代人物传记资料库：王文奎（CBDB 279533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279533&o=json
            external_identifier: CBDB:279533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_phDjmWxWjdrApBA3u5EZWu
        status: active
        display_name: 王文奎
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_kdrf-vvEsuBFLnJ04fbafR
        subject_person_id: p_6WFPCBfjkFkdENUuMtErnW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qLcC4SmUNJ1rkkQyeeqtKk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FplqVB0cRgSTRauxvxbyv3
          claim_id: c_kdrf-vvEsuBFLnJ04fbafR
          source_id: s_xyjavYsmvasDuOmTuqXjqW
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34668 王廷陳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xyjavYsmvasDuOmTuqXjqW
            source_type: api_record
            title: 中国历代人物传记资料库：王廷器（CBDB 279544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279544&o=json
            external_identifier: CBDB:279544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6WFPCBfjkFkdENUuMtErnW
        status: active
        display_name: 王廷器
        merged_into_person_id: null
    - claim:
        id: c_ncU8cTN5hRPKSYl0PgFPk6
        subject_person_id: p_JjZGqgWMgVAiSEuj3G7mwV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qLcC4SmUNJ1rkkQyeeqtKk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6J9rs9NkY3YLB9CPNSt1kf
          claim_id: c_ncU8cTN5hRPKSYl0PgFPk6
          source_id: s_cCrMhOBIhVX0-gkPN9PHUF
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34668 王廷陳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cCrMhOBIhVX0-gkPN9PHUF
            source_type: api_record
            title: 中国历代人物传记资料库：王廷讚（CBDB 279541）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279541&o=json
            external_identifier: CBDB:279541
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JjZGqgWMgVAiSEuj3G7mwV
        status: active
        display_name: 王廷讚
        merged_into_person_id: null
    - claim:
        id: c_40147XJXk59LKLik4R7OV6
        subject_person_id: p_Ncjpn7BNHUs4fdtcYyXYCR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qLcC4SmUNJ1rkkQyeeqtKk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_68okYMIP3yz9zRptSr2Mp7
          claim_id: c_40147XJXk59LKLik4R7OV6
          source_id: s_3_CsaiXvCtdCFXOP_cRxmn
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 34668 王廷陳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3_CsaiXvCtdCFXOP_cRxmn
            source_type: api_record
            title: 中国历代人物传记资料库：王廷槐（CBDB 279545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279545&o=json
            external_identifier: CBDB:279545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ncjpn7BNHUs4fdtcYyXYCR
        status: active
        display_name: 王廷槐
        merged_into_person_id: null
    - claim:
        id: c_BvwZM4qBv-lKZG9q13yfZG
        subject_person_id: p_SbU6HDNRZJcM1Xz6pm1G8C
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qLcC4SmUNJ1rkkQyeeqtKk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ut7fVNc1HPBNiA81dKezsa
          claim_id: c_BvwZM4qBv-lKZG9q13yfZG
          source_id: s_RY2XDvuB8JF9-L6mARYfn8
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34668 王廷陳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RY2XDvuB8JF9-L6mARYfn8
            source_type: api_record
            title: 中国历代人物传记资料库：王廷詔（CBDB 279540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279540&o=json
            external_identifier: CBDB:279540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SbU6HDNRZJcM1Xz6pm1G8C
        status: active
        display_name: 王廷詔
        merged_into_person_id: null
    - claim:
        id: c_pLKYKehDvaN0BdnscfcRWj
        subject_person_id: p_ccujF3iGEJ6vZ6y43wc5Tw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qLcC4SmUNJ1rkkQyeeqtKk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W_LxIn68D53B3hGNKv5bWd
          claim_id: c_pLKYKehDvaN0BdnscfcRWj
          source_id: s_Fr0WY4-yMK6hHTnv4cMNar
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34668 王廷陳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Fr0WY4-yMK6hHTnv4cMNar
            source_type: api_record
            title: 中国历代人物传记资料库：王廷楫（CBDB 279538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279538&o=json
            external_identifier: CBDB:279538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ccujF3iGEJ6vZ6y43wc5Tw
        status: active
        display_name: 王廷楫
        merged_into_person_id: null
    - claim:
        id: c_IVws9JchTgophG2GNbC3ut
        subject_person_id: p_grJ3t8tA8YcD9PpHUc4YGd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qLcC4SmUNJ1rkkQyeeqtKk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e72hVGeYbToDINjz8_7OLA
          claim_id: c_IVws9JchTgophG2GNbC3ut
          source_id: s_LpdnGnGnDYCqsjUknTbWFU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34668 王廷陳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_LpdnGnGnDYCqsjUknTbWFU
            source_type: api_record
            title: 中国历代人物传记资料库：王廷儒（CBDB 279543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279543&o=json
            external_identifier: CBDB:279543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_grJ3t8tA8YcD9PpHUc4YGd
        status: active
        display_name: 王廷儒
        merged_into_person_id: null
    - claim:
        id: c_xHMHbxjZ3Ku52YpHqMP4IH
        subject_person_id: p_hiFzB7vgXbRgcuocTEHnbi
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qLcC4SmUNJ1rkkQyeeqtKk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vgtED7dCQKYoJBlWXzQYYs
          claim_id: c_xHMHbxjZ3Ku52YpHqMP4IH
          source_id: s_kw1Z6WvHjJ7FFi_ozPFwxv
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34668 王廷陳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kw1Z6WvHjJ7FFi_ozPFwxv
            source_type: api_record
            title: 中国历代人物传记资料库：王廷梅（CBDB 279539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279539&o=json
            external_identifier: CBDB:279539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hiFzB7vgXbRgcuocTEHnbi
        status: active
        display_name: 王廷梅
        merged_into_person_id: null
    - claim:
        id: c_5TMLPB5syVTcvy7f2K8MaC
        subject_person_id: p_qLcC4SmUNJ1rkkQyeeqtKk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uDirupxgX4n5Uue7GWds8u
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZawKbzOm50Tfkm-1GuT-1p
          claim_id: c_5TMLPB5syVTcvy7f2K8MaC
          source_id: s_aioNf64PJTnB7lVZXO4tZA
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34668 王廷陳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_aioNf64PJTnB7lVZXO4tZA
            source_type: api_record
            title: 中国历代人物传记资料库：王廷錄（CBDB 279537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279537&o=json
            external_identifier: CBDB:279537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uDirupxgX4n5Uue7GWds8u
        status: active
        display_name: 王廷錄
        merged_into_person_id: null
---

# 王廷陳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王廷陳，明人物。明清進士進士，籍贯黃岡，身份为博學之人，入仕進士。（中国历代人物传记资料库 CBDB 34668） | accepted |
| name.primary | 王廷陳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CF5LJP7gMSDjjxZDLTJKd5 | 王濟 | accepted |
| ancestors | p_g4twhoub1NzNDbDHptPzJX | 王思旻 | accepted |
| ancestors | p_phDjmWxWjdrApBA3u5EZWu | 王文奎 | accepted |
| other | p_6WFPCBfjkFkdENUuMtErnW | 王廷器 | accepted |
| other | p_JjZGqgWMgVAiSEuj3G7mwV | 王廷讚 | accepted |
| other | p_Ncjpn7BNHUs4fdtcYyXYCR | 王廷槐 | accepted |
| other | p_SbU6HDNRZJcM1Xz6pm1G8C | 王廷詔 | accepted |
| other | p_ccujF3iGEJ6vZ6y43wc5Tw | 王廷楫 | accepted |
| other | p_grJ3t8tA8YcD9PpHUc4YGd | 王廷儒 | accepted |
| other | p_hiFzB7vgXbRgcuocTEHnbi | 王廷梅 | accepted |
| other | p_uDirupxgX4n5Uue7GWds8u | 王廷錄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濟（CBDB 34667）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34667&o=json)
- [中国历代人物传记资料库：王思旻（CBDB 279532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279532&o=json)
- [中国历代人物传记资料库：王廷陳（CBDB 34668）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34668&o=json)
- [中国历代人物传记资料库：王廷槐（CBDB 279545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279545&o=json)
- [中国历代人物传记资料库：王廷楫（CBDB 279538）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279538&o=json)
- [中国历代人物传记资料库：王廷錄（CBDB 279537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279537&o=json)
- [中国历代人物传记资料库：王廷梅（CBDB 279539）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279539&o=json)
- [中国历代人物传记资料库：王廷器（CBDB 279544）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279544&o=json)
- [中国历代人物传记资料库：王廷儒（CBDB 279543）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279543&o=json)
- [中国历代人物传记资料库：王廷讚（CBDB 279541）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279541&o=json)
- [中国历代人物传记资料库：王廷詔（CBDB 279540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279540&o=json)
- [中国历代人物传记资料库：王文奎（CBDB 279533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279533&o=json)

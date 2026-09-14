---
schema: wang-person/v1
id: p_1qFNNFzs4996RToNKGEdK3
status: active
merged_into: null
display_name: 王玉
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fr6g6MLkCp77mPB6djzkHd
        subject_person_id: p_1qFNNFzs4996RToNKGEdK3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UG1w5NyR6F3pwtAUCNFcew
          claim_id: c_fr6g6MLkCp77mPB6djzkHd
          source_id: s_LAj1ZAry8QMdax8UaGcBmn
          stance: supports
          locator: CBDB:301946
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（301946）
          source: &a1
            id: s_LAj1ZAry8QMdax8UaGcBmn
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 301946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301946&o=json
            external_identifier: CBDB:301946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.644Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PbxPQjoahLFBRthC8AiUmN
        subject_person_id: p_1qFNNFzs4996RToNKGEdK3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉，明人物。嘉靖十七年進士，籍贯安邱。（中国历代人物传记资料库 CBDB 301946）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XY4Mp3RU7eIlQLw2EOq8XF
          claim_id: c_PbxPQjoahLFBRthC8AiUmN
          source_id: s_LAj1ZAry8QMdax8UaGcBmn
          stance: supports
          locator: CBDB:301946
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_quevHbUnY4sUjZVCegOt4P
        subject_person_id: p_1qFNNFzs4996RToNKGEdK3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_h6Qqwu6rcGKuAFwWWFGZPB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3xfEhECfyvKi2T0xZL__uy
          claim_id: c_quevHbUnY4sUjZVCegOt4P
          source_id: s_LAj1ZAry8QMdax8UaGcBmn
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第二百一十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_h6Qqwu6rcGKuAFwWWFGZPB
        status: active
        display_name: 王大平
        merged_into_person_id: null
    - claim:
        id: c_z118Q-mwCPVBs55vZ6w1Lb
        subject_person_id: p_1qFNNFzs4996RToNKGEdK3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5zz7gPQ34eK1HF4tNPnrfW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9P9qg-qn9nRK2G9l-ameNv
          claim_id: c_z118Q-mwCPVBs55vZ6w1Lb
          source_id: s_DrhG7LZgKxorEqcqNrJen1
          stance: supports
          locator: CBDB：兄弟 王大平（203248）之父／母 王玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王大化 与 王大平 为同胞（CBDB 记「弟」），王大平 之父／母即 王大化 之父／母。
          source:
            id: s_DrhG7LZgKxorEqcqNrJen1
            source_type: api_record
            title: 中国历代人物传记资料库：王大化（CBDB 301950）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301950&o=json
            external_identifier: CBDB:301950
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5zz7gPQ34eK1HF4tNPnrfW
        status: active
        display_name: 王大化
        merged_into_person_id: null
    - claim:
        id: c_9bmP1m0bbcLhXVVgSydidI
        subject_person_id: p_1qFNNFzs4996RToNKGEdK3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6ggeMHhi3E1rqHEVy843uf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H3BBg3J5jfOycdKWJzHSIC
          claim_id: c_9bmP1m0bbcLhXVVgSydidI
          source_id: s_WNBX0ZDYKzZl7DMSJGuupT
          stance: supports
          locator: CBDB：兄弟 王大平（203248）之父／母 王玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王大任 与 王大平 为同胞（CBDB 记「弟」），王大平 之父／母即 王大任 之父／母。
          source:
            id: s_WNBX0ZDYKzZl7DMSJGuupT
            source_type: api_record
            title: 中国历代人物传记资料库：王大任（CBDB 301951）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301951&o=json
            external_identifier: CBDB:301951
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6ggeMHhi3E1rqHEVy843uf
        status: active
        display_name: 王大任
        merged_into_person_id: null
    - claim:
        id: c_iHjjzsDQRD4EJi2a-t8Bso
        subject_person_id: p_1qFNNFzs4996RToNKGEdK3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_87CKmEcchyFCGh6F8m2QpB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DlwHAg4XNgbkk_ZSWtYp5Z
          claim_id: c_iHjjzsDQRD4EJi2a-t8Bso
          source_id: s_Brg7znYVed_226y4OoX7cd
          stance: supports
          locator: CBDB：兄弟 王大平（203248）之父／母 王玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王大皞 与 王大平 为同胞（CBDB 记「兄」），王大平 之父／母即 王大皞 之父／母。
          source:
            id: s_Brg7znYVed_226y4OoX7cd
            source_type: api_record
            title: 中国历代人物传记资料库：王大皞（CBDB 301956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301956&o=json
            external_identifier: CBDB:301956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_87CKmEcchyFCGh6F8m2QpB
        status: active
        display_name: 王大皞
        merged_into_person_id: null
    - claim:
        id: c_b6bOkaPcgIWU8Kay8hxmp8
        subject_person_id: p_1qFNNFzs4996RToNKGEdK3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HuPauQCDEX91zx5oc7TGn3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wyy8_97wwChZPWgTopLy-3
          claim_id: c_b6bOkaPcgIWU8Kay8hxmp8
          source_id: s_Ga-RW-3fAbm2Js_YOiXdtT
          stance: supports
          locator: CBDB：兄弟 王大平（203248）之父／母 王玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王大治 与 王大平 为同胞（CBDB 记「兄」），王大平 之父／母即 王大治 之父／母。
          source:
            id: s_Ga-RW-3fAbm2Js_YOiXdtT
            source_type: api_record
            title: 中国历代人物传记资料库：王大治（CBDB 301953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301953&o=json
            external_identifier: CBDB:301953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HuPauQCDEX91zx5oc7TGn3
        status: active
        display_name: 王大治
        merged_into_person_id: null
    - claim:
        id: c_ycwck0AsUV5Ced_pMDTM8v
        subject_person_id: p_1qFNNFzs4996RToNKGEdK3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o7D2MU72mH25Jvuq1USmMP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_McJgV5b58KMfjyGFqNLpx3
          claim_id: c_ycwck0AsUV5Ced_pMDTM8v
          source_id: s_cGdKVzIZCYr36bUHQMR-Fp
          stance: supports
          locator: CBDB：兄弟 王大平（203248）之父／母 王玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王大雍 与 王大平 为同胞（CBDB 记「兄」），王大平 之父／母即 王大雍 之父／母。
          source:
            id: s_cGdKVzIZCYr36bUHQMR-Fp
            source_type: api_record
            title: 中国历代人物传记资料库：王大雍（CBDB 301954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301954&o=json
            external_identifier: CBDB:301954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_o7D2MU72mH25Jvuq1USmMP
        status: active
        display_name: 王大雍
        merged_into_person_id: null
    - claim:
        id: c_TIBFQjKXpV0DQ-YEVYEJqs
        subject_person_id: p_1qFNNFzs4996RToNKGEdK3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oFc73oNB9gGvmoW38GJWD5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YCAqnHblgJzSZMst9jfFZz
          claim_id: c_TIBFQjKXpV0DQ-YEVYEJqs
          source_id: s_2mIWY14NVYZG3pXjscuzwZ
          stance: supports
          locator: CBDB：兄弟 王大平（203248）之父／母 王玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王大命 与 王大平 为同胞（CBDB 记「兄」），王大平 之父／母即 王大命 之父／母。
          source:
            id: s_2mIWY14NVYZG3pXjscuzwZ
            source_type: api_record
            title: 中国历代人物传记资料库：王大命（CBDB 301957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301957&o=json
            external_identifier: CBDB:301957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oFc73oNB9gGvmoW38GJWD5
        status: active
        display_name: 王大命
        merged_into_person_id: null
    - claim:
        id: c_QC0ZSjWDo0bi9ccmZQ4yjb
        subject_person_id: p_1qFNNFzs4996RToNKGEdK3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_paoNeLvsMJMf94SSkkWUqP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cPp68joPLYMfjQsqkLgJMw
          claim_id: c_QC0ZSjWDo0bi9ccmZQ4yjb
          source_id: s_fdxAwHGhU0vniB0uK1Cviw
          stance: supports
          locator: CBDB：兄弟 王大平（203248）之父／母 王玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王大熙 与 王大平 为同胞（CBDB 记「兄」），王大平 之父／母即 王大熙 之父／母。
          source:
            id: s_fdxAwHGhU0vniB0uK1Cviw
            source_type: api_record
            title: 中国历代人物传记资料库：王大熙（CBDB 301955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301955&o=json
            external_identifier: CBDB:301955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_paoNeLvsMJMf94SSkkWUqP
        status: active
        display_name: 王大熙
        merged_into_person_id: null
    - claim:
        id: c_Ffqt4EAnTJA-01eqPEPnmV
        subject_person_id: p_1qFNNFzs4996RToNKGEdK3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qspHsATCKb9gxp8RCUtcek
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C5BFolSsJobwL5Js5Kq_Mn
          claim_id: c_Ffqt4EAnTJA-01eqPEPnmV
          source_id: s_4PkUvKOyoxSY45C1BplzsV
          stance: supports
          locator: CBDB：兄弟 王大平（203248）之父／母 王玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王大均 与 王大平 为同胞（CBDB 记「弟」），王大平 之父／母即 王大均 之父／母。
          source:
            id: s_4PkUvKOyoxSY45C1BplzsV
            source_type: api_record
            title: 中国历代人物传记资料库：王大均（CBDB 301952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301952&o=json
            external_identifier: CBDB:301952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qspHsATCKb9gxp8RCUtcek
        status: active
        display_name: 王大均
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉 | accepted |
| bio.summary | 王玉，明人物。嘉靖十七年進士，籍贯安邱。（中国历代人物传记资料库 CBDB 301946） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_h6Qqwu6rcGKuAFwWWFGZPB | 王大平 | accepted |
| children | p_5zz7gPQ34eK1HF4tNPnrfW | 王大化 | accepted |
| children | p_6ggeMHhi3E1rqHEVy843uf | 王大任 | accepted |
| children | p_87CKmEcchyFCGh6F8m2QpB | 王大皞 | accepted |
| children | p_HuPauQCDEX91zx5oc7TGn3 | 王大治 | accepted |
| children | p_o7D2MU72mH25Jvuq1USmMP | 王大雍 | accepted |
| children | p_oFc73oNB9gGvmoW38GJWD5 | 王大命 | accepted |
| children | p_paoNeLvsMJMf94SSkkWUqP | 王大熙 | accepted |
| children | p_qspHsATCKb9gxp8RCUtcek | 王大均 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大皞（CBDB 301956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301956&o=json)
- [中国历代人物传记资料库：王大化（CBDB 301950）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301950&o=json)
- [中国历代人物传记资料库：王大均（CBDB 301952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301952&o=json)
- [中国历代人物传记资料库：王大命（CBDB 301957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301957&o=json)
- [中国历代人物传记资料库：王大任（CBDB 301951）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301951&o=json)
- [中国历代人物传记资料库：王大熙（CBDB 301955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301955&o=json)
- [中国历代人物传记资料库：王大雍（CBDB 301954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301954&o=json)
- [中国历代人物传记资料库：王大治（CBDB 301953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301953&o=json)
- [中国历代人物传记资料库：王玉（CBDB 301946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301946&o=json)

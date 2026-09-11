---
schema: wang-person/v1
id: p_S6ZZKMVMpbpMSQYqkUgMjL
status: active
merged_into: null
display_name: 王晞亮
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AJ7sH9KUjbsFk9ZzpVdYwe
        subject_person_id: p_S6ZZKMVMpbpMSQYqkUgMjL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晞亮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BHbrRkufPP1xPStoNyBf9j
          claim_id: c_AJ7sH9KUjbsFk9ZzpVdYwe
          source_id: s_x1FrR6DF9GxLpn7La1NHdM
          stance: supports
          locator: CBDB:1813
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1813）
          source: &a1
            id: s_x1FrR6DF9GxLpn7La1NHdM
            source_type: api_record
            title: 中国历代人物传记资料库：王晞亮（CBDB 1813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1813&o=json
            external_identifier: CBDB:1813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.277Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HMh32TgPhL2rLUz7bmsFq3
        subject_person_id: p_S6ZZKMVMpbpMSQYqkUgMjL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晞亮，宋人物。寶祐進士，籍贯莆田，入仕胥吏出職，曾任尚書省工部侍郎、朝散大夫、禮儀院。（中国历代人物传记资料库 CBDB 1813）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_K63KtW0gioTJ1GWDzFxIV6
          claim_id: c_HMh32TgPhL2rLUz7bmsFq3
          source_id: s_x1FrR6DF9GxLpn7La1NHdM
          stance: supports
          locator: CBDB:1813
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_wq-4vvNFj6xSKWCWWvPqXN
        subject_person_id: p_S6ZZKMVMpbpMSQYqkUgMjL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Fo5H89gRd1G7FrWqXFVXtt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gk1U0i5PlJLwKIO8TCIkNz
          claim_id: c_wq-4vvNFj6xSKWCWWvPqXN
          source_id: s_ME4J2g2xqALo2PrEEMnvAH
          stance: supports
          locator: 寶祐登科錄：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ME4J2g2xqALo2PrEEMnvAH
            source_type: api_record
            title: 中国历代人物传记资料库：王節（CBDB 137375）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137375&o=json
            external_identifier: CBDB:137375
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.346Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Fo5H89gRd1G7FrWqXFVXtt
        status: active
        display_name: 王節
        merged_into_person_id: null
    - claim:
        id: c_uOGCdXZHphRwgjsMNKM6uo
        subject_person_id: p_S6ZZKMVMpbpMSQYqkUgMjL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HEHuuNxVQw4GuQSEbYdfQm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X_u4gryukKWwccN99DFsqc
          claim_id: c_uOGCdXZHphRwgjsMNKM6uo
          source_id: s_VXQP6Fy448neqeR8Lsj8wM
          stance: supports
          locator: CBDB 双向互证（父 王晞亮 ⇄ 子 王桂）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_VXQP6Fy448neqeR8Lsj8wM
            source_type: api_record
            title: 中国历代人物传记资料库：王桂（CBDB 22221）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22221&o=json
            external_identifier: CBDB:22221
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.854Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HEHuuNxVQw4GuQSEbYdfQm
        status: active
        display_name: 王桂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_psrKdwY5HGKctAFW3cu1q-
        subject_person_id: p_S6ZZKMVMpbpMSQYqkUgMjL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2cNRhGJDHAsgPbraYrpQmk
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gi2wN01zU5R-d-XIvwb2g9
          claim_id: c_psrKdwY5HGKctAFW3cu1q-
          source_id: s_5Da337QYmKhJtE5nry3hRP
          stance: supports
          locator: 宋人傳記資料索引(電子版)：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5Da337QYmKhJtE5nry3hRP
            source_type: api_record
            title: 中国历代人物传记资料库：王太沖（CBDB 12648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12648&o=json
            external_identifier: CBDB:12648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.602Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2cNRhGJDHAsgPbraYrpQmk
        status: active
        display_name: 王太沖
        merged_into_person_id: null
    - claim:
        id: c_VJ4vUUH0OWTC991l3PQUNs
        subject_person_id: p_S6ZZKMVMpbpMSQYqkUgMjL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_e8fyUGVWsewm8vpP5EJCF4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CYoah6yESkJfaTJgvWiwix
          claim_id: c_VJ4vUUH0OWTC991l3PQUNs
          source_id: s_x1FrR6DF9GxLpn7La1NHdM
          stance: supports
          locator: 寶祐登科錄：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_e8fyUGVWsewm8vpP5EJCF4
        status: active
        display_name: 王民望
        merged_into_person_id: null
    - claim:
        id: c_enYCeTPcscB6HsSHThRRRQ
        subject_person_id: p_S6ZZKMVMpbpMSQYqkUgMjL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6yFP175w8qJgJRVTRiUkab
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RVlvHWGFUJxLr52arDgX6h
          claim_id: c_enYCeTPcscB6HsSHThRRRQ
          source_id: s_efjbH4VURWrYSiJRiFkgFR
          stance: supports
          locator: CBDB 双向互证（曾祖 王晞亮 ⇄ 曾孫; 重孫 王一奇）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_efjbH4VURWrYSiJRiFkgFR
            source_type: api_record
            title: 中国历代人物传记资料库：王一奇（CBDB 12910）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12910&o=json
            external_identifier: CBDB:12910
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.613Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6yFP175w8qJgJRVTRiUkab
        status: active
        display_name: 王一奇
        merged_into_person_id: null
    - claim:
        id: c_6A9odBGq3963Ofq629i9lf
        subject_person_id: p_S6ZZKMVMpbpMSQYqkUgMjL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fAkSTqtvwV4sHfKzbaUJEr
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vcYW182DVXF7_NK44IDlWf
          claim_id: c_6A9odBGq3963Ofq629i9lf
          source_id: s_JaokmLZfrmmUn536EbjMdL
          stance: supports
          locator: CBDB 双向互证（曾祖 王晞亮 ⇄ 曾孫; 重孫 王彥廣）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_JaokmLZfrmmUn536EbjMdL
            source_type: api_record
            title: 中国历代人物传记资料库：王彥廣（CBDB 12544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12544&o=json
            external_identifier: CBDB:12544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.601Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fAkSTqtvwV4sHfKzbaUJEr
        status: active
        display_name: 王彥廣
        merged_into_person_id: null
    - claim:
        id: c_UynflqjHnVIv5dZRww2770
        subject_person_id: p_S6ZZKMVMpbpMSQYqkUgMjL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_SB4nyU3Q4m83zPube6hGaV
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7N0MopoKZ0bpZO6cnf4ZQe
          claim_id: c_UynflqjHnVIv5dZRww2770
          source_id: s_x1FrR6DF9GxLpn7La1NHdM
          stance: supports
          locator: CBDB 双向互证（孫 王彥大 ⇄ 祖父 王晞亮）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_SB4nyU3Q4m83zPube6hGaV
        status: active
        display_name: 王彥大
        merged_into_person_id: null
  other: []
---

# 王晞亮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晞亮 | accepted |
| bio.summary | 王晞亮，宋人物。寶祐進士，籍贯莆田，入仕胥吏出職，曾任尚書省工部侍郎、朝散大夫、禮儀院。（中国历代人物传记资料库 CBDB 1813） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Fo5H89gRd1G7FrWqXFVXtt | 王節 | accepted |
| children | p_HEHuuNxVQw4GuQSEbYdfQm | 王桂 | accepted |
| descendants | p_2cNRhGJDHAsgPbraYrpQmk | 王太沖 | accepted |
| descendants | p_e8fyUGVWsewm8vpP5EJCF4 | 王民望 | accepted |
| descendants | p_6yFP175w8qJgJRVTRiUkab | 王一奇 | accepted |
| descendants | p_fAkSTqtvwV4sHfKzbaUJEr | 王彥廣 | accepted |
| descendants | p_SB4nyU3Q4m83zPube6hGaV | 王彥大 | accepted |

## 外部来源

- [中国历代人物传记资料库：王桂（CBDB 22221）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22221&o=json)
- [中国历代人物传记资料库：王節（CBDB 137375）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137375&o=json)
- [中国历代人物传记资料库：王太沖（CBDB 12648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12648&o=json)
- [中国历代人物传记资料库：王晞亮（CBDB 1813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1813&o=json)
- [中国历代人物传记资料库：王彥廣（CBDB 12544）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12544&o=json)
- [中国历代人物传记资料库：王一奇（CBDB 12910）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12910&o=json)

---
schema: wang-person/v1
id: p_z6ACPFtm9wPnLGvKH6v1N8
status: active
merged_into: null
display_name: 王樓
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E4qsFyL4iVZ8pqwxhy29Ct
        subject_person_id: p_z6ACPFtm9wPnLGvKH6v1N8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WpW5iUN9sttmb7KfujGzpm
          claim_id: c_E4qsFyL4iVZ8pqwxhy29Ct
          source_id: s_LdBe2P7acjGtnjCApr413s
          stance: supports
          locator: CBDB:233797
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（233797）
          source: &a1
            id: s_LdBe2P7acjGtnjCApr413s
            source_type: api_record
            title: 中国历代人物传记资料库：王樓（CBDB 233797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233797&o=json
            external_identifier: CBDB:233797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.722Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_urz6FXXmxtbti56FMt9ApQ
        subject_person_id: p_z6ACPFtm9wPnLGvKH6v1N8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樓，明人物。籍贯南充，入仕庠生，曾任文林郎。（中国历代人物传记资料库 CBDB 233797）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tHk75zPSim9cu_PSdQL48p
          claim_id: c_urz6FXXmxtbti56FMt9ApQ
          source_id: s_LdBe2P7acjGtnjCApr413s
          stance: supports
          locator: CBDB:233797
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_3i9-3rity6mSPJAJHq44N0
        subject_person_id: p_z6ACPFtm9wPnLGvKH6v1N8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Rv5ych5iExch2twdfSXkLP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wJkd7DOefEEeK_2law2f6y
          claim_id: c_3i9-3rity6mSPJAJHq44N0
          source_id: s_LdBe2P7acjGtnjCApr413s
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第三十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Rv5ych5iExch2twdfSXkLP
        status: active
        display_name: 王世蔭
        merged_into_person_id: null
    - claim:
        id: c_RBjoC6aaLVSxC7dc3eJRFx
        subject_person_id: p_z6ACPFtm9wPnLGvKH6v1N8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6BVg5XTFHGs5WQLK88uH4B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HGqKtCF3FdQ_EBNJujGxu7
          claim_id: c_RBjoC6aaLVSxC7dc3eJRFx
          source_id: s_sVdXa4WyWknZ1L73FyOsZC
          stance: supports
          locator: CBDB：兄弟 王世蔭（207683）之父／母 王樓
          quotation: null
          interpretation_note: 由兄弟关系推断：王世臨 与 王世蔭 为同胞（CBDB 记「兄」），王世蔭 之父／母即 王世臨 之父／母。
          source:
            id: s_sVdXa4WyWknZ1L73FyOsZC
            source_type: api_record
            title: 中国历代人物传记资料库：王世臨（CBDB 233806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233806&o=json
            external_identifier: CBDB:233806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6BVg5XTFHGs5WQLK88uH4B
        status: active
        display_name: 王世臨
        merged_into_person_id: null
    - claim:
        id: c_ybMbR6uCpTcPf7DqU9OqUJ
        subject_person_id: p_z6ACPFtm9wPnLGvKH6v1N8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8rXKuPixbG3qLEngxLDvCw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_223X3AspIwoDuGVYmkDnAj
          claim_id: c_ybMbR6uCpTcPf7DqU9OqUJ
          source_id: s_9gdWP74MnMi9ipGJ3saNr7
          stance: supports
          locator: CBDB：兄弟 王世蔭（207683）之父／母 王樓
          quotation: null
          interpretation_note: 由兄弟关系推断：王世衡 与 王世蔭 为同胞（CBDB 记「兄」），王世蔭 之父／母即 王世衡 之父／母。
          source:
            id: s_9gdWP74MnMi9ipGJ3saNr7
            source_type: api_record
            title: 中国历代人物传记资料库：王世衡（CBDB 233804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233804&o=json
            external_identifier: CBDB:233804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8rXKuPixbG3qLEngxLDvCw
        status: active
        display_name: 王世衡
        merged_into_person_id: null
    - claim:
        id: c_Kmk70eqJRqrRl6MyH5ibdv
        subject_person_id: p_z6ACPFtm9wPnLGvKH6v1N8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HrWuVY78rxoviqC215BJzt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gYU_dC9Fdy1ZDKbCBLBNs9
          claim_id: c_Kmk70eqJRqrRl6MyH5ibdv
          source_id: s_uDYdBTYg5P1NhTbzxs3dWf
          stance: supports
          locator: CBDB：兄弟 王世蔭（207683）之父／母 王樓
          quotation: null
          interpretation_note: 由兄弟关系推断：王世祚 与 王世蔭 为同胞（CBDB 记「兄」），王世蔭 之父／母即 王世祚 之父／母。
          source:
            id: s_uDYdBTYg5P1NhTbzxs3dWf
            source_type: api_record
            title: 中国历代人物传记资料库：王世祚（CBDB 233802）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233802&o=json
            external_identifier: CBDB:233802
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HrWuVY78rxoviqC215BJzt
        status: active
        display_name: 王世祚
        merged_into_person_id: null
    - claim:
        id: c_VptS8v6DWG101nOzU526ph
        subject_person_id: p_z6ACPFtm9wPnLGvKH6v1N8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_X7A6u2Pq1CtefU3oFjGhfC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dHcL6jW0a65VwnzZDCW4Kk
          claim_id: c_VptS8v6DWG101nOzU526ph
          source_id: s_QG-aljbBrQzuzvXOpkN3Cl
          stance: supports
          locator: CBDB：兄弟 王世蔭（207683）之父／母 王樓
          quotation: null
          interpretation_note: 由兄弟关系推断：王世泰 与 王世蔭 为同胞（CBDB 记「兄」），王世蔭 之父／母即 王世泰 之父／母。
          source:
            id: s_QG-aljbBrQzuzvXOpkN3Cl
            source_type: api_record
            title: 中国历代人物传记资料库：王世泰（CBDB 233805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233805&o=json
            external_identifier: CBDB:233805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_X7A6u2Pq1CtefU3oFjGhfC
        status: active
        display_name: 王世泰
        merged_into_person_id: null
    - claim:
        id: c_MMd6w-oBQzqlGmIJX6nZ-o
        subject_person_id: p_z6ACPFtm9wPnLGvKH6v1N8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YrWnwc94uce2JsZcCoFTha
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PFrkABAM1Lhnk9WFO3bT0u
          claim_id: c_MMd6w-oBQzqlGmIJX6nZ-o
          source_id: s_Nhg_xsibCxU9m5rliLrNfs
          stance: supports
          locator: CBDB：兄弟 王世蔭（207683）之父／母 王樓
          quotation: null
          interpretation_note: 由兄弟关系推断：王世芳 与 王世蔭 为同胞（CBDB 记「弟」），王世蔭 之父／母即 王世芳 之父／母。
          source:
            id: s_Nhg_xsibCxU9m5rliLrNfs
            source_type: api_record
            title: 中国历代人物传记资料库：王世芳（CBDB 233800）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233800&o=json
            external_identifier: CBDB:233800
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YrWnwc94uce2JsZcCoFTha
        status: active
        display_name: 王世芳
        merged_into_person_id: null
    - claim:
        id: c_S_zk-ucIfrky9nhMnJ4iOG
        subject_person_id: p_z6ACPFtm9wPnLGvKH6v1N8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ciXb4UH2wKJZ363JCcVWVZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1IyaJVwfS_vzX7JMM80NUK
          claim_id: c_S_zk-ucIfrky9nhMnJ4iOG
          source_id: s__AFkybqQUFvlBj8qck5xZq
          stance: supports
          locator: CBDB：兄弟 王世蔭（207683）之父／母 王樓
          quotation: null
          interpretation_note: 由兄弟关系推断：王建忠 与 王世蔭 为同胞（CBDB 记「兄」），王世蔭 之父／母即 王建忠 之父／母。
          source:
            id: s__AFkybqQUFvlBj8qck5xZq
            source_type: api_record
            title: 中国历代人物传记资料库：王建忠（CBDB 233803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233803&o=json
            external_identifier: CBDB:233803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ciXb4UH2wKJZ363JCcVWVZ
        status: active
        display_name: 王建忠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王樓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樓 | accepted |
| bio.summary | 王樓，明人物。籍贯南充，入仕庠生，曾任文林郎。（中国历代人物传记资料库 CBDB 233797） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Rv5ych5iExch2twdfSXkLP | 王世蔭 | accepted |
| children | p_6BVg5XTFHGs5WQLK88uH4B | 王世臨 | accepted |
| children | p_8rXKuPixbG3qLEngxLDvCw | 王世衡 | accepted |
| children | p_HrWuVY78rxoviqC215BJzt | 王世祚 | accepted |
| children | p_X7A6u2Pq1CtefU3oFjGhfC | 王世泰 | accepted |
| children | p_YrWnwc94uce2JsZcCoFTha | 王世芳 | accepted |
| children | p_ciXb4UH2wKJZ363JCcVWVZ | 王建忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王建忠（CBDB 233803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233803&o=json)
- [中国历代人物传记资料库：王樓（CBDB 233797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233797&o=json)
- [中国历代人物传记资料库：王世芳（CBDB 233800）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233800&o=json)
- [中国历代人物传记资料库：王世衡（CBDB 233804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233804&o=json)
- [中国历代人物传记资料库：王世臨（CBDB 233806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233806&o=json)
- [中国历代人物传记资料库：王世泰（CBDB 233805）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233805&o=json)
- [中国历代人物传记资料库：王世祚（CBDB 233802）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233802&o=json)

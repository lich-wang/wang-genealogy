---
schema: wang-person/v1
id: p_rQ3QkQ6Ppvi2nvZM6NWRzv
status: active
merged_into: null
display_name: 王應橫
cbdb_id: 326285
revision: 6
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_opN1Xv81mFYWs1Lwyvr8JK
        subject_person_id: p_rQ3QkQ6Ppvi2nvZM6NWRzv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應橫，明人物。天順八年進士，籍贯上饒。（中国历代人物传记资料库 CBDB 326285）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Xcnn6abwRuDbkML-9-KtTz
          claim_id: c_opN1Xv81mFYWs1Lwyvr8JK
          source_id: s_nnWshiyf1dPh4777iF7u8r
          stance: supports
          locator: CBDB:326285
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_nnWshiyf1dPh4777iF7u8r
            source_type: api_record
            title: 中国历代人物传记资料库：王應橫（CBDB 326285）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326285&o=json
            external_identifier: CBDB:326285
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4pmn5rW4wKHsXr4iGsMCSe
        subject_person_id: p_rQ3QkQ6Ppvi2nvZM6NWRzv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應橫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bK1iZnEkAmybJE8W8KGDr1
          claim_id: c_4pmn5rW4wKHsXr4iGsMCSe
          source_id: s_nnWshiyf1dPh4777iF7u8r
          stance: supports
          locator: CBDB:326285
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_OrlYheuF-OPpzfzx0jlq_B
        subject_person_id: p_rQ3QkQ6Ppvi2nvZM6NWRzv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H6ADXcsddQz8PL3XHF26HH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oH-NEioyuGU54uNYBSRFUn
          claim_id: c_OrlYheuF-OPpzfzx0jlq_B
          source_id: s_QgZuGLFmuV1PCvKdFnt51y
          stance: supports
          locator: 天順八年進士登科錄:一卷，第二甲第二十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QgZuGLFmuV1PCvKdFnt51y
            source_type: api_record
            title: 中国历代人物传记资料库：王讓（CBDB 126898）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126898&o=json
            external_identifier: CBDB:126898
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.293Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_H6ADXcsddQz8PL3XHF26HH
        status: active
        display_name: 王讓
        merged_into_person_id: null
    - claim:
        id: c_Y7-GhYsCU1wyn7k9DeQleZ
        subject_person_id: p_rQ3QkQ6Ppvi2nvZM6NWRzv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3RtE51ywWD5GzFUC7tQ6NB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mjcfV6fqaswCyJRD0aeh7d
          claim_id: c_Y7-GhYsCU1wyn7k9DeQleZ
          source_id: s_9Lr60_59h4-wb0Eb__sx5T
          stance: supports
          locator: CBDB：兄弟 王讓（126898）之父／母 王應橫
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇 与 王讓 为同胞（CBDB 记「兄」），王讓 之父／母即 王崇 之父／母。
          source:
            id: s_9Lr60_59h4-wb0Eb__sx5T
            source_type: api_record
            title: 中国历代人物传记资料库：王崇（CBDB 326363）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326363&o=json
            external_identifier: CBDB:326363
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3RtE51ywWD5GzFUC7tQ6NB
        status: active
        display_name: 王崇
        merged_into_person_id: null
    - claim:
        id: c_weJtaZwW_T-HDRztrYq0DK
        subject_person_id: p_rQ3QkQ6Ppvi2nvZM6NWRzv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_99r2F1J51CnATEud2D97f9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AAW8pkszWM9qmLIHnjqxcf
          claim_id: c_weJtaZwW_T-HDRztrYq0DK
          source_id: s_mByALczy7Dcnu5Y50jTfcQ
          stance: supports
          locator: CBDB：兄弟 王讓（126898）之父／母 王應橫
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑛 与 王讓 为同胞（CBDB 记「弟」），王讓 之父／母即 王瑛 之父／母。
          source:
            id: s_mByALczy7Dcnu5Y50jTfcQ
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 326341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326341&o=json
            external_identifier: CBDB:326341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_99r2F1J51CnATEud2D97f9
        status: active
        display_name: 王瑛
        merged_into_person_id: null
    - claim:
        id: c_nKN5I6Vw8IIqBG5Q8Obn40
        subject_person_id: p_rQ3QkQ6Ppvi2nvZM6NWRzv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ay7LG1z5kPe94CeB2PjTwX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sqyiKwKXvKh2FD3W8a7q8I
          claim_id: c_nKN5I6Vw8IIqBG5Q8Obn40
          source_id: s_sbdGoo61rMrwmTFd2KMLC7
          stance: supports
          locator: CBDB：兄弟 王讓（126898）之父／母 王應橫
          quotation: null
          interpretation_note: 由兄弟关系推断：王輔 与 王讓 为同胞（CBDB 记「弟」），王讓 之父／母即 王輔 之父／母。
          source:
            id: s_sbdGoo61rMrwmTFd2KMLC7
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 326352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326352&o=json
            external_identifier: CBDB:326352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ay7LG1z5kPe94CeB2PjTwX
        status: active
        display_name: 王輔
        merged_into_person_id: null
    - claim:
        id: c_wPaTfjCkVvip3QXdJB7S_U
        subject_person_id: p_rQ3QkQ6Ppvi2nvZM6NWRzv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wYvJxWc6HQA9qSJV2vXE9d
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C9M8fPiBFuruiOkhcGsgGg
          claim_id: c_wPaTfjCkVvip3QXdJB7S_U
          source_id: s_9DCspi1_7szif-ayf8hqCG
          stance: supports
          locator: CBDB：兄弟 王讓（126898）之父／母 王應橫
          quotation: null
          interpretation_note: 由兄弟关系推断：王佐 与 王讓 为同胞（CBDB 记「弟」），王讓 之父／母即 王佐 之父／母。
          source:
            id: s_9DCspi1_7szif-ayf8hqCG
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 326330）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326330&o=json
            external_identifier: CBDB:326330
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wYvJxWc6HQA9qSJV2vXE9d
        status: active
        display_name: 王佐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王應橫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王應橫，明人物。天順八年進士，籍贯上饒。（中国历代人物传记资料库 CBDB 326285） | accepted |
| name.primary | 王應橫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_H6ADXcsddQz8PL3XHF26HH | 王讓 | accepted |
| children | p_3RtE51ywWD5GzFUC7tQ6NB | 王崇 | accepted |
| children | p_99r2F1J51CnATEud2D97f9 | 王瑛 | accepted |
| children | p_ay7LG1z5kPe94CeB2PjTwX | 王輔 | accepted |
| children | p_wYvJxWc6HQA9qSJV2vXE9d | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇（CBDB 326363）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326363&o=json)
- [中国历代人物传记资料库：王輔（CBDB 326352）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326352&o=json)
- [中国历代人物传记资料库：王讓（CBDB 126898）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126898&o=json)
- [中国历代人物传记资料库：王瑛（CBDB 326341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326341&o=json)
- [中国历代人物传记资料库：王應橫（CBDB 326285）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326285&o=json)
- [中国历代人物传记资料库：王佐（CBDB 326330）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326330&o=json)

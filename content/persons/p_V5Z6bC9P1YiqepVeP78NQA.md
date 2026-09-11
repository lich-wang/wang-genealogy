---
schema: wang-person/v1
id: p_V5Z6bC9P1YiqepVeP78NQA
status: active
merged_into: null
display_name: 王惟中
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KpULz4gaLcgxwBobfADSec
        subject_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PdRM4FZnf6eHBMaAKp51na
          claim_id: c_KpULz4gaLcgxwBobfADSec
          source_id: s_CSGknEjdBsBVTNawoU8C1V
          stance: supports
          locator: CBDB:203400
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203400）
          source: &a1
            id: s_CSGknEjdBsBVTNawoU8C1V
            source_type: api_record
            title: 中国历代人物传记资料库：王惟中（CBDB 203400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203400&o=json
            external_identifier: CBDB:203400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.784Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GbB21KdXtVSNauoTT9a9gr
        subject_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1511年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4oipRHyq3TGFH2BNNupZKh
          claim_id: c_GbB21KdXtVSNauoTT9a9gr
          source_id: s_CSGknEjdBsBVTNawoU8C1V
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
        id: c_54BwuK8ToLjyHe6SXa9CFP
        subject_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟中（生于1511年），明人物。嘉靖二十年進士，籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 203400）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lBz2OmSeLYxeiZ9fyWU7WT
          claim_id: c_54BwuK8ToLjyHe6SXa9CFP
          source_id: s_CSGknEjdBsBVTNawoU8C1V
          stance: supports
          locator: CBDB:203400
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fAIMBC1grvzG0gatA6XXbn
        subject_person_id: p_EL1xAzh69eBckvCoFLRC2M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZRk4tkubFIvKPn23O0HmtZ
          claim_id: c_fAIMBC1grvzG0gatA6XXbn
          source_id: s_rthLjWyt6aPyKHFsejFoGT
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百零六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rthLjWyt6aPyKHFsejFoGT
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 304149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304149&o=json
            external_identifier: CBDB:304149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.703Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EL1xAzh69eBckvCoFLRC2M
        status: active
        display_name: 王紀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_rpfCSFqHRlsmxDZmpzQyj6
        subject_person_id: p_2xVygTqZoaWJZPr3k3KVru
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uZ4pZvj3ZF3zGc9SL1t6Jf
          claim_id: c_rpfCSFqHRlsmxDZmpzQyj6
          source_id: s_XD6LofnkHt84jKnYi2PXmq
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百零六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XD6LofnkHt84jKnYi2PXmq
            source_type: api_record
            title: 中国历代人物传记资料库：王寰（CBDB 304147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304147&o=json
            external_identifier: CBDB:304147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.702Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2xVygTqZoaWJZPr3k3KVru
        status: active
        display_name: 王寰
        merged_into_person_id: null
    - claim:
        id: c_fSpcvdKjWpZ3bv2aCune6j
        subject_person_id: p_dhViQGfAS7Kif9LatNZWPh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jGYWVHHdNg7POwwmA82xQ5
          claim_id: c_fSpcvdKjWpZ3bv2aCune6j
          source_id: s_DFGGuZ3eoThNFGBmCAx152
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百零六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DFGGuZ3eoThNFGBmCAx152
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞昌（CBDB 304146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304146&o=json
            external_identifier: CBDB:304146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_dhViQGfAS7Kif9LatNZWPh
        status: active
        display_name: 王瑞昌
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王惟中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟中 | accepted |
| birth.date | 1511年 | accepted |
| bio.summary | 王惟中（生于1511年），明人物。嘉靖二十年進士，籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 203400） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EL1xAzh69eBckvCoFLRC2M | 王紀 | accepted |
| ancestors | p_2xVygTqZoaWJZPr3k3KVru | 王寰 | accepted |
| ancestors | p_dhViQGfAS7Kif9LatNZWPh | 王瑞昌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寰（CBDB 304147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304147&o=json)
- [中国历代人物传记资料库：王紀（CBDB 304149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304149&o=json)
- [中国历代人物传记资料库：王瑞昌（CBDB 304146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304146&o=json)
- [中国历代人物传记资料库：王惟中（CBDB 203400）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203400&o=json)

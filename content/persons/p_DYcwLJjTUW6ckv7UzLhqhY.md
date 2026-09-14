---
schema: wang-person/v1
id: p_DYcwLJjTUW6ckv7UzLhqhY
status: active
merged_into: null
display_name: 王瀘滔
cbdb_id: 266604
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UW9kJPfCt9J9LPbrFgiCbh
        subject_person_id: p_DYcwLJjTUW6ckv7UzLhqhY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀘滔，明人物。景泰五年進士，籍贯安福。（中国历代人物传记资料库 CBDB 266604）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_-yJkAvqScfZvkUJ8hKJfyI
          claim_id: c_UW9kJPfCt9J9LPbrFgiCbh
          source_id: s_yhDR6LfbMCuMJdwj4axcJi
          stance: supports
          locator: CBDB:266604
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_yhDR6LfbMCuMJdwj4axcJi
            source_type: api_record
            title: 中国历代人物传记资料库：王瀘滔（CBDB 266604）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266604&o=json
            external_identifier: CBDB:266604
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bUi6Jgp5ReEn7A6y5ysHqG
        subject_person_id: p_DYcwLJjTUW6ckv7UzLhqhY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀘滔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2j6LD3PDB7cLKnZZT7R3dD
          claim_id: c_bUi6Jgp5ReEn7A6y5ysHqG
          source_id: s_yhDR6LfbMCuMJdwj4axcJi
          stance: supports
          locator: CBDB:266604
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_AMuyKP9n77AH-jySOK1VYp
        subject_person_id: p_DYcwLJjTUW6ckv7UzLhqhY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_z4aCxcZmXAafGUnNufCVpV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wwsmq26mUXuTIlrhJ1IDHg
          claim_id: c_AMuyKP9n77AH-jySOK1VYp
          source_id: s_2ruKTegb7Gy8bvnrUTT9Kn
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第五十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2ruKTegb7Gy8bvnrUTT9Kn
            source_type: api_record
            title: 中国历代人物传记资料库：王重（CBDB 198394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198394&o=json
            external_identifier: CBDB:198394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.487Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_z4aCxcZmXAafGUnNufCVpV
        status: active
        display_name: 王重
        merged_into_person_id: null
    - claim:
        id: c_YYsDUz0EUoeYs_HU995N3W
        subject_person_id: p_DYcwLJjTUW6ckv7UzLhqhY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g4wW9rGUw2fq19ZXhmeikm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2uhB7mEf22H-jCt3h5PDtK
          claim_id: c_YYsDUz0EUoeYs_HU995N3W
          source_id: s_V4Fm9H0iHK0WiapBUDBS3j
          stance: supports
          locator: CBDB：兄弟 王重（198394）之父／母 王瀘滔
          quotation: null
          interpretation_note: 由兄弟关系推断：王式鋹 与 王重 为同胞（CBDB 记「弟」），王重 之父／母即 王式鋹 之父／母。
          source:
            id: s_V4Fm9H0iHK0WiapBUDBS3j
            source_type: api_record
            title: 中国历代人物传记资料库：王式鋹（CBDB 266649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266649&o=json
            external_identifier: CBDB:266649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g4wW9rGUw2fq19ZXhmeikm
        status: active
        display_name: 王式鋹
        merged_into_person_id: null
    - claim:
        id: c_fb_QuCqlBLBRfRyui7vI9A
        subject_person_id: p_DYcwLJjTUW6ckv7UzLhqhY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uEyhuCqH3gL8yCc6noHLcR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iiKqGYVj2lzOopRFB15Vtb
          claim_id: c_fb_QuCqlBLBRfRyui7vI9A
          source_id: s_8JDupSfa1fzEhUFVXlk8Uu
          stance: supports
          locator: CBDB：兄弟 王重（198394）之父／母 王瀘滔
          quotation: null
          interpretation_note: 由兄弟关系推断：王式鎡 与 王重 为同胞（CBDB 记「兄」），王重 之父／母即 王式鎡 之父／母。
          source:
            id: s_8JDupSfa1fzEhUFVXlk8Uu
            source_type: api_record
            title: 中国历代人物传记资料库：王式鎡（CBDB 266660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266660&o=json
            external_identifier: CBDB:266660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uEyhuCqH3gL8yCc6noHLcR
        status: active
        display_name: 王式鎡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瀘滔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王瀘滔，明人物。景泰五年進士，籍贯安福。（中国历代人物传记资料库 CBDB 266604） | accepted |
| name.primary | 王瀘滔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_z4aCxcZmXAafGUnNufCVpV | 王重 | accepted |
| children | p_g4wW9rGUw2fq19ZXhmeikm | 王式鋹 | accepted |
| children | p_uEyhuCqH3gL8yCc6noHLcR | 王式鎡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瀘滔（CBDB 266604）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266604&o=json)
- [中国历代人物传记资料库：王式鋹（CBDB 266649）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266649&o=json)
- [中国历代人物传记资料库：王式鎡（CBDB 266660）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266660&o=json)
- [中国历代人物传记资料库：王重（CBDB 198394）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198394&o=json)

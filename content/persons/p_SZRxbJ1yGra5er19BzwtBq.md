---
schema: wang-person/v1
id: p_SZRxbJ1yGra5er19BzwtBq
status: active
merged_into: null
display_name: 王元正
cbdb_id: 68064
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DLMLNiwksxeJp86SnNBNag
        subject_person_id: p_SZRxbJ1yGra5er19BzwtBq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元正，明人物。籍贯盩厔，身份为博學之人，入仕進士，曾任翰林院檢討、翰林院庶吉士、翰林院修撰。（中国历代人物传记资料库 CBDB 68064）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_1J_s6FkUrxwLyYHZBCP6PK
          claim_id: c_DLMLNiwksxeJp86SnNBNag
          source_id: s_QwkCRRkNxMHPugtpnad9Fy
          stance: supports
          locator: CBDB:68064
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QwkCRRkNxMHPugtpnad9Fy
            source_type: api_record
            title: 中国历代人物传记资料库：王元正（CBDB 68064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68064&o=json
            external_identifier: CBDB:68064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9HZHuo7h8Kub6tBruTfqD9
        subject_person_id: p_SZRxbJ1yGra5er19BzwtBq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pvdBR7pDrbW6W2tjgDk8yh
          claim_id: c_9HZHuo7h8Kub6tBruTfqD9
          source_id: s_QwkCRRkNxMHPugtpnad9Fy
          stance: supports
          locator: CBDB:68064
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1501-1600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_R_wdAwBlDqP69IsTfZ-_xo
        subject_person_id: p_K6wLixAyGjd3ARAhq77jQR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_SZRxbJ1yGra5er19BzwtBq
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A6nPoD6aVeWicoXCYQZxm6
          claim_id: c_R_wdAwBlDqP69IsTfZ-_xo
          source_id: s_KY652PUgDA5xSA8WgtSHxZ
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百一十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KY652PUgDA5xSA8WgtSHxZ
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 276118）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276118&o=json
            external_identifier: CBDB:276118
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_K6wLixAyGjd3ARAhq77jQR
        status: active
        display_name: 王璽
        merged_into_person_id: null
    - claim:
        id: c_HBmfAhBYMf6NuI8trcho26
        subject_person_id: p_V1jW6HDBWbj1BBCdhexxp1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_SZRxbJ1yGra5er19BzwtBq
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J0CT7-80yYWARjD3pw6pSb
          claim_id: c_HBmfAhBYMf6NuI8trcho26
          source_id: s_e831J4q2v457aLJF34qZQ7
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百一十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_e831J4q2v457aLJF34qZQ7
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 276117）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276117&o=json
            external_identifier: CBDB:276117
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.936Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_V1jW6HDBWbj1BBCdhexxp1
        status: active
        display_name: 王榮
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_PUdgQnLzwQqxse7isrzS27
        subject_person_id: p_LvC9mvFYs2fNuk4rbUwGQ6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SZRxbJ1yGra5er19BzwtBq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LfftXwigA09QXMcQZNn050
          claim_id: c_PUdgQnLzwQqxse7isrzS27
          source_id: s_VVnB9b5KAI1XUNxSjvHR2p
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68064 王元正）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VVnB9b5KAI1XUNxSjvHR2p
            source_type: api_record
            title: 中国历代人物传记资料库：王元亨（CBDB 278126）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278126&o=json
            external_identifier: CBDB:278126
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LvC9mvFYs2fNuk4rbUwGQ6
        status: active
        display_name: 王元亨
        merged_into_person_id: null
---

# 王元正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王元正，明人物。籍贯盩厔，身份为博學之人，入仕進士，曾任翰林院檢討、翰林院庶吉士、翰林院修撰。（中国历代人物传记资料库 CBDB 68064） | accepted |
| name.primary | 王元正 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_K6wLixAyGjd3ARAhq77jQR | 王璽 | accepted |
| ancestors | p_V1jW6HDBWbj1BBCdhexxp1 | 王榮 | accepted |
| other | p_LvC9mvFYs2fNuk4rbUwGQ6 | 王元亨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王榮（CBDB 276117）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276117&o=json)
- [中国历代人物传记资料库：王璽（CBDB 276118）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276118&o=json)
- [中国历代人物传记资料库：王元亨（CBDB 278126）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278126&o=json)
- [中国历代人物传记资料库：王元正（CBDB 68064）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68064&o=json)

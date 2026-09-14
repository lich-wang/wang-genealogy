---
schema: wang-person/v1
id: p_P7zJqgvbYP5g8TxtNP9GCp
status: active
merged_into: null
display_name: 王文
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d4Wg1TUyT5CVaYKovPKMeS
        subject_person_id: p_P7zJqgvbYP5g8TxtNP9GCp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YXqAAHS9nHz3ssVNCREyDk
          claim_id: c_d4Wg1TUyT5CVaYKovPKMeS
          source_id: s_4qPFMMzrhZoTYsDmqSb8TX
          stance: supports
          locator: CBDB:202049
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202049）
          source: &a1
            id: s_4qPFMMzrhZoTYsDmqSb8TX
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 202049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202049&o=json
            external_identifier: CBDB:202049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.717Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kbg9wM3SniuR3ym5d8dWRM
        subject_person_id: p_P7zJqgvbYP5g8TxtNP9GCp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1483年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ujEE9y5owPst3Q4mJknRMW
          claim_id: c_kbg9wM3SniuR3ym5d8dWRM
          source_id: s_4qPFMMzrhZoTYsDmqSb8TX
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
        id: c_KC2uaUPUPXXSEDmV51Fep5
        subject_person_id: p_P7zJqgvbYP5g8TxtNP9GCp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文（生于1483年），明人物。明清進士進士，籍贯安福，入仕進士。（中国历代人物传记资料库 CBDB 202049）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-5CnmDfjRPSWRCw3JCPzNE
          claim_id: c_KC2uaUPUPXXSEDmV51Fep5
          source_id: s_4qPFMMzrhZoTYsDmqSb8TX
          stance: supports
          locator: CBDB:202049
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hEF3jUwk9QrZ8Czuiv1JiQ
        subject_person_id: p_qtS2vTEe75QERPYH2wknEH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P7zJqgvbYP5g8TxtNP9GCp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7uHutQzoJwcE9F6AnKw2jV
          claim_id: c_hEF3jUwk9QrZ8Czuiv1JiQ
          source_id: s_GUL9XtQYiMi2GTjgkT6gfk
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百八十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GUL9XtQYiMi2GTjgkT6gfk
            source_type: api_record
            title: 中国历代人物传记资料库：王朝用（CBDB 282557）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282557&o=json
            external_identifier: CBDB:282557
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.098Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qtS2vTEe75QERPYH2wknEH
        status: active
        display_name: 王朝用
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_AA0k0J9zcfRRgUK2ttDeSa
        subject_person_id: p_8bydW1RBsCGXdQ9TVpKH76
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_P7zJqgvbYP5g8TxtNP9GCp
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gmzS-hs72VAoQcWouapLl5
          claim_id: c_AA0k0J9zcfRRgUK2ttDeSa
          source_id: s_yCCBj6zUnKFxCGLMEV1qTQ
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百八十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yCCBj6zUnKFxCGLMEV1qTQ
            source_type: api_record
            title: 中国历代人物传记资料库：王藹（CBDB 282556）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282556&o=json
            external_identifier: CBDB:282556
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.096Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8bydW1RBsCGXdQ9TVpKH76
        status: active
        display_name: 王藹
        merged_into_person_id: null
    - claim:
        id: c_WDhWC8GoGd2mzhe0Y4oWgk
        subject_person_id: p_AtoiyTSmhg8fECkw869467
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_P7zJqgvbYP5g8TxtNP9GCp
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5gyT2Ehj9ONghBiIuyHJH8
          claim_id: c_WDhWC8GoGd2mzhe0Y4oWgk
          source_id: s_XZ8c1buUDUGwoQFEm1HsX3
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百八十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XZ8c1buUDUGwoQFEm1HsX3
            source_type: api_record
            title: 中国历代人物传记资料库：王邦美（CBDB 282555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282555&o=json
            external_identifier: CBDB:282555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_AtoiyTSmhg8fECkw869467
        status: active
        display_name: 王邦美
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_vfWSAqr_Chg5Lgr56jsaQE
        subject_person_id: p_MJYmhkfk58PyJsFz9hf6yt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_P7zJqgvbYP5g8TxtNP9GCp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z4v3nX-rkCfFfchqYwNmmJ
          claim_id: c_vfWSAqr_Chg5Lgr56jsaQE
          source_id: s_IFkjDrigtDEuXQVuJo8FHk
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202049 王文）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IFkjDrigtDEuXQVuJo8FHk
            source_type: api_record
            title: 中国历代人物传记资料库：王彥（CBDB 282561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282561&o=json
            external_identifier: CBDB:282561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MJYmhkfk58PyJsFz9hf6yt
        status: active
        display_name: 王彥
        merged_into_person_id: null
---

# 王文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文 | accepted |
| birth.date | 1483年 | accepted |
| bio.summary | 王文（生于1483年），明人物。明清進士進士，籍贯安福，入仕進士。（中国历代人物传记资料库 CBDB 202049） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qtS2vTEe75QERPYH2wknEH | 王朝用 | accepted |
| ancestors | p_8bydW1RBsCGXdQ9TVpKH76 | 王藹 | accepted |
| ancestors | p_AtoiyTSmhg8fECkw869467 | 王邦美 | accepted |
| other | p_MJYmhkfk58PyJsFz9hf6yt | 王彥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王藹（CBDB 282556）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282556&o=json)
- [中国历代人物传记资料库：王邦美（CBDB 282555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282555&o=json)
- [中国历代人物传记资料库：王朝用（CBDB 282557）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282557&o=json)
- [中国历代人物传记资料库：王文（CBDB 202049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202049&o=json)
- [中国历代人物传记资料库：王彥（CBDB 282561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282561&o=json)

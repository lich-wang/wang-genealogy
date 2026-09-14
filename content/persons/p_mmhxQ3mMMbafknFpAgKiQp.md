---
schema: wang-person/v1
id: p_mmhxQ3mMMbafknFpAgKiQp
status: active
merged_into: null
display_name: 王寧
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4FRxAPqLYNy74Q6ERV3wzM
        subject_person_id: p_mmhxQ3mMMbafknFpAgKiQp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1WBPFytKB7yeFrAvdTPQ8r
          claim_id: c_4FRxAPqLYNy74Q6ERV3wzM
          source_id: s_gnZg8SzkQb2YQh5M6kQqn9
          stance: supports
          locator: CBDB:309940
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309940）
          source: &a1
            id: s_gnZg8SzkQb2YQh5M6kQqn9
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 309940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309940&o=json
            external_identifier: CBDB:309940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NJe5FURogMWDnzbhAgqv8d
        subject_person_id: p_mmhxQ3mMMbafknFpAgKiQp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧，明人物。天順四年進士，籍贯南京錦衣衛。（中国历代人物传记资料库 CBDB 309940）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0fs4quW6xPRrt8XxixRdoX
          claim_id: c_NJe5FURogMWDnzbhAgqv8d
          source_id: s_gnZg8SzkQb2YQh5M6kQqn9
          stance: supports
          locator: CBDB:309940
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Kp9WbOYHoo2yR7api3L7rT
        subject_person_id: p_mmhxQ3mMMbafknFpAgKiQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EL3MrLTYLivcbMQDRsPBD7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C19wrUmCjzas_PXpx73nuP
          claim_id: c_Kp9WbOYHoo2yR7api3L7rT
          source_id: s_gnZg8SzkQb2YQh5M6kQqn9
          stance: supports
          locator: 天順四年進士登科錄:一卷，第二甲第三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EL3MrLTYLivcbMQDRsPBD7
        status: active
        display_name: 王徽
        merged_into_person_id: null
    - claim:
        id: c_hIvgwD0qgzfMckYsxhu3SR
        subject_person_id: p_mmhxQ3mMMbafknFpAgKiQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Kde2Bt4UNtZGqHj49jhWnS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DhMK78ILtzkRI_-QYbFGkn
          claim_id: c_hIvgwD0qgzfMckYsxhu3SR
          source_id: s_6kOhzZatrUZ2vZW48x7uY9
          stance: supports
          locator: CBDB：兄弟 王徽（67717）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王轍 与 王徽 为同胞（CBDB 记「兄」），王徽 之父／母即 王轍 之父／母。
          source:
            id: s_6kOhzZatrUZ2vZW48x7uY9
            source_type: api_record
            title: 中国历代人物传记资料库：王轍（CBDB 310018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310018&o=json
            external_identifier: CBDB:310018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Kde2Bt4UNtZGqHj49jhWnS
        status: active
        display_name: 王轍
        merged_into_person_id: null
    - claim:
        id: c_T9jdEq0Ka4NUAdyeDyfVe3
        subject_person_id: p_mmhxQ3mMMbafknFpAgKiQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NKB33yXeWeMFj4Q6mMMgbL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vs9f7mhhRzaMxl-PNeVfh0
          claim_id: c_T9jdEq0Ka4NUAdyeDyfVe3
          source_id: s_qkE1x3TtxEhD9GGQHGNT1C
          stance: supports
          locator: CBDB：兄弟 王徽（67717）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王敟 与 王徽 为同胞（CBDB 记「兄」），王徽 之父／母即 王敟 之父／母。
          source:
            id: s_qkE1x3TtxEhD9GGQHGNT1C
            source_type: api_record
            title: 中国历代人物传记资料库：王敟（CBDB 310029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310029&o=json
            external_identifier: CBDB:310029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NKB33yXeWeMFj4Q6mMMgbL
        status: active
        display_name: 王敟
        merged_into_person_id: null
    - claim:
        id: c_vqQrPw8CW8E3pmQ_p3Kga9
        subject_person_id: p_mmhxQ3mMMbafknFpAgKiQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QRVkaZ9KY47HkYUBnnwfzH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P2DFC1wx6pbVJy795GLlJq
          claim_id: c_vqQrPw8CW8E3pmQ_p3Kga9
          source_id: s_foxB1iFJlg4TrrvLhHKHEi
          stance: supports
          locator: CBDB：兄弟 王徽（67717）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王徵 与 王徽 为同胞（CBDB 记「兄」），王徽 之父／母即 王徵 之父／母。
          source:
            id: s_foxB1iFJlg4TrrvLhHKHEi
            source_type: api_record
            title: 中国历代人物传记资料库：王徵（CBDB 310040）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310040&o=json
            external_identifier: CBDB:310040
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QRVkaZ9KY47HkYUBnnwfzH
        status: active
        display_name: 王徵
        merged_into_person_id: null
    - claim:
        id: c__SdH9vWBgK09lzW75APd69
        subject_person_id: p_mmhxQ3mMMbafknFpAgKiQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_btzp3jh3MkdYaEvPPoQCGE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N-LlFY61TfdKncPStx4uSv
          claim_id: c__SdH9vWBgK09lzW75APd69
          source_id: s_H8neZNULG1wrkPqUW8Cf8c
          stance: supports
          locator: CBDB：兄弟 王徽（67717）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王政 与 王徽 为同胞（CBDB 记「弟」），王徽 之父／母即 王政 之父／母。
          source:
            id: s_H8neZNULG1wrkPqUW8Cf8c
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 309996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309996&o=json
            external_identifier: CBDB:309996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_btzp3jh3MkdYaEvPPoQCGE
        status: active
        display_name: 王政
        merged_into_person_id: null
    - claim:
        id: c_sK-dr4cIq0c3fELfZjX6nG
        subject_person_id: p_mmhxQ3mMMbafknFpAgKiQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pEudzMSXppEEBHhRoyJ7FD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IUTWDmgsJaD9_Arvp8OwvB
          claim_id: c_sK-dr4cIq0c3fELfZjX6nG
          source_id: s_DFxxgs_AX014p9Ruj4ANuU
          stance: supports
          locator: CBDB：兄弟 王徽（67717）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王敔 与 王徽 为同胞（CBDB 记「兄」），王徽 之父／母即 王敔 之父／母。
          source:
            id: s_DFxxgs_AX014p9Ruj4ANuU
            source_type: api_record
            title: 中国历代人物传记资料库：王敔（CBDB 310007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310007&o=json
            external_identifier: CBDB:310007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pEudzMSXppEEBHhRoyJ7FD
        status: active
        display_name: 王敔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寧 | accepted |
| bio.summary | 王寧，明人物。天順四年進士，籍贯南京錦衣衛。（中国历代人物传记资料库 CBDB 309940） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_EL3MrLTYLivcbMQDRsPBD7 | 王徽 | accepted |
| children | p_Kde2Bt4UNtZGqHj49jhWnS | 王轍 | accepted |
| children | p_NKB33yXeWeMFj4Q6mMMgbL | 王敟 | accepted |
| children | p_QRVkaZ9KY47HkYUBnnwfzH | 王徵 | accepted |
| children | p_btzp3jh3MkdYaEvPPoQCGE | 王政 | accepted |
| children | p_pEudzMSXppEEBHhRoyJ7FD | 王敔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敟（CBDB 310029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310029&o=json)
- [中国历代人物传记资料库：王寧（CBDB 309940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309940&o=json)
- [中国历代人物传记资料库：王敔（CBDB 310007）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310007&o=json)
- [中国历代人物传记资料库：王轍（CBDB 310018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310018&o=json)
- [中国历代人物传记资料库：王政（CBDB 309996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309996&o=json)
- [中国历代人物传记资料库：王徵（CBDB 310040）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310040&o=json)

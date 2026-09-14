---
schema: wang-person/v1
id: p_58T6FS2HPdsESXyAWQ5HsZ
status: active
merged_into: null
display_name: 王吉甫
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FqUA7cn3qFwPwB7MQjKkTd
        subject_person_id: p_58T6FS2HPdsESXyAWQ5HsZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吉甫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hyxc1L4y8JkEr1nXDdm1NJ
          claim_id: c_FqUA7cn3qFwPwB7MQjKkTd
          source_id: s_oJweWCL2PxjJbK2zRjDYF6
          stance: supports
          locator: CBDB:264236
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264236）
          source: &a1
            id: s_oJweWCL2PxjJbK2zRjDYF6
            source_type: api_record
            title: 中国历代人物传记资料库：王吉甫（CBDB 264236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264236&o=json
            external_identifier: CBDB:264236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.633Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5iUJRr4F6xKosh5VDtdfWx
        subject_person_id: p_58T6FS2HPdsESXyAWQ5HsZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吉甫，明人物。景泰五年進士，籍贯太原。（中国历代人物传记资料库 CBDB 264236）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VoqrXn8iKVXBv9VkPYlplK
          claim_id: c_5iUJRr4F6xKosh5VDtdfWx
          source_id: s_oJweWCL2PxjJbK2zRjDYF6
          stance: supports
          locator: CBDB:264236
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_B2417emsSUxDTsvkAPbQN6
        subject_person_id: p_58T6FS2HPdsESXyAWQ5HsZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GBJny92BjTJrCUatL2dF1X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O81292x2E-mYh5SwFlEnCy
          claim_id: c_B2417emsSUxDTsvkAPbQN6
          source_id: s_oJweWCL2PxjJbK2zRjDYF6
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第三十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GBJny92BjTJrCUatL2dF1X
        status: active
        display_name: 王鑑
        merged_into_person_id: null
    - claim:
        id: c_AiYup6Cj3_xthoThbERkCn
        subject_person_id: p_58T6FS2HPdsESXyAWQ5HsZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2vhLtAEfYEAKfqsmFkPmPE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y1w8ak-8YEbABmWgBOyMYq
          claim_id: c_AiYup6Cj3_xthoThbERkCn
          source_id: s_7W-NLXejJNhfV3igWR0njf
          stance: supports
          locator: CBDB：兄弟 王鑑（68835）之父／母 王吉甫
          quotation: null
          interpretation_note: 由兄弟关系推断：王固 与 王鑑 为同胞（CBDB 记「弟」），王鑑 之父／母即 王固 之父／母。
          source:
            id: s_7W-NLXejJNhfV3igWR0njf
            source_type: api_record
            title: 中国历代人物传记资料库：王固（CBDB 264269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264269&o=json
            external_identifier: CBDB:264269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2vhLtAEfYEAKfqsmFkPmPE
        status: active
        display_name: 王固
        merged_into_person_id: null
    - claim:
        id: c_0DQtVuuyHyfHFtXesSMSvv
        subject_person_id: p_58T6FS2HPdsESXyAWQ5HsZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4NNH2b7ph6dGDSzKVJgCbo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ba0MQ5KdwNMKjygXjrJPvp
          claim_id: c_0DQtVuuyHyfHFtXesSMSvv
          source_id: s_MvBc9Pp7ZTIcUn0117qy65
          stance: supports
          locator: CBDB：兄弟 王鑑（68835）之父／母 王吉甫
          quotation: null
          interpretation_note: 由兄弟关系推断：王銳 与 王鑑 为同胞（CBDB 记「兄」），王鑑 之父／母即 王銳 之父／母。
          source:
            id: s_MvBc9Pp7ZTIcUn0117qy65
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 264303）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264303&o=json
            external_identifier: CBDB:264303
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4NNH2b7ph6dGDSzKVJgCbo
        status: active
        display_name: 王銳
        merged_into_person_id: null
    - claim:
        id: c_nZLUA2hkcWvEBGokCcPeqD
        subject_person_id: p_58T6FS2HPdsESXyAWQ5HsZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pZvZDWqN8fXFnFhqGjtXXD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZqZDlO4TTy27q03E1C2MF1
          claim_id: c_nZLUA2hkcWvEBGokCcPeqD
          source_id: s_Kd2o05297TgdeYBezwvBN9
          stance: supports
          locator: CBDB：兄弟 王鑑（68835）之父／母 王吉甫
          quotation: null
          interpretation_note: 由兄弟关系推断：王樽 与 王鑑 为同胞（CBDB 记「兄」），王鑑 之父／母即 王樽 之父／母。
          source:
            id: s_Kd2o05297TgdeYBezwvBN9
            source_type: api_record
            title: 中国历代人物传记资料库：王樽（CBDB 264280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264280&o=json
            external_identifier: CBDB:264280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pZvZDWqN8fXFnFhqGjtXXD
        status: active
        display_name: 王樽
        merged_into_person_id: null
    - claim:
        id: c_5D9QNKXz9ZIKDDpC8khVMn
        subject_person_id: p_58T6FS2HPdsESXyAWQ5HsZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_urh8FniQCZwFsizAw6pB3W
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lMzRvwFXD1N_8dfqRZFpp1
          claim_id: c_5D9QNKXz9ZIKDDpC8khVMn
          source_id: s_GFS-beQc8wQGwp5wVNUU80
          stance: supports
          locator: CBDB：兄弟 王鑑（68835）之父／母 王吉甫
          quotation: null
          interpretation_note: 由兄弟关系推断：王鉞 与 王鑑 为同胞（CBDB 记「兄」），王鑑 之父／母即 王鉞 之父／母。
          source:
            id: s_GFS-beQc8wQGwp5wVNUU80
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 264291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264291&o=json
            external_identifier: CBDB:264291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_urh8FniQCZwFsizAw6pB3W
        status: active
        display_name: 王鉞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王吉甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王吉甫 | accepted |
| bio.summary | 王吉甫，明人物。景泰五年進士，籍贯太原。（中国历代人物传记资料库 CBDB 264236） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GBJny92BjTJrCUatL2dF1X | 王鑑 | accepted |
| children | p_2vhLtAEfYEAKfqsmFkPmPE | 王固 | accepted |
| children | p_4NNH2b7ph6dGDSzKVJgCbo | 王銳 | accepted |
| children | p_pZvZDWqN8fXFnFhqGjtXXD | 王樽 | accepted |
| children | p_urh8FniQCZwFsizAw6pB3W | 王鉞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王固（CBDB 264269）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264269&o=json)
- [中国历代人物传记资料库：王吉甫（CBDB 264236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264236&o=json)
- [中国历代人物传记资料库：王銳（CBDB 264303）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264303&o=json)
- [中国历代人物传记资料库：王鉞（CBDB 264291）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264291&o=json)
- [中国历代人物传记资料库：王樽（CBDB 264280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264280&o=json)

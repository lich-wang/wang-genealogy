---
schema: wang-person/v1
id: p_8b3iLW9bXH42d3DjadCJky
status: active
merged_into: null
display_name: 王少陽
cbdb_id: 221868
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UXA7v4cCES46fWvho35jVb
        subject_person_id: p_8b3iLW9bXH42d3DjadCJky
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王少陽，明人物。萬曆八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 221868）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_V9q8fmt-81xDkIr-2y3F9n
          claim_id: c_UXA7v4cCES46fWvho35jVb
          source_id: s_ikEQiLEqu4YJsgw7AkoLVB
          stance: supports
          locator: CBDB:221868
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ikEQiLEqu4YJsgw7AkoLVB
            source_type: api_record
            title: 中国历代人物传记资料库：王少陽（CBDB 221868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221868&o=json
            external_identifier: CBDB:221868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jv3ou61M6FanHKo7kySPtK
        subject_person_id: p_8b3iLW9bXH42d3DjadCJky
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王少陽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WQx42bbWQw158rCC1udcj4
          claim_id: c_jv3ou61M6FanHKo7kySPtK
          source_id: s_ikEQiLEqu4YJsgw7AkoLVB
          stance: supports
          locator: CBDB:221868
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZYfBzIrUk_mQofulm2QI5P
        subject_person_id: p_iEzBpfQksvKwtnLVgiEPSK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8b3iLW9bXH42d3DjadCJky
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_53g_oL9Satwjr9V5R0CYi6
          claim_id: c_ZYfBzIrUk_mQofulm2QI5P
          source_id: s_PK99z-EQZ-11RjkkwcpNXh
          stance: supports
          locator: CBDB：兄弟 王三陽（206708）之父／母 王賜良
          quotation: null
          interpretation_note: 由兄弟关系推断：王少陽 与 王三陽 为同胞（CBDB 记「弟」），王三陽 之父／母即 王少陽 之父／母。
          source:
            id: s_PK99z-EQZ-11RjkkwcpNXh
            source_type: api_record
            title: 中国历代人物传记资料库：王少陽（CBDB 221868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221868&o=json
            external_identifier: CBDB:221868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iEzBpfQksvKwtnLVgiEPSK
        status: active
        display_name: 王賜良
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_m-LGPpTA9LLgyibYJxYzhi
        subject_person_id: p_8b3iLW9bXH42d3DjadCJky
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_CE6L82D742RNyGAmxCYAn5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tcA9oMLOB_H6ujcrf4VnqP
          claim_id: c_m-LGPpTA9LLgyibYJxYzhi
          source_id: s_PK99z-EQZ-11RjkkwcpNXh
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206708 王三陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_PK99z-EQZ-11RjkkwcpNXh
            source_type: api_record
            title: 中国历代人物传记资料库：王少陽（CBDB 221868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221868&o=json
            external_identifier: CBDB:221868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CE6L82D742RNyGAmxCYAn5
        status: active
        display_name: 王三陽
        merged_into_person_id: null
---

# 王少陽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王少陽，明人物。萬曆八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 221868） | accepted |
| name.primary | 王少陽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iEzBpfQksvKwtnLVgiEPSK | 王賜良 | accepted |
| other | p_CE6L82D742RNyGAmxCYAn5 | 王三陽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王少陽（CBDB 221868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221868&o=json)

---
schema: wang-person/v1
id: p_FdQANGZ8Ga1RmHrMXTBEbk
status: active
merged_into: null
display_name: 王鐸
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KVG9Sx3efPKH5LVmqCDRUe
        subject_person_id: p_FdQANGZ8Ga1RmHrMXTBEbk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AzUPW23QcBP8z1monQfy7X
          claim_id: c_KVG9Sx3efPKH5LVmqCDRUe
          source_id: s_xMLw5agxxXRHGwy7z15w7P
          stance: supports
          locator: CBDB:280455
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280455）
          source: &a1
            id: s_xMLw5agxxXRHGwy7z15w7P
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 280455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280455&o=json
            external_identifier: CBDB:280455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.012Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TBstrbjXPfs98pPYLE8ZkW
        subject_person_id: p_FdQANGZ8Ga1RmHrMXTBEbk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸，明人物。正德十二年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 280455）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__DVIq_r5Ui2CyGNra5ehAn
          claim_id: c_TBstrbjXPfs98pPYLE8ZkW
          source_id: s_xMLw5agxxXRHGwy7z15w7P
          stance: supports
          locator: CBDB:280455
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CDdDpXUdFOV2K1oBB2Kpne
        subject_person_id: p_JQSDqcZBSbRhiYBr5Yzafa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FdQANGZ8Ga1RmHrMXTBEbk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z68cl9woOrEC90b8kbebgo
          claim_id: c_CDdDpXUdFOV2K1oBB2Kpne
          source_id: s_EkRVPvg8RZB4Ws2KZ-n2lT
          stance: supports
          locator: CBDB：兄弟 王鎔（201918）之父／母 王純
          quotation: null
          interpretation_note: 由兄弟关系推断：王鐸 与 王鎔 为同胞（CBDB 记「弟」），王鎔 之父／母即 王鐸 之父／母。
          source:
            id: s_EkRVPvg8RZB4Ws2KZ-n2lT
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 280455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280455&o=json
            external_identifier: CBDB:280455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JQSDqcZBSbRhiYBr5Yzafa
        status: active
        display_name: 王純
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_M_fS5GqIiWc_fPGqs3m294
        subject_person_id: p_FdQANGZ8Ga1RmHrMXTBEbk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GPJWbNZBxqcAyFkJPjejib
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7To_-0ESqAvt3mkeuge7zQ
          claim_id: c_M_fS5GqIiWc_fPGqs3m294
          source_id: s_EkRVPvg8RZB4Ws2KZ-n2lT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201918 王鎔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EkRVPvg8RZB4Ws2KZ-n2lT
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 280455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280455&o=json
            external_identifier: CBDB:280455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GPJWbNZBxqcAyFkJPjejib
        status: active
        display_name: 王鎔
        merged_into_person_id: null
---

# 王鐸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鐸 | accepted |
| bio.summary | 王鐸，明人物。正德十二年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 280455） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JQSDqcZBSbRhiYBr5Yzafa | 王純 | accepted |
| other | p_GPJWbNZBxqcAyFkJPjejib | 王鎔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鐸（CBDB 280455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280455&o=json)

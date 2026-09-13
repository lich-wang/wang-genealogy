---
schema: wang-person/v1
id: p_P1dfjmbEcRUjawic9P8Mzq
status: active
merged_into: null
display_name: 王與權
cbdb_id: 38262
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Fk5Ebu2qrDraSd68bRCM5J
        subject_person_id: p_P1dfjmbEcRUjawic9P8Mzq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王與權，宋人物。籍贯鄱陽，入仕進士，曾任國子監祭酒、國子監司業、殿中省尚輦奉御。（中国历代人物传记资料库 CBDB 38262）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_6b9s3asFXQ2PSSlkHD3SJX
          claim_id: c_Fk5Ebu2qrDraSd68bRCM5J
          source_id: s_ye7i1UTQUEEN2pbkPFBWeH
          stance: supports
          locator: CBDB:38262
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ye7i1UTQUEEN2pbkPFBWeH
            source_type: api_record
            title: 中国历代人物传记资料库：王與權（CBDB 38262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38262&o=json
            external_identifier: CBDB:38262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:46.515Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ypkKrPBRPZjjpDxweR61Ad
        subject_person_id: p_P1dfjmbEcRUjawic9P8Mzq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王與權
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wpxdPY5cdKZLPhxLA1mNiN
          claim_id: c_ypkKrPBRPZjjpDxweR61Ad
          source_id: s_ye7i1UTQUEEN2pbkPFBWeH
          stance: supports
          locator: CBDB:38262
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1201-1300）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BORd3R7cbkKrL51YX5A11m
        subject_person_id: p_xJkszbxvnJohtNkSwW6mRk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P1dfjmbEcRUjawic9P8Mzq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FkfJKgmV5Xnfkz7QMrE1qk
          claim_id: c_BORd3R7cbkKrL51YX5A11m
          source_id: s_6pUqu12a94xLPVatFvJzk8
          stance: supports
          locator: 宋人傳記資料索引(電子版)，2007：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6pUqu12a94xLPVatFvJzk8
            source_type: api_record
            title: 中国历代人物传记资料库：王蒙（CBDB 39138）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39138&o=json
            external_identifier: CBDB:39138
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.599Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xJkszbxvnJohtNkSwW6mRk
        status: active
        display_name: 王蒙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王與權

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王與權，宋人物。籍贯鄱陽，入仕進士，曾任國子監祭酒、國子監司業、殿中省尚輦奉御。（中国历代人物传记资料库 CBDB 38262） | accepted |
| name.primary | 王與權 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xJkszbxvnJohtNkSwW6mRk | 王蒙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王蒙（CBDB 39138）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39138&o=json)
- [中国历代人物传记资料库：王與權（CBDB 38262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38262&o=json)

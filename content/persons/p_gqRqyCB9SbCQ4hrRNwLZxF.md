---
schema: wang-person/v1
id: p_gqRqyCB9SbCQ4hrRNwLZxF
status: active
merged_into: null
display_name: 王汝賓
cbdb_id: 202144
revision: 6
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WwU3PY47HJzV664MoFx9Tx
        subject_person_id: p_gqRqyCB9SbCQ4hrRNwLZxF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝賓（生于1481年），明人物。明清進士進士，籍贯德化，入仕進士。（中国历代人物传记资料库 CBDB 202144）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_TPTYhEJCraI3N87rrkW_Oa
          claim_id: c_WwU3PY47HJzV664MoFx9Tx
          source_id: s_vh76r1Mykg5pyG8i5yRcC5
          stance: supports
          locator: CBDB:202144
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_vh76r1Mykg5pyG8i5yRcC5
            source_type: api_record
            title: 中国历代人物传记资料库：王汝賓（CBDB 202144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202144&o=json
            external_identifier: CBDB:202144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8HC5CLefdYn5s45hVoSGhS
        subject_person_id: p_gqRqyCB9SbCQ4hrRNwLZxF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1481年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1481-01-01
            latest: 1481-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pKHNDmMVyJ1ND7AnSFN8z4
          claim_id: c_8HC5CLefdYn5s45hVoSGhS
          source_id: s_vh76r1Mykg5pyG8i5yRcC5
          stance: supports
          locator: CBDB:202144
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1481
          source:
            id: s_vh76r1Mykg5pyG8i5yRcC5
            source_type: api_record
            title: 中国历代人物传记资料库：王汝賓（CBDB 202144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202144&o=json
            external_identifier: CBDB:202144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_13tC35YkW1FvryNoT4G6EE
        subject_person_id: p_gqRqyCB9SbCQ4hrRNwLZxF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GdZJFJz5jxq1MLJCkKAuSo
          claim_id: c_13tC35YkW1FvryNoT4G6EE
          source_id: s_vh76r1Mykg5pyG8i5yRcC5
          stance: supports
          locator: CBDB:202144
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1481
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wRMfIX7ebtOsEBoR-iA0lR
        subject_person_id: p_PNivfKUTmvFDeQrEL92ALD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gqRqyCB9SbCQ4hrRNwLZxF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TZhzgBog8ncVQGVZoHK8hZ
          claim_id: c_wRMfIX7ebtOsEBoR-iA0lR
          source_id: s_Eb6hetc5gVEGDZ53xF8W25
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Eb6hetc5gVEGDZ53xF8W25
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 284223）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284223&o=json
            external_identifier: CBDB:284223
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.188Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PNivfKUTmvFDeQrEL92ALD
        status: active
        display_name: 王欽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_jgMVebG_iyebyS7op54Q7E
        subject_person_id: p_3r8CHHsTK1Q9tE6fXbkey5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gqRqyCB9SbCQ4hrRNwLZxF
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cls_SBh76UvK9a6Cw0jGxP
          claim_id: c_jgMVebG_iyebyS7op54Q7E
          source_id: s_5sNB7PBqBwjcQ5cAybZcEg
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5sNB7PBqBwjcQ5cAybZcEg
            source_type: api_record
            title: 中国历代人物传记资料库：王城（CBDB 284221）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284221&o=json
            external_identifier: CBDB:284221
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.187Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3r8CHHsTK1Q9tE6fXbkey5
        status: active
        display_name: 王城
        merged_into_person_id: null
    - claim:
        id: c_WGWsnktyPCOBZaRWC2OPRw
        subject_person_id: p_RRRWc7nkkvNmsosYXGFWNo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gqRqyCB9SbCQ4hrRNwLZxF
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E7x8DWd3Bkrd916h6884LC
          claim_id: c_WGWsnktyPCOBZaRWC2OPRw
          source_id: s_LoggyFDF9ih8cnuocKkny6
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LoggyFDF9ih8cnuocKkny6
            source_type: api_record
            title: 中国历代人物传记资料库：王震（CBDB 284220）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284220&o=json
            external_identifier: CBDB:284220
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.187Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RRRWc7nkkvNmsosYXGFWNo
        status: active
        display_name: 王震
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_ej1jKKDarF8_Bwlh71SNIA
        subject_person_id: p_FoQGejSJMCnokfAieKAUXg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gqRqyCB9SbCQ4hrRNwLZxF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Lpdfq66tE2RHrUTV06Oy8f
          claim_id: c_ej1jKKDarF8_Bwlh71SNIA
          source_id: s_104QukXz0x1Ju6BLDbiPtC
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202144 王汝賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_104QukXz0x1Ju6BLDbiPtC
            source_type: api_record
            title: 中国历代人物传记资料库：王汝臣（CBDB 284226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284226&o=json
            external_identifier: CBDB:284226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FoQGejSJMCnokfAieKAUXg
        status: active
        display_name: 王汝臣
        merged_into_person_id: null
    - claim:
        id: c_pfx4f7uJk2GeMsxHiisvxS
        subject_person_id: p_WHTWDjMywuaxpNQ8W566da
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gqRqyCB9SbCQ4hrRNwLZxF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KeyHnAS4aHvVWnVx3lkNzC
          claim_id: c_pfx4f7uJk2GeMsxHiisvxS
          source_id: s_xrhfXyagBmzC-HTo4W1NnW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202144 王汝賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xrhfXyagBmzC-HTo4W1NnW
            source_type: api_record
            title: 中国历代人物传记资料库：王汝浙（CBDB 284227）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284227&o=json
            external_identifier: CBDB:284227
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WHTWDjMywuaxpNQ8W566da
        status: active
        display_name: 王汝浙
        merged_into_person_id: null
---

# 王汝賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝賓（生于1481年），明人物。明清進士進士，籍贯德化，入仕進士。（中国历代人物传记资料库 CBDB 202144） | accepted |
| birth.date | 1481年 | accepted |
| name.primary | 王汝賓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PNivfKUTmvFDeQrEL92ALD | 王欽 | accepted |
| ancestors | p_3r8CHHsTK1Q9tE6fXbkey5 | 王城 | accepted |
| ancestors | p_RRRWc7nkkvNmsosYXGFWNo | 王震 | accepted |
| other | p_FoQGejSJMCnokfAieKAUXg | 王汝臣 | accepted |
| other | p_WHTWDjMywuaxpNQ8W566da | 王汝浙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王城（CBDB 284221）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284221&o=json)
- [中国历代人物传记资料库：王欽（CBDB 284223）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284223&o=json)
- [中国历代人物传记资料库：王汝賓（CBDB 202144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202144&o=json)
- [中国历代人物传记资料库：王汝臣（CBDB 284226）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284226&o=json)
- [中国历代人物传记资料库：王汝浙（CBDB 284227）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284227&o=json)
- [中国历代人物传记资料库：王震（CBDB 284220）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284220&o=json)

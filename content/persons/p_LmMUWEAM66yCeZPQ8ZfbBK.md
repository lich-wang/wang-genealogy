---
schema: wang-person/v1
id: p_LmMUWEAM66yCeZPQ8ZfbBK
status: active
merged_into: null
display_name: 王杲
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GXrDyrhDwFfFpb81RgmGBG
        subject_person_id: p_LmMUWEAM66yCeZPQ8ZfbBK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dtRMvgjH1ZsXCk2F7DeJjt
          claim_id: c_GXrDyrhDwFfFpb81RgmGBG
          source_id: s_Cr8t89VKqxpWJ6H8dyJPdL
          stance: supports
          locator: CBDB:279551
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279551）
          source: &a1
            id: s_Cr8t89VKqxpWJ6H8dyJPdL
            source_type: api_record
            title: 中国历代人物传记资料库：王杲（CBDB 279551）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279551&o=json
            external_identifier: CBDB:279551
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.989Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uHNhK81AJ8hTmoNEze6r4m
        subject_person_id: p_LmMUWEAM66yCeZPQ8ZfbBK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杲，明人物。正德十二年進士，籍贯金壇，入仕監生。（中国历代人物传记资料库 CBDB 279551）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Lp977rfKrHl7K8lN2Znzzk
          claim_id: c_uHNhK81AJ8hTmoNEze6r4m
          source_id: s_Cr8t89VKqxpWJ6H8dyJPdL
          stance: supports
          locator: CBDB:279551
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gh-HoK4cxr3kp3w9GxcZRC
        subject_person_id: p_QN7EhCDtejfmZYbCTCBWyv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LmMUWEAM66yCeZPQ8ZfbBK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pCeRne2hyVig5zxdRno-X8
          claim_id: c_gh-HoK4cxr3kp3w9GxcZRC
          source_id: s_L8qtQY8FImhaOvmtfsmD0S
          stance: supports
          locator: CBDB：兄弟 王臬（34721）之父／母 王瀚
          quotation: null
          interpretation_note: 由兄弟关系推断：王杲 与 王臬 为同胞（CBDB 记「弟」），王臬 之父／母即 王杲 之父／母。
          source:
            id: s_L8qtQY8FImhaOvmtfsmD0S
            source_type: api_record
            title: 中国历代人物传记资料库：王杲（CBDB 279551）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279551&o=json
            external_identifier: CBDB:279551
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QN7EhCDtejfmZYbCTCBWyv
        status: active
        display_name: 王瀚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_n9Ie3TLQFflcR2SBw4e_MH
        subject_person_id: p_LmMUWEAM66yCeZPQ8ZfbBK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8gMXSF3VVYwjteHIafXWxD
          claim_id: c_n9Ie3TLQFflcR2SBw4e_MH
          source_id: s_L8qtQY8FImhaOvmtfsmD0S
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34721 王臬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_L8qtQY8FImhaOvmtfsmD0S
            source_type: api_record
            title: 中国历代人物传记资料库：王杲（CBDB 279551）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279551&o=json
            external_identifier: CBDB:279551
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vpzDXBrQjqPJnEN64LCsPF
        status: active
        display_name: 王臬
        merged_into_person_id: null
---

# 王杲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王杲 | accepted |
| bio.summary | 王杲，明人物。正德十二年進士，籍贯金壇，入仕監生。（中国历代人物传记资料库 CBDB 279551） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QN7EhCDtejfmZYbCTCBWyv | 王瀚 | accepted |
| other | p_vpzDXBrQjqPJnEN64LCsPF | 王臬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王杲（CBDB 279551）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279551&o=json)

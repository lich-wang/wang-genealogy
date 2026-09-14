---
schema: wang-person/v1
id: p_QN7EhCDtejfmZYbCTCBWyv
status: active
merged_into: null
display_name: 王瀚
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J6qE8ANP1SGSiQDi7JRU78
        subject_person_id: p_QN7EhCDtejfmZYbCTCBWyv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sEWurYWmYEY3tcDgAdw3V9
          claim_id: c_J6qE8ANP1SGSiQDi7JRU78
          source_id: s_cZjZjRkhyrucvBPMXtGQHT
          stance: supports
          locator: CBDB:279548
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279548）
          source: &a1
            id: s_cZjZjRkhyrucvBPMXtGQHT
            source_type: api_record
            title: 中国历代人物传记资料库：王瀚（CBDB 279548）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279548&o=json
            external_identifier: CBDB:279548
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.989Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N1PopH36YGfNCYNZYPRby8
        subject_person_id: p_QN7EhCDtejfmZYbCTCBWyv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀚，明人物。正德十二年進士，籍贯金壇，曾任義官。（中国历代人物传记资料库 CBDB 279548）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Hm4x2N23MGDIy29AxKnbPp
          claim_id: c_N1PopH36YGfNCYNZYPRby8
          source_id: s_cZjZjRkhyrucvBPMXtGQHT
          stance: supports
          locator: CBDB:279548
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_mbUNz3v4PNphNu-c2PzKU-
        subject_person_id: p_QN7EhCDtejfmZYbCTCBWyv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IlcNLngQk831OiBa81m3IM
          claim_id: c_mbUNz3v4PNphNu-c2PzKU-
          source_id: s_cZjZjRkhyrucvBPMXtGQHT
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vpzDXBrQjqPJnEN64LCsPF
        status: active
        display_name: 王臬
        merged_into_person_id: null
    - claim:
        id: c_0c1DPlCJu6b-UY8DePSlNL
        subject_person_id: p_QN7EhCDtejfmZYbCTCBWyv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5daxgh234B2e9ovRioBYDV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u2rDlnByRChjyZ7PAKv6Ir
          claim_id: c_0c1DPlCJu6b-UY8DePSlNL
          source_id: s_Nj6oZg9sd6C4R2SjFDGJW3
          stance: supports
          locator: CBDB：兄弟 王臬（34721）之父／母 王瀚
          quotation: null
          interpretation_note: 由兄弟关系推断：王柬 与 王臬 为同胞（CBDB 记「兄」），王臬 之父／母即 王柬 之父／母。
          source:
            id: s_Nj6oZg9sd6C4R2SjFDGJW3
            source_type: api_record
            title: 中国历代人物传记资料库：王柬（CBDB 279554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279554&o=json
            external_identifier: CBDB:279554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5daxgh234B2e9ovRioBYDV
        status: active
        display_name: 王柬
        merged_into_person_id: null
    - claim:
        id: c_OrnQiXTvO-Xey_1zgaQvBi
        subject_person_id: p_QN7EhCDtejfmZYbCTCBWyv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LKfUJcNYpyTknq4Us3SEyP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hPLfa0d2o3iIDDWi4F-UHM
          claim_id: c_OrnQiXTvO-Xey_1zgaQvBi
          source_id: s_X8k6t2eIzsOTdCcNEoBtdF
          stance: supports
          locator: CBDB：兄弟 王臬（34721）之父／母 王瀚
          quotation: null
          interpretation_note: 由兄弟关系推断：王樂 与 王臬 为同胞（CBDB 记「兄」），王臬 之父／母即 王樂 之父／母。
          source:
            id: s_X8k6t2eIzsOTdCcNEoBtdF
            source_type: api_record
            title: 中国历代人物传记资料库：王樂（CBDB 279556）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279556&o=json
            external_identifier: CBDB:279556
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LKfUJcNYpyTknq4Us3SEyP
        status: active
        display_name: 王樂
        merged_into_person_id: null
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
        id: p_LmMUWEAM66yCeZPQ8ZfbBK
        status: active
        display_name: 王杲
        merged_into_person_id: null
    - claim:
        id: c_eudtjfeDGmhzQz8_1S6yPY
        subject_person_id: p_QN7EhCDtejfmZYbCTCBWyv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V7wnHykQVEtC1QyrbN7yT9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B6Yt3Flx4GHNrH3QVaQ5gm
          claim_id: c_eudtjfeDGmhzQz8_1S6yPY
          source_id: s_qNH7zDUiNmLMYFsVmSRx1a
          stance: supports
          locator: CBDB：兄弟 王臬（34721）之父／母 王瀚
          quotation: null
          interpretation_note: 由兄弟关系推断：王雧 与 王臬 为同胞（CBDB 记「兄」），王臬 之父／母即 王雧 之父／母。
          source:
            id: s_qNH7zDUiNmLMYFsVmSRx1a
            source_type: api_record
            title: 中国历代人物传记资料库：王雧（CBDB 279557）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279557&o=json
            external_identifier: CBDB:279557
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V7wnHykQVEtC1QyrbN7yT9
        status: active
        display_name: 王雧
        merged_into_person_id: null
    - claim:
        id: c_HB5idgGp__4EO_kCVIoJoL
        subject_person_id: p_QN7EhCDtejfmZYbCTCBWyv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W2oCgnB2LnqS9b8DXCcwJg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q7jaUEepHbDz7LXjGVKNa4
          claim_id: c_HB5idgGp__4EO_kCVIoJoL
          source_id: s_8R9Oal2X8Xh2KpsV4n2565
          stance: supports
          locator: CBDB：兄弟 王臬（34721）之父／母 王瀚
          quotation: null
          interpretation_note: 由兄弟关系推断：王楷 与 王臬 为同胞（CBDB 记「兄」），王臬 之父／母即 王楷 之父／母。
          source:
            id: s_8R9Oal2X8Xh2KpsV4n2565
            source_type: api_record
            title: 中国历代人物传记资料库：王楷（CBDB 279552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279552&o=json
            external_identifier: CBDB:279552
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_W2oCgnB2LnqS9b8DXCcwJg
        status: active
        display_name: 王楷
        merged_into_person_id: null
    - claim:
        id: c_f3kDhNQrbvlr8sb1Wrf3RL
        subject_person_id: p_QN7EhCDtejfmZYbCTCBWyv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mC4jGnPD5qv77BnJmEMxEd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b_n8QAEAkV99besRFBdK-x
          claim_id: c_f3kDhNQrbvlr8sb1Wrf3RL
          source_id: s_3sQj1yitOZxgwktiwryTRn
          stance: supports
          locator: CBDB：兄弟 王臬（34721）之父／母 王瀚
          quotation: null
          interpretation_note: 由兄弟关系推断：王概 与 王臬 为同胞（CBDB 记「兄」），王臬 之父／母即 王概 之父／母。
          source:
            id: s_3sQj1yitOZxgwktiwryTRn
            source_type: api_record
            title: 中国历代人物传记资料库：王概（CBDB 279555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279555&o=json
            external_identifier: CBDB:279555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mC4jGnPD5qv77BnJmEMxEd
        status: active
        display_name: 王概
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瀚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瀚 | accepted |
| bio.summary | 王瀚，明人物。正德十二年進士，籍贯金壇，曾任義官。（中国历代人物传记资料库 CBDB 279548） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_vpzDXBrQjqPJnEN64LCsPF | 王臬 | accepted |
| children | p_5daxgh234B2e9ovRioBYDV | 王柬 | accepted |
| children | p_LKfUJcNYpyTknq4Us3SEyP | 王樂 | accepted |
| children | p_LmMUWEAM66yCeZPQ8ZfbBK | 王杲 | accepted |
| children | p_V7wnHykQVEtC1QyrbN7yT9 | 王雧 | accepted |
| children | p_W2oCgnB2LnqS9b8DXCcwJg | 王楷 | accepted |
| children | p_mC4jGnPD5qv77BnJmEMxEd | 王概 | accepted |

## 外部来源

- [中国历代人物传记资料库：王概（CBDB 279555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279555&o=json)
- [中国历代人物传记资料库：王杲（CBDB 279551）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279551&o=json)
- [中国历代人物传记资料库：王瀚（CBDB 279548）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279548&o=json)
- [中国历代人物传记资料库：王雧（CBDB 279557）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279557&o=json)
- [中国历代人物传记资料库：王柬（CBDB 279554）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279554&o=json)
- [中国历代人物传记资料库：王楷（CBDB 279552）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279552&o=json)
- [中国历代人物传记资料库：王樂（CBDB 279556）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279556&o=json)

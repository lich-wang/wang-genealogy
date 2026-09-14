---
schema: wang-person/v1
id: p_75am3pR1oJY4F4kK4X9iA5
status: active
merged_into: null
display_name: 王崇德
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RE4KGaGrQfVDBUY4EfJ3Nn
        subject_person_id: p_75am3pR1oJY4F4kK4X9iA5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xAhtB1G5EFE8fhEuHAHYhC
          claim_id: c_RE4KGaGrQfVDBUY4EfJ3Nn
          source_id: s_GiWhuWoYvEfNChaa7St2jP
          stance: supports
          locator: CBDB:336271
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（336271）
          source: &a1
            id: s_GiWhuWoYvEfNChaa7St2jP
            source_type: api_record
            title: 中国历代人物传记资料库：王崇德（CBDB 336271）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336271&o=json
            external_identifier: CBDB:336271
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.477Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KJHne58m1dYXmNsjCGDjzX
        subject_person_id: p_75am3pR1oJY4F4kK4X9iA5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇德，明人物。隆慶二年進士，籍贯博野。（中国历代人物传记资料库 CBDB 336271）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_f8Ih0oGH3xfYZQ5u7jhk6V
          claim_id: c_KJHne58m1dYXmNsjCGDjzX
          source_id: s_GiWhuWoYvEfNChaa7St2jP
          stance: supports
          locator: CBDB:336271
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_oqgfpSBMRFSJrc7WA35bBL
        subject_person_id: p_75am3pR1oJY4F4kK4X9iA5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4DoEiYtLovxcVEfxd27r2A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_In1K1SmCGICByCWX4Boklq
          claim_id: c_oqgfpSBMRFSJrc7WA35bBL
          source_id: s_GJZqse6PD7fsyQFLGTszyQ
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百七十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GJZqse6PD7fsyQFLGTszyQ
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 205634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205634&o=json
            external_identifier: CBDB:205634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.866Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4DoEiYtLovxcVEfxd27r2A
        status: active
        display_name: 王詔
        merged_into_person_id: null
    - claim:
        id: c_XYG9CQ8Yq2ropKULnX4X_5
        subject_person_id: p_75am3pR1oJY4F4kK4X9iA5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1HkFkTf4tHoX7LaHqLF6KD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HfHR5ezucpuU8ikhKlLFd0
          claim_id: c_XYG9CQ8Yq2ropKULnX4X_5
          source_id: s_qDsIr0aRHjGQ69qg6rP6F4
          stance: supports
          locator: CBDB：兄弟 王詔（205634）之父／母 王崇德
          quotation: null
          interpretation_note: 由兄弟关系推断：王來聘 与 王詔 为同胞（CBDB 记「弟」），王詔 之父／母即 王來聘 之父／母。
          source:
            id: s_qDsIr0aRHjGQ69qg6rP6F4
            source_type: api_record
            title: 中国历代人物传记资料库：王來聘（CBDB 336275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336275&o=json
            external_identifier: CBDB:336275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1HkFkTf4tHoX7LaHqLF6KD
        status: active
        display_name: 王來聘
        merged_into_person_id: null
    - claim:
        id: c_f_vCUt2dk9n3Zt9-35Jhzc
        subject_person_id: p_75am3pR1oJY4F4kK4X9iA5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PPNZnTHWQZoFJFBeBGWT9K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kuTPS8QI1l36UN-rYQH3Er
          claim_id: c_f_vCUt2dk9n3Zt9-35Jhzc
          source_id: s_gS0lzVXDIWLXwXkBAvACmd
          stance: supports
          locator: CBDB：兄弟 王詔（205634）之父／母 王崇德
          quotation: null
          interpretation_note: 由兄弟关系推断：王來徵 与 王詔 为同胞（CBDB 记「兄」），王詔 之父／母即 王來徵 之父／母。
          source:
            id: s_gS0lzVXDIWLXwXkBAvACmd
            source_type: api_record
            title: 中国历代人物传记资料库：王來徵（CBDB 336276）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336276&o=json
            external_identifier: CBDB:336276
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PPNZnTHWQZoFJFBeBGWT9K
        status: active
        display_name: 王來徵
        merged_into_person_id: null
    - claim:
        id: c_ggW8Tnoib1PyXFMrmxkQq7
        subject_person_id: p_75am3pR1oJY4F4kK4X9iA5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jye57mE6Xx3PfuTCK5QS1h
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kZQyYZPWxyKhvWuSYwlPzH
          claim_id: c_ggW8Tnoib1PyXFMrmxkQq7
          source_id: s_wFqyzYEU-4zDlSU75IpOBo
          stance: supports
          locator: CBDB：兄弟 王詔（205634）之父／母 王崇德
          quotation: null
          interpretation_note: 由兄弟关系推断：王來問 与 王詔 为同胞（CBDB 记「兄」），王詔 之父／母即 王來問 之父／母。
          source:
            id: s_wFqyzYEU-4zDlSU75IpOBo
            source_type: api_record
            title: 中国历代人物传记资料库：王來問（CBDB 336278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336278&o=json
            external_identifier: CBDB:336278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jye57mE6Xx3PfuTCK5QS1h
        status: active
        display_name: 王來問
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崇德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇德 | accepted |
| bio.summary | 王崇德，明人物。隆慶二年進士，籍贯博野。（中国历代人物传记资料库 CBDB 336271） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4DoEiYtLovxcVEfxd27r2A | 王詔 | accepted |
| children | p_1HkFkTf4tHoX7LaHqLF6KD | 王來聘 | accepted |
| children | p_PPNZnTHWQZoFJFBeBGWT9K | 王來徵 | accepted |
| children | p_jye57mE6Xx3PfuTCK5QS1h | 王來問 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇德（CBDB 336271）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336271&o=json)
- [中国历代人物传记资料库：王來聘（CBDB 336275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336275&o=json)
- [中国历代人物传记资料库：王來問（CBDB 336278）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336278&o=json)
- [中国历代人物传记资料库：王來徵（CBDB 336276）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336276&o=json)
- [中国历代人物传记资料库：王詔（CBDB 205634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205634&o=json)

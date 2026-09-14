---
schema: wang-person/v1
id: p_2415asAcUVyLyfd79JjPmQ
status: active
merged_into: null
display_name: 王士鳳
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mzJyxNQHXgghQZCNmYwqXz
        subject_person_id: p_2415asAcUVyLyfd79JjPmQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士鳳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hw3ArqHwzbbsAymrWPD29a
          claim_id: c_mzJyxNQHXgghQZCNmYwqXz
          source_id: s_Ex35WZoaEXZnTHLD5g7nDz
          stance: supports
          locator: CBDB:294545
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294545）
          source: &a1
            id: s_Ex35WZoaEXZnTHLD5g7nDz
            source_type: api_record
            title: 中国历代人物传记资料库：王士鳳（CBDB 294545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294545&o=json
            external_identifier: CBDB:294545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.470Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vHAyXWXuHriS4ezjRgGzBe
        subject_person_id: p_2415asAcUVyLyfd79JjPmQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士鳳，明人物。嘉靖十一年進士，籍贯東莞。（中国历代人物传记资料库 CBDB 294545）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EoFzQ-krdnhWS4OuvsWFAd
          claim_id: c_vHAyXWXuHriS4ezjRgGzBe
          source_id: s_Ex35WZoaEXZnTHLD5g7nDz
          stance: supports
          locator: CBDB:294545
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dqFW5ld4WFzWTH_PRDtYed
        subject_person_id: p_DkL4KAP3Vyt4DGq87NkgHu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2415asAcUVyLyfd79JjPmQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k0Eb5MUaC-lzZmDdov88Ks
          claim_id: c_dqFW5ld4WFzWTH_PRDtYed
          source_id: s_dyK34MsAz8cCbwLDabK808
          stance: supports
          locator: CBDB：兄弟 王玉汝（202795）之父／母 王尚學
          quotation: null
          interpretation_note: 由兄弟关系推断：王士鳳 与 王玉汝 为同胞（CBDB 记「兄」），王玉汝 之父／母即 王士鳳 之父／母。
          source:
            id: s_dyK34MsAz8cCbwLDabK808
            source_type: api_record
            title: 中国历代人物传记资料库：王士鳳（CBDB 294545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294545&o=json
            external_identifier: CBDB:294545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DkL4KAP3Vyt4DGq87NkgHu
        status: active
        display_name: 王尚學
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_pqv6xgaHS4wCQ98Sar97gO
        subject_person_id: p_2415asAcUVyLyfd79JjPmQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aJQ3escM6jBxZ8EP2idom6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tgOYmgnkOfSWLUORAfrHwq
          claim_id: c_pqv6xgaHS4wCQ98Sar97gO
          source_id: s_dyK34MsAz8cCbwLDabK808
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202795 王玉汝）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dyK34MsAz8cCbwLDabK808
            source_type: api_record
            title: 中国历代人物传记资料库：王士鳳（CBDB 294545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294545&o=json
            external_identifier: CBDB:294545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aJQ3escM6jBxZ8EP2idom6
        status: active
        display_name: 王玉汝
        merged_into_person_id: null
---

# 王士鳳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士鳳 | accepted |
| bio.summary | 王士鳳，明人物。嘉靖十一年進士，籍贯東莞。（中国历代人物传记资料库 CBDB 294545） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DkL4KAP3Vyt4DGq87NkgHu | 王尚學 | accepted |
| other | p_aJQ3escM6jBxZ8EP2idom6 | 王玉汝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王士鳳（CBDB 294545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294545&o=json)

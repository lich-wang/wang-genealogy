---
schema: wang-person/v1
id: p_4ZFWTE12ciF8FWWzCr37vg
status: active
merged_into: null
display_name: 王保大
cbdb_id: 22145
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1BL3LQe2n2h5GbdMCxZeNN
        subject_person_id: p_4ZFWTE12ciF8FWWzCr37vg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王保大，史料所见人物。本项目依据《中国历代人物传记资料库：王保大（CBDB 22145）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_T8SrPQDtDki6lQVuRn5pr7
          claim_id: c_1BL3LQe2n2h5GbdMCxZeNN
          source_id: s_zMU8ad3Vq7W4ersGKrjYcB
          stance: supports
          locator: CBDB:22145
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_zMU8ad3Vq7W4ersGKrjYcB
            source_type: api_record
            title: 中国历代人物传记资料库：王保大（CBDB 22145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22145&o=json
            external_identifier: CBDB:22145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5uyLCDK6Mi48VJnTmAyjAE
        subject_person_id: p_4ZFWTE12ciF8FWWzCr37vg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王保大
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3pmqMZiHTqQgfULDECoPfk
          claim_id: c_5uyLCDK6Mi48VJnTmAyjAE
          source_id: s_zMU8ad3Vq7W4ersGKrjYcB
          stance: supports
          locator: CBDB:22145
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_SSsoekBtD6ZfEYfXKNsd4A
        subject_person_id: p_4ZFWTE12ciF8FWWzCr37vg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r8jMTz5d8EtW5WnsB75BCx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VuVhu6p31EzYaEIb8tQeft
          claim_id: c_SSsoekBtD6ZfEYfXKNsd4A
          source_id: s_zMU8ad3Vq7W4ersGKrjYcB
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1923;1924：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: &a2
            id: s_zMU8ad3Vq7W4ersGKrjYcB
            source_type: api_record
            title: 中国历代人物传记资料库：王保大（CBDB 22145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22145&o=json
            external_identifier: CBDB:22145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_r8jMTz5d8EtW5WnsB75BCx
        status: active
        display_name: 王景齊
        merged_into_person_id: null
    - claim:
        id: c_8wP7IP9JTxLKeRXn3thi0w
        subject_person_id: p_4ZFWTE12ciF8FWWzCr37vg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jRG5KQHBS9PPM75Rahm22N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fsiXo8S9LR3-GtOmD9xwqN
          claim_id: c_8wP7IP9JTxLKeRXn3thi0w
          source_id: s_zMU8ad3Vq7W4ersGKrjYcB
          stance: supports
          locator: CBDB 双向互证（子 王莧 ⇄ 父 王保大）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a2
      object_person:
        id: p_jRG5KQHBS9PPM75Rahm22N
        status: active
        display_name: 王莧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_mAaUp7ABIeCUhUMvdXQAq1
        subject_person_id: p_4ZFWTE12ciF8FWWzCr37vg
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_W9NqmCeYHosGEvsaN6LHQf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aa_iS5q7yboy9XLBcEHyo_
          claim_id: c_mAaUp7ABIeCUhUMvdXQAq1
          source_id: s_l0KjfcmogdwAn4Y2vtziSe
          stance: supports
          locator: 宋人傳記資料索引(電子版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_l0KjfcmogdwAn4Y2vtziSe
            source_type: api_record
            title: 中国历代人物传记资料库：吳氏(王保大妻)（CBDB 38070）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38070&o=json
            external_identifier: CBDB:38070
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_W9NqmCeYHosGEvsaN6LHQf
        status: active
        display_name: 吳氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_lYqV1mI_PLbDws09bpddty
        subject_person_id: p_UksH2GDrhL8wGMt6a6tBo9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4ZFWTE12ciF8FWWzCr37vg
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9QmaTfomxsR9jm19jkko1_
          claim_id: c_lYqV1mI_PLbDws09bpddty
          source_id: s_116BDyRVWkEsx5YZDc9i95
          stance: supports
          locator: CBDB 双向互证（孫 王保大 ⇄ 祖父 王棠）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_116BDyRVWkEsx5YZDc9i95
            source_type: api_record
            title: 中国历代人物传记资料库：王棠（CBDB 22138）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22138&o=json
            external_identifier: CBDB:22138
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.832Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UksH2GDrhL8wGMt6a6tBo9
        status: active
        display_name: 王棠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王保大

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王保大，史料所见人物。本项目依据《中国历代人物传记资料库：王保大（CBDB 22145）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王保大 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_r8jMTz5d8EtW5WnsB75BCx | 王景齊 | accepted |
| children | p_jRG5KQHBS9PPM75Rahm22N | 王莧 | accepted |
| spouses | p_W9NqmCeYHosGEvsaN6LHQf | 吳氏 | accepted |
| ancestors | p_UksH2GDrhL8wGMt6a6tBo9 | 王棠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王保大（CBDB 22145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22145&o=json)
- [中国历代人物传记资料库：王棠（CBDB 22138）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22138&o=json)
- [中国历代人物传记资料库：吳氏(王保大妻)（CBDB 38070）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38070&o=json)

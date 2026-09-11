---
schema: wang-person/v1
id: p_bm6LWSBAb2PXxQaQvhN3Lv
status: active
merged_into: null
display_name: 王清蘭
cbdb_id: 100193
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1aZeNrLDchDLfuMB2v5KcE
        subject_person_id: p_bm6LWSBAb2PXxQaQvhN3Lv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清蘭，清人物。中国历代人物传记资料库（CBDB）以人物编号 100193 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_apktSE-eZ5Q8SDoHs-4jSQ
          claim_id: c_1aZeNrLDchDLfuMB2v5KcE
          source_id: s_sGiwAFGGnQREtsFGrepHdh
          stance: supports
          locator: CBDB:100193
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_sGiwAFGGnQREtsFGrepHdh
            source_type: api_record
            title: 中国历代人物传记资料库：王清蘭（CBDB 100193）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100193&o=json
            external_identifier: CBDB:100193
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:49.564Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jsuXBwPXVh9rFQdbizigJv
        subject_person_id: p_bm6LWSBAb2PXxQaQvhN3Lv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BbiGyp1YvC849Dr1mSzEUp
          claim_id: c_jsuXBwPXVh9rFQdbizigJv
          source_id: s_sGiwAFGGnQREtsFGrepHdh
          stance: supports
          locator: CBDB:100193
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1601-1700）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_sGiwAFGGnQREtsFGrepHdh
            source_type: api_record
            title: 中国历代人物传记资料库：王清蘭（CBDB 100193）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100193&o=json
            external_identifier: CBDB:100193
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:49.564Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_uSfA8afHkTU7mSig-ggt3G
        subject_person_id: p_bm6LWSBAb2PXxQaQvhN3Lv
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_r6Zt6YEk8HgUCi73AL8s6L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_21HHn0Xpz-EAtKTpQX9J-6
          claim_id: c_uSfA8afHkTU7mSig-ggt3G
          source_id: s_eYwJATp4a7IU24Esqx9fDI
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1862, HuWenKai #239：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eYwJATp4a7IU24Esqx9fDI
            source_type: api_record
            title: 中国历代人物传记资料库：任大鯤（CBDB 100194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100194&o=json
            external_identifier: CBDB:100194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_r6Zt6YEk8HgUCi73AL8s6L
        status: active
        display_name: 任大鯤
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王清蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王清蘭，清人物。中国历代人物传记资料库（CBDB）以人物编号 100193 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王清蘭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_r6Zt6YEk8HgUCi73AL8s6L | 任大鯤 | accepted |

## 外部来源

- [中国历代人物传记资料库：任大鯤（CBDB 100194）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100194&o=json)
- [中国历代人物传记资料库：王清蘭（CBDB 100193）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100193&o=json)

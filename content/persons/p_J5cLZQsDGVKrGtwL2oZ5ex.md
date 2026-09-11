---
schema: wang-person/v1
id: p_J5cLZQsDGVKrGtwL2oZ5ex
status: active
merged_into: null
display_name: 王端
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8oJ4FXf3Lc9NSugW3NDzDu
        subject_person_id: p_J5cLZQsDGVKrGtwL2oZ5ex
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b9h1sWp25y8jAZBmEH2R9X
          claim_id: c_8oJ4FXf3Lc9NSugW3NDzDu
          source_id: s_E92hptECJAsgi4PCxSacEd
          stance: supports
          locator: CBDB:3987
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3987）
          source: &a1
            id: s_E92hptECJAsgi4PCxSacEd
            source_type: api_record
            title: 中国历代人物传记资料库：王端（CBDB 3987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3987&o=json
            external_identifier: CBDB:3987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.452Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UMJsfE3j7m683KDx3sAH7x
        subject_person_id: p_J5cLZQsDGVKrGtwL2oZ5ex
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王端，宋人物。籍贯開封，入仕科舉學校: 恩賜出身、特賜出身等。（中国历代人物传记资料库 CBDB 3987）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lnAPn85FecREE3EeKRsOun
          claim_id: c_UMJsfE3j7m683KDx3sAH7x
          source_id: s_E92hptECJAsgi4PCxSacEd
          stance: supports
          locator: CBDB:3987
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rCeX3JigTEtFvG0de-dErh
        subject_person_id: p_GrcPU22YikfiRPALs5F2kU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J5cLZQsDGVKrGtwL2oZ5ex
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sDaKrH5B_3PRYrY6GZnrbF
          claim_id: c_rCeX3JigTEtFvG0de-dErh
          source_id: s_sZPi7NxFHAWJpPui1Dt8Z2
          stance: supports
          locator: CBDB 双向互证（子 王端 ⇄ 父 王旭）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_sZPi7NxFHAWJpPui1Dt8Z2
            source_type: api_record
            title: 中国历代人物传记资料库：王旭（CBDB 17838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17838&o=json
            external_identifier: CBDB:17838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.685Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GrcPU22YikfiRPALs5F2kU
        status: active
        display_name: 王旭
        merged_into_person_id: null
  children:
    - claim:
        id: c_4A2fWvIIjVzCsmioZXJwEA
        subject_person_id: p_J5cLZQsDGVKrGtwL2oZ5ex
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7i6jUhtwwYvnVixPJQMhua
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZX-X56lCSezhWtCTZVNTPN
          claim_id: c_4A2fWvIIjVzCsmioZXJwEA
          source_id: s_1yLodTmhzxnNz5wL4LyVXp
          stance: supports
          locator: CBDB 双向互证（父 王端 ⇄ 子 王元）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_1yLodTmhzxnNz5wL4LyVXp
            source_type: api_record
            title: 中国历代人物传记资料库：王元（CBDB 7385）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7385&o=json
            external_identifier: CBDB:7385
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.487Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7i6jUhtwwYvnVixPJQMhua
        status: active
        display_name: 王元
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王端

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王端 | accepted |
| bio.summary | 王端，宋人物。籍贯開封，入仕科舉學校: 恩賜出身、特賜出身等。（中国历代人物传记资料库 CBDB 3987） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GrcPU22YikfiRPALs5F2kU | 王旭 | accepted |
| children | p_7i6jUhtwwYvnVixPJQMhua | 王元 | accepted |

## 外部来源

- [中国历代人物传记资料库：王端（CBDB 3987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3987&o=json)
- [中国历代人物传记资料库：王旭（CBDB 17838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17838&o=json)
- [中国历代人物传记资料库：王元（CBDB 7385）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7385&o=json)

---
schema: wang-person/v1
id: p_f2n82AZGRQxqnKWUKJf6xc
status: active
merged_into: null
display_name: 王家銓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nTcEnDT9RKPArC2VSD5VWB
        subject_person_id: p_f2n82AZGRQxqnKWUKJf6xc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家銓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q8ocJk7ytvu92kv8MMAN8D
          claim_id: c_nTcEnDT9RKPArC2VSD5VWB
          source_id: s_DAgUBhVMiNDHUNm4Cueh4z
          stance: supports
          locator: CBDB:703801
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703801）
          source: &a1
            id: s_DAgUBhVMiNDHUNm4Cueh4z
            source_type: api_record
            title: 中国历代人物传记资料库：王家銓（CBDB 703801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703801&o=json
            external_identifier: CBDB:703801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.633Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FD51nYvMoQ9AVDK3ZbvM74
        subject_person_id: p_f2n82AZGRQxqnKWUKJf6xc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cHqjCRBsaAxSNj6gPp8mNW
          claim_id: c_FD51nYvMoQ9AVDK3ZbvM74
          source_id: s_DAgUBhVMiNDHUNm4Cueh4z
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_KMBVb9MHjEkzqJJWvZX1j_
        subject_person_id: p_f2n82AZGRQxqnKWUKJf6xc
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_wpW98L9DavmJtsuFPepTxe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x2VLS3w5tT4rxQWn8NMK1d
          claim_id: c_KMBVb9MHjEkzqJJWvZX1j_
          source_id: s_foUYZvdv4Y0W4N05CGDxAZ
          stance: supports
          locator: 平陰縣志，lgid=630889：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_foUYZvdv4Y0W4N05CGDxAZ
            source_type: api_record
            title: 中国历代人物传记资料库：夏氏(王家銓妻)（CBDB 703803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703803&o=json
            external_identifier: CBDB:703803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wpW98L9DavmJtsuFPepTxe
        status: active
        display_name: 夏氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王家銓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家銓 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_wpW98L9DavmJtsuFPepTxe | 夏氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王家銓（CBDB 703801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703801&o=json)
- [中国历代人物传记资料库：夏氏(王家銓妻)（CBDB 703803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703803&o=json)

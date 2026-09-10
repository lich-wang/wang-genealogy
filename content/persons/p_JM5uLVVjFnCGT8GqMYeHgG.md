---
schema: wang-person/v1
id: p_JM5uLVVjFnCGT8GqMYeHgG
status: active
merged_into: null
display_name: 王思文
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8ruh61bfcpEjoeV9FvSSFb
        subject_person_id: p_JM5uLVVjFnCGT8GqMYeHgG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GiSW5tLqUPE7qCmFfqjSVd
          claim_id: c_8ruh61bfcpEjoeV9FvSSFb
          source_id: s_j9V225NFTxf84D77up7qMa
          stance: supports
          locator: CBDB:25799
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25799）
          source: &a1
            id: s_j9V225NFTxf84D77up7qMa
            source_type: api_record
            title: 中国历代人物传记资料库：王思文（CBDB 25799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25799&o=json
            external_identifier: CBDB:25799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.922Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qos9iVp2EZFCDZi61ypbT2
        subject_person_id: p_JM5uLVVjFnCGT8GqMYeHgG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1134年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cUg9ZknjH7wTUGy63q66VL
          claim_id: c_qos9iVp2EZFCDZi61ypbT2
          source_id: s_j9V225NFTxf84D77up7qMa
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_uMTpmeMWnCt9w6FmhffEfh
        subject_person_id: p_JM5uLVVjFnCGT8GqMYeHgG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1212年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pXWu1oZ3nKz2vDEqVtgr8o
          claim_id: c_uMTpmeMWnCt9w6FmhffEfh
          source_id: s_j9V225NFTxf84D77up7qMa
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ffL8U53ZRZvDfPT63c3CzF
        subject_person_id: p_JM5uLVVjFnCGT8GqMYeHgG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WEGEf12jy2EKUnJYZcFFvt
          claim_id: c_ffL8U53ZRZvDfPT63c3CzF
          source_id: s_j9V225NFTxf84D77up7qMa
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KA4ceuhml8VhcjXoohyfQ4
        subject_person_id: p_18xP97xNdBDKv6dJygvfDQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JM5uLVVjFnCGT8GqMYeHgG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QPRurdV1FyXhdiPxx2mU_h
          claim_id: c_KA4ceuhml8VhcjXoohyfQ4
          source_id: s_a3jvJj3mziCfCqi2zx4GQS
          stance: supports
          locator: CBDB PersonKinshipInfo：父、子、孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: &a2
            id: s_a3jvJj3mziCfCqi2zx4GQS
            source_type: api_record
            title: 中国历代人物传记资料库：王迥（CBDB 25798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25798&o=json
            external_identifier: CBDB:25798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.922Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_18xP97xNdBDKv6dJygvfDQ
        status: active
        display_name: 王迥
        merged_into_person_id: null
  children:
    - claim:
        id: c_zXK8FBjK2IhO4v3ExP73WY
        subject_person_id: p_JM5uLVVjFnCGT8GqMYeHgG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2Jkre2P7zFsNsdRFraADue
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_caKPBpxArul3SkwhhpjqOT
          claim_id: c_zXK8FBjK2IhO4v3ExP73WY
          source_id: s_a3jvJj3mziCfCqi2zx4GQS
          stance: supports
          locator: CBDB PersonKinshipInfo：父、子、孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_2Jkre2P7zFsNsdRFraADue
        status: active
        display_name: 王夢龍
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王思文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思文 | accepted |
| birth.date | 1134年 | accepted |
| death.date | 1212年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_18xP97xNdBDKv6dJygvfDQ | 王迥 | accepted |
| children | p_2Jkre2P7zFsNsdRFraADue | 王夢龍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王迥（CBDB 25798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25798&o=json)
- [中国历代人物传记资料库：王思文（CBDB 25799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25799&o=json)

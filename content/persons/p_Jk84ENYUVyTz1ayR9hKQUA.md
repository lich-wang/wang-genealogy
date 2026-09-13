---
schema: wang-person/v1
id: p_Jk84ENYUVyTz1ayR9hKQUA
status: active
merged_into: null
display_name: 王鋀
cbdb_id: 281994
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zvpMkDK7GMEQVP4UvUWXe6
        subject_person_id: p_Jk84ENYUVyTz1ayR9hKQUA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鋀，明人物。正德十二年進士，籍贯潞州衛。（中国历代人物传记资料库 CBDB 281994）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_e75JArwSjHIJrpbwDCNDqO
          claim_id: c_zvpMkDK7GMEQVP4UvUWXe6
          source_id: s_LAwM7q4mMFQUN2pFQRi6Bz
          stance: supports
          locator: CBDB:281994
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LAwM7q4mMFQUN2pFQRi6Bz
            source_type: api_record
            title: 中国历代人物传记资料库：王鋀（CBDB 281994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281994&o=json
            external_identifier: CBDB:281994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_91zTCSGb2cvwynBnPzjTLX
        subject_person_id: p_Jk84ENYUVyTz1ayR9hKQUA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鋀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_mdH4SsfyVzFGxzM66Edvua
          claim_id: c_91zTCSGb2cvwynBnPzjTLX
          source_id: s_LAwM7q4mMFQUN2pFQRi6Bz
          stance: supports
          locator: CBDB:281994
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_TxpogaEAQuHTK8Gj-4PmAd
        subject_person_id: p_Jk84ENYUVyTz1ayR9hKQUA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_STyrVbhawRK5QNwptzbque
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qwGV6YIrq3rDaVIHI2OCol
          claim_id: c_TxpogaEAQuHTK8Gj-4PmAd
          source_id: s_LAwM7q4mMFQUN2pFQRi6Bz
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百三十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LAwM7q4mMFQUN2pFQRi6Bz
            source_type: api_record
            title: 中国历代人物传记资料库：王鋀（CBDB 281994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281994&o=json
            external_identifier: CBDB:281994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_STyrVbhawRK5QNwptzbque
        status: active
        display_name: 王泮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鋀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鋀，明人物。正德十二年進士，籍贯潞州衛。（中国历代人物传记资料库 CBDB 281994） | accepted |
| name.primary | 王鋀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_STyrVbhawRK5QNwptzbque | 王泮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鋀（CBDB 281994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281994&o=json)

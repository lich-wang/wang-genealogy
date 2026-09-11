---
schema: wang-person/v1
id: p_GWmCnmdFGoQr7AymHY2XmC
status: active
merged_into: null
display_name: 王煒
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kshRBoLJFKGC3hKMN7sPGj
        subject_person_id: p_GWmCnmdFGoQr7AymHY2XmC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nLQNJAwKhixYAJL6j8cPKs
          claim_id: c_kshRBoLJFKGC3hKMN7sPGj
          source_id: s_hE2e5uU37hDjDTwZ3Eqzxz
          stance: supports
          locator: CBDB:338289
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（338289）
          source: &a1
            id: s_hE2e5uU37hDjDTwZ3Eqzxz
            source_type: api_record
            title: 中国历代人物传记资料库：王煒（CBDB 338289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338289&o=json
            external_identifier: CBDB:338289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.542Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_tn2FF5KYdRwCFk3xz6ioNx
        subject_person_id: p_GWmCnmdFGoQr7AymHY2XmC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1626年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6SKVAGX58pN4JzRSPdXZXh
          claim_id: c_tn2FF5KYdRwCFk3xz6ioNx
          source_id: s_hE2e5uU37hDjDTwZ3Eqzxz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ExRc6X9LAvWKmG3PDAFE52
        subject_person_id: p_GWmCnmdFGoQr7AymHY2XmC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煒（生于1626年），清人物。籍贯歙縣，身份为理學家、經學家—易經。（中国历代人物传记资料库 CBDB 338289）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pou9ykRZOG6hZnD1n4Uo9M
          claim_id: c_ExRc6X9LAvWKmG3PDAFE52
          source_id: s_hE2e5uU37hDjDTwZ3Eqzxz
          stance: supports
          locator: CBDB:338289
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6x0LkIa1-J5jXVqEllL1Sv
        subject_person_id: p_2xx94qCKtvAJwRfCf9kETN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GWmCnmdFGoQr7AymHY2XmC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0kq5np8RUglwlm-ieXp2F1
          claim_id: c_6x0LkIa1-J5jXVqEllL1Sv
          source_id: s_21wnqbJZb2NGFGT5Xa6MPX
          stance: supports
          locator: "民國歙縣志: 十六卷，lgid=1163687：子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_21wnqbJZb2NGFGT5Xa6MPX
            source_type: api_record
            title: 中国历代人物传记资料库：王貫一（CBDB 577018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577018&o=json
            external_identifier: CBDB:577018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.965Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2xx94qCKtvAJwRfCf9kETN
        status: active
        display_name: 王貫一
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_-e0QgZhFQ5greS0Zc-hYWH
        subject_person_id: p_WfqvT7GG42fj9cjwnb4MYo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GWmCnmdFGoQr7AymHY2XmC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZtGgmLPxnDEsDc_1_mpit1
          claim_id: c_-e0QgZhFQ5greS0Zc-hYWH
          source_id: s_KoBqseYBWHQ6mQRVBU8w9E
          stance: supports
          locator: "民國歙縣志: 十六卷，lgid=1163687：孫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KoBqseYBWHQ6mQRVBU8w9E
            source_type: api_record
            title: 中国历代人物传记资料库：王龍山（CBDB 577017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577017&o=json
            external_identifier: CBDB:577017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.964Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WfqvT7GG42fj9cjwnb4MYo
        status: active
        display_name: 王龍山
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王煒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煒 | accepted |
| birth.date | 1626年 | accepted |
| bio.summary | 王煒（生于1626年），清人物。籍贯歙縣，身份为理學家、經學家—易經。（中国历代人物传记资料库 CBDB 338289） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2xx94qCKtvAJwRfCf9kETN | 王貫一 | accepted |
| ancestors | p_WfqvT7GG42fj9cjwnb4MYo | 王龍山 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貫一（CBDB 577018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577018&o=json)
- [中国历代人物传记资料库：王龍山（CBDB 577017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577017&o=json)
- [中国历代人物传记资料库：王煒（CBDB 338289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338289&o=json)

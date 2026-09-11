---
schema: wang-person/v1
id: p_f323eQKL5YoD7qUUbCDtT7
status: active
merged_into: null
display_name: 薛氏
cbdb_id: 45905
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qgWCmQdap3iVjWZKP5-kme
        subject_person_id: p_f323eQKL5YoD7qUUbCDtT7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 薛氏，王拱辰妻。维基数据以独立条目 Q45428395 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_uUHaFQuUGVucxmaGOp8C9O
          claim_id: c_qgWCmQdap3iVjWZKP5-kme
          source_id: s_TSxGMjwbFuiwR5Zn6EkafT
          stance: supports
          locator: Q45428395
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_TSxGMjwbFuiwR5Zn6EkafT
            source_type: api_record
            title: 维基数据：薛氏（Q45428395）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45428395
            external_identifier: Q45428395
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:07.031Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UHRrZw2XVrTMv6xC9MHj1r
        subject_person_id: p_f323eQKL5YoD7qUUbCDtT7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 薛氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NXEWQUMFBBbSuwjEJ5ueLE
          claim_id: c_UHRrZw2XVrTMv6xC9MHj1r
          source_id: s_KVMZ1KV24Xw9AmofgkjjNx
          stance: supports
          locator: Q45428395
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_KVMZ1KV24Xw9AmofgkjjNx
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：薛氏（45905）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45905&o=json
            external_identifier: CBDB:45905
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:07.179Z
            metadata_json: null
        - id: cs_rkm1QrNuS3bmmfhAGMcSy1
          claim_id: c_UHRrZw2XVrTMv6xC9MHj1r
          source_id: s_TSxGMjwbFuiwR5Zn6EkafT
          stance: supports
          locator: Q45428395
          quotation: null
          interpretation_note: null
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
        id: c_EbPwji18S4T4c5QDAUKa8o
        subject_person_id: p_Hy3oL9P7FfBor4frFk5Jm5
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_f323eQKL5YoD7qUUbCDtT7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DxVNvyfzwrmqJ3Qhkv1D4t
          claim_id: c_EbPwji18S4T4c5QDAUKa8o
          source_id: s_KaWCfUWNUAhuBv5aBM1qS9
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_KaWCfUWNUAhuBv5aBM1qS9
            source_type: api_record
            title: 维基数据：王拱辰（Q15932959）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15932959
            external_identifier: Q15932959
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:26.978Z
            metadata_json: null
        - id: cs_UCz7sg99x8eySNZtF2m7nY
          claim_id: c_EbPwji18S4T4c5QDAUKa8o
          source_id: s_ibHb7Z4nqpDXdLqQbGdB7v
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_ibHb7Z4nqpDXdLqQbGdB7v
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王拱辰（1847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1847&o=json
            external_identifier: CBDB:1847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:52.110Z
            metadata_json: null
        - id: cs_eB8Txrqf8JrmcAcZJF7j3v
          claim_id: c_EbPwji18S4T4c5QDAUKa8o
          source_id: s_TSxGMjwbFuiwR5Zn6EkafT
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_TSxGMjwbFuiwR5Zn6EkafT
            source_type: api_record
            title: 维基数据：薛氏（Q45428395）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45428395
            external_identifier: Q45428395
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:07.031Z
            metadata_json: null
      object_person:
        id: p_Hy3oL9P7FfBor4frFk5Jm5
        status: active
        display_name: 王拱辰
        merged_into_person_id: null
    - claim:
        id: c_Icsk86jYQ931rRDAmU4ugu
        subject_person_id: p_WU89T3dCoRMDk6eTHgawKb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_f323eQKL5YoD7qUUbCDtT7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mvbc3B68MoGhedzJ81kUw1
          claim_id: c_Icsk86jYQ931rRDAmU4ugu
          source_id: s_K58g1dFPD1BQpDPDwmjsyE
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1779;1782：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_K58g1dFPD1BQpDPDwmjsyE
            source_type: api_record
            title: 中国历代人物传记资料库：王拱辰（CBDB 1847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1847&o=json
            external_identifier: CBDB:1847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.336Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WU89T3dCoRMDk6eTHgawKb
        status: active
        display_name: 王拱辰
        merged_into_person_id: null
    - claim:
        id: c_qk5xuPWx_0lTh8nlkSUN2m
        subject_person_id: p_f323eQKL5YoD7qUUbCDtT7
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_WU89T3dCoRMDk6eTHgawKb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LG8te8GBUhbN36V9B7-2gI
          claim_id: c_qk5xuPWx_0lTh8nlkSUN2m
          source_id: s_KVMZ1KV24Xw9AmofgkjjNx
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1779;1782：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_WU89T3dCoRMDk6eTHgawKb
        status: active
        display_name: 王拱辰
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 薛氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 薛氏，王拱辰妻。维基数据以独立条目 Q45428395 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 薛氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Hy3oL9P7FfBor4frFk5Jm5 | 王拱辰 | accepted |
| spouses | p_WU89T3dCoRMDk6eTHgawKb | 王拱辰 | accepted |
| spouses | p_WU89T3dCoRMDk6eTHgawKb | 王拱辰 | accepted |

## 外部来源

- [维基数据：王拱辰（Q15932959）](https://www.wikidata.org/wiki/Q15932959)
- [维基数据：薛氏（Q45428395）](https://www.wikidata.org/wiki/Q45428395)
- [中国历代人物传记资料库：王拱辰（CBDB 1847）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1847&o=json)
- [CBDB 中国历代人物传记资料库：薛氏（45905）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45905&o=json)

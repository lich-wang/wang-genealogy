---
schema: wang-person/v1
id: p_a3GyCfQsaAPkPQhLi9t2Z8
status: active
merged_into: null
display_name: 李氏
cbdb_id: 154150
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4wXnkimbV2PesXoe9PaLPZ
        subject_person_id: p_a3GyCfQsaAPkPQhLi9t2Z8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏，王志悌妻。维基数据以独立条目 Q65805411 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_zp_UDal_ZRgOOfWr-okBzl
          claim_id: c_4wXnkimbV2PesXoe9PaLPZ
          source_id: s_ayizmqntTivBixJU5P1JqR
          stance: supports
          locator: Q65805411
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_ayizmqntTivBixJU5P1JqR
            source_type: api_record
            title: 维基数据：李氏（Q65805411）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65805411
            external_identifier: Q65805411
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:54.206Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NBPQpcGEnhtsuHd5DVh8Ac
        subject_person_id: p_a3GyCfQsaAPkPQhLi9t2Z8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Ekd2x2jZdbTbphqF1wV4oU
          claim_id: c_NBPQpcGEnhtsuHd5DVh8Ac
          source_id: s_ayizmqntTivBixJU5P1JqR
          stance: supports
          locator: Q65805411
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_vBCP3npWuzpcAtCNP9HrhY
          claim_id: c_NBPQpcGEnhtsuHd5DVh8Ac
          source_id: s_kFDbesSL1u6MpZteKAfmDA
          stance: supports
          locator: Q65805411
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_kFDbesSL1u6MpZteKAfmDA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：李氏（154150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154150&o=json
            external_identifier: CBDB:154150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:54.348Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_vvTps2KQMtPrvQNm7fq5sF
        subject_person_id: p_KXD6a4zaL9E1N69hTNkTMP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_a3GyCfQsaAPkPQhLi9t2Z8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_57LyeeVHTGURYHJKMHQtCN
          claim_id: c_vvTps2KQMtPrvQNm7fq5sF
          source_id: s_fA4yFEVkP128orqD5bJWNZ
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_fA4yFEVkP128orqD5bJWNZ
            source_type: api_record
            title: 维基数据：王志悌（Q45507893）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45507893
            external_identifier: Q45507893
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:45.495Z
            metadata_json: null
        - id: cs_qh81CBHUevU8MqAeHDH7JX
          claim_id: c_vvTps2KQMtPrvQNm7fq5sF
          source_id: s_zZdP9fY2WNPS2b17HTjS2G
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_zZdP9fY2WNPS2b17HTjS2G
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王志悌（140994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140994&o=json
            external_identifier: CBDB:140994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:45.649Z
            metadata_json: null
        - id: cs_qr57pN2WvrcErgtBcmWrFa
          claim_id: c_vvTps2KQMtPrvQNm7fq5sF
          source_id: s_ayizmqntTivBixJU5P1JqR
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_ayizmqntTivBixJU5P1JqR
            source_type: api_record
            title: 维基数据：李氏（Q65805411）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65805411
            external_identifier: Q65805411
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:54.206Z
            metadata_json: null
      object_person:
        id: p_KXD6a4zaL9E1N69hTNkTMP
        status: active
        display_name: 王志悌
        merged_into_person_id: null
    - claim:
        id: c_1705_ESTq-t7kiB99CtHjq
        subject_person_id: p_a3GyCfQsaAPkPQhLi9t2Z8
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_KXD6a4zaL9E1N69hTNkTMP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ujlRXPfQutXmFO-h6csnDK
          claim_id: c_1705_ESTq-t7kiB99CtHjq
          source_id: s_kFDbesSL1u6MpZteKAfmDA
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 190：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_KXD6a4zaL9E1N69hTNkTMP
        status: active
        display_name: 王志悌
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李氏，王志悌妻。维基数据以独立条目 Q65805411 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_KXD6a4zaL9E1N69hTNkTMP | 王志悌 | accepted |
| spouses | p_KXD6a4zaL9E1N69hTNkTMP | 王志悌 | accepted |

## 外部来源

- [维基数据：李氏（Q65805411）](https://www.wikidata.org/wiki/Q65805411)
- [维基数据：王志悌（Q45507893）](https://www.wikidata.org/wiki/Q45507893)
- [CBDB 中国历代人物传记资料库：李氏（154150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154150&o=json)
- [CBDB 中国历代人物传记资料库：王志悌（140994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140994&o=json)

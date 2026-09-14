---
schema: wang-person/v1
id: p_8anQvNHWgZmjr7kH33WSDn
status: active
merged_into: null
display_name: 劉氏
revision: 2
cbdb_id: 577084
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hen91D5SXJ-7sc3E_K26Ou
        subject_person_id: p_8anQvNHWgZmjr7kH33WSDn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏（996—1074），宋人物。籍贯祥符，曾任縣太君、郡太君。（中国历代人物传记资料库 CBDB 577084）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__gYOrVFVo-e6RBdByWahPA
          claim_id: c_hen91D5SXJ-7sc3E_K26Ou
          source_id: s_ma7O8FvVSAOgsJmEnYvizN
          stance: supports
          locator: CBDB:577084
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ma7O8FvVSAOgsJmEnYvizN
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王益柔母)（CBDB 577084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577084&o=json
            external_identifier: CBDB:577084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oJbSKTBqgmjy-m7KWWEU4i
        subject_person_id: p_8anQvNHWgZmjr7kH33WSDn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZZ4Rw5ve-mhqA8JKt1C1gp
          claim_id: c_oJbSKTBqgmjy-m7KWWEU4i
          source_id: s_ma7O8FvVSAOgsJmEnYvizN
          stance: supports
          locator: CBDB:577084
          quotation: null
          interpretation_note: CBDB 明确记录的王曙配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_CawV1TA82vI-KjBIppiX12
        subject_person_id: p_8anQvNHWgZmjr7kH33WSDn
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_bbnd1A9EEgUe5YEkwF6xeq
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LDCXUvYyeNrl1CNRSCvnr_
          claim_id: c_CawV1TA82vI-KjBIppiX12
          source_id: s_AWFgGe72lkIVskVcdB5v8u
          stance: supports
          locator: CBDB 亲属：母（KinPerson 577084）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_AWFgGe72lkIVskVcdB5v8u
            source_type: api_record
            title: 中国历代人物传记资料库：王益柔（CBDB 1828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1828&o=json
            external_identifier: CBDB:1828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bbnd1A9EEgUe5YEkwF6xeq
        status: active
        display_name: 王益柔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_vnHKqzmOOMy3yjXRtDqC1s
        subject_person_id: p_oXazvgZDCU1eQZ2UVAEZ4j
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8anQvNHWgZmjr7kH33WSDn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PJnM1jnAURzQWxzEnlDJDk
          claim_id: c_vnHKqzmOOMy3yjXRtDqC1s
          source_id: s_ma7O8FvVSAOgsJmEnYvizN
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王曙夫人劉氏墓誌：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oXazvgZDCU1eQZ2UVAEZ4j
        status: active
        display_name: 王曙
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 劉氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 劉氏（996—1074），宋人物。籍贯祥符，曾任縣太君、郡太君。（中国历代人物传记资料库 CBDB 577084） | accepted |
| name.primary | 劉氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_bbnd1A9EEgUe5YEkwF6xeq | 王益柔 | accepted |
| spouses | p_oXazvgZDCU1eQZ2UVAEZ4j | 王曙 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王益柔母)（CBDB 577084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577084&o=json)
- [中国历代人物传记资料库：王益柔（CBDB 1828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1828&o=json)

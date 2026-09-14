---
schema: wang-person/v1
id: p_QqHZ53bR3BD9L2PF2yyQK7
status: active
merged_into: null
display_name: 王金
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H3zDv9u9w1oGa8JjwfhLJP
        subject_person_id: p_QqHZ53bR3BD9L2PF2yyQK7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7fDDDL5FDhb7NTw8vZoRJK
          claim_id: c_H3zDv9u9w1oGa8JjwfhLJP
          source_id: s_zFiPFp1G28jaocM21n8Qpq
          stance: supports
          locator: CBDB:126582
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126582）
          source: &a1
            id: s_zFiPFp1G28jaocM21n8Qpq
            source_type: api_record
            title: 中国历代人物传记资料库：王金（CBDB 126582）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126582&o=json
            external_identifier: CBDB:126582
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.040Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fNgjnpq6x6HCkBXK8mvXKC
        subject_person_id: p_QqHZ53bR3BD9L2PF2yyQK7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1471年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AJcWQfcEBHurjGM9HQ64oS
          claim_id: c_fNgjnpq6x6HCkBXK8mvXKC
          source_id: s_zFiPFp1G28jaocM21n8Qpq
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
        id: c_dQDP26o2p4ZyD5zpA5pXdE
        subject_person_id: p_QqHZ53bR3BD9L2PF2yyQK7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1516年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NQR5wJf1Hr2MMcG22LEkuY
          claim_id: c_dQDP26o2p4ZyD5zpA5pXdE
          source_id: s_zFiPFp1G28jaocM21n8Qpq
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
        id: c_a5sVNeMG8D69nnEgnkjwjn
        subject_person_id: p_QqHZ53bR3BD9L2PF2yyQK7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金（1471年—1516年），明人物。明清進士進士，籍贯臨穎，入仕進士。（中国历代人物传记资料库 CBDB 126582）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_arCbL3LrgO3ooBPxZmMzLZ
          claim_id: c_a5sVNeMG8D69nnEgnkjwjn
          source_id: s_zFiPFp1G28jaocM21n8Qpq
          stance: supports
          locator: CBDB:126582
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__GONuyjXQU2mt_pORT2tCr
        subject_person_id: p_HKbjo82juGCBarv2Dg3zz9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QqHZ53bR3BD9L2PF2yyQK7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5d2ZcMFThKXlM-Wo_Bi45J
          claim_id: c__GONuyjXQU2mt_pORT2tCr
          source_id: s_Df2JuGWMMQ7nF6jfGSEbX3
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第五十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Df2JuGWMMQ7nF6jfGSEbX3
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 270323）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270323&o=json
            external_identifier: CBDB:270323
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.829Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HKbjo82juGCBarv2Dg3zz9
        status: active
        display_name: 王相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_-H1mFJBEF1RzOOBvRBLrmf
        subject_person_id: p_BrBNE8QWzGTMEn9mCryuuB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_QqHZ53bR3BD9L2PF2yyQK7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HdDltCFQPzboRZtz-ibJ15
          claim_id: c_-H1mFJBEF1RzOOBvRBLrmf
          source_id: s_kiLQEf2X2mYoq4Et9gU1Fk
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第五十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kiLQEf2X2mYoq4Et9gU1Fk
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 270322）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270322&o=json
            external_identifier: CBDB:270322
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.828Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BrBNE8QWzGTMEn9mCryuuB
        status: active
        display_name: 王璽
        merged_into_person_id: null
    - claim:
        id: c_P_fwT3PQp1k0Iqyj0YKvDV
        subject_person_id: p_VPr8RKf5bz7Zto2amdiRGg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_QqHZ53bR3BD9L2PF2yyQK7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ijGOuaxPJOWb4QM64RbYne
          claim_id: c_P_fwT3PQp1k0Iqyj0YKvDV
          source_id: s_GdX9RkMCm3B6TFsBy6PMGf
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第五十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GdX9RkMCm3B6TFsBy6PMGf
            source_type: api_record
            title: 中国历代人物传记资料库：王睿（CBDB 270321）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270321&o=json
            external_identifier: CBDB:270321
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.827Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VPr8RKf5bz7Zto2amdiRGg
        status: active
        display_name: 王睿
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_krmVaEyLrw0ibFVjEFsMhy
        subject_person_id: p_F8Ub5ENR4VC221i4zhUzPv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QqHZ53bR3BD9L2PF2yyQK7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D3LdL231wY947ECMfUGOVK
          claim_id: c_krmVaEyLrw0ibFVjEFsMhy
          source_id: s_KR29ytgQxNO7HmdqevswJY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126582 王金）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KR29ytgQxNO7HmdqevswJY
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 270327）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270327&o=json
            external_identifier: CBDB:270327
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_F8Ub5ENR4VC221i4zhUzPv
        status: active
        display_name: 王玉
        merged_into_person_id: null
    - claim:
        id: c_mJUBrt9iKe1bU8r5A8WUR1
        subject_person_id: p_Nak6xGpwbwYTAqsHvqXAi7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QqHZ53bR3BD9L2PF2yyQK7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pECOA225mq-XUJMce2ssGl
          claim_id: c_mJUBrt9iKe1bU8r5A8WUR1
          source_id: s_zIkvwzVUho1_6C0WS_z9-6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126582 王金）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zIkvwzVUho1_6C0WS_z9-6
            source_type: api_record
            title: 中国历代人物传记资料库：王休（CBDB 270331）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270331&o=json
            external_identifier: CBDB:270331
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Nak6xGpwbwYTAqsHvqXAi7
        status: active
        display_name: 王休
        merged_into_person_id: null
    - claim:
        id: c_Zmx1NWOOZQyIQ8_MapWbuE
        subject_person_id: p_QqHZ53bR3BD9L2PF2yyQK7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_b3o7c4w4d14TEvcZM5orX7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n64tENOP_qSnKR2pKhQo0g
          claim_id: c_Zmx1NWOOZQyIQ8_MapWbuE
          source_id: s_W_QlelMfkV-l150bXtlv4i
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126582 王金）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_W_QlelMfkV-l150bXtlv4i
            source_type: api_record
            title: 中国历代人物传记资料库：王迹（CBDB 270329）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270329&o=json
            external_identifier: CBDB:270329
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_b3o7c4w4d14TEvcZM5orX7
        status: active
        display_name: 王迹
        merged_into_person_id: null
    - claim:
        id: c_kzdP1YsubkTM5JIiE8Eiqv
        subject_person_id: p_QqHZ53bR3BD9L2PF2yyQK7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jLJFhnBtSBqKxxS1UeVkhT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7dwqa1fPnf22RWsfnYEB1l
          claim_id: c_kzdP1YsubkTM5JIiE8Eiqv
          source_id: s_Hl5MjPaKgfJciPgbnodmZP
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126582 王金）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Hl5MjPaKgfJciPgbnodmZP
            source_type: api_record
            title: 中国历代人物传记资料库：王業（CBDB 270330）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270330&o=json
            external_identifier: CBDB:270330
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jLJFhnBtSBqKxxS1UeVkhT
        status: active
        display_name: 王業
        merged_into_person_id: null
---

# 王金

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金 | accepted |
| birth.date | 1471年 | accepted |
| death.date | 1516年 | accepted |
| bio.summary | 王金（1471年—1516年），明人物。明清進士進士，籍贯臨穎，入仕進士。（中国历代人物传记资料库 CBDB 126582） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HKbjo82juGCBarv2Dg3zz9 | 王相 | accepted |
| ancestors | p_BrBNE8QWzGTMEn9mCryuuB | 王璽 | accepted |
| ancestors | p_VPr8RKf5bz7Zto2amdiRGg | 王睿 | accepted |
| other | p_F8Ub5ENR4VC221i4zhUzPv | 王玉 | accepted |
| other | p_Nak6xGpwbwYTAqsHvqXAi7 | 王休 | accepted |
| other | p_b3o7c4w4d14TEvcZM5orX7 | 王迹 | accepted |
| other | p_jLJFhnBtSBqKxxS1UeVkhT | 王業 | accepted |

## 外部来源

- [中国历代人物传记资料库：王迹（CBDB 270329）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270329&o=json)
- [中国历代人物传记资料库：王金（CBDB 126582）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126582&o=json)
- [中国历代人物传记资料库：王睿（CBDB 270321）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270321&o=json)
- [中国历代人物传记资料库：王璽（CBDB 270322）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270322&o=json)
- [中国历代人物传记资料库：王相（CBDB 270323）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270323&o=json)
- [中国历代人物传记资料库：王休（CBDB 270331）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270331&o=json)
- [中国历代人物传记资料库：王業（CBDB 270330）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270330&o=json)
- [中国历代人物传记资料库：王玉（CBDB 270327）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270327&o=json)

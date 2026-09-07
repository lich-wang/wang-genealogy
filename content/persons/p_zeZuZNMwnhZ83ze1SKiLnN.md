---
schema: wang-person/v1
id: p_zeZuZNMwnhZ83ze1SKiLnN
status: active
merged_into: null
display_name: 魏氏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q_c-Ls05GUhqt4En49WgP-
        subject_person_id: p_zeZuZNMwnhZ83ze1SKiLnN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 魏氏，王世貞妻。维基数据以独立条目 Q65833790 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_PzBZrwveMXyw0l5s0yL9x3
          claim_id: c_q_c-Ls05GUhqt4En49WgP-
          source_id: s_WM5MD2XjnKhW443gaANjGe
          stance: supports
          locator: Q65833790
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_WM5MD2XjnKhW443gaANjGe
            source_type: api_record
            title: 维基数据：魏氏（Q65833790）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65833790
            external_identifier: Q65833790
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:32.893Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_WyhFP4UsgVui6Br98FXh8G
        subject_person_id: p_zeZuZNMwnhZ83ze1SKiLnN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 魏氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Ponkh88Q3YLH4LZBHbadq4
          claim_id: c_WyhFP4UsgVui6Br98FXh8G
          source_id: s_s4udXjXLp9PL5w2fMFPSWd
          stance: supports
          locator: Q65833790
          quotation: null
          interpretation_note: null
          source:
            id: s_s4udXjXLp9PL5w2fMFPSWd
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：魏氏（309377）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309377&o=json
            external_identifier: CBDB:309377
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:33.024Z
            metadata_json: null
        - id: cs_b22EZoN81EEzRkdD7n2JAs
          claim_id: c_WyhFP4UsgVui6Br98FXh8G
          source_id: s_WM5MD2XjnKhW443gaANjGe
          stance: supports
          locator: Q65833790
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
        id: c_A49ikkEdu6XQ23dwMdJDHi
        subject_person_id: p_g5KSSBRpZ9iAzVfbXmLaWQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_zeZuZNMwnhZ83ze1SKiLnN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_MNnUQNq8FTHM5HZ4d8AL5Y
          claim_id: c_A49ikkEdu6XQ23dwMdJDHi
          source_id: s_76fbCaqkpYRJdb6E1UzNap
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖二十六年進士登科錄:一卷
          source:
            id: s_76fbCaqkpYRJdb6E1UzNap
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王世貞（34717）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34717&o=json
            external_identifier: CBDB:34717
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:44.815Z
            metadata_json: null
        - id: cs_rYiiyvnVXiztFNWgNH7ZKv
          claim_id: c_A49ikkEdu6XQ23dwMdJDHi
          source_id: s_PV6LjnAVB1mi771cCJQAMq
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_PV6LjnAVB1mi771cCJQAMq
            source_type: api_record
            title: 維基數據：王世贞（Q6127545）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q6127545
            external_identifier: Q6127545
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:50.038Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B8%96%E8%B4%9E
        - id: cs_zKtgt2F8xjLTmNVGqp9NF6
          claim_id: c_A49ikkEdu6XQ23dwMdJDHi
          source_id: s_WM5MD2XjnKhW443gaANjGe
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_WM5MD2XjnKhW443gaANjGe
            source_type: api_record
            title: 维基数据：魏氏（Q65833790）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65833790
            external_identifier: Q65833790
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:32.893Z
            metadata_json: null
        - id: cs_WEA5gEVGqkCQjFoycgALdZ
          claim_id: c_A49ikkEdu6XQ23dwMdJDHi
          source_id: s_s4udXjXLp9PL5w2fMFPSWd
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖二十六年進士登科錄:一卷
          source:
            id: s_s4udXjXLp9PL5w2fMFPSWd
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：魏氏（309377）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309377&o=json
            external_identifier: CBDB:309377
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:33.024Z
            metadata_json: null
        - id: cs_r1Sg59qDmuiU7oCJb5QpRt
          claim_id: c_A49ikkEdu6XQ23dwMdJDHi
          source_id: s_E6h9jdxebBKJtgq5x8chCs
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 娶魏氏，封淑人，贈夫人。
          interpretation_note: null
          source:
            id: s_E6h9jdxebBKJtgq5x8chCs
            source_type: website
            title: 中文维基百科：王世贞
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B8%96%E8%B4%9E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:13.415Z
            metadata_json: null
      object_person:
        id: p_g5KSSBRpZ9iAzVfbXmLaWQ
        status: active
        display_name: 王世贞
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 魏氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 魏氏，王世貞妻。维基数据以独立条目 Q65833790 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 魏氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_g5KSSBRpZ9iAzVfbXmLaWQ | 王世贞 | accepted |

## 外部来源

- [维基数据：魏氏（Q65833790）](https://www.wikidata.org/wiki/Q65833790)
- [維基數據：王世贞（Q6127545）](https://www.wikidata.org/wiki/Q6127545)
- [中文维基百科：王世贞](https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B8%96%E8%B4%9E)
- [CBDB 中国历代人物传记资料库：王世貞（34717）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34717&o=json)
- [CBDB 中国历代人物传记资料库：魏氏（309377）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309377&o=json)

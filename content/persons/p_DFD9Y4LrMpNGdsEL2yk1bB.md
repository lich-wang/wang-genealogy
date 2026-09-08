---
schema: wang-person/v1
id: p_DFD9Y4LrMpNGdsEL2yk1bB
status: active
merged_into: null
display_name: 蔺氏
cbdb_id: 313125
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_-BUU2K2MSolxuMiSlpoNBF
        subject_person_id: p_DFD9Y4LrMpNGdsEL2yk1bB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蔺氏，王正國妻。维基数据以独立条目 Q65837998 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_JAArk_G8Uzm0ye15QR-69s
          claim_id: c_-BUU2K2MSolxuMiSlpoNBF
          source_id: s_Z23K5nZcvjbhyABTS68u6n
          stance: supports
          locator: Q65837998
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_Z23K5nZcvjbhyABTS68u6n
            source_type: api_record
            title: 维基数据：蔺氏（Q65837998）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65837998
            external_identifier: Q65837998
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:37.127Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aWxuhHHBSfFRC4u4M3QQHk
        subject_person_id: p_DFD9Y4LrMpNGdsEL2yk1bB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蔺氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1ecfuND3N4eRwUEoiZ9vei
          claim_id: c_aWxuhHHBSfFRC4u4M3QQHk
          source_id: s_Kq9TcjLg7GiivZptdeXX9c
          stance: supports
          locator: Q65837998
          quotation: null
          interpretation_note: null
          source:
            id: s_Kq9TcjLg7GiivZptdeXX9c
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：藺氏（313125）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313125&o=json
            external_identifier: CBDB:313125
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:37.311Z
            metadata_json: null
        - id: cs_Fq3C7eTQMMh1zJyek7LBUm
          claim_id: c_aWxuhHHBSfFRC4u4M3QQHk
          source_id: s_Z23K5nZcvjbhyABTS68u6n
          stance: supports
          locator: Q65837998
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
        id: c_uLHybobtXJDPNKa2FV7Awt
        subject_person_id: p_DFD9Y4LrMpNGdsEL2yk1bB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_KbE3VYwBQk3rLuTGnVB2me
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dWWqp7Vj4NYWGR9gA8NaAW
          claim_id: c_uLHybobtXJDPNKa2FV7Awt
          source_id: s_GguxeCBrdagPeer4L2ZqV8
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_GguxeCBrdagPeer4L2ZqV8
            source_type: api_record
            title: 维基数据：王正国（Q16906097）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906097
            external_identifier: Q16906097
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:26.496Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%AD%A3%E5%9C%8B_(%E6%98%8E%E6%9C%9D)
        - id: cs_GjR3gfQW1ECMie3tJmwzFt
          claim_id: c_uLHybobtXJDPNKa2FV7Awt
          source_id: s_Z23K5nZcvjbhyABTS68u6n
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_CF7t4TpTosZWcFcyLNaW1q
          claim_id: c_uLHybobtXJDPNKa2FV7Awt
          source_id: s_wJQ9q7Y4YQiLfyFRrqDio9
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖二十九年進士登科錄:一卷
          source:
            id: s_wJQ9q7Y4YQiLfyFRrqDio9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王正國（68263）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68263&o=json
            external_identifier: CBDB:68263
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:26.658Z
            metadata_json: null
      object_person:
        id: p_KbE3VYwBQk3rLuTGnVB2me
        status: active
        display_name: 王正国
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 蔺氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 蔺氏，王正國妻。维基数据以独立条目 Q65837998 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 蔺氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_KbE3VYwBQk3rLuTGnVB2me | 王正国 | accepted |

## 外部来源

- [维基数据：蔺氏（Q65837998）](https://www.wikidata.org/wiki/Q65837998)
- [维基数据：王正国（Q16906097）](https://www.wikidata.org/wiki/Q16906097)
- [CBDB 中国历代人物传记资料库：藺氏（313125）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313125&o=json)
- [CBDB 中国历代人物传记资料库：王正國（68263）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68263&o=json)

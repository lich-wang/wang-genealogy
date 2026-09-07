---
schema: wang-person/v1
id: p_YKRPWtsAhfCYpnhsRzESTL
status: active
merged_into: null
display_name: 郑𫝬
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TnF2D8ac6tJQWn3WnmGc47
        subject_person_id: p_YKRPWtsAhfCYpnhsRzESTL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 郑𫝬，唐人物。CBDB 记录其籍贯记录为河南。中国历代人物传记资料库（CBDB）以人物编号 145488 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ChxVdt_Au-hoy4OCc5b5Sa
          claim_id: c_TnF2D8ac6tJQWn3WnmGc47
          source_id: s_vuYVyoVDLE8Nb79tt62NMd
          stance: supports
          locator: CBDB:145488
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_vuYVyoVDLE8Nb79tt62NMd
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：鄭嬇（145488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145488&o=json
            external_identifier: CBDB:145488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:21.619Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9X5tdCfVw2XMPRCjCD9ctb
        subject_person_id: p_YKRPWtsAhfCYpnhsRzESTL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 郑𫝬
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8m3XBk8WY3b8r2DAJwc45U
          claim_id: c_9X5tdCfVw2XMPRCjCD9ctb
          source_id: s_vuYVyoVDLE8Nb79tt62NMd
          stance: supports
          locator: Q45463331
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_Qap3QQKNXhQRm5D8MjnqT1
          claim_id: c_9X5tdCfVw2XMPRCjCD9ctb
          source_id: s_e2ohBR4xHDNSzJwiSFCmX3
          stance: supports
          locator: Q45463331
          quotation: null
          interpretation_note: null
          source:
            id: s_e2ohBR4xHDNSzJwiSFCmX3
            source_type: api_record
            title: 维基数据：郑𫝬（Q45463331）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45463331
            external_identifier: Q45463331
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:21.466Z
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
        id: c_jE9AFrbLDe67fvQwQYenZU
        subject_person_id: p_YKRPWtsAhfCYpnhsRzESTL
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_YTkrtC1SG3UCyQcRpy3dg3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_55RcijSd42fdatCqsQZu5Y
          claim_id: c_jE9AFrbLDe67fvQwQYenZU
          source_id: s_BG9ffhEZvcbCs6QsWWqsTw
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_BG9ffhEZvcbCs6QsWWqsTw
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綰（145389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145389&o=json
            external_identifier: CBDB:145389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:49.537Z
            metadata_json: null
        - id: cs_Q8NNkpXU8rqe7veK6wsHa5
          claim_id: c_jE9AFrbLDe67fvQwQYenZU
          source_id: s_C53tiXM1rEUxa17UogJ73G
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_C53tiXM1rEUxa17UogJ73G
            source_type: api_record
            title: 维基数据：王绾（Q45458523）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45458523
            external_identifier: Q45458523
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:49.386Z
            metadata_json: null
        - id: cs_kJC4tCK74NKbX67w4C5QPo
          claim_id: c_jE9AFrbLDe67fvQwQYenZU
          source_id: s_e2ohBR4xHDNSzJwiSFCmX3
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_e2ohBR4xHDNSzJwiSFCmX3
            source_type: api_record
            title: 维基数据：郑𫝬（Q45463331）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45463331
            external_identifier: Q45463331
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:21.466Z
            metadata_json: null
        - id: cs_SXFh1kGzNCGdrXGZmXZsjx
          claim_id: c_jE9AFrbLDe67fvQwQYenZU
          source_id: s_vuYVyoVDLE8Nb79tt62NMd
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_vuYVyoVDLE8Nb79tt62NMd
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：鄭嬇（145488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145488&o=json
            external_identifier: CBDB:145488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:21.619Z
            metadata_json: null
      object_person:
        id: p_YTkrtC1SG3UCyQcRpy3dg3
        status: active
        display_name: 王绾
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 郑𫝬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 郑𫝬，唐人物。CBDB 记录其籍贯记录为河南。中国历代人物传记资料库（CBDB）以人物编号 145488 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 郑𫝬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_YTkrtC1SG3UCyQcRpy3dg3 | 王绾 | accepted |

## 外部来源

- [维基数据：王绾（Q45458523）](https://www.wikidata.org/wiki/Q45458523)
- [维基数据：郑𫝬（Q45463331）](https://www.wikidata.org/wiki/Q45463331)
- [CBDB 中国历代人物传记资料库：王綰（145389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145389&o=json)
- [CBDB 中国历代人物传记资料库：鄭嬇（145488）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145488&o=json)

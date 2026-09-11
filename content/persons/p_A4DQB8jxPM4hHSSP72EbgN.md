---
schema: wang-person/v1
id: p_A4DQB8jxPM4hHSSP72EbgN
status: active
merged_into: null
display_name: 王任
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TPTe7wwsUZf3EZLPCJDFbP
        subject_person_id: p_A4DQB8jxPM4hHSSP72EbgN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王任
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AAcmVnw9S1XBcEQ8bYvwHC
          claim_id: c_TPTe7wwsUZf3EZLPCJDFbP
          source_id: s_fn8gqdmgeo5JPqtpGG2pZp
          stance: supports
          locator: CBDB:206037
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206037）
          source: &a1
            id: s_fn8gqdmgeo5JPqtpGG2pZp
            source_type: api_record
            title: 中国历代人物传记资料库：王任（CBDB 206037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206037&o=json
            external_identifier: CBDB:206037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9aetCYvfAEWwo6GEDZ6Stz
        subject_person_id: p_A4DQB8jxPM4hHSSP72EbgN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1552年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AdqhN4ExLcJETN8fMrmzzr
          claim_id: c_9aetCYvfAEWwo6GEDZ6Stz
          source_id: s_fn8gqdmgeo5JPqtpGG2pZp
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
        id: c_2wT5HAGH43rEjHsNeJsCvE
        subject_person_id: p_A4DQB8jxPM4hHSSP72EbgN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3KAamk15sxdfb5LgjHS3Ln
          claim_id: c_2wT5HAGH43rEjHsNeJsCvE
          source_id: s_fn8gqdmgeo5JPqtpGG2pZp
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
        id: c_jLkLfbDi7bto3KSDFLMdG-
        subject_person_id: p_pB9feMR4mAN6R6ug8Qd7tH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A4DQB8jxPM4hHSSP72EbgN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GJoXNHaI0k4rD_pmW9ZVqn
          claim_id: c_jLkLfbDi7bto3KSDFLMdG-
          source_id: s_fn8gqdmgeo5JPqtpGG2pZp
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pB9feMR4mAN6R6ug8Qd7tH
        status: active
        display_name: 王汝善
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_1u_12BUZJmW4En_B1mjn85
        subject_person_id: p_A4DQB8jxPM4hHSSP72EbgN
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_UvQvjvWrd9u9eqmRCcpgkg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xntj0mGFb-m9JKRjtqKw7L
          claim_id: c_1u_12BUZJmW4En_B1mjn85
          source_id: s_44QkaIx_Npv09m6rQ2a95z
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_44QkaIx_Npv09m6rQ2a95z
            source_type: api_record
            title: 中国历代人物传记资料库：汪氏(王任妻)（CBDB 212511）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212511&o=json
            external_identifier: CBDB:212511
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UvQvjvWrd9u9eqmRCcpgkg
        status: active
        display_name: 汪氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_nKUB1pT-qHT8GFflCHosbp
        subject_person_id: p_2HUXpkk9pxQEqgcQ9WG6J1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_A4DQB8jxPM4hHSSP72EbgN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_igZgXWYhdg-iLDX4VpSfD2
          claim_id: c_nKUB1pT-qHT8GFflCHosbp
          source_id: s_fn8gqdmgeo5JPqtpGG2pZp
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2HUXpkk9pxQEqgcQ9WG6J1
        status: active
        display_name: 王時迪
        merged_into_person_id: null
    - claim:
        id: c_a4AJj34jYkCiyVttxNwBd9
        subject_person_id: p_XkqnRRn8V45uAfqMav2HSb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_A4DQB8jxPM4hHSSP72EbgN
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oU7yJJY9JOYw0eWMRucT9-
          claim_id: c_a4AJj34jYkCiyVttxNwBd9
          source_id: s_fn8gqdmgeo5JPqtpGG2pZp
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XkqnRRn8V45uAfqMav2HSb
        status: active
        display_name: 王瑄
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王任

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王任 | accepted |
| birth.date | 1552年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pB9feMR4mAN6R6ug8Qd7tH | 王汝善 | accepted |
| spouses | p_UvQvjvWrd9u9eqmRCcpgkg | 汪氏 | accepted |
| ancestors | p_2HUXpkk9pxQEqgcQ9WG6J1 | 王時迪 | accepted |
| ancestors | p_XkqnRRn8V45uAfqMav2HSb | 王瑄 | accepted |

## 外部来源

- [中国历代人物传记资料库：汪氏(王任妻)（CBDB 212511）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212511&o=json)
- [中国历代人物传记资料库：王任（CBDB 206037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206037&o=json)

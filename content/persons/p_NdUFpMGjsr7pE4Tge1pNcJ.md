---
schema: wang-person/v1
id: p_NdUFpMGjsr7pE4Tge1pNcJ
status: active
merged_into: null
display_name: 孺子婴
cbdb_id: 339518
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fXkpCXav8ArD-Go5kz_P_3
        subject_person_id: p_NdUFpMGjsr7pE4Tge1pNcJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孺子婴，汉朝皇帝。维基数据以独立条目 Q7247 收录该人物。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_StcJoZAXflUzileeXBxam4
          claim_id: c_fXkpCXav8ArD-Go5kz_P_3
          source_id: s_Qme19FH6iyyzUMrWCbMrPu
          stance: supports
          locator: Q7247
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_Qme19FH6iyyzUMrWCbMrPu
            source_type: api_record
            title: 维基数据：孺子婴（Q7247）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7247
            external_identifier: Q7247
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:07.981Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%AD%BA%E5%AD%90%E5%A9%B4
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_91Qyhs7d221JXm9aQjjDoJ
        subject_person_id: p_NdUFpMGjsr7pE4Tge1pNcJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孺子婴
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9vBDMuPBQsYF6FB1PZp6Uj
          claim_id: c_91Qyhs7d221JXm9aQjjDoJ
          source_id: s_jGCMYvkkHCcGhtF8NFBHAE
          stance: supports
          locator: Q7247
          quotation: null
          interpretation_note: null
          source:
            id: s_jGCMYvkkHCcGhtF8NFBHAE
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：劉嬰（339518）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=339518&o=json
            external_identifier: CBDB:339518
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:08.143Z
            metadata_json: null
        - id: cs_GVSZ1KBPjzReFyuSonV3iF
          claim_id: c_91Qyhs7d221JXm9aQjjDoJ
          source_id: s_Qme19FH6iyyzUMrWCbMrPu
          stance: supports
          locator: Q7247
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
        id: c_2C4iKU73tSV5AFURVvUJWU
        subject_person_id: p_NdUFpMGjsr7pE4Tge1pNcJ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_wmuWBHvwUVcaLhe1AcvAnx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_tyYHRviNcYikeBU2T12Fac
          claim_id: c_2C4iKU73tSV5AFURVvUJWU
          source_id: s_UJGg1CBwru6HxpZBEK9hYa
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_UJGg1CBwru6HxpZBEK9hYa
            source_type: api_record
            title: 维基数据：王夫人（Q16077428）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077428
            external_identifier: Q16077428
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:51.883Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A4%AB%E4%BA%BA_(%E5%AD%BA%E5%AD%90%E5%A9%B4)
        - id: cs_CCEnMdef1titPMTwcT5Lc4
          claim_id: c_2C4iKU73tSV5AFURVvUJWU
          source_id: s_Qme19FH6iyyzUMrWCbMrPu
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_Qme19FH6iyyzUMrWCbMrPu
            source_type: api_record
            title: 维基数据：孺子婴（Q7247）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7247
            external_identifier: Q7247
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:07.981Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%AD%BA%E5%AD%90%E5%A9%B4
        - id: cs_xgqCFQMvztBH9xezjmzN6h
          claim_id: c_2C4iKU73tSV5AFURVvUJWU
          source_id: s_m8fD4uoAxpMS3edAfhwGFr
          stance: supports
          locator: 条文：条文识读（夫）
          quotation: 孺子婴成年后，王莽将这个孙女嫁给了孺子婴做妻子。
          interpretation_note: null
          source:
            id: s_m8fD4uoAxpMS3edAfhwGFr
            source_type: website
            title: 中文维基百科：王夫人 (孺子婴)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A4%AB%E4%BA%BA_(%E5%AD%BA%E5%AD%90%E5%A9%B4)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:08.133Z
            metadata_json: null
      object_person:
        id: p_wmuWBHvwUVcaLhe1AcvAnx
        status: active
        display_name: 王夫人
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 孺子婴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 孺子婴，汉朝皇帝。维基数据以独立条目 Q7247 收录该人物。 | accepted |
| name.primary | 孺子婴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_wmuWBHvwUVcaLhe1AcvAnx | 王夫人 | accepted |

## 外部来源

- [维基数据：孺子婴（Q7247）](https://www.wikidata.org/wiki/Q7247)
- [维基数据：王夫人（Q16077428）](https://www.wikidata.org/wiki/Q16077428)
- [中文维基百科：王夫人 (孺子婴)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A4%AB%E4%BA%BA_(%E5%AD%BA%E5%AD%90%E5%A9%B4))
- [CBDB 中国历代人物传记资料库：劉嬰（339518）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=339518&o=json)

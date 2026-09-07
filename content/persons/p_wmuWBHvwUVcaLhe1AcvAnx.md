---
schema: wang-person/v1
id: p_wmuWBHvwUVcaLhe1AcvAnx
status: active
merged_into: null
display_name: 王夫人
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PbuDBCkc8Rnfr6Sy8dHGJJ
        subject_person_id: p_wmuWBHvwUVcaLhe1AcvAnx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夫人，史料所见人物。本项目依据《王夫人》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_Uw6zb1T1JJ9-gFi__J_PSv
          claim_id: c_PbuDBCkc8Rnfr6Sy8dHGJJ
          source_id: s_UJGg1CBwru6HxpZBEK9hYa
          stance: supports
          locator: Q16077428
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AUMETRXP3moS7B7VDQe3oe
        subject_person_id: p_wmuWBHvwUVcaLhe1AcvAnx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夫人
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Wm5QwigSREBaJL8w7L23w3
          claim_id: c_AUMETRXP3moS7B7VDQe3oe
          source_id: s_UJGg1CBwru6HxpZBEK9hYa
          stance: supports
          locator: Q16077428
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_G8xx6FBSY6YPFwXugq2qgM
        subject_person_id: p_txEz4hCDRU7QsamZGm536K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wmuWBHvwUVcaLhe1AcvAnx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_BLqaHSTF4LQ73qyDeDJ82T
          claim_id: c_G8xx6FBSY6YPFwXugq2qgM
          source_id: s_kPy78YAH2rcamYu2JAoZan
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_kPy78YAH2rcamYu2JAoZan
            source_type: api_record
            title: 維基數據：王宇（Q11573020）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573020
            external_identifier: Q11573020
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:39.617Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%87_(%E6%B1%89%E6%9C%9D)
        - id: cs_Q4tuiNd5FvJr84Us2EQeBn
          claim_id: c_G8xx6FBSY6YPFwXugq2qgM
          source_id: s_UJGg1CBwru6HxpZBEK9hYa
          stance: supports
          locator: P22（父）
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
        - id: cs_Pv91YNNfKq2Am5BDaZUuKb
          claim_id: c_G8xx6FBSY6YPFwXugq2qgM
          source_id: s_zBw16Dixh2ok6KGjUkNyhS
          stance: supports
          locator: 条文：之子/之女
          quotation: 王夫人（{{bd|?||?||}}），孺子婴之妻，王莽的孙女、王莽长子王宇的女儿
          interpretation_note: null
          source:
            id: s_zBw16Dixh2ok6KGjUkNyhS
            source_type: website
            title: 中文维基百科：王夫人 (孺子婴)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A4%AB%E4%BA%BA_(%E5%AD%BA%E5%AD%90%E5%A9%B4)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:38.052Z
            metadata_json: null
        - id: cs_zuV5QgGhMqP8yVy2n8aeoj
          claim_id: c_G8xx6FBSY6YPFwXugq2qgM
          source_id: s_m8fD4uoAxpMS3edAfhwGFr
          stance: supports
          locator: 条文：之子/之女
          quotation: 王夫人，孺子婴之妻，王莽的孙女、王莽长子王宇的女儿
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
        id: p_txEz4hCDRU7QsamZGm536K
        status: active
        display_name: 王宇
        merged_into_person_id: null
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
        id: p_NdUFpMGjsr7pE4Tge1pNcJ
        status: active
        display_name: 孺子婴
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_miQZZ7wMdduJzvrYthe42M
        subject_person_id: p_ftTmaf71Kwzdeaet16S991
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wmuWBHvwUVcaLhe1AcvAnx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_x677wwGcRrrpYuSJaBfiWE
          claim_id: c_miQZZ7wMdduJzvrYthe42M
          source_id: s_m8fD4uoAxpMS3edAfhwGFr
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 王莽的孙女、王莽长子王宇的女儿。
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
        id: p_ftTmaf71Kwzdeaet16S991
        status: active
        display_name: 王莽
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王夫人

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王夫人，史料所见人物。本项目依据《王夫人》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王夫人 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_txEz4hCDRU7QsamZGm536K | 王宇 | accepted |
| spouses | p_NdUFpMGjsr7pE4Tge1pNcJ | 孺子婴 | accepted |
| ancestors | p_ftTmaf71Kwzdeaet16S991 | 王莽 | accepted |

## 外部来源

- [维基数据：孺子婴（Q7247）](https://www.wikidata.org/wiki/Q7247)
- [维基数据：王夫人（Q16077428）](https://www.wikidata.org/wiki/Q16077428)
- [維基數據：王宇（Q11573020）](https://www.wikidata.org/wiki/Q11573020)
- [中文维基百科：王夫人 (孺子婴)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A4%AB%E4%BA%BA_(%E5%AD%BA%E5%AD%90%E5%A9%B4))

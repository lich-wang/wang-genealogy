---
schema: wang-person/v1
id: p_7fe5vND92AGDntmCCHPH3k
status: active
merged_into: null
display_name: 王怿
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8_rLimVguO9g0HaGKGJWZ9
        subject_person_id: p_7fe5vND92AGDntmCCHPH3k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王怿（？—？），琅邪临沂（今山东省临沂市）人，东晋中外大都督、太傅、丞相、始兴文献公王导的孙子，督浙江东五郡、镇军将军、会稽内史、散骑常侍王荟的儿子，王廞的兄弟。 王怿是个白痴，不能分辨豆和麦，当时都认为他是殷道矜一类的人，没有肯与之通婚的。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_0dyKNsFdG6pQMSuIx1Cj-j
          claim_id: c_8_rLimVguO9g0HaGKGJWZ9
          source_id: s_UWFE-mQacTfxLvKCZEf-iO
          stance: supports
          locator: 导言
          quotation: 王怿（？—？），琅邪临沂（今山东省临沂市）人，东晋中外大都督、太
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_UWFE-mQacTfxLvKCZEf-iO
            source_type: website
            title: 中文维基百科：王怿
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%80%BF
            external_identifier: Q18118173
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-11T10:29:31.867Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CG7NPWXNYS5XqUfG8opgca
        subject_person_id: p_7fe5vND92AGDntmCCHPH3k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王怿
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_L6uHYbD5zx8YJ85JLbKzLJ
          claim_id: c_CG7NPWXNYS5XqUfG8opgca
          source_id: s_rojxgG2YrTFGQAfRUD1Q66
          stance: supports
          locator: Q18118173
          quotation: null
          interpretation_note: null
          source:
            id: s_rojxgG2YrTFGQAfRUD1Q66
            source_type: api_record
            title: 维基数据：王怿（Q18118173）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18118173
            external_identifier: Q18118173
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:02.510Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%80%BF
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hoAx74Vh44Rn9D8AM4zBQz
        subject_person_id: p_mN6xwY4N1ZxQsniBvsAB7c
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7fe5vND92AGDntmCCHPH3k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_KZP8GCQRHFj4JfGQE5rqB5
          claim_id: c_hoAx74Vh44Rn9D8AM4zBQz
          source_id: s_HkF6qnPuHvXQsX5bs81RBm
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_HkF6qnPuHvXQsX5bs81RBm
            source_type: api_record
            title: 維基數據：王薈（Q15921815）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15921815
            external_identifier: Q15921815
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:04.922Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%96%88
        - id: cs_5sH383sXKpdSDQZUNtpCQP
          claim_id: c_hoAx74Vh44Rn9D8AM4zBQz
          source_id: s_rojxgG2YrTFGQAfRUD1Q66
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_rojxgG2YrTFGQAfRUD1Q66
            source_type: api_record
            title: 维基数据：王怿（Q18118173）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18118173
            external_identifier: Q18118173
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:02.510Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%80%BF
      object_person:
        id: p_mN6xwY4N1ZxQsniBvsAB7c
        status: active
        display_name: 王薈
        merged_into_person_id: null
  children:
    - claim:
        id: c_NhipbGAk2sbyhcp79j5r4h
        subject_person_id: p_7fe5vND92AGDntmCCHPH3k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_boXUQkMyfs89398G3m7gdq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_gRCqX68Cu95vLfJCPw1CBx
          claim_id: c_NhipbGAk2sbyhcp79j5r4h
          source_id: s_rojxgG2YrTFGQAfRUD1Q66
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_rojxgG2YrTFGQAfRUD1Q66
            source_type: api_record
            title: 维基数据：王怿（Q18118173）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18118173
            external_identifier: Q18118173
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:02.510Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%80%BF
        - id: cs_DAeCNRaTL1Xw7unvdSju21
          claim_id: c_NhipbGAk2sbyhcp79j5r4h
          source_id: s_KaVG9x8PDXFMnAyL1ziy1F
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_KaVG9x8PDXFMnAyL1ziy1F
            source_type: api_record
            title: 维基数据：王琨（Q11572884）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572884
            external_identifier: Q11572884
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:45.206Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%A8_(%E5%8D%97%E6%9C%9D)
        - id: cs_9ebRLL8yVj4mudn47zwdu2
          claim_id: c_NhipbGAk2sbyhcp79j5r4h
          source_id: s_33B1CHtcLpr3Zy7PzXU1kp
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 王琨父親王懌愚蠢得不辨五穀
          interpretation_note: null
          source:
            id: s_33B1CHtcLpr3Zy7PzXU1kp
            source_type: website
            title: 中文维基百科：王琨 (南朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%A8_(%E5%8D%97%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:27:12.726Z
            metadata_json: null
        - id: cs_ngQ9gaH5ob9Af9EKtJ9V1x
          claim_id: c_NhipbGAk2sbyhcp79j5r4h
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王怿 → 王琨
          interpretation_note: null
          source:
            id: s_MGBoig692jprej3f8uiDi2
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:58:59.171Z
            metadata_json: null
        - id: cs_o1xT39KAqAN9XJ93xpaSzt
          claim_id: c_NhipbGAk2sbyhcp79j5r4h
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王怿 → 王琨
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
      object_person:
        id: p_boXUQkMyfs89398G3m7gdq
        status: active
        display_name: 王琨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王怿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王怿（？—？），琅邪临沂（今山东省临沂市）人，东晋中外大都督、太傅、丞相、始兴文献公王导的孙子，督浙江东五郡、镇军将军、会稽内史、散骑常侍王荟的儿子，王廞的兄弟。 王怿是个白痴，不能分辨豆和麦，当时都认为他是殷道矜一类的人，没有肯与之通婚的。 | accepted |
| name.primary | 王怿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mN6xwY4N1ZxQsniBvsAB7c | 王薈 | accepted |
| children | p_boXUQkMyfs89398G3m7gdq | 王琨 | accepted |

## 外部来源

- [维基数据：王琨（Q11572884）](https://www.wikidata.org/wiki/Q11572884)
- [维基数据：王怿（Q18118173）](https://www.wikidata.org/wiki/Q18118173)
- [維基數據：王薈（Q15921815）](https://www.wikidata.org/wiki/Q15921815)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王琨 (南朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%A8_(%E5%8D%97%E6%9C%9D))
- [中文维基百科：王怿](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%80%BF)

---
schema: wang-person/v1
id: p_48BB9G5rFGngD1z7yugBB9
status: active
merged_into: null
display_name: 王攸
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Foo8rlidZ7uy_LdtaqZiFy
        subject_person_id: p_48BB9G5rFGngD1z7yugBB9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王攸，史料所见人物。本项目依据《王攸》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_pajy2gPnlCyig-9pnMKUcI
          claim_id: c_Foo8rlidZ7uy_LdtaqZiFy
          source_id: s_8k1YrcbGt4jZKeJcY98o6y
          stance: supports
          locator: Q22814746
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_8k1YrcbGt4jZKeJcY98o6y
            source_type: api_record
            title: 维基数据：王攸（Q22814746）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814746
            external_identifier: Q22814746
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:56.458Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ASTSxLsrVBtsb3pARYht2Z
        subject_person_id: p_48BB9G5rFGngD1z7yugBB9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王攸
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2EvZoYrs6funMM7T2FhUVX
          claim_id: c_ASTSxLsrVBtsb3pARYht2Z
          source_id: s_8k1YrcbGt4jZKeJcY98o6y
          stance: supports
          locator: Q22814746
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fBT16Dx7jNVHBWAJLRvbC6
        subject_person_id: p_zzsFuAEs6JJ4EJkXaf48Mn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_48BB9G5rFGngD1z7yugBB9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_PCWgpfsX3QyQ4GZpPBmQRm
          claim_id: c_fBT16Dx7jNVHBWAJLRvbC6
          source_id: s_T9oFeHgKECyHSzfi1GR4bB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_T9oFeHgKECyHSzfi1GR4bB
            source_type: api_record
            title: 维基数据：王偃（Q11572909）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572909
            external_identifier: Q11572909
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:27.598Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%81%83
        - id: cs_VGer9V8nj85boD1F7bEhdZ
          claim_id: c_fBT16Dx7jNVHBWAJLRvbC6
          source_id: s_8k1YrcbGt4jZKeJcY98o6y
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8k1YrcbGt4jZKeJcY98o6y
            source_type: api_record
            title: 维基数据：王攸（Q22814746）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814746
            external_identifier: Q22814746
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:56.458Z
            metadata_json: null
        - id: cs_Lw99g4Pc3ixCnaf2UvDADD
          claim_id: c_fBT16Dx7jNVHBWAJLRvbC6
          source_id: s_5tLASNMeNdWKrBsKoxom8v
          stance: supports
          locator: 条文：王偃三子
          quotation: 王攸，王偃三子。
          interpretation_note: null
          source:
            id: s_5tLASNMeNdWKrBsKoxom8v
            source_type: website
            title: 中文维基百科：刘荣男
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%88%98%E8%8D%A3%E7%94%B7
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:08:14.501Z
            metadata_json: null
        - id: cs_HxQ1KayoYzCgLSG9a3Aabi
          claim_id: c_fBT16Dx7jNVHBWAJLRvbC6
          source_id: s_a2CTnxE4LwRuQ6x2sS3F4U
          stance: supports
          locator: 条文：王偃三子
          quotation: 王攸，王偃三子。
          interpretation_note: null
          source:
            id: s_a2CTnxE4LwRuQ6x2sS3F4U
            source_type: website
            title: 中文维基百科：刘荣男
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%88%98%E8%8D%A3%E7%94%B7
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:27.336Z
            metadata_json: null
        - id: cs_aPBWLsMSCxFLgXKuRpD7iz
          claim_id: c_fBT16Dx7jNVHBWAJLRvbC6
          source_id: s_GrAcQoc7HJWZm6dpgd5VkC
          stance: supports
          locator: 条文：王偃三子
          quotation: 王攸，王偃三子。
          interpretation_note: null
          source:
            id: s_GrAcQoc7HJWZm6dpgd5VkC
            source_type: website
            title: 中文维基百科：刘荣男
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%88%98%E8%8D%A3%E7%94%B7
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:28.058Z
            metadata_json: null
        - id: cs_HHcckHrDhBZ7Vj8b5PP9N1
          claim_id: c_fBT16Dx7jNVHBWAJLRvbC6
          source_id: s_md4kq9QQ7xb94G1zDWdTio
          stance: supports
          locator: 条文：王偃三子
          quotation: 王攸，王偃三子。
          interpretation_note: null
          source:
            id: s_md4kq9QQ7xb94G1zDWdTio
            source_type: website
            title: 中文维基百科：刘荣男
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%88%98%E8%8D%A3%E7%94%B7
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:57.457Z
            metadata_json: null
        - id: cs_L9ECAFKFecVHDf5HxybLJr
          claim_id: c_fBT16Dx7jNVHBWAJLRvbC6
          source_id: s_hrF9dJ9LLwnXJP1W8EkHYm
          stance: supports
          locator: 条文：王偃三子
          quotation: 王攸，王偃三子。
          interpretation_note: null
          source:
            id: s_hrF9dJ9LLwnXJP1W8EkHYm
            source_type: website
            title: 中文维基百科：刘荣男
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%88%98%E8%8D%A3%E7%94%B7
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:25.018Z
            metadata_json: null
      object_person:
        id: p_zzsFuAEs6JJ4EJkXaf48Mn
        status: active
        display_name: 王偃
        merged_into_person_id: null
  children:
    - claim:
        id: c_FKFHFFSeirfeVoBDWSS3Eb
        subject_person_id: p_48BB9G5rFGngD1z7yugBB9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vdsPZVFDu6uu9HcLUiGzWo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_yxWx4GW2A7pgmLDFYx8Q4H
          claim_id: c_FKFHFFSeirfeVoBDWSS3Eb
          source_id: s_8k1YrcbGt4jZKeJcY98o6y
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_8k1YrcbGt4jZKeJcY98o6y
            source_type: api_record
            title: 维基数据：王攸（Q22814746）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814746
            external_identifier: Q22814746
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:56.458Z
            metadata_json: null
        - id: cs_5YKJCjrb9n73CAPaepuQTv
          claim_id: c_FKFHFFSeirfeVoBDWSS3Eb
          source_id: s_LPRKxSnkjAdksMP14r5Wkj
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_LPRKxSnkjAdksMP14r5Wkj
            source_type: api_record
            title: 维基数据：王亮（Q11572903）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572903
            external_identifier: Q11572903
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:29.260Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BA%AE_(%E5%8D%97%E6%9C%9D)
        - id: cs_WhMaFa8y69k9PG8fWED8tB
          claim_id: c_FKFHFFSeirfeVoBDWSS3Eb
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王攸 → 王亮
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
        - id: cs_pFATyPVferTtG4XCyuQa9d
          claim_id: c_FKFHFFSeirfeVoBDWSS3Eb
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王攸 → 王亮
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
        - id: cs_cL4rH54mTnCPdFgqbVQd23
          claim_id: c_FKFHFFSeirfeVoBDWSS3Eb
          source_id: s_GJbx2t6HVns7rAQw4jZtDx
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 父王攸，曾任南朝宋太宰中郎，赠给事黄门侍郎。
          interpretation_note: null
          source:
            id: s_GJbx2t6HVns7rAQw4jZtDx
            source_type: website
            title: 中文维基百科：王亮 (南朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BA%AE_(%E5%8D%97%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:52.061Z
            metadata_json: null
      object_person:
        id: p_vdsPZVFDu6uu9HcLUiGzWo
        status: active
        display_name: 王亮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王攸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王攸，史料所见人物。本项目依据《王攸》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王攸 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zzsFuAEs6JJ4EJkXaf48Mn | 王偃 | accepted |
| children | p_vdsPZVFDu6uu9HcLUiGzWo | 王亮 | accepted |

## 外部来源

- [维基数据：王亮（Q11572903）](https://www.wikidata.org/wiki/Q11572903)
- [维基数据：王偃（Q11572909）](https://www.wikidata.org/wiki/Q11572909)
- [维基数据：王攸（Q22814746）](https://www.wikidata.org/wiki/Q22814746)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：刘荣男](https://zh.wikipedia.org/wiki/%E5%88%98%E8%8D%A3%E7%94%B7)
- [中文维基百科：王亮 (南朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BA%AE_(%E5%8D%97%E6%9C%9D))
